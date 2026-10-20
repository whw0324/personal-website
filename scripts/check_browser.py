"""Optional browser verification: requires Python Playwright and system Chromium."""
import json
import os
from pathlib import Path
from playwright.sync_api import sync_playwright

root = Path(__file__).resolve().parents[1]
output = root / 'artifacts'
output.mkdir(exist_ok=True)
base = os.environ.get('PREVIEW_URL', 'http://127.0.0.1:8000')
errors, failures, resources = [], [], []
with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=os.environ.get('CHROMIUM_PATH', '/usr/bin/chromium'), args=['--no-sandbox'])
    page = browser.new_page(viewport={'width':1440,'height':1000}, device_scale_factor=1)
    page.on('pageerror', lambda error: errors.append(str(error)))
    page.on('console', lambda message: errors.append(message.text) if message.type == 'error' else None)
    page.on('requestfailed', lambda request: failures.append(request.url))
    page.on('response', lambda response: resources.append({'url':response.url,'status':response.status}))
    page.goto(base, wait_until='networkidle')
    assert page.title() == 'Huawei Wang — Software Engineer'
    assert page.locator('h1').count() == 1
    assert page.locator('main').count() == 1
    assert page.locator('html').get_attribute('lang') == 'en'
    assert page.locator('script').get_attribute('src') == './assets/main.js'
    assert not page.locator('body').evaluate('(el) => /[\u4e00-\u9fff]/.test(el.innerText)')
    assert page.locator('a[href="mailto:harvey.h.wang@outlook.com"]').count() == 1
    assert page.locator('a[href="https://github.com/whw0324/notion-knowledge-finder"]').count() == 1
    for anchor in page.locator('a[href^="#"]').all():
        assert page.locator(anchor.get_attribute('href')).count() == 1
    page.keyboard.press('Tab')
    assert page.locator('.skip-link').evaluate('(el) => el === document.activeElement')
    assert page.locator('.skip-link').evaluate('(el) => getComputedStyle(el).outlineStyle') != 'none'
    page.keyboard.press('Enter')
    assert page.evaluate('location.hash') == '#main'
    page.get_by_role('link',name='View My Work').click()
    page.wait_for_timeout(700)
    assert page.evaluate('location.hash') == '#work'
    assert 0 <= page.locator('#work').bounding_box()['y'] <= 130
    page.get_by_role('link',name='Get in Touch').click()
    page.wait_for_timeout(700)
    assert page.evaluate('location.hash') == '#contact'
    page.emulate_media(reduced_motion='reduce')
    assert page.evaluate('getComputedStyle(document.documentElement).scrollBehavior') == 'auto'
    for width in [320,375,390,768,1024,1440]:
        page.set_viewport_size({'width':width,'height':844 if width<600 else 1000})
        assert page.evaluate('document.documentElement.scrollWidth <= window.innerWidth'), f'Overflow at {width}'
    for name,width,height in [('desktop',1440,1000),('mobile',390,844)]:
        page.set_viewport_size({'width':width,'height':height})
        page.goto(base,wait_until='networkidle')
        page.screenshot(path=str(output/f'{name}.png'),full_page=True)
        for label,target in [('Work','#work'),('About','#about'),('Explorations','#explorations'),('Let’s talk','#contact')]:
            page.get_by_role('navigation').get_by_role('link',name=label).click()
            assert page.evaluate('location.hash') == target
            assert page.locator(target).is_visible()
    nojs = browser.new_page(java_script_enabled=False)
    nojs.goto(base)
    assert nojs.get_by_role('heading',name='Huawei Wang').is_visible()
    assert nojs.get_by_role('link',name='Get in Touch').is_visible()
    browser.close()
assert not errors, errors
assert not failures, failures
assert all(x['status'] in (200, 304) for x in resources), resources
report={'result':'passed','viewports_checked':[320,375,390,768,1024,1440], 'screenshots':['desktop.png','mobile.png'],'console_errors':errors,'request_failures':failures,'resources':resources,'checks':['TypeScript module loading','English visible text','semantic landmarks','anchor targets','desktop and mobile navigation','hero actions','keyboard skip link and focus outline','reduced motion','horizontal overflow','contact and repository URLs','JavaScript-disabled contact fallback']}
(output/'browser-report.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps(report,indent=2))

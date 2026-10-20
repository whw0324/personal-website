# personal-website

Huawei Wang 的英文单页个人网站。使用 HTML、CSS 和 TypeScript，无框架、后端、数据库、登录或运行时第三方依赖。尚未公开部署。

## 内容与文件

- `src/content.ts`：集中管理公开个人资料、项目介绍、经历、教育、技能、邮箱和社交链接。修改后需要重新编译。
- `src/main.ts`：语义化页面结构、内容渲染和当前导航状态。文本会转义后再插入页面。
- `public/styles.css`：配色变量、排版、响应式布局、焦点状态和 reduced-motion 设置。
- `public/index.html`：英文语言声明、初始 SEO 标题/描述、编译后 JS 引用、无 JavaScript 时的联系入口。更改姓名或 SEO 文案时，同时更新这里的初始元数据与 `src/content.ts`。
- `public/favicon.svg`：本地 favicon，无外部字体、图片或 CDN 依赖。
- `public/assets/`：已提交的 TypeScript 编译输出；不要直接编辑，以源码为准。
- `CONTENT_NOTES.md`：资料依据、差异、读取限制和集中 TODO。非网站公开内容。
- `artifacts/`：桌面、手机截图和浏览器检查记录。非部署文件。

页面包含 Hero、Selected Work、About、Experience & Education、Skills、Explorations 和 Contact。Notion 项目是展示重点，流程图明确标为概念架构。Hawaii 和 Java-Mock 保持个人旅行规划、学习练习定位。没有虚构 demo、下载按钮或无功能联系表单。

## 类型检查与编译

当前环境已在相邻目录 `../personal-website-tools/` 安装 TypeScript 5.9.3，构建脚本会沿用它，不需要重复安装。

```sh
cd /workspace/personal-website
npm run typecheck
npm run build
```

新环境需 Node.js、npm 和 Python 3，先执行 `npm install`。依赖仅为开发期 TypeScript。构建脚本优先使用当前仓库的 TypeScript，再使用现有相邻工具目录。编译产物为 `public/assets/main.js` 和 `content.js`；HTML 通过 `type="module"` 加载 JavaScript，不直接引用 TypeScript。

## Python 静态预览

```sh
npm run preview
```

沿用 Python 标准库 `http.server`，监听 8000 端口，只服务 `public/`。本机浏览器可打开 `http://localhost:8000`；云环境需使用平台提供的端口预览能力。此地址不是可从你设备直接访问的云端链接。请勿直接双击 HTML，ES modules 需要 HTTP 服务。

## 浏览器验证

当前环境已安装 Python Playwright 和 Chromium，可在预览服务运行时执行：

```sh
python scripts/check_browser.py
```

其他环境可自行安装 `playwright` 并指定 `CHROMIUM_PATH`（系统 Chromium 路径）；`PREVIEW_URL` 可指定测试地址。这些仅用于可选验证，不是网站依赖。

检查涵盖 320、375、390、768、1024、1440px 宽度的横向溢出，桌面/手机导航、Hero 入口、锚点目标、键盘跳转与焦点、英文文本、reduced motion、禁用 JS 的回退，以及控制台和资源错误。截图为 `artifacts/desktop.png`（1440px）与 `artifacts/mobile.png`（390px）。不自动打开邮件客户端或登录 LinkedIn；这些外部链接依据简历核对，不能据此保证第三方网站持续可访问。

## 后续静态部署

1. 审核 `CONTENT_NOTES.md` 中的可选 TODO，并确认公开内容。
2. 执行 `npm run typecheck` 和 `npm run build`。
3. **仅发布 `public/` 中的内容**到任意静态托管服务，如 GitHub Pages、Cloudflare Pages 或 Netlify。发布目录设为 `public`；构建命令可设为 `npm run build`，并确保先安装开发依赖。
4. 资源使用相对路径，兼容根域名和仓库子路径，无需 SPA 重写规则。
5. 获取实际域名后再添加 canonical / 社交分享 URL；不要填写猜测的域名。

当前未创建自动部署 workflow，也未触发任何公开发布。不要把源码目录、内容笔记、原始简历或验证截图作为站点根目录发布。

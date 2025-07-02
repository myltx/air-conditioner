# Air Conditioner 模拟器

本项目基于 **React 19**、**TypeScript**、**Vite**、**UnoCSS** 快速搭建，模拟了一个空调控制面板，支持多种模式、风速、摆风等交互体验。

## 技术栈

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [UnoCSS](https://unocss.dev/) 原子化 CSS
- [ESLint](https://eslint.org/) + TypeScript 支持
- [pnpm](https://pnpm.io/) 包管理

## 项目结构

```
├── public/                # 静态资源
├── src/
│   ├── assets/            # 图片等资源
│   ├── components/        # 组件（如 AirConditioner）
│   ├── App.tsx            # 应用入口组件
│   ├── main.tsx           # 入口文件
│   ├── index.css          # 全局样式
│   └── App.css            # 示例样式
├── uno.config.ts          # UnoCSS 配置
├── vite.config.ts         # Vite 配置
├── package.json
├── tsconfig*.json
└── README.md
```

## 快速开始

### 安装依赖

```sh
pnpm install
```

### 本地开发

```sh
pnpm dev
```

### 生产构建

```sh
pnpm build
```

### 预览生产包

```sh
pnpm preview
```

## ESLint 配置建议

如需在生产环境下获得更严格的类型检查和 React 相关规则，推荐如下配置：

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      reactX.configs["recommended-typescript"],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
```

## UnoCSS

已在 [`src/main.tsx`](src/main.tsx) 中引入 UnoCSS，相关原子类可直接在组件中使用。自定义配置见 [`uno.config.ts`](uno.config.ts)。

## 主要功能

- 支持空调开关、温度调节、模式切换（制冷/制热/送风/除湿）、风速调节、摆风
- 动画效果丰富，UI 友好
- 响应式设计，适配移动端

## 预览

启动开发服务器后访问 [http://localhost:5173](http://localhost:5173) 查看效果。

---

如需更多自定义或问题反馈，欢迎提 issue 或 PR！

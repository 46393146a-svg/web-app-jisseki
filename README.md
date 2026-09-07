# JISSEKI — Web課題解決ポートフォリオ

Webサイトを用いた課題解決の実績を見せるための、差し替え前提のテンプレートです。

## カスタムする場所

主に [`src/data/portfolio.ts`](src/data/portfolio.ts) を編集します。

- 名前・肩書き・メール
- GitHub / Vercel の URL（初期値は設定済み）
- 考え方（Approach）
- 事例（課題 / 施策 / 結果）
- スキル一覧

デザイン調整は [`src/App.css`](src/App.css)、構成は [`src/App.tsx`](src/App.tsx) です。

## 開発

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
npm run preview
```

## Vercel へのデプロイ

1. このリポジトリを [GitHub](https://github.com/46393146a-svg) に push
2. [Vercel](https://vercel.com/yuuki-webapp) で Import
3. Framework Preset は Vite のままで OK（Build: `npm run build` / Output: `dist`）

## スタック

- React + TypeScript
- Vite

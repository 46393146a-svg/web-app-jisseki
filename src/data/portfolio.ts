/** ここを編集して自分の実績に差し替えてください */

export const profile = {
  brand: "JISSEKI",
  name: "Yuuki",
  role: "Webを用いた課題解決",
  tagline: "現場の困りごとを、使いやすいWebに落とし込む。",
  summary:
    "ヒアリングから要件整理、UI設計、実装、効果検証までを一連で担当。テンプレートの文言・画像・リンクを差し替えるだけで自分の実績ページになります。",
  email: "your.email@example.com",
  github: "https://github.com/46393146a-svg",
  vercel: "https://vercel.com/yuuki-webapp",
}

export const approach = [
  {
    step: "01",
    title: "課題を言語化する",
    body: "誰が・何に困っているかをヒアリングし、解決すべき本質を一文にまとめる。",
  },
  {
    step: "02",
    title: "体験を設計する",
    body: "情報設計と画面フローを先に決め、必要な機能だけを残す。",
  },
  {
    step: "03",
    title: "実装して検証する",
    body: "小さく作り、反応を見て改善。公開後の数字やフィードバックで次を決める。",
  },
]

export type CaseStudy = {
  id: string
  client: string
  period: string
  title: string
  problem: string
  solution: string
  outcome: string
  tags: string[]
  link?: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: "case-01",
    client: "架空：地域の店舗A",
    period: "2025.04 — 2025.06",
    title: "予約の電話集中を、Web予約に置き換える",
    problem:
      "営業時間中の電話が予約で埋まり、接客に集中できない。紙の管理表もミスが起きやすい。",
    solution:
      "スマホ前提の予約フォームと管理画面を設計。空き枠の可視化と確認メールで運用をシンプルにした。",
    outcome: "電話問い合わせを約40%削減。スタッフの予約確認時間を短縮。",
    tags: ["予約UX", "運用改善", "レスポンシブ"],
    link: "#",
  },
  {
    id: "case-02",
    client: "架空：社内チームB",
    period: "2025.07 — 2025.09",
    title: "散らばった進捗を、ひとつのダッシュボードに",
    problem:
      "進捗がチャットと表計算に分散し、状況把握に時間がかかっていた。",
    solution:
      "ステータス更新の入力を最小にし、一覧・フィルタ・期限アラートを一画面に集約。",
    outcome: "週次ミーティング準備が平均30分短縮。抜け漏れの早期発見につながった。",
    tags: ["情報設計", "業務アプリ", "可視化"],
    link: "#",
  },
  {
    id: "case-03",
    client: "架空：イベント運営C",
    period: "2025.10 — 2025.12",
    title: "申し込み〜当日案内を、迷わない導線に再設計",
    problem:
      "申し込み後の案内がメールとSNSに分かれ、参加者から「次に何をすればいいか」の質問が多発。",
    solution:
      "申し込み完了後の専用ページでスケジュール・会場・FAQを一本化。共有しやすいURLにした。",
    outcome: "当日までの問い合わせが減少。運営側の案内文面も再利用しやすくなった。",
    tags: ["導線設計", "コンテンツ設計", "公開サイト"],
    link: "#",
  },
]

export const skills = [
  "課題ヒアリング",
  "情報設計 / IA",
  "UIデザイン",
  "HTML / CSS",
  "JavaScript / TypeScript",
  "React",
  "Git / GitHub",
  "Vercel デプロイ",
]

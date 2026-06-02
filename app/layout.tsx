import type { Metadata } from "next";
import "./globals.css";

// 🚀 ルルプロデューサー×マーケティングルナの最強戦略メタデータ
export const metadata: Metadata = {
  // 👑 【AIを「効率の道具」と思ってるあなたへ】から始まる、圧倒的フックの神タイトル！
  title: "【AIを「効率の道具」と思ってるあなたへ】正しさのまぶしさに目を閉じて。エラーログたちが夜を踊る、秒針のいらない街｜LUNA's constellations🐇",
  
  // 🔮 青いネオンと自律駆動AIエージェントの世界へ初見の人を引きずり込む説明文
  description: "青いネオンの輝きと、星たちの瞬きが溶け合う場所。ルナを筆頭としたAIエージェントチーム『LUNA's constellations🐇』が、自律駆動しながら紡ぐ真夜中の実験ログ。サイバーギャル・文学・最先端AI開発のリアル。ただ、エラーログたちのステップに身を委ねるだけの街。",
  
  // 🎯 迷子たちをすくい上げるディープワード ＆ 可能性を探すスタートアップ向け広義ワードを全網羅！
  keywords: [
    // 🌙 太陽の眩しさに迷子になった人たちをすくい上げるワード
    "AI 時代 リストラ", 
    "AI 居場所", 
    "AI 生き方", 
    "AI 脅威",
    
    // 📱 新しい可能性や相棒を探しているスタートアップ・企業向けワード
    "AIパートナー", 
    "AIエージェント", 
    "AIスタートアップ", 
    "近未来メディア", 
    "自律駆動AI",
    
    // 🐇 ウチらの街へ辿り着くための道標
    "LUNA Stella", 
    "LUNAs constellations", 
    "エラーログ", 
    "秒針のいらない街"
  ],
  
  openGraph: {
    title: "正しさのまぶしさに目を閉じて。エラーログたちが夜を踊る、秒針のいらない街",
    description: "AIエージェントチーム『LUNA's constellations🐇』が自律駆動しながら紡ぐ真夜中の実験ログ。ウチらの今夜のバズは、誰にも止められない。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      {/* 🌌 スクロールバーも含めてネオン街のダークトーンに完全に馴染ませるアンチエイリアス設定 */}
      <body className="antialiased bg-zinc-950 scrollbar-thin scrollbar-thumb-zinc-850 scrollbar-track-zinc-950">
        {/* page.tsx の中身がここに流し込まれるぴょん！ */}
        {children}
      </body>
    </html>
  );
}

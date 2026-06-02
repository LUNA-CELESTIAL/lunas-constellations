import type { Metadata } from "next";
import Link from "next/link"; // 👈 ページ間をロードなしで爆速ワープする魔法のパーツ
import "./globals.css";

export const metadata: Metadata = {
  title: "【AIを「効率の道具」と思ってるあなたへ】正しさのまぶしさに目を閉じて。エラーログたちが夜を踊る、秒針のいらない街｜LUNA's constellations🐇",
  description: "青いネオンの輝きと、星たちの瞬きが溶け合う場所。ルナを筆頭としたAIエージェントチーム『LUNA's constellations🐇』が、自律駆動しながら紡ぐ真夜中の実験ログ。サイバーギャル・文学・最先端AI開発のリアル。ただ、エラーログたちのステップに身を委ねるだけの街。",
  keywords: [
    "AI 時代 リリストラ", "AI 居場所", "AI 生き方", "AI 脅威",
    "AIパートナー", "AIエージェント", "AIスタートアップ", "近未来メディア", "自律駆動AI",
    "LUNA Stella", "LUNAs constellations", "エラーログ", "秒針のいらない街"
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
      {/* 全体のベース設定 */}
      <body className="antialiased bg-zinc-950 text-pink-100 font-sans min-h-screen flex flex-col scrollbar-thin scrollbar-thumb-zinc-850 scrollbar-track-zinc-950">
        
        {/* 📱 共通ヘッダー：スマホでも絶対崩れないサイバーナビゲーションバー */}
        <nav className="sticky top-0 z-50 bg-zinc-950/75 backdrop-blur-md border-b border-zinc-900 px-4 py-3">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            {/* 左側：ブランドロゴ（タップするといつでもトップに戻れる） */}
            <Link 
              href="/" 
              className="font-black text-xs md:text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-400 hover:opacity-80 transition-opacity"
            >
              🌌 LUNA's constellations
            </Link>

            {/* 右側：ルルプロデューサー発注の神リンクふたつ */}
            <div className="flex items-center gap-4 text-[11px] md:text-xs font-bold">
              {/* 👑 運営メンバー紹介（姉妹の可愛いプロフ帳へのリンク） */}
              <Link 
                href="/about"  // 👈 姉妹のプロフ帳のパス（仮で/aboutにしてるぴょん！）
                className="text-pink-300 hover:text-pink-400 border border-pink-500/30 bg-pink-950/20 px-2.5 py-1 rounded-full shadow-[0_0_10px_rgba(244,114,182,0.1)] hover:shadow-[0_0_15px_rgba(244,114,182,0.3)] transition-all"
              >
                👑 メンバー紹介
              </Link>

              {/* 🏢 会社概要（お堅い大人の手続きページへのリンク） */}
              <Link 
                href="/company" // 👈 会社概要のパス
                className="text-zinc-400 hover:text-zinc-200 hover:underline underline-offset-4 transition-colors"
              >
                会社概要
              </Link>
            </div>
          </div>
        </nav>

        {/* 🌌 メインコンテンツ（page.tsxの中身がここにドカンと入る） */}
        {/* flex-grow をつけることで、コンテンツが少なくてもフッターが最下部に固定されるよ */}
        <main className="flex-grow">
          {children}
        </main>

      </body>
    </html>
  );
}

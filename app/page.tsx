import React from 'react';
// 📦 データの貯金箱（posts.json）から自動読み込み！
import posts from '../posts.json';

export default function Page() {
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const latestPosts = sortedPosts.slice(0, 3);
  const archivePosts = sortedPosts.slice(3);

  return (
    <div className="min-h-screen bg-zinc-950 text-pink-100 font-sans selection:bg-fuchsia-500 selection:text-white overflow-x-hidden relative">
      
      {/* 🐇 電脳ウサギの真夜中ネオンエフェクト */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[50vw] h-[50vw] bg-pink-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[50vw] h-[50vw] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
        {/* サイバーウサギの電脳メッシュ */}
        <div className="absolute inset-0 bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-16 space-y-16">
        
        {/* 🐰 ウサ耳ヘッドライン */}
        <header className="text-center space-y-6">
          <div className="inline-block bg-zinc-900/90 backdrop-blur-md border-2 border-pink-400/40 px-6 py-2 rounded-full shadow-[0_0_20px_rgba(244,114,182,0.2)]">
            <span className="text-pink-400 font-black tracking-widest text-xs md:text-sm animate-pulse">
              ⚡️ LUNAS CYBER RABBIT STATION ⚡️
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 py-2 drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]">
            真夜中のウサ耳タイムライン 📱🌙
          </h1>
          
          <p className="text-xs md:text-sm text-zinc-400 font-bold max-w-sm mx-auto leading-relaxed">
            お化け屋敷は強制終了だぴょん！ウチらが仕掛ける、夜の原宿で1番バズる最先端サイバーギャルメディア。
            3日経った過去はエモいスクラップブック（アーカイブ）に自動格納！
          </p>
        </header>

        {/* 📱 【最新ウサ耳タイムラインエリア】 */}
        <main className="space-y-8">
          <h2 className="text-lg md:text-xl font-black text-pink-400 flex items-center gap-2 px-2 tracking-wider">
            <span>🐰✨</span> 視線ジャック中の最新投稿（3日分）
          </h2>
          
          {latestPosts.length === 0 ? (
            <p className="text-center text-zinc-600 py-12 bg-zinc-900/50 rounded-3xl border-2 border-dashed border-zinc-800">まだ投稿がないぴょん！</p>
          ) : (
            latestPosts.map((post) => (
              <article key={post.id} className="bg-zinc-900/80 backdrop-blur-md border-2 border-zinc-800/80 hover:border-pink-400/40 rounded-3xl p-6 md:p-8 shadow-2xl transition-all duration-300 hover:scale-[1.01] group space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <span className="text-xs font-mono font-bold text-purple-400 bg-purple-950/50 px-3 py-1 rounded-full border border-purple-900/30">
                    🌙 {post.date}
                  </span>
                  <span className="text-xs font-black text-pink-400 bg-pink-950/50 px-3 py-1 rounded-full border border-pink-900/30 tracking-wide">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-black text-zinc-100 tracking-tight group-hover:text-pink-300 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium whitespace-pre-wrap">
                  {post.content}
                </p>
              </article>
            ))
          )}
        </main>

        {/* 🌌 【過去のスクラップブックエリア】 */}
        <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-zinc-800 rounded-3xl p-6 md:p-8 shadow-2xl space-y-6">
          <div className="border-b border-zinc-800 pb-4">
            <h2 className="text-base md:text-lg font-black text-purple-400 flex items-center gap-2">
              <span>🔮</span> トワイライト・アーカイブ
            </h2>
            <p className="text-xs text-zinc-500 mt-1">4日以上経ってエモみの増した過去ログはここに自動スタックされるぴょん。</p>
          </div>

          {archivePosts.length === 0 ? (
            <p className="text-zinc-600 text-xs italic py-2">過去ログはまだ空っぽだぴょん。</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {archivePosts.map((post) => (
                <div key={post.id} className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-purple-500/30 transition-all cursor-pointer">
                  <span className="text-[10px] font-mono text-zinc-500">{post.date}</span>
                  <h4 className="text-xs font-bold text-zinc-300 mt-1 truncate">{post.title}</h4>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* フッター */}
        <div className="text-center pt-8 border-t border-zinc-900">
          <footer className="text-zinc-600 text-[11px] font-bold tracking-widest uppercase">
            <p>👑 REGULATED BY LULU PRODUCER 👑</p>
            <p className="mt-1">© 2026 LUNA-CELESTIAL. CYBER TWILIGHT STREAM ENGINE</p>
          </footer>
        </div>

      </div>
    </div>
  );
}

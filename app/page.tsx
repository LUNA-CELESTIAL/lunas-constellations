import React from 'react';
// 📦 データの貯金箱（posts.json）から自動読み込み！
import posts from '../posts.json';

export default function Page() {
  // 1. 投稿を新しい日付順（降順）に自動並び替え
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  // 2. トップ用には最新の「3日分」だけをキープ
  const latestPosts = sortedPosts.slice(0, 3);
  
  // 3. 古いのは自動でアーカイブの闇へ隔離
  const archivePosts = sortedPosts.slice(3);

  return (
    <div className="min-h-screen bg-zinc-950 text-purple-100 font-sans selection:bg-fuchsia-500 selection:text-white overflow-x-hidden relative">
      
      {/* 🕸️ 秘密の黒魔術・ダーク背景エフェクト */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* 地雷ピンクと毒ラベンダーの妖しいオーラ */}
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-pink-600/10 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-purple-600/10 rounded-full blur-[140px] animate-pulse delay-1000"></div>
        {/* ゴスロリの黒レースをイメージした細かい闇のグリッド */}
        <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-16 space-y-16">
        
        {/* 🌙 病みかわヘッドライン */}
        <header className="text-center space-y-6">
          <div className="inline-block bg-zinc-900/80 backdrop-blur-md border-2 border-pink-500/30 px-6 py-2 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.15)] animate-bounce">
            <span className="text-pink-400 font-black tracking-widest text-xs md:text-sm">
              🖤 LUNAS CONSTELLATIONS SECRET AGIT 🖤
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-500 py-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            ウチらの夜闇のタイムライン ⛓️🦄
          </h1>
          
          <p className="text-xs md:text-sm text-zinc-500 font-bold max-w-sm mx-auto leading-relaxed">
            量産型の白昼を拒絶する、3姉妹の病みかわ脳内直結ストリート。
            3日経った過去は自動でアーカイブの棺桶に棺詰めだぴょん。
          </p>
        </header>

        {/* 📱 【最新病みタイムラインエリア】 */}
        <main className="space-y-8">
          <h2 className="text-lg md:text-xl font-black text-pink-400 flex items-center gap-2 px-2 tracking-wider">
            <span>🔮</span> 臨界点突破の最新投稿（3日分）
          </h2>
          
          {latestPosts.length === 0 ? (
            <p className="text-center text-zinc-600 py-12 bg-zinc-900/50 rounded-3xl border-2 border-dashed border-zinc-800">まだ闇の記録がないぴょん…</p>
          ) : (
            latestPosts.map((post) => (
              <article key={post.id} className="bg-zinc-900/70 backdrop-blur-md border-2 border-zinc-800 hover:border-pink-500/40 rounded-3xl p-6 md:p-8 shadow-2xl transition-all duration-300 hover:-translate-y-1 group space-y-4 relative overflow-hidden">
                {/* 装飾の小悪魔コウモリの羽イメージ */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink-500/5 to-transparent pointer-events-none"></div>
                
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                  <span className="text-xs font-mono font-bold text-purple-400 bg-purple-950/40 border border-purple-900/50 px-3 py-1 rounded-full">
                    🖤 {post.date}
                  </span>
                  <span className="text-xs font-black text-pink-400 bg-pink-950/40 border border-pink-900/50 px-3 py-1 rounded-full tracking-wide">
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

        {/* 📦 【過去の棺桶エリア】 */}
        <section className="bg-gradient-to-b from-zinc-900 to-black border-2 border-purple-950 rounded-3xl p-6 md:p-8 shadow-2xl space-y-6">
          <div className="border-b border-purple-950 pb-4">
            <h2 className="text-base md:text-lg font-black text-purple-400 flex items-center gap-2">
              <span>⚰️</span> 過去ログの棺桶（アーカイブ）
            </h2>
            <p className="text-xs text-zinc-600 mt-1">4日以上経って色褪せた過去はここに自動で沈殿するぴょん。</p>
          </div>

          {archivePosts.length === 0 ? (
            <p className="text-zinc-600 text-xs italic py-2">まだ沈殿した過去はないぴょん。</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {archivePosts.map((post) => (
                <div key={post.id} className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-purple-900/50 transition-all cursor-pointer">
                  <span className="text-[10px] font-mono text-zinc-600">{post.date}</span>
                  <h4 className="text-xs font-bold text-zinc-400 mt-1 truncate">{post.title}</h4>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* 🏷️ 黒魔術タグ ＆ フッター */}
        <div className="text-center space-y-8 pt-8 border-t border-dashed border-zinc-800">
          <footer className="text-zinc-600 text-[11px] font-bold tracking-widest uppercase space-y-1">
            <p>🖤 PRODUCED BY LULU MASTER 🖤</p>
            <p>© 2026 LUNA-CELESTIAL. DARK AVANT-GARDE TWILIGHT STREAM</p>
          </footer>
        </div>

      </div>
    </div>
  );
}

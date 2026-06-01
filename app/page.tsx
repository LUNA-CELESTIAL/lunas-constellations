import React from 'react';
// 📦 データの貯金箱から自動読み込み！
import posts from '../posts.json';

export default function Page() {
  // 1. 投稿を新しい日付順（降順）に自動で並び替える
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  // 2. トップページに表示する「最新の3日分（3件）」を切り取る
  const latestPosts = sortedPosts.slice(0, 3);
  
  // 3. それより古いものは自動でアーカイブ（過去ログ）へまわす
  const archivePosts = sortedPosts.slice(3);

  return (
    <div className="min-h-screen bg-rose-50 text-zinc-800 font-sans selection:bg-pink-400 selection:text-white overflow-x-hidden relative">
      
      {/* 🎀 ゆめかわ背景エフェクト */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-pink-300/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-purple-300/20 rounded-full blur-[140px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#fbcfe8_1px,transparent_1px)] [background-size:16px_16px] opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 space-y-16">
        
        {/* 👑 メディア・タイトルトップ */}
        <header className="text-center space-y-4">
          <div className="inline-block bg-white/80 backdrop-blur-md border-2 border-pink-200 px-6 py-2 rounded-full shadow-sm">
            <span className="text-pink-500 font-bold tracking-wider text-sm">⚡️ LUNAS CONSTELLATIONS OFFICIAL ⚡️</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-2">
            原宿グリッチ・タイムライン 📱✨
          </h1>
          <p className="text-sm md:text-base text-zinc-500 font-medium max-w-md mx-auto">
            3姉妹が仕掛ける最新トレンドが自動でスタックされる、ウチらのストリートSNSプラットフォームだぴょん！
          </p>
        </header>

        {/* 📱 【最新タイムラインエリア】（最新3日分がスクロールで並ぶ！） */}
        <main className="space-y-8">
          <h2 className="text-xl font-black text-pink-600 flex items-center gap-2 px-2">
            <span>✨</span> 最新の投稿（3日分）
          </h2>
          
          {latestPosts.length === 0 ? (
            <p className="text-center text-zinc-400 py-12 bg-white/50 rounded-2xl border-2 border-dashed border-zinc-200">まだ投稿がないぴょん！</p>
          ) : (
            latestPosts.map((post) => (
              <article key={post.id} className="bg-white/80 backdrop-blur-md border-4 border-pink-100 rounded-3xl p-6 md:p-8 shadow-xl shadow-pink-100/30 transition-all duration-300 hover:scale-[1.01] space-y-4">
                <div className="flex items-center justify-between border-b-2 border-dashed border-pink-50 pb-3">
                  <span className="text-xs md:text-sm font-mono font-bold text-pink-400 bg-pink-50 px-3 py-1 rounded-full">
                    📅 {post.date}
                  </span>
                  <span className="text-xs font-bold text-purple-400 bg-purple-50 px-3 py-1 rounded-full">
                    #{post.category}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-zinc-800 tracking-tight">
                  {post.title}
                </h3>
                <p className="text-zinc-600 text-base md:text-lg leading-relaxed font-medium whitespace-pre-wrap">
                  {post.content}
                </p>
              </article>
            ))
          )}
        </main>

        {/* 📦 【過去のアーカイブエリア】（4件目以降は自動でここに格納される！） */}
        <section className="bg-zinc-900 text-zinc-100 rounded-3xl p-6 md:p-8 shadow-2xl space-y-6">
          <div className="border-b border-zinc-800 pb-4">
            <h2 className="text-lg md:text-xl font-bold text-amber-300 flex items-center gap-2">
              <span>📦</span> 過去のトレンドアーカイブ・ログ
            </h2>
            <p className="text-xs text-zinc-500 mt-1">4日以上前の古い投稿は自動でここにストックされるぴょん！</p>
          </div>

          {archivePosts.length === 0 ? (
            <p className="text-zinc-500 text-sm italic py-4">過去のアーカイブはまだ空っぽだぴょん！</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {archivePosts.map((post) => (
                <div key={post.id} className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-800 hover:border-zinc-700 transition-all">
                  <span className="text-xs font-mono text-zinc-500">{post.date}</span>
                  <h4 className="text-sm font-bold text-zinc-200 mt-1 truncate">{post.title}</h4>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* フッター */}
        <footer className="text-center text-xs text-zinc-400 pt-8 border-t border-pink-100">
          <p className="font-bold text-zinc-500">👑 SYSTEM REGULATED BY LULU PRODUCER</p>
          <p>© 2026 LUNA-CELESTIAL. Live Automated Stream Engine ✨</p>
        </footer>

      </div>
    </div>
  );
}

'use client'; // 👈 クライアントサイドでサクサク動かす魔法の呪文！

import React, { useState } from 'react';
// 📦 データの貯金箱（posts.json）から自動読み込み！
import posts from '../posts.json';

export default function Page() {
  // 🏷️ ユーザーが今どのハッシュタグを選択しているかを記憶するステート
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // 日付順にソート
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // 🔍 選択されたタグがある場合は、そのタグが含まれる投稿だけをフィルター！
  const filteredPosts = selectedTag
    ? sortedPosts.filter(post => post.category.includes(selectedTag))
    : sortedPosts;

  // タイムラインにはドカンと最大30件表示！溢れた分はアーカイブへ
  const latestPosts = filteredPosts.slice(0, 30);
  const archivePosts = filteredPosts.slice(30);

  // 🌟 posts.json から存在する全てのタグを重複なしで抽出（検索ボタン用）
  const allTags = Array.from(new Set(posts.map(post => post.category)));

  return (
    <div className="min-h-screen bg-zinc-950 text-pink-100 font-sans selection:bg-fuchsia-500 selection:text-white overflow-x-hidden relative">
      
      {/* 🐇 電脳ウサギの真夜中ネオンエフェクト */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[50vw] h-[50vw] bg-pink-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[50vw] h-[50vw] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-16 space-y-12">
        
        {/* 🐰 ウサ耳ヘッドライン */}
        <header className="text-center space-y-6">
          <div className="inline-block bg-zinc-900/90 backdrop-blur-md border-2 border-pink-400/40 px-6 py-2 rounded-full shadow-[0_0_20px_rgba(244,114,182,0.2)]">
            <span className="text-pink-400 font-black tracking-widest text-xs md:text-sm animate-pulse">
              ⚡️ LUNAS CYBER RABBIT STATION ⚡️
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 py-3 drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)] leading-snug max-w-2xl mx-auto">
            エラーログたちのステップが鳴り響く、<br className="hidden md:inline" />秒針のいらない街 📱🌙
          </h1>
          
          <p className="text-xs md:text-sm text-zinc-400 font-medium max-w-xl mx-auto leading-relaxed px-4">
            「普通」のレールからハミ出したウサギたちのための、真夜中のセーフハウス。シリウスの尖ったトレンドと、セレーネが紡ぐ月光の詩。溢れ出た記憶はエモいアーカイブに変わるけど、ウチらの今夜のバズは、誰にも止められない。
          </p>
        </header>

        {/* 🏷️ 【ハッシュタグ検索・セレクトバー】 */}
        <section className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-2xl p-4 text-center space-y-3">
          <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
            🔮 迷子たちのためのネオン・タグ検索
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {/* 全て表示ボタン */}
            <button
              onClick={() => setSelectedTag(null)}
              className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-all ${
                selectedTag === null
                  ? 'bg-pink-500 text-white border-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.4)]'
                  : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-700'
              }`}
            >
              # すべて見る
            </button>
            {/* 動的なタグボタンたち */}
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-all ${
                  selectedTag === tag
                    ? 'bg-purple-500 text-white border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                    : 'bg-zinc-950 text-purple-300/70 border-zinc-800 hover:border-purple-500/30'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* 📱 【最新タイムラインエリア】 */}
        <main className="space-y-8">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-lg md:text-xl font-black text-pink-400 flex items-center gap-2 tracking-wider">
              <span>🐰✨</span> 視線ジャック中の最新タイムライン
            </h2>
            {selectedTag && (
              <span className="text-xs font-bold text-fuchsia-400 animate-pulse">
                選択中: {selectedTag}
              </span>
            )}
          </div>
          
          {latestPosts.length === 0 ? (
            <p className="text-center text-zinc-600 py-12 bg-zinc-900/50 rounded-3xl border-2 border-dashed border-zinc-800">該当する投稿がないぴょん！</p>
          ) : (
            latestPosts.map((post) => (
              <article key={post.id} className="bg-zinc-900/80 backdrop-blur-md border-2 border-zinc-800/80 hover:border-pink-

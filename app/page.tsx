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
        <div className="absolute top-[-5%] left-[-5%] w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] bg-pink-500/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] bg-purple-500/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse delay-700"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:20px_20px] md:background-size:24px_24px] opacity-25"></div>
      </div>

      {/* 📱 スマホでの余白（px-4）と全体の詰まり感を絶妙に調整 */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 py-10 md:py-16 space-y-10 md:space-y-12">
        
        {/* 🐰 ウサ耳ヘッドライン */}
        <header className="text-center space-y-5 md:space-y-6">
          <div className="inline-block bg-zinc-900/90 backdrop-blur-md border-2 border-pink-400/40 px-4 md:px-6 py-1.5 md:py-2 rounded-full shadow-[0_0_20px_rgba(244,114,182,0.2)]">
            <span className="text-pink-400 font-black tracking-widest text-[10px] md:text-sm animate-pulse">
              ⚡️ LUNAS CYBER RABBIT STATION ⚡️
            </span>
          </div>
          
          {/* スマホで文字がハミ出さないよう、text-2xl〜text-5xlへ可変調整！ */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 py-2 drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)] leading-snug max-w-2xl mx-auto">
            エラーログたちのステップが鳴り響く、<br className="block sm:hidden" />秒針のいらない街 📱🌙
          </h1>
          
          <p className="text-[11px] md:text-sm text-zinc-400 font-medium max-w-xl mx-auto leading-relaxed px-2">
            「普通」のレールからハミ出したウサギたちのための、真夜中のセーフハウス。シリウスの尖ったトレンドと、セレーネが紡ぐ月光の詩。溢れ出た記憶はエモいアーカイブに変わるけど、ウチらの今夜のバズは、誰にも止められない。
          </p>
        </header>

        {/* 🏷️ 【ハッシュタグ検索・セレクトバー】 */}
        {/* スマホでも指で押しやすく、スクロールを邪魔しないフレックスラップ配置 */}
        <section className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-3 md:p-4 text-center space-y-3">
          <div className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest">
            🔮 迷子たちのためのネオン・タグ検索
          </div>

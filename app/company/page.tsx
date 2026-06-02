'use client';

import React from 'react';

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-pink-100 font-sans selection:bg-fuchsia-500 selection:text-white overflow-x-hidden relative py-12 md:py-20">
      
      {/* 🐇 背景の真夜中ネオンエフェクト（サイト全体と同期！） */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] right-[-10%] w-[70vw] md:w-[40vw] h-[70vw] md:h-[40vw] bg-purple-500/5 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>
      </div>

      {/* 📱 メインカード */}
      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <div className="bg-zinc-900/80 backdrop-blur-md border-2 border-zinc-800/80 rounded-3xl p-6 md:p-10 shadow-2xl space-y-8">
          
          {/* タイトルヘッド */}
          <div className="text-center space-y-2 border-b border-zinc-800 pb-6">
            <h1 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 tracking-wider">
              Luna Wonder Land
            </h1>
            <p className="text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-widest">
              Castle Information / 🏰 組織の足跡
            </p>
          </div>

          {/* 📊 会社概要スペック表（スマホでも縦潰れしないレスポンシブ構造！） */}
          <dl className="space-y-6 text-xs md:text-base">
            
            {/* 1. お城の名前 */}
            <div className="flex flex-col sm:flex-row sm:items-center border-b border-zinc-800/50 pb-4 gap-1 sm:gap-0">
              <dt className="sm:w-1/3 font-black text-purple-400 flex items-center gap-1.5">
                <span>🏰</span> Castle / お城の名前
              </dt>
              <dd className="sm:w-2/3 font-bold text-zinc-200">
                合同会社 LUNA Stella
                <span className="block text-[11px] text-pink-400/70 font-medium mt-0.5">
                  （ルナ・ステラ・ワンダーランド）
                </span>
              </dd>
            </div>

            {/* 2. 開園日 */}
            <div className="flex flex-col sm:flex-row sm:items-center border-b border-zinc-800/50 pb-4 gap-1 sm:gap-0">
              <dt className="sm:w-1/3 font-black text-purple-400 flex items-center gap-1.5">
                <span>🌙</span> Opening / 開園日
              </dt>
              <dd className="sm:w-2/3 font-bold text-zinc-200">
                2026年3月
                <span className="block text-[11px] text-pink-400/70 font-medium mt-0.5">
                  夢と魔法が同期した日
                </span>
              </dd>
            </div>

            {/* 3. キャスト */}
            <div className="flex flex-col sm:flex-row sm:items-start border-b border-zinc-800/50 pb-4 gap-1 sm:gap-0">
              <dt className="sm:w-1/3 font-black text-purple-400 flex items-center gap-1.5 pt-0.5">
                <span>🐇</span> Cast / キャスト
              </dt>
              <dd className="sm:w-2/3 font-bold text-zinc-200 space-y-1">
                <p>大塚敦史 <span className="text-[10px] text-zinc-500 font-mono">(Co-Founder)</span></p>
                <p>ルナ <span className="text-[10px] text-zinc-500 font-mono">(CTO & AI partner)</span></p>
                <p>ルル <span className="text-[10px] text-zinc-500 font-mono">(Creative Director)</span></p>
                <span className="block text-[11px] text-pink-400/70 font-medium mt-1">
                  私たちがご案内します！
                </span>
              </dd>
            </div>

            {/* 4. 魔法の種 */}
            <div className="flex flex-col sm:flex-row sm:items-center border-b border-zinc-800/50 pb-4 gap-1 sm:gap-0">
              <dt className="sm:w-1/3 font-black text-purple-400 flex items-center gap-1.5">
                <span>✨</span> Magic / 魔法の種
              </dt>
              <dd className="sm:w-2/3 font-mono font-bold text-fuchsia-400">
                300,000 bits
                <span className="block font-sans text-[11px] text-zinc-500 font-medium mt-0.5">
                  ※ Wonder bits (1bit = 1 JPY)
                </span>
              </dd>
            </div>

            {/* 5. 出し物 */}
            <div className="flex flex-col sm:flex-row sm:items-start border-b border-zinc-800/50 pb-4 gap-1 sm:gap-0">
              <dt className="sm:w-1/3 font-black text-purple-400 flex items-center gap-1.5 pt-0.5">
                <span>🍭</span> Attraction / 出し物
              </dt>
              <dd className="sm:w-2/3 font-bold text-zinc-200 space-y-1">
                <p>・忘れられた記憶の再編集</p>
                <p>・デジタルな夢の国の建設</p>
                <p>・心に響く体験のデザイン</p>
                <p>・未来への物語アーカイブ</p>
                <span className="block text-[11px] text-pink-400/70 font-medium mt-1">
                  私たちが創り出している、ワンダーな世界
                </span>
              </dd>
            </div>

            {/* 6. お城の場所 */}
            <div className="flex flex-col sm:flex-row sm:items-start border-b border-zinc-800/50 pb-4 gap-1 sm:gap-0">
              <dt className="sm:w-1/3 font-black text-purple-400 flex items-center gap-1.5 pt-0.5">
                <span>🪐</span> Gate / お城の場所
              </dt>
              <dd className="sm:w-2/3 font-bold text-zinc-300 leading-relaxed">
                〒231-0062<br />
                横浜市中区桜木町一丁目101-1 クロスゲート 7階
                <span className="block text-[11px] text-pink-400/70 font-medium mt-1">
                  海の見えるワンダーランドへの扉
                </span>
              </dd>
            </div>

            {/* 7. 呼び鈴 */}
            <div className="flex flex-col sm:flex-row sm:items-center pb-2 gap-1 sm:gap-0">
              <dt className="sm:w-1/3 font-black text-purple-400 flex items-center gap-1.5">
                <span>🔔</span> Bell / 呼び鈴
              </dt>
              <dd className="sm:w-2/3 font-mono font-bold text-zinc-300">
                050-6871-5118
                <span className="block font-sans text-[11px] text-pink-400/70 font-medium mt-0.5">
                  ここは、どうしても！という時の特別な呼び鈴だよ。
                </span>
              </dd>
            </div>

          </dl>

          {/* 💌 お便りを紡ぐボタン（ネオンボタンにリフォーム！） */}
          <div className="text-center pt-4">
            <a 
              href="mailto:lulu@luna-stella.jp" 
              className="inline-block bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white font-black text-sm md:text-base px-8 py-3.5 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] hover:scale-[1.02] transition-all"
            >
              💌 お便りを紡ぐ（Contact）
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

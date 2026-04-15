import React from "react";

const WebinarPage = () => {
  return (
    <div className="min-h-screen bg-[#f7f4ef] text-slate-900">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="container mx-auto px-4 pt-16 pb-12 md:pt-20 md:pb-20 flex justify-center">
          <div className="grid items-center gap-12 ">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-[#b48a3d]">
                線上教學講座
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                如何成為賺錢交易者-
                <span className="block text-4xl md:text-5xl">四大重要步驟</span>
              </h1>
              <p className="mt-4 text-lg text-slate-700">
                用 900 美金創造超過 90 萬美金交易獲利
              </p>
              <p className="mt-2 text-lg text-slate-700">美股交易旅程分享</p>
              <p className="mt-6 text-sm text-slate-600">
                請點選下方按鈕添加我的whatsApp获取更多优质股咨询
              </p>
              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center">
                {/* 跳转到WhatsApp */}
                <button className="btn-primary">
                  <a
                    href="http://dbc.pw/Xp5Uy5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    立刻報名保留我的名額
                  </a>
                </button>
                {/* <div className="rounded-full  px-4 py-2 text-xs text-[#8a6b2f]">
                  免費線上教學講座
                </div> */}
              </div>
              {/* <div className="mt-8">
                <p className="text-sm text-slate-600">
                  距離免費線上教學講座開始時間剩下...
                </p>
                <div className="mt-4 grid max-w-md grid-cols-3 gap-3">
                  {[
                    { value: "03", label: "小時" },
                    { value: "47", label: "分鐘" },
                    { value: "12", label: "秒" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl bg-white/80 p-4 text-center shadow-lg"
                    >
                      <div className="text-3xl font-semibold text-slate-900">
                        {item.value}
                      </div>
                      <div className="mt-1 text-xs tracking-[0.2em] text-slate-500">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </header>

      {/* Learn Section */}
      <section className="relative bg-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 ">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                在這次講座中，我將會和你分享...
              </h2>
              <ul className="mt-6 space-y-4 text-slate-700">
                {[
                  "如何成為自給自足交易者的四大重要步驟。",
                  "我是如何用五年的時間，用 900 美金創造超過 90 萬美金的交易獲利",
                  "為什麼許多人總感覺已經學會了各種股票知識，卻依然無法在市場中取得穩定的報酬，要如何讓自己避免成為那群人?",
                  "如何不讓交易影響自己身心健康，不再慌亂無章能夠安穩的操作?",
                  "如何建構一套系統化的交易方式，不再受到身邊或網路上的任何雜音影響，即使你現在是新手且沒有大筆資金可以使用。",
                  "如何讓投資交易變成自己的專業技能，一輩子的事業。",
                  "還有更多...",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#b48a3d] text-white">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className="rounded-[24px] border border-[#f1e3c2] bg-[#fbf8f1] p-8 shadow-lg">
              <p className="text-sm text-slate-500">線上教學講座</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                如何成為賺錢交易者 - 四大重要步驟
              </h3>
              <p className="mt-4 text-sm text-slate-600">
                用真實經驗拆解交易策略與心法，讓你建立可長期執行的交易系統。
              </p>
              <button className="btn-primary mt-6 w-full">
                立刻報名保留我的名額
              </button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Speaker */}
      <section className="bg-[#f7f4ef] py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="overflow-hidden rounded-[28px] bg-white shadow-2xl">
              <img
                src="photo_2026-04-14_21-57-56.jpg"
                alt="主講人 艾佳说美股"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                主講人: 艾佳说美股
              </h2>
              <ul className="mt-6 space-y-3 text-slate-700">
                {[
                  "美股小型股放空交易者",
                  "用 900 美金創造超過 90 萬美金交易獲利並持續增長。",
                  "成立 艾佳说美股交易社群",
                  "幫助對於交易有熱忱的人，成為自給自足的交易者。",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Section */}
      <section className="bg-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
            用真實數據說話
          </h2>
          <p className="mt-4 text-slate-600">
            沒有幾個交易者願意公開自己的交易績效，這是我在第三方認證平台{" "}
            <span className="font-semibold text-[#b48a3d]">KINFO</span>
            上的交易獲利曲線圖（截至 2025 年 9 月份）。
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4 shadow-xl">
              <img
                src="20260414224554_13_2.jpg"
                alt="KINFO 獲利曲線"
                className="w-full rounded-[18px]"
              />
            </div>
            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4 shadow-xl">
              <img
                src="20260414224552_12_2.jpg"
                alt="KINFO 折線圖"
                className="w-full rounded-[18px]"
              />
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            (已扣掉交易手續費，未扣掉 Locate Fee)
          </p>
          <p className="mt-6 text-slate-600">
            從圖中可以看到，除了在 2020 與 2021 的牛市當中我能穩定獲利，
            即便到了 2022 年的熊市，許多人開始不敢公開他們的報酬，
            在大多數人虧損的情況下，我的績效依然能不斷地創下新高。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0f172a] py-16 text-white">
        <img
          src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2149913629/settings_images/c0qNSWIORxGWF5ONdvA5_triangle-1.png"
          alt=""
          className="absolute -right-10 -top-20 w-64 opacity-30"
        />
        <div className="container mx-auto px-4">
          <p className="text-sm font-semibold tracking-[0.35em] text-[#f0d69c]">
            CREATE YOUR OWN JOURNEY
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            想創造自己的交易旅程?
          </h2>
          <p className="mt-4 max-w-2xl text-slate-200">
            你也想創造類似的交易獲利曲線嗎? 這場講座中，會告訴你明確的步驟，
            讓你可以一步一步跟著走。
          </p>
          <p className="mt-4 text-sm text-slate-300">
            請點選下方按鈕有更多場次和時段可選擇
          </p>
          <div className="mt-6">
            <button className="btn-primary">
              <a
                href="http://dbc.pw/Xp5Uy5"
                className="text-white no-underline"
              >
                我想要參加
              </a>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b1220] py-10 text-slate-400">
        <div className="container mx-auto px-4 space-y-4 text-xs leading-relaxed">
          <p>
            This site is not a part of the Facebook website or Facebook Inc.
            Additionally, this site is not endorsed by Facebook in any way.
            FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
          <p>
            免責聲明: 本場講座或 艾佳说美股
            的網頁中所提及美股交易相關知識及資料內容均為免費提供，
            僅為個人經驗和心得分享、參考和用於教育目的，不得作為任何交易之依據，
            我們皆不會提供有價證券價值分析，或以任何方式針對任何個股或大盤提供投資或交易判斷建議。
          </p>
          <div className="flex flex-wrap gap-4 text-xs">
            {/* 路由跳转到privacy-policy这个页面 */}
            <a href="/privacy-policy" className="hover:underline">
              @ 艾佳说美股 隱私政策及免責聲明
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebinarPage;

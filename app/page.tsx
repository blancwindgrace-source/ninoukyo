"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const done = localStorage.getItem("ninoukyo_boot_done");
    if (done === "1") setBooted(true);
  }, []);

  const enterSite = () => {
    localStorage.setItem("ninoukyo_boot_done", "1");
    setBooted(true);
  };

  // Enterキー対応
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") enterSite();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!booted) {
    return (
      <section className="boot" onClick={enterSite}>
        <div className="noise" aria-hidden />
        <div className="boot-bg" />

        <div className="terminal">
          <p className="t-line">[NINOUKYO] Initializing</p>
          <p className="t-line">
            Boundary Layer: <span className="blink">●</span> Syncing
          </p>
          <p className="t-line">Sakura Index: LOADED</p>
          <p className="t-line accent">ACCESSING NINOUKYO TERMINAL</p>
          <p className="t-line faint">hint: Press Enter or tap to continue</p>
        </div>

        <div className="lex-gauge">
          <div className="lex-label">SAKURA SYNCHRONIZATION</div>
          <div className="lex-bar">
            <span className="lex-fill" />
          </div>
        </div>
      </section>
    );
  }

  /* ====== ここから通常トップ（今までの内容） ====== */
  return (
    <>
      <section className="hero nightSakura">
        <div className="petals" aria-hidden />
        <div className="heroInner">
          <div className="kicker">NINOUKYO // 夜桜の郷 受付端末</div>
          <h1 className="title">忍桜郷（にんおうきょう）</h1>
          <p className="lead">
            忍と妖が共に暮らす幻想の郷。迷い込んだ人を迎え、もてなし、
            そして送り届ける――和風RPイベントです。
          </p>

          <div className="heroActions">
            <Link className="btnPrimary" href="/members">
              所属メンバーを見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

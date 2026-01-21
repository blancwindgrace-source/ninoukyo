// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero nightSakura">
        {/* 夜桜の花びら（CSSで動く） */}
        <div className="petals" aria-hidden />

        <div className="heroInner">
          <div className="kicker">NINOUKYO // 夜桜の郷 受付端末</div>
          <h1 className="title">忍桜郷（にんおうきょう）</h1>
          <p className="lead">
            忍と妖が共に暮らす幻想の郷。迷い込んだ人を迎え、もてなし、そして送り届ける――
            和風RPイベントです。
          </p>

          <div className="heroActions">
            <Link className="btnPrimary" href="/members">所属メンバーを見る</Link>
            <a className="btnGhost" href="#overview">概要へ</a>
          </div>

          <div className="heroChips">
            <span className="chip">和風RP</span>
            <span className="chip">接客</span>
            <span className="chip">舞台演目</span>
          </div>
        </div>
      </section>

      <section id="overview" className="card">
        <h2 className="sectionTitle">イベント概要</h2>
        <div className="divider" />
        <ul className="list">
          <li><b>開催</b>：毎週火曜 22:00 JST（目安）</li>
          <li><b>形式</b>：和風RP / 接客 / 舞台演目 / 歓談</li>
        </ul>
      </section>

      <section className="card">
        <h2 className="sectionTitle">参加の流れ（例）</h2>
        <div className="divider" />
        <ol className="list">
          <li>Req-In（招待リクエスト）→受付</li>
          <li>桜並木の案内 → 屋敷へ</li>
          <li>舞台演目 / 歓談 → 見送り</li>
        </ol>
        <p className="muted">
          ※当日の運用（抽選/受付方法）は告知ポストに準拠
        </p>
      </section>
    </>
  );
}

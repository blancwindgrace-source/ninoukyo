// app/members/page.tsx
import { members } from "@/data/members";

export default function MembersPage() {
  return (
    <>
      <section className="hero miniHero">
        <div className="kicker">ROSTER // 所属メンバー</div>
        <h1 className="title">所属メンバー一覧</h1>
        <p className="lead">忍桜郷を彩る住人たちのプロフィールです。</p>
      </section>

      <section className="card">
        <div className="grid">
          {members.map((m) => (
            <article key={m.name} className="member">
              <div className="memberHeader">
                <div>
                  <h3 className="memberName">■名前｜{m.name}</h3>
                  {m.reading && <div className="memberRuby">（{m.reading}）</div>}
                </div>

                <div className="badges">
                  <span className="badge">■種族｜{m.species}</span>
                </div>
              </div>

              <div className="memberMeta">
                <div><b>■性格｜</b>{m.personality}</div>
              </div>

              <div className="memberBio">{m.bio}</div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

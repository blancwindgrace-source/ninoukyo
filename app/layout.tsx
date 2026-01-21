// app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "忍桜郷 | Ninoukyo",
  description: "VRC和風RPイベント 忍桜郷 公式サイト"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header className="topbar">
          <nav className="nav">
            <Link className="navItem" href="/">イベント概要</Link>
            <Link className="navItem" href="/members">所属メンバー一覧</Link>
          </nav>
        </header>

        <main className="container">{children}</main>

        <footer className="footer">
          <div className="footerRow">
            <div>忍桜郷 / Ninoukyo</div>
            <div className="muted">© {new Date().getFullYear()} Ninoukyo</div>
          </div>
        </footer>
      </body>
    </html>
  );
}

import { approach, caseStudies, profile, skills } from "./data/portfolio"
import "./App.css"

function App() {
  return (
    <div className="page">
      <div className="atmosphere" aria-hidden="true" />

      <header className="nav">
        <a className="nav-brand" href="#top">
          {profile.brand}
        </a>
        <nav className="nav-links" aria-label="メインナビ">
          <a href="#approach">考え方</a>
          <a href="#works">実績</a>
          <a href="#contact">連絡</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="hero-brand reveal">{profile.brand}</p>
            <h1 className="hero-title reveal delay-1">{profile.tagline}</h1>
            <p className="hero-lead reveal delay-2">
              {profile.name} — {profile.role}の実績ポートフォリオ（差し替え用テンプレート）
            </p>
            <div className="hero-actions reveal delay-3">
              <a className="btn btn-primary" href="#works">
                実績を見る
              </a>
              <a className="btn btn-ghost" href="#contact">
                連絡する
              </a>
            </div>
          </div>
          <div className="hero-visual reveal delay-2" aria-hidden="true">
            <div className="hero-plane">
              <div className="hero-grid" />
              <div className="hero-orb hero-orb-a" />
              <div className="hero-orb hero-orb-b" />
              <div className="hero-flow">
                <span>課題</span>
                <span className="flow-line" />
                <span>設計</span>
                <span className="flow-line" />
                <span>Web</span>
                <span className="flow-line" />
                <span>検証</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-head">
            <p className="eyebrow">About</p>
            <h2>Webで、現場の詰まりをほどく</h2>
            <p className="section-lead">{profile.summary}</p>
          </div>
        </section>

        <section className="section" id="approach">
          <div className="section-head">
            <p className="eyebrow">Approach</p>
            <h2>課題解決の進め方</h2>
            <p className="section-lead">
              きれいなサイトを作ることより、「困りごとが減ったか」を基準に進めます。
            </p>
          </div>
          <ol className="steps">
            {approach.map((item) => (
              <li key={item.step} className="step">
                <span className="step-num">{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section" id="works">
          <div className="section-head">
            <p className="eyebrow">Works</p>
            <h2>課題解決の事例</h2>
            <p className="section-lead">
              各事例は「課題 → 施策 → 結果」の型。`src/data/portfolio.ts` を編集して差し替えてください。
            </p>
          </div>
          <div className="cases">
            {caseStudies.map((item, index) => (
              <article key={item.id} className="case" id={item.id}>
                <div className="case-meta">
                  <span className="case-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item.client}</span>
                  <span className="dot" aria-hidden="true">
                    ·
                  </span>
                  <span>{item.period}</span>
                </div>
                <h3>{item.title}</h3>
                <div className="case-grid">
                  <div>
                    <p className="case-label">課題</p>
                    <p>{item.problem}</p>
                  </div>
                  <div>
                    <p className="case-label">施策</p>
                    <p>{item.solution}</p>
                  </div>
                  <div>
                    <p className="case-label">結果</p>
                    <p>{item.outcome}</p>
                  </div>
                </div>
                <div className="case-footer">
                  <ul className="tags">
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  {item.link && item.link !== "#" ? (
                    <a className="case-link" href={item.link} target="_blank" rel="noreferrer">
                      詳細を見る
                    </a>
                  ) : (
                    <span className="case-link muted">リンク準備中</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-head">
            <p className="eyebrow">Skills</p>
            <h2>使えること</h2>
          </div>
          <ul className="skills">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="section contact" id="contact">
          <div className="section-head">
            <p className="eyebrow">Contact</p>
            <h2>一緒に課題を整理しませんか</h2>
            <p className="section-lead">
              小さな改善からでも歓迎です。GitHub / Vercel からも成果物を確認できます。
            </p>
          </div>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              メールする
            </a>
            <a
              className="btn btn-ghost"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="btn btn-ghost"
              href={profile.vercel}
              target="_blank"
              rel="noreferrer"
            >
              Vercel
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.brand} / {profile.name}
        </p>
        <p className="footer-note">Template for web problem-solving portfolios</p>
      </footer>
    </div>
  )
}

export default App

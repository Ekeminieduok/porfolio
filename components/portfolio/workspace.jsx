"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { Arrow, Star } from "./icons";
import { ProjectCard } from "./project-card";
import { Modal } from "./modal";
import { Background } from "./roadmap";
import { projects } from "@/data/portfolio";
import { profile as contact } from "@/data/resume";
const emailLink = `mailto:${contact.email}`;
export default function PortfolioWorkspace() {
  const [tab, setTab] = useState("work"),
    [selected, setSelected] = useState(null),
    [profile, setProfile] = useState(false),
    [command, setCommand] = useState(false),
    [query, setQuery] = useState(""),
    [filter, setFilter] = useState("all"),
    [copied, setCopied] = useState(false);
  useEffect(() => {
    const key = (e) => {
      if (
        !document.querySelector(
          '[aria-label$="project details"], [aria-label="About Ekemini"]',
        ) &&
        (e.metaKey || e.ctrlKey) &&
        e.key === "k"
      ) {
        e.preventDefault();
        setCommand((v) => !v);
      }
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, []);
  async function copy() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = emailLink;
    }
  }
  const commands = [
    ...projects.map((p) => ({
      label: p.name,
      detail: "Open project",
      run: () => setSelected(p),
    })),
    {
      label: "About Ekemini",
      detail: "Meet the developer",
      run: () => setProfile(true),
    },
    {
      label: "Experience",
      detail: "View career history",
      run: () => setTab("about"),
    },
    {
      label: "Email Ekemini",
      detail: "Start a conversation",
      run: () => (window.location.href = emailLink),
    },
  ];
  return (
    <MotionConfig reducedMotion="user">
      <div
        className="shell"
        inert={selected || profile || command ? "" : undefined}
      >
        <header className="topbar">
          <a href="#" className="brand" aria-label="Ekemini home">
            <span className="brand-icon">
              e<span>e</span>
            </span>
            <span>
              EKEMINI EDUOK
              <span className="brand-sub">
                INDEPENDENT MIND. FRONTEND DEVELOPER.
              </span>
            </span>
          </a>
          <div className="top-right">
            <span className="location">
              LAGOS, NG <span>↗</span>
            </span>
            <button
              className="command-trigger"
              onClick={() => {
                setQuery("");
                setCommand(true);
              }}
              aria-label="Open quick navigation"
            >
              Jump to… <kbd>⌘ K</kbd>
            </button>
          </div>
        </header>
        <div className="workspace">
          <aside className="sidebar">
            <div className="profile-photo">
              <Image src="/cvimage.jpeg" width={960} height={1280} sizes="(max-width: 600px) 90vw, 320px" alt="Ekemini Eduok" />
              <span className="photo-tape" />
              <button
                className="photo-plus"
                onClick={() => setProfile(true)}
                aria-label="More about Ekemini"
              >
                +
              </button>
            </div>
            <div className="hello">
              Hey, I’m Ekemini <span>✳</span>
            </div>
            <h1>
              Frontend,
              <br />
              with feeling<span>.</span>
            </h1>
            <p className="bio">
              I turn complex workflows into interfaces that feel simple.
              <br />
              <br />A little engineering. A little creative instinct. A lot of
              attention to detail.
            </p>
            <button className="about-link" onClick={() => setProfile(true)}>
              The person behind the pixels <Arrow />
            </button>
            <div className="availability">
              <span />
              <div>
                Open to opportunities<small>Frontend · Fintech · Remote</small>
              </div>
            </div>
            <div className="sidebar-divider" />
            <span className="micro">CURRENT TOOLKIT</span>
            <ul className="stack-logos" aria-label="Current toolkit">
              <li key="react" title="React">
                <Image
                  src="/stack/react.svg"
                  alt="React"
                  width="25"
                  height="25"
                />
              </li>
              <li key="nextjs" title="Next.js">
                <Image
                  src="/stack/nextjs.svg"
                  alt="Next.js"
                  width="25"
                  height="25"
                />
              </li>
              <li key="typescript" title="TypeScript">
                <Image
                  src="/stack/typescript.svg"
                  alt="TypeScript"
                  width="25"
                  height="25"
                />
              </li>
              <li key="tailwindcss" title="Tailwind CSS">
                <Image
                  src="/stack/tailwindcss.svg"
                  alt="Tailwind CSS"
                  width="25"
                  height="25"
                />
              </li>
              <li key="firebase" title="Firebase">
                <Image
                  src="/stack/firebase.svg"
                  alt="Firebase"
                  width="25"
                  height="25"
                />
              </li>
            </ul>
            <div className="sidebar-bottom">
              <a className="email-link" href={emailLink}>
                Let’s make something <Arrow diagonal />
              </a>
              <div className="socials">
                <a href={contact.github} target="_blank" rel="noopener">
                  GitHub ↗
                </a>
                <a href={contact.linkedin} target="_blank" rel="noopener">
                  LinkedIn ↗
                </a>
                <a href={contact.resumeUrl} target="_blank" rel="noopener">
                  CV ↗
                </a>
              </div>
            </div>
          </aside>
          <main>
            <div className="workspace-tabs">
              <div role="tablist" aria-label="Portfolio sections">
                <button
                  role="tab"
                  aria-selected={tab === "work"}
                  className={tab === "work" ? "active" : ""}
                  onClick={() => setTab("work")}
                >
                  <span>▦</span> Selected work <small>{String(projects.length).padStart(2, "0")}</small>
                </button>
                <button
                  role="tab"
                  aria-selected={tab === "about"}
                  className={tab === "about" ? "active" : ""}
                  onClick={() => setTab("about")}
                >
                  <span>◷</span> Background
                </button>
              </div>
              <span className="workspace-hint">
                <span /> A WORK IN PROGRESS. ALWAYS.
              </span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="main-content"
              >
                {tab === "work" ? (
                  <>
                    <section className="work-intro">
                      <div>
                        <div className="micro">
                          THE PORTFOLIO / SELECTED PROJECTS
                        </div>
                        <h2>
                          Less talk.
                          <br />
                          <span>More building.</span>
                          <Star className="hero-star" />
                        </h2>
                      </div>
                      <div className="intro-aside">
                        <span className="scribble">Go on, open one. ↙</span>
                        <p>
                          Real projects. Different challenges.
                          <br />
                          One obsession: how it feels to use.
                        </p>
                        <div className="filters" aria-label="Filter projects">
                          {[
                            ["all", "All work"],
                            ["fintech", "Fintech"],
                            ["other", "& beyond"],
                          ].map(([v, label]) => (
                            <button
                              key={v}
                              onClick={() => setFilter(v)}
                              className={filter === v ? "active" : ""}
                              aria-pressed={filter === v}
                            >
                              {label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </section>
                    <motion.div layout className="project-grid">
                      <AnimatePresence mode="popLayout">
                        {projects
                          .filter(
                            (p) =>
                              filter === "all" ||
                              (filter === "fintech"
                                ? ["fx", "nrs"].includes(p.id)
                                : !["fx", "nrs"].includes(p.id)),
                          )
                          .map((p) => (
                            <ProjectCard
                              key={p.id}
                              p={p}
                              onOpen={setSelected}
                            />
                          ))}
                      </AnimatePresence>
                    </motion.div>
                    <div className="work-foot">
                      <span>DESIGNED TO BE EXPLORED, NOT JUST SCROLLED.</span>
                      <span>REACT · NEXT.JS · A LITTLE CURIOSITY ↗</span>
                    </div>
                    <section className="contact-panel">
                      <div>
                        <span className="micro">NEXT UP?</span>
                        <h2>
                          Your idea.
                          <br />
                          Our next build.
                        </h2>
                      </div>
                      <div>
                        <p>
                          Looking for someone who cares about
                          <br />
                          how it works <em>and</em> how it feels?
                        </p>
                        <a href={emailLink}>
                          Let’s talk <Arrow diagonal />
                        </a>
                        <button onClick={copy}>
                          {copied
                            ? "Copied to clipboard ✓"
                            : "Or copy my email"}{" "}
                          <span aria-live="polite">{copied ? "" : "⧉"}</span>
                        </button>
                      </div>
                      <Star className="contact-star" />
                    </section>
                  </>
                ) : (
                  <Background />
                )}
                <footer>
                  <span>© 2026 EKEMINI EDUOK</span>
                  <span>LAGOS, NIGERIA</span>
                </footer>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {selected && (
          <Modal
            key="project"
            label={`${selected.name} project details`}
            onClose={() => setSelected(null)}
          >
            <motion.article
              layoutId={`card-${selected.id}`}
              className={`expanded ${selected.id}`}
              transition={{ type: "spring", stiffness: 230, damping: 29 }}
            >
              <button
                className="close"
                aria-label="Close project"
                onClick={() => setSelected(null)}
              >
                ×
              </button>
              <div className="expanded-header">
                <div className="micro">
                  PROJECT FILE / {selected.year} — {selected.type}
                </div>
                <motion.h2 layoutId={`title-${selected.id}`}>
                  {selected.name}
                </motion.h2>
                <p>{selected.brief}</p>
              </div>
              <motion.div
                layoutId={`image-container-${selected.id}`}
                className="expanded-image"
              >
                <motion.img
                  layoutId={`image-${selected.id}`}
                  src={selected.image}
                  alt={`${selected.name} interface`}
                />
              </motion.div>
              <motion.div
                className="expanded-body"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <div className="detail-columns">
                  <div>
                    <span className="micro">THE CHALLENGE</span>
                    <p>{selected.problem}</p>
                  </div>
                  <div>
                    <span className="micro">MY CONTRIBUTION</span>
                    <p>{selected.contribution}</p>
                  </div>
                </div>
                <div className="detail-tags">
                  {selected.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="detail-actions">
                  <a
                    className="button-dark"
                    href={selected.live}
                    target="_blank"
                    rel="noopener"
                  >
                    Explore live project <Arrow diagonal />
                  </a>
                  <a href={selected.git} target="_blank" rel="noopener">
                    View source ↗
                  </a>
                  <small>ESC TO CLOSE</small>
                </div>
              </motion.div>
            </motion.article>
          </Modal>
        )}
        {profile && (
          <Modal
            key="profile"
            label="About Ekemini"
            onClose={() => setProfile(false)}
          >
            <motion.div
              className="profile-modal"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <button
                className="close"
                onClick={() => setProfile(false)}
                aria-label="Close profile"
              >
                ×
              </button>
              <Image src="/cvimage.jpeg" width={960} height={1280} sizes="(max-width: 600px) 90vw, 320px" alt="Ekemini Eduok" />
              <div>
                <span className="micro">THE HUMAN BEHIND THE CODE</span>
                <h2>
                  Curious by nature.
                  <br />
                  Builder by choice.
                </h2>
                <p>
                  I’m Ekemini, a frontend developer in Lagos. I work with React,
                  Next.js, and TypeScript to make complex workflows easier to
                  use.
                </p>
                <p>
                  My experience spans fintech, government compliance, and
                  e-commerce. Before and alongside frontend work, I also created
                  3D animation — a background that shapes how I think about
                  movement and visual feedback.
                </p>
                <p>
                  I have a B.Sc. in Computer Information Systems from Babcock
                  University, and I’m open to frontend and fintech
                  opportunities.
                </p>
                <a className="button-dark" href={emailLink}>
                  Say hello <Arrow diagonal />
                </a>
              </div>
            </motion.div>
          </Modal>
        )}
        {command && (
          <Modal
            key="command"
            label="Quick navigation"
            onClose={() => setCommand(false)}
            className="command-layer"
          >
            <motion.div
              className="command-panel"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <div className="command-input">
                <input
                  autoFocus
                  placeholder="Where would you like to go?"
                  aria-label="Search portfolio"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button
                  onClick={() => setCommand(false)}
                  aria-label="Close navigation"
                >
                  ESC
                </button>
              </div>
              <div className="command-results">
                {commands
                  .filter((x) =>
                    x.label.toLowerCase().includes(query.toLowerCase()),
                  )
                  .map((x) => (
                    <button
                      key={x.label}
                      onClick={() => {
                        setCommand(false);
                        x.run();
                      }}
                    >
                      <span>
                        {x.label}
                        <small>{x.detail}</small>
                      </span>
                      <Arrow />
                    </button>
                  ))}
                {!commands.some((x) =>
                  x.label.toLowerCase().includes(query.toLowerCase()),
                ) && <p>No matches. Try “FX”, “About”, or “Email”.</p>}
              </div>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}

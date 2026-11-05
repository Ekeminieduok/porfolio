import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useReducedMotion,
  useInView,
} from "framer-motion";
import { milestones } from "@/data/portfolio";
import { Arrow } from "./icons";
function Milestone({ item, index, reduced }) {
  const ref = useRef(null);
  const reached = useInView(ref, { margin: "0px 0px -20% 0px", once: true });
  return (
    <li
      ref={ref}
      className={`milestone ${reached ? "reached" : ""} ${item.current ? "current" : ""}`}
    >
      <motion.span
        className="milestone-node"
        aria-hidden="true"
        animate={{
          scale: reached ? 1 : 0.8,
          backgroundColor: reached ? "#7756ce" : "#eeedf2",
        }}
        transition={{ duration: reduced ? 0 : 0.4 }}
      >
        {item.education ? "◇" : String(index + 1).padStart(2, "0")}
      </motion.span>
      <motion.article
        className="milestone-card"
        initial={false}
        animate={{ y: reached || reduced ? 0 : 20 }}
        transition={{ duration: reduced ? 0 : 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="milestone-meta">
          <time>{item.date}</time>
          {item.current ? (
            <span className="current-badge">
              <i />
              Now
            </span>
          ) : (
            <span className="chapter">
              {item.education ? "EDUCATION" : "EXPERIENCE"}
            </span>
          )}
        </div>
        <span className="milestone-stage">{item.stage}</span>
        <h3>{item.company}</h3>
        <div className="milestone-role">{item.role}</div>
        <p>{item.text}</p>
        <div className="milestone-tags">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </motion.article>
    </li>
  );
}
export function Background() {
  const route = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: route,
    offset: ["start 75%", "end 70%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 85, damping: 25 });
  return (
    <section className="background">
      <div className="micro">THE BACKGROUND / A JOURNEY IN THE MAKING</div>
      <h2>
        Every chapter.
        <br />
        Something to build on.
      </h2>
      <p className="background-intro">
        From my first frontend role to creative experiments and financial
        interfaces — here’s how the journey has unfolded.
      </p>
      <div className="roadmap-caption">
        <span>
          2023 <span aria-hidden="true">⟶</span> NOW
        </span>
        <span>
          FOLLOW THE JOURNEY <span aria-hidden="true">↓</span>
        </span>
      </div>
      <div className="roadmap" ref={route}>
        <div className="roadmap-track" aria-hidden="true">
          <motion.div
            className="roadmap-fill"
            style={{ scaleY: reduced ? 1 : progress }}
          />
        </div>
        <ol>
          {milestones.map((item, index) => (
            <Milestone
              key={item.company}
              item={item}
              index={index}
              reduced={reduced}
            />
          ))}
        </ol>
        <div className="roadmap-next">
          <span className="next-node" aria-hidden="true">
            ↗
          </span>
          <div>
            <span className="micro">THE NEXT CHAPTER</span>
            <h3>Something worth building.</h3>
            <a href="mailto:rickyeduok@gmail.com">
              Let’s talk about it <Arrow diagonal />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Arrow, Star } from "./icons";
// Adapted from Watermelon UI Expandable Event Card (MIT).
// Retains shared card/image/title layout IDs and AnimatePresence expansion.
export function ProjectCard({ p, onOpen }) {
  return (
    <motion.button
      layoutId={`card-${p.id}`}
      className={`project ${p.id}`}
      onClick={() => onOpen(p)}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      aria-label={`Explore ${p.name}`}
    >
      <div className="card-top">
        <span className="project-index">
          {p.year} / {p.type}
        </span>
        <span className="card-arrow">
          <Arrow diagonal />
        </span>
      </div>
      <div className="project-heading">
        <motion.h2 layoutId={`title-${p.id}`}>{p.name}</motion.h2>
        <p>{p.label}</p>
      </div>
      <motion.div
        layoutId={`image-container-${p.id}`}
        className="project-visual"
      >
        <div className="browser-chrome">
          <i />
          <i />
          <i />
          <span>{new URL(p.live).hostname}</span>
        </div>
        <motion.img
          layoutId={`image-${p.id}`}
          src={p.image}
          alt={`${p.name} interface`}
          draggable="false"
        />
      </motion.div>
      {p.id === "fx" && (
        <div className="floating-note">
          <span className="tiny-signal">▥</span> Built for a clearer view{" "}
          <span>↗</span>
        </div>
      )}
      {p.id === "memory" && (
        <div className="play-sticker">
          <Star />
          PLAY
          <br />
          IS WORK
          <br />
          TOO.
        </div>
      )}
      <div className="card-bottom">
        <span>
          {p.id === "fx"
            ? "From concept to deployment"
            : p.id === "nrs"
              ? "Clarity in complex workflows"
              : p.id === "luciano"
                ? "Design meets functionality"
                : p.id === "jobplex"
                  ? "Career profiles and job discovery"
                  : "An independent experiment"}
        </span>
        <span>
          Look inside <Arrow />
        </span>
      </div>
    </motion.button>
  );
}

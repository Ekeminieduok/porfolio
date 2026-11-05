import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
export function Modal({ children, onClose, label, className = "" }) {
  const ref = useRef();
  const closeRef = useRef(onClose);
  useEffect(() => {
    closeRef.current = onClose;
  }, [onClose]);
  useEffect(() => {
    const previous = document.activeElement;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    ref.current?.querySelector("button,a,input")?.focus();
    const key = (e) => {
      if (e.key === "Escape") closeRef.current();
      if (e.key === "Tab") {
        const items = [
          ...ref.current.querySelectorAll('a,button,input,[tabindex="0"]'),
        ].filter((x) => !x.disabled);
        const first = items[0],
          last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = old;
      document.removeEventListener("keydown", key);
      previous?.focus();
    };
  }, []);
  return (
    <div
      className={`modal-layer ${className}`}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      ref={ref}
    >
      <motion.div
        className="scrim"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      {children}
    </div>
  );
}

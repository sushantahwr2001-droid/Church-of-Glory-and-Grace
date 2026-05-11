"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useId, type ReactNode } from "react";
import { FaXmark } from "react-icons/fa6";

type ModalProps = {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
};

export function Modal({ isOpen, title, children, onClose }: ModalProps) {
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#07050a]/[0.82] px-4 py-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onMouseDown={onClose}
        >
          <motion.div
            className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-[8px] border border-gold/[0.18] bg-[linear-gradient(145deg,#17101b,#100c14)] p-6 text-left shadow-[0_26px_90px_rgba(0,0,0,0.36)] sm:p-8"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between gap-5">
              <h2 id={titleId} className="text-2xl font-semibold text-cream">
                {title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/[0.15] text-cream transition hover:border-gold hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold"
                aria-label="Close modal"
                title="Close"
              >
                <FaXmark aria-hidden="true" />
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

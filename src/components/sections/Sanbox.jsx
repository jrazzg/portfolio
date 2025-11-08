import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Sandbox = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-gray-900">
      <motion.div
        style={{ y }}
        className="sticky top-0 h-screen flex items-center justify-center text-5xl text-white"
      >
        Smooth Scroll Animation
      </motion.div>
    </section>
  );
};

export default Sandbox;

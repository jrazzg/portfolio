import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Sandbox = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

    return (
        <section ref={targetRef} className="relative h-[50vh]">
            <motion.div
                style={{ y }}
                className="h-full flex justify-center"
            >
                <div className="flex flex-1 max-w-6xl">
                    {/* JPG ATTENDANCE */}
                    <div className="flex-1 m-6 p-6 rounded-xl border bg-black border-white/10 hover:-translate-y-1 hover:border-orange-500/30 transition-all">
                        <h3 className="text-xl font-bold mb-1">JPG Attendance</h3>
                        <span className="bg-orange-500/10 text-orange-600 py-1 px-3 rounded-full text-sm
                                                hover:bg-orange-500/20 transition uppercase"
                        >
                            mobile
                        </span>
                    </div>
                    {/* NDDU ATTENDANCE */}
                    <div className="flex-1 m-6 p-6 rounded-xl border bg-black border-white/10 hover:-translate-y-1 hover:border-orange-500/30 transition-all">
                        <h3 className="text-xl font-bold mb-1">NDDU Attendance</h3>
                        <span className="bg-orange-500/10 text-orange-600 py-1 px-3 rounded-full text-sm
                                                hover:bg-orange-500/20 transition uppercase"
                        >
                            web
                        </span>
                    </div>
                    {/* BLAAN APP */}
                    <div className="flex-1 m-6 p-6 rounded-xl border bg-black border-white/10 hover:-translate-y-1 hover:border-orange-500/30 transition-all">
                        <h3 className="text-xl font-bold mb-1">Blaan App</h3>
                        <span className="bg-orange-500/10 text-orange-600 py-1 px-3 rounded-full text-sm
                                                hover:bg-orange-500/20 transition uppercase"
                        >
                            mobile
                        </span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Sandbox;

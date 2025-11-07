import RevealOnScroll from "../RevealOnScroll"

const Project = () => {
    return (
            <section id="projects" className="min-h-screen py-20">
                <RevealOnScroll>
                    <div className="max-w-5xl mx-auto px-4 mt-5">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* JPG ATTENDANCE */}
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 transition-all">
                                <span className="bg-white h-6xl w-6xl"></span>
                                <h3 className="text-xl font-bold mb-1">JPG Attendance</h3>
                                <span className="bg-orange-500/10 text-orange-600 py-1 px-3 rounded-full text-sm
                                                hover:bg-orange-500/20 transition uppercase"
                                >
                                    mobile
                                </span>
                            </div>
                            {/* NDDU ATTENDANCE */}
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 transition-all">
                                <h3 className="text-xl font-bold mb-1">NDDU Attendance</h3>
                                <span className="bg-orange-500/10 text-orange-600 py-1 px-3 rounded-full text-sm
                                                hover:bg-orange-500/20 transition uppercase"
                                >
                                    web
                                </span>
                            </div>
                            {/* BLAAN APP */}
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 transition-all">
                                <h3 className="text-xl font-bold mb-1">Blaan App</h3>
                                <span className="bg-orange-500/10 text-orange-600 py-1 px-3 rounded-full text-sm
                                                hover:bg-orange-500/20 transition uppercase"
                                >
                                    mobile
                                </span>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </section>
    )
}
export default Project
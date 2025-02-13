import { Amphora, ArrowUp, Facebook, Flower2, Instagram, Leaf, Linkedin, ShoppingBag, Twitter } from "lucide-react"
import homePlantImage from '../assets/img/home.png'
import { AnimatePresence, motion } from "motion/react"

import Footer from "../components/Footer";
import About from '../components/About';
import PopularChoice from "../components/PopularChoice";
import Reviews from "../components/Reviews";
import Services from "../components/Services";

import { useEffect, useState } from "react";

const IndexPage = () => {

    const [showScrollUpButton, setShowScrollUpButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollUpButton(true);
            } else {
                setShowScrollUpButton(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            <main>
                <section>
                    <div className="container">

                        {/* blob 1 */}
                        <div className="w-64 h-64 bg-green-800 bg-opacity-40 blur-3xl absolute -z-10">
                        </div>

                        <div className="flex flex-col gap-5 items-center lg:flex-row">
                            {/* Content */}
                            <div className="space-y-5 lg:w-1/2">
                                <motion.h1
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.2,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <span class="text-yellow-500">Plants</span> make a <br />
                                    positive
                                    <span class="text-yellow-500"> impact</span> on <br />
                                    your environment
                                </motion.h1>

                                <motion.p
                                    initial={{ x: 20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.2,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: true }}
                                    className="text-slate-300 font-Lobster">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio fugiat eveniet, reprehenderit veritatis aut explicabo voluptatum ullam itaque tenetur numquam!
                                </motion.p>

                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.2,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: true }}
                                    className="flex md:gap-5 gap-2 lg:pt-4">
                                    <button className="btn-primary-contained flex gap-1 items-center">
                                        <span>
                                            Shop now
                                        </span>
                                        <ShoppingBag size={16} />
                                    </button>

                                    <button className="btn-primary-outlined flex gap-1 items-center">
                                        <span>
                                            Know more
                                        </span>
                                        <Leaf size={16} />
                                    </button>
                                </motion.div>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.2,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: true }}
                                    className="text-xs text-slate-300 font-Lobster">
                                    You will get 30-days free trial.
                                </motion.p>

                                <motion.div
                                    initial={{ scale: 1.1, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.2,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: true }}
                                    className="flex gap-5 w-full lg:pt-5">
                                    <Facebook className="cursor-pointer hover:text-yellow-500 duration-300" size={16} />
                                    <Twitter className="cursor-pointer hover:text-yellow-500 duration-300" size={16} />
                                    <Instagram className="cursor-pointer hover:text-yellow-500 duration-300" size={16} />
                                    <Linkedin className="cursor-pointer hover:text-yellow-500 duration-300" size={16} />
                                </motion.div>
                            </div>

                            {/* image */}
                            <div className="w-full relative lg:w-1/2">
                                <div className="relative">
                                    <motion.img
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            duration: 0.8,
                                            ease: "easeInOut"
                                        }}
                                        src={homePlantImage}
                                        alt="Home Plant Image"
                                    />
                                    <div className="w-64 h-64 bg-green-700 bg-opacity-40 blur-3xl absolute -z-10 bottom-0 right-0">
                                    </div>
                                </div>

                                {/* leaf */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        y: [0, -20, 0, -20, 0],
                                        opacity: 0.3
                                    }}
                                    transition={{
                                        duration: 6,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                    className="absolute -top-5 right-0 text-yellow-500 opacity-30">
                                    <Leaf size={50} />
                                </motion.div>

                                {/* flower */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        y: [0, -20, 0, -20, 0],
                                        opacity: 0.3
                                    }}
                                    transition={{
                                        duration: 6,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                    className="absolute bottom-5 left-2 text-yellow-500 opacity-30 lg:top-0">
                                    <Flower2 size={45} />
                                </motion.div>

                                {/* pot */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        y: [0, -20, 0, -20, 0],
                                        opacity: 0.3
                                    }}
                                    transition={{
                                        duration: 6,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                    className="hidden lg:block absolute right-0 bottom-10 text-yellow-500 opacity-30">
                                    <Amphora size={55} />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                <Services />

                <About />

                <PopularChoice />

                <Reviews />

                <Footer />
                
                <AnimatePresence>
                    {showScrollUpButton && (
                        <motion.div
                            key="scrollToTop"
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{ duration: 0.6 }}
                            className="fixed bottom-2 right-2 z-50"
                        >
                            <div
                                onClick={scrollToTop}
                                className="text-white bg-yellow-500 p-2 rounded-full shadow-lg cursor-pointer"
                                role="button"
                                aria-label="Scroll to top"
                            >
                                <ArrowUp size={25} />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    )
}

export default IndexPage
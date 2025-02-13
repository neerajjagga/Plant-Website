import { motion } from "motion/react"
import AboutPlant1 from '../assets/img/plant-2.png';
import AboutPlant2 from '../assets/img/plant-1.png';
import AboutLeaf1 from '../assets/img/leaf-3.png';

const About = () => {
    return (
        <div className="container pt-10 py-5 relative overflow-hidden">
            <div className="flex flex-col gap-5 items-center" id="about">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-yellow-500">About Us</h2>
                    <p className="text-slate-300 font-Lobster text-sm md:text-lg xl:text-xl">Follow instruction for more</p>
                </div>

                {/* about cards */}
                <div className="flex flex-col gap-10">
                    <div
                        className="flex flex-col items-center lg:flex-row gap-4 ">
                        <motion.img
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.2,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                            className="h-48 md:h-60 xl:h-72" src={AboutPlant1} alt="Plant Image" />
                        <div className="flex flex-col gap-2">
                            <motion.span
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.2,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true }}
                                className="text-2xl xl:text-4xl font-semibold">
                                Make your <span class="text-yellow-500">organic</span>  <br />
                                garden
                            </motion.span>
                            <motion.p
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.2,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true }}
                                className="font-Lobster text-slate-300 text-sm xl:text-lg lg:text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ratione rem maxime veniam cum libero voluptas tempora aut saepe similique, eos corporis. Expedita culpa consequatur animi deleniti ullam adipisci iure sequi dolores modi aliquam laudantium,
                                explicabo nobis quia id reprehenderit.?
                            </motion.p>
                        </div>
                    </div>

                    <div
                        className="flex flex-col items-center lg:flex-row gap-4 ">
                        <div className="flex flex-col gap-2">
                            <motion.span
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.2,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true }}
                                className="text-2xl xl:text-4xl font-semibold">
                                Make your <span class="text-yellow-500">organic</span>  <br />
                                garden
                            </motion.span>
                            <motion.p
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.2,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true }}
                                className="font-Lobster text-slate-300 text-sm  xl:text-lg lg:text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ratione rem maxime veniam cum libero voluptas tempora aut saepe similique, eos corporis. Expedita culpa consequatur animi deleniti ullam adipisci iure sequi dolores modi aliquam laudantium,
                                explicabo nobis quia id reprehenderit.?
                            </motion.p>
                        </div>
                        <motion.img
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                            className="h-48 md:h-60 xl:h-72" src={AboutPlant2} alt="Plant Image" />
                    </div>
                </div>

                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.2,
                        ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                    className="absolute -right-10 -top-5">
                    <img className="h-28 md:h-32 lg:h-40 xl:h-56 " src={AboutLeaf1} alt="Leaf Image" />
                </motion.div>
            </div>
        </div>
    )
}

export default About
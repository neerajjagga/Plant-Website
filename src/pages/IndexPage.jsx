import { Amphora, Facebook, Flower2, Instagram, Leaf, Linkedin, ShoppingBag, Twitter } from "lucide-react"
import homePlantImage from '../assets/img/home.png'
import { motion } from "motion/react"
import { servicesData } from './../data/services';
import ServicesCard from "../components/ServicesCard";
import AboutPlant1 from '../assets/img/plant-2.png';
import AboutPlant2 from '../assets/img/plant-1.png';
import AboutLeaf1 from '../assets/img/leaf-3.png';

const IndexPage = () => {
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

                {/* services */}
                <div className="bg-white py-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 container">
                        {servicesData.map((service, index) => (
                            <ServicesCard key={index} service={service} />
                        ))}
                    </div>
                </div>

                {/* services */}
                <div className="container pt-5 py-5 relative overflow-hidden">
                    <div className="flex flex-col gap-5 items-center">
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
            </main>
        </div>
    )
}

export default IndexPage
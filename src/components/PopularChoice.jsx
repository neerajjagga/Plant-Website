import CartPlant1 from '../assets/img/cart-1.png';
import CartPlant2 from '../assets/img/cart-2.png';
import CartPlant3 from '../assets/img/cart-3.png';
import CartPlant4 from '../assets/img/cart-4.png';
import { ShoppingCart, Star, StarHalf } from "lucide-react"
import { motion } from 'motion/react';

const PopularChoice = () => {
    return (
        <div className="pt-10 py-5 pb-10 bg-green-900 w-full" id="popular">
            <div className="flex flex-col gap-36  items-center container">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-yellow-500">Your Choice Plant</h2>
                    <p className="text-slate-300 font-Lobster text-sm md:text-lg xl:text-xl">Follow instruction for more</p>
                </div>

                {/* popular cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-36 gap-x-8 w-full">
                    {/* card 1 */}
                    <motion.div
                        initial={{ y: -30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className="container bg-green-950  relative w-full px-5 py-5 rounded-md pt-24 ">
                        <img className="absolute -top-5 h-56 left-1/2 -translate-x-1/2 duration-300 ease-in-out -translate-y-1/2 hover:scale-110 drop-shadow-xl" src={CartPlant1} alt="Cart Plant" />
                        <h2 className="font-Lobster text-slate-300">Nephrolepis exaltata</h2>
                        <p className="text-2xl md:text-3xl">Boston Fern</p>

                        <div className="flex gap-1 mt-2">
                            <Star size={16} color="#fafe10" absoluteStrokeWidth />
                            <Star size={16} color="#fafe10" absoluteStrokeWidth />
                            <Star size={16} color="#fafe10" absoluteStrokeWidth />
                            <StarHalf size={16} color="#fafe10" absoluteStrokeWidth />
                        </div>


                        <div className="flex justify-between items-center mt-2">
                            <span className="text-xl font-bold">$5</span>
                            <ShoppingCart className="bg-yellow-500 p-1 rounded-sm" size={40} absoluteStrokeWidth />
                        </div>

                    </motion.div>


                    {/* card2 */}
                    <motion.div
                        initial={{ y: -30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className="container bg-green-950  relative w-full px-5 py-5 rounded-md pt-24">
                        <img className="absolute -top-5 h-56 left-1/2 -translate-x-1/2 duration-300 ease-in-out -translate-y-1/2 hover:scale-110 drop-shadow-xl" src={CartPlant2} alt="Cart Plant" />
                        <h2 className="font-Lobster text-slate-300">Ficus elastica
                        </h2>
                        <p className="text-2xl md:text-3xl">Rubber Plant
                        </p>

                        <div className="flex gap-1 mt-2">
                            <Star size={16} color="#fafe10" absoluteStrokeWidth />
                            <Star size={16} color="#fafe10" absoluteStrokeWidth />
                            <Star size={16} color="#fafe10" absoluteStrokeWidth />
                            <StarHalf size={16} color="#fafe10" absoluteStrokeWidth />
                        </div>


                        <div className="flex justify-between items-center mt-2">
                            <span className="text-xl font-bold">$12</span>
                            <ShoppingCart className="bg-yellow-500 p-1 rounded-sm" size={40} absoluteStrokeWidth />
                        </div>

                    </motion.div>


                    {/* card3 */}
                    <motion.div
                        initial={{ y: -30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className="container bg-green-950  relative w-full px-5 py-5 rounded-md pt-24">
                        <img className="absolute -top-5 h-56 left-1/2 -translate-x-1/2 duration-300 ease-in-out -translate-y-1/2 hover:scale-110 drop-shadow-xl" src={CartPlant3} alt="Cart Plant" />
                        <h2 className="font-Lobster text-slate-300">Spathiphyllum wallisii
                        </h2>
                        <p className="text-2xl md:text-3xl">Peace Lily
                        </p>

                        <div className="flex gap-1 mt-2">
                            <Star size={16} color="#fafe10" absoluteStrokeWidth />
                            <Star size={16} color="#fafe10" absoluteStrokeWidth />
                            <Star size={16} color="#fafe10" absoluteStrokeWidth />
                            <StarHalf size={16} color="#fafe10" absoluteStrokeWidth />
                        </div>


                        <div className="flex justify-between items-center mt-2">
                            <span className="text-xl font-bold">$10</span>
                            <ShoppingCart className="bg-yellow-500 p-1 rounded-sm" size={40} absoluteStrokeWidth />
                        </div>

                    </motion.div>


                    {/* card 4 */}
                    <motion.div
                        initial={{ y: -30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className="container bg-green-950  relative w-full px-5 py-5 rounded-md pt-24">
                        <img className="absolute -top-5 h-56 left-1/2 -translate-x-1/2 duration-300 ease-in-out -translate-y-1/2 hover:scale-110 drop-shadow-xl" src={CartPlant4} alt="Cart Plant" />
                        <h2 className="font-Lobster text-slate-300">Adenium obesum
                        </h2>
                        <p className="text-2xl md:text-3xl">Desert Rose
                        </p>

                        <div className="flex gap-1 mt-2">
                            <Star size={16} color="#fafe10" absoluteStrokeWidth />
                            <Star size={16} color="#fafe10" absoluteStrokeWidth />
                            <Star size={16} color="#fafe10" absoluteStrokeWidth />
                            <StarHalf size={16} color="#fafe10" absoluteStrokeWidth />
                        </div>


                        <div className="flex justify-between items-center mt-2">
                            <span className="text-xl font-bold">$15</span>
                            <ShoppingCart className="bg-yellow-500 p-1 rounded-sm" size={40} absoluteStrokeWidth />
                        </div>

                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default PopularChoice
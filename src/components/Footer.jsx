import FooterBackground from '../assets/img/floral-1.png';
import { Facebook, Instagram, Leaf, Linkedin, SendHorizontal, Twitter } from "lucide-react"

const Footer = () => {
    return (
        <footer className="w-full bg-yellow-100 relative pt-20 pb-10 mt-32 text-black">

            {/* newsletter */}
            <div className="w-full flex justify-center">
                <div className="container absolute top-0 -translate-y-1/2">
                    {/* newsletter */}
                    <div className="container bg-green-900 py-5 rounded-md flex flex-col gap-4">
                        <h3 className="text-lg font-bold lg:text-2xl text-white">
                            <span class="text-yellow-500">Subscribe</span> to our newsletter
                        </h3>

                        <div className="flex flex-col lg:flex-row gap-2">
                            <input
                                type="text"
                                className="bg-gray-100 py-2 px-2 text-black focus:outline-none flex-1 rounded-sm"
                                placeholder="Enter your email"
                            />

                            <div className="flex bg-green-950 items-center justify-center rounded-sm text-white">
                                <button className="flex items-center gap-2 py-2 cursor-pointer px-4">Subscribe
                                    <SendHorizontal size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* social links */}
            <div className="container mt-10 md:mt-14">
                <div className="border-b border-green-700 relative flex justify-center">
                    <div
                        className="flex gap-5 text-black absolute -translate-y-1/2 bg-yellow-100 p-2 justify-center">
                        <Facebook className="cursor-pointer hover:text-yellow-500 duration-300" size={18} />
                        <Twitter className="cursor-pointer hover:text-yellow-500 duration-300" size={18} />
                        <Instagram className="cursor-pointer hover:text-yellow-500 duration-300" size={18} />
                        <Linkedin className="cursor-pointer hover:text-yellow-500 duration-300" size={18} />
                    </div>
                </div>
            </div>


            {/* content */}
            <div className="container mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10">
                {/* item 1 */}
                <div>
                    <div className="flex flex-col items-center">
                        <Leaf size={40} className="text-green-900" />
                        <p className="font-extrabold text-green-900 text-3xl font-Lobster">IndorePlants.</p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <p className="text-green-900 font-semibold">Quick Link</p>

                    <div className="flex flex-col items-center">
                        <a href="#">Plants</a>
                        <a href="#">Flowers</a>
                        <a href="#">Gardening</a>
                        <a href="#">Seeds</a>
                        <a href="#">Shipping</a>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <p className="text-green-900 font-semibold">Popular Services</p>

                    <div className="flex flex-col items-center">
                        <a href="#">Tree Planting</a>
                        <a href="#">Grass Cutting</a>
                        <a href="#">Weeds Control</a>
                        <a href="#">Project</a>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <p className="text-green-900 font-semibold">Contact Us
                    </p>

                    <div className="flex flex-col items-center">
                        <a href="#">+88 333 78 901
                        </a>
                        <a href="#">lightcodecamp@gmail.com
                        </a>
                    </div>
                </div>


            </div>

            {/* copyright */}
            <div className="container mt-10">
                <p className="text-sm text-center opacity-50">Copyright &copy; 2024 LightCode. All rights reserved.
                </p>
            </div>

            <div className="absolute bottom-0 opacity-40 pointer-events-none">
                <img className="w-full lg:w-1/3" src={FooterBackground} alt="Footer Background Image" />
            </div>
        </footer>

    )
}

export default Footer
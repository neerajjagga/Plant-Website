import { motion } from "motion/react"
import ReviewLeaf1 from '../assets/img/leaf-4.png';
import { Quote } from "lucide-react"

import ReviewImage1 from '../assets/img/review-1.jpg';
import ReviewImage2 from '../assets/img/review-2.jpg';
import ReviewImage3 from '../assets/img/review-3.jpg';
import ReviewImage4 from '../assets/img/review-4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Reviews = () => {
  return (
    <div className="pt-10 py-5 w-full relative overflow-hidden container" id="reviews">
      <div className="flex flex-col gap-16 items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-500">Customer Review</h2>
          <p className="text-slate-300 font-Lobster text-sm md:text-lg xl:text-xl">Follow instruction for more</p>
        </div>

        {/* review cards */}
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          className="rounded-lg shadow-lg w-full"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide>
            <div className="bg-green-900 py-6 px-4 rounded-md flex flex-col gap-4">
              <p className="text-sm font-Lobster text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.
              </p>
              <div className="flex items-center gap-4 relative">
                <img
                  className="w-12 h-12 object-cover rounded-full"
                  src={ReviewImage1}
                  alt={`Review image`}
                />
                <div className="flex flex-col">
                  <p className="font-bold text-white">John doe
                  </p>
                  <p className="text-yellow-500">Designer</p>
                </div>
                <Quote className="absolute  right-0" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-green-900 py-6 px-4 rounded-md flex flex-col gap-4">
              <p className="text-sm font-Lobster text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.
              </p>
              <div className="flex items-center gap-4 relative">
                <img
                  className="w-12 h-12 object-cover rounded-full"
                  src={ReviewImage2}
                  alt={`Review image`}
                />
                <div className="flex flex-col">
                  <p className="font-bold text-white">John doe
                  </p>
                  <p className="text-yellow-500">Designer</p>
                </div>
                <Quote className="absolute  right-0" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-green-900 py-6 px-4 rounded-md flex flex-col gap-4">
              <p className="text-sm font-Lobster text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.
              </p>
              <div className="flex items-center gap-4 relative">
                <img
                  className="w-12 h-12 object-cover rounded-full"
                  src={ReviewImage3}
                  alt={`Review image`}
                />
                <div className="flex flex-col">
                  <p className="font-bold text-white">John doe
                  </p>
                  <p className="text-yellow-500">Designer</p>
                </div>
                <Quote className="absolute  right-0" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-green-900 py-6 px-4 rounded-md flex flex-col gap-4">
              <p className="text-sm font-Lobster text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.
              </p>
              <div className="flex items-center gap-4 relative">
                <img
                  className="w-12 h-12 object-cover rounded-full"
                  src={ReviewImage4}
                  alt={`Review image`}
                />
                <div className="flex flex-col">
                  <p className="font-bold text-white">John doe
                  </p>
                  <p className="text-yellow-500">Designer</p>
                </div>
                <Quote className="absolute  right-0" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut"
          }}
          viewport={{ once: true }}
          className="absolute -left-10 -top-5">
          <img className="h-28 lg:h-36 xl:h-44" src={ReviewLeaf1} alt="Leaf Image" />
        </motion.div>
      </div>
    </div>

  )
}

export default Reviews
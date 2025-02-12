import { motion } from "motion/react"

const ServicesCard = ({ service }) => {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.2,
        delay: 0.5,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      className='border border-green-500 container text-green-700 rounded-md py-5 flex flex-col gap-2'>
      <div className="flex gap-2 items-center">
        <div className="text-green-500">
          <service.icon />
        </div>
        <span className="font-bold">{service.title}</span>
      </div>
      <p className="text-sm text-green-900 font-Lobster">
        {service.subtitle}
      </p>
    </motion.div>
  )
}

export default ServicesCard
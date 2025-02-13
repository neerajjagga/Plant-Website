import { servicesData } from '../data/services';
import ServicesCard from './ServicesCard';

const Services = () => {
    return (
        <div className="bg-white py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 container">
                {servicesData.map((service, index) => (
                    <ServicesCard key={index} service={service} />
                ))}
            </div>
        </div>
    )
}

export default Services
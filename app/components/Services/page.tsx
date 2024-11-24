import Image from 'next/image';
import serviceImage from "../../../assets/blue-pattern.png"

const ServicesSection = () => {
    return (
        <div className='h-[240px] '>
            <div className="relative font-sans">
                <div
                    className="w-full max-w-sm rounded p-6 bg-gray-800 shadow-[0_6px_24px_-12px_rgba(0,0,0,0.2)] absolute top-0 before:w-4 before:h-4 before:rotate-45 before:bg-gray-800 before:absolute before:-bottom-1.5 before:left-0  before:right-0 before:mx-auto">
                    <div className="flex flex-wrap items-center cursor-pointer w-full border-b pb-4">
                        <Image src={serviceImage} alt='solaiman' className="w-14 h-14 rounded-full border p-1 border-white" />
                        <div className="ml-4 flex-1">
                            <p className="text-base text-white font-semibold">John Doe</p>
                            <p className="text-xs text-gray-300">Marketing coordinator</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-300 my-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan,
                        nunc et tempus blandit.</p>
                    <div className="flex mb-2">
                        <p className="text-sm text-gray-300 font-semibold flex-1">25 GB</p>
                        <p className="text-sm text-gray-300 font-semibold">50 GB</p>
                    </div>
                    <div className="bg-gray-300 rounded-full w-full h-2.5">
                        <div className="w-1/2 h-full rounded-full bg-blue-600 flex items-center">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
// icons
import food from '../../assets/icons/food.png';
import jar from '../../assets/icons/jar.png';
import family from '../../assets/icons/family.png';

export default function WhyChooseUs() {
    return (
        <div>
            <section className=' px-4 sm:px-14'>
                <div className=''>
                    <div className="w-full flex justify-start items-center pl-5 sm:pl-10 relative pb-4">
                        <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#fd9b40] rounded-full flex justify-center items-center text-[#290c06] font-medium z-10">
                            <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">04</span> Why Choose Us
                        </div>
                        <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#290c06] rounded-full flex justify-center items-center text-[#290c06] font-medium absolute top-2 left-13">
                            <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">04</span> Why Choose Us 
                        </div>
                    </div>
                    <hr className='mt-5 mb-5' />
                </div>

                <div className='w-full h-auto' >
                    <div className='mb-5 font-bold'>
                        <div className='sm:text-5xl text-4xl text-center p-4 font-semibold '>Powered By Nature, Driven By Science</div>
                        <div className='text-xl p-4'>Discover the harmony that comes with natural products that actually work! We&apos;ve crafted formulas fortified with active botanicals that not only improve general health but specific conditions as well. This is made possible by our unique strength as one of India&apos;s leading manufacturers and exporters of standardized botanical extracts over the years.</div>
                        <div className='bg-[#fdfde1] flex sm:flex-row flex-col justify-center items-center p-4 sm:px-14'>
                            <div className='p-5 '>
                                <div className='border-[2px] border-[#290c06] rounded-xl h-[300px] flex-col text-center justify-center p-5'>
                                    {/* Icon */} <div className='flex items-center justify-center'> <img src={food} /> </div>
                                    {/* Text */} <div>Chances are that I&apos;m missing essential nutrients through the food I eat.</div>
                                </div>
                            </div>
                            <div className='p-5'>
                                <div className='border-[2px] border-[#290c06] rounded-xl h-[300px] flex-col text-center justify-center p-5'>
                                    {/* Icon */} <div className='flex items-center justify-center'> <img src={jar} /> </div>
                                    {/* Text */} <div>Flora Extracts&apos; natural supplements can help me overcome this challenge.</div>
                                </div>
                            </div>
                            <div className='p-5'>
                                <div className='border-[2px] border-[#290c06] rounded-xl h-[300px] flex-col text-center justify-center p-5'>
                                    {/* Icon */} <div className='flex items-center justify-center'> <img src={family} /> </div>
                                    {/* Text */} <div>I get the ultimate benefit of a longer and healthier life with my loved ones!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
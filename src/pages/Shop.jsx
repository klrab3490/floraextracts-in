import { useState } from 'react';
import Extract from '../sections/ShopSections/Extract/Extract';
import FinishedProducts from '../sections/ShopSections/FinishedProduct/FinishedProducts';
import NaturalColors from '../sections/ShopSections/NaturalColors/NaturalColors';
import NaturalPreservatives from '../sections/ShopSections/NaturalPreservatives/NaturalPreservatives';
import Spices from '../sections/ShopSections/Spices/Spices';

export default function Shop() {
    const contents = [
        <Extract key={'Extract'} />,
        <FinishedProducts key={'FinishedProducts'} />,
        <NaturalColors key={'NaturalColors'} />,
        <NaturalPreservatives key={'NaturalPreservatives'} />,
        <Spices key={'Spices'} />,
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className='px-4 sm:px-14'>
            <div className='flex flex-col sm:flex-row items-center justify-center py-5'>
                <div className={currentIndex === 0 ? 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline text-[#fd9b40]' : 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline'} onClick={() => setCurrentIndex(0)}>Extracts</div>
                <div className={currentIndex === 1 ? 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline text-[#fd9b40]' : 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline'} onClick={() => setCurrentIndex(1)}>Finished Products</div>
                <div className={currentIndex === 2 ? 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline text-[#fd9b40]' : 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline'} onClick={() => setCurrentIndex(2)}>Natural Food Colours</div>
                <div className={currentIndex === 3 ? 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline text-[#fd9b40]' : 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline'} onClick={() => setCurrentIndex(3)}>Natural Preservatives</div>
                <div className={currentIndex === 4 ? 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline text-[#fd9b40]' : 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline'} onClick={() => setCurrentIndex(4)}>Spices</div>
            </div>
            <div>
                {contents[currentIndex]}
            </div>
        </div>
    );
}

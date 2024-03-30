import Modal from 'react-modal'
import { useState } from 'react'
import { motion } from 'framer-motion'


// Image
import Curcumin from "../../../assets/Natural Color/Yellow/Curcumin.jpg"
import img_4 from "../../../assets/Natural Color/Yellow/img_4.jpg"
import Marigold from "../../../assets/Natural Color/Yellow/Marigold.png"
import Safflower from "../../../assets/Natural Color/Yellow/Safflower.png"

// Image-Table
import table from "../../../assets/Natural Color/Table/YellowTable.png"

export default function Yellow() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex flex-col justify-center items-center mb-4 sm:mb-14" >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-4xl font-bold text-[#FDAE17]" > Yellow </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex flex-col gap-4 p-2" >
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="flex flex-wrap justify-center items-center gap-4 h-52 sm:h-auto" >
          <div className="w-40 h-[140px]" >
            <img src={Curcumin} alt='Curcumin' className='w-full h-full object-cover' />
          </div>
          <div className="w-40 h-[140px]" >
            <img src={Marigold} alt='Marigold' className='w-full h-full object-cover' />
          </div>
          <div className="w-40 h-[140px]" >
            <img src={img_4} alt='img_4' className='w-full h-full object-cover' />
          </div>
          <div className="w-40 h-[140px]" >
            <img src={Safflower} alt='Safflower' className='w-full h-full object-cover' />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="flex flex-col w-full justify-center items-center" >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} >
            <p className="py-2">Yellow shades vary from a pastel yellow to an intense deep lemon hue which are naturally suited for a wide range of applications in the food and beverage industry. The raw ingredients used by Plant Lipids to achieve these yellow hues are derived from a variety of sources including Curcumin, Marigold, Beta Carotene & Safflower.</p>
            <p className="py-2">These ingredients are used to create a range of products, from Oil Soluble Liquids to Powders and Water Dispersible Liquids by using Plant Lipids Super-Sol Concept Technology.</p>
            <p className="py-2">These formulations are designed with you, the customer in mind, so whatever your application – savoury, ready meals, sauces, beverages, confectionery or dairy, we have the perfect tailor-made products to deliver these shades.</p>
          </motion.div>
          
        </motion.div>
        <div className='hidden sm:flex justify-center items-center'>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="overflow-x-auto">
            <table className="table-fixed border-collapse border border-slate-500">
              <thead className="bg-slate-300 ">
                <tr>
                  <th rowSpan={2} className="border border-slate-600 w-36">Product Name</th>
                  <th rowSpan={2} className="border border-slate-600 w-36">Solubility</th>
                  <th rowSpan={2} className="border border-slate-600 w-36">Form</th>
                  <th colSpan={3} className="border border-slate-600">Stability</th>
                  <th rowSpan={2} className="border border-slate-600 w-[700px]">Typical Applications</th>
                </tr>
                <tr>
                  <th className="border border-slate-600 w-[54px]">pH</th>
                  <th className="border border-slate-600 w-[54px]">Heat</th>
                  <th className="border border-slate-600 w-[54px]">Light</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="text-center">
                  <td className="border border-slate-600 font-semibold" rowSpan={2}>Curcumin</td>
                  <td className="border border-slate-600 font-semibold">Water Soluble</td>
                  <td className="border border-slate-600">Liquid / Powder</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600 text-start p-2">Dairy, Bakery, Confectionery, Beverages, Meat, Poultry, Sea Foods, Seasoning, Extruded Snacks, Pharmaceuticals, Decorations, Coatings & Fruit preparations</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-slate-600 font-semibold">Oil Soluble</td>
                  <td className="border border-slate-600">Liquid</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600 text-start p-2">Meat, Poultry, Decorations, Coatings, Fats & Oils</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-slate-600 font-semibold" rowSpan={2}>Beta Carotene</td>
                  <td className="border border-slate-600 font-semibold">Water Soluble</td>
                  <td className="border border-slate-600">Liquid / Powder</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600 text-start p-2">Dairy, Bakery, Confectionery, Beverages, Meat, Poultry, Sea Foods, Seasoning, Extruded Snacks, Pharmaceuticals, Decorations, Coatings & Fruit preparations</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-slate-600 font-semibold">Oil Soluble</td>
                  <td className="border border-slate-600">Liquid</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600 text-start p-2">Meat, Poultry, Sea Foods,  Decorations,  Coatings, Fruit preparations, Fats & Oils</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-slate-600 font-semibold" rowSpan={2}>Xanthophyll (Marigold)</td>
                  <td className="border border-slate-600 font-semibold">Water Soluble</td>
                  <td className="border border-slate-600">Liquid</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600 text-start p-2">Dairy, Bakery, Confectionery, Pharmaceuticals, Sauces, Curries</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-slate-600 font-semibold">Oil Soluble</td>
                  <td className="border border-slate-600">Liquid</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600 text-start p-2">Fats & Oils</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-slate-600">Safflower</td>
                  <td className="border border-slate-600 font-semibold">Water Soluble</td>
                  <td className="border border-slate-600">Liquid / Powder</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600 text-start p-2">Pharmaceuticals, Dairy, Bakery & Confectionery</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
        <div>
            <div className='flex sm:hidden' onClick={() => setModalIsOpen(true)}>
                <img src={table} alt='table' className='w-full object-cover' />
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} contentLabel="Image Modal" >
                <img src={table} alt='table' className='w-full object-cover ' style={{ transform: 'rotate(90deg)' }} />
            </Modal>
        </div>
      </motion.div>
    </motion.div>
  )
}


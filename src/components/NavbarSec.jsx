// icon
import Logo from "../assets/Flora Logo.svg";

// import
import { NavLink } from "react-router-dom";
import { MenuButton } from "./MenuButton";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer"
import ImpNews from "./ImpNews";

function ScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

function NavbarSec() {
    // Navabr Animation Mobile View : Framer Motion
    const [isOpen, setOpen] = useState(false);  
    const [navRef] = useInView();
    const handleClose = useCallback(() => {
        setOpen(!isOpen);
    }, [isOpen]);

    const variants = {
        open: { opacity: 1, y: 0, transition: { staggerChildren: 0.5 } },
        closed: { opacity: 0, y: "-100%" },
    };
    const itemVariants = {
        open: { opacity: 1, y: 0, transition: { delay: 0.4 } },
        closed: { opacity: 0, y: -50 },
    };
    const menuButtonStyle = {
        marginLeft: "2rem",
    };

    return (
        <div className="sticky top-0 z-[1000] bg-[#004812] text-white">
            <motion.div ref={navRef} initial={{ y:-50, opacity:0}} animate={{y:0, opacity:1}} transition={{ type: "spring", damping: 30,duration:500 , stiffness: 200, ease: "easeOut" }} className="w-full flex justify-between items-center py-2 font-semibold ">
                <div className="hidden md:flex flex-col items-center cursor-pointer sm:pl-14 pl-0">
                    <img src={Logo} alt="Floral Extracts" className="h-20" />
                </div>
                <div className="flex sm:pr-14 pr-0">
                    <div className="px-4 py-2 hidden md:flex" onClick={ScrollToTop}>
                        <NavLink to={"/"} className="text-2xl hover:text-[#fd9b40] transition duration-300 cursor-pointer"> Home </NavLink>
                    </div>
                    <div className="px-4 py-2 hidden md:flex " onClick={ScrollToTop}>
                        <NavLink to={"/about"} className="text-2xl hover:text-[#fd9b40] transition duration-300 cursor-pointer"> About </NavLink>
                    </div>
                    <div className="px-4 py-2 hidden md:flex" onClick={ScrollToTop}>
                        <NavLink to={"/shop"} className="text-2xl hover:text-[#fd9b40] transition duration-300 cursor-pointer"> Products </NavLink>
                    </div>
                    <div className="px-4 py-2 hidden md:flex " onClick={ScrollToTop}>
                        <NavLink to={"/gallery"} className="text-2xl hover:text-[#fd9b40] transition duration-300 cursor-pointer"> Gallery </NavLink>
                    </div>
                    <div className="px-4 py-2 hidden md:flex" onClick={ScrollToTop}>
                        <NavLink to={"/contact"} className="text-2xl hover:text-[#fd9b40] transition duration-300 cursor-pointer"> Contact </NavLink>
                    </div>
                </div>
            </motion.div>
            <div className="flex md:hidden items-center justify-between px-5 relative pb-4">
                <div className="flex items-center space-x-4 justify-center">
                    <img src={Logo} alt="Floral Extracts" className="h-16" />
                </div>
                <div className="">
                    <MenuButton color="#FFF" isOpen={isOpen} onClick={() => {ScrollToTop();setOpen(!isOpen)}} strokeWidth={4} style={menuButtonStyle} />
                </div>
            </div>
            <div className={`fixed left-0 w-full z-50 ${isOpen ? "" : "hidden"}`}>
                <div className="w-full px-5 h-full flex items-center justify-center">
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div key="menu" initial="closed" animate="open" exit="closed" variants={variants} className="xl:hidden border-[1px] border-[#290c06] w-full p-5 space-y-4 rounded-xl text-2xl flex-col items-center justify-center bg-[#004812] text-center z-30">
                                <motion.div onClick={handleClose} variants={itemVariants} className="border-[1px] border-[#290c06] py-2 rounded-xl">
                                    <NavLink to={"/"} onClick={ScrollToTop}>Home</NavLink>
                                </motion.div>
                                <motion.div onClick={handleClose} variants={itemVariants} className="border-[1px] border-[#290c06] py-2 rounded-xl">
                                    <NavLink to={"/about"} onClick={ScrollToTop}>About</NavLink>
                                </motion.div>
                                <motion.div onClick={handleClose} variants={itemVariants} className="border-[1px] border-[#290c06] py-2 rounded-xl">
                                    <NavLink to={"/shop"} onClick={ScrollToTop}>Products</NavLink>
                                </motion.div>
                                <motion.div onClick={handleClose} variants={itemVariants} className="border-[1px] border-[#290c06] py-2 rounded-xl">
                                    <NavLink to={"/gallery"} onClick={ScrollToTop}>Gallery</NavLink>
                                </motion.div>
                                <motion.div onClick={handleClose} variants={itemVariants} className="border-[1px] border-[#290c06] py-2 rounded-xl">
                                    <NavLink to={"/contact"} onClick={ScrollToTop}>Contact</NavLink>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <ImpNews>
                <p>We are excited to announce that images from the <strong>IFT Suppliers Expo</strong> in Chicago are now available! Head over to our gallery to see highlights from the event. We hope you enjoy the photos and feel inspired by the connections and moments captured.</p>
            </ImpNews>
        </div>
    );
}

export default NavbarSec;

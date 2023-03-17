import useTitle from "../hooks/usetitle";
import { motion } from "framer-motion";
import profilePic from "../assets/profilePic.jpg"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useState } from "react";
import { FaGithubSquare, FaLightbulb } from "react-icons/fa"
import { aboutBulb, aboutH1, aboutPic } from "../utiles/motion";
import { GiCaptainHatProfile } from "react-icons/gi"
import { appVer } from "../utiles/version";
const About = () => {

    const [bulb, setBulb] = useState(false)
    useTitle("About")
    return (
        <div className="max-w-[1240px] mx-auto  " >
            <div>
                <motion.div variants={aboutPic} initial="hidden" whileInView="visible" className=" grid place-content-center  " >
                    <div className="bg-black rounded-full text-white p-8 border-2 " >
                        <GiCaptainHatProfile size={160} />
                    </div>

                </motion.div>
                <motion.div variants={aboutH1} whileInView="visible" initial="hidden" className="text-center pt-8 flex items-center justify-center " >
                    <h1 className="text-3xl lg:text-5xl capitalize font-Poppins-Regular bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent font-bold  " >
                        A pristine thought
                    </h1>

                    <motion.div variants={aboutBulb} initial="hidden" style={{ color: "#000000" }} animate={bulb ? "visible" : "hidden"}  ><FaLightbulb size={40} onClick={() => setBulb(!bulb)} className="ml-3 cursor-grabbing dark:text-yellow-400 dark:shadow-xl    " /></motion.div>

                </motion.div>

                <div className=" flex items-center justify-center py-4  " >
                    <div  >
                        <h1 className="text-sm text-black dark:text-sky-500 tracking-widest font-Poppins-Regular" >A place for planning and success.</h1>
                        <div className="flex flex-col py-4  text-dark dark:text-white  " >
                            <ul className="dark:bg-slate-700   bg-slate-300 rounded-lg " >
                                {appVer.map(varInfo => (
                                    <li key={varInfo.id} className=" py-1 mx-3 " >{varInfo.title} : <span className="mx-1" >{varInfo.level}</span> </li>

                                ))}
                            </ul>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default About
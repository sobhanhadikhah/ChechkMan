import useTitle from "../hooks/usetitle";
import { motion } from "framer-motion";
import profilePic from "../assets/profilePic.jpg"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useState } from "react";
import { FaGithubSquare, FaLightbulb } from "react-icons/fa"
import { aboutBulb, aboutH1, aboutPic } from "../utiles/motion";

const About = () => {
    const iconsVar = [
        {
            
        }
    ]
    const [bulb, setBulb] = useState(false)
    useTitle("About")
    return (
        <div className="max-w-[1240px] mx-auto  " >
            <div>
                <motion.div variants={aboutPic} initial="hidden" whileInView="visible" className="grid place-content-center  " >
                    <LazyLoadImage

                        effect="blur"
                        alt={"profile"}
                        className="rounded-full max-w-[260px] "
                        src={profilePic} // use normal <img> attributes as props
                    />

                </motion.div>
                <motion.div variants={aboutH1} whileInView="visible" initial="hidden" className="text-center mt-8 flex items-center justify-center " >
                    <h1 className="text-3xl lg:text-4xl capitalize font-Poppins-Regular bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent font-bold  " >
                        A pristine thought
                    </h1>

                    <motion.div variants={aboutBulb} initial="hidden" style={{ color: "#000000" }} animate={bulb ? "visible" : "hidden"}  ><FaLightbulb size={40} onClick={() => setBulb(!bulb)} className="ml-3 cursor-grabbing dark:text-yellow-400 dark:shadow-xl    " /></motion.div>

                </motion.div>

                <div>

                </div>

            </div>

        </div>
    )
}

export default About
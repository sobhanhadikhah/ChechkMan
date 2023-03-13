import React from 'react'
import { IoAdd } from "react-icons/io5";
import { AiFillDelete } from 'react-icons/ai';
const NavigitionBottem = () => {
    return (
        <div>
            <div className="w-full ">
                <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
                    <div id="tabs" className="flex justify-between">
                        <a href="#" className="w-full focus:text-teal-500 hover:text-green-500 text-green-400 justify-center inline-block text-center pt-2 pb-1">
                            <div className='inline-block mb-1' >
                                <IoAdd size={30} />
                            </div>
                            <span className="tab tab-home block text-sm text-black ">Add</span>
                        </a>
                        {/* add more item here */}
                        <a href="#" className="w-full focus:text-red-400 hover:text-red-500 justify-center inline-block text-center pt-2 pb-1">
                            <div className='inline-block mb-1' >
                                <AiFillDelete size={30} />
                            </div>
                            <span className="tab tab-home block text-sm text-black ">Remove</span>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default NavigitionBottem;
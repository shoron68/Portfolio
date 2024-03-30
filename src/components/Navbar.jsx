import React, { useEffect } from 'react'
import pp from "../assets/profile.jpg"
import { ImPhone } from "react-icons/im";

import { MdEmail } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTypewriter,Cursor } from 'react-simple-typewriter'




const Navbar = () => {

    useEffect(()=>{
        AOS.init({duration:"1000"})
    })
    let [text]= useTypewriter ({
        words: [ 'Support Engineer','WordPress Enthusiast' ],
        loop:{},
    })

    return (
        <>
            <div className="bg-[#030303]">
                <div className=" pt-10">
                    <div className="container mx-auto lg:flex lg:justify-between ">
                        <div className="lg:w-[30%] w-full lg:text-start text-center data-aos='fade-up'" data-aos='fade-in'>
                            <img src={pp} className="h-[250px] w-[250px] bg-[white] lg:mx-0 mx-auto  "  alt="" />
                            <h1 className=' text-[#DEC295] font-pops text-[38px] font-bold'>TANVIR HASAN</h1>
                            <h2 className='text-white font-pops text-[26px] font-semibold '> {text} <Cursor/> </h2>
                        </div>


                        <div className="lg:w-[30%] w-full  lg:mt-[32px] mt-[20px] lg:pt-[0] px-[10px] data-aos='fade-right'">
                            <h2 className='text-[28px] lg:text-start text-center font-pops text-[white]  font-medium border-b-[3px] pb-[5px]' data-aos='fade-in'>Contacts</h2>
                            <div className=" lg:mt-[30px] mt-[20px]">
                                <div className="flex data-aos='fade-right'">
                                    <div className="relative lg:h-[39px] h-[34px] lg:w-[40px] w-[35px] bg-[#DEC295] rounded-[50%]" data-aos='fade-right'>
                                    <ImPhone   className=' font-pops  text-[18px]  absolute lg:top-[26%] top-[23%] left-[27%]' data-aos='fade-right' />
                                    </div>
                                    <a href="tel:+8801715229688" className='font-pops text-[white] ml-[20px] mt-[7px]  duration-300 hover:text-[#DEC295]' data-aos='fade-right'>+880 1715 22 96 88</a>
                                </div>
                                <div className="flex my-[10px] data-aos='fade-right'">
                                    <div className="relative lg:h-[39px] h-[34px] lg:w-[40px] w-[35px] bg-[#DEC295] rounded-[50%] "  data-aos='fade-left'>
                                    <MdEmail className=' text-[18px]  absolute lg:top-[26%] top-[23%] left-[27%]' data-aos='fade-left' />
                                    </div>
                                    <a href=" to:th.shovon2014@gmail.com"  className='font-pops text-[white] ml-[20px] mt-[7px] duration-300 hover:text-[#DEC295]' data-aos='fade-left' >th.shovon2014@gmail.com</a>
                                </div>
                                <div className="flex data-aos='fade-right'">
                                    <div className="relative lg:h-[39px] h-[34px] lg:w-[40px] w-[35px] bg-[#DEC295] rounded-[50%]" data-aos='fade-right'>
                                    <CiGlobe  className=' text-[18px]  absolute lg:top-[26%] top-[23%] left-[27%]' data-aos='fade-right'/>
                                    </div>
                                    <a href="www.tanvircodex.com" className='font-pops text-[white] ml-[20px] mt-[7px] duration-300 hover:text-[#DEC295]' data-aos='fade-right' >www.tanvircodex.com</a>
                                </div>
                                <div className="flex  mt-[10px] data-aos='fade-right'">
                                    <div className=" relative lg:h-[39px] h-[34px] lg:w-[40px] w-[35px] bg-[#DEC295] rounded-[50%]" data-aos='fade-left'>
                                    <IoLocationSharp className=' text-[18px]  absolute lg:top-[26%] top-[23%] left-[27%]' data-aos='fade-left'/>
                                    </div>
                                    <a href="#" className='font-pops text-[white] ml-[20px]  w-[70%] duration-300 hover:text-[#DEC295]' data-aos='fade-left'>H# F-23, R# S-3, Eastern
                                        Housing 2nd Phase, Pallabi,
                                        Rupnagar, Dhaka - 1216</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
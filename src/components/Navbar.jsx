import React from 'react'
import pp from "../assets/profile.jpg"
import { ImPhone } from "react-icons/im";

import { MdEmail } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";




const Navbar = () => {
    return (
        <>
            <div className="bg-[#030303]">
                <div className=" pt-10">
                    <div className="container mx-auto lg:flex lg:justify-between ">
                        <div className="lg:w-[30%] w-full lg:text-start text-center">
                            <img src={pp} className="h-[250px] w-[250px] bg-[white] lg:mx-0 mx-auto  "  alt="" />
                            <h1 className=' text-[#DEC295] font-pops text-[38px] font-bold'>TANVIR HASAN</h1>
                            <h2 className='text-white font-pops text-[26px] font-semibold '>Support Engineer</h2>
                        </div>


                        <div className="lg:w-[30%] w-full  mt-[32px] lg:pt-[0] px-[10px]">
                            <h2 className='text-[28px] lg:text-start text-center font-pops text-[white]  font-medium border-b-[3px] pb-[5px]'>Contacts</h2>
                            <div className=" mt-[30px]">
                                <div className="flex ">
                                    <div className="relative h-[39px] w-[40px] bg-[#DEC295] rounded-[50%]">
                                    <ImPhone   className=' font-pops  text-[18px]  absolute top-[26%] left-[27%]' />
                                    </div>
                                    <a href="#" className='font-pops text-[white] ml-[20px] mt-[7px]  duration-300 hover:text-[#DEC295]'>+880 1715 22 96 88</a>
                                </div>
                                <div className="flex my-[10px]">
                                    <div className="relative h-[39px] w-[40px] bg-[#DEC295] rounded-[50%]">
                                    <MdEmail className=' text-[18px]  absolute top-[26%] left-[27%]' />
                                    </div>
                                    <a href="#" className='font-pops text-[white] ml-[20px] mt-[7px] duration-300 hover:text-[#DEC295]' >th.shovon2014@gmail.com</a>
                                </div>
                                <div className="flex">
                                    <div className="relative h-[39px] w-[40px] bg-[#DEC295] rounded-[50%]">
                                    <CiGlobe  className='] text-[18px]  absolute top-[26%] left-[27%]'/>
                                    </div>
                                    <a href="#" className='font-pops text-[white] ml-[20px] mt-[7px] duration-300 hover:text-[#DEC295]' >www.tanvircodex.com</a>
                                </div>
                                <div className="flex  mt-[10px]">
                                    <div className=" relative h-[39px] w-[40px] bg-[#DEC295] rounded-[50%]">
                                    <IoLocationSharp className=' text-[18px]  absolute top-[26%] left-[27%]' />
                                    </div>
                                    <a href="#" className='font-pops text-[white] ml-[20px]  w-[70%] duration-300 hover:text-[#DEC295]'>H# F-23, R# S-3, Eastern
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
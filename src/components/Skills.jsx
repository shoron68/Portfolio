import React, { useEffect } from 'react'
import { FaFacebook,FaLinkedin,FaGithub   } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"

const Skills = () => {
    useEffect(()=>{
        AOS.init({duration:"1200"})
    })
    return (
        <>
            <div className="bg-[#030303] lg:px-0 px-[10px]">
                <div className="container mx-auto">
                    <div className=" lg:flex lg:justify-between pt-[50px]">
                        <div className="lg:w-[40%] w-full">
                            <div className="" data-aos='fade-up'>
                                <h2 className=' text-[#DEC295] pb-[5px] text-[34px] font-pops font-bold border-b-2 lg:text-start text-center'>Languages</h2>
                                <ul className='ml-[20px] pt-10'>
                                    <li><p className='text-[white] font-pops text-[16px]' data-aos='fade-right'>English</p></li>
                                    <li ><p className='text-[white] font-pops text-[16px] py-[10px]' data-aos='fade-right' >Bangla</p></li>
                                    <li><p className='text-[white] font-pops text-[16px]' data-aos='fade-right'>Hindi</p></li>
                                </ul>
                            </div>
                            <div className=" pb-[10px]">
                                <div className="lg:mt-[25px] mt-[20px]" data-aos='fade-up' >
                                <h2 className=' text-[#DEC295] pb-[5px] text-[34px] font-pops font-bold border-b-2 lg:text-start text-center'  >Links</h2>
                                    <div className=" flex pt-3" data-aos='fade-right'>
                                        <FaFacebook className='text-[#DEC295] lg:text-[25px] text-[20px] lg:mr-[20px] mr-[10px] ' data-aos='fade-right' />
                                        <a href="https://www.facebook.com/shovon.pabna/"  target="_blank" className='text-[white] font-pops font-medium lg:text-[16px] text-[12px]  duration-300 hover:text-[#DEC295]' data-aos='fade-right'>https://www.facebook.com/shovon.pabna/</a>
                                    </div>
                                    <div className=" flex py-[10px]" data-aos='fade-right'>
                                        <FaLinkedin  className='text-[#DEC295] lg:text-[25px] text-[20px] lg:mr-[20px] mr-[10px] 'data-aos='fade-right' />
                                        <a href="https://www.linkedin.com/in/tanvir-hasan-18bb4a15b/"  target="_blank" className='duration-300 hover:text-[#DEC295] text-[white] font-pops font-medium lg:text-[16px] text-[12px]' >https://www.linkedin.com/in/tanvir-hasan-18bb4a15b/</a>
                                    </div>
                                    <div className=" flex " >
                                        <FaGithub  className='text-[#DEC295] lg:text-[25px] text-[20px] lg:mr-[20px] mr-[10px] 'data-aos='fade-right' />
                                        <a href="https://github.com/TanvirHasan19"  target="_blank" className='duration-300 hover:text-[#DEC295] text-[white] font-pops font-medium lg:text-[16px] text-[12px]' >https://github.com/TanvirHasan19</a>
                                    </div>
                                    
                                </div>
                            </div>

                        </div>
                        <div className="lg:w-[30%] w-full  ">
                            <div className="" data-aos='fade-up' >
                            <h2 className=' text-[#DEC295] pb-[5px] text-[34px] font-pops font-bold border-b-2 lg:text-start text-center' >Skills</h2>
                            <ul className='ml-[20px] pt-10'>
                                    <li><p className='text-[white] font-pops text-[16px]' data-aos='fade-right'>HTML</p></li>
                                    <li ><p className='text-[white] font-pops text-[16px] py-[15px]' data-aos='fade-right'>CSS</p></li>
                                    <li><p className='text-[white] font-pops text-[16px]' data-aos='fade-right'>PHP</p></li>
                                    <li><p className='text-[white] font-pops text-[16px] py-[15px]' data-aos='fade-right'>WordPress</p></li>
                                    <li ><p className='text-[white] font-pops text-[16px]' data-aos='fade-right' >Dokan</p></li>
                                    <li><p className='text-[white] font-pops text-[16px] py-[15px]' data-aos='fade-right'>Customer Support</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Skills
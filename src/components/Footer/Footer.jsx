

import { FaLinkedinIn } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";

import React from 'react'

const Footer = () => {
  return (
    <div className='mt-auto p-4 bg-[var(--gray1)] dark:bg-[var(--gray2)]'>
      <div className='flex justify-center gap-10 m-auto'>
        <div className=''>
          <div><a href="https://www.linkedin.com/in/eric-segawa-5150472b6/" target="_blank" className="text-[var(--gray2)] dark:text-[var(--gray1)] hover:text-[#0A66C2]"><FaLinkedinIn className="size-6"/></a></div>
        </div>
        <div className=''>
          <div><a href="https://github.com/eerricc" target="_blank" className="text-[var(--gray2)] dark:text-[var(--gray1)] hover:text-[#181717]"><ImGithub className="size-6"/></a></div>
        </div>
        <div className=''>
          <div><a href="https://www.youtube.com/channel/UC1gxg9YJne8xyRtxZSiiJew" target="_blank" className="text-[var(--gray2)] dark:text-[var(--gray1)] hover:text-[#FF0000]"><FaYoutube className="size-6"/></a></div>
        </div>
      </div>
      <div className='text-center mt-2 text-[var(--gray2)] dark:text-[var(--gray1)]'>
        <h4>copyright &copy; eeric</h4>
      </div>
    </div>
  )
}

export default Footer
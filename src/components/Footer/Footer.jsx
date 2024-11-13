

import { FaLinkedinIn } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";

import React from 'react'

const Footer = () => {
  return (
    <div className='mt-auto p-4 bg-[var(--gray1)]'>
      <div className='flex justify-center gap-10 m-auto'>
        <div className=''>
          <div><a href="" className="text-[var(--gray2)] hover:text-[#0A66C2]"><FaLinkedinIn className="size-6"/></a></div>
        </div>
        <div className=''>
          <div><a href="" className="text-[var(--gray2)] hover:text-[#181717]"><ImGithub className="size-6"/></a></div>
        </div>
        <div className=''>
          <div><a href="" className="text-[var(--gray2)] hover:text-[#FF0000]"><FaYoutube className="size-6"/></a></div>
        </div>
      </div>
      <div className='text-center mt-2 text-[var(--gray2)]'>
        <h4>copyright &copy; eeric</h4>
      </div>
    </div>
  )
}

export default Footer


import { FaLinkedinIn } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";

import React from 'react'

const Footer = () => {
  return (
    <div className='mt-auto p-8'>
      <hr className='p-4'/>
      <div className='flex justify-center gap-8 m-auto'>
        <div className=''>
          <div><a href=""><FaLinkedinIn /></a></div>
        </div>
        <div className=''>
          <div><a href=""><ImGithub /></a></div>
        </div>
        <div className=''>
          <div><a href=""><FaYoutube /></a></div>
        </div>
      </div>
      <div className='text-center'>
        <h4>copyright &copy; eeric</h4>
      </div>
    </div>
  )
}

export default Footer
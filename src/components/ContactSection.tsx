// src/components/ContactSection.tsx
import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFileDownload } from 'react-icons/fa';
import { InlineWidget } from "react-calendly";

const basicStyle = "flex flex-col items-center";
const textStyle = "mt-5 text-sm";
const iconColor = "text-white text-6xl";

const ContactSection: React.FC = () => {
  return (
    <section className="py-32 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-black mb-32">Connect with me</h2>
      <div className="flex justify-center gap-28 font-bold flex-wrap">
        <a href="/Andrew_Lara_Resume.pdf" download className={basicStyle} target='_blank'>
          <div className="rounded-full p-4 hover:scale-125 bg-purple-500">
            <FaFileDownload className={iconColor} />
          </div>
          <span className={textStyle}>Resume</span>
        </a>
        <a href="https://www.linkedin.com/in/laraandrew" className={basicStyle} target='_blank'>
          <div className="rounded-full p-4 hover:scale-125 bg-blue-500">
            <FaLinkedin className={iconColor} />
          </div>
          <span className={textStyle}>LinkedIn</span>
        </a>
        <a href="https://github.com/laraandrew" className={basicStyle} target='_blank'>
          <div className="rounded-full p-4 hover:scale-125 bg-black">
            <FaGithub className={iconColor} />
          </div>
          <span className={textStyle}>GitHub</span>
        </a>
        <a href="https://www.instagram.com/a.ndrewlara" className={basicStyle} target='_blank'>
          <div className="rounded-full p-4 hover:scale-125 bg-pink-400">
            <FaInstagram className={iconColor} />
          </div>
          <span className={textStyle}>Instagram</span>
        </a>
        <div className="App">
      <InlineWidget url="https://calendly.com/aandrewlaraa/30min" />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

// src/components/ContactSection.tsx
import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope} from 'react-icons/fa';
import { InlineWidget } from "react-calendly";
// import PDFViewer from './PDFViewer';

const basicStyle = "flex flex-col items-center";
const textStyle = "mt-5 text-sm";
const iconColor = "text-white text-6xl";

const ContactSection: React.FC = () => {
  return (
    <section className="py-32 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-black mb-32">Connect with me</h2>
      <div className="flex justify-center gap-28 font-bold flex-wrap">
        <a href="mailto:andrewlara2002@gmail.com" className={basicStyle} target='_blank'>
          <div className="rounded-full p-4 hover:scale-125 bg-purple-500">
            <FaEnvelope className={iconColor} />
          </div>
          <span className={textStyle}>Email Me</span>
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
      </div>

      <div className="flex flex-wrap justify-center mt-16">
        {/* PDF Viewer on the left */}
        <div className="w-1/2 bg-gray-800 p-4 rounded-lg">
        <iframe
          src="/Resume_Lara.pdf"
          style={{ width: '100%', height: '100%' }}
        />
        </div>

        {/* Calendly Widget on the right */}
        <div className="w-1/2 ml-8" style={{ height: '600px', overflow: 'hidden' }}>
          <InlineWidget
            url="https://calendly.com/aandrewlaraa/30min"
            styles={{ height: '100%', minWidth: '320px', width: '100%' }}
          />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

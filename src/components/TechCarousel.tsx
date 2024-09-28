import React from 'react';
import Slider from 'react-slick';
import { FaApple, FaWindows, FaPython, FaReact, FaHtml5, FaCss3, FaLinux, FaFigma, FaNode, FaDocker } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { PiFileTsxFill } from "react-icons/pi";
import { BiLogoCPlusPlus, BiLogoJavascript } from "react-icons/bi";
import { SiScratch, SiVisualstudiocode, SiJira, SiTailwindcss } from "react-icons/si";

// Import slick carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TechCarousel: React.FC = () => {
  // Settings for the carousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay:true,
    arrows: false,
    autoplaySpeed: 1300, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-200 py-12 overflow-x-hidden">
      {/* Slider containing the tech icons */}
      <Slider {...settings} className="container mx-auto px-4">
        <div className="flex justify-center">
          <FaPython className="text-6xl text-violet-600" />
        </div>
        <div className="flex justify-center">
          <BiLogoJavascript className="text-6xl text-yellow-500" />
        </div>
        <div className="flex justify-center">
          <PiFileTsxFill className="text-6xl text-cyan-700" />
        </div>
        <div className="flex justify-center">
          <FaReact className="text-6xl text-blue-600" />
        </div>
        <div className="flex justify-center">
          <FaHtml5 className="text-6xl text-orange-500" />
        </div>
        <div className="flex justify-center">
          <FaCss3 className="text-6xl text-cyan-700" />
        </div>
        <div className="flex justify-center">
          <BiLogoCPlusPlus className="text-6xl text-red-600" />
        </div>
        <div className="flex justify-center">
          <FaLinux className="text-6xl text-black" />
        </div>
        <div className="flex justify-center">
          <FaWindows className="text-6xl text-blue-400" />
        </div>
        <div className="flex justify-center">
          <FaApple className="text-6xl text-red-500" />
        </div>
        <div className="flex justify-center">
          <SiScratch className="text-6xl text-yellow-600" />
        </div>
        <div className="flex justify-center">
          <FaFigma className="text-6xl text-yellow-700" />
        </div>
        <div className="flex justify-center">
          <FaGitAlt className="text-6xl text-pink-400" />
        </div>
        <div className="flex justify-center">
          <SiVisualstudiocode className="text-6xl text-cyan-600" />
        </div>
        <div className="flex justify-center">
          <SiJira className="text-6xl text-green-500" />
        </div>
        <div className="flex justify-center">
          <FaNode className="text-6xl text-teal-500" />
        </div>
        <div className="flex justify-center">
          <FaDocker className="text-6xl text-blue-400" />
        </div>
        <div className="flex justify-center">
          <SiTailwindcss className="text-6xl text-sky-500" />
        </div>
      </Slider>
    </div>
  );
};

export default TechCarousel;

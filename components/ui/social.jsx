"use client"
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useState } from "react";


const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/shreyamalviya0159",
    gradient: "linear-gradient(135deg, #333, #666)", 
    color: "#fff", 
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/Shreya-Malviya-Dev/",
    gradient: "linear-gradient(135deg, #0077b5, #00a0dc)", 
    color: "#fff", 
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/sshreyaamalviya/",
    gradient:"linear-gradient(135deg, #f58529, #e1306c, #bc2a8d)",
    color: "#fff", 
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={iconStyles}
          style={{
            background:
              hoveredIndex === index ? item.gradient : "transparent",
            color: hoveredIndex === index ? item.color : "inherit", 
            transition: "all 0.3s ease", 
            padding: "9px", 
            borderRadius: "50%", 
            display: "inline-block", 
          }}
          onMouseEnter={() => setHoveredIndex(index)} 
          onMouseLeave={() => setHoveredIndex(null)} 
          target="_blank"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;

import React from 'react';
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'


const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    live_link,
  }) => {
    const openLinkInNewTab = (link) => {
      window.open(link, '_blank')
    }
  
    return (
      <motion.div key={index}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-[#714423]  p-5 rounded-2xl sm:w-[400px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={`Project: ${name}`}
              className="w-full h-full object-cover rounded-2xl"
            />
  
            <div className="absolute inset-0 flex justify-start m-3 gap-2 ">
              {/* {live_link && (
                <Link
                  to={live_link}
                  target='_blank'
                  className="white-gradient border-2 border-[#000] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={eye}
                    alt="Live link"
                    className="w-1/2 h-1/2 object-contain fill-white"
                  />
                </Link>
              )} */}
  
              
            </div>
          </div>
  
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px] text-gray-50">{description}</p>
          </div>
  
          {/* <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div> */}
        </Tilt>
      </motion.div>
    )
  }

  export default ProjectCard;
  
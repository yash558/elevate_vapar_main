import React, { useState, useEffect } from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import Editing from "../../assets/editing.jpg";
import Shooting from "../../assets/shoot.jpg";
import VideoProduction from "../../assets/video.jpg";



import ReactPaginate from 'react-paginate'

import ProjectCard from '../portfolioCard'


const ContentPortfolio = () => {
  const projects = [
    {
      name: 'Editing',
      description: 'We carefully review and edit written content to ensure the clients message is delivered effectively, consistently, and clearly. From fine-tuning website copy to perfecting press releases, our editing expertise sharpens every piece for maximum effectiveness. With an eagle eye for detail and a commitment to maintaining brand integrity, our agency elevates content to its highest potential',
      image: Editing,
      githubLink: 'https://github.com/example/project1',
      demoLink: 'https://example.com/demo/project1'
    },
    {
      name: 'Shooting',
      description: 'Shooting is the visual choreography that transforms concepts into captivating imagery. We wield cameras with precision, capturing the essence of brands through compelling photography and videography. From product launches to storytelling campaigns, our agency orchestrates shoots that showcase and narrate the clients journey. ',
      image: Shooting,
      githubLink: 'https://github.com/example/project2',
      demoLink: 'https://example.com/demo/project2'
    },
    {
      name: 'Video Production',
      description: 'Studies show that a captivating video can grab attention, explain complex concepts, and inspire viewers to take action, as video content gets more views, shares, and conversions than any other format. We skillfully combine technological know-how with artistic vision to create visually stunning videos that enthral viewers. From the first idea to the final cut, our team carefully plans every shot while conveying the clients story.',
      image: VideoProduction,
      githubLink: 'https://github.com/example/project3',
      demoLink: 'https://example.com/demo/project3'
    },
    
    // Add more projects as needed
  ];
  
  const [filterWork, setFilterWork] = useState(projects)
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 6

  useEffect(() => {
    setFilterWork(projects)
  }, [])


 
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber.selected)
  }

  const indexOfLastItem = (currentPage + 1) * itemsPerPage
  const indexOfFirstItem = currentPage * itemsPerPage
  const currentItems = filterWork.slice(indexOfFirstItem, indexOfLastItem)
  console.log(currentItems);

  return (
    <div id="projects">
      <motion.div className='flex items-center justify-center'>
        <p></p>
        <h2 className='text-4xl font-medium '>Our <span className='text-[--primary-color]'>Content Portfolio</span></h2>
      </motion.div>

      {/* <div className="w-full flex items-center justify-center">
        <motion.p
          
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following Projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies
          and manage projects effectively.
        </motion.p>
      </div> */}
      {/* <div className="flex flex-wrap gap-4 justify-center mt-10">
        {['Web Project', 'Digital Projects', 'Mobile App', 'Graphic Design', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`px-4 py-2 text-[#fff] cursor-pointer rounded-full ${
              activeFilter === item
                ? 'bg-[--primary-color] ring ring-[--primary-color] ring-offset-2'
                : 'bg-[#6b7280] hover:bg-[#4b5563] transition-colors'
            }`}
          >
            {item}
          </div>
        ))}
      </div> */}

      <div className="mt-20 flex flex-wrap gap-7 items-center justify-center cursor-pointer">
        {currentItems &&
        Array.isArray(currentItems) &&
        currentItems.length > 0 ? (
          currentItems.map((channel, index) => (
            <ProjectCard key={channel.name} index={index} {...channel} />
          ))
        ) : (
          <div className="text-center text-gray-500">No Project Avaliable.</div>
        )}
      </div>

      <div className="pagination mt-5 flex items-center justify-center">
        <div className="pagination-container flex flex-row items-center justify-center md:gap-3 mt-6">
          <ReactPaginate
            previousLabel={<i className="fas fa-chevron-left"></i>}
            nextLabel={<i className="fas fa-chevron-right"></i>}
            breakLabel={<span>...</span>}
            pageCount={Math.ceil(filterWork.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName="flex flex-row md:gap-10 gap-4 pt-10"
            pageClassName="pagination-item"
            previousClassName="pagination-previous"
            nextClassName="pagination-next"
            activeClassName="pagination-active"
          />
        </div>
      </div>
    </div>
  )
}

export default ContentPortfolio;

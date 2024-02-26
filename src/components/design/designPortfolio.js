import React, { useState, useEffect } from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import Slider from 'react-slick'
import market1 from "../../assets/marketing1.jpeg";
import market2 from "../../assets/marketing2.jpeg";
import market3 from "../../assets/marketing3.jpeg";
import market4 from "../../assets/marketing4.jpeg";



import ReactPaginate from 'react-paginate'

import ProjectCard from '../portfolioCard'


const DesignPortfolio = () => {
  const projects = [
    {
      name: 'Posters',
      description: 'Inside the creative canvas of our company marketing firm, poster design is the skilful synthesis of strategy and aesthetics, turning concepts into eye-catching works of art that demand attention. Whether promoting a business, an event, or a new product launch, our posters are made to capture the spirit of the campaign and stand out in the visual maze.',
      image: market3,
      githubLink: 'https://github.com/example/project1',
      demoLink: 'https://example.com/demo/project1'
    },
    {
      name: 'Banners',
      description: 'Banner designing involves creating visually compelling and strategically crafted graphics to promote products, services, or events. We consider branding guidelines, target demographics, and marketing objectives to develop effectively communicating banners. Our banner designing services are present for both online and offline platforms, always focusing on delivering a clear call to action to encourage audience response.',
      image: market1,
      githubLink: 'https://github.com/example/project2',
      demoLink: 'https://example.com/demo/project2'
    },
    {
      name: 'Logos',
      description: 'The brands logos are its visual cornerstones, delivering its personality, values, and mission memorably and uniquely. Our objective is to design a logo that captures the essence of the business but also sets it apart from rivals, promoting consumer loyalty and brand recognition. Its an essential component of branding, helping to reach the right audience by creating a memorable impression, establishing recognition, and communicating values.',
      image: market4,
      githubLink: 'https://github.com/example/project3',
      demoLink: 'https://example.com/demo/project3'
    },
    {
      name: 'Illustrations',
      description: 'Every illustration has a function; it enhances visual appeal and visually engages the viewer while communicating complicated ideas. Our talented artists pay close attention to detail and use artistic flare to bring concepts to life. Our creative renderings are customized to align with the brands sensibilities, whether digital art, hand-drawn illustrations, or a combination of both. Based on input, the illustration refines iteratively until every line and color adds details to the intended visual narrative. Its a kind of art that improves brand communication and gives marketing initiatives more individuality and inventiveness.',
      image: market2,
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
        <h2 className='text-4xl font-medium '>Our <span className='text-[--primary-color]'>Design Portfolio</span></h2>
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

export default DesignPortfolio;

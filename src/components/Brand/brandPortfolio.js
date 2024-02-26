import React, { useState, useEffect } from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import Slider from 'react-slick'
import brand from '../../assets/brand.jpg'
import competition from '../../assets/competitor.jpg'
import rebrand from '../../assets/branding.jpg'
import brand2 from '../../assets/brand2.jpg'



import ReactPaginate from 'react-paginate'

import ProjectCard from '../portfolioCard'


const BrandPortfolio = () => {
  const projects = [
    {
      name: 'Brand Strategy',
      description: 'Brand Strategy is the compass that guides businesses on a transformative journey to establish and elevate their brand presence. Our agency entails a meticulous procedure to precisely define the brands mission, core values, and distinctive character in line with corporate goals. We delve into the brands essence, determining and defining the narrative that will resonate with consumers.',
      image: brand,
      githubLink: 'https://github.com/example/project1',
      demoLink: 'https://example.com/demo/project1'
    },
    {
      name: 'Brand Identity Design',
      description: 'Our Brand Identity Design goes beyond aesthetics by combining strategic thought with creativity. Whether a brand is displayed on a billboard, a website, or a business card, consistency is crucial in ensuring that every visual representation perfectly reflects the companys messaging.',
      image: brand2,
      githubLink: 'https://github.com/example/project2',
      demoLink: 'https://example.com/demo/project2'
    },
    {
      name: 'Competitor Analysis',
      description: 'Through the strategic lens of competitor analysis, we can obtain crucial insights that help our clients outmanoeuvre rivals and prosper in the marketplace. Our Competitor Analysis formulates an all-encompassing strategy by combining market research, data analysis, and industry benchmarking. We unearth unexplored niches, capitalize on gaps in the market, and fortify our clients against potential challenges.',
      image: competition,
      githubLink: 'https://github.com/example/project3',
      demoLink: 'https://example.com/demo/project3'
    },
    {
      name: 'Rebranding',
      description: 'Rebranding is a collaborative journey of rediscovery and reinvention. It is a strategic evolution that aligns the brand with current market demands and future aspirations. We guide clients through the intricacies of this transformative process, ensuring every aspect reflects the brands new narrative and vision. Our Rebranding Service is a holistic approach that helps create a compelling story that captivates the audience and rejuvenates the brands presence in the competitive landscape.',
      image: rebrand,
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
        <h2 className='text-4xl font-medium '>Our <span className='text-[--primary-color]'>Branding Portfolio</span></h2>
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

export default BrandPortfolio;

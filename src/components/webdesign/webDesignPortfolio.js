import React, { useState, useEffect } from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import website from '../../assets/website.jpg'
import digital from '../../assets/website1.jpg'
import website2 from '../../assets/website2.jpg'



import ReactPaginate from 'react-paginate'

import ProjectCard from '../portfolioCard'


const WebDesignPortfolio = () => {
  const projects = [
    {
      name: 'Website Design',
      description: 'Understanding each clients distinct identity and goals is the first step that we work on. Then, using these findings as a guide, we create a custom website design that seamlessly combines user experience and aesthetics. Our Website Design services customize each project to fit specific business goals, from engaging landing pages to an e-commerce platform or an educational corporate site. Every component, from the initial click to the conversion, is thoughtfully positioned to draw users in and encourage desired actions.',
      image: website,
      githubLink: 'https://github.com/example/project1',
      demoLink: 'https://example.com/demo/project1'
    },
    {
      name: 'Website Development',
      description: 'Understanding each clients distinct identity and goals is the first step that we work on. Then, using these findings as a guide, we create a custom website design that seamlessly combines user experience and aesthetics. Our Website Design services customize each project to fit specific business goals, from engaging landing pages to an e-commerce platform or an educational corporate site. Every component, from the initial click to the conversion, is thoughtfully positioned to draw users in and encourage desired actions.',
      image: digital,
      githubLink: 'https://github.com/example/project2',
      demoLink: 'https://example.com/demo/project2'
    },
    // {
    //   name: 'Website Deployment',
    //   description: 'After website design and dev comes the deployment part that includes configuring servers, domain settings, and implementing any necessary integration to guarantee optimal functionality. Our agency handles these technical intricacies of the deployment process with precision, ensuring that the website goes live smoothly and efficiently. During Website Deployment, we conduct thorough testing to address the potential issues and guarantee a flawless user experience.',
    //   imageUrl: 'https://via.placeholder.com/150',
    //   githubLink: 'https://github.com/example/project3',
    //   demoLink: 'https://example.com/demo/project3'
    // },
    {
      name: 'Website Maintenance',
      description: 'Our Website Maintenance services serve as the guardian in the fast-paced digital world, protecting the digital presence from possible threats and ensuring the website stays an insightful and trustworthy resource in the competitive online market. We continuously monitor website statistics to spot areas that might benefit from improvement so the site can adapt to changing business needs and market trends.',
      image: website2,
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
        <h2 className='text-4xl font-medium '>Our <span className='text-[--primary-color]'>Web Design Portfolio</span></h2>
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

export default WebDesignPortfolio;

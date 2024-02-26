import React, { useState, useEffect } from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import Slider from 'react-slick'
import seo from "../../assets/seo.jpg"
import market1 from '../../assets/marketing/1.jpg'
import market2 from '../../assets/marketing/2.jpg'
import market3 from '../../assets/marketing/3.jpg'
import market4 from '../../assets/writing.jpg'

import ReactPaginate from 'react-paginate'

import ProjectCard from '../portfolioCard'

const Works = () => {
  const projects = [
    {
      name: 'SEO',
      description:
        'Search Engine Optimization (SEO) is the digital compass in the ever-changing world of a business marketing firm. Our company uses search engine optimization (SEO) as the secret sauce to push our clients to the top of search engine results, from developing a strategic keyword strategy to optimizing website content. We use SEO to help our clients succeed in the vast sea of digital marketing.',
      image: seo,
      githubLink: 'https://github.com/example/project1',
      demoLink: 'https://example.com/demo/project1',
    },
    {
      name: 'Advertisement Publishing',
      description: 'Our firm makes sure that every advertisement not only stands out but also seamlessly fits with the clients overall marketing plan because of its great awareness of consumer behavior and market trends. We turn concepts into stunning visuals with careful preparation and artistic skill, generating a strong resonance that catapults our clients into the forefront of their respective industries. Ad publishing is more than just showing off a product.',
      image: market2,
      githubLink: 'https://github.com/example/project2',
      demoLink: 'https://example.com/demo/project2',
    },
    {
      name: 'Social Media Management',
      description: 'Our agency helps clients in managing the changing social landscape by creating engaging content schedules and cultivating deep connections. Social Media Management is our digital canvas, where each post is a stroke that paints a brands journey, turning followers into advocates and campaigns into conversations.',
      image: market3,
      githubLink: 'https://github.com/example/project3',
      demoLink: 'https://example.com/demo/project3',
    },
    {
      name: 'Performance Marketing',
      description: 'We carefully implement data-driven strategies through different channels, optimizing each campaign to maximize measurable outcomes. Our business creates programs that provide an exceptional return on investment in addition to generating leads through expertise in pay-per-click (PPC) and conversion rate optimization. We continuously refine our strategy by focusing on data, making sure that every marketing initiative directly benefits the clients bottom line.',
      image: market1,
      githubLink: 'https://github.com/example/project3',
      demoLink: 'https://example.com/demo/project3',
    },
    {
      name: 'Copywriting',
      description: 'Writing a compelling narrative from an idea is the skill of copywriting. We specialize in using language to design engaging content that engages your target audience and captures their attention. From website copy to impactful advertising campaigns, our agency crafts stories that bring brands to life. With a keen understanding of brand voice and consumer psychology, we ensure every word serves a purpose to inform, persuade, or inspire action.',
      image: market4,
      githubLink: 'https://github.com/example/project3',
      demoLink: 'https://example.com/demo/project3',
    },

    // Add more projects as needed
  ]

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
  console.log(currentItems)

  return (
    <div id="projects">
      <motion.div className="flex items-center justify-center">
        <p></p>
        <h2 className="text-4xl font-medium ">
          Our{' '}
          <span className="text-[--primary-color]">Marketing Portfolio</span>
        </h2>
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

export default Works

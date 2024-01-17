import React from 'react'
import {
  carrerfive,
  carrerfour,
  carrerone,
  carrersix,
  carrerthree,
  carrertwo,
} from '../../assets'

const CarrierValue = () => {
  const member = [
    {
      img: carrerone,
      title: 'Customer-Centric Approach',
      desc:
        "Our utmost priority is attending to the specific needs, preferences, and holistic well-being of our customers. We are committed to delivering tailored and compassionate care that aligns with each individual's health and wellness objectives.",
    },
    {
      img: carrertwo,
      title: 'Excellence in Service',
      desc:
        'Our unwavering commitment is to provide exceptional Outpatient department services and wellness initiatives. We continuously strive to surpass expectations and achieve remarkable outcomes, driven by our dedication to excellence.',
    },
    {
      img: carrerthree,
      title: 'Innovation and Adaptability',
      desc:
        'We wholeheartedly embrace innovation, staying at the forefront of OPD advancements. Our practices are flexible and evolve to incorporate cutting-edge technologies and treatments, enhancing the overall well-being of our customers.',
    },
    {
      img: carrerfour,
      title: 'Uncompromising Integrity',
      desc:
        'We uphold the highest ethical standards across all aspects of our operations. Transparency, honesty, and trustworthiness characterize our interactions, whether with Customers, staff, or partners.',
    },
    {
      img: carrerfive,
      title: 'Embracing Diversity',
      desc:
        'We take pride in celebrating diversity and treat every customer and team member with the utmost respect, regardless of background, culture, or identity. Our inclusive environment is welcoming to all.',
    },
    {
      img: carrersix,
      title: 'Patient Privacy and Data Security',
      desc:
        "Safeguarding patient information with the highest level of confidentiality and security is paramount. We rigorously adhere to stringent data protection measures to ensure Customers' privacy is consistently maintained.",
    },
  ]
  return (
    <div className="py-20 flex items-center justify-center flex-col">
      <h1 className="text-center text-4xl text-[--primary-color] font-bold">
        Our Values
      </h1>
      <p className="text-center md:text-lg text-sm py-4 text-[#525252]">
        "Nurturing Health, Empowering Lives: Our Commitment to Care and
        Support." <br /> "Integrity and Compassion Drive Us to Provide Reliable
        Medical Insurance Solutions."
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10  mt-10">
        {member.map((item) => {
          return (
            <div className="bg-[--main-color] w-72 md:w-96 rounded-xl">
              <img src={item.img} alt="" className="rounded-t-xl" />
              <div className="p-6">
                <h1 className="text-[--primary-color]">{item.title}</h1>
                <p className="text-[#343434] text-sm">{item.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CarrierValue

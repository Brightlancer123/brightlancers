import React from 'react'
import CoursesHeroSection from '../../components/CoursesHeroSection'
import CoursesCards from '../../components/CoursesCards'








export const metadata = {
  title: 'Courses – Brightlancer Technologies, Bannu',
  description: 'Explore the variety of e-commerce courses offered at Brightlancer Technologies, Bannu. Our programs include Amazon VA, Shopify Dropshipping, Digital Marketing, and more to equip you with freelancing skills for the digital era.',
  keywords: [
    'E-commerce Courses Bannu',
    'Amazon VA Course Pakistan',
    'Shopify Dropshipping Course',
    'Freelancing Skills Pakistan',
    'Digital Marketing Training',
    'Brightlancer Technologies Courses',
  ],

  openGraph: {
    title: 'Courses – Brightlancer Technologies',
    description: 'Discover our extensive list of e-commerce training programs designed to help you become a digital business expert.',
    url: 'https://brightlancer.vercel.app/courses',
    siteName: 'Brightlancer Technologies',
    images: [
      {
        url: '/images/Logo.webp',
        width: 1200,
        height: 630,
        alt: 'Brightlancer Technologies Courses',
      },
    ],
    locale: 'en_PK',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Courses – Brightlancer Technologies',
    description: 'Brightlancer Technologies offers a diverse range of e-commerce and freelancing courses to help you succeed in the online business world.',
    images: ['/images/Logo.webp'],
  },
};












const Courses = () => {
  return (
    <div className='pt-14 sm:pt-32'>
        







        <CoursesHeroSection/>




        <CoursesCards/>







    </div>
  )
}

export default Courses
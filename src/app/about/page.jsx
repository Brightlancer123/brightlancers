import React from 'react'
import AboutWhoAmI from '../../components/AboutWhoAmI.jsx'
import AboutProject from '../../components/AboutProject.jsx'
import AboutExecutiveMsg from '../../components/AboutExecutiveMsg.jsx'
import AboutOurAchievments from '../../components/AboutOurAchievments.jsx'
import AboutOtherPart from '../../components/AboutOtherPart.jsx'




export const metadata = {
  title: 'About – Brightlancer Techologies, Bannu',
  description: 'Learn about Brightlancer Techologies, Bannu’s premier e-commerce training institute. Discover our mission, team, and how we empower students with freelancing and digital business skills.',
  keywords: ['About Brightlancer Techologies', 'E-commerce Bannu', 'Freelancing Institute Pakistan', 'Trainers Brightlancer'],

  openGraph: {
    title: 'About – Brightlancer Techologies',
    description: 'Brightlancer Techologies is dedicated to delivering top-tier e-commerce and freelancing training in Bannu.',
    url: 'https://brightlancer.vercel.app/about',
    siteName: 'Brightlancer Techologies',
    images: [
      {
        url: '/images/Logo.webp',
        width: 1200,
        height: 630,
        alt: 'Brightlancer Techologies Logo',
      },
    ],
    locale: 'en_PK',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'About – Brightlancer Techologies, Bannu',
    description: 'Meet the Brightlancer Techologies team and explore our vision for digital training in Bannu.',
    images: ['/images/Logo.webp'],
  },
};











const About = () => {
  return (
    <div className='pt-32'>








      {/* contain the upper side images and also who am i section */}
      <AboutWhoAmI />








      {/* contain the project cards */}
      <AboutProject />







      <AboutExecutiveMsg />










      <AboutOurAchievments />








      <AboutOtherPart />






















    </div>
  )
}

export default About
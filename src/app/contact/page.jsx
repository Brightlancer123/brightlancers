import React from 'react'
import ContactOption from '../../components/ContactOption'
import ContactSocialLinks from '../../components/ContactSocialLinks'






export const metadata = {
  title: 'Contact Us – Brightlancer Technologies, Bannu',
  description: 'Get in touch with Brightlancer Technologies for inquiries about our e-commerce courses, admissions, or other services. Visit us at Shadman Plaza, Bannu or contact us online.',
  keywords: [
    'Contact Brightlancer Technologies',
    'E-commerce Technologies Bannu',
    'Freelance Training Bannu',
    'Brightlancer Contact Information',
  ],

  openGraph: {
    title: 'Contact Us – Brightlancer Technologies',
    description: 'Need help or more information? Get in touch with Brightlancer Technologies, your go-to source for e-commerce training in Bannu.',
    url: 'https://brightlancer.vercel.app/contact',
    siteName: 'Brightlancer Technologies',
    images: [
      {
        url: '/images/Logo.webp',
        width: 1200,
        height: 630,
        alt: 'Contact Brightlancer Technologies',
      },
    ],
    locale: 'en_PK',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us – Brightlancer Technologies, Bannu',
    description: 'Reach out to Brightlancer Technologies for any questions about our courses or services. Visit us in Bannu or contact us online.',
    images: ['/images/Logo.webp'],
  },
};









  
const Contact = () => {
    return (
        <div className='pt-10 sm:pt-20'>






            <ContactOption />







            <ContactSocialLinks />






        </div>
    )
}

export default Contact
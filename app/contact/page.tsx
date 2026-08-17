//app/contact/page.tsx

"use client";

import { Contact5 } from '@/components/contactComponent';
import { FaEnvelope, FaHeadset, FaMapMarkerAlt } from 'react-icons/fa';
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactSolutionForm from '@/components/contactComponentAnnex';

export default function ContactPage() {
  const contactMethods = [
    {
      id: 'email',
      icon: FaEnvelope,
      title: 'Email Us',
      description: 'Send us your questions and we\'ll respond within 24 hours.',
      details: 'hello@degitech.com',
    },
    {
      id: 'support',
      icon: FaHeadset,
      title: 'Live Support',
      description: 'Talk directly with our support specialists for quick help.',
      details: '+233 506 033 192',
    },
    {
      id: 'office',
      icon: FaMapMarkerAlt,
      title: 'Studio Location',
      description: 'Based in Accra, working with clients remotely across the globe.',
      details: 'Accra, Ghana',
    },
  ]

  const serviceOptions = [
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'ui-ux', label: 'UI/UX Design' },
    { value: 'backend', label: 'Backend Development' },
    { value: 'security', label: 'Security & Performance' },
    { value: 'consulting', label: 'Consulting' },
    { value: 'other', label: 'Something Else' },
  ]

  return (
    <>
      <Header />

      <Contact5
        badge="Get in Touch"
        heading="Let's build something great together"
        description="Have questions about our platform, partnerships, or product features? Our team is here to support you every step of the way."
        contactMethods={contactMethods}
      />

      <ContactSolutionForm
        headline="Grow Your"
        headlineAccent="Digital Presence"
        subheadline="We partner with founders and enterprises to design innovative digital strategies that drive measurable impact."
        contactInfo={{
          email: 'hello@degitech.com',
          phone: '+233 506 033 192',
        }}
        serviceOptions={serviceOptions}
        ctaLabel="Send My Request"
      />

      <Footer />
    </>
  )
}

import React from 'react'
import Navbar from '../components/Navbar'
import { DotPattern } from '@/components/magicui/dot-pattern'
import Land1 from '@/components/Land1'
import WhyChooseUs from '@/components/ui/land2'
import FeatureHighlight from '@/components/ui/FeatureHighlight'
import Pricing from '@/components/ui/pricing'
import Footer from '@/components/ui/footer'
import Faq from '@/components/faq'

const Landing = () => {
  return (
    <div>
      <Navbar/>
      <Land1/>
         <WhyChooseUs />
            <FeatureHighlight />
            <Pricing />
            <Faq />
            <Footer />
    </div>
  )
}

export default Landing

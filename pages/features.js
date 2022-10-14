import React from 'react'
import Navbar from 'components/Navbar'
import FeatureHero from 'components/feturePageComponents/FeaturePageHero'
import FeaturesSction from 'components/feturePageComponents/FeaturesSction'
import FooterSection from 'components/FooterSection'
export default function features() {
  return (
    <div>
        <Navbar />
        <FeatureHero />
        <FeaturesSction />

        <FooterSection />
    </div>
  )
}

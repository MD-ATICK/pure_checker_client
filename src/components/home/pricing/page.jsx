import React from 'react'
import AboutPricing from './AboutPricing'
import Plans from '../../client/Plans'

function PricingSection() {
    return (
        <section className='container mx-auto'>
            <AboutPricing />
            <Plans />
        </section>
    )
}

export default PricingSection

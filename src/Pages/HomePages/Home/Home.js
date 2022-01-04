import React from 'react'
import NavigationTop from '../../Shared/NavigationTop/NavigationTop'
import Banner from '../Banner/Banner'
import Services from '../Services/Services'

export default function Home() {
    return (
        <div>
            <NavigationTop />
            <Banner />
            <Services/>
        </div>
    )
}

import React from 'react'
import Footer from '../../Shared/Footer/Footer'
import NavigationTop from '../../Shared/NavigationTop/NavigationTop'
import Banner from '../Banner/Banner'
import LetUsHandlePage from '../LetUsHandlePage/LetUsHandlePage'
import MesssageReviewers from '../MesssageReviewers/MesssageReviewers'
import SendMessage from '../SendMessage/SendMessage'
import Services from '../Services/Services'

export default function Home() {
    return (
        <div>
            <NavigationTop />
            <Banner />
            <Services/>
            <LetUsHandlePage/>
            <MesssageReviewers/>
            <SendMessage/>
            <Footer/>
        </div>
    )
}

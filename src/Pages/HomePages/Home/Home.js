import React, { useState } from 'react'
import Footer from '../../Shared/Footer/Footer'
import NavigationTop from '../../Shared/NavigationTop/NavigationTop'
import Banner from '../Banner/Banner'
import LetUsHandlePage from '../LetUsHandlePage/LetUsHandlePage'
import MesssageReviewers from '../MesssageReviewers/MesssageReviewers'
import SendMessage from '../SendMessage/SendMessage'
import Services from '../Services/Services'

export default function Home() {
    const [comments, setComments] = useState([]);
    const [isCommentChange, setIsCommentChange] = useState(false);
    return (
        <div>
            <NavigationTop />
            <Banner />
            <Services />
            <LetUsHandlePage />
            <MesssageReviewers
                comments={comments}
                setComments={setComments}
                isCommentChange={isCommentChange}
            />
            <SendMessage 
            isCommentChange={isCommentChange}
            setIsCommentChange={setIsCommentChange} />
            <Footer />
        </div>
    )
}

import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card'
import Footer from '../layout/Footer'
import Nav from '../layout/Nav'
import botReducer from '../reducers/botReducer'

const Home = () => {
    const bot = useSelector(store => store.bots)

    return (
        <>
            <Nav />

<h1 className='text-center my-3'>HOMEPAGE</h1>
            <div className='container mx-auto'>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {
                        bot.slice(0,4).map(item => (
                            <Card item={item}/>

                        ))


                    }

                </div>
            </div>



            <Footer />


        </>
    )
}

export default Home
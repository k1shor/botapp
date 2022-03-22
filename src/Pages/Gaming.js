import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card'
import Footer from '../layout/Footer'
import Nav from '../layout/Nav'
import botReducer from '../reducers/botReducer'

const Gaming = () => {
    const bot = useSelector(store => store.bots)
    const new_bot = bot.filter(item => item.type == "game")

    return (
        <>
            <Nav />

            <h1 className='text-center my-3'>Gaming Bots</h1>


            <div className='container mx-auto'>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {
                        new_bot.map(item => (
                            <Card item={item}/>

                        ))


                    }

                </div>
            </div>



            <Footer />


        </>
    )
}

export default Gaming
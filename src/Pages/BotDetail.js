import React from 'react'
import Footer from '../layout/Footer'
import Nav from '../layout/Nav'

const BotDetail = (req) => {
  return (
    <>
    <Nav/>
    
    <h3>Bot Details</h3>
    <hr/>

    <div className='container'>
{/* {console.log(req.params.id)} */}
        {/* <h1>{item.name}</h1> */}

    </div>

    <Footer/>
    </>
  )
}

export default BotDetail
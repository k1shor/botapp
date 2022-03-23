import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card'
import Footer from '../layout/Footer'
import Nav from '../layout/Nav'
import botReducer from '../reducers/botReducer'

const Home = () => {
    let bot = useSelector(store => store.bots)
    let [search,setSearch] = useState('')
    const [limit,setLimit] = useState(4)

    const filter_bot = () => {
                bot = bot.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
      }

    return (
        <>
            <Nav />

            <h1 className='text-center my-3'>HOMEPAGE</h1>
            <div className='container mx-auto my-3'>
            <input type="search" class="form-control " id="exampleFormControlInput1" placeholder="search bots here" onChange={(event) => setSearch(event.target.value)} onKeyUp={filter_bot()} />
            </div>
            <div className='container mx-auto'>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {
                        bot.slice(0, limit).map((item, i) => (
                            <Card item={item} key={i} />

                        ))
                    }

                </div>
            </div>



            <Footer />


        </>
    )
}

export default Home
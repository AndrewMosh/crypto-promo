import './App.scss'
import Subscribe from './Components/Subscribe/Subscribe'
import Stores from './Components/Stores/Stores'
import Testimonials from './Components/Testimonials/Testimonials'

function App() {

    return (
        <section className='app'>
            <div className='app__container container'>
                <div className='app__wrapper'>
                    <div className='app__inner--one'>
                        <div className='app__question'>
                            Do you want to Learn more About cryptocurrencies <span className='app__highlight'> quickly and easily ?</span>
                        </div>
                        <Subscribe />
                        <Stores />
                    </div>
                    <div className='app__inner--two'>
                        <Testimonials />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default App

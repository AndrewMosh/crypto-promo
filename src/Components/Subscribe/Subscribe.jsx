import './Subscribe.scss'
import STATS from '../../utils/STATS'

const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className='subscribe__title'>Subscribe to our channel to learn more</div>
            <div className='subscribe__stats'>
                {STATS.map(el => <div key={el.quantity} className='subscribe__statistics'>
                    <div className='subscribe__quantity'>{el.quantity}</div>
                    <div className='subscribe__name'>{el.name}</div>
                </div>)}
            </div>
            <button className='subscribe__button'> Join Whatsapp</button>
        </div>
    )
}

export default Subscribe
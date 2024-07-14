import STORES from "../../utils/STORES"
import './Stores.scss'

const Stores = () => {
    return (
        <div className='stores'>
            {STORES.map((el) => <div key={el.name} className='stores__store'>
                <img src={el.img} alt={el.name} />
                <div className='stores__text'>
                    <a href={el.link}>
                        <div className='stores__on'>{el.verb}</div>
                        <div className='stores__name'>{el.store}</div>
                    </a>
                </div>
            </div>)}
        </div>
    )
}
export default Stores
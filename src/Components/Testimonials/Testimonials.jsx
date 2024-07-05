import TESTIMONIALS from "../../utils/TESTIMONIALS";
import './Testimonials.scss'

const Testimonials = () => {
    return (
        <div className="testimonials">
            {TESTIMONIALS.map(el =>
                <div className={el.left ? 'testimonials__testimonial testimonials__testimonial--left' : 'testimonials__testimonial'} key={el.name}>
                    <div className="testimonials__header">
                        <img src={el.img} alt={el.name} />
                        <div className="testimonials__name-wrapper">
                            <div className="testimonials__name">{el.name}</div>
                            <div className="testimonials__tag">{el.tag}</div>
                        </div>
                    </div>
                    <div className="testimonials__text">{el.text}</div>
                </div>
            )}
        </div>
    )
}

export default Testimonials
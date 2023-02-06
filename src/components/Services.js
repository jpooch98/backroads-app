import { services } from '../Data'
import Title from './Title'

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className='section-title'>
        <Title title="our" subtitle="services" />
      </div>
      <div className="section-center services-center">
        {services.map((services) => {
          return (
            <article className="service">
              <span className="service-icon">
                <i className={services.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{services.title}</h4>
                <p className="service-text">{services.text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
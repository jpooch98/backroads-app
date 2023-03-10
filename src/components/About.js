import logo from '../images/about.jpeg'
import Title from './Title'
const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <Title title="About" subtitle="us" />
      </div>

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={logo}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p className="btn">read more</p>
        </article>
      </div>
    </section>
  )
}

export default About
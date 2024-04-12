import Footer from "./footer"
import '../CSS/courses.css'

const Courses = () => {
  return (
    <div>
      <div className="c-heading">
        <h1>COURSES</h1>
      </div>
      <div className="pgram-left-main">
        <div className="pgram-left"></div>
        <div className="pgram-left"></div>
        <div className="pgram-left"></div>
      </div>
      <div className="divider-main">
        <div className="divider1"></div>
      </div>
      <div className="pgram-right-main">
        <div className="pgram-right"></div>
        <div className="pgram-right"></div>
        <div className="pgram-right"></div>
      </div>
      <div className="divider-main">
        <div className="divider2"></div>
      </div>
      <div className="pgram-left-main">
        <div className="pgram-left"></div>
        <div className="pgram-left"></div>
        <div className="pgram-left"></div>
      </div>
      <div className="em-model-main">
        <div className="em-model">
          <iframe className="vid-model" src=""></iframe>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Courses
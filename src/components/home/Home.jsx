import './home.css'
import homeImg1 from './../../img/1.png'
import homeImg2 from './../../img/2.png'

const Home = () => {
    return ( 
        <section className="home">
            <div className="container">
                <div className="home_content">
                <div className="home_text">
                    <div className="header_title">
                    Turn your ideas into action!
                    </div>
                    <div className="header_description">
                    Welcome to iDo - your trusted partner in everyday organisation 
                    and goal achievement! iDo is a modern task management app 
                    that will help you plan your day with ease, be more productive 
                    and achieve your goals with confidence.
                    <div className="home_btn-wrapper">
                        <a href="#!" className="home_btn">
                        SIGN IN
                        </a>
                    </div>
                    </div>
                    </div>
                    <div className="home_img1">
                    <img src={homeImg1} alt="Phone" />
                    </div>
                    <div className="home_img2">
                    <img src={homeImg2} alt="Phone" />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Home;
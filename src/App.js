import './App.css';
import Hero from "./hero.jpg"
import './script'

function App() {
  return (
    <>
    
    <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
    </div>
    <nav className="navbar">
        <div className="max-width">
            <div className="logo"><a href="http://www.sricharan.me/">Sai Sri<span> Charan.</span></a></div>
            <ul className="menu">
                <li><a href="#home" className="menu-btn">Home</a></li>
                <li><a href="#about" className="menu-btn">About</a></li>
                <li><a href="#skills" className="menu-btn">Skills</a></li>
                <li><a href="#contact" className="menu-btn">Contact</a></li>
            </ul>
            <div className="menu-btn">
                <i className="fas fa-bars"></i>
            </div>
        </div>
    </nav>

    <section className="home" id="home">
        <div className="max-width">
            <div className="home-content">
                <div className="text-1">Hello, my name is</div>
                <div className="text-2">Sai Sri Charan</div>
                <div className="text-3">And I'm a <span className="typing"></span></div>
                <a href="#contact">Hire me</a>
                <a href="#">Resume</a>
            </div>
        </div>
    </section>

    <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
                <div className="column left">
                    <img src={Hero} alt=""/>
                </div>
                <div className="column right">
                    <div className="text">I'm Sri Charan and I'm a <span className="typing-2"></span></div>
                    <p>MERN Stack Web Developer With </p>
                    <a href="#">Download CV</a>
                </div>
            </div>
        </div>
    </section>

    

    <section className="skills" id="skills">
        <div className="max-width">
            <h2 className="title">My skills</h2>
            <div className="skills-content">
                <div className="column left">
                    <div className="text">My creative skills & experiences.</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ratione error est recusandae consequatur, iusto illum deleniti quidem impedit, quos quaerat quis minima sequi. Cupiditate recusandae laudantium esse, harum animi aspernatur quisquam et delectus ipsum quam alias quaerat? Quasi hic quidem illum. Ad delectus natus aut hic explicabo minus quod.</p>
                    
                </div>
                <div className="column right">
                    <div className="bars">
                        <div className="info">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>CSS</span>
                            <span>60%</span>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>JavaScript</span>
                            <span>80%</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>PHP</span>
                            <span>50%</span>
                        </div>
                        <div className="line php"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>MySQL</span>
                            <span>70%</span>
                        </div>
                        <div className="line mysql"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="contact" id="contact">
        <div className="max-width">
            <h2 className="title">Contact me</h2>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">Get in Touch</div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
                    <div className="icons">
                        <div className="row">
                            <i className="fas fa-user"></i>
                            <div className="info">
                                <div className="head">Name</div>
                                <div className="sub-title">Sai Sri Charan</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="info">
                                <div className="head">Address</div>
                                <div className="sub-title">Nellore, India</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-envelope"></i>
                            <div className="info">
                                <div className="head">Email</div>
                                <div className="sub-title">catchme@sricharan.me</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column right">
                    <div className="text">Message me</div>
                    <form action="#">
                        <div className="fields">
                            <div className="field name">
                                <input type="text" placeholder="Name" required/>
                            </div>
                            <div className="field email">
                                <input type="email" placeholder="Email" required/>
                            </div>
                        </div>
                        <div className="field">
                            <input type="text" placeholder="Subject" required/>
                        </div>
                        <div className="field textarea">
                            <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                        </div>
                        <div className="button">
                            <button type="submit">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    
    <footer>
        <span>Created By <a href="http://www.sricharan.me/">Sri Charan</a> | <span className="far fa-copyright"></span> 2020 All rights reserved.</span>
    </footer>
    </>
    
  );
}

export default App;

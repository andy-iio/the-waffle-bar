import './App.css';
import React, { useState } from 'react';
// IMAGES
import mapImage from './media/map.png';
import logo from './media/logo.png';
import aboutUs from './media/aboutus.png';
import classicWaffle from './media/classicwaffle.png';
import chocolateWaffle from './media/chocolatewaffle.png';
import fruitWaffle from './media/fruitwaffle.png';
import smoresWaffle from './media/smoreswaffle.png';
import waffleOnAStick from './media/waffleonastick.png';
import chickenWaffle from './media/chickenwaffle.png';
import icecreamWaffle from './media/icecreamwaffle.png';
import waffleBreakfastSandwich from './media/wafflebreakfastsandwich.png';
import waffleCone from './media/wafflecone.png';

function App() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      // Process the form submission here
      setSubmitted(true);
    };

    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleNavbarToggle = () => {
      setIsNavbarOpen(!isNavbarOpen);
    };

    const handleLinkClick = () => {
      setIsNavbarOpen(false);
    };

    return (
      <body style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <div className="container-fluid page">
          <div className='nav-container'>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top container">
              <img className="image ms-5" src={logo} alt="logo" />
              <a className="navbar-brand" href="#">
                The Waffle Bar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                onClick={handleNavbarToggle}
                aria-controls="navbarNav"
                aria-expanded={isNavbarOpen}
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`collapse navbar-collapse justify-content-end mx-5 ${isNavbarOpen ? 'show' : ''}`}
                id="navbarNav"
              >
                <ul className="navbar-nav text-center">
                  <li className="nav-item mx-2">
                    <a className="nav-link" href="#" onClick={handleLinkClick}>
                      Home
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link" href="#menu" onClick={handleLinkClick}>
                      Menu
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link" href="#contact" onClick={handleLinkClick}>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <header className="main center-text-vertical jumbotron jumbotron-fluid" style={{ backgroundImage: "url(/images/main.png)" }}>
            <div className="container-fluid d-flex align-items-center justify-content-center text-center">
              <div className=" my-auto position-relative">
                <div className="overlay"></div>
                <h1 className="display-4">
                  <span>The</span>
                  <span>Waffle</span>
                  <span>Bar</span>
                </h1>
                <p className="lead">Delicious waffles made with love.</p>
                <a href='#menu' className='btn btn-light text-dark btn-hover'>See Our Menu</a>
              </div>
            </div>
          </header>
          <section id="about" className="py-5 my-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <h2 className="section-title">About Us</h2>
                  <p className="section-description">
                    At The Waffle Bar, we're passionate about serving the most delicious waffles in town. Our mission is to create a unique and unforgettable waffle experience for our customers. With our commitment to quality ingredients, artisanal recipes, and exceptional service, we've become a favorite destination for waffle lovers of all ages.
                  </p>
                  <p className="section-description">
                    Our team of skilled chefs combines traditional techniques with innovative flavors to craft waffles that are crispy on the outside and fluffy on the inside. Whether you're craving a classic waffle with maple syrup or an indulgent creation topped with ice cream and decadent sauces, we have something to satisfy every palate.
                  </p>
                  <p className="section-description">
                    Beyond our waffles, we strive to create a warm and inviting atmosphere for our guests. Our cozy seating areas, friendly staff, and charming decor make The Waffle Bar the perfect place to relax, catch up with friends, or enjoy a delightful meal!
                  </p>
                </div>
                <div className="col-lg-6">
                  <img src={aboutUs} className="img-fluid" alt="Waffle Bar Interior" />
                </div>
              </div>
            </div>
          </section>


          <section id="menu" className="text-center">
            <div className="container">
              <h2 className="mb-4 text-center">Our Menu</h2>
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card">
                    <img src={classicWaffle} className="card-img-top" alt="Classic Waffle" />
                    <div className="card-body" style={{ height: '150px' }}>
                      <h5 className="card-title">Classic Waffle</h5>
                      <p className="card-text">The perfect classic waffle with a crispy exterior and fluffy interior.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card">
                    <img src={chocolateWaffle} className="card-img-top" alt="Waffle with chocolate" />
                    <div className="card-body" style={{ height: '150px' }}>
                      <h5 className="card-title">Chocolate Waffle</h5>
                      <p className="card-text">Indulge in our chocolate-infused waffle topped with rich chocolate sauce.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card">
                    <img src={fruitWaffle} className="card-img-top" alt="Waffle with fruit" />
                    <div className="card-body" style={{ height: '150px' }}>
                      <h5 className="card-title">Fruit Waffle</h5>
                      <p className="card-text">Enjoy a refreshing waffle loaded with fresh seasonal fruits.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card">
                    <img src={smoresWaffle} className="card-img-top" alt="S'mores Waffle" />
                    <div className="card-body" style={{ height: '150px' }}>
                      <h5 className="card-title">S'mores Waffle</h5>
                      <p className="card-text">A warm waffle topped with melted chocolate, marshmallow fluff, and a sprinkle of graham cracker crumbles.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card">
                    <img src={waffleOnAStick} className="card-img-top" alt="Waffle on a Stick" />
                    <div className="card-body" style={{ height: '150px' }}>
                      <h5 className="card-title">Waffle on a Stick</h5>
                      <p className="card-text">A fun and portable twist on the classic waffle served on a stick.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card">
                    <img src={chickenWaffle} className="card-img-top" alt="Chicken and Waffles" />
                    <div className="card-body" style={{ height: '150px' }}>
                      <h5 className="card-title">Chicken and Waffles</h5>
                      <p className="card-text">The perfect combination of crispy fried chicken and fluffy waffles.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card">
                    <img src={icecreamWaffle} className="card-img-top" alt="Ice Cream Waffle" />
                    <div className="card-body" style={{ height: '150px' }}>
                      <h5 className="card-title">Ice Cream Waffle</h5>
                      <p className="card-text">A delightful treat featuring a warm waffle topped with a scoop of creamy ice cream.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card">
                    <img src={waffleBreakfastSandwich} className="card-img-top" alt="Waffle Breakfast Sandwich" />
                    <div className="card-body" style={{ height: '150px' }}>
                      <h5 className="card-title">Waffle Breakfast Sandwich</h5>
                      <p className="card-text">Start your day with a hearty breakfast sandwich made with waffles as the bread.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card">
                    <img src={waffleCone} className="card-img-top" alt="Waffle Cone" />
                    <div className="card-body" style={{ height: '150px' }}>
                      <h5 className="card-title">Waffle Cone</h5>
                      <p className="card-text">A classic waffle cone filled with your favorite ice cream flavors.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="contact">
            <div className="container my-5">
              <div className="row">
                <div className="col-lg-5">
                  <h2 className="text-center">Contact Us</h2>
                  {submitted ? (
                    <p>Thank you for your message! We will be in touch shortly.</p>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" id="message" rows="5" required placeholder="Sample website, this message will not be sent"></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary my-3">Submit</button>
                    </form>
                  )}
                </div>
                <div className="col-lg-3 col-md-6 mx-auto text-center mb-5">
                  <h2>Our Address</h2>
                  <p>123 Main Street, Kitchener, ON</p>
                  <img className="image" src={mapImage} alt="Google Maps"></img>
                </div>
                <div className="col-lg-3 col-md-6 mx-auto text-center ">
                  <h2>Hours:</h2>
                  <div className="my-auto">
                    <p>Mon-Wed: 8am - 4pm</p>
                    <p>Thurs-Sat: 8am - 5pm</p>
                    <p>Sun: 9am-3pm</p>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <footer className="py-3 text-center">
            <p>© 2023 The Waffle Bar. All rights reserved.</p>
            <p>Website created by Andy -- Check out my other work <a href='https://andy-iio.github.io/'>here</a></p>
          </footer>
        </div>
      </body>
    );
  }


export default App;

import Link from "next/link";

export default function Nav() {

  return (
    <header className="w-100">
      <div className="container">
        <div className="top-header d-none d-sm-flex justify-content-between align-items-center">
          <div className="contact">
            <a href="tel:+8801819318726" className="tel">
              <i className="fa fa-phone" aria-hidden="true"></i>+8801819318726
            </a>
            <a href="mailto:info@yourmail.com">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              shafiqulphysiobd@gmail.com
            </a>
          </div>
          <nav className="d-flex aic">

            <ul className="nav social d-none d-md-flex">
              <li>
                <a className="bg-primary" href="https://www.facebook.com/Physio.bangla?mibextid=ZbWKwL" target="_blank">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a className="bg-danger" target="_blank" href="https://youtu.be/1gA82h7PpX0">
                  <i className="fa fa-youtube-play"></i>
                </a>
              </li>
              <li>
                <a className="bg-info" href="https://twitter.com/shafiqu64815043?s=11">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              {/* <img src="sprc-images/home/logo.png" alt="Multipurpose" /> */}
              <h2> <img src="../sprc-images/home/logo.png" alt="" /> SPRC <span>BD</span></h2>
            </a>
            <div className="group d-flex align-items-center">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon "></span>
              </button>
              {/* <a className="login-icon d-sm-none" href="#">
                <i className="fa fa-user"></i>
              </a>
              <a className="cart" href="#">
                <i className="fa fa-shopping-cart"></i>
              </a> */}
            </div>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarTogglerDemo02"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/portfoliopage">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/blogs">
                    Blogs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/appointment">
                    Get Appointment
                  </a>
                </li>
               

                <li className="nav-item">
                  <Link className="nav-link" href="/our-happy-client">
                    our happy clients
                  </Link>
                </li>

              </ul>

            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

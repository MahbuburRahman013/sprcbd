import React from "react";

const SocialLinks = () => {
  return <div className="container">
    <h1 className=" mt-4 text-center fs-2">Welcome To</h1>
    <h1 className="container text-center fs-1 text-primary mb-3">Shafiqul Physiotherapy & Rehabilitation Centre</h1>
    <h1 className=" text-secondary container text-center fs-5">Click Icon To Visit Our Social Media Profiles</h1>

    <div>
      <div
        className="single-widget subscribe-widget"
        data-aos="fade-up"
        data-aos-delay="800"
      >

        <ul className="social-nav mb-4">
          <li>
            <a className="mb-2 bg-danger" href="https://www.youtube.com/@shafiqul8726" target="_blank">
              <i className="fa fa-youtube-play"></i>
            </a><span className="text-primary">Shafiqul Physiotherapy & Rehabilitation Centre</span>
          </li>
          <li>
            <a className=" mb-2 bg-primary " href="https://www.facebook.com/Physio.bangla?mibextid=ZbWKwL">
              <i className="fa fa-facebook"></i>
            </a>
            <span className="text-primary">Shafiqul Physiotherapy & Rehabilitation Centre-SPRC</span>
          </li>
          <li>
            <a className="mb-2 bg-info" href="https://twitter.com/shafiqu64815043?s=11">
              <i className="fa fa-twitter"></i>
            </a><span className="text-primary">Shafiqul Physiotherapy & Rehabilitation Centre</span>
          </li>
          <li>
            <a className="mb-2 bg-danger" href="/">
              <i className="fa fa-globe"></i>
            </a><span className="text-primary">www.sprcbd.com</span>
          </li>
          <li>
            <a className="mb-2 bg-primary" href="#">
              <i className="fa fa-linkedin"></i>
            </a><span className="text-primary">Shafiqul Physiotherapy & Rehabilitation Centre</span>
          </li>
        </ul>
      </div>
    </div>

  </div>;
};

export default SocialLinks;

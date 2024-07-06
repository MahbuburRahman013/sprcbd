import React from "react";

export default function Pricing() {
  return (
    <section className="pricing-table" style={{ overflowX: 'hidden' }}>
      <div className="container">
        <div className="title text-center">
          <h6 className="title-primary">Our prices</h6>
          <h1 className="title-blue">স্বল্প খরচে ফিজিওথেরাপি সেবা নিন </h1>
        </div>
        <div className="row g-0">
          <div className="col-md-4">
            <div
              className="single-pricing text-center"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="600"
            >
              <span>daily</span>
              <h2>Basic</h2>
              <p className="desc">For specific diseases</p>
              <p className="price">400 TK  </p>
              <p>All kinds of Electro therapy <br /> Manual and Manipulation <br /> Theraputic Exercies </p>
              <a href="#" className="btn_custom btn_custom-primary">
              সেবা নিন 
              </a>
              <svg viewBox="0 0 170 193">
                <path
                  fillRule="evenodd"
                  fill="rgb(238, 21, 21)"
                  d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z"
                />
              </svg>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="single-pricing text-center"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
            >
              <span>Per Session</span>
              <h2>Premium</h2>
              <p className="desc"> <br /></p>
              <p className="price">Price is conditional</p>
              <p>CPM </p>
              <p>Laser Therapy</p>
              <p>Shockwave</p>
              <p>Advanced Manual Therapy</p>
              <a href="#" className="btn_custom btn_custom-primary">
                সেবা নিন 
              </a>
              <svg viewBox="0 0 170 193">
                <path
                  fillRule="evenodd"
                  fill="rgb(238, 21, 21)"
                  d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z"
                />
              </svg>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="single-pricing text-center"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="600"
            >
              <span>Yearly</span>
              <h2>Consultancy</h2>
              <p className="desc">Free Follow up during treatment</p>
              <p className="price">500 Tk</p>
              <p>Discuss the indigent patient finencial problem</p>
              <a href="#" className="btn_custom btn_custom-primary">
              সেবা নিন 
              </a>
              <svg viewBox="0 0 170 193">
                <path
                  fillRule="evenodd"
                  fill="rgb(238, 21, 21)"
                  d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

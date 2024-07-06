import React from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";

export default function Trust() {
  return (
    <section className="trust" style={{ overflowX: 'hidden' }}>
      <div className="container">
        <div className="row">
          <div
            className="offset-xl-1 col-xl-6"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            <div className="title">
              <h6 className="title-primary">Physiotherapy in bangladesh</h6>
              <h1>বর্তমান সময়ে এসে বাংলাদেশে ফিজিওথেরাপি অনেক জনপ্রিয় হচ্ছে। </h1>
            </div>
            <p>
            এটি স্বাস্থ্যসেবার একটি গুরুত্বপূর্ণ অংশ হিসাবে কাজ করে, যাতে সংক্রামনা এবং অন্যান্য শারীরিক সমস্যার প্রতিষ্ঠান ও পরিচালনা করা হয়। বাংলাদেশের ফিজিওথেরাপিস্টরা বিশেষজ্ঞ পেশাগত যোগ্যতা সম্পন্ন এবং ম্যানুয়াল থেরাপি, ব্যায়াম প্রেসক্রিপশন, ইলেক্ট্রোথেরাপি ইত্যাদি পদ্ধতি ব্যবহার করে ব্যক্তিগত চিকিৎসা প্রদান করেন।
            </p>
            <h5>যে সকল  জটিল রোগের সমাধান হয় ফিজিওথেরাপিতে </h5>
            <ul className="list-unstyled">
              <li>নিউরোলজিক্যাল ফিজিওথেরাপি </li>
              <li>পেডিয়েটিক ফিজিওথেরাপি</li>
              <li>মাস্কুলোস্কেলিটাল ফিজিওথেরাপি</li>
              <li>স্পোর্টস ফিজিওথেরাপি</li>
            </ul>
            <a href="#" className="btn_custom btn_custom-primary mb-4 ">
            আরো জানুন 
          </a>
          </div>
          <div className="col-xl-5 gallery">
            <LightGallery
              plugins={[lgThumbnail]}
              elementClassNames="row g-0 h-100"
              speed={500}
            >
              <a
                href="sprc-images/light-gallery/image1.jpg"
                className="w-50 h-100 gal-img"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="400"
              >
                <img
                  className="img-fluid"
                  src="sprc-images/light-gallery/image1.jpg"
                  alt="Gallery Image"
                />
                <i className="fa fa-caret-right"></i>
              </a>
              <a
                href="sprc-images/light-gallery/image2.jpg"
                className="w-50 h-50 gal-img"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="600"
              >
                <img
                  className="img-fluid"
                  src="sprc-images/light-gallery/image2.jpg"
                  alt="Gallery Image"
                />
                <i className="fa fa-caret-right"></i>
              </a>
              <a
                href="sprc-images/light-gallery/image3.jpg"
                className="w-50 h-50 gal-img gal-img3"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="600"
              >
                <img
                  className="img-fluid"
                  src="sprc-images/light-gallery/image3.jpg"
                  alt="Gallery Image"
                />
                <i className="fa fa-caret-right"></i>
              </a>
            </LightGallery>
          </div>
        </div>
      </div>
    </section>
  );
}

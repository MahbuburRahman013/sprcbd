"use client"
export default function Featured() {
  return (
    <section className="featured" style={{ overflowX: 'hidden' }}>
      <div className="container">
        <div className="row">
          <div
            className="col-md-6"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <div className="title">
              <h6 className="title-primary">why physiotherapy </h6>
              <h1 className="title-blue">
                ফিজিওথেরাপি কেন আপনার জন্য ভালো?
              </h1>
            </div>
            <p>
            ফিজিওথেরাপি আপনার জন্য ভালো হতে পারে কারণ এটি আপনাকে ব্যাথা মুক্ত  সুস্থতা প্রক্রিয়ায় সহায়তা করতে পারে যা আপনাকে দীর্ঘ মেয়াদী পেইন কিলার মেডিসিন ব্যাবহার থেকে দূরে রাখবে। এছাড়াও ফিজিওথেরাপি আপনার চলাচল এবং গতিশীলতা উন্নতি করে এবং আপনাকে শারীরিকভাবে সবল থাকতে সহায়তা করে।
            </p>
            <div className="media-element d-flex justify-content-between">
              <div className="media">
                <i className="fa fa-magic me-4"></i>
                <div className="media-body">
                  <h5>সাধারণ ফিজিওথেরাপি</h5>
                  
                </div>
              </div>
              <div className="media">
                <i className="fa fa-magic me-4"></i>
                <div className="media-body">
                  <h5>ম্যানুয়াল ও ম্যানিপুলেশন থেরাপি</h5>
                  
                </div>
              </div>
            </div>
            <a href="#" className="btn_custom btn_custom-primary">
              আরও জানুন
            </a>
          </div>
          <div
            className="col-md-6"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <div className="featured-img">
              <img
                className="featured-big"
                src="sprc-images/home/feature-big.jpg"
                alt="Featured 1"
              />
              <img
                className="featured-small"
                src="sprc-images/home/feature-small.jpg"
                alt="Featured 2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

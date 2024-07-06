"use client";
export default function Recent() {
  return (
    <section className="recent-posts" style={{ overflowX: 'hidden' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 shadow rounded">
            <div
              className="single-rpost d-sm-flex align-items-center"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="post-content text_right">
                <time dateTime="2019-04-06T13:53">15 May, 2023</time>
                <h3>
                  <a href="#">Bell's Palsy Physiotherapy</a>
                </h3>
                <p>
                  <a href="#">Benifits</a>, <a href="#">Health</a>,
                  <a href="#">Physiotherapy</a>
                </p>
                <a className="post-btn" href="#">
                  <i className="fa fa-arrow-right"></i>
                </a>
              </div>
              <div className="post-thumb">
                <img
                  className="img-fluid w-100"
                  src="sprc-images/home/post1.jpg"
                  alt="Post 1"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 shadow rounded">
  <div className="single-rpost d-sm-flex align-items-center" data-aos="fade-left" data-aos-duration="800">
    <div className="post-content order-sm-2">
      <time dateTime="2019-04-06T13:53">15 May, 2023</time>
      <h3>
        <a href="#">Stroke Rehabilitation</a>
      </h3>
      <p>
        <a href="#">Benefits</a>, <a href="#">Health</a>, <a href="#">Physiotherapy</a>
      </p>
      <a className="post-btn" href="#">
        <i className="fa fa-arrow-right"></i>
      </a>
    </div>
    <div className="post-thumb order-sm-1">
      <img className="img-fluid w-100" src="sprc-images/home/post2.jpg" alt="Post 1" />
    </div>
  </div>
</div>

          <div className="col-lg-6 shadow rounded">
            <div
              className="single-rpost d-sm-flex align-items-center"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="post-content text_right">
                <time dateTime="2019-04-06T13:53">15 May, 2023</time>
                <h3>
                  <a href="#">Consultation</a>
                </h3>
                <p>
                  <a href="#">Benifits</a>, <a href="#">Health</a>,
                  <a href="#">Physiotherapy</a>
                </p>
                <a className="post-btn" href="#">
                  <i className="fa fa-arrow-right"></i>
                </a>
              </div>
              <div className="post-thumb">
                <img
                  className="img-fluid w-100"
                  src="sprc-images/home/post3.jpg"
                  alt="Post 1"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 shadow rounded">
  <div className="single-rpost d-sm-flex align-items-center" data-aos="fade-left" data-aos-delay="200" data-aos-duration="800">
    <div className="post-content order-sm-2">
      <time dateTime="2019-04-06T13:53">15 May, 2023</time>
      <h3>
        <a href="#">Laser Therapy</a>
      </h3>
      <p>
        <a href="#">Benefits</a>, <a href="#">Health</a>, <a href="#">Physiotherapy</a>
      </p>
      <a className="post-btn" href="#">
        <i className="fa fa-arrow-right"></i>
      </a>
    </div>
    <div className="post-thumb order-sm-1">
      <img className="img-fluid w-100" src="sprc-images/home/post4.jpg" alt="Post 1" />
    </div>
  </div>
</div>

        </div>
        <div className="text-center">
          <a href="#" className="btn_custom btn_custom-primary">
            সব পোস্ট দেখুন
          </a>
        </div>
      </div>
    </section>
  );
}

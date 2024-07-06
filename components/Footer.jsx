import React from "react";

export default function Footer() {
  return (
    <footer style={{ overflowX: 'hidden' }}>
      <div className="footer-widgets">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div
                className="single-widget contact-widget"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <h6 className="widget-tiltle">&nbsp;</h6>
                
                <div className="media">
                  <i className="fa fa-map-marker"></i>
                  <div className="media-body ms-3">
                    <h6>Address</h6>
                   1707,A Golpahar Moor,
                   O.R.Nizam Road,Chittagong
                  </div>
                </div>
                <div className="media">
                  <i className="fa fa-envelope-o"></i>
                  <div className="media-body ms-3">
                    <h6>Have any questions?</h6>
                    <a href="mailto:shafiqulphysiobd@gmail.com">
                    shafiqulphysiobd@gmail.com
                    </a>
                  </div>
                </div>
                <div className="media">
                  <i className="fa fa-phone"></i>
                  <div className="media-body ms-3">
                    <h6>Call us & Hire us</h6>
                    <a href="tel:+88 01819318726"> +88 01819318726</a>
                  </div>
                </div>
                <div className="media">
                  <i className="fa fa-fax"></i>
                  <div className="media-body ms-3">
                    <h6>Whats App</h6>
                    <a href="call:+88 01819318726">+88 01819318726</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 color_title">
              <div
                className="single-widget twitter-widget"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h6 className="widget-tiltle">Recent Blog Posts</h6>
                <div className="media">
                  <i className="fa fa-twitter"></i>
                  <div className="media-body ms-3">
                    <h6>
                    <a href="/blogpost/physiotherapy">
                    ফিজিওথেরাপির উপকার জানুন: আপনার পুনরুদ্ধার পথে সহায়তা করুন।
                    </a>
                    </h6>
                    <span>15 May, 2023</span>
                  </div>
                </div>
                <div className="media">
                  <i className="fa fa-twitter"></i>
                  <div className="media-body ms-3">
                    <h6>
                    <a href="/blogpost/Bells_Palsy">বেলস পালসিতে ( Bell’s palsy ) বা মুখ একদিকে বেকে যাওয়া রোগের চিকিৎসা</a>
                    </h6>
                    <span>15 May, 2023</span>
                  </div>
                </div>
                <div className="media">
                  <i className="fa fa-twitter"></i>
                  <div className="media-body ms-3">
                    <h6>
                   <a href="/blogpost/CARPALTUNNELSYNDROME_SHAFIQULPHYSIOTHERAPY">CARPAL TUNNEL SYNDROME</a>
                    </h6>
                    <span>15 May, 2023</span>
                  </div>
                </div>
                <div className="media">
                  <i className="fa fa-twitter"></i>
                  <div className="media-body ms-3">
                    <h6>
                    <a href="/blogpost/back-pain">কোমরে ব্যথা,ঘাড়ে ব্যথা,হাটু ব্যাথার চিকিৎসা করুন ঘরে বসে।</a>
                    </h6>
                    <span>15 May, 2023</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div
                className="single-widget recent-post-widget"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h6 className="widget-tiltle">রোগী দেখার সময়সূচী </h6>
                <div className="media">
                  <a className="rcnt-img" href="#">
                    <img src="sprc-images/days/1.png" alt="Recent Post" />
                  </a>
                  <div className="media-body ms-3">
                    <h6>
                      <a href="#">শনিবার</a>
                    </h6>
                    <p>
                      <i className="fa fa-clock-o"></i>সকাল ৯ টা - রাত  ১০ টা
                      <i className="fa fa-calendar-plus-o"></i> <a href="/appointment">এপয়েন্টমেন্ট নিন </a>
                    </p>
                  </div>
                </div>
                <div className="media">
                  <a className="rcnt-img" href="#">
                    <img src="sprc-images/days/2.png" alt="Recent Post" />
                  </a>
                  <div className="media-body ms-3">
                    <h6>
                      <a href="#">রবিবার</a>
                    </h6>
                    <p>
                      <i className="fa fa-clock-o"></i>সকাল ৯ টা - রাত  ১০ টা
                      <i className="fa fa-calendar-plus-o"></i> <a href="/appointment">এপয়েন্টমেন্ট নিন </a>
                    </p>
                  </div>
                </div>
                <div className="media">
                  <a className="rcnt-img" href="#">
                    <img src="sprc-images/days/3.png" alt="Recent Post" />
                  </a>
                  <div className="media-body ms-3">
                    <h6>
                      <a href="#"> সোমবার </a>
                    </h6>
                    <p>
                      <i className="fa fa-clock-o"></i>সকাল ৯ টা - রাত  ১০ টা
                      <i className="fa fa-calendar-plus-o"></i> <a href="/appointment">এপয়েন্টমেন্ট নিন </a>
                    </p>
                  </div>
                </div>
                <div className="media">
                  <a className="rcnt-img" href="#">
                    <img src="sprc-images/days/4.png" alt="Recent Post" />
                  </a>
                  <div className="media-body ms-3">
                    <h6>
                      <a href="#">মঙ্গলবার </a>
                    </h6>
                    <p>
                      <i className="fa fa-clock-o"></i>সকাল ৯ টা - রাত  ১০ টা
                      <i className="fa fa-calendar-plus-o"></i> <a href="/appointment">এপয়েন্টমেন্ট নিন </a>
                    </p>
                  </div>
                </div>
                <div className="media">
                  <a className="rcnt-img" href="#">
                    <img src="sprc-images/days/5.png" alt="Recent Post" />
                  </a>
                  <div className="media-body ms-3">
                    <h6>
                      <a href="#">বুধবার </a>
                    </h6>
                    <p>
                      <i className="fa fa-clock-o"></i>সকাল ৯ টা - রাত  ১০ টা
                      <i className="fa fa-calendar-plus-o"></i> <a href="/appointment">এপয়েন্টমেন্ট নিন </a>
                    </p>
                  </div>
                </div>
                <div className="media">
                  <a className="rcnt-img" href="#">
                    <img src="sprc-images/days/6.png" alt="Recent Post" />
                  </a>
                  <div className="media-body ms-3">
                    <h6>
                      <a href="#">বৃহস্পতিবার</a>
                    </h6>
                    <p>
                      <i className="fa fa-clock-o"></i>সকাল ৯ টা - রাত  ১০ টা
                      <i className="fa fa-calendar-plus-o"></i> <a href="/appointment">এপয়েন্টমেন্ট নিন </a>
                    </p>
                  </div>
                </div>
                <div className="media">
                  <a className="rcnt-img" href="#">
                    <img src="sprc-images/days/7.png" alt="Recent Post" />
                  </a>
                  <div className="media-body ms-3">
                    <h6>
                      <a href="#">শুক্রবার</a>
                    </h6>
                    <p>
                      <i className="fa fa-clock-o"></i>সকাল ৯ টা - রাত  ১০ টা
                      <i className="fa fa-calendar-plus-o"></i> <a href="/appointment">এপয়েন্টমেন্ট নিন </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div
                className="single-widget tags-widget"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <h6 className="widget-tiltle">Popular Tags</h6>
                <a href="#">Physiotherapy</a>
                <a href="#">Health</a>
                <a href="#">Manual Therapy</a>
                <a href="#">Nech Pain</a>
                <a href="#">Shoulder Pain</a>
                <a href="#">Knee Pain</a>
              </div>
              <div
                className="single-widget subscribe-widget"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <h6 className="widget-tiltle">Subscribe us</h6>
                <p>
                  Sign up for our mailing list to get latest updates and offers
                </p>
                <form className="" method="get">
                  <div className="input-group">
                    <input
                      className="field form-control"
                      name="subscribe"
                      type="email"
                      placeholder="Email Address"
                    />
                    <span className="input-group-btn">
                      <button type="submit" name="submit-mail">
                        <i className="fa fa-check"></i>
                      </button>
                    </span>
                  </div>
                </form>
                <p>We respect your privacy</p>
                <ul className="nav social-nav">
                  <li>
                    <a className="bg-danger" href="https://youtu.be/1gA82h7PpX0" target="_blank">
                      <i className="fa fa-youtube-play"></i>
                    </a>
                  </li>
                  <li>
                    <a className="bg-primary" href="https://www.facebook.com/Physio.bangla?mibextid=ZbWKwL">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a className="bg-info" href="https://twitter.com/shafiqu64815043?s=11">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a className="bg-danger" href="#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a className="bg-primary" href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="foot-note">
        <div className="container">
          <div className="footer-content text-center text-lg-left d-lg-flex justify-content-between align-items-center">
            <p className="mb-0" data-aos="fade-right" data-aos-offset="0">
              &copy; 2023 All Rights Reserved by&nbsp;
              <a
                href="/"
                target="_blank"
                className="fh5-link"
              >
                SprcBd.Com
              </a>
              
            </p>
            <p className="mb-0" data-aos="fade-left" data-aos-offset="0">
              <a href="#">Terms Of Use</a>
              <a href="#">Privacy & Security Statement</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

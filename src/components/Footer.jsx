function Footer() {
  return (
    <>
      <footer id="SearchPaternftr">
        <h1 className="text-center text-white pt-5">Anyone can use Search Pattern to <br />
          create better content</h1>
        <div className="container">
          <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top justify-content-evenly">
            <div className="col mb-6">
              <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                <img src="images\S P LOGO 3.png" style={{ width: "100%" }} alt="" />
              </a>
              <h2 className="text-white">Search <i>patterns</i></h2>
              <h3 className="text-white">Need help ? Get in touch</h3>
              <h5 className="text-white">support@searchpattern.com</h5>
              <p className="text-white">Follow Us around the web   -</p>
              <div className="socialicons">
                <a href="#"><img src="images/twitter_3670151.png" width="20px" alt="" className="mx-1" /></a>
                <a href="#"><img src="images/facebook_5968764.png" width="20px" alt="" className="mx-1" /></a>
                <a href="#"><img src="images/youtube_1384060.png" width="20px" alt="" className="mx-1" /></a>
                <a href="#"><img src="images/linkedin_145807.png" width="20px" alt="" className="mx-1" /></a>
                <a href="#"><img src="images/instagram_1384063.png" width="20px" alt="" className="mx-1" /></a>
              </div>
            </div>

            <div className="col mb-3">

            </div>

            <div className="col mb-3">

              <ul className="nav flex-column">
                {/* <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Free Market Research</a></li> */}
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Help center</a></li>
                {/* <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li> */}
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Webinars</a></li>
                {/* <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Search Insights Email Course</a></li> */}
                {/* <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Masterclass Videos</a></li> */}
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Search Listening for Public Relations</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Privacy</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">T&Cs</a></li>
              </ul>
            </div>

            <div className="col mb-3">

              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">USE CASES</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">SEO</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Content Marketing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Consumer Research</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Public Relations</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Reaserch and Development</a></li>
              </ul>
            </div>
          </footer>
        </div>
        <div className="copyright text-center text-white bg-secondary p-2">
          <p>copyright@SearchPattern</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
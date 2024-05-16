import { useContext } from "react";
import { Contextapi } from "../Contextapi";
import ReactFlagsSelect from "react-flags-select";
import { Link } from "react-router-dom";


function Home() {
  const { selected, setSelected, handlePrefixButtonClick, questionPrefixes, searchQuery, handleInputChange } = useContext(Contextapi)

  return (
    <>
      <section id="home">

        <div id="search">
          <div style={{ marginBottom: "0" }}>
            <img class="img-fluid" src="images/businessman-dress-code-pointing-good-job.png" width="300px" style={{ position: "relative", top: "30px" }} alt="" />
            <div class="search-container">
              <h1>Building bridges in the <i>digital</i> landscape...</h1>

              <div class="container">,
                <div class="row d-flex justify-content-center">
                  <div class="col-md-9">
                    <div class="card">
                      <p class="heading mt-3 text-center ">! Use 1-2 words for best results</p>
                      <div class="row justify-content-center">
                        <div className="col-md-8">
                          <div class="search"> <input type="text" class="search-input" value={searchQuery}
                            onChange={handleInputChange}
                            placeholder="Press Enter after typing..."
                            cursor="pointer"
                          /> <Link
                            to="/searchbox" class="search-icon" onClick={() =>
                              handlePrefixButtonClick(
                                questionPrefixes,
                                "Question Prefix"
                              )
                            }> <i class="bi bi-search"></i> </Link>  </div>

                        </div>

                        <div className="" style={{ backgroundColor: "white", width: "auto", height: "50px", padding: "0px 0px 0px", paddingTop: "", marginTop: "19px", borderRadius: "5px" }}>
                          <ReactFlagsSelect
                            selected={selected}
                            onSelect={(code) => setSelected(code)}
                            placeholder="Search Country"
                            searchable
                            searchPlaceholder="Search Country"
                            className="countrybox mt-2"
                          />
                        </div>

                      </div>

                      <div class="row mt-4 g-1 px-4 mb-5 justify-content-center">
                        <div class="col-md-2">
                          <div class="card-inner p-3 d-flex flex-column align-items-center"> <img className="gglimg" src="images/search_281764.png" width="25px" height="25px" alt="" />
                            <div class="text-center mg-text"> <span class="mg-text text-dark">Google</span> </div>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="card-inner p-3 d-flex flex-column align-items-center"> <img className="gglimg" src="images/bing_732186.png" width="25px" height="25px" alt="" />
                            <div class="text-center mg-text"> <span class="mg-text text-dark">Bing</span> </div>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="card-inner p-3 d-flex flex-column align-items-center"> <img className="gglimg" src="images/youtube_1384060.png" width="25px" height="25px" alt="" />
                            <div class="text-center mg-text"> <span class="mg-text text-dark">YouTube</span> </div>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="card-inner p-3 d-flex flex-column align-items-center"><img className="gglimg" src="images/social_14063250.png" width="25px" height="25px" alt="" />
                            <div class="text-center mg-text"> <span class="mg-text text-dark">Amazon</span> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className="container-fluid text-center first">
          <div className="row justify-content-center">
            <div className="col-md-8 ">
              <h1>Receive Immediate,<span>Unfiltered Search Intel</span> , Straight from Your Customer's <span>Thoughts</span> </h1>
              <p className="mt-5">Every day, 3 billion searches happen on Google, and 20% of them are entirely new. These searches offer a direct glimpse into your customers' minds...</p>

              <h4>At times, it's as simple as 'How to fix a paper jam,' while other moments unveil their deepest fears and hidden desires, confided only in the sanctum of Google.</h4>
            </div>
          </div>
        </div>


        <div className="container-fluid text-center third">
          <div className="row justify-content-center">
            <div className="col-md-8 ">
              <h1 className="mt-5">Uncover a Hidden <span>Treasure</span> Trove of Content Inspiration</h1>
              <p className="mt-5">Search Patterns delves into autocomplete data from search engines like Google, rapidly producing every pertinent phrase and inquiry people are posing around your keyword.
              </p>

              <p className="mt-5">It's a rich source of consumer understanding that you can leverage to develop innovative, highly valuable content, products, and services. Exactly what your customers are seeking.</p>
            </div>
          </div>
        </div>

        <div className="container-fluid chart mb-5">
          <div className="row ">
            <div className="col-md-12">
              {/* <img src="images/chart.png" alt="" className="text-center" /> */}
            </div>
          </div>
        </div>


        <div className="container-fluid coma mb-5">
          <div className="row ">
            <div className="col-md-12">
              <img src="images/coma.png" alt="" className="text-center" />
            </div>
          </div>
        </div>

        <div className="container-fluid text-center third ">
          <div className="row justify-content-center">
            <div className="col-md-8 ">
              <h1 className="mt-2 mb-5">"<span>Google</span> searches represent the most significant dataset ever amassed on the <span>human mind.</span>"</h1>
              <br className="break-line" />
              <h1 className="mt-5 mb-5">Every Month <span>20,000+ </span>
                Companies Do Awesome Things
                With <span>Search Patterns</span></h1>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-5 customerlogo">
          <div className="row justify-content-center ">
            <div className="col-md-2"><img src="images/logo1.svg" alt="" /> </div>
            <div className="col-md-2"> <img src="images/logo2.svg" alt="" style={{ marginTop: "8px" }} /></div>
            <div className="col-md-2" > <img src="images/logo1.png" style={{ width: "50%" }} className="ms-5" alt="" /></div>
            <div className="col-md-2"><img src="images/logo2.png" alt="" style={{ width: "80%" }} className="mt-4" /></div>
          </div>
        </div>

        <div className="container-fluid mt-5 hero">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-7">
              <img src="images/coma.png" alt="" style={{ width: "10%" }} />
              <h3 className="text-center ps-2"> "Greetings! I'm Sudhanshu Gupta, the driving force behind Search Patterns, our pioneering AI-driven search platform. With a relentless pursuit of excellence and a vision to redefine how we access information, I lead a dynamic team dedicated to pushing the boundaries of search technology. Join us as we embark on a journey to shape the future of search and empower users worldwide".</h3>
            </div>
            <div className="col-md-3">
              <img src="images/hero.png" alt="" />
            </div>

            <div className="col-md-1"></div>
          </div>
        </div>

        <div className="container-fluid text-center third mt-5">
          <div className="row justify-content-center">
            <div className="col-md-8 ">
              <h1 className="mt-2 mb-5">"<span>Google</span> searches represent the most significant dataset ever amassed on the <span>human mind.</span>"</h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row mt-5 d-flex justify-content-evenly">
            <div className="col-md-3">
              <div className="card mb-3 service">
                <div className="card-body">
                  <i className="bi bi-person-fill-gear icon"></i>
                  <h5 className="card-title text-center">Meet your customers exactly where they are
                  </h5>
                  <br />
                  <p className="card-text text-center">Generate uncannily pertinent content that resonates deeply and boosts traffic, downloads, views, and shares.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3 service">
                <div className="card-body">
                  <i className="bi bi-clipboard-pulse icon"></i>

                  <h5 className="card-title text-center">Stay keenly attuned to the current trends and developments.
                  </h5>
                  <br />
                  <p className="card-text text-center">Receive notifications whenever your keyword is discussed in novel contexts. Track trends and analyze shifts in search patterns over time.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3 service">
                <div className="card-body">
                  <i class="bi bi-database icon"></i>

                  <h5 className="card-title text-center">Uncover hidden treasures
                  </h5>
                  <br />
                  <p className="card-text text-center">Unearth unforeseen revelations and obscure niches that enhance organic search and provide your campaigns with a competitive advantage.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 d-flex justify-content-evenly">
            <div className="col-md-3">
              <div className="card mb-3 service">
                <div className="card-body">
                  <i class="bi bi-hourglass-split icon"></i>
                  <h5 className="card-title text-center">Cease squandering time on intuition and speculation.
                  </h5>
                  <br />
                  <p className="card-text text-center">Effortlessly populate your content calendar (rapidly) and bid farewell to writer’s block by accessing a plethora of content ideas derived from insightful keyword research.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3 service">
                <div className="card-body">
                  <i class="bi bi-graph-up-arrow icon"></i>
                  <h5 className="card-title text-center">Make sound business judgments: reduce exposure to risk.
                  </h5>
                  <br />
                  <p className="card-text text-center">Gain real-time access to what individuals are searching on Google and leverage search data to make daring decisions that drive business growth.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3 service">
                <div className="card-body">

                  <i class="bi bi-funnel icon"></i>
                  <h5 className="card-title text-center">Optimize your content creation process.
                  </h5>
                  <br />
                  <p className="card-text text-center">Discover content concepts without the need to manually sort through individual keywords. Save significant amounts of time, spanning days or even weeks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default Home;
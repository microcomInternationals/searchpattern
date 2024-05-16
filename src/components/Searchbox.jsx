import React, { useContext } from "react";
import ReactFlagsSelect from "react-flags-select";
import { Contextapi } from "../Contextapi";
import Chart from "./Chart";
import Table from "./Table";

function SearchBox() {
  const { selected, setSelected, handlePrefixButtonClick, questionPrefixes, prepositionPrefixes, comparisonPrefixes, isLoading, selectedCategory, searchResults, searchQuery, handleInputChange } = useContext(Contextapi)
  return (
    <>
      <section id="search">
        <div style={{ marginBottom: "0" }}>
          {/* <img class="img-fluid" src="images/businessman-dress-code-pointing-good-job.png" width="300px" style={{ position: "relative", top: "30px" }} alt="" /> */}
          <div class="search-container">
            {/* <h1>Building bridges in the <i>digital</i> landscape...</h1> */}

            <div class="container-fluid" style={{ marginTop: "4%" }}>,
              <div class="row d-flex justify-content-center">
                <div class="col-md-10">
                  <div class="card">
                    <p class="heading mt-3 text-center ">! Use 1-2 words for best results</p>
                    <div class="row justify-content-center">
                      <div className="col-md-8">
                        <div class="search"> <input type="text" class="search-input" value={searchQuery}
                          onChange={handleInputChange}
                          placeholder="Press Enter after typing..."
                          cursor="pointer"
                        /> <a
                          href="#chart" class="search-icon" onClick={() =>
                            handlePrefixButtonClick(
                              questionPrefixes,
                              "Question Prefix"
                            )
                          }> <i class="bi bi-search"></i> </a>  </div>

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
                          <div class="text-center mg-text"> <span class="mg-text">Google</span> </div>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="card-inner p-3 d-flex flex-column align-items-center"> <img className="gglimg" src="images/bing_732186.png" width="25px" height="25px" alt="" />
                          <div class="text-center mg-text"> <span class="mg-text">Bing</span> </div>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="card-inner p-3 d-flex flex-column align-items-center"> <img className="gglimg" src="images/youtube_1384060.png" width="25px" height="25px" alt="" />
                          <div class="text-center mg-text"> <span class="mg-text">YouTube</span> </div>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="card-inner p-3 d-flex flex-column align-items-center"><img className="gglimg" src="images/social_14063250.png" width="25px" height="25px" alt="" />
                          <div class="text-center mg-text"> <span class="mg-text">Amazon</span> </div>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
        <div className="container ">
          <div className="row ">
            {/* Search Input and Buttons */}
            <div className="col-12 text-center mt-3 ">
              <div>
                <button
                  onClick={() =>
                    handlePrefixButtonClick(
                      questionPrefixes,
                      "Question Prefix"
                    )
                  }
                  className="btn btn-secondary mb-2 me-2 prefixbtn">
                  Question
                </button>
                <button
                  onClick={() =>
                    handlePrefixButtonClick(
                      prepositionPrefixes,
                      "Preposition Prefix"
                    )
                  }
                  className="btn btn-secondary mb-2 me-2 prefixbtn">
                  Preposition
                </button>
                <button
                  onClick={() =>
                    handlePrefixButtonClick(
                      comparisonPrefixes,
                      "Comparison Prefix"
                    )
                  }
                  className="btn btn-secondary mb-2 me-2 prefixbtn">
                  Comparison
                </button>
              </div>
            </div>


            {searchQuery &&
              <div className="col-12 text-center mt-5 mb-5 d-flex" style={{ float: "right" }}>
                <a href="#table"> <button className="btn btn-secondary btn-sm prefixbtn">Table</button></a>
                <a href="#chart"></a>
              </div>
            }



            {/* Selected Category and Prefixes */}
            <div className="col-12 ">
              {isLoading ? (
                <div>Loading...</div>
              ) : (
                <div>
                  {selectedCategory && searchResults[selectedCategory] && (
                    <div>
                      <strong>{selectedCategory}:</strong>
                      <ul>
                        {searchResults[selectedCategory].map((prefix, index) => (
                          <li key={index}>{prefix}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>



            <Chart />
            <Table />


          </div>
        </div>
      </section>
    </>
  );
}

export default SearchBox;

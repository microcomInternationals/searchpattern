import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import * as d3 from "d3";
import ReactFlagsSelect from "react-flags-select";
import Home from "./Home";

function SearchBox() {
  const [selected, setSelected] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [data, setData] = useState({});
  const chartRef = useRef(null);

  const questionPrefixes = ["What", "When", "How", "Where", "Why", "Which", "Who"];
  const prepositionPrefixes = ["Can", "for", "Is", "to", "near", "with", "Without"];
  const comparisonPrefixes = ["vs", "or", "like", "versus", "and", "between"];

  const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  };

  const fetchSuggestions = async (prefixes) => {
    const categorizedSuggestions = {};

    for (const prefix of prefixes) {
      try {
        const response = await fetch(
          `http://localhost:5000/suggestions?prefix=${prefix}&query=${searchQuery}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const responseData = await response.json();
        categorizedSuggestions[prefix] = responseData[1];
        setData((prevData) => ({
          ...prevData,
          [prefix]: responseData[1],
        }));
        await delay(100);
      } catch (error) {
        console.error(error);
      }
    }

    return categorizedSuggestions;
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handlePrefixButtonClick = async (prefixes, category) => {
    setIsLoading(true);
    setSearchResults({});
    setSelectedCategory(category);
    setData({});
    const categorizedSuggestions = await fetchSuggestions(prefixes);
    setSearchResults(categorizedSuggestions);
    setIsLoading(false);
  };

  useEffect(() => {
    if (selectedCategory) {
      const fetchData = async () => {
        setIsLoading(true);
        const categorizedSuggestions = await fetchSuggestions(
          selectedCategory === "Question Prefix"
            ? questionPrefixes
            : selectedCategory === "Preposition Prefix"
              ? prepositionPrefixes
              : comparisonPrefixes
        );
        setSearchResults(categorizedSuggestions);
        setIsLoading(false);
      };

      fetchData();
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      const chartData = formatDataForChart(data);
      renderChart(chartData);
    }
  }, [data]);

  const formatDataForChart = (data) => {
    const formattedData = {
      name: "",
      children: Object.entries(data).map(([prefix, items]) => ({
        name: prefix,
        children: items.map((item) => ({ name: item })),
      })),
    };
    return formattedData;
  };

  const renderChart = (chartData) => {
    const width = 928;
    const height = width;
    const cx = width * 0.5;
    const cy = height * 0.59;
    const radius = Math.min(width, height) / 2 - 30;

    const tree = d3.tree()
      .size([2 * Math.PI, radius])
      .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth);

    const root = tree(d3.hierarchy(chartData)
      .sort((a, b) => d3.ascending(a.data.name, b.data.name)));

    const svg = d3.select(chartRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-775, -550.50, 1500, 1300])
      .attr("style", "width: 100%; height: auto; font: 15px sans-serif;");

    svg.selectAll("*").remove(); // Clear existing elements before rendering

    svg.append("g")
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-opacity", 1)
      .attr("stroke-width", 0.5)
      .selectAll()
      .data(root.links())
      .join("path")
      .attr("d", d3.linkRadial()
        .angle(d => d.x)
        .radius(d => d.y));

    svg.append("g")
      .selectAll()
      .data(root.descendants())
      .join("circle")
      .attr("transform", d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y}, 0)`)
      .attr("fill", d => d.children ? "orangered" : "orangered")
      .attr("r", 3.5);

    svg.append("g")
      .attr("stroke-linejoin", "round")
      .attr("stroke-width", 3)
      .selectAll()
      .data(root.descendants())
      .join("a")
      .attr("xlink:href", d => `https://www.google.com/search?q=${d.data.name}`)
      .attr("target", "_blank")
      .append("text")
      .attr("transform", d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y}, 0) rotate(${d.x >= Math.PI ? 180 : 0})`)
      .attr("dy", "0.31em")
      .attr("x", d => d.x < Math.PI === !d.children ? 6 : -6)
      .attr("text-anchor", d => d.x < Math.PI === !d.children ? "start" : "end")
      .attr("paint-order", "stroke")
      .attr("stroke", "")
      .attr("fill", "White")
      .text(d => d.data.name);
  };

  return (
    <>
      <section id="search">
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
                        /> <a
                          href="#chart" class="search-icon" onClick={() =>
                            handlePrefixButtonClick(
                              questionPrefixes,
                              "Question Prefix"
                            )
                          }> <i class="bi bi-search"></i> </a>  </div>

                      </div>

                      <div className="" style={{ backgroundColor: "white", width: "21%", height: "50px", padding: "0px 0px 0px", paddingTop: "", marginTop: "19px", borderRadius: "5px" }}>
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


          {/* <div class="search-container">
            <h1>Building bridges in the <i>digital</i> landscape...</h1>
            <div class="search-box">
              <div class="suggestword">
                <i class="bi bi-exclamation-circle"></i>
                <p>Use 1-2 words for best results</p>
              </div>
              <br className="break-line" />
              <div className="cotainer">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <form class="search-form">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={handleInputChange}
                        placeholder="Press Enter after typing..."
                        cursor="pointer"
                      />
                      <span onClick={() =>
                        handlePrefixButtonClick(
                          questionPrefixes,
                          "Question Prefix"
                        )
                      }
                      ><i class="bi bi-search"></i></span>
                    </form>
                  </div>
                  <div className="col-md-4 text-black">
                    <ReactFlagsSelect
                      selected={selected}
                      onSelect={(code) => setSelected(code)}
                      placeholder="Search Country"
                      searchable
                      searchPlaceholder="Search Country"
                      className="countrybox"
                      styleDropdownMenu={{ color: 'black' }}

                    />
                  </div>
                </div>
              </div>
              <div class="socialmeadia">
                <div class="ggl">
                  <a href="#"><img src="images/search_281764.png" width="25px" height="25px" alt="" /></a>
                  <a href="#"><p>Google</p></a>
                </div>
                <div class="bing">
                  <a href="#"><img src="images/bing_732186.png" width="25px" height="25px" alt="" /></a>
                  <a href="#"><p>Bing</p></a>
                </div>
                <div class="ytb">
                  <a href="#"><img src="images/youtube_1384060.png" width="25px" height="25px" alt="" /></a>
                  <a href="#"><p>YouTube</p></a>
                </div>
                <div class="amzn">
                  <a href="#"><img src="images/social_14063250.png" width="25px" height="25px" alt="" /></a>
                  <a href="#"><p>Amazon</p></a>
                </div>
              </div>
            </div>
          </div> */}
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
            {/* Chart for each Prefix  */}
            <div className="col-12" style={{ width: "100%" }} id="chart">
              <svg ref={chartRef}></svg>
            </div>


            {/* Data for each Prefix */}
            {Object.entries(data).map(([prefix, items]) => (
              <div className="col-4 mt-5" key={prefix} id="table">
                <h3 className="text-white">Data for "{prefix}" Prefix:</h3>
                <ul>
                  {undefined !== items && items.map((item, index) => (
                    <a key={index} href={"https://www.google.com/search?q=" + item} target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
                      <li key={index}>{item}</li>
                    </a>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {!searchQuery && <Home />}
    </>
  );
}

export default SearchBox;

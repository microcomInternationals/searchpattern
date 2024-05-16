
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import SearchBox from './components/Searchbox';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import { Contextapi } from './Contextapi';
import * as d3 from "d3";
import { useEffect, useRef, useState } from 'react';
import Home from './components/Home';




function App() {

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
      <Router>
        <Contextapi.Provider value={{ selected, setSelected, handlePrefixButtonClick, questionPrefixes, prepositionPrefixes, comparisonPrefixes, isLoading, selectedCategory, searchResults, chartRef, data, searchQuery, handleInputChange }}>
          <Navbar />
          <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/searchbox' element={<SearchBox />}></Route>
            <Route path='/' element={<Home />}></Route>
            {/* <Route path='/about' element={<About />}></Route> */}
          </Routes>
          <Footer />
        </Contextapi.Provider>
      </Router>

    </>
  );
}

export default App;

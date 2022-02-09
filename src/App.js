import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav";
import NewsContent from "./Components/NewsContent/NewsContent";
import { api_key } from "./data/config";
import "./App.css";
function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [loadMore, setLoadMore] = useState(20);
  const [newsResult, setNewsResult] = useState();

  useEffect(() => {
    const newsApi = async () => {
      try {
        const news = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}&category=${category}&pageSize=${loadMore}`
        );
        setNewsArray(news.data.articles);
        setNewsResult(news.data.totalResults);
      } catch (error) {
        console.log(error);
      }
    };
    newsApi();
  }, [newsResult, category, loadMore]);

  return (
    <div>
      <Nav setCategory={setCategory} />
      <NewsContent
        loadMore={loadMore}
        setLoadMore={setLoadMore}
        newsArray={newsArray}
        newsResult={newsResult}
      />
      <Footer />
    </div>
  );
}

export default App;

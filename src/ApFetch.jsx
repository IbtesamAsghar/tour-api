import React, { useState, useEffect } from "react";
// const url =
//   "https://newsapi.org/v2/top-headlines?country=us&apiKey=b21af2ea823d42eda49cc3807853f397";
const url =
  "https://newsapi.org/v2/everything?q=bitcoin&apiKey=b21af2ea823d42eda49cc3807853f397";
const ApiFetch = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");
  const fetchNews = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setNews(data.articles);
    console.log(data.articles);
  };
  console.log(query);
  const removeNews = (title) => {
    const singleNews = news.filter(
      (meriHeadlines) => meriHeadlines.title !== title
    );
    setNews(singleNews);
  };
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          margin: "auto",
        }}
      >
        <h1>Headlines : {news.length}</h1>
      </div>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <main className="news">
        {news
          .filter((meriHeadlines) => {
            return meriHeadlines.title.toLowerCase().startsWith(query);
          })

          .map((meriHeadlines) => {
            return (
              <div className="headlines">
                <img
                  src={meriHeadlines.urlToImage}
                  alt={meriHeadlines.publishedAt}
                />
                <h4>{meriHeadlines.title}...</h4>
                <p>{meriHeadlines.description.substring(0, 200)}...</p>
                <a target="_blank" href={meriHeadlines.url}>
                  Read more
                </a>
                <footer
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h5>{meriHeadlines.author}</h5>
                  <h5>{meriHeadlines.publishedAt}</h5>
                </footer>
                <button
                  onClick={() => removeNews(meriHeadlines.title)}
                  className="removeBtn"
                >
                  Remove
                </button>

              </div>
            );
          })}
      </main>
    </div>
  );
};

export default ApiFetch;

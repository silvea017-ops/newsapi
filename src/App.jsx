import { useEffect, useRef, useState } from "react";
import NewsCard from "./components/NewsCard/NewsCard";
import MainHeader from "./components/MainHeader";

function App() {
  const [news, setNews] = useState([]);
  const [callStatus, setCallStatus] = useState("top-headlines");
  const [query, setQuery] = useState("삼성");

  const inputRef = useRef();

  useEffect(() => {
    fetchNews();
  }, [callStatus, query]);

  async function fetchNews() {
    const key = import.meta.env.VITE_NEWS_API_KEY;
    const country = "us";
    let api_url = `https://newsapi.org/v2/${callStatus}`;

    if (callStatus === "top-headlines") {
      api_url += `?country=${country}&apiKey=${key}`;
    } else {
      api_url += `?q=${query}&sortBy=popularity&apiKey=${key}`;
    }

    const response = await fetch(api_url);

    response.json().then((data) => {
      console.log(data);
      setNews(data.articles);
    });
    // console.log(data.articles);
  }

  function handleChangeStatus(status) {
    setCallStatus(status);
  }

  function handleSearch(e) {
    // 기본 이벤트를 발생X
    e.preventDefault();

    setQuery(inputRef.current.value);
  }

  return (
    <>
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-12">
        <MainHeader
          callStatus={callStatus}
          handleChangeStatus={handleChangeStatus}
          handleSearch={handleSearch}
          inputRef={inputRef}
        />

        <main className="mt-12 flex-1">
          <section className="grid gap-6 xl:grid-cols-3 sm:grid-cols-2">
            {news.map((article) => (
              <NewsCard key={article.url} {...article} />
            ))}
          </section>
        </main>
      </div>
    </>
  );
}

export default App;

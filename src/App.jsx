import { useEffect, useRef, useState } from "react";
import NewsCard from "./components/NewsCard/NewsCard";
import MainHeader from "./components/MainHeader";
import { StatusContext, StatusProvider } from "./store/status-context";
import MainContent from "./components/MainContent";
import { NewsProvider } from "./store/news-context";
function App() {
  const [query, setQuery] = useState("삼성");
  const inputRef = useRef();
  function handleSearch(e) {
    e.preventDefault();
    setQuery(inputRef.current.value);
  }
  return (
    <StatusProvider>
      <NewsProvider>
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-12">
          <MainHeader handleSearch={handleSearch} inputRef={inputRef} />
          <MainContent query={query} />
        </div>
      </NewsProvider>
    </StatusProvider>
  );
}

export default App;

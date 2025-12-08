import { useContext, useState, useEffect } from "react";
import { StatusContext } from "../store/status-context";
import NewsCard from "./NewsCard/NewsCard";
import { NewsContext } from "../store/news-context";
export default function MainContent({ query }) {
  const { callStatus } = useContext(StatusContext);
  const { newsState, fetchNews } = useContext(NewsContext);

  useEffect(() => {
    fetchNews(callStatus, query);
  }, [callStatus, query]);

  return (
    <main className="mt-12 flex-1">
      <section className="grid gap-6 xl:grid-cols-3 sm:grid-cols-2">
        {newsState.isLoading && <div>로딩중입니다...</div>}
        {newsState.error && <div>에러: {newsState.error}</div>}
        {newsState.news.map((article) => (
          <NewsCard key={article.url} {...article} />
        ))}
      </section>
    </main>
  );
}

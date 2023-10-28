"use client";
import { fetchNews } from "@/lib/action/news.action";
import { useEffect, useState } from "react";
import NewsList from "./NewsList";

interface NewsItem {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

const NewsCard = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  const getNews = async () => {
    const updatedNews: any = await fetchNews();
    setNews(updatedNews);
  };

  useEffect(() => {
    getNews();

    const interval = setInterval(getNews, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="mt-5 space-y-5">
      {news?.map((news) => (
        <NewsList
          key={news._id}
          id={news._id}
          title={news.title}
          description={news.description}
          createdAt={news.createdAt}
          updatedAt={news.updatedAt}
        />
      ))}
    </main>
  );
};

export default NewsCard;

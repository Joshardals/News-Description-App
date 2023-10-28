"use client";
import News from "@/components/News";
import { fetchNews } from "@/lib/action/news.action";
import { useEffect, useState } from "react";

// export default async function Home() {
//   const news = await fetchNews();
//   return (
//     <main className="mt-5 space-y-5">
//       {news?.map((news) => (
//         <News
//           key={news._id}
//           id={news._id}
//           title={news.title}
//           description={news.description}
//           createdAt={news.createdAt}
//           updatedAt={news.updatedAt}
//         />
//       ))}
//     </main>
//   );
// }

const Home = () => {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const updatedNews: any = await fetchNews();
    setNews(updatedNews);
  };

  useEffect(() => {
    getNews();

    const interval = setInterval(getNews, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="mt-5 space-y-5">
      {news?.map((news) => (
        <News
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

export default Home;

import News from "@/components/News";
import { fetchNews } from "@/lib/action/news.action";

export default async function Home() {
  const news = await fetchNews();

  return (
    <main className="mt-5 space-y-5">
      {news?.map((news) => (
        <News
          key={news._id}
          id={news._id}
          title={news.title}
          description={news.description}
          createdAt={news.createdAt}
        />
      ))}
    </main>
  );
}

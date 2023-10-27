import News from "@/components/News";
import { fetchNews } from "@/lib/action/news.action";

export const revalidate = "force-cache";

export default async function Home() {
  const news = await fetchNews();
  let formatedNews = await JSON.stringify(news);
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
}

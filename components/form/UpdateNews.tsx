"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewsValidation, NewsValidationType } from "@/lib/validations/news";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getNewsById, updateNews } from "@/lib/action/news.action";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

interface Props {
  id: string;
}

const UpdateNews = ({ id }: Props) => {
  const [isPending, setPending] = useState(false);
  const router = useRouter();

  const form = useForm<NewsValidationType>({
    resolver: zodResolver(NewsValidation),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = async (values: NewsValidationType) => {
    setPending(true);
    const { title, description } = values;
    await updateNews({ id, title, description });

    router.push("/");
    setPending(false);
  };

  useEffect(() => {
    const fetchCurrentData = async () => {
      const currentNews = await getNewsById(id);
      if (currentNews) {
        form.setValue("title", currentNews.title);
        form.setValue("description", currentNews.description);
      }
    };

    fetchCurrentData();
  }, [id, form]);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="News Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="News Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          {isPending ? "Updating News..." : "Update News"}
        </Button>
      </form>
    </Form>
  );
};
export default UpdateNews;

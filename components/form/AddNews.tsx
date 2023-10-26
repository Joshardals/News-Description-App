"use client";

import { useState, useTransition } from "react";
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
import { createNews } from "@/lib/action/news.action";
import { useRouter } from "next/navigation";

const AddNews = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<NewsValidationType>({
    resolver: zodResolver(NewsValidation),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = async (values: NewsValidationType) => {
    await createNews({
      title: values.title,
      description: values.description,
    });
    startTransition(() => {
      router.push("/");
    });
  };

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
          {isPending ? "Adding News..." : "Add News"}
        </Button>
      </form>
    </Form>
  );
};
export default AddNews;

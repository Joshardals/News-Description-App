"use server";

import { connectToDB } from "../mongoose";
import News from "../models/news.model";

interface Params {
  title: string;
  description: string;
}

export async function createNews({ title, description }: Params) {
  console.log("Received Title", title);

  try {
    connectToDB();

    const createdNews = await News.create({
      title,
      description,
    });

    return createdNews;
  } catch (error: any) {
    console.log("Error creating news..", error.message);
  }
}

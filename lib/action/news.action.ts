"use server";

import { connectToDB } from "../mongoose";
import News from "../models/news.model";
import { revalidatePath } from "next/cache";

interface Params {
  title: string;
  description: string;
}

interface Props {
  id: string;
  title: string;
  description: string;
}

export async function createNews({ title, description }: Params) {
  try {
    connectToDB();

    await News.create({
      title,
      description,
    });

    revalidatePath("/", "layout");
  } catch (error: any) {
    console.log("Error creating news..", error.message);
  }
}

export async function fetchNews() {
  try {
    connectToDB();

    revalidatePath("/");
    const news = await News.find();

    return news;
  } catch (error: any) {
    console.log("Error fetching News: ", error.message);
  }
}

export async function deleteNews(id: string) {
  try {
    connectToDB();
    await News.findByIdAndDelete(id);

    revalidatePath("/", "layout");
  } catch (error: any) {
    console.log("Error deleting News: ", error.message);
  }
}

export async function updateNews({ id, title, description }: Props) {
  try {
    connectToDB();

    const existingNews = await News.findByIdAndUpdate(id, {
      title,
      description,
    });
    revalidatePath("/", "layout");
  } catch (error: any) {
    console.log("Error updating News: ", error.message);
  }
}

export async function getNewsById(id: string) {
  try {
    connectToDB();

    const news = await News.findById(id);

    if (!news) {
      return null;
    }

    return {
      id: news._id,
      title: news.title,
      description: news.description,
    };
  } catch (error: any) {
    console.log("Error getting News: ", error.message);
  }
}

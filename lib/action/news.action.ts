"use server";

import { connectToDB } from "../mongoose";
import News from "../models/news.model";
import { revalidatePath } from "next/cache";

interface Params {
  title: string;
  description: string;
  path: string;
}

interface Props {
  id: string;
  title: string;
  description: string;
  path: string;
}

export async function createNews({ title, description, path }: Params) {
  try {
    connectToDB();

    await News.create({
      title,
      description,
    });

    revalidatePath("/");
  } catch (error: any) {
    console.log("Error creating news..", error.message);
  }
}

export async function fetchNews() {
  try {
    connectToDB();

    return await News.find();
  } catch (error: any) {
    console.log("Error fetching News: ", error.message);
  }
}

export async function deleteNews(id: string) {
  try {
    connectToDB();
    await News.findByIdAndDelete(id);

    revalidatePath("/");
  } catch (error: any) {
    console.log("Error deleting News: ", error.message);
  }
}

export async function updateNews({ id, title, description, path }: Props) {
  try {
    connectToDB();

    await News.findByIdAndUpdate(id, {
      title,
      description,
    });

    revalidatePath("/");
  } catch (error: any) {
    console.log("Error updating News: ", error.message);
  }
}

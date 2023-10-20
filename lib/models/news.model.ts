import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

const News = mongoose.models.News || mongoose.model("News", newsSchema);

export default News;

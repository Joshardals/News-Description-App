import * as z from "zod";

export interface NewsValidationType {
  title: string;
  description: string;
}

export const NewsValidation: z.ZodType<NewsValidationType> = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(3).max(1000),
});

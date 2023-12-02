import {
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSImage,
  MicroCMSQueries,
  createClient,
} from "microcms-js-sdk";
import { notFound } from "next/navigation";

export type Category = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
} & MicroCMSDate &
  MicroCMSContentId;

export type Blog = {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  revisedAt?: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
  category?: Category;
} & MicroCMSDate &
  MicroCMSContentId;

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "",
  apiKey: process.env.MICROCMS_API_KEY || "",
});

export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Blog>({
      endpoint: "blogs",
      queries,
    })
    .catch(notFound);
  return listData;
};

export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });
  return detailData;
};

export const getCategory = async (queries?: MicroCMSQueries) => {
  const categoryData = await client
    .getList<Category>({
      endpoint: "categories",
      queries,
    })
    .catch(notFound);
  console.log(categoryData);
  return categoryData;
};

getCategory();

import React from "react";
import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";
import { getPostData } from "@/service/posts";
import path from "path";

type Props = {
  params: { slug: string };
};
export default async function SlugPage({ params: { slug } }: Props) {
  const { title, description, date, category, content } = await getPostData(
    slug
  );
  return (
    <article>
      <span>{category}</span>
      <h2>{title}</h2>
      <h3>{description}</h3>
      <span>{date}</span>
      <p>{content}</p>
    </article>
  );
}

import React from "react";
import ReactDom from "react-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdown = `Just a link: https://reactjs.com.`;

ReactDom.render(
  <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>,
  document.body
);

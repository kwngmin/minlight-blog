import React from "react";
import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";
import remarkGfm from "remark-gfm";

ReactDom.render(
  <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
    This ~is not~ strikethrough, but ~~this is~~!
  </ReactMarkdown>,
  document.body
);

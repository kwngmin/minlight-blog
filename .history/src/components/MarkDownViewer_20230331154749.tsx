import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function MarkDownViewer({ content }: { content: string }) {
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose lg:prose-lg">
        {content}
      </ReactMarkdown>
    </SyntaxHighlighter>
  );
}

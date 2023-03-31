import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function MarkDownViewer({ content }: { content: string }) {
  return <ReactMarkdown>{content}</ReactMarkdown>;
}

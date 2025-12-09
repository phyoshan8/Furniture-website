import DOMPurify from "dompurify";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
}
function RichTextEditor({ content, className }: Props) {
  const sanitizedContent = DOMPurify.sanitize(content);
  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      className={className}
    />
  );
}

export default RichTextEditor;

"use client";

import type { ReactNode } from "react";
import React from "react";

type TextNode = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
  superscript?: boolean;
  subscript?: boolean;
  keyboard?: boolean;
};

type ElementNode = {
  type: string;
  children: Array<TextNode | ElementNode>;
  [key: string]: any; // level, href, layout, etc.
};

function renderText(node: TextNode | ElementNode, key: number) {
  let content: ReactNode = node.text;

  if (node.bold) content = <strong key={key}>{content}</strong>;
  if (node.italic) content = <em key={key}>{content}</em>;
  if (node.underline) content = <u key={key}>{content}</u>;
  if (node.strikethrough) content = <del key={key}>{content}</del>;
  if (node.code)
    content = (
      <code key={key} className="rounded bg-gray-200 px-1">
        {content}
      </code>
    );
  if (node.superscript) content = <sup key={key}>{content}</sup>;
  if (node.subscript) content = <sub key={key}>{content}</sub>;
  if (node.keyboard)
    content = (
      <kbd key={key} className="rounded bg-gray-300 px-1">
        {content}
      </kbd>
    );

  return content;
}

function renderNode(node: TextNode | ElementNode, key: number): ReactNode {
  if ("text" in node) {
    return renderText(node, key);
  }
  const children = node.children?.map(renderNode);
  switch (node.type) {
    case "paragraph":
      return (
        <p key={key} style={{ textAlign: node.textAlign ?? "left" }}>
          {children}
        </p>
      );

    case "heading": {
      const Tag = `h${node.level}` as keyof React.JSX.IntrinsicElements;
      let alignClass = "text-left";
      if (node.textAlign === "center") alignClass = "text-center";
      else if (node.textAlign === "right") alignClass = "text-right";
      const responsiveSizeClass = node.level === 1;
      const className = `${alignClass}  ${responsiveSizeClass}`.trim();
      return (
        <Tag key={key} className={className}>
          {children}
        </Tag>
      );
    }
    case "unordered-list":
      return (
        <ul key={key} className="list-inside list-disc">
          {children}
        </ul>
      );
    case "ordered-list":
      return (
        <ol key={key} className="list-inside list-decimal">
          {children}
        </ol>
      );
    case "list-item":
      return <li key={key}>{children}</li>;
    case "blockquote":
      return (
        <blockquote
          key={key}
          className="border-l-4 border-gray-400 pl-4 italic"
        >
          {children}
        </blockquote>
      );

    case "code":
      return (
        <pre key={key} className="overflow-x-auto rounded">
          {children}
        </pre>
      );

    case "divider":
      return <hr key={key} className="my-4 border-gray-300" />;

    case "list":
      if (node.type === "list" && node.ordered) {
        return (
          <ol key={key} className="list-inside list-decimal">
            {children}
          </ol>
        );
      }
      return (
        <ul key={key} className="list-inside list-disc">
          {children}
        </ul>
      );

    case "link":
      return (
        <a
          key={key}
          href={node.href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {children}
        </a>
      );

    case "relationship":
      if (!node.data) return null;
      return (
        <a
          key={key}
          href={`/${node.relationship}/${node.data.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {node.data.label ?? "Related Item"}
        </a>
      );

    case "layout": {
      // Assume layout: [number, ...number[]] means grid columns
      const gridCols = node.layout?.length || 1;
      return (
        <div
          key={key}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
            gap: "1rem",
          }}
        >
          {children}
        </div>
      );
    }
    case "list-item-content": {
      return <>{children}</>;
    }
    default: {
      // fallback to div for unknown blocks
      return <div key={key}>{children}</div>;
    }
  }
}

type Props = {
  document: ElementNode[];
};

export default function DocumentRenderer({ document }: Props) {
  return <div>{document.map(renderNode)}</div>;
}

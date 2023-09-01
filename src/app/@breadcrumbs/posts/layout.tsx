import Link from "next/link";
import { ReactNode } from "react";

export default function PostsBreadcrumbsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Link href="/posts">Posts</Link>
      {children}
    </>
  );
}

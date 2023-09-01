import { getPost } from "@/lib/db";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function PostBreadcrumb({
  params,
}: {
  params: { postId: string };
}) {
  let post = getPost(params.postId);

  if (!post) {
    notFound();
  }

  return <Link href={`/posts/${params.postId}`}>{post.title}</Link>;
}

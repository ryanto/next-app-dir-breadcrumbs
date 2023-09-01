import { getPost } from "@/lib/db";
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

  return (
    <div>
      <h1 className="tracking-tighter font-bold text-5xl">{post.title}</h1>
      <p className="mt-3">You are reading post {params.postId}...</p>
    </div>
  );
}

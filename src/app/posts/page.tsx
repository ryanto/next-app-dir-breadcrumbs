import Link from "next/link";

export default function PostPage() {
  return (
    <div>
      <h1 className="tracking-tighter font-bold text-5xl">Posts</h1>

      <ul className="list-disc pl-4 mt-3">
        <li>
          <Link className="text-blue-500 underline" href="/posts/1">
            Post #1
          </Link>
        </li>
        <li>
          <Link className="text-blue-500 underline" href="/posts/2">
            Post #2
          </Link>
        </li>
      </ul>
    </div>
  );
}

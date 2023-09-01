import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="tracking-tighter font-bold text-5xl">Home</h1>
      <p className="mt-3 max-w-prose">
        Welcome to the home page! Visit any of the following pages and watch the
        breadcrumbs in the root layout update. This works with parallel routes
        inside the @breadcrumbs folder that mirror the main app routes.
      </p>
      <ul className="list-disc pl-4 mt-3">
        <li>
          <Link className="text-blue-500 underline" href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="text-blue-500 underline" href="/posts">
            Blog post index
          </Link>
        </li>
        <li>
          <Link className="text-blue-500 underline" href="/posts/1">
            Post #1 (dynamic + nested)
          </Link>
        </li>
        <li>
          <Link className="text-blue-500 underline" href="/posts/2">
            Post #2 (dynamic + nested)
          </Link>
        </li>
      </ul>
    </div>
  );
}

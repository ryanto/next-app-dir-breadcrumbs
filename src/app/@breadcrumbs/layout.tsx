import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex space-x-4 text-sm text-gray-800">
      <Link href="/">Home</Link>
      {children}
    </div>
  );
}

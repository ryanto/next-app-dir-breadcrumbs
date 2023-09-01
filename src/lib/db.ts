import { cache } from "react";

export const getPost = cache((id: string) => {
  if (id === "1") {
    return {
      title: "Hello world! (Post 1)",
    };
  }

  if (id === "2") {
    return {
      title: "The second post",
    };
  }
});

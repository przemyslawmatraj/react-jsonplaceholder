import { useQuery } from "@tanstack/react-query";
import { getFromAPI } from "../api/getFromAPI";
import type { UndefinedInitialDataOptions } from "@tanstack/react-query";

type Albums = {
  userId: number;
  id: number;
  title: string;
}[];

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
}[];

type Comments = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}[];

type Photos = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}[];

type Users = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}[];

type SlugTypeMapping = {
  albums: Albums;
  posts: Posts;
  users: Users;
  comments: Comments;
  photos: Photos;
};

const useAPI = <T extends keyof SlugTypeMapping>(
  slug: T,
  select?: UndefinedInitialDataOptions<SlugTypeMapping[T]>["select"]
) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [slug],
    queryFn: () => getFromAPI<SlugTypeMapping[T]>(slug),
    select,
  });

  return { data, isLoading, isError };
};

export default useAPI;

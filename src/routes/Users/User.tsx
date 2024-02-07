import { useParams } from "react-router-dom";
import useAPI from "../../hooks/useAPI";
import { Link } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const {
    data: user,
    isLoading,
    isError,
  } = useAPI("users", (data) =>
    data.filter((user) => user.id === parseInt(id || ""))
  );

  const {
    data: posts,
    isLoading: isLoadingPosts,
    isError: isErrorPosts,
  } = useAPI("posts", (data) =>
    data.filter((post) => post.userId === parseInt(id || ""))
  );

  const {
    data: albums,
    isLoading: isLoadingAlbums,
    isError: isErrorAlbums,
  } = useAPI("albums", (data) =>
    data.filter((album) => album.userId === parseInt(id || ""))
  );

  if (!id) {
    return <div>Invalid user id</div>;
  }

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error</div>
      ) : (
        user?.length && (
          <>
            <h1>{user[0].name}</h1>
            <h3>Posts</h3>
            {isLoadingPosts ? (
              <div>Loading...</div>
            ) : isErrorPosts ? (
              <div>Error</div>
            ) : (
              <ul>
                {posts?.map((post) => (
                  <li key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                  </li>
                ))}
              </ul>
            )}
            <h3>Albums</h3>
            {isLoadingAlbums ? (
              <div>Loading...</div>
            ) : isErrorAlbums ? (
              <div>Error</div>
            ) : (
              <ul>
                {albums?.map((album) => (
                  <li key={album.id}>
                    <Link to={`/albums/${album.id}`} key={album.id}>
                      {album.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        )
      )}
    </div>
  );
};

export default User;

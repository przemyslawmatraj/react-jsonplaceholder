import { useParams } from "react-router-dom";
import useAPI from "../../hooks/useAPI";

const Post = () => {
  const { id } = useParams();
  const {
    data: post,
    isLoading,
    isError,
  } = useAPI("posts", (data) =>
    data.filter((post) => post.id === parseInt(id || ""))
  );

  const {
    data: comments,
    isLoading: isLoadingComments,
    isError: isErrorComments,
  } = useAPI("comments", (data) =>
    data.filter((comment) => comment.postId === parseInt(id || ""))
  );

  if (!id) {
    return <div>Invalid post id</div>;
  }

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error</div>
      ) : (
        post?.length && (
          <>
            <div>
              <h1>{post[0].title}</h1>
              <p>{post[0].body}</p>
            </div>
            <h3>Comments</h3>
            {isLoadingComments ? (
              <div>Loading...</div>
            ) : isErrorComments ? (
              <div>Error</div>
            ) : (
              <ul>
                {comments?.map((comment) => (
                  <li key={comment.id}>{comment.name}</li>
                ))}
              </ul>
            )}
          </>
        )
      )}
    </div>
  );
};

export default Post;

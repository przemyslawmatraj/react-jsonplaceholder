import { useParams } from "react-router-dom";
import useAPI from "../../hooks/useAPI";

const Album = () => {
  const { id } = useParams();

  const {
    data: albums,
    isLoading,
    isError,
  } = useAPI("albums", (data) =>
    data.filter((album) => album.id === parseInt(id || ""))
  );

  const {
    data: photos,
    isLoading: isLoadingPhotos,
    isError: isErrorPhotos,
  } = useAPI("photos", (data) =>
    data.filter((photo) => photo.albumId === parseInt(id || ""))
  );

  if (!id) return <div>Invalid album id</div>;

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error</div>
      ) : (
        albums?.length && (
          <>
            <h1>{albums[0].title}</h1>
            <h3>Photos</h3>
            {isLoadingPhotos ? (
              <div>Loading...</div>
            ) : isErrorPhotos ? (
              <div>Error</div>
            ) : (
              <ul>
                {photos?.map((photo) => (
                  <li key={photo.id}>
                    <img src={photo.thumbnailUrl} alt={photo.title} />
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

export default Album;

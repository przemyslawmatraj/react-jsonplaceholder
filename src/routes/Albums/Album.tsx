import { useParams } from "react-router-dom";
import useAPI from "../../hooks/useAPI";
import { Layout, theme } from "antd";

const { Header, Content } = Layout;

const Album = () => {
  const { id } = useParams();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const {
    data: albums,
    isLoading: isLoadingAlbums,
    isError: isErrorAlbums,
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
    <>
      <Header
        className="header-style"
        style={{
          padding: "0",
          background: colorBgContainer,
          textAlign: "center",
          fontSize: "1.5vw",
          marginBottom: "2vh",
          whiteSpace: "normal",
          wordWrap: "break-word",
          overflow: "hidden",
        }}
      >
        {albums && albums.length > 0 ? albums[0].title : "Album Title"}
      </Header>
      <Content
        style={{ margin: "0 2vw", display: "flex", flexDirection: "column" }}
      >
        <div
          style={{
            padding: "3vh",
            flex: 1,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {isLoadingAlbums ? (
            <div>Loading...</div>
          ) : isErrorAlbums ? (
            <div>Error</div>
          ) : (
            albums &&
            albums.length > 0 && (
              <>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "24px",
                    marginBottom: "20px",
                  }}
                >
                  Photos
                </p>
                {isLoadingPhotos ? (
                  <div>Loading...</div>
                ) : isErrorPhotos ? (
                  <div>Error</div>
                ) : (
                  <ul
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      listStyle: "none",
                      padding: 0,
                    }}
                  >
                    {photos?.map((photo) => (
                      <li
                        key={photo.id}
                        style={{
                          marginRight: "10px",
                          marginBottom: "10px",
                          width: "150px",
                        }}
                      >
                        <img
                          src={photo.thumbnailUrl}
                          alt={photo.title}
                          style={{ maxWidth: "100%", maxHeight: "150px" }}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )
          )}
        </div>
      </Content>
    </>
  );
};

export default Album;

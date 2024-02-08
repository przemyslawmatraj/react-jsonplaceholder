import { useParams } from 'react-router-dom';
import useAPI from '../../hooks/useAPI';
import { Link } from 'react-router-dom';
import { Layout, theme } from 'antd';

const { Header, Content } = Layout;

const User = () => {
	const { id } = useParams();
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();
	const {
		data: user,
		isLoading,
		isError,
	} = useAPI('users', (data) =>
		data.filter((user) => user.id === parseInt(id || ''))
	);

	const {
		data: posts,
		isLoading: isLoadingPosts,
		isError: isErrorPosts,
	} = useAPI('posts', (data) =>
		data.filter((post) => post.userId === parseInt(id || ''))
	);

	const {
		data: albums,
		isLoading: isLoadingAlbums,
		isError: isErrorAlbums,
	} = useAPI('albums', (data) =>
		data.filter((album) => album.userId === parseInt(id || ''))
	);

	if (!id) {
		return <div>Invalid user id</div>;
	}

	return (
		<>
			<Header
				style={{
					padding: 0,
					background: colorBgContainer,
					textAlign: 'center',
					fontSize: '32px',
					marginBottom: '20px',
				}}
			>
				{user && user.length > 0 ? user[0].name : 'User Name'}
			</Header>
			<Content style={{ margin: '0 16px' }}>
				<div
					style={{
						padding: 24,
						minHeight: 360,
						background: colorBgContainer,
						borderRadius: borderRadiusLG,
					}}
				>
					{isLoading ? (
						<div>Loading...</div>
					) : isError ? (
						<div>Error</div>
					) : (
						user?.length && (
							<>
								<h2 style={{ marginBottom: '20px' }}>Posts</h2>
								{isLoadingPosts ? (
									<div>Loading...</div>
								) : isErrorPosts ? (
									<div>Error</div>
								) : (
									<ul style={{ listStyleType: 'none', padding: 0 }}>
										{posts?.map((post) => (
											<li
												key={post.id}
												style={{ marginBottom: '10px', fontSize: '18px' }}
											>
												<Link to={`/posts/${post.id}`}>{post.title}</Link>
											</li>
										))}
									</ul>
								)}
								<h2 style={{ marginBottom: '20px' }}>Albums</h2>
								{isLoadingAlbums ? (
									<div>Loading...</div>
								) : isErrorAlbums ? (
									<div>Error</div>
								) : (
									<ul style={{ listStyleType: 'none', padding: 0 }}>
										{albums?.map((album) => (
											<li
												key={album.id}
												style={{ marginBottom: '10px', fontSize: '18px' }}
											>
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
			</Content>
		</>
	);
};

export default User;

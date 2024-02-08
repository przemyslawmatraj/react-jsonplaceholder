import { useParams } from 'react-router-dom';
import useAPI from '../../hooks/useAPI';
import { Layout, theme } from 'antd';

const { Header, Content } = Layout;

const Post = () => {
	const { id } = useParams();
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	const {
		data: post,
		isLoading: isLoadingPost,
		isError: isErrorPost,
	} = useAPI('posts', (data) =>
		data.filter((post) => post.id === parseInt(id || ''))
	);

	const {
		data: comments,
		isLoading: isLoadingComments,
		isError: isErrorComments,
	} = useAPI('comments', (data) =>
		data.filter((comment) => comment.postId === parseInt(id || ''))
	);

	if (!id) {
		return <div>Invalid post id</div>;
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
				{post && post.length > 0 ? post[0].title : 'Post Title'}
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
					{isLoadingPost ? (
						<div>Loading...</div>
					) : isErrorPost ? (
						<div>Error</div>
					) : (
						post?.length && (
							<>
								<div style={{ marginBottom: '26px' }}>
									<p style={{ fontSize: '20px' }}>{post[0].body}</p>
								</div>
								<h3>Comments</h3>
								{isLoadingComments ? (
									<div>Loading...</div>
								) : isErrorComments ? (
									<div>Error</div>
								) : (
									<ul style={{ listStyleType: 'none', padding: 0 }}>
										{comments?.map((comment) => (
											<li
												key={comment.id}
												style={{ marginBottom: '10px', fontSize: '18px' }}
											>
												{comment.name}
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

export default Post;

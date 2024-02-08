import { useState } from 'react';
import { Layout, theme } from 'antd';
import useAPI from '../../hooks/useAPI';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;
const Posts = () => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	const { data: posts, isLoading, isError } = useAPI('posts');

	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 40;

	const totalPages = Math.ceil((posts?.length || 0) / itemsPerPage);

	const changePage = (page: number) => {
		setCurrentPage(page);
	};

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;

	const currentPosts = posts?.slice(indexOfFirstItem, indexOfLastItem);

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
				Posts
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
						<>
							<ul
								style={{ textAlign: 'left', listStyleType: 'none', padding: 0 }}
							>
								{currentPosts?.map((post) => (
									<li
										key={post.id}
										style={{ marginBottom: '10px', fontSize: '20px' }}
									>
										<Link to={`/posts/${post.id}`}>{post.title}</Link>
									</li>
								))}
							</ul>
							<div style={{ marginTop: '20px', textAlign: 'center' }}>
								{Array.from({ length: totalPages }, (_, index) => (
									<button
										key={index + 1}
										onClick={() => changePage(index + 1)}
										disabled={index + 1 === currentPage}
										style={{
											margin: '5px',
											padding: '5px 10px',
											fontSize: '18px',
										}}
									>
										{index + 1}
									</button>
								))}
							</div>
						</>
					)}
				</div>
			</Content>
		</>
	);
};

export default Posts;

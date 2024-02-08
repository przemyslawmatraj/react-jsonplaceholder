import { useState } from 'react';
import { Layout, theme } from 'antd';
import useAPI from '../../hooks/useAPI';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;
const Albums = () => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	const { data: albums, isLoading, isError } = useAPI('albums');

	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 40;

	const totalPages = Math.ceil((albums?.length || 0) / itemsPerPage);

	const changePage = (page: number) => {
		setCurrentPage(page);
	};

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;

	const currentAlbums = albums?.slice(indexOfFirstItem, indexOfLastItem);

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
				Albums
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
								{currentAlbums?.map((album) => (
									<li
										key={album.id}
										style={{ marginBottom: '10px', fontSize: '20px' }}
									>
										<Link to={`/albums/${album.id}`}>{album.title}</Link>
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

export default Albums;

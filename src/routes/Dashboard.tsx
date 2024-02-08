import { Layout, theme } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;

const Dashboard = () => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

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
				Dashboard
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
					<h1 style={{ marginBottom: '20px' }}>Dashboard</h1>
					<p>
						Welcome to the JsonplaceholderUI. This is a simple UI to demonstrate
						the use of the JSONPlaceholder API. Click on the links in the menu
						to see the different resources.
					</p>
					<ul style={{ textAlign: 'left', listStyleType: 'none', padding: 0 }}>
						<li style={{ marginBottom: '10px', fontSize: '20px' }}>
							<Link to='/posts'>Posts</Link>
						</li>
						<li style={{ marginBottom: '10px', fontSize: '20px' }}>
							<Link to='/albums'>Albums</Link>
						</li>
						<li style={{ marginBottom: '10px', fontSize: '20px' }}>
							<Link to='/users'>Users</Link>
						</li>
					</ul>
				</div>
			</Content>
		</>
	);
};

export default Dashboard;

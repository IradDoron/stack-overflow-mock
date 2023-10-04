import { UserButton } from '@clerk/nextjs';

const HomePage = () => {
	return (
		<div>
			<h1 className='h1-bold'>Hello World</h1>
			<h1>Not with class</h1>
			<h2 className='h2-bold'>Hello World</h2>
			<h2>Not with class</h2>
			<UserButton afterSignOutUrl='/' />
		</div>
	);
};

export default HomePage;

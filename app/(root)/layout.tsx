const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='bakground-light850_dark100 relative'>
			<section className='min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14'>
				<div className='mx-auto w-full max-w-5xl'>{children}</div>
			</section>
		</main>
	);
};

export const LogoutButton = () => {
	return (
		<div className="flex items-center">
			<a className="h-fit" href="/api/auth/logout">
				Log Out
			</a>
		</div>
	);
};

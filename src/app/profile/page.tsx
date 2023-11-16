import React from "react";

export default async function ProfilePage() {
	const data = fetch("/api/auth/me");
	console.log(data);

	return <div>ProfilePage</div>;
}

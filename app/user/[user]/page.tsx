export default async function Project({
	params,
}: {
	params: Promise<{ user: string }>;
}) {
	const user = (await params).user;
	return (
		<div>
			<h1>{user}</h1>
		</div>
	);
}

export default async function Project({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const id = (await params).id;
	return (
		<div>
			<h1>{id}</h1>
		</div>
	);
}

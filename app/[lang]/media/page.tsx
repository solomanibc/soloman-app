import { type Locale, getDictionary } from "../dictionaries";
import { VideosGrid } from "./videos-grid";

export default async function MediaPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang);

	return (
		<>
			<div className="relative bg-gray-50">
				<section className="relative h-[40vh] bg-[url('https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center">
					<div className="absolute z-0 inset-0 bg-black/60" />
					<div className="relative container mx-auto px-4 h-full flex items-center">
						<div className="max-w-2xl text-white">
							<h1 className="text-5xl font-bold mb-6">{dict.media.title}</h1>
							<p className="text-xl text-gray-200">{dict.media.description}</p>
						</div>
					</div>
				</section>

				{/* Videos Grid */}
				<VideosGrid dict={dict} />
			</div>
		</>
	);
}

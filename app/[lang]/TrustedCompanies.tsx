import { type LocaleParams, getDictionary } from "@/app/[lang]/dictionaries";

export default async function TrustedCompanies({ lang }: LocaleParams) {
	const testimonies = [
		{
			id: 1,
			name: "Company Name",
			logo: "Logo",
		},
		{
			id: 2,
			name: "Company Name",
			logo: "Logo",
		},
		{
			id: 3,
			name: "Company Name",
			logo: "Logo",
		},
		{
			id: 4,
			name: "Company Name",
			logo: "Logo",
		},
	];

	const dict = await getDictionary(lang);

	return (
		<section className="bg-white py-20">
			<div className="container mx-auto px-4 text-center">
				<h2 className="text-3xl font-bold mb-12">{dict.trusted.title}</h2>
				<div className="flex justify-around items-center flex-wrap">
					{testimonies.map((testimony) => (
						<div
							key={testimony.id}
							className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold mb-4"
						>
							{testimony.logo}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

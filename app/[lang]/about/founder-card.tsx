import type { Dictionary } from "@/app/[lang]/dictionaries";

export const FounderCard = ({ dict }: { dict: Dictionary }) => {
	return (
		<div className="mb-12">
			<h3 className="text-2xl font-bold mb-4">{dict.about.founder.title}</h3>
			<p className="text-lg text-gray-600">
				<strong>{dict.about.founder.name}</strong>{" "}
				{dict.about.founder.graduation}
			</p>

			<p className="text-lg text-gray-600 mt-4">
				{dict.about.founder.experience}
			</p>

			<p className="text-lg text-gray-600 mt-4">
				{dict.about.founder.relocating}
			</p>
		</div>
	);
};

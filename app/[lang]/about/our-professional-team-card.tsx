import type { Dictionary } from "@/app/[lang]/dictionaries";

export const OurProfessionalTeamCard = ({ dict }: { dict: Dictionary }) => {
	return (
		<div className="mb-16 ">
			<h3 className="text-2xl font-bold mb-4">
				{dict.about.professionalTeam.title}
			</h3>
			<p className="text-lg text-gray-600">
				{dict.about.professionalTeam.description}
			</p>
			<ul className="list-disc list-inside my-4 ml-4 text-lg text-gray-600">
				{dict.about.professionalTeam.list.map((item) => (
					<li key={item.title}>
						<strong>{item.title}:</strong> {item.description}
					</li>
				))}
			</ul>
			<p className="text-lg text-gray-600">
				{dict.about.professionalTeam.excellence}
			</p>
		</div>
	);
};

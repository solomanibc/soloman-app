import type { Dictionary } from "@/types/dictionnary.type";

export const OurApproachCard = ({ dict }: { dict: Dictionary }) => {
	return (
		<div className="mb-16">
			<h3 className="text-2xl font-bold mb-4">
				{dict.about.ourApproach.title}
			</h3>
			<ol className="list-decimal pl-6 space-y-4 text-lg text-gray-600">
				{dict.about.ourApproach.list.map(
					(item: { title: string; description: string }) => (
						<li key={item.title}>
							<h4 className="font-semibold">{item.title}</h4>
							<span>{item.description}</span>
						</li>
					),
				)}
			</ol>
		</div>
	);
};

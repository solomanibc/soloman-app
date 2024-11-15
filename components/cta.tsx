import { Button } from "@/components/ui/button";

export const CTA = () => {
	return (
		<div className="mt-20 text-center">
			<h3 className="text-2xl font-bold mb-6">
				Ready to Expand Your Business?
			</h3>
			<p className="text-lg text-gray-600 mb-8">
				Contact us for a detailed consultation tailored to your business Contact
				us for a detailed consultation tailored to your business needs
			</p>
			<Button size="lg" className="bg-blue-600 hover:bg-blue-700">
				Schedule Consultation
			</Button>
		</div>
	);
};

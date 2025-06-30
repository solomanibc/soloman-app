// components/YouTubePlayer.tsx
import type React from "react";

interface YouTubePlayerProps {
	videoId: string;
	title?: string;
	width?: number;
	height?: number;
	autoplay?: boolean;
	className?: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
	autoplay = false,
	className = "",
	title = "YouTube video player",
	videoId,
	width = 560,
}) => {
	const extractVideoId = (url: string): string => {
		const regExp =
			/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
		const match = url.match(regExp);
		return match && match[2].length === 11 ? match[2] : url;
	};

	const finalVideoId = extractVideoId(videoId);
	const embedUrl = `https://www.youtube.com/embed/${finalVideoId}${
		autoplay ? "?autoplay=1" : ""
	}`;

	return (
		<div className="flex justify-center items-center w-full">
			<div
				className={`relative w-full max-w-[${width}px] aspect-video ${className}`}
				style={{
					maxWidth: `${width}px`,
				}}
			>
				<iframe
					allowFullScreen
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					className="absolute top-0 left-0 w-full h-full"
					src={embedUrl}
					title={title}
				/>
			</div>
		</div>
	);
};

export default YouTubePlayer;

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
	videoId,
	title = "YouTube video player",
	width = 560,
	autoplay = false,
	className = "",
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
					className="absolute top-0 left-0 w-full h-full"
					src={embedUrl}
					title={title}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</div>
		</div>
	);
};

export default YouTubePlayer;

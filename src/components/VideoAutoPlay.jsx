import React from "react";

const VideoAutoPlay = ({ video }) => {
	return <video className="mx-auto w-3/4 shadow-xl mb-10 rounded-md" src={video} type="video/mp4" autoPlay muted loop playsInline />;
};

export default VideoAutoPlay;

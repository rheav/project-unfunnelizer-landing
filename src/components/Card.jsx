import React from "react";
import VideoAutoPlay from "./VideoAutoPlay";

const Card = ({ video, children }) => {
	return (
		<div className="w-full h-full my-0 mx-auto bg-gradient-to-b from-zinc-50 to-slate-50 rounded-xl z-1 border-solid border-[1px] border-gray-200 drop-shadow-sm transition-all duration-500 hover:-translate-y-3 hover:drop-shadow-xl hover:border-gray-300">
			<div className="flex items-center p-2">
				<div className="py-0 px-1">
					<span className="bg-[#ff605c] inline-block items-center w-3 h-3 p-1 rounded-lg"></span>
				</div>
				<div className="py-0 px-1">
					<span className="bg-[#ffbd44] inline-block items-center w-3 h-3 p-1 rounded-lg"></span>
				</div>
				<div className="py-0 px-1">
					<span className="bg-[#00ca4e] inline-block items-center w-3 h-3 p-1 rounded-lg"></span>
				</div>
			</div>
			<div className="">
				<VideoAutoPlay video={video} />
			</div>
			<div className=" pb-8 px-4 font-normal text-xl text-center">{children}</div>
		</div>
	);
};

export default Card;

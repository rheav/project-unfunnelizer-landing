import React from "react";
import Card from "../components/Card";
import SmartMode from "../img/smartModePop.mp4";
import CTAvideo from "../img/cta-video.mp4";
import CheckoutVideo from "../img/checkout-video.mp4";

const CardSection = ({ video, children }) => {
	return (
		<section className="bg-white dark:bg-gray-900 py-12">
			<div className="px-4 mx-auto max-w-screen-xl text-center lg:px-12">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
					<Card video={SmartMode}>{"Com 1 só clique você dispara o unFunnelizer."}</Card>
					<Card video={CTAvideo}> {"Esperar pelo 'pitch' para o CTA aparecer? Nunca mais!"}</Card>
					<Card video={CheckoutVideo}>{"E pronto! Você acessa fácil fácil o checkout."}</Card>
				</div>
			</div>
		</section>
	);
};

export default CardSection;

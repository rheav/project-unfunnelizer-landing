import React from "react";
import Logo from "../components/Logo";

const Footer = ({ customMargin }) => {
	return (
		<section className="bg-white dark:bg-gray-900">
			<footer className="w-full max-w-[85rem] py-14 px-4 sm:px-6 lg:px-8 mx-auto">
				<div className="text-center">
					<div>
						<a
							className="flex-none text-xl font-semibold text-black dark:text-white"
							href="#a"
							aria-label="Brand"
						>
							<Logo customMargin="mb-2" />
						</a>
					</div>

					<div className="mt-1">
						<p className="text-gray-500 dark:text-white font-light">© unFunnelizer, 2023. Todos os direitos reservados.</p>
					</div>
				</div>
			</footer>
		</section>
	);
};

export default Footer;

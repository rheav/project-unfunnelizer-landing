import React from "react";
import LogoSrc from "../img/unFunnelizer_wide_color_logo.png";

const Logo = ({ customMargin }) => {
	return (
		<img
			className={`h-auto w-60 max-w-xs mx-auto ${customMargin ? customMargin : "mb-10"}`}
			src={LogoSrc}
			alt="unFunnelizer logo"
		/>
	);
};

export default Logo;

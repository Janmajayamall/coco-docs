import React from "react";

export const Image = ({ src, caption }) => {
	return (
		<center width="100%">
			<figure>
				<img src={src} width="70%" />
				<figcaption style={{}}>{caption}</figcaption>
			</figure>
		</center>
	);
};

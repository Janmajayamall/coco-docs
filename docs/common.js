import React from "react";

export const Image = ({ src, caption }) => {
	return (
		<center width="100%">
			<figure>
				<img src={src} width="60%" />
				<figcaption>{caption}</figcaption>
			</figure>
		</center>
	);
};

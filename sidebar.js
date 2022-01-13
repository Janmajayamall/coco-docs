module.exports = {
	docs: [
		{
			type: "category",
			label: "Welcome",
			items: ["welcome/what-is-coco", "welcome/overview"],
		},
		{
			type: "category",
			label: "User guides",
			items: [
				"user-guides/getting-started",
				"user-guides/groups",
				{
					type: "category",
					label: "Posts",
					items: [
						"user-guides/posts/new-post",
						"user-guides/posts/predictions",
						"user-guides/posts/challenges",
						"user-guides/posts/resolution",
						"user-guides/posts/redeem",
					],
				},
			],
		},
		{
			type: "category",
			label: "More about COCO",
			items: [
				"more-about-coco/post-lifecycle",
				"more-about-coco/groups-predictions-curation",
				"more-about-coco/group-governing-body",
			],
		},
	],
};

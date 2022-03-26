const isSameRoute = (urlPathname: string, href: string) =>
	href === '/' ? href === urlPathname : urlPathname.startsWith(href)

export default isSameRoute

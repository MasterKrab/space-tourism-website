import destinations from '$lib/data/destinations.json'
import slugify from '$lib/utils/slugify'

/** @type {import('./[slug]').RequestHandler} */
export const get = async ({ params }) => {
	const { slug } = params

	if (!slug)
		return {
			body: destinations[0]
		}

	const destination = destinations.find(({ name }) => slugify(name) === slug.toLowerCase())

	if (!destination)
		return {
			status: 404
		}

	return {
		body: destination
	}
}

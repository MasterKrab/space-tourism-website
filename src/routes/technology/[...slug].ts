import technologies from '$lib/data/technology.json'
import slugify from '$lib/utils/slugify'

/** @type {import('./[slug]').RequestHandler} */
export const get = async ({ params }) => {
	const { slug } = params

	if (!slug)
		return {
			body: technologies[0]
		}

	const technology = technologies.find(({ name }) => slugify(name) === slug.toLowerCase())

	if (!technology)
		return {
			status: 404
		}

	return {
		body: technology
	}
}

import crews from '$lib/data/crew.json'
import slugify from '$lib/utils/slugify'

/** @type {import('./[slug]').RequestHandler} */
export const get = async ({ params }) => {
	const { slug } = params

	if (!slug)
		return {
			body: crews[0]
		}

	const crew = crews.find(({ name }) => slugify(name) === slug.toLowerCase())

	if (!crew)
		return {
			status: 404
		}

	return {
		body: crew
	}
}

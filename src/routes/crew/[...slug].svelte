<script lang="ts">
	import Metadata from '$lib/components/Metadata.svelte'
	import type { CrewImages } from '$lib/types/images'
	import { fade } from 'svelte/transition'
	import crewNames from '$lib/utils/crewNames'
	import slugify from '$lib/utils/slugify'

	export let name: string
	export let images: CrewImages
	export let role: string
	export let bio: string
</script>

<Metadata title="{name} | Meet your crew" description={bio} />

<p class="top-text"><span class="top-text__number">02</span> Meet your crew</p>

<div class="container">
	{#key images}
		<picture class="picture">
			<source srcset={images.webp} type="image/webp" />
			<img
				in:fade
				class="image"
				class:image--bottom={['Mark Shuttleworth', 'Anousheh Ansari'].includes(name)}
				src={images.png}
				alt={name}
			/>
		</picture>
	{/key}

	<ul in:fade class="list">
		{#each crewNames as crewName}
			<li>
				<a
					class="list__link"
					class:list__link--active={crewName === name}
					href="/crew/{slugify(crewName)}"
					aria-label={crewName}
					sveltekit:prefetch>{' '}</a
				>
			</li>
		{/each}
	</ul>

	{#key (role, name, bio)}
		<div class="info" in:fade>
			<p class="pretitle">{role}</p>
			<h1 class="title">{name}</h1>
			<p class="text">{bio}</p>
		</div>
	{/key}
</div>

<style lang="scss">
	.top-text {
		display: flex;
		gap: 1.125rem;
		margin-bottom: 2rem;
		text-transform: uppercase;
		letter-spacing: 0.169rem;
		color: var(--tertiary-color);

		@media screen and (min-width: 600px) {
			margin-right: auto;
			margin-bottom: 3.75rem;
			font-size: 1.25rem;
		}

		@media screen and (min-width: 1200px) {
			margin-top: 0;
			margin-bottom: 6.063rem;
			font-size: 1.75rem;
			grid-column: span 2;
		}

		&__number {
			color: var(--secondary-color);
		}
	}

	.picture {
		width: 100%;

		@media screen and (max-width: 600px) {
			border-bottom: 1px solid var(--quaternary-color);
		}
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;

		@media screen and (min-width: 600px) {
			flex-direction: column-reverse;
		}

		@media screen and (min-width: 1200px) {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-column: span 2;
			column-gap: 5.152rem;
		}
	}

	@media screen and (min-width: 1200px) {
		.picture {
			grid-column: 2 / 3;
			grid-row: span 2;
		}
	}

	.image {
		width: 177px;

		@media screen and (min-width: 600px) {
			position: relative;
			top: 2.5rem;
			width: 456px;
		}

		@media screen and (min-width: 1200px) {
			position: absolute;
			width: auto;
			min-height: 550px;
			height: calc(100vh - 37.5%);

			&--bottom {
				min-height: 610px;
			}
		}
	}

	.list {
		display: flex;
		gap: 1rem;
		padding: 2rem;

		@media screen and (min-width: 600px) {
			padding-bottom: 0;
		}

		@media screen and (min-width: 1200px) {
			margin-top: 7.5rem;
			margin-right: auto;
			padding-top: 0;
			padding-left: 0;
			grid-column: 1 / 2;
			grid-row: 2 / 3;
		}

		&__link {
			display: block;
			background-color: var(--quaternary-color);
			width: 0.625rem;
			height: 0.625rem;
			border-radius: 50%;
			transition: background-color 0.2s;

			@media screen and (min-width: 1200px) {
				width: 0.938rem;
				height: 0.938rem;
			}

			@media (hover: hover) {
				&:hover {
					background-color: var(--quinary-color);
				}
			}

			&--active {
				background-color: var(--tertiary-color);
			}
		}
	}

	.pretitle {
		font-family: var(--tertiary-font);
		margin-bottom: 0.375rem;
		text-transform: uppercase;
		color: var(--quaternary-color);

		@media screen and (min-width: 600px) {
			font-size: 1.5rem;
			margin-bottom: 0.5rem;
		}

		@media screen and (min-width: 1200px) {
			font-size: 2rem;
			margin-bottom: 0.938rem;
		}
	}

	.title {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		color: var(--tertiary-color);

		@media screen and (min-width: 600px) {
			font-size: 2.5rem;
		}

		@media screen and (min-width: 1200px) {
			font-size: 3.5rem;
		}
	}

	.text {
		font-size: 0.938rem;
		font-family: var(--primary-font);
		line-height: 1.563rem;
		margin-top: 0;

		@media screen and (min-width: 600px) {
			line-height: 1.75rem;
		}

		@media screen and (min-width: 1200px) {
			width: 444px;
			font-size: 1.125rem;
			line-height: 2rem;
			margin-bottom: 0;
		}
	}

	@media screen and (min-width: 1200px) {
		.info {
			grid-column: 1 / 2;
			grid-row: 1 / 2;
		}
	}
</style>

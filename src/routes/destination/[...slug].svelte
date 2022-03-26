<script lang="ts">
	import Metadata from '$lib/components/Metadata.svelte'
	import { fade, scale } from 'svelte/transition'
	import destinationsNames from '$lib/utils/destinationsNames'
	import slugify from '$lib/utils/slugify'

	export let name: string
	export let description: string
	export let distance: string
	export let travel: string
</script>

<Metadata title="{name} | Pick your destination" {description} />

<p in:fade class="top-text"><span class="top-text__number">01</span> Pick your destination</p>

{#key name}
	<picture>
		<source srcset="/assets/destination/image-{name}.webp" type="image/webp" />
		<img in:scale class="image" src="/assets/destination/image-{name}.png" alt={name} />
	</picture>
{/key}

<div>
	<ul in:fade class="list">
		{#key name}
			{#each destinationsNames as destinationName}
				<li class="list__item" class:list__item--active={destinationName === name}>
					<a class="list__link" href={`/destination/${slugify(destinationName)}`}
						>{destinationName}</a
					>
				</li>
			{/each}
		{/key}
	</ul>

	{#key [name, description]}
		<h1 in:fade class="title">{name}</h1>
		<p in:fade class="text">{description}</p>
	{/key}

	<div class="bottom">
		{#key distance}
			<section in:fade class="info">
				<h2 class="info__title">Avg. distance</h2>
				<p class="info__text">{distance}</p>
			</section>
		{/key}

		{#key travel}
			<section in:fade class="info">
				<h2 class="info__title">Est. travel time</h2>
				<p class="info__text">{travel}</p>
			</section>
		{/key}
	</div>
</div>

<style lang="scss">
	.top-text {
		display: flex;
		gap: 1.125rem;
		text-transform: uppercase;
		letter-spacing: 0.169rem;
		color: var(--tertiary-color);

		@media screen and (min-width: 600px) {
			margin-right: auto;
			margin-bottom: 3.75rem;
			font-size: 1.25rem;
		}

		@media screen and (min-width: 768px) {
			position: relative;
			left: -3.656rem;
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

	.image {
		width: 10.625rem;
		height: 10.625rem;

		@media screen and (min-width: 600px) {
			width: 18.75rem;
			height: 18.75rem;
		}

		@media screen and (min-width: 1200px) {
			width: 27.813rem;
			height: 27.813rem;
		}
	}

	.list {
		display: flex;
		justify-content: center;
		gap: 1.688rem;
		font-size: 0.875rem;
		margin-top: 1.625rem;
		margin-bottom: 1.625rem;
		text-transform: uppercase;

		@media screen and (min-width: 600px) {
			margin-top: 3.313rem;
			margin-bottom: 2rem;
		}

		@media screen and (min-width: 1200px) {
			justify-content: flex-start;
			margin-bottom: 2.313rem;
		}

		&__item {
			position: relative;
			color: var(--secondary-color);
			transition: color ease-in-out 0.2s;
			letter-spacing: 0.148rem;

			&::before {
				content: '';
				position: absolute;
				bottom: -0.5rem;
				left: 0;
				width: 100%;
				height: 3px;
				background-color: var(--quaternary-color);
				opacity: 0;
				transition: opacity ease-in-out 0.2s, background-color ease-in-out 0.2s;

				@media screen and (min-width: 600px) {
					bottom: -0.75rem;
				}
			}

			@media (hover: hover) {
				&:hover::before {
					opacity: 1;
				}
			}

			&--active {
				color: var(--tertiary-color);

				&::before {
					background-color: var(--tertiary-color);
					opacity: 1;
				}
			}
		}
	}

	.title {
		font-size: 3.5rem;
		color: var(--tertiary-color);

		@media screen and (min-width: 600px) {
			font-size: 5rem;
		}

		@media screen and (min-width: 1200px) {
			font-size: 6.25rem;
		}
	}

	.text {
		margin-top: 0.063rem;
		padding-bottom: 2rem;
		font-size: 0.938rem;
		font-family: var(--primary-font);
		line-height: 1.563rem;
		border-bottom: 1px solid var(--quaternary-color);

		@media screen and (min-width: 600px) {
			padding-bottom: 3.063rem;
			font-size: 1rem;
		}

		@media screen and (min-width: 1200px) {
			padding-bottom: 3.375rem;
			font-size: 1.125rem;
		}
	}

	.bottom {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin-top: 2rem;

		@media screen and (min-width: 600px) {
			flex-direction: row;
			justify-content: center;
			gap: 3.063rem;
			margin-top: 1.75rem;
		}

		@media screen and (min-width: 1200px) {
			justify-content: flex-start;
		}
	}

	.info {
		&__title {
			margin-bottom: 0.75rem;
			font-size: 0.875rem;
			font-family: var(--secondary-font);
			letter-spacing: 0.148rem;
		}

		&__text {
			margin-top: 0;
			margin-bottom: 0;
			font-size: 1.75rem;
			font-family: var(--tertiary-font);
			color: var(--tertiary-color);
			text-transform: uppercase;
		}
	}
</style>

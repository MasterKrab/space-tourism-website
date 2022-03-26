<script lang="ts">
	import Metadata from '$lib/components/Metadata.svelte'
	import type { TechnologyImages } from '$lib/types/images'
	import { fade } from 'svelte/transition'
	import technologiesNames from '$lib/utils/technologiesNames'
	import slugify from '$lib/utils/slugify'

	export let name: string
	export let images: TechnologyImages
	export let description: string
</script>

<Metadata title="{name} | Space launch 101" {description} />

<p in:fade class="top-text"><span class="top-text__number">03</span>Space launch 101</p>

{#key images}
	<picture class="picture">
		<source srcset={images.portrait} media="(min-width: 1200px)" />
		<img in:fade class="image" src={images.landscape} alt={name} />
	</picture>
{/key}

<ul class="list" in:fade>
	{#each technologiesNames as technologieNames, index}
		<li>
			<a
				class="list__link"
				class:list__link--active={technologieNames === name}
				href={`/technology/${slugify(technologieNames)}`}>{index + 1}</a
			>
		</li>
	{/each}
</ul>

<div class="info">
	{#key [name, description]}
		<p in:fade class="pretitle">The terminology…</p>
		<h1 in:fade class="title">{name}</h1>
		<p in:fade class="text">{description}</p>
	{/key}
</div>

<style lang="scss">
	.top-text {
		display: flex;
		gap: 1.125rem;
		text-transform: uppercase;
		letter-spacing: 0.169rem;
		color: var(--tertiary-color);
		margin-bottom: 2rem;

		@media screen and (min-width: 600px) {
			position: relative;
			margin-right: auto;
			font-size: 1.25rem;
			left: -5rem;
		}

		@media screen and (min-width: 768px) {
			left: -7.281rem;
		}

		@media screen and (min-width: 1200px) {
			position: static;
			margin-bottom: 1.625rem;
			font-size: 1.75rem;
			grid-column: span 3;
		}

		&__number {
			color: var(--secondary-color);
		}
	}

	@media screen and (min-width: 1200px) {
		.picture {
			grid-column: 3 / 4;
		}
	}

	.image {
		width: 100vw;

		@media screen and (min-width: 1200px) {
			position: relative;
			right: -3rem;
			width: auto;
		}
	}

	.list {
		display: flex;
		gap: 1rem;
		margin-top: 2.125rem;
		margin-bottom: 2.125rem;
		font-family: var(--tertiary-font);

		@media screen and (min-width: 1200px) {
			flex-direction: column;
			grid-row: 2 / 3;
			gap: 2rem;
		}

		&__link {
			display: grid;
			place-items: center;
			width: 2.5rem;
			height: 2.5rem;
			color: var(--tertiary-color);
			border: 1px solid var(--quaternary-color);
			border-radius: 50%;
			line-height: 5.1rem;
			transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
				border-color 0.2s ease-in-out;

			@media (hover: hover) {
				&:hover {
					border-color: var(--tertiary-color);
				}
			}

			@media screen and (min-width: 600px) {
				font-size: 1.5rem;
				width: 3.688rem;
				height: 3.688rem;
			}

			@media screen and (min-width: 1200px) {
				font-size: 2rem;
				width: 5rem;
				height: 5rem;
			}

			&--active {
				background-color: var(--tertiary-color);
				color: var(--primary-color);
				border-color: var(--tertiary-color);
			}
		}
	}

	@media screen and (min-width: 1200px) {
		.info {
			grid-row: 2 / 3;
		}
	}

	.pretitle {
		font-size: 0.875rem;
		letter-spacing: 0.148rem;
		text-transform: uppercase;
		margin-top: 0;
		margin-bottom: 0.563rem;

		@media screen and (min-width: 1200px) {
			margin-bottom: 0.688rem;
		}
	}

	.title {
		font-size: 1.5rem;
		color: var(--tertiary-color);

		@media screen and (min-width: 1200px) {
			font-size: 3.5rem;
		}
	}

	.text {
		font-size: 0.938rem;
		font-family: var(--primary-font);
		line-height: 1.563rem;
		margin-top: 1rem;

		@media screen and (min-width: 1200px) {
			font-size: 1.125rem;
			margin-top: 1.063rem;
		}
	}
</style>

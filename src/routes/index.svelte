<script lang="ts">
	import Metadata from '$lib/components/Metadata.svelte'
	import { fade, scale } from 'svelte/transition'
</script>

<Metadata
	title="Home"
	description="Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not
hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
/>

<div in:fade>
	<p class="pretitle">So, you want to travel to</p>
	<h1 class="title">Space</h1>

	<p class="text">
		Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not
		hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of
		this world experience!
	</p>
</div>

<a in:scale class="link" href="/destination/moon">Explore</a>

<style lang="scss">
	.pretitle {
		text-transform: uppercase;
		letter-spacing: 0.169rem;

		@media screen and (min-width: 600px) {
			font-size: 1.25rem;
			letter-spacing: 0.211rem;
		}

		@media screen and (min-width: 1200px) {
			font-size: 1.75rem;
			letter-spacing: 0.295rem;
			margin-top: 15.688rem;
		}
	}

	.title {
		font-size: 5rem;
		color: var(--tertiary-color);

		@media screen and (min-width: 600px) {
			font-size: 9.375rem;
		}
	}

	.text {
		font-family: var(--primary-font);
		font-size: 0.925rem;
		line-height: 2;

		@media screen and (min-width: 600px) {
			font-size: 1rem;
		}

		@media screen and (min-width: 1200px) {
			font-size: 1.125rem;
			max-width: 444px;
		}
	}

	.link {
		display: grid;
		place-items: center;
		background-color: var(--tertiary-color);
		width: 15.125rem;
		height: 15.125rem;
		margin-top: 5.063rem;
		font-size: 2rem;
		letter-spacing: 0.125rem;
		color: var(--primary-color);
		border-radius: 50%;
		text-transform: uppercase;

		@media (hover: hover) {
			transition: box-shadow 0.35s ease-in-out;

			&:hover {
				box-shadow: 0 0 0 6.125rem var(--quinary-color);
			}
		}

		@media screen and (min-width: 600px) {
			margin-top: 9.75rem;
		}

		@media screen and (min-width: 1200px) {
			margin-left: auto;
			margin-right: auto;
		}

		@media screen and (min-width: 1400px) {
			margin: auto 0 1rem auto;
		}
	}
</style>

<script lang="ts">
	import Menu from '$lib/components/Menu/Menu.svelte'
	import DynamicStyles from '$lib/components/DynamicStyles.svelte'
	import { page } from '$app/stores'
	import '$lib/styles/normalize.css'
	import '@fontsource/bellefair'
	import '@fontsource/barlow/500.css'
	import '@fontsource/barlow/600.css'
	import '@fontsource/barlow/700.css'
	import '@fontsource/barlow-condensed'
	import '$lib/styles/globals.scss'

	let firstRoute: string

	$: firstRoute = $page.routeId ? $page.routeId.split('/')[0] : 'home'

	const getBackgroundImageUrl = (size: string) =>
		`url(/assets/${firstRoute}/background-${firstRoute}-${size}.jpg)`
</script>

<header class="header">
	<a class="link" href="/">
		<img src="/assets/shared/logo.svg" alt="Logo" />
	</a>
	<Menu />
</header>

<main class={$page && $page.routeId ? `main main--${firstRoute}` : 'main'}>
	<slot />
</main>

{#key $page.routeId}
	<DynamicStyles
		css={`
		:root{
			--background-image-mobile: ${getBackgroundImageUrl('mobile')};
			--background-image-tablet: ${getBackgroundImageUrl('tablet')};
			--background-image-desktop: ${getBackgroundImageUrl('desktop')};
		}
	`}
	/>
{/key}

<style lang="scss">
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		@media screen and (min-width: 600px) {
			padding-top: 2.5rem;
		}
	}

	@media (hover: hover) {
		.link {
			transition: transform 0.2s ease-in-out;

			&:hover {
				transform: scale(0.9);
			}
		}
	}

	.main {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 327px;
		margin-left: auto;
		margin-right: auto;
		text-align: center;

		@media screen and (min-width: 600px) {
			max-width: 450px;
			margin-top: 2.5rem;

			&--destination {
				max-width: 575px;
			}
		}

		@media screen and (min-width: 1200px) {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			max-width: 1110px;
			text-align: start;

			&--destination,
			&--crew {
				margin-top: 4.75rem;
			}

			&--destination {
				max-width: 1047px;
				column-gap: 9.813rem;
			}

			&--crew {
				max-width: 1138px;
			}

			&--technology {
				grid-template-columns: 5rem 470px 1fr;
				column-gap: 5rem;
			}
		}
	}
</style>

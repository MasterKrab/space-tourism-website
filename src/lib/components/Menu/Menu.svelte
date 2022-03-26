<script lang="ts">
	import { page } from '$app/stores'
	import routes from './routes'
	import isSameRoute from '$lib/utils/isSameRoute'

	let open = false
	let menu: HTMLElement
	let button: HTMLButtonElement

	const handleToggle = () => (open = !open)

	const handleClose = (e: Event) => {
		const target = e.target as HTMLElement

		if (menu.contains(target) || button.contains(target)) return

		open = false
	}

	$: if ($page.url.pathname) open = false
</script>

<svelte:window on:click={open ? handleClose : undefined} />

<button
	class="button"
	class:button--close={open}
	bind:this={button}
	on:click={handleToggle}
	type="button"
	role="switch"
	aria-checked={open}
>
	<img src="/assets/shared/icon-{open ? 'close' : 'hamburger'}.svg" alt="Menu" />
</button>

<nav bind:this={menu} class="navigation" class:navigation--active={open}>
	<ul class="menu">
		{#each routes as { name, href }, index}
			<li class="menu__item" class:menu__item--active={isSameRoute($page.url.pathname, href)}>
				<a {href}><span class="menu__index">{index < 9 ? `0${index}` : index}</span> {name}</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	.button {
		z-index: 100;

		@media (hover: hover) {
			transition: transform 0.2s ease-in-out;

			&:hover {
				transform: scale(1.15);
			}
		}

		@media screen and (min-width: 600px) {
			display: none;
		}

		&--close {
			position: fixed;
			top: 2.188rem;
			right: 1.5rem;
		}
	}

	.navigation {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 10;
		background-color: var(--primary-color);
		padding: 2.438rem 3rem 2.5rem;
		height: 6rem;
		font-family: var(--secondary-font);

		@media screen and (max-width: 600px), (min-width: 1200px) {
			background-color: rgba(150, 150, 150, 0.1);
			backdrop-filter: blur(30px);
		}

		@media screen and (max-width: 600px) {
			position: fixed;
			padding: 7.375rem 2rem;
			width: 74%;
			min-width: 254px;
			height: 100%;
			font-family: var(--primary-font);
			transform: translateX(100%);
			opacity: 0;
			transition: transform 0.75s, opacity 0.75s;

			&--active {
				transform: translateX(0);
				opacity: 1;
			}
		}

		@media screen and (min-width: 1200px) {
			top: 2.5rem;
			width: 57.6%;

			&::before {
				content: '';
				position: absolute;
				top: 50%;
				left: 0;
				background-color: var(--quaternary-color);
				height: 2px;
				width: 32.8vw;
				transform: translate(-95%, -50%);
			}
		}
	}

	.menu {
		display: flex;
		flex-direction: column;
		gap: 3.188rem;
		font-family: var(--secondary-font);
		letter-spacing: 0.169rem;
		text-transform: uppercase;
		color: var(--tertiary-color);

		@media screen and (min-width: 600px) {
			flex-direction: row;
			justify-content: space-evenly;
			gap: 2.313rem;

			&__item {
				position: relative;

				&::before {
					content: '';
					position: absolute;
					bottom: -2.25rem;
					left: 0;
					background-color: var(--tertiary-color);
					height: 2px;
					width: 100%;
					transform: translateY(-50%) scaleX(0);
					transition: transform ease-in-out 0.275s;
				}

				@media (hover: hover) {
					&:hover::before {
						transform: translateY(-50%) scaleX(1);
						background-color: var(--quaternary-color);
					}
				}

				&--active::before {
					transform: translateY(-50%) scaleX(1);
				}
			}
		}

		@media screen and (min-width: 1200px) {
			justify-content: flex-start;
			gap: 2rem;
			padding-left: 3rem;

			&__item::before {
				left: 0.1rem;
			}
		}

		@media screen and (min-width: 1400px) {
			gap: 3rem;
			padding-left: 7.688rem;
		}

		&__index {
			font-weight: bold;
			margin-right: 0.65rem;

			@media screen and (min-width: 600px) and (max-width: 1200px) {
				position: absolute;
				top: -99999px;
				left: -99999px;
			}
		}
	}
</style>

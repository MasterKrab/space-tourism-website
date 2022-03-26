<script lang="ts">
	import { page } from '$app/stores'

	export let title: string | null = null
	export let description: string | null = null
	export let url: string | null = $page.url.href
</script>

<svelte:head>
	{#if title}
		<title>{title}</title>
		<meta name="twitter:title" content={title} />
		<meta property="og:title" content={title} />
	{/if}

	{#if description}
		<meta name="description" content={description} />
		<meta name="twitter:description" content={description} />
		<meta property="og:description" content={description} />
	{/if}

	<meta name="twitter:card" content="summary" />
	<meta property="og:type" content="website" />

	{#if url}
		<meta name="twitter:url" content={url} />
		<meta property="og:url" content={url} />
	{/if}
</svelte:head>

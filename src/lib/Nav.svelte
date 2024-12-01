<script lang="ts">
	import { location } from './router.svelte';
	import Button from './ui/button.svelte';
	import Icon from './ui/icon.svelte';
	type NavProps = {
		pages: { url: string; icon: string }[];
	};
	let { pages }: NavProps = $props();
</script>

<nav class="absolute left-1/2 top-0 -translate-x-1/2">
	<ul class="flex items-center gap-2">
		{#each pages as page}
			<li>
				<Button
					variant="ghost"
					class="size-8 p-2 after:absolute after:-bottom-0.5 after:hidden after:size-1 after:rounded-full after:bg-svelte aria-selected:after:block"
					href={page.url}
					aria-selected={page.url === location.url.pathname}><Icon icon={page.icon} /></Button
				>
			</li>
		{/each}
	</ul>
</nav>

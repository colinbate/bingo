<script lang="ts">
	import Ball from './Ball.svelte';
	let { list }: { list: string[] } = $props();
	// flex w-full flex-row flex-wrap-reverse items-start justify-start pb-4
</script>

<div class="grid w-full grid-cols-[repeat(auto-fill,_minmax(min(9vmin,_100%),_1fr))] gap-3">
	{#each list as ball (ball)}
		<div class="size-[9vmin]"><Ball label={ball} /></div>
	{/each}
</div>

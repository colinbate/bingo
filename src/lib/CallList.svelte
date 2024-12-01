<script lang="ts">
	import { toBingoLabel, RandomNumberPool } from './bingo';
	import Ball from './Ball.svelte';
	import Called from './Called.svelte';
	import Button from './ui/button.svelte';
	import Icon from './ui/icon.svelte';

	let list: string[] = $state([]);
	let lastCalled = $state('');
	let remaining = $state(75);

	const pool = new RandomNumberPool(75);

	function pickNumber() {
		lastCalled = toBingoLabel(pool.pick());
		list.unshift(lastCalled);
		remaining = pool.remaining;
	}

	function reload() {
		pool.reset();
		lastCalled = '';
		list = [];
		remaining = pool.remaining;
	}
</script>

<Button class="absolute left-0 top-0 size-8 p-2" variant="ghost" onclick={reload}>
	<Icon icon="reload" />
</Button>
<section
	class="flex h-[100dvh] flex-col items-center gap-6 p-4 pt-12 landscape:flex-row landscape:items-start"
>
	<div class="flex flex-col items-center gap-[5vmin]">
		<div class="size-[60vmin] flex-shrink-0 flex-grow-0 basis-auto landscape:size-[40vmin]">
			{#if lastCalled}<Ball label={lastCalled} />{/if}
		</div>
		<Button type="button" size="lg" disabled={!remaining} onclick={pickNumber}>Draw Number</Button>
	</div>
	<div class="h-full w-full overflow-y-auto">
		<Called {list} />
	</div>
</section>

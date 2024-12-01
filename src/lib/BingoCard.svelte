<script lang="ts">
	import { RandomNumberPool } from './bingo';
	import Button from './ui/button.svelte';
	import Icon from './ui/icon.svelte';
	type BingoCell = { value: number; dabbed: boolean };
	let bingoData: BingoCell[][] = $state([]);
	function getRandomBingoData() {
		const pools = [
			new RandomNumberPool(15, 1),
			new RandomNumberPool(30, 16),
			new RandomNumberPool(45, 31),
			new RandomNumberPool(60, 46),
			new RandomNumberPool(75, 61)
		];
		const data: BingoCell[][] = [];
		for (let row = 0; row < 5; row += 1) {
			data[row] = [];
			for (let col = 0; col < 5; col += 1) {
				data[row][col] = { value: pools[col].pick() ?? 0, dabbed: false };
			}
		}
		data[2][2] = { value: 0, dabbed: false };
		return data;
	}

	function reload() {
		bingoData = getRandomBingoData();
	}

	$effect(reload);
</script>

<Button class="absolute left-0 top-0 size-8 p-2" variant="ghost" onclick={reload}>
	<Icon icon="reload" />
</Button>
<div class="size-[90vmin] shadow-lg">
	<table class="box-border size-full border-collapse">
		<thead>
			<tr>
				<th class="w-1/5 border-[0.5vmin] border-gray-700 text-[8.5vmin] dark:border-gray-300">B</th
				>
				<th class="w-1/5 border-[0.5vmin] border-gray-700 text-[8.5vmin] dark:border-gray-300">I</th
				>
				<th class="w-1/5 border-[0.5vmin] border-gray-700 text-[8.5vmin] dark:border-gray-300">N</th
				>
				<th class="w-1/5 border-[0.5vmin] border-gray-700 text-[8.5vmin] dark:border-gray-300">G</th
				>
				<th class="w-1/5 border-[0.5vmin] border-gray-700 text-[8.5vmin] dark:border-gray-300">O</th
				>
			</tr>
		</thead>
		<tbody>
			{#each bingoData as row, r}
				<tr>
					{#each row as cell}
						<td
							class="relative w-1/5 border-[0.5vmin] border-gray-700 text-center text-[8.5vmin] dark:border-gray-300"
							class:free={!cell.value}
							class:dabbed={cell.dabbed}
							onclick={() => (cell.dabbed = !cell.dabbed)}>{cell.value ? cell.value : 'FREE'}</td
						>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.free {
		font-size: 6.4vmin;
	}

	.dabbed::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: hsla(15, 100%, 50%, 0.7);
		width: 13vmin;
		height: 13vmin;
		border-radius: 100vmin;
	}
</style>

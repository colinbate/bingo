<script>
	import Icon from './ui/icon.svelte';
</script>

<main class="mx-auto max-w-xl p-4 pt-8">
	<article class="flex flex-col gap-6 text-lg">
		<h1 class="text-6xl font-thin uppercase leading-normal text-svelte">American Bingo</h1>

		<p>
			Welcome to my simple bingo tools. These tools are designed to support a game of bingo taking
			place either in person or virtually over some additional channel, like a video, audio or text
			chat. This is for American style Bingo, not the British style.
		</p>

		<div>
			<div class="flex items-center gap-2">
				<Icon icon="card" /><a href="/card" class="text-blue-500 hover:underline"
					>Generate a Bingo Card</a
				>
			</div>
			<p>Get everyone playing to visit this link to get their own card.</p>
		</div>
		<div>
			<div class="flex items-center gap-2">
				<Icon icon="balls" /><a href="/call-list" class="text-blue-500 hover:underline"
					>Draw Numbers</a
				>
			</div>
			<p>The person calling out the numbers can go here to get a set of numbers.</p>
		</div>
	</article>
</main>

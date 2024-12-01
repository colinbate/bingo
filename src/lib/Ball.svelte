<script lang="ts">
	let { label }: { label: string } = $props();
</script>

<div class="flex h-full items-center justify-center">
	<div
		class="flex size-full items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_25%,_var(--tw-gradient-stops))] from-white to-gray-300 shadow-lg dark:from-gray-600 dark:to-black dark:shadow-black/40"
	>
		<svg class="w-[70%]" viewBox="0 0 36 18"
			><text
				x="50%"
				y="50%"
				class="fill-black font-black dark:fill-white"
				dominant-baseline="central"
				text-anchor="middle">{label}</text
			></svg
		>
	</div>
</div>

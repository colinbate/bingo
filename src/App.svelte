<script lang="ts">
	import ModeSwitcher from '$lib/ModeSwitcher.svelte';
	import Welcome from '$lib/Welcome.svelte';
	import Card from '$lib/Card.svelte';
	import CallList from '$lib/CallList.svelte';
	import { makeRouter } from '$lib/router.svelte';
	import Nav from '$lib/Nav.svelte';
	import type { Component } from 'svelte';

	const pages = [
		{ url: '/', component: Welcome, icon: 'house' },
		{ url: '/card', component: Card, icon: 'card' },
		{ url: '/call-list', component: CallList, icon: 'balls' }
	];
	const routes = pages.reduce(
		(p, c) => ({ ...p, [c.url]: c.component }),
		{} as Record<string, Component>
	);
	const router = makeRouter(routes);
</script>

<ModeSwitcher />
<Nav {pages} />
<router.active />

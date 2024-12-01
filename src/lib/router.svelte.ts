import type { Component } from 'svelte';

let href = $state(window.location.href);

const originalPushState = history.pushState;
const originalReplaceState = history.replaceState;

const updateHref = () => (href = window.location.href);

history.pushState = function (...args) {
	originalPushState.apply(this, args);
	updateHref();
};

history.replaceState = function (...args) {
	originalReplaceState.apply(this, args);
	updateHref();
};

window.addEventListener('popstate', updateHref);
window.addEventListener('hashchange', updateHref);
const _url = $derived(new URL(href));
export const location = {
	get url() {
		return _url;
	}
};

export function makeRouter(routes: Record<string, Component>) {
	const _active = $derived(routes[_url.pathname]);
	return {
		get active() {
			return _active;
		}
	};
}

import Welcome from './Welcome.svelte';
import Card from './Card.svelte';
import CallList from './CallList.svelte';
import BasicLayout from './BasicLayout.svelte';

export const routes = [
  {
    name: '/',
    layout: BasicLayout,
    component: Welcome,
  },
  {
    name: 'card',
    component: Card,
    layout: BasicLayout,
  },
  {
    name: 'call-list',
    layout: BasicLayout,
    component: CallList,
  }
];

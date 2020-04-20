<script>
import page from 'page';

import Welcome from './Welcome.svelte';
import Card from './Card.svelte';
import CallList from './CallList.svelte';

let route;
let routeParams;

function useRoute(r) {
  return function({params}) {
    route = r;
    routeParams = params;
  }
}

page('/', useRoute(Welcome));
page('/card', useRoute(Card));
page('/call-list', useRoute(CallList));
page();
</script>
<style>
main {
  height: 100%;
}
</style>
<main>
  <svelte:component this={route} bind:params={routeParams} />
</main>

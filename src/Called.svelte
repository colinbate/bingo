<script>
import Ball from './Ball.svelte';
export let list;
</script>
<style>
.called-list {
  display: flex;
  flex-wrap: wrap-reverse;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding-bottom: 1rem;
}
.ball {
  width: 10vmin;
  height: 10vmin;
  margin: 1.1vmin;
}
</style>
<div class="called-list">
  {#each list as ball}
    <div class="ball"><Ball label={ball} /></div>
  {/each}
</div>
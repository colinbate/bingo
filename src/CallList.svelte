<script>
import { toBingoLabel, RandomNumberPool } from './bingo';
import Ball from './Ball.svelte';
import Called from './Called.svelte';

let list = [];
let lastCalled = '';
let remaining = 75;

const pool = new RandomNumberPool(75);

function pickNumber() {
  lastCalled = toBingoLabel(pool.pick());
  list = [...list, lastCalled];
  remaining = pool.remaining;
}
</script>
<style>
section {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}
.mainball {
  width: 60vmin;
  height: 60vmin;
  margin: 10vmin 0;
}
button {
  border-radius: 3vmin;
  font-size: 9vmin;
  margin-bottom: 10vmin;
  border: 0;
  background-color: hsla(15, 100%, 50%, 1);
  color: #fff;
  padding: 5vmin 7vmin;
  box-shadow: 0 0.4rem 0.75rem rgba(0, 0, 0, 0.25), 0 0.15rem 0.25rem rgba(0, 0, 0, 0.15);
  position: relative;
}
button:not(:disabled):active {
  background-color: hsla(15, 100%, 40%, 1);
  box-shadow: none;
  top: 0.15rem;
}
</style>
<section>
<div class="mainball">
  {#if lastCalled}<Ball label={lastCalled} />{/if}
</div>
{#if remaining}<button type="button" on:click={pickNumber}>Pick Number</button>{/if}
<Called {list} />
</section>
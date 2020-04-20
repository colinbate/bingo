<script>
import { onMount } from 'svelte';
import { RandomNumberPool } from './bingo'

let bingoData = [];
let clickData = [];
function setRandomBingoData() {
  const pools = [
    new RandomNumberPool(15, 1),
    new RandomNumberPool(30, 16),
    new RandomNumberPool(45, 31),
    new RandomNumberPool(60, 46),
    new RandomNumberPool(75, 61),
  ];
  const data = [];
  const cdata = [];
  for (let row = 0; row < 5; row += 1) {
    data[row] = [];
    cdata[row] = [];
    for (let col = 0; col < 5; col += 1) {
      data[row][col] = pools[col].pick();
      cdata[row][col] = false;
    }
  }
  data[2][2] = 0;
  bingoData = data;
  clickData = cdata;
}

onMount(() => {
  setRandomBingoData();
});

function clickCell(ev) {
  const id = ev.target.id;
  const [r, c] = id.split(',');
  clickData[r][c] = !clickData[r][c];
}
</script>
<style>
table {
  border-collapse: collapse;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
th, td {
  font-size: 8.5vmin;
  border: 0.5vmin solid #444;
  width: 20%;
}
.free {
  font-size: 6.4vmin;
}
td {
  text-align: center;
  position: relative;
}
.card {
  width: 90vmin;
  height: 90vmin;
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.35), 0 0.25rem 0.33rem rgba(0, 0, 0, 0.25);
}

.dabbed::after {
  content: "";
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
<div class="card"><table>
  <thead>
  <tr>
    <th>B</th>
    <th>I</th>
    <th>N</th>
    <th>G</th>
    <th>O</th>
  </tr>
  </thead>
  <tbody>
    {#each bingoData as row, r}
      <tr>
      {#each row as col, c}
        <td class:free={!col} class:dabbed={clickData[r][c]} on:click={clickCell} id={`${r},${c}`}>{col ? col : 'FREE'}</td>
      {/each}
      </tr>
    {/each}
  </tbody>
</table></div>
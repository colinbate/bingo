<script>
export let label;
</script>
<style>
.ball {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  background: radial-gradient(circle at 50% 25%, rgba(255,255,255,1) 0%, rgba(186,186,186,1) 100%);
  box-shadow: 0 0.4rem 0.75rem rgba(0, 0, 0, 0.25), 0 0.15rem 0.25rem rgba(0, 0, 0, 0.15);
}
.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

svg {
  width: 70%;
}
text {
  font-weight: bold;
}
</style>

<div class="wrap">
<div class="ball">
<svg viewBox="0 0 36 18"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle">{label}</text></svg>
</div>
</div>
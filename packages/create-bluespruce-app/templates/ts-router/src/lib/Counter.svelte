<script>
  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment} class="rounded-full bg-blue-700 hover:bg-blue-500 px-5 py-2">
  Clicks: {count}
</button>

<style>
</style>

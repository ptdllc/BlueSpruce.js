<script>
  import "./app.css"
  import logo from "./assets/bluesprucejs.png"
import Counter from "./lib/Counter.svelte"
</script>

<main>
  <nav class="bg-white px-2 sm:px-4 py-2.5">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="https://ptdllc.github.io" class="flex items-center" target="_blank">
        <h1 class="text-xl font-bold">BlueSpruce.js</h1>
      </a>
      <div class="flex items-center">
        <a href="https://github.com/ptdllc/BlueSpruce.js">GitHub</a>
      </div>
    </div>
  </nav>
  <div class="flex justify-center items-center">
    <img src="{logo}" alt="BlueSpruce.js" class="w-1/5 py-12">
  </div>
  <div class="flex justify-center items-center">
    <Counter />
  </div>
</main>

<style></style>

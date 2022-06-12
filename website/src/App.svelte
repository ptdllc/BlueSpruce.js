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
    <img src="{logo}" alt="BlueSpruce.js" class="w-24 py-12">
  </div>
  <div class="flex justify-center items-center">
    <Counter />
  </div>
  <p class="text-center px-5 mt-5">
    BlueSpruce.js is a free and open-source tool for creating better Svelte apps,
    <br>
    designed for GitHub Pages, and built using <code>Vite, Svelte, TailwindCSS, and Flowbite</code>
    <br><br>
    BlueSpruce.js is directly inspired by Redwood.js and will be adding some more features soon.<br>
    Until then, check us out on <a href="https://github.com/ptdllc/BlueSpruce.js" class="text-blue-500 hover:text-blue-400">GitHub</a>
  </p>
</main>

<style></style>

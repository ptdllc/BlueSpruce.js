<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/index.svelte";
  import About from "./routes/about.svelte"
  import Blog from "./routes/blog.svelte"
  import logo from "./assets/bluesprucejs.png"
  export let url = "";
  import "./app.css"
</script>

<Router url="{url}">
  <nav class="bg-white px-2 sm:px-4 py-2.5">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <div class="flex gap-3 items-center">
        <Link to="/">
          <span class="flex gap-2 items-center">
            <img src="{logo}" alt="Logo" class="w-10"><h1 class="text-xl font-bold">BlueSpruce.js</h1>
          </span>
        </Link>
        <Link to="/about">
          <h1 class="text-md">About</h1>
        </Link>
        <Link to="/blog">
          <h1 class="text-md">Blog</h1>
        </Link>
      </div>
      <div class="flex items-center">
        <a href="https://github.com/ptdllc/BlueSpruce.js">GitHub</a>
      </div>
    </div>
  </nav>
  <div>
    <Route path="/"><Home /></Route>
    <Route path="/about"><About /></Route>
    <Route path="/blog/*"><Blog /></Route>
  </div>
</Router>
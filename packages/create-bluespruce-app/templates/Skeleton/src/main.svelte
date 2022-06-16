<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/index.svelte";
  export let url = "";
  import "./app.css"
</script>

<Router url="{url}">
  <div>
    <Route path="/"><Home /></Route>
  </div>
</Router>
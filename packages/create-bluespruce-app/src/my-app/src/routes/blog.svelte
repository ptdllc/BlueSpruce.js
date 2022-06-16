<script>
    import { Router, Link, Route } from "svelte-routing";
    import TemplatePost from "./blog/TemplatePost.svelte";
    import SecondPost from "./blog/SecondPost.svelte";
</script>

<Router>
    <div class="px-5">
        <h1 class="text-3xl">Template Blog</h1>
        <ul class="list-disc ml-5 py-2">
            <li class="text-blue-500 hover:text-blue-600">
                <Link to="template">Read the first template post!</Link>
            </li>
            <li class="text-blue-500 hover:text-blue-600">
                <Link to="template2">Read the second template post!</Link>
            </li>
        </ul>
        <Route path="template"><TemplatePost /></Route>
        <Route path="template2"><SecondPost /></Route>
    </div>
</Router>
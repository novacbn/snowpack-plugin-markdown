<script>
    import {FRONTMATTER, HTML} from "@content/README.md";

</script>

<style>
    :global(pre) {
        padding: 0;
    }
    
    :global(blockquote > p:last-child) {
        margin-bottom: 0;
    }

    .card {
        padding: 0;
    }

    .card > pre {
        padding: 1rem;
    }
</style>

{@html HTML}

<h2>Parsed Frontmatter</h2>

<blockquote><b>NOTE:</b> Below Frontmatter was parsed from this README document</blockquote>

<div class="card">
    <pre><code>{JSON.stringify(FRONTMATTER, null, 4)}</code></pre>
</div>
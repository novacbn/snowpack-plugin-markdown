<script context="module">
    const LINKS = [
        {href: "#/", text: "README"},

        {
            href: "https://github.com/novacbn/snowpack-plugin-markdown",
            text: "GitHub",
            target: "_blank",
            rel: "noopener",
        }
    ];

    function is_active(href) {
        return href.startsWith("#");
    }
</script>

<style>
    nav {
        display: inline-flex;
    }
</style>

<main class="container">
    <center>
        <h1><code>snowpack-plugin-markdown</code></h1>

        <nav class="tabs">
            {#each LINKS as link (link.href)}
                <a
                    class:active={is_active(link.href)}
                    href={link.href}
                    target={link.target}
                    rel={link.rel}>{link.text}</a>
            {/each}
        </nav>
    </center>

    <slot />
</main>

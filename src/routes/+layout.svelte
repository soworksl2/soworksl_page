<svelte:head>
    <link rel="stylesheet" href="/public/css/reset.css">
    <link rel="stylesheet" href="/public/css/global.css">
</svelte:head>

<div class="body-delegater">
    <slot></slot>
</div>


<style>
    .body-delegater {
        display: flex;
        flex-direction: column;

        min-height: 100vh;

        background-color: var(--bg-color);
        color: var(--fg-color);
        font-size: var(--normal-fs);
    }
</style>

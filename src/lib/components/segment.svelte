<script>
    export let classNames = '';
    export let title = '';
    export let isFixedCenter = true;


    let actualClasses = classNames;
    if (isFixedCenter){
        actualClasses += ' fixed-center';
    }

    let possibleId = (title)? `segment-${title}` : undefined;
</script>


<section id={possibleId} class={actualClasses}>
    {#if title !== ''}
    <h2>{title}</h2>
    {/if}
    <slot></slot>
</section>


<style>
    .fixed-center {
        margin-left: auto;
        margin-right: auto;

        padding-left: 15px;
        padding-right: 15px;

        max-width: 950px;
        width: 100%;
    }

    section {
        margin-bottom: calc(var(--extra-big-fs)*7);
    }

    h2 {
        margin-bottom: 1ex;
        font-size: var(--big-fs);
        text-align: center;
    }
</style>

<script>
    import {onMount} from 'svelte';

    
    export let inDelay = 0;
    export let outDelay = 0;


    let isVisible = false;

    onMount(() => {
           
    });
</script>


{#if isVisible}
<slot></slot>
{/if}

<script>
export let OnClick = undefined;


function BuildBtnClickFunction(clickCtx){
    if(!clickCtx){
        return undefined;
    }

    let clickCtxType = typeof clickCtx;

    if(clickCtxType === 'function'){
        return clickCtx;
    }

    return () => {
        window.open(clickCtx.href, clickCtx.target);
    }
}


$: BtnClick = BuildBtnClickFunction(OnClick);
</script>


<button on:click|preventDefault={BtnClick}>
    <slot></slot>
</button>

<style>
    button {
        padding: 0.65ex 1.25ch;

        font-size: var(--normal-fs);

        background-color: var(--complementary-color-low);

        border: none;
        border-radius: var(--normal-border-radius);
    }

    button:hover {
        background-color: var(--complementary-color);
        cursor: pointer;
    }
</style>

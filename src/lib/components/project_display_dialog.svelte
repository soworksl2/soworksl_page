<script>
    import NormalBtn from '$lib/components/normal_btn.svelte';
    import ComplementaryCont from '$lib/components/complementary_cont.svelte';


    export let techs;


    export function Show(project){
        if (!project){
            throw new Error('the Show method need a project o show');
        }


        projectRender = project;
        techsRender = techs.filter(t => project.techs.includes(t.id));
        dialogEl.showModal();
    }


    function Hide(){
        dialogEl.close();
    }


    let dialogEl;

    let projectRender;
    let techsRender;

</script>


<dialog bind:this={dialogEl}>
    {#if projectRender}
    <img on:click={Hide} class="project-dialog__close" src="public/imgs/icons/close.png" alt="close icon" autofocus/>
    <h2 class="project-dialog__project-name">{projectRender.showName}</h2>
    <img
        class="project-dialog__project-splash"
        src={projectRender.imgUri}
        alt={`${projectRender.showName} image`}/>

    <span class="section-label">Technologies used:</span>
    <div class="project-dialog__technologies">
        {#each techsRender as tech}
        <div class="project-dialog__tech">
            <img src="{tech.imgUri}" alt={`${tech.showName} logo`}/>
            <span>{tech.showName}<span>
        </div>
        {/each}
    </div>

    <p class="project-dialog__project-description">{projectRender.description || ""}</p>
    <div class="project-dialog__dialog-btns">
        {#if projectRender.projectUri}
        <NormalBtn OnClick={{href: projectRender.projectUri, target: "_blank"}}>
            <img class="logo-btn" src="public/imgs/icons/external_link.png" alt="external link logo"/>
            Go to project
        </NormalBtn>
        {/if}

        {#if projectRender.srcUri}
        <NormalBtn OnClick={{href: projectRender.srcUri, target: "_blank"}}>
            <img class="logo-btn" src="public/imgs/icons/git_branch.png" alt="control version branch logo"/>
            Go to source
        </NormalBtn>
        {/if}
    </div>
    {/if}
</dialog>


<style>
    dialog {
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);

        width: calc(100% - 25px);
        max-width: 950px;

        max-height: calc(100% - 50px);
        
        border: solid 2.5px var(--gay-pink-color);
        border-radius: var(--normal-border-radius);
        background-color: var(--gay-pink-color-low);
    }

    dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.60);
    }

    .project-dialog__close {
        display: block;

        height: var(--big-fs);
        aspect-ratio: 1/1;

        margin: 0px auto;
        margin-top: 5px;
    }


    .project-dialog__close:hover {
        cursor: pointer;
    }

    .project-dialog__project-name {
        font-size: var(--semi-big-fs);
        font-weight: bold;
        text-align: center;

        margin: 10px 0px;
    }

    .project-dialog__project-splash {
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: contain;
    }

    .section-label {
        display: block;

        text-align: center;
        font-weight: bold;
    }

    .project-dialog__technologies {
        display: flex;
        justify-content: center;
        column-gap: 2px;
        row-gap: 5px;
        flex-wrap: wrap;

        margin-top: 10px;
    }

    .project-dialog__tech {
        width: calc(var(--big-fs) * 3);
    }

    .project-dialog__tech img {
        display: block;
        height: var(--big-fs);
        aspect-ratio: 1/1;

        object-fit: contain;

        margin: 0px auto;
    }

    .project-dialog__tech span {
        text-align: center;
        display: block;
    }

    .project-dialog__project-description {
        margin: 20px;

        font-size: var(--normal-fs);
    }

    .project-dialog__dialog-btns {
        margin: 30px 10px;
        margin-top: 50px;

        display: flex;
        justify-content: center;
        column-gap: 15px;
    }

    .logo-btn {
        display: block;
        height: var(--normal-fs);
        aspect-ratio: 1/1;

        margin-left: auto;
        margin-right: auto;
    }
</style>

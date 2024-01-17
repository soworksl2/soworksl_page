<script>
    import {onMount} from 'svelte';
    import {scale} from 'svelte/transition';


    export let project;
    export let techs;
    export let onUnmountFn;
    export let index = 0;

    function GetTechRenders(projectTechs, allTechs){
        let output = [];

        let currentTech;
        for(let i = 0; i < allTechs.length; i++){
            currentTech = allTechs[i];
            if (projectTechs.includes(currentTech.id)){
                output.push(currentTech);
            }
        }

        return output;
    }

    function CreateTechIndexStyle(index){
        return `--tech-index: ${index};`;
    }

    $: techsRenders = GetTechRenders(project.techs, techs);


    onMount(() => {
        return onUnmountFn;
    })
</script>


<div in:scale|global={{delay: index*150}} out:scale|global class="project-card">
    <img class="project-card__splash" src={project.imgUri}/>

    <div class="project-card__info">
        <h2 class="project-card__title">{project.showName}</h2>
        <div class="project-card__techs">
            {#each techsRenders as techRender, i}
            <img class="project-card__tech" src={techRender.imgUri} alt={`${techRender.showName} logo`} style={CreateTechIndexStyle(i)}/>
            {/each}
        </div>
    </div>
</div>


<style>
    .project-card {
        position: relative;

        width: calc(50% - 30px);
        aspect-ratio: 16/10;

        border-radius: var(--normal-border-radius);

        cursor: pointer;

        overflow: hidden;
    }

    .project-card__splash {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .project-card__info {
        position: absolute;
        top: 0px;
        left: 0px;

        display: flex;
        flex-direction: column;

        width: 100%;
        height: 100%;

        transition-property: backdrop-filter background-color;
        transition-duration: 0.5s;
    }

    .project-card:hover .project-card__info{
        background-color: var(--gay-pink-alpha-color);
        backdrop-filter: blur(3px);
    }

    .project-card__title {
        margin-top: var(--normal-fs);

        font-size: var(--semi-big-fs);
        color: var(--fg-color);

        text-align: center;

        transform: TranslateY(-200%);

        transition-property: transform;
        transition-duration: 0.5s;
    }

    .project-card:hover .project-card__title {
        transform: None;
    }

    .project-card__techs {
        flex-grow: 1;

        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;

        column-gap: calc(var(--extra-big-fs)*1.5);

        padding: 0 calc(var(--extra-big-fs)*0.5);
    }

    .project-card__tech {
        height: var(--extra-big-fs);
        aspect-ratio: 1/1;

        transform: Scale(0%);

        transition-property: transform;
        transition-duration: 0.3s;
        /*each tech needs a --tech-index var inlined*/
        transition-delay: calc(0.125s * calc(var(--tech-index, 0) + 1));
        transition-timing-function: cubic-bezier(0.315, 0.025, 0.43, 1.56);
    }

    .project-card:hover .project-card__tech {
        transform: none;
    }
</style>

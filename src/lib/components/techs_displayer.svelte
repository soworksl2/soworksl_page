<script>
    export let projects;
    export let techs;


    function CountProjectsWithTechUsage(projects, techId){
        let count = 0;

        projects.forEach(p => {
            if(p.techs.includes(techId)){
                count++;
            }
        });

        return count;
    }

    let techsRender = [...techs];

    //add usageCount to each techsRenderer
    techsRender.forEach(t => {
        t.usageCount = CountProjectsWithTechUsage(projects, t.id);
    })
</script>


<div class="tech-displayer">
    {#each techsRender as tech}
    <div class="tech-item">
        {#if tech.usageCount > 0}
        <span>{tech.usageCount}</span>
        {/if}

        <img src={tech.imgUri} alt={`${tech.id} logo`}/>
        <h2>{tech.showName}</h2>
    </div>
    {/each}
</div>


<style>
    .tech-displayer {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        column-gap: 5rem;
        row-gap: 3rem;

        padding: 0 5ch;
    }

    .tech-item {
        position: relative;

        user-select: none;
        cursor: pointer;

        transition-property: transform;
        transition-duration: 0.5s;
    }

    .tech-item:hover {
        transform: scale(115%);
    }

    .tech-item>img {
        margin: 0 auto;

        display: block;

        height: calc(var(--extra-big-fs) * 1.5);
        aspect-ratio: 1/1;
    }

    .tech-item>h2 {
        text-align: center;
        font-size: var(--normal-fs);
    }

    .tech-item>span {
        position: absolute;
        right: 0px;
        transform: translateX(36%) translateY(-45%);

        padding: 2px 1.5ch;

        border-radius: var(--normal-border-radius);

        color: var(--fg-color);
        font-weight: bold;

        background-color: var(--complementary-red-color);
    }
</style>

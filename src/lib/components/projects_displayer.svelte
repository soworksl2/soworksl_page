<script>
    import ProjectDisplayCard from '$lib/components/project_display_card.svelte'


    export let projects;
    export let techs;


    let filterTechs = [{id: 'none', showName: 'None'}];
    filterTechs.push(...techs.map(t=>{
        return {
            id: t.id,
            showName: t.showName
        }
    }));


    function GetFilterProjects(tech){
        if (!tech || tech === 'none'){
            return [...projects];
        }

        return projects.filter(p => {
            return p.techs.includes(tech);
        });
    }

    function GetProjectUnmountIfLast(index){
        if(index >= projectsRender.length - 1){
            return OnClearProjects;//()=>{projecsRender = FilterProjects(techFilter);};
        }

        return undefined;
    }

    function OnClearProjects(){
        projectsRender = GetFilterProjects(techFilter);
    }

    let techFilter = 'none';
    let projectsRender = GetFilterProjects(techFilter);
</script>


<div>
    <div>
        <span>Filter by tech:</span>
        <select bind:value={techFilter} on:change="{()=>{projectsRender = []}}">
            {#each filterTechs as ft}
            <option value={ft.id}>{ft.showName}</option>
            {/each}
        </select>
    </div>

    <div class="projects-cont">
        {#key projectsRender}
        {#each projectsRender as projectRender, i}
        <ProjectDisplayCard index={i} project={projectRender} techs={techs}
                            onUnmountFn={GetProjectUnmountIfLast(i)}/>
        {/each}
        {/key}
    </div>
</div>


<style>
    select {
        width: 20ch;
    }

    .projects-cont {
        display: flex;
        justify-content: space-evenly;
        column-gap: 20px;
        row-gap: 25px;
        flex-wrap: wrap;

        margin-top: var(--big-fs);
    }
</style>

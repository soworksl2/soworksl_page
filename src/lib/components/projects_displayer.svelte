<script>
    import ProjectDisplayCard from '$lib/components/project_display_card.svelte'
    import ProjectDisplayDialog from '$lib/components/project_display_dialog.svelte'


    export let projects;
    export let techs;
    export let techFilter = 'none';


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

    function GetOnProjectCardClickFunction(project){
        return () => {projectDialogComp.Show(project);};
    }


    let projectDialogComp;
    let projectsRender = GetFilterProjects(techFilter);


    //clear projectsRender each time the techFilter change
    $: if (techFilter || true){
        projectsRender = [];

        setTimeout(()=>{
            projectsRender = GetFilterProjects(techFilter);
        }, 600);
    }
</script>


<div>
    <div>
        <span>Filter by tech:</span>
        <select bind:value={techFilter}>
            {#each filterTechs as ft}
            <option value={ft.id}>{ft.showName}</option>
            {/each}
        </select>
    </div>

    <div class="projects-cont">
        {#key projectsRender}
        {#each projectsRender as projectRender, i}
        <ProjectDisplayCard
            index={i}
            project={projectRender}
            techs={techs}
            OnClick={GetOnProjectCardClickFunction(projectRender)}/>
        {/each}
        {/key}
    </div>

    <ProjectDisplayDialog 
        bind:this={projectDialogComp}
        techs={techs}/>
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

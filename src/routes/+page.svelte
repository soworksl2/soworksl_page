<script>
    import Segment from '$lib/components/segment.svelte'
    import NormalBtn from '$lib/components/normal_btn.svelte'
    import SocialLogo from '$lib/components/social_logo.svelte'
    import ComplementaryCont from '$lib/components/complementary_cont.svelte'
    import TechsDisplayer from '$lib/components/techs_displayer.svelte'
    import ProjectsDisplayer from '$lib/components/projects_displayer.svelte'
    import Footer from '$lib/components/footer.svelte'

    import {GetProjects, GetTechs} from '$lib/models/data_access.js'


    const dataPromise = new Promise(async (resolve, reject)=>{
        try {
            let projects = await GetProjects();
            let techs = await GetTechs();
            resolve({projects, techs});
        }
        catch(err){
            reject(err);
        }
    });


    function FocusElement(elementId){
        const target = document.getElementById(elementId);

        if (!target){
            return;
        }

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    }

    function OnSelectTech(tech){
        const projectSegmentTitle = document.getElementById('segment-Projects').getElementsByTagName('h2').item(0);

        projectSegmentTitle.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        //make time to allow the scroll transition finish
        setTimeout(()=>{
            projectsTechFilter = tech.id;
        }, 450);
    }


    let projectsTechFilter = 'js';

</script>


<main home>
    <Segment classNames="rroot__seg-home">
        <div>
            <h1>SOWORKSL</h1>
            <p class="home__description">
                I'm a developer with an uncertain start and no clear end; I just enjoy the journey of experimenting with new things. A big fan of the simple and a bit predictably unpredictable. 
            </p>
        </div>

        <div class="home__btns-cont">
            <NormalBtn>
                Download CV
            </NormalBtn>
        </div>

        <ul id="socials" class="home__socials">
            <li><SocialLogo logoName="linkedin"/></li>           
            <li><SocialLogo logoName="gmail"/></li>           
            <li><SocialLogo logoName="twitter"/></li>           
            <li><SocialLogo logoName="github"/></li>           
        </ul>
    </Segment>

    <Segment title="Technologies">
        <ComplementaryCont>
            {#await dataPromise}
            <p>fetching the data</p>
            {:then data}
            <TechsDisplayer projects={data.projects} techs={data.techs} OnSelectTech={OnSelectTech}/>
            {:catch err}
            <p>error fetching: {err}</p>
            {/await}
        </ComplementaryCont>
    </Segment>

    <Segment title="Projects">
        <ComplementaryCont>
            {#await dataPromise}
            <p>fetching the data</p>
            {:then data}
            <ProjectsDisplayer projects={data.projects} techs={data.techs} bind:techFilter={projectsTechFilter}/>
            {:catch err}
            <p>error fetching data: {err}</p>
            {/await}
        </ComplementaryCont>
    </Segment>

    <Segment title="About me">
        <div class="about-text">
            <p>
                My name is <strong>Jimy W. Aguasviva.</strong> A <strong>Developer</strong> appasionated about <strong>Technology</strong> who
                has been adquiring his knowledge autodidactically since before of 2015.
            </p>
            <p>
                I am 23 years old and live in the Dominican Republic, ST. I studied <strong>Business Administration</strong>
                at the <strong>University of O&M</strong> ending my studies in may of 2023 but interesting in lead my career in the 
                <strong>Computer Cience</strong> Area.
            </p>
            <p>
                I love mainly developing low level stuffs and graphics applications but can also defend and adapt myself in the web,
                I have the <strong>Confidence</strong> that I can learn and dominate any framework or
                <strong>Technology</strong> necessary to do the job and love <strong>Experimenting</strong> with new things.
            </p>
            <p>
                I'm finding for a stable job that allows me to start my career as a <strong>Developer</strong>.
                I know that I can to <strong>Contribute</strong> my bit in this <strong>Community</strong> of the
                <strong>Computer Cience.</strong> You can find here my <a><strong>Curriculum</strong></a> or my
                <a href="#socials" on:click|preventDefault={()=>{FocusElement('socials')}}><strong>Social Medias</strong></a>
                if you want to contact me.
            </p>
        </div>
    </Segment>

    <Footer/>
</main>


<style>
    :global(.rroot__seg-home) {
        padding-top: calc(var(--extra-big-fs)*3);
    }

    h1 {
        margin-bottom: calc(var(--extra-big-fs)*1.25);

        font-size: var(--extra-big-fs);
    }

    .home__description {
        margin-bottom: calc(var(--extra-big-fs)*3);

        font-size: var(--semi-big-fs);
    }

    .home__btns-cont {
        display: flex;
        justify-content: space-evenly;
    }

    .home__socials {
        margin-top: calc(var(--extra-big-fs)*3);

        display: flex;
        justify-content: center;
        column-gap: var(--extra-big-fs);
    }

    .about-text p {
        font-size: var(--normal-fs);
        margin-bottom: 15px;
    }

    .about-text strong {
        font-size: var(--normal-fs);
        color: var(--gay-pink-color);
        font-weight: bold;
    }

    .about-text a {
        text-decoration-style: dashed;
        text-decoration-thickness: 2.5px;
    }
</style>

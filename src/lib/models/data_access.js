import Project from '$lib/models/project.js'
import Tech from '$lib/models/tech.js'


let _projects;
let _techs;


export async function GetProjects(){
    if(!_projects){
        await FetchAndProcessProjects();
    }

    return _projects;
}

export async function GetTechs(){
    if(!_techs){
        await FetchAndProcessTechs();
    }

    return _techs;
}


async function FetchAndProcessProjects(){
    let projectsJson = await FetchData('/public/data/projects.json');


    _projects = [];
    let currentProjectJson;
    for(let i = 0; i < projectsJson.length; i++){
        currentProjectJson = projectsJson[i];
        _projects.push(new Project(currentProjectJson));
    }
}

async function FetchAndProcessTechs(){
    let techsJson = await FetchData('/public/data/techs.json');

    _techs = [];
    let currentTechJson;
    for(let i = 0; i < techsJson.length; i++){
        currentTechJson = techsJson[i];
        _techs.push(new Tech(currentTechJson));
    }
}

async function FetchData(uri){
    let output = await fetch(uri);
    return await output.json();
}

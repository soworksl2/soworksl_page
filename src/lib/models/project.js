export default class Project{
    constructor({ id, showName, imgUri, description, infoTags, techs }){
        this.id = id;
        this.showName = showName;
        this.imgUri = imgUri;
        this.description = description;
        this.infoTags = infoTags;
        this.techs = techs;
    }
}

export default class Project{
    constructor({ id, showName, imgUri, description, tagInfo, techs }){
        this.id = id;
        this.showName = showName;
        this.imgUri = imgUri;
        this.description = description;
        this.tagInfo = tagInfo;
        this.techs = techs;
    }
}

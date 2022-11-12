

export async function postProject(project) {

}

export async function getProjectById(id) {

}

export async function deleteProjectById(id) {


}


export async function getAllProjects() {
    try {
        const projects = await fetch("https://software-project-finder-webapp.azurewebsites.net/projectsAll", {
            method : 'Get',
        })
            .then(response => response.json())
            .then(result => console.log(result))
        
        return projects

    } catch (error) {
        return {}
    }
}
import React from 'react'
import { Link } from "react-router-dom";

class ProjectsPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            projects: [],
            DataIsLoaded: false
        };
    }

    componentDidMount() {
        fetch("https://software-project-finder-webapp.azurewebsites.net/projectsAll")
        .then((res) => res.json())
        .then((json) => {
            console.log(json.projects)
            this.setState({
                    projects: json.projects,
                    DataisLoaded: true
            });
        })        
    }

    render() {
        const { DataisLoaded, projects } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Retrieving Projects </h1> </div> ;
   
        return (
        <div className = "App">
            <Link to="/createProject">Add a Project</Link>
            <h1> Fetch data from an api in react </h1>  {
                projects.map((project) => ( 
                <ol key = {project.id} >
                    <ul>{project.id}</ul>
                </ol>
                ))
            }
        </div>
        );
    }
}
export default ProjectsPage
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Projects extends Component{
    render(){
        let projs = this.props.projects.map((item, i) => {
            let linkName = item.name.replace(/ /g, '');
            return (
                <div key={i}>
                    <h2>{item.name}</h2>
                    <p>{item.tech}</p>
                    <Link to={linkName}>Project</Link>
                </div>
            )
        })

        return(
            <div>
                <h1>Projects Yo</h1>
                {projs}
            </div>
        )
    }
}
export default Projects
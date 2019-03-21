import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const ProjectSummary = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title} </span>
        <p> Posted by {project.authorFirstName} {project.authorLastName} </p>
        <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
        <div class="offset-s6 center-align z-depth-0">
          <Link to='/replyquery' class="btn-large  purple darken-3"> Reply </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectSummary

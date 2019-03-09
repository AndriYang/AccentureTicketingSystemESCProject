import React from 'react'
import ToDoList from './ToDoList'
import { Link } from 'react-router-dom'

const Ticket = ({projects}) => {
  return (
    <div className="porject-list section">
        { projects && projects.map(project => {
          return (
            <div className="container">
              <h3 style={{color: 'green'}}>Unsolved Requests</h3>
              <ToDoList />
              <h3 style={{color: 'green'}}>Solved Requests</h3>
              <h5>Oops, solve your first request ticket!</h5>
            </div>
          )
        })}
    </div>
  )
}

export default Ticket

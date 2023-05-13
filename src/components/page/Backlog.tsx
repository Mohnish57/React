import './Backlog.css'
import {Project} from '../../App.tsx';
import { useState } from 'react';

interface Props {
  project: Project
}

const Backlog = ({project}: Props) => {

  const [selectedUser, setSelectedUser] = useState("");

  return (
    <div className="backlog-page">
      <div className="backlog-page-head">

        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Projects</a></li>
            <li className="breadcrumb-item"><a href="#">{project.name}</a></li>
          </ol>
        </nav>

        <h4>Backlog</h4>

        <div className="d-flex flex-row issue-filters">
          <nav className="navbar navbar-light search-filter">
            <input className="form-control mr-sm-2" type="search"
              placeholder="Search backlog" onChange={e => console.log(e.target.value)} />
          </nav>
          <div className="d-flex flex-row align-items-center name-filter">
            {project.members.map(user =>
              <div className='user-selector'>
                <div className={user.id === selectedUser? "user selected-user" : "user"}
                  onClick={() => setSelectedUser(selectedUser ? "": user.id)}>
                  <img src={user.icon} alt={user.name} />
                </div>
              </div>
            )}
      
          </div>
        </div>

        </div>
        <div className="backlog-wrapper d-flex flex-row">
          <div className={"sprint-list" + (!selectedUser ? " col-12": " col-8")}>
            {/* List of sprints and a backlog present here */}
          </div>

          <div className={"backlog-issue-pane" + (selectedUser && " col-4")}>
            {/* This pane appears only if an issue is highlighted */}
          </div>
        </div>
    </div>
  )
}

export default Backlog
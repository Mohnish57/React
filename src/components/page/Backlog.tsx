import './Backlog.css'
import {Project} from '../../App.tsx';
import { useState } from 'react';
import UserSelector from '../UserSelector.tsx';
import IssueSearch from '../IssueSearch.tsx';
import SprintCard from '../sprint.tsx';


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
          <IssueSearch />
          <UserSelector users={project.members} selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
        </div>

        </div>
        <div className="backlog-wrapper d-flex flex-row">
          <div className={"sprint-list" + (!selectedUser ? " col-12": " col-8")}>
          <SprintCard sprint={project.sprints[0]}/>
            
          </div>

          <div className={"backlog-issue-pane" + (selectedUser && " col-4")}>
            {/* This pane appears only if an issue is highlighted */}
          </div>
          
        </div>
    </div>
  
  )
}

export default Backlog
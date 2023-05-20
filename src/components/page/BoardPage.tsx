import "./BoardPage.css";
import { Project, Sprint } from "../../App.tsx";
import { useState } from "react";
import IssueSearch from "../IssueSearch";
import UserSelector from "../UserSelector";
import WaitIcon from "../../assets/WaitIcon.tsx";
import CompleteSprintButton from "../button/CompleteSprintButton.tsx";
import EditIcon from "../../assets/EditIcon.tsx";
import IssueCard from "../IssueCard.tsx";

interface Props {
  project: Project;
}

const BoardPage = ({ project }: Props) => {
  const [selectedUser, setSelectedUser] = useState<string>("");
  const [currentSprint, setCurrentSprint] = useState<Sprint>(
    project.sprints[0] // TODO change this
  );

  return (
    <div className="board-page">
      <div className="board-page-head">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Projects</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">{project.name}</a>
            </li>
          </ol>
        </nav>

        <div className="d-flex title-manage-wrapper sprint-title">
          <div className="d-flex flex-column">
            <h4>{currentSprint.name}</h4>
            <p>{currentSprint.goal}</p>
          </div>
          <div className="gap"></div>
          <div className="d-flex flex-row sprint-manage">
            <WaitIcon />
            {"11 days remaining" /** TODO replace this */}
            <CompleteSprintButton />
            <button
              type="button"
              className="btn ml-auto btn-light border edit-sprint"
            >
              <EditIcon />
            </button>
          </div>
        </div>

        <div className="d-flex flex-row issue-filters">
          <IssueSearch />
          <UserSelector
            users={project.members}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
        </div>
      </div>
      <div className="board-page-wrapper d-flex flex-row">
        {project.issueStages?.map((holder) => {
          const issues = currentSprint.issues.filter(
            (issue) => issue.state === holder.key
          );

          return (
            <div className="issue-holder" key={holder.key}>
              <div className="holder-header d-flex flex-row">
                <p>
                  {holder.name} {issues.length} ISSUE{issues.length != 1 && "S"}
                </p>
              </div>
              <div className="issue-list">
                {issues.map((issue) => (
                  <IssueCard issue={issue} key={issue.id} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BoardPage;

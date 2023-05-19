import React from "react";
import "./SprintCard.css";
import { Sprint, Issue } from "../App.tsx";
import CompleteSprintButton from "./button/CompleteSprintButton.tsx";

interface Props {
  sprint: Sprint;
}

function getStoryPoints(issues: Issue[]) {
  let notStarted = 0;
  let inProgress = 0;
  let done = 0;

  for (let i = 0; i < issues.length; i++) {
    if (issues[i].state === "Not Started") {
      notStarted += issues[i].storyPointEstimate;
    } else if (issues[i].state === "In Progress") {
      inProgress += issues[i].storyPointEstimate;
    } else if (issues[i].state === "Done") {
      done += issues[i].storyPointEstimate;
    }
  }

  return [notStarted, inProgress, done];
}

export default function SprintCard({ sprint }: Props) {
  // drag Component
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    issueId: string
  ) => {
    console.log("Drag event started");
    e.dataTransfer.setData("text/plain", issueId);
  };

  const openIssue = () => {
    console.log("User clicked on issue");
  };

  const [notStarted, inProgress, done] = getStoryPoints(sprint.issues);

  return (
    <>
      <div className="container bg-light px-3 py-2 rounded my-2 main">
        <div className="row">
          {/* left items */}
          <div className="sprint-Name-date-issues align-items-center d-flex col  spx-2">
            <h6 className="sprint-name px-2">{sprint.name}</h6>
            <h6 className="Dates-text-secondary font-weight-light px-2">
              {sprint.startDate}-{sprint.endDate}
            </h6>
            <h6 className="IssuesCount px-1 text-secondary font-weight-light">
              ({sprint.issues.length} issue)
            </h6>
            <h6 className="IssuesCount px-1 text-secondary font-weight-light">
              {sprint.goal}
            </h6>
          </div>
          {/* right items */}
          <div className="col d-flex justify-content-end align-items-center">
            <CompleteSprintButton />
            <div className="story-point-1 mx-1">
              <h6 className="text-light ">{notStarted}</h6>
            </div>
            <div className="story-point-2 mx-1">
              <h6 className="text-light  font-weight-bold">{inProgress}</h6>
            </div>
            <div className="story-point-3 mx-1">
              <h6 className="text-light font-weight-bold">{done}</h6>
            </div>
            <label className="dropdown">
              <div className="dd-button">Dropdown</div>
              <input type="checkbox" className="dd-input" id="test" />
              <ul className="dd-menu">
                <li>Edit </li>
                <li>Delete</li>
              </ul>
            </label>
          </div>
        </div>

        {/* sprint issues */}
        {sprint.issues.map((issue) => (
          <div
            key={issue.id}
            className="sprint-issues row d-flex align-items-center mt-1"
            onClick={openIssue}
            onDragStart={(e) => handleDragStart(e, issue.id)}
            draggable
          >
            <div className="d-flex col align-items-center justify-content-start">
              <img src={issue.icon} alt="Task" />
              <h6 className="issue-type text-secondary h6 mx-2">{issue.id}</h6>
              <h6 className="issue-type h5 mx-2 ">{issue.title}</h6>
            </div>
            <div className="d-flex justify-content-end col align-items-center">
              <div className="story-point-1 mx-1">
                <h6 className="text-light  font-weight-bold">{inProgress}</h6>
              </div>
              <label className="dropdown">
                <div className="dd-button">To Do</div>
                <input type="checkbox" className="dd-input" id="test" />
                <ul className="dd-menu">
                  <li>In Progress</li>
                  <li>Done</li>
                </ul>
              </label>
              <img
                src="man.png"
                className="assignee-image"
                alt={issue.assignee}
              />
              <label className="dropdown">
                <div className="dd-button">-</div>
                <input type="checkbox" className="dd-input" id="test" />
                <ul className="dd-menu">
                  <li className="btn btn-light btn-block">In Progress</li>
                  <li className="btn btn-light btn-block">Done</li>
                </ul>
              </label>
            </div>
          </div>
        ))}

        {/* Create Issue button */}
        <div className="d-flex">
          <button type="button" className="btn btn-light btn-block">
            + Create Issue
          </button>
        </div>
      </div>
    </>
  );
}

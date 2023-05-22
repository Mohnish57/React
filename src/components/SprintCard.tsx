import "./SprintCard.css";
import React, { useState } from "react";
import { Sprint, Issue, IssueStage } from "../App.tsx";
import CompleteSprintButton from "./button/CompleteSprintButton.tsx";

interface Props {
  sprint: Sprint;
  issueStages: IssueStage[];
}

function getStoryPoints(issues: Issue[]) {
  let notStarted = 0;
  let inProgress = 0;
  let done = 0;

  for (let i = 0; i < issues.length; i++) {
    if (issues[i].state === "TODO") {
      notStarted += issues[i].storyPointEstimate;
    } else if (issues[i].state === "INPROGRESS") {
      inProgress += issues[i].storyPointEstimate;
    } else if (issues[i].state === "DONE") {
      done += issues[i].storyPointEstimate;
    }
  }

  return [notStarted, inProgress, done];
}
function getIssueStateName(key: string, issueStages: IssueStage[]) {
  const stage = issueStages
    .filter((issueStage) => issueStage.key === key)
    .at(0);
  if (!stage) {
    return "TO DO";
  }
  return stage.name;
}
function getIssueStateClass(key: string) {
  if (key === "TODO") {
    return " todo";
  }
  if (key === "DONE") {
    return " done";
  }
  return " default";
}

export default function SprintCard({ sprint, issueStages }: Props) {
  // drag Component
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    issueId: string
  ) => {
    console.log("Drag event started");
    e.dataTransfer.setData("text/plain", issueId);
  };
  const [selectedIssue, setSelectedIssue] = useState("");

  const openIssue = (issueId: string) => {
    console.log("User clicked on issue");
    setSelectedIssue(issueId);
  };

  const [notStarted, inProgress, done] = getStoryPoints(sprint.issues);

  return (
    <>
      <div className="container-fluid sprint-main px-3 py-2 rounded my-2 main">
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
            <div className="story-point-1 mx-1">{notStarted}</div>
            <div className="story-point-2 mx-1">{inProgress}</div>
            <div className="story-point-3 mx-1">{done}</div>
            <label className="dropdown mx-1">
              <div className="dd-button sprint-edit-button align-items-center pt-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  role="presentation"
                >
                  <g fill="currentColor" fillRule="evenodd">
                    <circle cx="5" cy="12" r="2"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                    <circle cx="19" cy="12" r="2"></circle>
                  </g>
                </svg>
              </div>
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
            className={
              " row d-flex py-1 align-items-center mt-1 mx-1 rounded  sprint-issues" +
              (issue.id === selectedIssue ? "-highlighted-issue" : "")
            }
            onClick={() => {
              return openIssue(issue.id);
            }}
            onDragStart={(e) => handleDragStart(e, issue.id)}
            draggable="true"
          >
            <div className="d-flex col-6 align-items-center justify-content-start">
              <img src={issue.icon} alt="Task" />
              <div
                className={
                  "issue-type text-nowrap text-secondary  mx-1 " +
                  (issue.state === "DONE" && "struck-text")
                }
              >
                {issue.id}
              </div>
              <div className="issue-type text-truncate  mx-2  ">
                {issue.title}
              </div>
            </div>

            <div className="d-flex justify-content-end col align-items-center">
              <div className="story-point-1 mx-1 ">
                {issue.storyPointEstimate}
              </div>
              <label className="dropdown mx-1 ">
                <div className={"dd-button" + getIssueStateClass(issue.state)}>
                  {getIssueStateName(issue.state, issueStages)}
                </div>
                <input type="checkbox" className="dd-input" id="test" />
                <ul className="dd-menu">
                  <li>In Progress</li>
                  <li>Done</li>
                </ul>
              </label>
              <img
                src="man.png"
                className="assignee-image mx-1"
                alt={issue.assignee}
              />
              <div className="dd-button-wrapper">
                <label className="dropdown issue-op">
                  <div className="dd-button">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="presentation"
                    >
                      <g fill="currentColor" fill-rule="evenodd">
                        <circle cx="5" cy="12" r="2"></circle>
                        <circle cx="12" cy="12" r="2"></circle>
                        <circle cx="19" cy="12" r="2"></circle>
                      </g>
                    </svg>
                  </div>

                  <input type="checkbox" className="dd-input mx-1" id="test" />
                  <ul className="dd-menu">
                    <li className="btn btn-light btn-block">In Progress</li>
                    <li className="btn btn-light btn-block">Done</li>
                  </ul>
                </label>
              </div>
            </div>
          </div>
        ))}

        {/* Create Issue button */}
        <div className="d-flex my-1">
          <button
            type="button"
            className="create-issue-button btn btn-light btn-block"
          >
            <h6 className="create-issue-text">+ Create Issue </h6>
          </button>
        </div>
      </div>
    </>
  );
}

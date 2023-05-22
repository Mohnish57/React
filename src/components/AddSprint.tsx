import React, { useState } from "react";
import "./AddSprint.css";
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
  console.log([notStarted, inProgress, done]);
  return [notStarted, inProgress, done];
}

export default function AddSprintCard({ sprint }: Props) {
  const [notStarted, inProgress, done] = getStoryPoints(sprint.issues);
  const [backlogComponent, setbacklogComponent]=useState('Plan and prioritize future work here');

  const handleDrop = (e:React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("Drop event triggered");
    const data = e.dataTransfer.getData("text");
    setbacklogComponent(data)
    console.log("Dropped data:", data);
  };

  return (
    <>
      <div
        className="container-fluid  px-3 py-2 my-2 main"
      >
        <div className="row">
          {/* left items */}
          <div className="sprint-Name-date-issues align-items-center d-flex col spx-2">
            <h6 className="sprint-name px-2">Backlog</h6>
            <h6 className="IssuesCount px-1 text-secondary font-weight-light">
              (0 issue)
            </h6>
          </div>
          {/* right items */}
          <div className="col d-flex justify-content-end align-items-center">
          <CompleteSprintButton />
            <div className="story-point-1 mx-1">
              {notStarted}
            </div>
            <div className="story-point-2 mx-1">
              {inProgress}
            </div>
            <div className="story-point-3 mx-1">
              {done}
            </div>
            <label className="dropdown">
            <div className="dd-button sprint-edit-button align-items-center pt-1"><svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g     fill="currentColor" fill-rule="evenodd"><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg></div>
              <input type="checkbox" className="dd-input" id="test" />
              <ul className="dd-menu">
                <li>Edit</li>
                <li>Delete</li>
              </ul>
            </label>
          </div>
        </div>
        
        {/* droppable component start */}
        <div className="add-sprint py-2 text-secondary align-items-center justify-content-center my-1 d-flex"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}>
            
          <h6>{backlogComponent}</h6>
        </div>
        {/* droppable component end */}
        
        <div className="d-flex">
          <button type="button" className="btn btn-light btn-block">
            + Add upcoming work here
          </button>
        </div>
      </div>
    </>
  );
}

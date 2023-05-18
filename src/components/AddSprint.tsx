import React, { useState } from "react";
import "./AddSprint.css";
import { Sprint, Issue } from "../App.tsx";

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
    // Do something with the dropped data
    console.log("Dropped data:", data);
  };

  return (
    <>
      <div
        className="container px-3 py-2 my-2 main"
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
            <button type="button" className="btn ml-auto btn-light border">
              Complete Sprint
            </button>
            <div className="story-point-1 mx-1">
              <h6 className="text-light ">{notStarted}</h6>
            </div>
            <div className="story-point-2 mx-1">
              <h6 className="text-light font-weight-bold">{inProgress}</h6>
            </div>
            <div className="story-point-3 mx-1">
              <h6 className="text-light font-weight-bold">{done}</h6>
            </div>
            <label className="dropdown">
              <div className="dd-button">Dropdown</div>
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
            
          <h6>Plan and prioritize future work here</h6>
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

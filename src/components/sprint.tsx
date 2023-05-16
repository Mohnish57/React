import React, { useState } from "react";
import "./page/sprint.css";
import { Sprint, Issue } from "../App.tsx";

interface Props {
  sprint: Sprint;
}

function getstatus(issues: Issue[]) {
  let notstarted = 0;
  let inprogress = 0;
  let done = 0;

  for (let i = 0; i < issues.length; i++) {
    if (issues[i].stage === "Not Started") {
      notstarted += issues[i].storyPointEstimate;
    } else if (issues[i].stage === "In Progress") {
      inprogress += issues[i].storyPointEstimate;
    } else if (issues[i].stage === "Done") {
      done += issues[i].storyPointEstimate;
    }
  }
  console.log([notstarted, inprogress, done]);
  return [notstarted, inprogress, done];
}

function SprintCard({ sprint }: Props) {
  //issues
  const [notstarted, inprogress, done] = getstatus(sprint.issues);
  //console.log(sprint.issues);
  return (
    <>

      <div className="d-flex bg-light p-2  flex-column  main">
            


          <div className='d-flex'>
            {/* left items */}
        <div className="sprint-Name-date-issues d-flex  spx-2 ">
          <h6 className="Sprint-Name px-2">{sprint.name}</h6>
          <h6 className="Dates-text-secondary font-weight-light px-2">
            {sprint.startDate}-{sprint.endDate}
          </h6>
          <br />
          <h6 className="IssuesCount px-1 text-secondary font-weight-light">
            ({sprint.issues.length} issue)
          </h6>
          <br />
          <h6 className="IssuesCount px-1 text-secondary font-weight-light">
            {sprint.goal}
          </h6>
          </div>



          {/* right items */}
          <div className="right-align d-flex justify-content-end align-items-center">
                <button type="button" className="btn ml-auto btn-light border">
                  Complete Sprint
                </button>
                      <div className="story-point-1 mx-1">
                        <h6 className="text-light ">{notstarted}</h6>
                      </div>
                      <div className="story-point-2 mx-1">
                        <h6 className="text-light  font-weight-bold">{inprogress}</h6>
                      </div>
                      <div className="story-point-3 mx-1">
                        <h6 className="text-light font-weight-bold">{done}</h6>
                      </div>
                          <label className="dropdown">

                                              <div className="dd-button">
                                                Dropdown
                                              </div>

                                              <input type="checkbox" className="dd-input" id="test" />

                                              <ul className="dd-menu">
                                                <li>Edit </li>
                                                <li>Delete</li>

                                              </ul>
                                              
                                            </label>
              </div>
              
        
        </div>
          
        




                                      {/* issue */}
                              <div className="sprint-issues d-flex align-items-center alert alert-primary">
                                        <div className='d-flex justify-content-start'>
                                        <img src={sprint.issues[0].icon} alt="Task" />
                                        <h6 className="issue-type text-secondary h6 mx-2">
                                          {sprint.issues[0].id}
                                        </h6>
                                        <h6 className="issue-type h5 mx-2 ">{sprint.issues[0].title}</h6>
                                        </div>


                                        <div className='d-flex justify-content-end align-items-center'>
                                        <div className="story-point-1 mx-1">
                                        <h6 className="text-light  font-weight-bold">{inprogress}</h6>
                                          </div>
                                                  <label className="dropdown">
                                                      <div className="dd-button ">
                                                        To Do
                                                      </div>
                                                      <input type="checkbox" className="dd-input" id="test" />
                                                      <ul className="dd-menu">
                                                        <li className='alert alert-primary'>In Progress </li>
                                                        <li className='alert alert-success'>Done</li>
                                                      </ul>
                                                      </label>
                                                      <img src="man.png" height='30rem' alt={sprint.issues[0].assignee} />
                                                      
                                                      <label className="dropdown">
                                                      <div className="dd-button ">
                                                        -
                                                      </div>
                                                      <input type="checkbox" className="dd-input" id="test" />
                                                      <ul className="dd-menu">
                                                        <li className='alert alert-primary'>In Progress </li>
                                                        <li className='alert alert-success'>Done</li>
                                                      </ul>
                                                      </label>   

                                        </div>
                                </div>
                                <div className='d-flex '>
                                  <h6>+ Create Issue</h6>
                                </div>
      </div>
    </>
  );
}
export default SprintCard;

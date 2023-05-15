import React, { useState } from 'react';

function Sprint() {
  const items = [
    {
    id: 'string',
    isDateSet: 'boolean',
    startDate: 'string',
    endDate: 'string',
    name: 'string',
    goal: 'string',
    hasEnded: 'boolean',
    issues: 'Issue',
    projectname:'string'
  }];
  //issues
  const [issues, setIssues]=useState(0);
  return (
    <>
      <div className="d-flex  flex-wrap  bg-light p-2">

        <div className="sprintName-date-issues d-flex px-1">
        <h6 className="SprintName ">Sprint1</h6>
        <span className="Dates">Add dates</span><br/>
        <span className="IssuesCount px-1">({issues} issues)</span>
        </div>
    <div className="issue d-flex px-1 ">
      <span className='IssueType'></span>
      <h6 className="IssueTitle">Issues</h6>


    </div>
      </div>
    </>
  );
}
export default Sprint;

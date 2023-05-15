import './IssuePane.css';
import { Issue } from "../App";

const IssuePane = () => {
  const ALL_STATES: string[][] = [["TODO", "To Do"], ["INPROGRESS", "In Progress"], ["DONE", "Done"]];

  const mockIssue: Issue = {
    id: "OC-1",
    title: "Upload images to S3",
    description: "As a developer, I want to be able to push images and store in a cloud storage bucket",
    state: "TODO",
    type: "Task",
    icon: "https://octagn.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
    comments: [],
    assignee: "sawlanimohnish",
    reporter: "gandhisarvesh",
    storyPointEstimate: 2
  };

  return (
    <div className="issue-pane">
      <div className="title-wrapper d-flex flex-row align-items-center">
        <div className="issue-icon">
          <img src={mockIssue.icon} alt={mockIssue.state} />
        </div>
        <div className="issue-id">
          <h6>{mockIssue.id}</h6>
        </div>
      </div>

      <div className="issue-title">
        <h4>{mockIssue.title}</h4>
      </div>

      <div className="issue-state">
        <label className="dropdown">
          <div className="dd-button">
            {ALL_STATES.filter((state) => {
              return (state[0] === mockIssue.state);
            }).map(state => state[1])}
          </div>
          <input type="checkbox" className="dd-input" id="test" />
          <ul className="dd-menu">
            {ALL_STATES.filter((state) => {
              return (state[0] != mockIssue.state);
            }).map(state => {
              return <li onClick={() => console.log("// TODO issue has to be moved")}>{state[1]}</li>;
            })}
            
            <li className="divider"></li>
            <li>
              <a href="#" aria-disabled>View workflow</a>
            </li>
          </ul>
        </label>
      </div>

      <div className="issue-description-wrapper">
        <div className="issue-description-header"><p>Description</p></div>
        <div className="issue-description-text"><p>{mockIssue.description}</p></div>
      </div>
      
      <div className="issue-details wrapper">
        <div className="issue-details-header"><p>Details</p></div>
        <table className="table issue-details-table">
        <tbody>
          <tr>
            <td className="issue-detail-header">Assignee</td>
            <td>
              {UserDisplay(mockIssue.assignee, "woman.png")}
            </td>
          </tr>
          <tr>
            <td className="issue-detail-header">Sprint</td>
            <td>
              <a href="#">{/* // TODO change this */}OC Sprint 1</a>
            </td>
          </tr>
          <tr>
            <td className="issue-detail-header">Story point estimate</td>
            <td>
              <div className="story-point">{mockIssue.storyPointEstimate}</div>
            </td> 
          </tr>
          <tr>
            <td className="issue-detail-header">Reporter</td>
            <td>
              {UserDisplay(mockIssue.reporter, "man.png")}
            </td> 
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default IssuePane

function UserDisplay(userName: string, icon: string) {
  return <div className="user-display d-flex flex-row align-items-center">
    <img src={/* // TODO change this*/icon} alt="Mohnish Sawlani" />
    <p>{userName}</p>
  </div>;
}

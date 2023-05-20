import { useState } from "react";
import BoardPage from "./components/page/BoardPage";
import BacklogPage from "./components/page/BacklogPage";
import "./App.css";

export interface User {
  id: string;
  name: string;
  email: string;
  icon: string;
}

export interface Sprint {
  id: string;
  isDateSet: boolean;
  startDate: string;
  endDate: string;
  name: string;
  goal: string;
  hasEnded: boolean;
  issues: Issue[];
}

export interface Issue {
  id: string;
  type: string;
  title: string;
  description: string;
  comments: object[];
  state: string;
  icon: string;
  assignee: string;
  reporter: string;
  storyPointEstimate: number;
}

export interface IssueStage {
  rank: number;
  key: string;
  name: string;
  columnLimit: number | null;
}

export interface Project {
  id: string;
  name: string;
  members: User[];
  sprints: Sprint[];
  issueStages: IssueStage[];
}

function App() {
  const mockProject: Project = {
    id: "OC",
    name: "octagn",
    members: [
      {
        id: "sawlanimohnish",
        name: "Mohnish Sawlani",
        email: "sawlanimohnish@gmail.com",
        icon: "woman.png",
      },
      {
        id: "gandhisarvesh",
        name: "Sarvesh Gandhi",
        email: "sarvesh.jain.96742@gmail.com",
        icon: "man.png",
      },
    ],
    sprints: [
      {
        id: "OC Sprint 1",
        name: "OC Sprint 1",
        isDateSet: false,
        startDate: "15 May",
        endDate: "6 June",
        goal: "sprint goal",
        hasEnded: false,
        issues: [
          {
            id: "OC-1",
            icon: "https://octagn.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
            type: "Task",
            title: "Upload Images to S3",
            description: "This is issue description",
            state: "INPROGRESS",
            storyPointEstimate: 2,
            reporter: "sawlanimohnish",
            assignee: "sawlanimohnish",
            comments: [],
          },
          {
            id: "OC-2",
            icon: "https://octagn.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
            type: "Task",
            title:
              "Upload Images to S3 Upload Images to S3 Upload Images to S3 Upload Images to S3",
            description: "This is issue description",
            state: "INPROGRESS",
            storyPointEstimate: 2,
            reporter: "sawlanimohnish",
            assignee: "sawlanimohnish",
            comments: [],
          },
          {
            id: "OC-3",
            icon: "https://octagn.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
            type: "Task",
            title:
              "Upload Images to S3 Upload Images to S3 Upload Images to S3 Upload Images to S3",
            description: "This is issue description",
            state: "INPROGRESS",
            storyPointEstimate: 2,
            reporter: "sawlanimohnish",
            assignee: "sawlanimohnish",
            comments: [],
          },
          {
            id: "OC-4",
            icon: "https://octagn.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
            type: "Task",
            title:
              "Upload Images to S3 Upload Images to S3 Upload Images to S3 Upload Images to S3",
            description: "This is issue description",
            state: "TODO",
            storyPointEstimate: 2,
            reporter: "sawlanimohnish",
            assignee: "sawlanimohnish",
            comments: [],
          },
        ],
      },
    ],
    issueStages: [
      {
        rank: 1,
        key: "TODO",
        name: "TO DO",
        columnLimit: null,
      },
      {
        rank: 2,
        key: "INPROGRESS",
        name: "IN PROGRESS",
        columnLimit: null,
      },
      {
        rank: 3,
        key: "DONE",
        name: "DONE",
        columnLimit: null,
      },
    ],
  };

  const [project, setProject] = useState(mockProject);

  return (
    <div className="app">
      <BoardPage project={project} />
    </div>
  );
}

export default App;

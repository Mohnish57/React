import { useState } from "react";
import Backlog from "./components/page/Backlog";
import "./App.css";

export interface User {
  id: string,
  name: string,
  email: string,
  icon: string
}

export interface Sprint {
  id: string,
  isDateSet: boolean,
  startDate: string,
  endDate: string,
  name: string,
  goal: string,
  hasEnded: boolean,
  issues: Issue[]
}

export interface Issue{
  id:string,
  type:string,
  title:string,
  description:string,
  comments:object[],
  state: string,
  icon: string,
  assignee: string,
  reporter: string,
  storyPointEstimate: number
}

export interface Project {
  id: string,
  name: string,
  members: User[],
  sprints: Sprint[]
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
        icon: "woman.png"
      },
      {
        id: "gandhisarvesh",
        name: "Sarvesh Gandhi",
        email: "sarvesh.jain.96742@gmail.com",
        icon: "man.png"
      }
    ],
    sprints: [
      {
        id:'',
        name:'OC Sprint 1',
        isDateSet: false,
        startDate: '15 May',
        endDate: '6 June',
        goal: 'sprint goal',
        hasEnded: false,
        issues:[
          {
          id:'OC-1',
          icon:'https://octagn.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium',
          type:'Task',
          title:'Upload Images to s3',
          description:'This is issue description',
          stage:'In Progress',
          storyPointEstimate:2,
          reporter:'sawlanimohnish',
          assignee:'sawlanimohnish',
          comments:[]
          } 
        ],
        
      }
    ],
    
  };

  const [project, setProject] = useState(mockProject);
  
  return (
    <div className="app">
      <Backlog project={project}/>
    </div>
  )
}

export default App;

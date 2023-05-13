import { useState } from "react";
import Backlog from "./components/page/Backlog";

export interface User {
  id: string,
  name: string,
  email: string,
  icon: string
}

interface Sprint {
  id: string,
  isDateSet: boolean,
  startDate: string,
  endDate: string,
  name: string,
  goal: string,
  hasEnded: boolean,
  issues: object[]
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
    sprints: []
  };

  const [project, setProject] = useState(mockProject);
  
  return (
    <>
      <Backlog project={project}/>
    </>
  )
}

export default App;

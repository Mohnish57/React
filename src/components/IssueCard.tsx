import { Issue } from "../App";
import EditIcon from "../assets/EditIcon";
import "./IssueCard.css";

interface Props {
  issue: Issue;
  draggable: boolean;
  handleOnDragStart: React.DragEventHandler<HTMLDivElement>;
  handleOnDragEnd: React.DragEventHandler<HTMLDivElement>;
}

const IssueCard = ({
  issue,
  draggable,
  handleOnDragStart,
  handleOnDragEnd,
}: Props) => {
  return (
    <div
      className="issue-card d-flex flex-column"
      draggable={draggable}
      onDragStart={handleOnDragStart}
      onDragEnd={handleOnDragEnd}
    >
      <div className="issue-card-top d-flex">
        <p>{issue.title}</p>
        <button>
          <EditIcon />
        </button>
      </div>
      <div className="issue-card-bottom d-flex">
        <img src={issue.icon} alt={issue.type} className="issue-type-icon" />
        <a href={"#" /**TODO change this */}>
          <p className="issue-id">{issue.id}</p>
        </a>

        <img src={"woman.png" /** TODO change this */} alt={issue.assignee} />
      </div>
    </div>
  );
};

export default IssueCard;

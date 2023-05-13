import {User} from '../App.tsx';
import './UserSelector.css';

interface Props {
  users: User[],
  selectedUser: string,
  setSelectedUser: React.Dispatch<React.SetStateAction<string>>
}

const UserSelector = ({users, selectedUser, setSelectedUser}: Props) => {
  return (
    <div className="d-flex flex-row align-items-center name-filter">
      {users.map(user =>
        <div className="user-selector" key={user.id}>
          <div className={user.id === selectedUser? "user selected-user" : "user"}
            onClick={() => setSelectedUser(selectedUser === user.id? "": user.id)}>
            <img src={user.icon} alt={user.name} />
          </div>
        </div>
      )}
      
    </div>
  )
}
    
export default UserSelector
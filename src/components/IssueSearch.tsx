import './IssueSearch.css';

const IssueSearch = () => {
  return (
    <nav className="navbar navbar-light search-filter">
    <input className="form-control mr-sm-2" type="search"
    placeholder="Search backlog" onChange={e => console.log(e.target.value)} />
    {/* TODO this search bar is going to filter issues based on input */}
    </nav>
    )
  }
  
  export default IssueSearch
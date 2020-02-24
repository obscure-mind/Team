import React from 'react'

class Footer extends React.Component {
  openTab = (e) => {
    this.props.verification(e.currentTarget.id);
  };

  render() {
    return (
      <footer className="footer">
        <ul className="filters">
          <li>
            <button
              id="All"
              className="all-task"
              onClick={this.openTab}
            >
              All
            </button>
          </li>
          <span>    </span>
          <li>
            <button
              id="Active"
              className="active-task"
              onClick={this.openTab}>
              Active

            </button>
          </li>
          <span>    </span>
          <li>
            <button
              id="Completed"
              className="completed-task"
              onClick={this.openTab}
            >
              Completed
            </button>
          </li>
        </ul>
        <button
          id="completed"
          className="clear-completed"
          onClick={this.props.deleteCompleteTasks}
        >
          Clear completed
            </button>
      </footer>
    )
  }
}

export { Footer }

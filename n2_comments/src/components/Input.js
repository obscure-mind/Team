import React from 'react'
import PropTypes from 'prop-types'

class Input extends React.Component {
  state = {
    text: ''
  }

  onBtnClickHandler = (e) => {
      e.preventDefault()
    const { text } = this.state
    this.props.onAddTodo({
      // id: +new Date(),
      checked: false,
      text: text
    })
    this.setState({ text: "" })
  }

  handleChange = e => {
    const { id, value } = e.currentTarget
    // элемент на котором в данный момент сработал обработчик
    this.setState({ [id]: value })
  }
  
  handleKeyPress = e => {
     if (e.key === 'Enter') {
      this.onBtnClickHandler(e);
     }
  }
  
  render() {
    const { text } = this.state;
    const allChecked = this.props.todos.every(todo => todo.checked);
    return (
      <form className="add">
        <header className="header">
          <h1>todos</h1>

          <input
            id="text"
            onChange={this.handleChange}
            className="new-todo add__text"
            placeholder="What needs to be done?"
            value={text}
            onKeyPress={this.handleKeyPress}  
          />
          
          {this.props.todos && !!this.props.todos.length && (
            <React.Fragment>
              <input
                id="toggle-all"
                type="checkbox"
                checked={allChecked}
                onChange={this.props.checkAll}
                className="toggle-all"
              />
              <label htmlFor="toggle-all"></label>
            </React.Fragment >
          )}
        </header>
      </form>
    )
  }
}

Input.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
}

export { Input }









{/* <button
            className="add__btn"
             onClick={this.onBtnClickHandler}
             disabled={!this.validate()}
          >
          </button> */}

          // validate = () => {
  //   const { text } = this.state
  //   if (text.trim()) {
  //     return true
  //   }
  //   return false
  // }
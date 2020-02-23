import React from 'react'
import PropTypes from 'prop-types'

class Article extends React.Component {
  state = {
    dblClick: true,
    text: this.props.data.text,
  }

  newChangeText = e => {
    const { value } = e.currentTarget;
    this.setState({ text: value })
  }
  onRightText = (e) => {
    if (e.key === 'Enter') {
      this.setState({ dblClick: true })
      this.props.saveText(this.props.data.id, this.state.text)
    }
  }

//логические операторы

  render() {
    const { text, id, checked } = this.props.data;

    return (
      <section className="main">
        <ul className="todo-list">
          <li className="completed">
            <div className="view article">
              <input type="checkbox" onChange={() => this.props.onCheck(id, !checked)} className="toggle check-todo add__checkrule" checked={checked} />
              {this.state.dblClick && <p onDoubleClick={() => this.setState({ dblClick: false })}
                className={`news__text ${checked ? 'checked' : ''}`} >
                {text}
              </p>
              }

              <button className="destroy" onClick={() => this.props.btnDelete(id)} ></button>
            </div>
            {!this.state.dblClick && <input className="edit" onChange={this.newChangeText} value={this.state.text} onKeyPress={this.onRightText} autoFocus />}
            
          </li>
        </ul>
      </section>
    )
  }
}

Article.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,

  }),
}

export { Article }

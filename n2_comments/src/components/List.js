import React from 'react'
import PropTypes from 'prop-types'
import { Article } from './Article'

class List extends React.Component {
  renderList = () => {
    const filters = {
      "All": item => item,
      "Completed": item => item.checked === true,
      "Active": item => item.checked === false
    };
   // console.log( filters[this.props.choiceTab] ); // filters["All" || "Active" || "Completed"] -> filters.All || filters.Active || Filters.Completed
    let newsTemplate = null;

    if (this.props.data.length) {
      
      newsTemplate = this.props.data
        .filter(filters[this.props.choiceTab])
        .map((item) => {
          return (

            <Article
              key={item.id}
              data={item}
              onCheck={this.props.onCheckTodo}
              saveText={this.props.saveText}
              btnDelete={this.props.btnDelete}

            />)
        });
    }

    return newsTemplate
  }
  
  render() {
    const { data } = this.props;
    let template = null;
    template = this.props.data
        .filter(item => item.checked === false)
    return (
      <div className="list">
        {this.renderList()}
        {data.length ? (
          <span className={'news__count todo-count'}>
            <strong>{template.length}</strong> <span>items left</span>
          </span>
        ) : null}
      </div>
    )
  }
}

List.propTypes = {
  data: PropTypes.array.isRequired,
}

export { List }


// const a = [1,2,3,4]; // [1,2,3,4]
      // const b = a.filter(el => el > 2); // b = [3,4] | a = [1,2,3,4]
      // const c = b.map(el => el * 2) // c = [6, 8] | b = [3,4] | a = [1,2,3,4]
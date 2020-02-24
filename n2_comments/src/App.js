import React from 'react';
import { Input } from './components/Input';
import { List } from './components/List';
import { Footer } from './components/Footer';
import axios from 'axios';

import './App.css';

class App extends React.Component {
    state = {
        todos: [],   //основной массив
        completeArray: [],
        allArray: [],
        choiceTab: 'All'
    };

    componentDidMount() {
        axios.get('http://localhost:1234/todos/').then(response => {
            const todos = response.data.map(todo => ({  //Добавляются таски в массив
                text: todo.text,
                checked: todo.checked,
                id: todo._id
            }));
            this.setState({
                // short assign value { value } => { value: value }
                todos
            });
        });
    }

    btnDelete = id => {
        axios.delete('http://localhost:1234/todos/' + id).then(() => {
            this.setState(
                prevState => ({ todos: prevState.todos.filter(item => item.id !== id) }),
                () => {  // Фильтр пробегается по массиву и возвращает все у кого айди другой

                    alert('Deleted task');
                }
            );
        });
    };

    handleAddTodo = data => {
        axios.post('http://localhost:1234/todos/', data).then(response => {
            const todo = {
                text: response.data.text,
                checked: response.data.checked,
                id: response.data._id
            };
            this.setState(prevState => ({ todos: [...prevState.todos, todo] }));
            //оператор расширения или spread
        });
    };
    
    changeBox = (id, checked) => {
        axios.patch('http://localhost:1234/todos/' + id, {
                checked
            })
            .then(() => {
                this.setState(prevState => ({
                    todos: prevState.todos.map(item => {
                        if (item.id === id) {
                            return { ...item, checked: !item.checked };
                        }
                        return item;
                    })
                }));
            });
    };

    saveText = (id, value) => {
        axios
            .patch('http://localhost:1234/todos/' + id, {
                text: value
            })
            .then(() => {
                this.setState(prevState => ({
                    todos: prevState.todos.map(item => {
                        if (item.id === id) {
                            return { ...item, text: value };
                        }
                        return item;
                    })
                }));
            });
    };

    checkAll = () => {
        const allChecked = this.state.todos.every(todo => todo.checked);
        axios
            .patch('http://localhost:1234/todos/', {
                checked: !allChecked
            })
            .then(() => {
                this.setState(prevState => {
                    return { todos: prevState.todos.map(todo => ({ ...todo, checked: !allChecked })) };
                });
            });

    };
    //prevState помогает получить именно тот который необходим, избегая проблемм с асинхронностью

    deleteCompleteTasks = () => {
        axios.delete('http://localhost:1234/todos/').then(() => {
            let newTodos = this.state.todos.filter(item => {
                return !item.checked;
            });
            this.setState({ todos: newTodos });
        });
    };

    verification = choiceTab => {
        this.setState({ choiceTab: choiceTab });
    };

    render() {
        // destructuring
        const { todos } = this.state;

        return (
            <React.Fragment>
                <Input onAddTodo={this.handleAddTodo} checkAll={this.checkAll} todos={todos} />
                {(!!todos.length) && (
                    <List
                        data={todos}
                        onCheckTodo={this.changeBox}
                        saveText={this.saveText}
                        btnDelete={this.btnDelete}
                        choiceTab={this.state.choiceTab}
                    />
                )}
                {(!!todos.length) && (
                    <Footer
                        todos={todos}
                        allArray={this.allArray}
                        deleteCompleteTasks={this.deleteCompleteTasks}
                        seeAllTask={this.seeAllTask}
                        verification={this.verification}
                    />
                )}
            </React.Fragment>
        );
    }
}

export default App;

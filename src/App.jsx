import React from "react";
import { v4 as uuidv4 } from 'uuid'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            todos: []
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state.task);
        this.setState({ task: '', 
        todos: [...this.state.todos, { id: uuidv4(), task: this.state.task }] })
    }

    componentDidMount() {
        setTimeout(() => {
        this.setState({ task: '', 
        todos: [
            ...this.state.todos, 
            { id: uuidv4(), task: 'initial loaded task 1'},
            { id: uuidv4(), task: 'initial loaded task 2'},
            { id: uuidv4(), task: 'initial loaded task 3'},
        ] })
        }, 2000)
    }

    render() {
        return (
            <main className="container">
                <section className="row justify-content-center mt-5">
                    <div className="col md-7">
                        <form className="form-group">
                            <label>Task:</label>
                            <input value={this.state.task}
                                onChange={e => this.setState({ task: e.target.value })}
                                className="form-control" />
                            <button onClick={e => this.handleSubmit(e)}
                                className="btn btn-primary mt-3">
                                Add Todo Task
                            </button>
                        </form>
                    </div>
                </section>
                <section className="row justify-content-center mt-3">
                    <div className="col-md-6">
                        <ul className="list-group">
                            {this.state.todos.map(todo => (
                                <li className="list-group-item"
                                    key={`todo-task-${todo.id}`}>{todo.task}</li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
        )
    }
}

export default App
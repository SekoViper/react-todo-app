import { React, Component } from 'react';
import { PropTypes } from 'prop-types';

import { FaPlusCircle } from 'react-icons/fa';

class InputTodo extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const { addTodoProps } = this.props;
    if (title.trim()) {
      addTodoProps(title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please enter a Todo');
    }
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={title}
          name="title"
          onChange={this.onChange}
        />
        <button type="submit" className="input-submit">
          <FaPlusCircle />
        </button>
      </form>
    );
  }
}

InputTodo.defaultProps = { addTodoProps: null };

InputTodo.propTypes = { addTodoProps: PropTypes.func };

export default InputTodo;

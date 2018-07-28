import React, { Component} from 'react';
import PropTypes from 'prop-types';

class AddBoardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'title',
      comment: 'comment',
    };
  }

  handleTitleInput = title => {
    this.setState({ title });
  }

  handleCommentInput = comment => {
    this.setState({ comment });
  }

  handleSubmit = e => {
    e.preventDefault();

    const newComment = {
      title: this.state.title,
      comment: this.state.comment,
    };
    this.props.onSubmit(newComment);    
  }

  render(){
    return(
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>title:</label> 
        <input 
          type="text"
          name="title"
          value={this.state.title}
          onChange={e => this.handleTitleInput(e.target.value)}
        />
          
        <label>comment:</label>
        <input
          type="text"
          name="comment"
          value={this.state.comment} 
          onChange={e => this.handleCommentInput(e.target.value)}
        />
        
        <button type="submit">Add</button>
      </form>
    );
  }
}

AddBoardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default AddBoardForm;
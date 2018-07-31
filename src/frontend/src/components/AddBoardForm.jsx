import React, { Component} from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FormControl, TextField } from '@material-ui/core';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  }
});

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
    const { classes } = this.props;
    return( 
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <FormControl>
          <TextField
            name="title"
            label="title"
            placeholder="title"
            className={classes.textField}
            onChange={e => this.handleTitleInput(e.target.value)}
          />
        </FormControl>

        <FormControl>
        <TextField
          name="comment"
          label="comment"
          className={classes.textField}
          placeholder="comment"
          onChange={e => this.handleCommentInput(e.target.value)}
        />
        </FormControl>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          className={classes.button}
          >
          Add
          </Button>
      </form>
    );
  }
}

AddBoardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default withStyles(styles)(AddBoardForm);
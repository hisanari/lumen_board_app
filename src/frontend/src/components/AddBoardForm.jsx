import React, { Component} from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { FormControl, TextField, Typography } from '@material-ui/core';


const styles = theme => ({
  title: {
    padding: theme.spacing.unit,
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  formStyle: {
    padding: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
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
      <div>
        <Card>
          <Typography
            variant="title"
            component="h3"
            className={classes.title}
            >
            Say anything
          </Typography>
          <form 
            onSubmit={(e) => this.handleSubmit(e)}
            className={classes.formStyle}>

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
        </Card>
      </div>
    );
  }
}

AddBoardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default withStyles(styles)(AddBoardForm);
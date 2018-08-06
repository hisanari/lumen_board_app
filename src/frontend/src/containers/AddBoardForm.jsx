import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';


import { FormControl, TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';

const ENDPOINT = "http://localhost:8080/api/v1/";

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

const AddBoardForm = props => {
    const { classes } = props;
    return(
      <div>
        <Card>
          <Typography
            variant="title"
            component="h3"
            className={classes.title}>
            Say anything
          </Typography>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              props.onSubmit(props.title, props.comment)
            }}
            className={classes.formStyle}>

            <FormControl>
              <TextField
                name="title"
                label="title"
                placeholder="title"
                value={props.title}
                className={classes.textField}
                onChange={(e) => {
                  e.preventDefault();
                  props.onTitleChange(e.target.value);
                }}
              />
            </FormControl>

            <FormControl>
            <TextField
              name="comment"
              label="comment"
              className={classes.textField}
              placeholder="comment"
              value={props.comment}
              onChange={(e) => {
                e.preventDefault();
                props.onCommentChange(e.target.value);
              }}
            />
            </FormControl>

            <Tooltip title="Add">
              <Button
                type="submit"
                color="primary"
                variant="fab"
                className={classes.button}>
                  <AddIcon />
                </Button>
              </Tooltip>
          </form>
        </Card>
      </div>
    );
}

AddBoardForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onCommentChange: PropTypes.func.isRequired,
}
// ビューの表示に必要なプロップス
const boardStateToProps = state => ({
  title: state.title,
  comment: state.comment,
});

// アクションを発行に必要なプロップス
const boardDispatchToProps = dispatch => ({
  onTitleChange: title => dispatch({ type: 'CHANGE_TITLE', title }),
  onCommentChange: comment => dispatch({ type: 'CHANGE_COMMENT', comment}),
  onSubmit: (title, comment) => {
    axios.post(ENDPOINT + 'createBoard', {
      title: title,
      comment: comment,
    }).then((result) => {
      dispatch({ type: 'CREATE_BOARD', result});
    });
  }
});


const ConnectedAddBoardForm = connect(boardStateToProps, boardDispatchToProps)(AddBoardForm);


export default withStyles(styles)(ConnectedAddBoardForm);
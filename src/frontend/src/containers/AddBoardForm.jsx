import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import { FormControl, TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';

import { setTitle, setComment, createBoard } from '../actions';


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
  },
});

const AddBoardForm = (props) => {
  const { title, comment, classes } = props;
  return (
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
          onSubmit={(e) => {
            e.preventDefault();
            props.createBoard();
            props.setTitle('');
            props.setComment('');
          }}
          className={classes.formStyle}
        >

          <FormControl>
            <TextField
              name="title"
              label="title"
              placeholder="title"
              value={title}
              className={classes.textField}
              onChange={(e) => {
                e.preventDefault();
                props.setTitle(e.target.value);
              }}
            />
          </FormControl>

          <FormControl>
            <TextField
              name="comment"
              label="comment"
              className={classes.textField}
              placeholder="comment"
              value={comment}
              onChange={(e) => {
                e.preventDefault();
                props.setComment(e.target.value);
              }}
            />
          </FormControl>
          <Tooltip title="Add">
            <Button
              type="submit"
              color="primary"
              variant="fab"
              className={classes.button}
            >
              <AddIcon />
            </Button>
          </Tooltip>
        </form>
      </Card>
    </div>
  );
};

AddBoardForm.propTypes = {
  title: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  createBoard: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
  setComment: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};
// ビューの表示に必要なプロップス
const mapStateToProps = state => ({
  title: state.title,
  comment: state.comment,
});

const ConnectedAddBoardForm = connect(
  mapStateToProps,
  { setTitle, setComment, createBoard },
)(AddBoardForm);


export default withStyles(styles)(ConnectedAddBoardForm);

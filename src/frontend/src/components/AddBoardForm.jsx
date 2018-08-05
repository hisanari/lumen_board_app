import React from 'react';
import PropTypes from 'prop-types';

import { FormControl, TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';


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
            onSubmit={(e) => props.onSubmit(e)}
            className={classes.formStyle}>

            <FormControl>
              <TextField
                name="title"
                label="title"
                placeholder="title"
                className={classes.textField}
                onChange={e => props.onTitleChange(e.target.value)}
              />
            </FormControl>

            <FormControl>
            <TextField
              name="comment"
              label="comment"
              className={classes.textField}
              placeholder="comment"
              onChange={e => props.onCommentChange(e.target.value)}
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
  onSubmit: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onCommentChange: PropTypes.func.isRequired,
}

export default withStyles(styles)(AddBoardForm);
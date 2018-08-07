import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import BoardContent from './BoardContent';
import DeleteBoard from './DeleteBoard';

const styles = theme => ({
  cardStyle: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  }
});

const BoardResult = props => {
  const { classes } = props;
  return(
    props.results.map((result) => (
      <div key={result.id}>
        <Card className={classes.cardStyle}>
          <BoardContent result={result}/>
          <DeleteBoard id={result.id} />
        </Card>
      </div>
    ))
  );
}

BoardResult.propTypes = {
  results : PropTypes.array.isRequired,
}

// ビューの表示に必要なプロップス
const boardStateToProps = state => ({
  results: state.board.results,
});

const ConnectedBoardResult = connect(boardStateToProps)(BoardResult);


export default withStyles(styles)(ConnectedBoardResult);
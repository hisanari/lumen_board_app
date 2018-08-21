import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import BoardContent from './BoardContent';
import DeleteBoard from './DeleteBoard';
import EditBoard from './EditBoard';

const styles = theme => ({
  cardStyle: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
});

const BoardResult = (props) => {
  const { results, classes } = props;
  return (
    results.map(result => (
      <div key={result.id}>
        <Card className={classes.cardStyle}>
          <BoardContent result={result} />
          <DeleteBoard id={result.id} />
          <EditBoard id={result.id} />
        </Card>
      </div>
    ))
  );
};

BoardResult.propTypes = {
  results: PropTypes.array.isRequired,
};

// ビューの表示に必要なプロップス
const mapStateToProps = state => ({
  // 最新のものが最初に来るように反転させて渡す
  results: state.board.results.reverse(),
});

const ConnectedBoardResult = connect(mapStateToProps)(BoardResult);


export default withStyles(styles)(ConnectedBoardResult);

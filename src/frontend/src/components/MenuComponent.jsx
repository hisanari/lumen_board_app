import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

const MenuComponent = () => (
  <div>
    <Button component={Link} to="/">
    Board
    </Button>
    <Button component={Link} to="/about">
    About
    </Button>
  </div>
);

export default MenuComponent;

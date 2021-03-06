import React, { Component } from "react";
import PropTypes from "prop-types";
import { GAME_WON } from "./game-states";

import classes from "./RestartButton.css";

class RestartButton extends Component {
  render() {
    return (
      <div className={classes.AppRestart}>
        <button onClick={this.props.onClick}>
          {this.props.gameState === GAME_WON ? "Play" : "Try"} again
        </button>
      </div>
    );
  }
}

RestartButton.propTypes = {
  gameState: PropTypes.symbol.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RestartButton;

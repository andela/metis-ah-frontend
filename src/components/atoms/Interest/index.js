import React, { Component } from 'react';

import './style.scss';

class Interest extends Component {
  state = {
    selected: false,
  }

  render() {
    const {
      click, children, index, ...props
    } = this.props;
    const { selected } = this.state;
    return (
      <button
        type="button"
        {...props}
        className={`interest ${selected ? 'selected' : 'not-selected'}`}
        onClick={() => {
          this.setState({
            selected: !selected,
          });
          click(index);
        }}
      >
        {children}
      </button>
    );
  }
}

export default Interest;

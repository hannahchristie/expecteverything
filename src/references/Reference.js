import React, { Component } from 'react';
import {
  Popover,
  PopoverBody,
} from 'mdbreact';

class Reference extends Component {
  render () {
    return (
      <span className="inline-popover">
        <Popover
          component="u"
          placement="top"
          popoverBody={this.props.link}
          className="text-underline">
                  <PopoverBody>
                  <p>{this.props.body}</p>
                  </PopoverBody>
        </Popover>
      </span>
    );
  }
}

export default Reference;
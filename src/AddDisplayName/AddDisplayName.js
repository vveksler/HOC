import React, { Component } from 'react';

/*
  Напишите простой HOC и укажите для него displayName
*/

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || 'Component';
}

export const withDisplayName = WrappedComponent => {
  class WithDisplayName extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithDisplayName.displayName = `HOC${getDisplayName(
    WrappedComponent
  )}`;

  return WithDisplayName;
};

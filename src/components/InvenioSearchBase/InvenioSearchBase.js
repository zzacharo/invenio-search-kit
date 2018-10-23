import React, { Component } from 'react';
import { createProvider } from 'react-redux';
import { configureStore, storeKey } from '../../store';
import { Base } from '../Base';

const Provider = createProvider(storeKey);

export class InvenioSearchBase extends Component {
  constructor(props) {
    super(props);
    this.store = configureStore({
      currentMessage: { message: 'Initial message' },
    });
  }

  render() {
    return (
      <Provider store={this.store}>
        <Base />
      </Provider>
    );
  }
}

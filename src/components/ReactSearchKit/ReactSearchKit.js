import React, { Component } from 'react';
import { createProvider } from 'react-redux';
import { configureStore, storeKey } from '../../store';
import 'semantic-ui-css/semantic.min.css';

const Provider = createProvider(storeKey);

export class ReactSearchKit extends Component {
  constructor(props) {
    super(props);
    this.store = configureStore({
      query: {},
      apiConfig: props.apiConfig,
    });
  }

  render() {
    return <Provider store={this.store}>{this.props.children}</Provider>;
  }
}

import React, { Component } from 'react';
import { render } from 'react-dom';

import { InvenioSearchBase } from '../../src';

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>invenio-search-kit Demo</h1>
        <InvenioSearchBase />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));

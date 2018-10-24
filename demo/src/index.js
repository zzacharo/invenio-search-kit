import React, { Component } from 'react';
import { render } from 'react-dom';

import { ReactSearchKit, SearchBar, ResultsList } from '../../src/components';
import { Grid, List, Segment } from 'semantic-ui-react';
class Demo extends Component {
  renderItem = row => {
    return (
      <Segment>
        <List.Item>{JSON.stringify(row.metadata.contributors)}</List.Item>
      </Segment>
    );
  };
  render() {
    return (
      <div>
        <h1>invenio-search-kit Demo</h1>
        <ReactSearchKit
          apiConfig={{
            url: 'https://videos.cern.ch/api/records',
          }}
        >
          <Grid>
            <Grid.Row>
              <SearchBar />
            </Grid.Row>
            <Grid.Row>
              <ResultsList renderItem={this.renderItem} />
            </Grid.Row>
          </Grid>
        </ReactSearchKit>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));

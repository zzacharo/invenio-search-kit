import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Segment } from 'semantic-ui-react';

export default class ResultsList extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.props.renderItem || this._renderItem;
    this.renderItem = this.renderItem.bind(this);
  }

  _renderItem = rowData => {
    return (
      <Segment>
        <List.Item>{JSON.stringify(rowData)}</List.Item>
      </Segment>
    );
  };

  renderData(data) {
    return data.map(row => {
      return this.renderItem(row);
    });
  }

  render() {
    const { data } = this.props;
    return <List>{this.renderData(data)}</List>;
  }
}

ResultsList.propTypes = {
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func,
};

ResultsList.defaultProps = {
  data: [],
};

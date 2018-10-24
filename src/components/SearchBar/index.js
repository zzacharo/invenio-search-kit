import { connect } from '../../store';
import { setQuery, executeQuery } from '../../state/actions';
import SearchBarComponent from './SearchBar';

const mapDispatchToProps = dispatch => ({
  onQueryChange: query => dispatch(setQuery(query)),
  onSearchExecute: query => dispatch(executeQuery(query)),
});

export const SearchBar = connect(
  state => ({
    currentQuery: state.query.currentQuery,
  }),
  mapDispatchToProps
)(SearchBarComponent);

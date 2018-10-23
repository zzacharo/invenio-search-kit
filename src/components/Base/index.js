import { connect } from '../../store';
import BaseComponent from './Base';
import { setMessage } from './state/actions';

const mapDispatchToProps = dispatch => ({
  setMessage: message => dispatch(setMessage(message)),
});

export const Base = connect(
  () => ({}),
  mapDispatchToProps
)(BaseComponent);

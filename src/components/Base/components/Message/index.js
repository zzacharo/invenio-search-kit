import { connect } from '../../../../store';
import MessageComnponent from './Message';

export const Message = connect(state => ({
  message: state.currentMessage.message,
}))(MessageComnponent);

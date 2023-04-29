import PropTypes from 'prop-types';

export const Notification = ({ text }) => <p>{text}</p>;

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};

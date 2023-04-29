import PropTypes from 'prop-types';
import { StatisticItem } from './StatisticItem.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <StatisticItem>
        <span>Good:</span>
        <span className="quantity">{good}</span>
      </StatisticItem>
      <StatisticItem>
        <span>Neutral:</span>
        <span className="quantity">{neutral}</span>
      </StatisticItem>
      <StatisticItem>
        <span>Bad:</span>
        <span className="quantity">{bad}</span>
      </StatisticItem>
      <StatisticItem>
        <span>Total:</span>
        <span className="quantity">{total}</span>
      </StatisticItem>
      <StatisticItem>
        <span>Positive Feedback:</span>
        <span className="quantity">{positivePercentage}%</span>
      </StatisticItem>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

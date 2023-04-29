import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { FeedBackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  // static propTypes = {
  //   title: PropTypes.string.isRequired,
  //   options: PropTypes.shape({
  //     good: PropTypes.number.isRequired,
  //     neutral: PropTypes.number.isRequired,
  //     bad: PropTypes.number.isRequired,
  //   }
  //   ).isRequired,
  //   onLeaveFeedback: PropTypes.func.isRequired,
  // };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedbackClick = nameBtn => {
    this.setState(prevState => ({ [nameBtn]: prevState[nameBtn] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    // const total = good + neutral + bad;
    // const positivePercentage = Math.round((good * 100) / total);

    return (
      <Layout>
        <Section title={'Please Leave feedback'}>
          <FeedBackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedbackClick}
          />
        </Section>

        <Section title={'Statistics'}>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification text="There is no feedback" />
          )}
        </Section>
        <GlobalStyle />
      </Layout>
    );
  }
}

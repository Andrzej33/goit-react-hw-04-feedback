
import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { FeedBackOptions } from './FeedbackOptions/FeedbackOptions';

export const App = () => {


 


 

  const [good,setGood] = useState(0)
  const [bad,setBad] = useState(0)
  const [neutral,setNeutral] = useState(0)

  const onLeaveFeedbackClick = nameBtn => {
    
    switch (nameBtn) {
     
      case 'good':
        setGood(prevState => prevState + 1)
        break;
    
         case 'bad':
        setBad(prevState => prevState + 1)
        break;
       
        case 'neutral':
        setNeutral(prevState => prevState + 1)
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };


    // const { good, neutral, bad } = this.state;
    // const total = good + neutral + bad;
    // const positivePercentage = Math.round((good * 100) / total);

    return (
      <Layout>
        <Section title={'Please Leave feedback'}>
          <FeedBackOptions
            options={Object.keys({ good, neutral, bad })}
            onLeaveFeedback={onLeaveFeedbackClick}
          />
        </Section>

        <Section title={'Statistics'}>
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification text="There is no feedback" />
          )}
        </Section>
        <GlobalStyle />
      </Layout>
    );
  
}

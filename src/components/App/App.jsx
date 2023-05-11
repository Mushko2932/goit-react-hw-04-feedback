import { useState } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { FeedbackContainer } from './App.styled';
import { GlobalStyle } from 'components/GlobalStyle';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveReviews = e => {
    switch (e) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () =>
    Math.round((good * 100) / countTotalFeedback());

  return (
    <FeedbackContainer>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({good, neutral, bad})}
          onLeaveFeedback={leaveReviews}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
      <GlobalStyle />
    </FeedbackContainer>
  );
};


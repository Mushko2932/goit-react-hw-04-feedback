import React from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveReviews = e => {
    this.setState({ [e]: this.state[e] + 1 });
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;
  countPositiveFeedbackPercentage = ({good}) =>
    Math.round((good * 100) / this.countTotalFeedback(this.state));

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          marginLeft: '20px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'start',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveReviews}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.state
            )}
          />
        </Section>
      </div>
    );
  }
}

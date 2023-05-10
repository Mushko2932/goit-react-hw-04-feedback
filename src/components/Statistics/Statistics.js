import React from "react";
import PropTypes from "prop-types";
import {
  StatisticsList,
  StatisticsListItem,
  StisticsName,
} from './Statistics.styled';
import { Notification } from "components/Notification/Notification";

export const Statistics = ({ good, neutral, bad, total = 0, positivePercentage = 0 }) => {
  return total ? (
    <StatisticsList>
      <StatisticsListItem>
        <StisticsName>Good:</StisticsName> {good}
      </StatisticsListItem>
      <StatisticsListItem>
        <StisticsName>Neutral:</StisticsName>
        {neutral}
      </StatisticsListItem>
      <StatisticsListItem>
        <StisticsName>Bad:</StisticsName>
        {bad}
      </StatisticsListItem>
      <StatisticsListItem>
        <StisticsName>Total:</StisticsName>
        {total}
      </StatisticsListItem>
      <StatisticsListItem>
        <StisticsName>Positive feedback:</StisticsName>
        {positivePercentage}%
      </StatisticsListItem>
    </StatisticsList>
  ) : (
    <Notification message="There is no feedback" />
  );
};

  
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

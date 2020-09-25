import Moment from "react-moment";

export const MonthDayYear = ({ date }) => (
	<Moment format="MMM Do YYYY">{date}</Moment>
);

export const DayTime = ({ date }) => (
	<Moment format="ddd HH:mm">{date}</Moment>
);

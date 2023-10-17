import { parseISO, formatDistanceToNow } from "date-fns";

// date-fns - better than momentjs
const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";

  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};

export default TimeAgo;

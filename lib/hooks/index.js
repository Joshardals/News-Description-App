export function timeAgo(timestamp) {
  // Input timestamp as a Date object
  const timestampDate = new Date(timestamp);

  // Current time
  const now = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = now - timestampDate;

  // Convert the time difference to minutes, hours, or days
  const minutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  // Choose the appropriate format based on the time difference
  if (days > 0) {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (hours > 0) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  }
}

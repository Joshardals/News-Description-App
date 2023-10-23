export function formatDateTime(originalDate) {
  // Parse the original date as a UTC date
  const parsedDate = new Date(originalDate);

  // Format the date and time based on UTC with consideration for DST
  const options = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };

  options.timeZone = 'UTC';

  const formattedDateTime = parsedDate.toLocaleString(undefined, options);

  return formattedDateTime;
}

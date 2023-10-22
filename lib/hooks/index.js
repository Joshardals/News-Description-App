export function formatDateTime(originalDate) {
    // Parse the original date
    const parsedDate = new Date(originalDate);

    // Format the date and time based on the user's system time zone
    const options = {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    };

    const formattedDateTime = new Intl.DateTimeFormat([], options).format(parsedDate);

    return formattedDateTime;
}

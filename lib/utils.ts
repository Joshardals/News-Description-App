import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// created by chatgpt
// export function formatDateString(dateString: string) {
//   // Create a Date object from the provided date and time string
//   const date = new Date(dateString);

//   // Format the date and time according to the system's locale and time zone
//   const formattedDateTime = new Intl.DateTimeFormat(undefined, {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//     hour: "numeric",
//     minute: "2-digit",
//     second: "2-digit",
//   }).format(date);

//   return formattedDateTime;
// }

// created by chatgpt
export function formatDateString(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString(undefined, options);

  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${time} - ${formattedDate}`;
}

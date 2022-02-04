export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-us", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

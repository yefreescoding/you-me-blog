export function slugify(text) {
  return text.toString().toLowerCase().replace(/\s+/g, "-");
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
  });
}

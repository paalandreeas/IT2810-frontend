export function apiDomain() {
  const production = process.env.NODE_ENV === "production";
  return production ? "anotherDoman" : "http://localhost:5000";
}

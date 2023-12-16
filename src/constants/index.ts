export const BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /^.{6,}$/, label: "Password must be at least 6 characters" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
  { re: /^.{6,32}$/, label: "6 to 32 characters" },
];

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      colors: {
        "bg-sidebar": "rgba(0,0,0,0.5)",
        "bg-sidebar-1": "#373A40",
        "bg-sidebar-2": "#CDE8E5",
        "bg-sidebar-3": "#EEF7FF",
        "bg-sidebar-4": "#EEF7FF",
        "bg-sidebar-5": "#7AB2B2",
      },
      fontSize: {
        mini: "0.4rem",
      },
    },
  },
  plugins: [],
};

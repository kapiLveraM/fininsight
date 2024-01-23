/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xsm: "10px",
        sm: "12px",
        base: "13px",
        md: "14px",
        lg: "15px",
        sxl: "16px",
        xl: "18px",
        "3xl": "32px",
      },
      colors: {
        rain_master: "#9ca4ab",
        light_blue: "#60a2f9",
        light_black: "#1f2c37",
        light_purple: "#7882ba",
        mount_etna: "#3d474d",
        blue_titemouse: "#4170ff",
        heavy_gray: "#83878b",
      },
      backgroundColor: {
        light_white: "#f8faff",
        tryn_blue: "#122a53",
        light_blue: "#60a2f9",
      },
    },
  },
  plugins: [],
};

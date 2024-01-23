/**
 * This is the configuration file for Tailwind CSS.
 * It allows you to customize various aspects of Tailwind CSS,
 * such as the fonts, colors, and spacing.
 */
/** @type {import('tailwindcss').Config} */
export default {
  // Specifies the files that Tailwind CSS should look for when building the
  // stylesheet. In this case, it will look for any files with the extensions
  // .js, .jsx, .ts, and .tsx in the src directory and its subdirectories.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Enables dark mode for Tailwind CSS. In this case, dark mode is enabled
  // when the "dark" class is added to the HTML element.
  darkMode: "class",

  // Configures the theme for Tailwind CSS. This includes settings for the
  // fonts, colors, spacing, and other visual aspects of the framework.
  theme: {
    // Configures the font families for Tailwind CSS. In this case, it sets
    // the Inter font family for the "inter" key and the Jost font family
    // for the "jost" key.
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      jost: ["Jost", "sans-serif"], // Ensure fonts with spaces have " " surrounding it.
    },
    // Allows you to extend the default configuration for Tailwind CSS.
    // In this case, there are no additional configurations.
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

  // Allows you to add plugins to Tailwind CSS. In this case, there are no
  // additional plugins.
  plugins: [],
};

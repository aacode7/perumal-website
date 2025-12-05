module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: "#6b0000",
          dark: "#4a0000",
          light: "#800000",
        },
        gold: {
          DEFAULT: "#d4af37",
          light: "#f1c40f",
          dark: "#b7950b",
        },
        sandal: {
          DEFAULT: "#fff7e0",
          dark: "#f3e5ab",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Noto Sans Telugu"', '"Noto Sans Devanagari"', 'serif'],
        sans: ['"Inter"', '"Noto Sans Telugu"', '"Noto Sans Devanagari"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};

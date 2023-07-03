/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chafie: {
          600: "#649C2F",
        },
      },
    },
  },
  plugins: [],
});


module.exports = {
  content: [
        // ...
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
  theme: {
    extend: {
       colors: {
        'chefie': '#649C2F',
         'bermuda': '#78dcca'
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [
      [require("daisyui")],
      require('flowbite/plugin')
    ]
}
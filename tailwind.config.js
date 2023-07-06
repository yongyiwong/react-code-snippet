module.exports = {
  purge: [],
  darkMode: 'media',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '500px',
      // => @media (min-width: 500px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1025px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primaryPurple: '#201547',
        primaryBlue: '#4C4581',
        primaryPink: '#EEC1BE',
        secondaryWarmGrey: '#E1DBD2',
        secondaryWarmDarkGrey: '#51504D',
        secondaryMidGrey: '#B0B0AF',
        secondaryCream: '#F9F8F2',
        secondaryKeyline: '#E1E1DF',
        neutralDarkGrey: '#A1A1A1',
        neutralGrey: '#E9E9EA',
        neutralMidGrey: '#F5F5F7',
        neutralLightGrey: '#FAFAFA',
        specialPistachio: '#CEDED7',
        specialSkyBlue: '#8DB1D6',
        specialDustyPink: '#C898BD',
        lightGreen: '#CEDED7',
        greyWhite: '#8b829b',
        lightRed: '#D22c33',
        errorRed: '#BE1313',
        failedRed: '#D22C33',
        darkGrey: '#E5E4E2',
        lightPurple: '#CECAD5',
      },
      fontFamily: {
        BigCaslon: ['"Big Caslon"', 'Arial', 'sans-serif'],
        SohneBuch: ['SoehneBuch', 'Arial', 'sans-serif'],
        SohneHalbfett: ['SoehneHalbfett', 'Arial', 'sans-serif'],
      },
      fontSize: {
        h1: '3.125rem',
        h2: '2.25rem',
        h3: '1.75rem',
        h4: '1.625rem',
        h5: '1.5rem',
        h6: '1.25rem',
        xl: '1.5rem',
        lg: '1.25rem',
        md: '1rem',
        sm: '0.875rem',
        xs: '0.75rem',
      },
      lineHeight: {
        h1: '3.75rem',
        h2: '2.7rem',
        h3: '2.1rem',
        h4: '1.95rem',
        h5: '1.8rem',
        h6: '1.4375rem',
        xl: '1.758rem',
        lg: '1.465rem',
        md: '1.5rem',
        sm: '1.25rem',
        xs: '1rem',
      },
      letterSpacing: {
        wide: '0.02em',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

export const parameters = {
  backgrounds: {
    default: "default",
    values: [
      {
        name: "default",
        value: "#E0E0E0",
      },
    ],
  },
  layout: "centered",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

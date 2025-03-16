import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '@context/AppContext'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;
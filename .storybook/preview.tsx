import type { Preview } from "@storybook/react";

import "../app/globals.scss";
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'] });

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
        <main className={montserrat.className}>
            <Story />
        </main>
    )
]
};

export default preview;

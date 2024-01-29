import type { Preview } from "@storybook/react";

import "../app/globals.scss";
import { Open_Sans, Bangers } from 'next/font/google';
const fontBody = Open_Sans({ 
  variable: '--font-body',
  subsets: ['latin']
});
const fontHeading = Bangers({ 
  variable: '--font-heading',
  subsets: ['latin'], 
  weight: "400" 
});

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
        <div className={`${fontBody.variable} ${fontHeading.variable}`}>
            <Story />
        </div>
    )
]
};

export default preview;

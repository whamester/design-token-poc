import '../src/ui/styles/global/index.css'
import { withThemesProvider } from 'themeprovider-storybook'
import { darkTheme, lightTheme } from '../src/ui/styles/global/themes'

import { MemoryRouter } from 'react-router-dom'

const themes = [
  {
    name: 'Light',
    ...lightTheme,
  },
  {
    name: 'Dark',
    ...darkTheme,
  },
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => <Story />,
  (Story) => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  ),
  withThemesProvider(themes),
]

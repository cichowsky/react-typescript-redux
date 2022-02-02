import React, { createContext, useContext, useMemo, useState, FC } from 'react';
/* There is not exactly typing of useContext hook, but we must type Context value */

/* Typing context value */
type Theme = 'dark' | 'light';

interface ITheme {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

/* Create context and context provider */
const ThemeContext = createContext<ITheme | null>(null); // we need to check if our context is not null (useTheme in this case)

// or set default value of context
// const ThemeContext = createContext<ITheme>({ theme: 'dark', setTheme: () => {} });

// or type asertion
// const ThemeContext = createContext<ITheme>({} as ITheme);

const ThemeProvider: FC = ({ children }) => {
  const [mode, setMode] = useState<Theme>('light');
  const contextValue = useMemo(() => ({ theme: mode, setTheme: setMode }), [mode, setMode]);

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

/* Create hook that ensure if context is set (useage of useContext) */
const useTheme = () => {
  const value = useContext(ThemeContext);
  if (!value?.theme) {
    throw new Error('Theme not available');
  }

  return value;
};

/* Useage */
const Component = () => {
  const { theme, setTheme } = useTheme();

  const styles = {
    backgroundColor: theme === 'dark' ? '#000' : '#fff',
  };

  return (
    <div style={styles}>
      <p>theme: {theme}</p>
      <button type="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Change theme
      </button>
    </div>
  );
};

// App component
export function App() {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
}

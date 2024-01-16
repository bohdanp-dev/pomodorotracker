import React, { createContext, useState, useEffect } from 'react';

// Define the context with a default theme value
const ThemeContext = createContext({
    theme: 'primary', // default to 'primary' theme
    setTheme: () => {}, // Placeholder for a function to change the theme
});

// The provider component that will wrap your main app or components
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('primary');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
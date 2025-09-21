import React from 'react';
import { useTheme } from '../contex/ThemeProvider';

export const ToggleThemeComponent = () => {
const {toggleTheme} = useTheme();
    return (
        <div>
            
            <button onClick={toggleTheme}>Cambiar theme</button>
        </div>
    );
};

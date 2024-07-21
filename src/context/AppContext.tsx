import { ReactNode, createContext, useState } from "react";

interface ContextValue {
    theme: string;
    changeTheme: () => void;
}

interface Props {
    children: ReactNode;
}

export const ThemeContext = createContext({} as ContextValue)

const AppContext = ({ children }: Props) => {
    const [theme, setTheme] = useState('light');
    const changeTheme = () => {
        setTheme(theme => theme == 'light' ? 'dark' : 'light');
    }
    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default AppContext;
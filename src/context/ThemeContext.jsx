import { createContext, useState, useEffect } from "react";

// 테마 컨텍스트 생성
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    // 다크 모드 토글 함수
    const toggleTheme = () => {
        setIsDarkMode((prev) => {
            const newMode = !prev;
            localStorage.setItem("theme", newMode ? "dark" : "light");
            return newMode;
        });
    };

    // 다크 모드 적용 (useEffect)
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

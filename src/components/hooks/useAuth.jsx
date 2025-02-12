import { useState, useEffect } from "react";

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("authToken"));

    useEffect(() => {
        const handleAuthChange = () => {
            setIsAuthenticated(!!localStorage.getItem("authToken"));
        };

        window.addEventListener("storage", handleAuthChange);
        return () => window.removeEventListener("storage", handleAuthChange);
    }, []);

    return { isAuthenticated };
};

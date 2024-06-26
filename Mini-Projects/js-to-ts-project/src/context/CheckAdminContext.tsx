import React, { createContext, useState, useContext, useEffect } from "react";
import { ContextProviderProps } from "@/models/models";

interface AdminContextType {
  isAdmin: boolean;
  loginAsAdmin: () => void;
  logout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const loginAsAdmin: () => void = () => {
    setIsAdmin(true);
    localStorage.setItem("isAdmin", "true");
  };

  const logout: () => void = () => {
    setIsAdmin(false);
    localStorage.removeItem("isAdmin");
  };

  useEffect(() => {
    const storedIsAdmin = localStorage.getItem("isAdmin") === "true";
    if (storedIsAdmin) {
      setIsAdmin(true);
    }
  }, []);

  return (
    <AdminContext.Provider value={{ isAdmin, loginAsAdmin, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
};

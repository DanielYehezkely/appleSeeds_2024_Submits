import {
  UserObj,
  addUserCall,
  deleteUserCallObj,
  getUsersCalls,
} from "../api/usersApi";
import { ContextProviderProps } from "@/models/models";
import React, { createContext, useState, useEffect, useContext } from "react";

interface FetchUserProps {
  usersCalls: UserObj[];
  isLoadingUsers: boolean;
  usersError: string | null;
  addUsersError: string | null;
  isAdding: boolean;
  addNewUserCall: (newCall: UserObj) => Promise<void>;
  deleteUserCall: (userId: string) => Promise<void>;
  deleteUsersError: string | null;
  isDeleting: boolean;
}

const FetchUsersContext = createContext<FetchUserProps | undefined>(undefined);

export const FetchUsersProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [usersCalls, setUsersCalls] = useState<UserObj[]>([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState<boolean>(true);
  const [usersError, setUsersError] = useState<string | null>(null);
  const [addUsersError, setAddUsersError] = useState<string | null>(null);
  const [deleteUsersError, setDeleteUsersError] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsersCalls = async () => {
      setIsLoadingUsers(true);
      setUsersError(null);
      try {
        const usersCallsData = await getUsersCalls();
        setUsersCalls(usersCallsData);
      } catch (err: any) {
        setUsersError(err.message);
      } finally {
        setIsLoadingUsers(false);
      }
    };

    fetchUsersCalls();
  }, []);

  const addNewUserCall = async (newCall: UserObj): Promise<void> => {
    setIsAdding(true);
    setAddUsersError(null);
    try {
      await addUserCall(newCall);
      const updatedUsersCalls = await getUsersCalls();
      setUsersCalls(updatedUsersCalls);
    } catch (error: any) {
      setAddUsersError(error.message);
    } finally {
      setIsAdding(false);
    }
  };

  const deleteUserCall = async (userId: string): Promise<void> => {
    setIsDeleting(true);
    setDeleteUsersError(null);
    try {
      await deleteUserCallObj(userId);
      setUsersCalls((prevCalls) =>
        prevCalls.filter((call) => call.id !== userId)
      );
    } catch (error: any) {
      setDeleteUsersError(error.message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <FetchUsersContext.Provider
      value={{
        usersCalls,
        isLoadingUsers,
        usersError,
        addUsersError,
        isAdding,
        addNewUserCall,
        deleteUserCall,
        deleteUsersError,
        isDeleting,
      }}
    >
      {children}
    </FetchUsersContext.Provider>
  );
};

export const useFetchUsers = (): FetchUserProps => {
  const context = useContext(FetchUsersContext);
  if (context === undefined) {
    throw new Error("useFetchUsers must be used within a FetchUsersProvider");
  }
  return context;
};

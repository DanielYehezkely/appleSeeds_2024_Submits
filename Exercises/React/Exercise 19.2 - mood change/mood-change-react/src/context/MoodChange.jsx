import { createContext, useState, useContext } from "react";

const MoodChangeContext = createContext();

export const MoodChangeProvider = ({ children }) => {

  const [mood, setMood] = useState('light');

  const handleMoodChange = () => {
    setMood(mood === 'light' ? 'dark' : 'light')
  }

  return <MoodChangeContext.Provider value={{mood, handleMoodChange}} >
    {children}
  </MoodChangeContext.Provider>
}

export const useMoodChangeContext = () => {
  return useContext(MoodChangeContext);
}
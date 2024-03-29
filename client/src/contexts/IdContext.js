import { createContext, useContext, useState } from 'react';

const IdContext = createContext();

export const IdProvider = ({ children }) => {
  const [selectedId, setSelectedId] = useState(null);

  const updateId = (id) => {
    setSelectedId(id);
  };

  return (
    <IdContext.Provider value={{ selectedId, updateId }}>
      {children}
    </IdContext.Provider>
  );
};

export const useId = () => {
  const context = useContext(IdContext);
  if (!context) {
    throw new Error('useId must be used within an IdProvider');
  }
  return context;
};
"use client";

import { createContext, useState, useContext, useRef } from "react";

const IncidentContext = createContext();

export function useIncident() {
  return useContext(IncidentContext);
}

export function IncidentProvider({ children }) {
  const [selectedIncident, setSelectedIncident] = useState(null);
  const videoRef = useRef(null);

  return (
    <IncidentContext.Provider value={{ selectedIncident, setSelectedIncident, videoRef }}>
      {children}
    </IncidentContext.Provider>
  );
}

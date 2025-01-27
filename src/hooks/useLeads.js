import { useState, useEffect } from "react";

const useLeads = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    // Fetch leads from API
    fetch("/api/leads")
      .then((response) => response.json())
      .then((data) => setLeads(data));
  }, []);

  return leads;
};

export default useLeads;

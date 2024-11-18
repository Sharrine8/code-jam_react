import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function MyEvent() {
  //   const location = useLocation();
  //   const formData = location.state?.formData;
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  if (!formData) {
    return <p>Create an event</p>;
  }

  return (
    <div>
      <h1>Form data test</h1>
      <p>{formData.name}</p>
      <p>{formData.location}</p>
      <p>{formData.date}</p>
    </div>
  );
}

export default MyEvent;

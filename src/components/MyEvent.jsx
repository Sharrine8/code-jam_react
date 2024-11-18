import { useLocation } from "react-router-dom";

function MyEvent() {
  const location = useLocation();
  const formData = location.state?.formData;

  if (!formData) {
    return <p>Create an event</p>;
  }

  return (
    <div>
      <h1>Form data test</h1>
      <p>{formData.name}</p>
    </div>
  );
}

export default MyEvent;

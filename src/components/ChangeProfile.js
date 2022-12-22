import { useState } from "react";

export const ChangeProfile = (props) => {
  const [newUsername, setNewUsername] = useState("");
  const handleChange = (event) => {
    setNewUsername(event.target.value);
  };
  return (
    <div>
      <input onChange={handleChange} />
      <button
        onClick={() => {
          props.setUsername(newUsername);
        }}
      >
        Change UserName
      </button>
    </div>
  );
};

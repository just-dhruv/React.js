import { useReducer } from "react";

export default function Form() {
  function reducer(state, action) {
    return {
      ...state,
      [action.name]: action.value,
    };
  }

  const [formData, dispatch] = useReducer(reducer, { username: "", email: "" });

  function handleChange(e) {
    dispatch({
      name: e.target.name,
      value: e.target.value,
    });
  }

  return (
    <form>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="email"
        value={formData.email}
        onChange={handleChange}
      />

      <p>
        {formData.username} - {formData.email}
      </p>
    </form>
  );
}

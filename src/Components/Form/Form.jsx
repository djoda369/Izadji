import { useState } from "react";
import "./styles.scss";

export default function Form() {
  const [formState, setFormState] = useState({
    name: "",
    surname: "",
    number: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    if (
      formState.name === "" ||
      formState.surname === "" ||
      formState.number === "" ||
      formState.password === ""
    ) {
      e.preventDefault();
      setError("Sva polja moraju biti popunjena!");
      return;
    }
  };

  return (
    <div className="gray">
      <div className="container">
        <div className="form">
          <div className="form__header">
            <span className="Title">Registracija</span>
            <p>
              Zaboravite na čekanje u redu i lutanje po gradu. Registrujte se
              odmah!
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="inputs">
              <div>
                <label>Ime</label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Prezime</label>
                <input
                  type="text"
                  name="surname"
                  value={formState.surname}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Broj telefona</label>
                <input
                  type="text"
                  name="number"
                  value={formState.number}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Lozinka</label>
                <input
                  type="password"
                  name="password"
                  value={formState.password}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit">Prosledi</button>
              <p className="error">{error}</p>
            </div>

            <div className="image">
              <img src="../../public/Lokali/form.jpg" alt="Forma" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

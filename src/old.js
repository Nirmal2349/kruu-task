import { useState } from "react";
import "./App.css";

function App() {
  const Store = [
    {
      id: "001",
      name: "Nirmal",
      degree: "BE",
    },
    {
      id: "002",
      name: "mano",
      degree: "Bsc",
    },
    {
      id: "003",
      name: "ashok",
      degree: "Dr",
    },
  ];

  // const [collection, setCollection] = useState(Store);

  // const [name,setName] = useState("")

  // const [degree, setDegree] = useState("");

  return (
    <div className="App">
      {/* <input
        value={name}
        placeholder="name"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        value={degree}
        placeholder="degree"
        onChange={(event) => setDegree(event.target.value)}
      />

      <button
        onClick={() => {
          console.log({ name, degree });
          const newCollection = { name, degree };

          setCollection([...collection, newCollection]);
          setName("");
          setDegree("");
        }}
      >
        add data
      </button> */}

      <div className="table-container">
        {/* {Store.map(({ name, degree, id }, index) => (
          <User
            key={index}
            name={name}
            degree={degree}
            editButton={
              <button
                onClick={() => {
                  // deleteMovie(id);
                }}
              >
                edit
              </button>
            }
            deleteButton={
              <button
                onClick={() => {
                  // deleteMovie(id);
                }}
              >
                delete
              </button>
            }
            id={id}
          />
        ))} */}

        {Store.map((data) => (
          <User id={data.id} name={data.name} degree={data.degree} />
        ))}
      </div>
    </div>
  );
}

function User({ name, degree, id }) {
  return (
    <div>
      <p>
        {" "}
        {id} {name} {degree}
        {/* {editButton}
        &nbsp;
        {deleteButton} */}
      </p>
    </div>
  );
}

export default App;

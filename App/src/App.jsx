import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [data, setdata] = useState([]);
  const [name, setname] = useState("");
  const [age, setage] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3000/getUsers")
      .then((response) => {
        console.log(response.data);
        setdata(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const SendData = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/createUser", { name, age })
      .then((responce) => {
        console.log(responce.data);
      })
      .catch((err) => {
        console.error("Error response:", err.response);
        console.error("Error message:", err.message);
      });
    setage("");
    setname("");
    console.log(name, age);
  };

  return (
    <>
      <main>
        <h1> Mern Learning Second Project</h1>

        <div>
          <label htmlFor="name"> Name</label>
          <input
            type="text"
            placeholder="Enter Your name..."
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="Age">Age</label>
          <input
            type="number"
            placeholder="Enter Your Age..."
            onChange={(e) => {
              setage(e.target.value);
            }}
          />
        </div>
        <button onClick={SendData}>Send data</button>

        {data.map((Data, i) => (
          <div key={i}>
            <h2>{Data.name}</h2>
            <h2>{Data.age}</h2>
          </div>
        ))}
      </main>
    </>
  );
}

export default App;

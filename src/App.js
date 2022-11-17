import { db } from "./db/index";
import "bootstrap/dist/css/bootstrap.min.css";
import DynamicInputbox from "./components/dynamicInputbox";
import Card from "react-bootstrap/Card";
import "./App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="page">
      <div className="container">
        <Card
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            alignItems: "center",
            padding: "5px",
          }}
        >
          <div className="header_cont">
            <h1 className="display-3">Dynamic Box</h1>
          </div>

          <div className="cont_style">
            <Form>
              {db.map((db, index) => (
                <DynamicInputbox
                  key={index}
                  name={db.name}
                  type={db.type}
                  label={db.label}
                  placeholder={db.placeholder}
                  options={db.options}
                />
              ))}
            </Form>
            <div className="submitBtn">
              <Button
                style={{
                  marginTop: "15px",
                  background: "#EB6440",
                  border: "0",
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;

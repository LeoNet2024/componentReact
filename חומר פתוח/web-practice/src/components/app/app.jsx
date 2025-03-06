import { useState } from "react";

import classes from "../app/app.module.css";

import Header from "../header/header";
import Footer from "../footer/footer";
import Accordion from "../accordion/accordion";
import Article from "../article/Article";

export default function App() {
  const colors = ["white", "green", "yellow", "blue"];
  const [random, setRandom] = useState(0);

  const [showText, setshowText] = useState(false);

  const [divColor, setdivColor] = useState("green");

  const [showPass, setShowPass] = useState("Password");

  const [textTarget, setTextTarget] = useState("");

  const [accoShow1, setAcooShow1] = useState(false);
  const [accoShow2, setAcooShow2] = useState(false);

  const [count, setCount] = useState(0);
  let btnStyle = { backgroundColor: colors[random] };

  const [theme, setTheme] = useState("white");

  function handleClick() {
    let num = Math.floor(Math.random() * colors.length);
    setRandom(num);
  }

  return (
    <main>
      <Header />
      <div className={theme === "white" ? classes.app : classes.drakTheme}>
        <button
          onClick={(prev) =>
            setTheme((prev) => (prev === "white" ? "dark" : "white"))
          }
        >
          Change Theme
        </button>
        <div>
          <button onClick={handleClick}>Click here</button>
        </div>
        <button onClick={(prev) => setCount((prev) => prev + 1)}>+</button>
        <button onClick={(prev) => setCount((prev) => Math.max(prev - 1, 0))}>
          -
        </button>
        <button onClick={() => setCount(0)}>delete result</button>
        <p>{count}</p>

        <div>
          <button onClick={(prev) => setshowText((prev) => !prev)}>
            Show detailes
          </button>
          {showText && <p>Hello world</p>}
        </div>

        <div
          style={{
            border: "3px solid green",
            padding: "10rem",
            backgroundColor: divColor,
          }}
        >
          <button
            style={
              divColor === "green" ? { backgroundColor: "grey" } : undefined
            }
            onClick={() => setdivColor("green")}
          >
            green
          </button>
          <button
            style={
              divColor === "blue" ? { backgroundColor: "grey" } : undefined
            }
            onClick={() => setdivColor("blue")}
          >
            blue
          </button>
          <button
            style={divColor === "red" ? { backgroundColor: "grey" } : undefined}
            onClick={() => setdivColor("red")}
          >
            red
          </button>
        </div>

        <div>
          <p>Password exerice </p>
          <input type={showPass} name="" id="" />
          <button
            onClick={(prev) =>
              setShowPass((prev) => (prev === "password" ? "type" : "password"))
            }
          >
            Show Password
          </button>
        </div>

        <div>
          <p>Accordion Practice:</p>
          <Accordion func={setAcooShow1}>extend para 1:</Accordion>
          {accoShow1 && <p>deatails for para1 </p>}
          <Accordion func={setAcooShow2}>extend para 2:</Accordion>
          {accoShow2 && <p>deatails for para2 </p>}
        </div>

        <div>
          <input
            placeholder="Enter Name"
            onChange={(e) => setTextTarget(e.target.value)}
          />
          <p>{textTarget}</p>
        </div>

        <Article text="text 1" />
        <Article text="text 2" />
        <Article text="text 3" />
      </div>
      <Footer />
    </main>
  );
}

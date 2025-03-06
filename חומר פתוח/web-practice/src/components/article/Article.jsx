import { useState } from "react";
import classes from "../article/article.module.css";

export default function Article(props) {
  console.log(typeof props);
  const [showElem, setShowElem] = useState(false);
  return (
    <div className={classes.article}>
      {showElem && <p>{props.text}</p>}
      <div>
        <button onClick={(prev) => setShowElem((prev) => !prev)}>Open</button>
        {showElem && <button>Close</button>}
      </div>
      {showElem && <p>Lorem ipsum dolor sit amet consectetur</p>}
    </div>
  );
}

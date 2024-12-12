// IN <= nothing
// OUT => return header JSX component
import "./header.css";

export default function Header() {
  return (
    <div className="headerClass">
      <header>
        <button>About me</button>
        <button>more books</button>
      </header>
      <h1>Book List By Picturs </h1>
    </div>
  );
}

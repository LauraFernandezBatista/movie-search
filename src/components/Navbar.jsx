import { Link, NavLink } from "react-router-dom";

export default function Navbar(){
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-10">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">🎬 MovieSearch</Link>
      </div>
      <div className="flex-none gap-2">
        <NavLink to="/favorites" className={({isActive}) => "btn btn-ghost" + (isActive ? " btn-active" : "")}>Favoritos</NavLink>
      </div>
    </div>
  );
}

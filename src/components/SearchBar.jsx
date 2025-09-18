import { useState } from "react";

export default function SearchBar({ onSearch }){
  const [q, setQ] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (q.trim().length === 0) return;
    onSearch(q.trim());
  };

  return (
    <form onSubmit={submit} className="flex gap-2 mb-4">
      <input
        className="input input-bordered w-full"
        placeholder="Busca por título..."
        value={q}
        onChange={(e)=>setQ(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">Buscar</button>
    </form>
  );
}

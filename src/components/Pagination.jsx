// components/Pagination.jsx
export default function Pagination({ page, total, pageSize=10, onPage }){
  const totalPages = Math.max(1, Math.ceil((Number(total)||0)/pageSize));
  const prev = () => onPage(Math.max(1, page-1));
  const next = () => onPage(Math.min(totalPages, page+1));
  return (
    <div className="join mt-4">
      <button className="join-item btn" onClick={prev} disabled={page<=1}>«</button>
      <button className="join-item btn">Página {page}/{totalPages}</button>
      <button className="join-item btn" onClick={next} disabled={page>=totalPages}>»</button>
    </div>
  );
}

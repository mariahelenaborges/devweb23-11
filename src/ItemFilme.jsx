
function ItemFilme({ filme }) {
  return (
    <div className="filme">
      <h2>{filme.nome}</h2>
      <p>ID: {filme.id}</p>
    </div>
  );
}

export default ItemFilme;

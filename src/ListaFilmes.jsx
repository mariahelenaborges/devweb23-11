
import ItemFilme from './ItemFilme';

function ListaFilmes({ filmes }) {
  return (
    <div>
      {filmes.map((filme) => (
        <ItemFilme key={filme.id} filme={filme} />
      ))}
    </div>
  );
}

export default ListaFilmes;

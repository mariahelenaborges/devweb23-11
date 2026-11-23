
import { useState, useEffect } from 'react';
import ListaFilmes from './ListaFilmes';
import './App.css';

function App() {
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await fetch(
          'http://localhost:3000/api/filmes'
        );

        if (!resposta.ok) {
          throw new Error('Erro ao consultar os filmes');
        }

        const dados = await resposta.json();

        setFilmes(dados);
      } catch (erro) {
        setErro(erro.message);
      } finally {
        setCarregando(false);
      }
    }

    buscarFilmes();
  }, []);

  return (
    <div className="container">
      <h1>Lista de Filmes</h1>

      {carregando && <p>Carregando filmes...</p>}

      {erro && <p>{erro}</p>}

      {!carregando && !erro && filmes.length === 0 && (
        <p>Nenhum filme encontrado.</p>
      )}

      {!carregando && !erro && filmes.length > 0 && (
        <ListaFilmes filmes={filmes} />
      )}
    </div>
  );
}

export default App;

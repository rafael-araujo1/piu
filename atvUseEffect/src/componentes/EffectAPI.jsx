import { useState, useEffect } from 'react';
import "./EffectAPI.css"

export default function EffectAPI() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carregamento

  useEffect(() => {
    // Usamos uma função assíncrona dentro do useEffect
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); //fecth faz uma requisição HTTP utilizando o método GET
        const data = await response.json(); //await faz com que a requisição aguarde os dados chegarem. O método json converte os dados para json
        setUsuarios(data); // Atualiza o estado com os dados recebidos
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    }

    fetchUsuarios();
  }, []); // O array vazio garante que o efeito execute apenas uma vez

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <table className="nomes">
          <tr>
            <th>Nomes</th>
          </tr>
          {usuarios.map(usuario => (
          <tr key={usuario.id}>{usuario.name}</tr>
          ))}
      </table>
      <table className="usernames">
          <tr>
            <th>Usernames</th>
          </tr>
          {usuarios.map(usuario => (
          <tr key={usuario.id}>{usuario.username}</tr>
          ))}
      </table>
      <table className="cidades">
          <tr>
            <th>Cidades</th>
          </tr>
          {usuarios.map(usuario => (
          <tr key={usuario.id}>{usuario.address.city}</tr>
          ))}
      </table>
    </div>
  );
}
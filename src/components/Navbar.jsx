import { Link } from 'react-router-dom';

export default function Navbar() {
  // Definindo a função corretamente dentro do componente
  function chamaMenu(arg1, arg2) {
    const menu = document.querySelector('.introducao');
    if (menu.style.display === 'none') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Sistema Solar Interativo</Link>
      <button className="como-usar" onClick={() => chamaMenu()}>Como Usar?</button>
    </nav>
  );
}

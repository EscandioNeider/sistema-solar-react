import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Sistema Solar Interativo</Link>
    </nav>
  );
}
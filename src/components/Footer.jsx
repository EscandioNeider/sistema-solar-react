import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Sistema Solar Interativo</p>
        <p>Desenvolvido com React e Vite por: EscandioNeider</p>
        </div>
    </footer>
  );
}
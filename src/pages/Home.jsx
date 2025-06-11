import { useState } from 'react';
import './Home.css';
import MercurioImg from '@assets/mercurio.png';
import VenusImg from '@assets/venus.png';
import TerraImg from '@assets/terra.png';
import MarteImg from '@assets/marte.png';
import JupiterImg from '@assets/jupiter.png';
import SaturnoImg from '@assets/saturno.png';
import UranoImg from '@assets/urano.png';
import NetunoImg from '@assets/netuno.png';

const planetas = [
  { nome: 'Mercúrio', classe: 'mercurio', img: MercurioImg, info: 'O menor planeta do sistema solar e o mais próximo do Sol.' },
  { nome: 'Vênus', classe: 'venus', img: VenusImg, info: 'Conhecido como estrela d’alva, é o planeta mais quente.' },
  { nome: 'Terra', classe: 'terra', img: TerraImg, info: 'Nosso lar, o único planeta conhecido com vida.' },
  { nome: 'Marte', classe: 'marte', img: MarteImg, info: 'Chamado de planeta vermelho por causa do óxido de ferro.' },
  { nome: 'Júpiter', classe: 'jupiter', img: JupiterImg, info: 'Maior planeta do sistema solar, com uma grande mancha vermelha.' },
  { nome: 'Saturno', classe: 'saturno', img: SaturnoImg, info: 'Famoso por seus anéis visíveis.' },
  { nome: 'Urano', classe: 'urano', img: UranoImg, info: 'Gira de lado e tem um tom azul esverdeado.' },
  { nome: 'Netuno', classe: 'netuno', img: NetunoImg, info: 'Conhecido pelos ventos mais rápidos do sistema solar.' }
];

export default function Home() {
  const [planetaAtivo, setPlanetaAtivo] = useState(null);

  return (
    <div className="container-sistema-solar">
      <div className="introducao">
        <h2>Explore o Sistema Solar !</h2>
        <p>
          Passe o mouse sobre os planetas quando eles estiverem aqui em cima para descobrir curiosidades fascinantes 
          sobre cada um deles. 
          <br />
        </p>
      </div>
      
      <div className="sistema-solar">
        <div className="sol"></div>

        {planetas.map((p) => (
          <div
            key={p.classe}
            className={`orbita orbita-${p.classe} ${planetaAtivo === p.classe ? 'pausado' : ''}`}
          >
            <div
              className={`planeta ${p.classe}`}
              onMouseEnter={() => setPlanetaAtivo(p.classe)}
              onMouseLeave={() => setPlanetaAtivo(null)}
            >
              <img src={p.img} alt={p.nome} />
              {planetaAtivo === p.classe && (
                <div className="info-planeta">{p.info}</div>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
import { useState } from 'react';
import {
  BarFill,
  HPBarWrapper,
  HPContainer,
  HPControls,
  HPLabel,
} from './style';

type StatusBarProps = {
  max: number;
  tipo: 'hp' | 'sanidade' | 'esforço';
};

function StatusBar({ max, tipo }: StatusBarProps) {
  const [current, setCurrent] = useState(max);

  const aumentar = () => {
    if (current < max) setCurrent(current + 1);
  };

  const diminuir = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const porcentagem = (current / max) * 100;

  return (
    <HPContainer>
      <HPLabel>
        {current}/{max}
      </HPLabel>
      <HPBarWrapper>
        <BarFill $tipo={tipo} style={{ width: `${porcentagem}%` }} />
      </HPBarWrapper>
      <HPControls>
        <button onClick={diminuir}>⬇️</button>
        <button onClick={aumentar}>⬆️</button>
      </HPControls>
    </HPContainer>
  );
}

export default StatusBar;

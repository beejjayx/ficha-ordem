import { useState } from "react";
import {
  BarFill,
  HPBarWrapper,
  HPContainer,
  HPControls,
  HPLabel,
  MaxInput,
  MaxSpan,
} from "./style";

type StatusBarProps = {
  initialMax: number;
  tipo: "hp" | "sanidade" | "esforço";
};

function StatusBar({ initialMax, tipo }: StatusBarProps) {
  const [max, setMax] = useState(initialMax);
  const [current, setCurrent] = useState(initialMax);
  const [editando, setEditando] = useState(false);
  const [tempMax, setTempMax] = useState(max);

  const aumentar = () => {
    if (current < max) setCurrent(current + 1);
  };

  const diminuir = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleMaxClick = () => {
    setTempMax(max);
    setEditando(true);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const novo = parseInt(e.target.value, 10);
    if (!isNaN(novo)) setTempMax(novo);
  };

  const handleMaxBlur = () => {
    setMax(tempMax);
    if (current > tempMax) setCurrent(tempMax);
    setEditando(false);
  };

  const porcentagem = (current / max) * 100;

  return (
    <HPContainer>
      <HPLabel>
        {current}/
        {editando ? (
          <MaxInput
            type="number"
            value={tempMax}
            onChange={handleMaxChange}
            onBlur={handleMaxBlur}
            autoFocus
          />
        ) : (
          <MaxSpan onClick={handleMaxClick}>{max}</MaxSpan>
        )}
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

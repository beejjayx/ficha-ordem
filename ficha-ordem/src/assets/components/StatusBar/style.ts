import styled from "styled-components";

export const HPContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HPLabel = styled.div`
  font-size: 1.2rem;
`;

export const MaxSpan = styled.span`
  cursor: pointer;
  margin-left: 4px;
  font-weight: bold;
`;

export const MaxInput = styled.input`
  width: 50px;
  font-size: inherit;
  text-align: center;
  margin-left: 4px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  -moz-appearance: textfield;
`;

export const HPBarWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  height: 20px;
  background-color: #ddd;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

export const BarFill = styled.div<{ $tipo: string }>`
  height: 100%;
  transition: width 0.3s ease;
  background-color: ${({ $tipo }) =>
    $tipo === "hp" ? "#ff4d4d" : $tipo === "sanidade" ? "#4d79ff" : "#4dff88"};
`;

export const HPControls = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    padding: 0.3rem 0.6rem;
    font-size: 1rem;
    cursor: pointer;
  }
`;

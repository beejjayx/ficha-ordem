import styled from 'styled-components';

export const HPContainer = styled.div`
  width: 250px;
  margin:  auto;
  text-align: center;
`;

export const HPLabel = styled.div`
  font-weight: bold;
`;

export const HPBarWrapper = styled.div`
  width: 100%;
  height: 20px;
  background-color: #ddd;
  border-radius: 10px;
  overflow: hidden;
`;

export const BarFill = styled.div<{ $tipo: 'hp' | 'sanidade' | 'esforço' }>`
  height: 100%;
  background-color: #e74c3c;
  transition: width 0.3s ease;
  background-color: ${({ $tipo }) =>
    $tipo === 'hp'
      ? '#e74c3c'
      : $tipo === 'sanidade'
        ? '#3498db'
        : '#9b59b6'};  
`

export const HPControls = styled.div`
  margin: 0.5rem;

  button {
  margin:  0 0.5rem ;
  font - size: 1rem;
  cursor: pointer;
}
`;

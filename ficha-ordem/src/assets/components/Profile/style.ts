import styled from "styled-components";
import { colors } from "../../../style";

export const BoxWrapper = styled.div`
  border: 1px solid ${colors.white};
  border-radius: 8px;
  margin: 2rem 0 1rem;
`;

export const BoxHeader = styled.div`
  background-color: ${colors.white};
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: bold;
  border-radius: 8px;
  text-align: center;
  user-select: none;
`;

export const BoxContentWrapper = styled.div<{ isMinimized: boolean }>`
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: ${({ isMinimized }) => (isMinimized ? "0" : "1000px")};
  opacity: ${({ isMinimized }) => (isMinimized ? 0 : 1)};
`;

export const BoxContent = styled.div`
  padding: 1rem;
  color: ${colors.white};
  text-align: center;

  h2 {
    margin: 20px 0 0;
    font-size: 30px;
    font-weight: bold;
  }

  h3 {
    margin-top: 20px;
    font-weight: light;
  }

  h4 {
    font-size: 24px;
  }

  h5 {
    font-size: 18px;
    color: ${colors.gray};
  }
`;

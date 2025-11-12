import styled from "styled-components";
import { colors } from "../../../style";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color ${colors.white};
  color: red;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${colors.lightblue};
  padding: 30px;
  border-radius: 10px;
  min-width: 300px;

  h2 {
    margin: 20px;
  }

  input {
    display: block;
    margin-bottom: 10px;
    padding: 8px;
    outline: none;
    border: none;
    width: 100%;
  }
`;

import React, { useState } from "react";
import { Container, Button, ModalOverlay, ModalContent } from "./style";

function Mod() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Button onClick={() => setIsOpen(true)}>Detalhes</Button>

      {isOpen && (
        <ModalOverlay onClick={() => setIsOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h2>Detalhes</h2>
            <label htmlFor="Origem">Origem</label>
            <input type="Origem" />
            <label htmlFor="Idade">Idade</label>
            <input type="Idade" />
            <label htmlFor="NEX">NEX</label>
            <input type="NEX" />
            <Button onClick={() => setIsOpen(false)}>Fechar</Button>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}

export default Mod;

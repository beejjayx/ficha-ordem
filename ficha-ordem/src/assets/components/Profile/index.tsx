import { useState } from "react";
import { BoxWrapper, BoxHeader, BoxContentWrapper, BoxContent } from "./style";
import StatusBar from "../StatusBar";
import Mod from "../Modal";

type ProfileProps = {
  title: string;
};

function Profile({ title }: ProfileProps) {
  const [minimizado, setMinimizado] = useState(false);

  return (
    <div className="container">
      <BoxWrapper>
        <BoxHeader onClick={() => setMinimizado(!minimizado)}>
          {title} {minimizado ? "🔓" : "🔒"}
        </BoxHeader>
        <BoxContentWrapper isMinimized={minimizado}>
          <BoxContent>
            <img
              src="https://placehold.jp/3d4070/ffffff/150x150.png"
              alt="Foto de Perfil"
            />
            <h2>Character Name</h2>
            <h4>Player Name</h4>
            <h5>*Patente*</h5>
            <h5>*PE/Rodada*</h5>
            <h5>*Deslocamento*</h5>
            <h5>*Elemento*</h5>
            <Mod />
            <h3>Vida</h3>
            <StatusBar initialMax={40} tipo={"hp"} />
            <h3>Sanidade</h3>
            <StatusBar initialMax={40} tipo={"sanidade"} />
            <h3>Esforço</h3>
            <StatusBar initialMax={20} tipo={"esforço"} />
          </BoxContent>
        </BoxContentWrapper>
      </BoxWrapper>
    </div>
  );
}

export default Profile;

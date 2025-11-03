import { useState } from 'react';
import { BoxWrapper, BoxHeader, BoxContentWrapper, BoxContent } from './style';
import StatusBar from '../StatusBar';

type ProfileProps = {
  title: string;
};

function Profile({ title }: ProfileProps) {
  const [minimizado, setMinimizado] = useState(false);

  return (
    <div className="container">
      <BoxWrapper>
        <BoxHeader onClick={() => setMinimizado(!minimizado)}>
          {title} {minimizado ? '🔓' : '🔒'}
        </BoxHeader>
        <BoxContentWrapper isMinimized={minimizado}>
          <BoxContent>
            <div>
              <img
                src="https://placehold.jp/3d4070/ffffff/150x150.png"
                alt="Foto de Perfil"
              />
              <h2>Character Name</h2>
              <h3>Vida</h3>
              <StatusBar max={40} tipo={'hp'} />
              <h3>Sanidade</h3>
              <StatusBar max={40} tipo={'sanidade'} />
              <h3>Esforço</h3>
              <StatusBar max={20} tipo={'esforço'} />
            </div>
          </BoxContent>
        </BoxContentWrapper>
      </BoxWrapper>
    </div>
  );
}

export default Profile;

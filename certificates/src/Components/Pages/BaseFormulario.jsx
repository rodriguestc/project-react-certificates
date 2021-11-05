import React, {useEffect, useState} from 'react';
import TelaUm from './TelaUm';
import {Box} from '@material-ui/core'
import TelaTres from './TelaTres';
import TelaDois from './TelaDois';
import TelaSucess from './TelaSucess';


function BaseFormulario({ aoEnviar}) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  });

  const formularios = [
    <TelaUm aoEnviar={coletarDados} />,
    <TelaDois aoEnviar={coletarDados} />,
    <TelaTres aoEnviar={coletarDados} />,
    <TelaSucess />,
  ];

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximo();
  }
  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }
  console.log(dadosColetados);
  return (
    <div className="background">
      <Box
        sx={{
          width: 550,
          height: 750,
          backgroundColor: 'white',
          borderRadius: 5,
          padding: 5,
          margin: 'auto',
          alignItens: 'center',
        }}
        centered        
      >
        {formularios[etapaAtual]}
      </Box>
    </div>
  );
}

export default BaseFormulario;
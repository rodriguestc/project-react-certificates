import React, {useEffect, useState} from 'react';
import TelaUm from './TelaUm';
import {Box} from '@material-ui/core';
import TelaTres from './TelaTres';
import TelaDois from './TelaDois';
import TelaSucess from './TelaSucess';
import '../CSS/styleMui.css';


function BaseFormulario({ aoEnviar}) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar();
    }
  });

  const formularios = [
    <TelaUm aoEnviar={nextPage} />,
    <TelaDois aoEnviar={nextPage} />,
    <TelaTres aoEnviar={nextPage} />,
    <TelaSucess />,
  ];

  function nextPage() {
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }
  console.log(etapaAtual);
  return (
    <div className="background">
      <Box
        className="styleBox"
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
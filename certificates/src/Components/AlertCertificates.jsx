import React from 'react';
import {Alert} from '@material-ui/core';
import './CSS/TTresStyle.css'

function AlertCertificates() {
    return (
        <div className="box-Alert">
            <Alert variant="filled" severity="error">
                Atingiu o número máximo de Certificados!
            </Alert>
        </div>
    );
}

export default AlertCertificates;
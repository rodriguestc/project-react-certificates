import React, { useState } from 'react';
import '../CSS/TelaStyle.css';
import { Button } from '@material-ui/core';
import TelaUm from './TelaUm';
import TelaDois from './TelaDois';
import '../CSS/styleMui.css';



function TelaTres({ aoEnviar }) {
    let linkUm = {TelaUm};
    let linkDois = {TelaDois};
    let linkTres = {TelaTres};
    var arrayCertificates = [];

    const [dados, setDados] = useState({
        teamName: '',
        institution: '',
        graduation: '',
      })

    return (
        <>

            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    aoEnviar();
                    localStorage.setItem('institution', dados.institution);
                    localStorage.setItem('graduation', dados.graduation);
                    localStorage.setItem('teamName', dados.teamName);
                    
                }}
            >
                <header>
                    <h1 className="title">Team Sign Up</h1>
                    <nav className="navegacao">
                        <ul>
                            <li ><a href={linkUm}>Basic</a></li>
                            <li><a href={linkDois}>Social</a></li>
                            <li className="active"><a href={linkTres}>Certificates</a></li>
                        </ul>
                    </nav>
                </header>
                
                <div className="box-input">
                    <p className="text">Certificates</p>
                    <div className="input-style box-certificate-input">
                        <input
                            id="certificates"
                            type="text"
                            className="certificates-input"
                            placeholder="http://www.linkedin.com/in/foo-bar-3a0560104/"
                        />

                    </div>
                    <div className="buttons">
                        <div className="dropdown"></div>
                        <div
                            className="more"
                            onChange={(event) => {
                                let cert = event.target.value;
                                arrayCertificates = {...arrayCertificates, cert};
                                console.log("oi");
                            }}
                        >
                            <i data-feather="plus" className="plus"></i>
                            <Button
                                type="button"
                                variant="contained"
                                color="primary"
                                width="medium"
                                sx={{
                                    display: 'block',
                                    marginBottom: 1,
                                    marginLeft: 55,
                                    '& .MuiSvgIcon-More': { fontSize: 10 }
                                }}
                            >
                                More
                            </Button>
                            <i data-feather="chevron-right" className="chevron-right"></i>
                        </div>
                    </div>
                </div>
                <label for="teamName" className="labelText text">Team Name *</label>
                <input
                    type="text"
                    id="teamName"
                    className="inputMax"
                    required
                    placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
                    value={dados.teamName}
                    name="teamName"
                    onChange={(event) => {
                        setDados({ ...dados, teamName: event.target.value })
                    }}
                />

                <label for="institution" className="labelText text">Institution *</label>
                <input
                    type="text"
                    id="institution"
                    className="inputMax"
                    required
                    placeholder="Universidade Federal da Paraíba"
                    value={dados.institution}
                    name="institution"
                    onChange={(event) => {
                        setDados({ ...dados, institution: event.target.value })
                    }}
                />

                <label for="graduation" className="labelText text">Graduation *</label>
                <input
                    type="text"
                    id="graduation"
                    className="inputMax"
                    required
                    placeholder="Ciências da Computação"
                    value={dados.graduation}
                    name="graduation"
                    onChange={(event) => {
                        setDados({ ...dados, graduation: event.target.value })
                    }}
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    width="medium"
                    className="styleBtn"
                    sx={{
                        display: 'block',
                        marginTop: 4,
                        marginLeft: 55,
                    }}
                >
                    Finish
                </Button>
            </form>
        </>
    );
}

export default TelaTres;

/*
    useEffect(() => {
        if (Certificates >= 5) {
            < AlertCertificates />
        }
    });*/
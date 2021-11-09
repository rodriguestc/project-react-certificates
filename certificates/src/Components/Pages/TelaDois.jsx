import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import TelaUm from './TelaUm';
import TelaTres from './TelaTres';
import '../CSS/TelaStyle.css';
import '../CSS/styleMui.css';

function TelaDois({ aoEnviar }) {
    
    const [dados, setDados] = useState({
        linkedin: '',
        github: '',
      })
    
      //* Salvar os dados do localStorage *//
    
      useEffect(() => {
        if (localStorage.getItem('github') !== null) {
          setDados({
            ...dados,
            linkedin: localStorage.getItem('linkedin'),
            github: localStorage.getItem('github'),
          })
        }
      }, [dados])

    let linkUm = { TelaUm };
    let linkDois = { TelaDois };
    let linkTres = { TelaTres };
    return (
        <>
            <header>
                <h1 className="title">Team Sign Up</h1>
                <nav className="navegacao">
                    <ul>
                        <li ><a href={linkUm}>Basic</a></li>
                        <li className="active"><a href={linkDois}>Social</a></li>
                        <li><a href={linkTres}>Certificates</a></li>
                    </ul>
                </nav>
            </header>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    aoEnviar();
                    localStorage.setItem('linkedin', dados.linkedin);
                    localStorage.setItem('github', dados.github);
                    
                }}>
                <label for="linkedin" className="text">Linkedin</label>
                <input
                    type="text"
                    id="linkedin"
                    className="inputMax"
                    placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
                    value={dados.linkedin}
                    name="linkedin"
                    onChange={(event) => {
                        setDados({ ...dados, linkedin: event.target.value })
                    }}
                />
                <label for="github" className="text">Github *</label>
                <input
                    type="text"
                    id="github"
                    className="inputMax"
                    required
                    placeholder="https://github.com/foobar"
                    value={dados.github}
                    name="github"
                    onChange={(event) => {
                        setDados({ ...dados, github: event.target.value })
                    }} />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    width="sm"
                    className="styleBtn"
                    sx={{
                        display: 'block',
                        marginTop: 4,
                        marginLeft: 55,
                    }}
                >
                    Next
                </Button>
            </form>
        </>
    );
}
export default TelaDois;
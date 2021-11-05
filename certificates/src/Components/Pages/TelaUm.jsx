import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import '../CSS/TelaStyle.css';
import '../CSS/HeaderStyle.css';
import '../CSS/birthday.css';
import { Button, Checkbox } from '@material-ui/core';
import TelaDois from './TelaDois';
import { calculaIdade } from '../JS/calculaIdade';


function TelaUm({ aoEnviar }) {
    const [dados, setDados] = useState({
        nome: '',
        nickname: '',
        email: '',
        tel: '',
        aniver: {
            dia: 0,
            mes: 0,
            ano: 0,
        },
        checkbox: false,
    })

    const setIdade = () => {
        const idade = calculaIdade(dados.aniver.dia, dados.aniver.mes, dados.aniver.ano);
        console.log(idade);
        setDados.aniver({
            ...dados.aniver,
            idade: idade,
        });
    }


    useEffect(() => {
        if (localStorage.getItem('fullName') !== null) {
            let aniver = {
                dia: localStorage.getItem('day'),
                mes: localStorage.getItem('month'),
                ano: localStorage.getItem('year'),
            }


            setDados({
                ...dados,
                nome: localStorage.getItem('fullName'),
                nickname: localStorage.getItem('nickName'),
                email: localStorage.getItem('email'),
                tel: localStorage.getItem('phone'),
                aniver,
                checkbox: localStorage.getItem('checkebox'),
            })
        }
    }, [])

    let linkUm = { TelaUm };
    let linkDois = { TelaDois };

    return (
        <>
            <header>
                <h1 className="title">Team Sign Up</h1>
                <nav className="navegacao">
                    <ul>
                        <li className="active"><a href={linkUm}>Basic</a></li>
                        <li><a href={linkDois}>Social</a></li>
                        <li>Certificates</li>
                    </ul>
                </nav>
            </header>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    aoEnviar();
                    localStorage.setItem('nome', dados.nome);
                    localStorage.setItem('nickname', dados.nickname);
                    localStorage.setItem('tel', dados.tel);
                    localStorage.setItem('email', dados.email);
                    localStorage.setItem('dia', dados.aniver.dia);
                    localStorage.setItem('mes', dados.aniver.mes);
                    localStorage.setItem('ano', dados.aniver.ano);

                }}>
                <label for="nome" className="text" required>Full Name *</label>
                <input
                    type="text"
                    id="nome"
                    className="inputMax"
                    required
                    placeholder="Jane Doe"
                    value={dados.nome}
                    name="nome"
                    onChange={(event) => {
                        setDados({ ...dados, nome: event.target.value })
                    }}
                />

                <label for="nickname" className="text">Nickname</label>
                <input
                    type="text"
                    id="nickname"
                    className="inputMax"
                    placeholder="Mariazinha"
                    value={dados.nickname}
                    name="nickname"
                    onChange={(event) => {
                        setDados({ ...dados, nickname: event.target.value })
                    }}
                />
                <div className="boxEmailTel box-input">
                    <div className="boxEmail">
                        <label for="inputEmail" className="text">Email *</label>
                        <input
                            id="inputEmail"
                            type="email"
                            className="inputShort"
                            placeholder="mariazinha@email.com"
                            required
                            value={dados.email}
                            name="email"
                            onChange={(event) => {
                                setDados({ ...dados, email: event.target.value })
                            }}
                        />
                    </div>
                    <div className="boxTel">
                    <label for="telefone" className="text align">Phone</label>
                        <InputMask
                            onBlur={(event) => {
                                setDados({ ...dados, tel: event.target.value })
                            }}

                            type="text"
                            defaultValue={dados.tel}
                            name='tel'
                            class='inputShort'
                            id='telefone'
                            placeholder='(00) 00000-0000'
                            pattern='\([0-9]{2}) [0-9]{5}-[0-9]{4}$'
                            mask="(99) 99999-9999">
                        </InputMask>
                    </div>
                </div>
                <div className="box-Bday box-input">
                    <h3 className="pbirth">Birthday *</h3>
                    <div className="boxdia">
                        <label className="text" for="dia">Day</label>
                        <input
                            id="dia"
                            min="01" max="31"
                            type="number"
                            pattern="[0-9]{2}"
                            placeholder="01"
                            className="inputBday"
                            required
                            value={dados.aniver.dia}
                            onChange={(event) => {
                                let aniver = dados.aniver
                                aniver.dia = event.target.value
                                setDados({ ...dados, aniver })
                            }}
                        />
                    </div>
                    <div className="boxmes">
                        <label for="mes" className="text">Month</label>
                        <input
                            id="mes"
                            min="01" max="12"
                            type="number"
                            pattern="[0-9]{2}"
                            placeholder="01"
                            className="inputBday"
                            required
                            value={dados.aniver.mes}
                            name="nome"
                            onChange={(event) => {

                                let aniver = dados.aniver
                                aniver.mes = event.target.value
                                setDados({ ...dados, aniver })
                            }}
                        />
                    </div>
                    <div className="boxano">
                        <label for="ano" className="text">Year</label>
                        <input
                            id="ano"
                            min="1800" max="2021"
                            type="number"
                            pattern="[0-9]{4}"
                            placeholder="1800"
                            className="inputBday"
                            required
                            value={dados.ano}
                            name="ano"
                            onChange={(event) => {

                                let aniver = dados.aniver
                                aniver.ano = event.target.value
                                setDados({ ...dados, aniver })
                            }}
                        />
                    </div>
                    <div className="boxage">
                        <label for="age" className="text">Age</label>
                        <input
                            id="age"
                            min="0" max="200"
                            type="number"
                            className="inputBday"
                            disabled
                            name="idade"
                            setIdade={setIdade}
                        />
                    </div>
                </div>
                <Checkbox
                    id="checked"
                    sx={{
                        marginRight: 3,
                        '& .MuiSvgIcon-root': { fontSize: 28 }
                    }}
                    required
                    value={dados.checkbox}
                    onChange={(event) => {
                        setDados({ ...dados, checkbox: event.target.value })
                    }}
                    name="checkbox"

                />
                <label for="checked" className="textCB">I accept the terms and privacy.</label>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    width="sm"
                    sx={{
                        display: 'block',
                        marginTop: 4,
                        marginLeft: 55,
                        '& .MuiSvgIcon-NavigateNext': { fontSize: 5 }
                    }}
                >
                    Next
                </Button>
            </form>
        </>
    );
}

export default TelaUm;


/*
                        <input
                            id="telefone"
                            type="tel"
                            pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}$"
                            placeholder="(00) 00000-0000"
                            className="inputShort"
                            name="tel"
                            value={dados.tel}
                            onChange={(event) => {
                                setDados({ ...dados, tel: event.target.value })
                            }}
                        />*/
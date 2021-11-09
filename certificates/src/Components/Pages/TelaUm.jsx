import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import '../CSS/TelaStyle.css';
import '../CSS/HeaderStyle.css';
import '../CSS/birthday.css';
import { Button, Checkbox } from '@material-ui/core';
import TelaDois from './TelaDois';
import { calculaIdade } from '../JS/calculaIdade';
import '../CSS/styleMui.css';


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
            idade: 0,
        },
        checkbox: false,
    })

    /*const Age = () => {
        alert('oi');
        console.log(dados.aniver.idade, dados.aniver.dia, dados.aniver.mes, dados.aniver.ano);
        const dia = dados.aniver.dia;
        const mes = dados.aniver.mes;
        const ano = dados.aniver.ano;
        const age = calculaIdade(dia, mes, ano);
        console.log(age);
        setDados.aniver({
            ...dados.aniver,
            idade: age,
        });
    }*/

    useEffect(() => {
        if (localStorage.getItem('nome') !== null) {
            let aniver = {
                dia: localStorage.getItem('dia'),
                mes: localStorage.getItem('mes'),
                ano: localStorage.getItem('ano'),
            }


            setDados({
                ...dados,
                nome: localStorage.getItem('nome'),
                nickname: localStorage.getItem('nickname'),
                email: localStorage.getItem('email'),
                tel: localStorage.getItem('tel'),
                aniver,
                checkbox: localStorage.getItem('checkebox'),
            })
        }
    }, [dados])

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
                    console.log(dados.idade);
                    localStorage.setItem('nome', dados.nome);
                    localStorage.setItem('nickname', dados.nickname);
                    localStorage.setItem('tel', dados.tel);
                    localStorage.setItem('email', dados.email);
                    localStorage.setItem('dia', dados.aniver.dia);
                    localStorage.setItem('mes', dados.aniver.mes);
                    localStorage.setItem('ano', dados.aniver.ano);

                }}>
                <label forHTML="nome" className="text" required>Full Name *</label>
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

                <label forHTML="nickname" className="text">Nickname</label>
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
                        <label forHTML="inputEmail" className="text">Email *</label>
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
                    <label forHTML="telefone" className="text align">Phone</label>
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
                            mask="(99) 99999-9999">
                        </InputMask>
                    </div>
                </div>
                <div className="box-Bday box-input">
                    <h3 className="pbirth">Birthday *</h3>
                    <div className="boxdia">
                        <label className="text" forHTML="dia">Day</label>
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
                        <label forHTML="mes" className="text">Month</label>
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
                        <label forHTML="ano" className="text">Year</label>
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
                        <label forHTML="age" className="text">Age</label>
                        <input
                            id="age"
                            min="0" max="200"
                            type="number"
                            className="inputBday"
                            disabled
                            name="idade"
                            onClick= {(event)=> {
                                console.log('oi');
                                const dia = dados.aniver.dia;
                                const mes = dados.aniver.mes;
                                const ano = dados.aniver.ano;
                                const age = calculaIdade(dia,mes,ano);
                                console.log(age);
                                setDados.aniver({
                                    ...dados.aniver,
                                    idade: age,
                                });
                            }}
                        />
                    </div>
                </div>
                <Checkbox
                    id="checked"
                    sx={{
                        marginRight: 3,
                        '& .MuiSvgIcon-root': { fontSize: 28 }
                    }}
                    className="styleCheck"
                    required
                    value={dados.checkbox}
                    onChange={(event) => {
                        setDados({ ...dados, checkbox: event.target.value })
                    }}
                    name="checkbox"

                />
                <label forHTML="checked" className="textCB">I accept the terms and privacy.</label>
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
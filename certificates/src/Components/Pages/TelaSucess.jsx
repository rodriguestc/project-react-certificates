import React, { useEffect, useState } from 'react';
import {Button} from '@material-ui/core';
import '../CSS/Sucess.css';


function TelaSucess () {
    const [dados, setDados] = useState("");

    useEffect(() => {
        let dados = {
          fullName: localStorage.getItem('nome'),
          nickname: localStorage.getItem('nickname'),
          email: localStorage.getItem('email'),
          phone: localStorage.getItem('tel'),
          linkedin: localStorage.getItem('Linkedin'),
          github: localStorage.getItem('Github'),
          teamName: localStorage.getItem('teamName'),
          institution: localStorage.getItem('institution'),
          graduation: localStorage.getItem('graduation'),
          day: localStorage.getItem('dia'),
          month: localStorage.getItem('mes'),
          year: localStorage.getItem('ano'),
        }
        setDados(dados)
      }, [])

    return (
        <div className="align" style={{ position: 'relative', height: '700px' }}>
            <h1 className="title">Registered Data</h1>
            <table>
                <thead>
                    <tr>
                        <th className="negrito">Fields</th>
                        <th className="negrito">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Full Name</td>
                        <td>
                            <p className="Sucess">{dados.fullName}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Nickname</td>
                        <td>
                            <p className="Sucess">{dados.nickname}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>
                            <p className="Sucess">{dados.email}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>
                            <p className="Sucess">{dados.phone}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Birthday</td>
                        <td>
                            <p className="Sucess">
                                {dados.day}/{dados.month}/{dados.year}
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>Linkedin</td>
                        <td>
                            <p className="Sucess">{dados.linkedin}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Github</td>
                        <td>
                            <p className="Sucess">{dados.github}</p>
                        </td>
                    </tr>

                    <tr>
                        <td>Team Name</td>
                        <td>
                            <p className="Sucess">{dados.teamName}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Institution</td>
                        <td>
                            <p className="Sucess">{dados.institution}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Graduation</td>
                        <td>
                            <p className="Sucess">{dados.graduation}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
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
                    onClick={()=>{
                        localStorage.clear();
                    }}
                >
                    Ok
                </Button>
        </div>
    );
}

export default TelaSucess;
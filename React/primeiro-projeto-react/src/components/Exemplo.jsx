import React from "react";
let estilo = {listStyle: 'none', color: 'blue', fontSize: '67px'};

const Exemplo = ()=> {
    return (
        <>
        <h1>Sexta-feira depressão</h1>
        <p>Metade  vai reprovar</p>
        <ul style={estilo}>
            <li>Maria Eduarda</li>
            <li>Anna Clara</li>
            <li>Leandro Jun</li>
            <li>O Restante da sala</li>
        </ul>
        
        </>
    )
};

export default Exemplo;
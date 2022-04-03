import React from "react";
import {DataProps} from "../../Interfaces/DataProps"



export const Card: React.FC<DataProps | undefined> = ({nome,
    foto_cafe,
    foto_cafe_1,
    foto_cafe_2,
    nota,
    descricao,
    regiao,
    acidez,
    corpo,
    torra,
    variedade}) => {

    return (
        <>
            <div style={{ background: "blue", width: "100%", maxWidth: "300px", minWidth: "200px", height: "300px", minHeight: "200px", maxHeight: "400px", margin: "auto", padding: 10 }}>
                <div>
                    <h4>Notas</h4>
                    <h3>{nota}</h3>
                </div>
                <div>
                    <h4>Altitude</h4>
                    <h3>{regiao.altitude}</h3>
                </div>
                <div>
                    <h4>Torra</h4>
                    <h3>{torra.nome}</h3>
                </div>
            </div>
            <div style={{ background: "red", width: "100%", maxWidth: "450px", minWidth: "200px", height: "300px", minHeight: "200px", maxHeight: "800px", margin: "auto", padding: 10 }}>
                <img style={{ width: "100%", height: "100%" }}
                    className="d-block w-20 h-100"
                    src={"https://alavoura.com.br/wp-content/uploads/2020/06/tim-e1592429928966.jpeg"}
                    alt="First slide"
                />
            </div>
            <div style={{ background: "blue", width: "100%", maxWidth: "300px", minWidth: "200px", height: "300px", minHeight: "200px", maxHeight: "400px", margin: "auto", padding: 10 }}>
                <div >
                    <h4>{nome}</h4>
                    <p>{descricao}</p>
                </div>
                <div>
                    <h4>Corpo</h4>
                    <h3>{corpo.nome}</h3>
                </div>
                <div>
                    <h4>Variedade</h4>
                    <h3>{variedade.nome}</h3>
                </div>
                <div>
                    <h4>Acidez</h4>
                    <h3>{acidez.nome}</h3>
                </div>
            </div>
        </>
    )
}
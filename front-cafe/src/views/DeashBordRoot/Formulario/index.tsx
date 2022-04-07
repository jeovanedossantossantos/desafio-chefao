import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { HeaderRoot } from "../../../components/HeaderRoot";
import { api } from "../../../serve";

interface AcidezProps {
  id: number;
  nome: string;
  descricao: string;
}

export const Formulario: React.FC = () => {
  const [acidez, setAcidez] = useState<AcidezProps[]>([]);
  const buscarItens = async () => {
    const variedade = await api.get("/listar-acidez");
    console.log(variedade.data);
    setAcidez(variedade.data);
  };
  useEffect(() => {
    buscarItens();
  }, []);
  return (
    <Container style={{ background: "#ccc" }}>
      <HeaderRoot />
      <div>
        <h1>Formulario de </h1>
        <Form.Group className="mb-3">
          <Form.Label>Acidez</Form.Label>
          <div>
            <Form.Group className="mb-3">
              <Form.Select id="disabledSelect">
                {acidez.map((d) => {
                  return <option key={d.id}>{d.nome}</option>;
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control className="mb-3" placeholder="Nome" />
              <Form.Control placeholder="Descrição" as="textarea" rows={3} />
            </Form.Group>
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Corpo</Form.Label>
          <div>
            <Form.Control style={{ margin: 10 }} placeholder="Nome" />
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Moagem</Form.Label>
          <div>
            <Form.Control style={{ margin: 10 }} placeholder="Nome" />
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Região</Form.Label>
          <div>
            <Form.Control style={{ margin: 10 }} placeholder="Nome" />
            <Form.Control
              style={{ margin: 10 }}
              placeholder="Link da foto da bandeira"
            />
            <Form.Control style={{ margin: 10 }} placeholder="Pais" />
            <Form.Control style={{ margin: 10 }} placeholder="Altitude" />
            <Form.Control
              style={{ margin: 10 }}
              placeholder="Descrição"
              as="textarea"
              rows={3}
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Torra</Form.Label>
          <div>
            <Form.Control style={{ margin: 10 }} placeholder="Nome" />
            <Form.Control
              style={{ margin: 10 }}
              placeholder="Descrição"
              as="textarea"
              rows={3}
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Variedades</Form.Label>
          <div>
            <Form.Control style={{ margin: 10 }} placeholder="Nome" />
            <Form.Control
              style={{ margin: 10 }}
              placeholder="Descrição"
              as="textarea"
              rows={3}
            />
          </div>
        </Form.Group>
      </div>
    </Container>
  );
};

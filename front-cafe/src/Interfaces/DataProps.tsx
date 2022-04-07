export interface DataProps {
    id?: number;
    nome: string;
    foto_cafe: string;
    foto_cafe_1: string;
    foto_cafe_2: string;
    nota: string;
    peso_liquido?: string;
    preco?: string;
    descricao: string;
    regiao_id?: number;
    corpo_id?: number;
    variedade_id?: number;
    torra_id?: number;
    acidez_id?: number;
    moagem_id?: number;
    regiao: {
      id: number;
      foto_bandeira: string;
      descricao: string;
      altitude: string;
    };
    acidez: {
      id: number;
      nome: string;
    };
    corpo: {
      id: number;
      nome: string;
    };
    moagem: {
      id: number;
      nome: string;
    };
    torra: {
      id: number;
      nome: string;
    };
    variedade: {
      id: number;
      nome: string;
    };
  }
  
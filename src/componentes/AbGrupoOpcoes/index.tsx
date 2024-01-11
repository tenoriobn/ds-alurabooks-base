import React, { useState } from "react";
import styled from "styled-components";

const SectionEstilizada = styled.section<{ selecionado: boolean }>`
  width: 194px;
  height: 88px;
  background: ${props => props.selecionado ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)' : '#FFFFFF'};
  border: 1px solid;
  border-color: ${props => props.selecionado ? '#002F52' : '#EB9B00'};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin: 10px;
  font-family: sans-serif;
  cursor: pointer;

  header {
    color: ${props => props.selecionado ? '#FFF' : '#EB9B00'};
    font-size: 12px;
    font-weight: 400;
  }

  strong {
    color: ${props => props.selecionado ? '#FFF' : '#EB9B00'};;
    font-size: 16px;
    font-weight: 700;
  }

  footer {
    color: ${props => props.selecionado ? '#FFF' : 'rgba(0, 0, 0, 0.54)'};;
    font-size: 12px;
    font-weight: 400;
  }
`;

export interface AbGrupoOpcoes {
  id: number
  titulo: string
  corpo: string
  rodape: string
}

export interface AbGrupoOpcoesProps {
  opcoes: AbGrupoOpcoes[]
  valorPadrao?: AbGrupoOpcoes | null
  onChange?: (opcao: AbGrupoOpcoes) => void
}

export const AbGrupoOpcoes = ({opcoes, onChange, valorPadrao} : AbGrupoOpcoesProps) => {
  const [selecao, setSelecao] = useState<AbGrupoOpcoes | null>(valorPadrao ?? null);

  const aoSelecionar = (opcao: AbGrupoOpcoes): void => {
    setSelecao(opcao);

    if(onChange) {
      onChange(opcao);
    }
  }

  return (
    <>
      {opcoes.map(opcao =>
        <SectionEstilizada 
          onClick={() => aoSelecionar(opcao)}
          key={opcao.id} 
          selecionado={selecao?.id == opcao.id}
        >
          <header>
            {opcao.titulo}
          </header>

          <div>
            <strong>{opcao.corpo}</strong>
          </div>

          <footer>
            {opcao.rodape}
          </footer>
        </SectionEstilizada>
      )}
    </>
  );
};
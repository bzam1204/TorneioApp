import styled from "styled-components";

export const Frame_Container_Painel_Controle_Partida = styled.section`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
`

export const Container_Painel_Controle_Partida = styled.div`
  border-radius: 20px;
  border: 5px solid rgba(54, 54, 54, 0.01);
  background: radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, rgba(27, 0, 2, 0.60) -14.22%, rgba(1, 1, 27, 0.60) 120.29%);
  backdrop-filter: blur(29.5px);
  display: flex;
  padding: 48px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
`

export const Container_Time_Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 0;

`
export const Container_Nome_Time = styled.div`
  display: flex;
  width: 391.333px;
  justify-content: space-between;
  align-items: center;
`
export const Nome_Time = styled.div`
  flex: 1 0 0;
  color: #FFF;
  text-transform: uppercase;
  text-align: center;
  font-family: Orbitron;
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

`
export const Container_Pontuacao = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
export const Pontuacao_Time = styled.div`
  text-align: center;
  font-family: Orbitron;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  text-transform: uppercase;
  width: 195.667px;
  background: linear-gradient(104deg, #FFF 69.99%, #D0D0D0 89.91%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  justify-content: center;
  align-items: center;
  gap: 10px;`

export const Botao_Tempo = styled.div`border-radius: 20px;
  backdrop-filter: blur(2px);
  display: flex;
  height: fit-content;
  text-align: center;
  background: linear-gradient(180deg, #FFF 0%, #FFF 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-family: Orbitron;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 2.34vw 0px;
`
export const Botao_24_Segundos = styled(Botao_Tempo)``
export const Botao_Menu_Opcoes = styled(Botao_Tempo)``

import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #282c34;
    font-family: 'Digital-7', sans-serif; /* Fonte de relógio */
    color: white;
`;

const ClockFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    border: 8px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
`;

const CounterValue = styled.p`
    font-size: 6rem;
    margin: 20px 0;
    color: #00ff00; /* Cor de relógio digital */
    text-shadow: 0px 0px 15px rgba(0, 255, 0, 0.8);
`;

const ButtonRow = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
`;

const Button = styled.button`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #6200ea;
    color: white;
    font-size: 1.2rem;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s ease, transform 0.1s;

    &:hover {
        background-color: #3700b3;
    }

    &:active {
        transform: scale(0.95);
        background-color: #6200ea;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    }

    &:focus {
        outline: none;
    }
`;

const ResetButton = styled(Button)`
    background-color: #ff5252;

    &:hover {
        background-color: #ff1744;
    }
`;

export class Contador extends React.Component {
    state = {
        valorContador: 0
    }

    onClickSoma = () => {
        this.setState({ valorContador: this.state.valorContador + 1 })
    }

    onClickSub = () => {
        const valorContador = this.state.valorContador
        const proximoValor = valorContador - 1
        this.setState({ valorContador: proximoValor })
    }

    onClickRestart = () => {
        this.setState({ valorContador: 0 })
    }

    render() {
        return (
            <Container>
                <ClockFrame>
                    <CounterValue>{this.state.valorContador}</CounterValue>
                    <ButtonRow>
                        <Button onClick={this.onClickSoma}>+</Button>
                        <Button onClick={this.onClickSub}>-</Button>
                        <ResetButton onClick={this.onClickRestart}>↻</ResetButton>
                    </ButtonRow>
                </ClockFrame>
            </Container>
        )
    }
}

export default Contador;

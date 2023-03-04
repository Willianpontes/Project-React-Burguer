import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #0A0A10;
    height: 100%;
    min-height: 100vh;
`

export const Image = styled.img`
margin-top: 11px;
height: 320px;

`

export const ContainerItens = styled.div`
    padding: 25px 36px 50px 36px;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: calc(100vh - 400px);
`

export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 76px;
`

export const Button = styled.button`
    width: 342px;
    height: 68px;
    background: #D93856;
    margin-top: 200px;

    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    color: #FFFFFF;
    border: none;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`

export const User = styled.li`
    width: 342px;
    height: 101px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;
    margin-top: 20px;

    display: flex;
    justify-content: space-around;
    
    button {
        background: none;
        cursor: pointer;
        border: none;
    }

`
export const ContainerSmall = styled.div`
    display: flex;
    flex-direction: column;
    gap: 29px;
    padding: 17px 0px 13px 15px;
    width: 75%;


    .pOrder {
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
    }

    .pName {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
    }

`
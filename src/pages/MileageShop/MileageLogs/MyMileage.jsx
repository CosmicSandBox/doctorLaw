import React from 'react';
import styled from 'styled-components';
import ContainerRow from '../../../Components/Container/ContainerRow';
import { useNavigate } from 'react-router-dom';

const MileageContainer = styled.div`
    display: flex;
    flex-direction: column;

    padding: 20px;
    margin-bottom: 40px;
    border-radius: 10px;

    gap: 20px;
    background: #D6E4F7;
`
const PointBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 20px;
    border-radius: 4px;

    background-color: #f5f5f5;
`;
const PointContainer = styled(ContainerRow)`
    gap: 10px;
`

const Button = styled.button`
    width: 100px;
    height: 50px;

    margin: 0 5px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    font-family: LINE-Bd;
    font-size: 1.5rem;
    text-align: center;

    &:first-of-type {
        background-color: black;
        color: white;
    }

    &:last-of-type {
        background-color: #FF7B3F;
        color: white;
    }
`;

const Image = styled.img`
    width: 60px;
`

const TextHeader = styled.h1`
    font-family: LINE-Bd;
    font-size: 1.5rem;
`
const Points = styled.h1`
    font-family: LINE-Bd;
    font-size: 2rem;
    margin-right: 10px;
`;

export default function Comopnent() {
    const navigate = useNavigate();
    return (
        <MileageContainer>
            <TextHeader>나의 마일리지</TextHeader>
            <PointBox>
                <PointContainer>
                    <Image src="/img/coin.png"/>
                    <Points>14,000 P</Points>
                </PointContainer>
                <ContainerRow>
                    <Button onClick={() => navigate("/shop/charge")}>충전</Button>
                    <Button onClick={() => navigate("/shop/use")}>사용</Button>
                </ContainerRow>
            </PointBox>

        </MileageContainer>
    );
};

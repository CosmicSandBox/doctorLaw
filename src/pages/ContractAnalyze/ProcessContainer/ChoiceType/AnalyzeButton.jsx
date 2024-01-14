import styled from "styled-components";

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 20px;
    border-radius: 30px;
    background: #f48553;
    cursor: pointer;
`;

const TextH1 = styled.h1`
    font-family: "LINE-Bd";
    font-size: 1.5rem;
    color = ${props => props.$color};
`;

export default function Component(){
    return(
        <ButtonContainer>
            <TextH1 $color="white"> 분석 시작하기</TextH1>
            <TextH1 $color="white"> {"<"}이용권 1회 차감{">"} </TextH1>
        </ButtonContainer>
    )
}
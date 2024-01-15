import styled from 'styled-components';

const BeigeContainer = styled.div`
    width: 100%;
    padding: 30px 0;
    background-color: beige;
`;
const PaddingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    align-items: center;
    gap: 2rem;
`;

export default function Componennt({children}){

    return(
        <BeigeContainer>
            <PaddingContainer>{children}</PaddingContainer>
        </BeigeContainer>
    )
}
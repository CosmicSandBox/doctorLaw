import styled from 'styled-components';

export default function BeigeContainer({children}){
    const BeigeContainer = styled.div`
        width: 100%;
        height: 300px;
        background-color: beige;
    `;
    const PaddingContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
        align-items: center;
    `

    return(
        <BeigeContainer>
            <PaddingContainer>{children}</PaddingContainer>
        </BeigeContainer>
    )
}
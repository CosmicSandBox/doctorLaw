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

export default function Component({$onClick, children}){
    return(
        <ButtonContainer onClick={$onClick}>{children}</ButtonContainer>
    )
}
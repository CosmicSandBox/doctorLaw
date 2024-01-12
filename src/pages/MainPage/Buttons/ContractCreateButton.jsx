import styled from 'styled-components';

const ButtonContainer = styled.div`
    position: relative;
    width: 18rem;
    height: 300px;
    padding: 30px;
    
    border-radius: 20px;
    background: #D6E4F7;
`

const TextContainer = styled.div`
    display:flex;
    flex-direction: column;
    gap: 10px;
`
const TextHeader = styled.h1`
    font-family: 'LINE-Bd';
    font-size: 2rem;
`
const TextDescription = styled.p`
    color: gray;
`
const ShortcutContainer = styled.div`
    position: absolute;
    bottom: 0;
    right:0;

    display: flex;
    flex-direction: column;

    padding: 30px;
    gap: 10px;
`

const ShortcutButton = styled.button`
    width: 15rem;
    height: 40px;
    border: none;
    border-radius: 10px;

    font-family: 'LINE-Bd';
    font-size: 1.2rem;

    background: ${props => props.$background};
    color: white;
`

const Image = styled.img`
    width: 200px;
    height: 150px;
`
export default function Component() {

    return (
        <ButtonContainer>
            <TextContainer>
                <TextHeader>계약 문서 생성</TextHeader>
                <TextDescription>복잡한 법률 내용을 고려하여 계약서의 가이드라인을 제공해요</TextDescription>
            </TextContainer>
            <ShortcutContainer>
                <Image src="/img/contractcreate.png"/>
                <ShortcutButton $background="black">문서 자동 생성 바로가기</ShortcutButton>
            </ShortcutContainer>
        </ButtonContainer>
    )
}
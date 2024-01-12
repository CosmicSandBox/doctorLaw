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
export default function Component() {

    return (
        <ButtonContainer>
            <TextContainer>
                <TextHeader>계약 내용 분석</TextHeader>
                <TextDescription>위험한 조항이 있는지 확인하고 내용을 이해하기 쉽게 요약해요</TextDescription>
            </TextContainer>
            <ShortcutContainer>
                <ShortcutButton $background="black">계약 내용 분석 바로가기</ShortcutButton>
                <ShortcutButton $background="#F48553">내 분석 기록 확인하기</ShortcutButton>
            </ShortcutContainer>
        </ButtonContainer>
    )
}
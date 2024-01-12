import { styled } from "styled-components";

const AdContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    gap: 30px;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const AdText = styled.h1`
    font-family: 'LINE-Bd';
    font-size: 2rem;
`

const AdButtonContainer = styled.div`
    position: relative;
    height: 7rem;
    width: 23rem;
`
const AdButton = styled.button`
    position: absolute;
    font-family: 'LINE-Rg';
    font-size: 1.5rem;
    width: 20rem;
    
    left: 50%;
    transform: translateX(-50%);
    
    padding: 1.5rem;
    background: #D6E4F7;

    border: none;
    border-radius: 20px;
`
const AdMouse = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;

    width: 80px;
`


export default function Component(){

    return(
        <AdContainer>
            <TextContainer>
                <AdText>지금 회원가입하고 마일리지 적립과 분석 기록을</AdText>
                <AdText>확인 할 수 있는 혜택을 누려보세요!</AdText>
            </TextContainer>
            <AdButtonContainer>
                <AdButton>회원가입 하러가기</AdButton>
                <AdMouse src="/img/mousehighlight.png"/>
            </AdButtonContainer>
        </AdContainer>
    )
}
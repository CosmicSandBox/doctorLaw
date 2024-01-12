import { styled } from "styled-components"

const HowBox = styled.div`
    display: flex;
    flex-direction: column;

    padding: 30px;

    background: #D6E4F7;
    border: none;
    border-radius: 20px;
`
const HowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin: 10px 0;
    gap: 10px;
`
const AnswerContainer = styled(HowContainer)`
    margin-left: 50px;
`
const Image = styled.img`
    height: 3rem;
`
const Text = styled.p`
    font-family: 'LINE-Bd';
    font-size: 1.5rem;
`
export default function Component(){

    return(
        <HowBox>
            <HowContainer>
                <Image src="/img/how/question.png"/>
                <Text>계약 내용 분석은 어떻게 이루어지나요?</Text>
            </HowContainer>

            
            <AnswerContainer>
                <Image src="/img/how/img1.png"/>
                <Text>AI가 과거의 데이터들을 기반으로 계약서에 숨겨놓은 독소조항들을 찾아냅니다.</Text>
            </AnswerContainer>
            <AnswerContainer>
                <Image src="/img/how/img2.png"/>
                <Text>독소조항인 이유를 설명하고 위험도를 분석하여 게이지로 표시해줍니다.</Text>
            </AnswerContainer>
            <AnswerContainer>
                <Image src="/img/how/img3.png"/>
                <Text>조항의 수정방향성을 제시해줍니다.</Text>
            </AnswerContainer>
        </HowBox>
    )
}
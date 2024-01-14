import { styled } from "styled-components"

const HowBox = styled.div`
    background: #D6E4F7;
    border: none;
    border-radius: 20px;
`

const PaddingContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-left: 2rem;
    padding-right: 4rem;

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
            <PaddingContainer>
                <HowContainer>
                    <Image src="/img/how/question.png"/>
                    <Text>로그인을 하지 않아도 기록을 볼 수 있나요?</Text>
                </HowContainer>

                
                <AnswerContainer>
                    <Image src="/img/how/woman.png"/>
                    <Text>가능합니다! <br/>하지만 서버에 기록이 저장되지 않아, 데이터 손실을 책임질 수 없습니다.<br/>데이터를 영구 저장하려면 로그인 후 이용바랍니다.</Text>
                </AnswerContainer>
            </PaddingContainer>
        </HowBox>
    )
}
import { useMemo } from "react"
import { styled } from "styled-components"

const HowBox = styled.div`
    background: #D6E4F7;
    border: none;
    margin: 30px;
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
    margin: 1.5rem 0;
`
const AttentionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    gap:1rem;
`
const Image = styled.img`
    height: 3rem;
`

const Text = styled.p`
    font-family: 'LINE-Bd';
    font-size: 1.5rem;
`
const TextDescription = styled.p`
    font-size: 1rem;
`;

export default function Component(){

    const attetions = useMemo(()=>[
        "1-3번 조항", "1-4번 조항", "1-5번 조항"
    ],[])
    return(
        <HowBox>
            <PaddingContainer>
                <HowContainer>
                    <Image src="/img/how/attention.png"/>
                    <Text>위험한 조항</Text>
                </HowContainer>

                {
                    attetions.map((attention)=>{
                        return(
                            <>
                                <Text>{attention}</Text>
                                <AttentionContainer>
                                    <TextDescription>내용이 어쩌구저쩌구...내용이 어쩌구저쩌구...내용이 어쩌구저쩌구...내용이 어쩌구저쩌구...</TextDescription>
                                    <TextDescription>문제점: 이 조항은 이래서 위험하고 어쩌구저쩌구..</TextDescription>
                                    <TextDescription>수정제안: 이런식으로 수정하거나 어쩌구저쩌구..</TextDescription>
                                </AttentionContainer>
                            </>
                        )
                    })
                }

            </PaddingContainer>
        </HowBox>
    )
}
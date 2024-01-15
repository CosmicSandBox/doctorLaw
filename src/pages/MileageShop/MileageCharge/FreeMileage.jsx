import styled from 'styled-components';
import ContainerColumn from '../../../Components/Container/ContainerColumn';

const FreeTypeContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: calc(100% - 60px);
    padding: 30px;
    margin: 15px 0;
    border-radius: 15px;

    background: ${props => props.$background};
`
const FreeTypeHeader = styled(ContainerColumn)`
    gap: 1rem;
`
const FreeMileageContainer = styled(ContainerColumn)`

`

const TextHeader = styled.h1`
    font-family: LINE-Bd;
    font-size: 2rem;
`
const TextFreeHeader = styled.h1`
    font-family: LINE-Bd;
    font-size: 1.5rem;
`
const TextFreeDescription = styled.h1`
    font-family: LINE-Rg;
    font-size: 1rem;
    color: ${props => props.$color || "gray"};
`

const NavButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 250px;
    height: 70px;

    border: none;
    border-radius: 15px;

    background: ${props => props.$background};
`
const ButtonImg = styled.img`
    flex:3;
    object-fit: cover;
    width: 70px;
`
const ButtonTextContainer = styled.div`
    flex:7;
    color: white;
`
export default function Comopnent(){
    return(
        <FreeMileageContainer>
            <TextHeader>무료 마일리지 받기</TextHeader>

            <FreeTypeContainer $background="#D6E4F7">
                <FreeTypeHeader>
                    <TextFreeHeader>광고 보고 무료 마일리지 받기</TextFreeHeader>
                    <TextFreeDescription> 설명 </TextFreeDescription>
                </FreeTypeHeader>

                <NavButton $background="#122033">
                    <ButtonImg src="/img/coins.png"/>
                    <ButtonTextContainer>
                        <TextFreeHeader>광고 시청</TextFreeHeader>
                        <TextFreeDescription $color="white"> 설명 </TextFreeDescription>
                    </ButtonTextContainer>
                </NavButton>
            </FreeTypeContainer>

            <FreeTypeContainer $background="#D6E4F7">
                <FreeTypeHeader>
                    <TextFreeHeader>광고 보고 어쩌구</TextFreeHeader>
                    <TextFreeDescription> 귀찮다 알아서 해줘 </TextFreeDescription>
                </FreeTypeHeader>

                <NavButton $background="orange">
                    <ButtonImg src="/img/coins.png"/>
                    <ButtonTextContainer>
                        <TextFreeHeader>공유하래</TextFreeHeader>
                        <TextFreeDescription $color="white"> 대충 오렌지 색 </TextFreeDescription>
                    </ButtonTextContainer>
                </NavButton>
            </FreeTypeContainer>
        </FreeMileageContainer>
    )
}
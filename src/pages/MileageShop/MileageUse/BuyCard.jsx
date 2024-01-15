import styled from 'styled-components';
import ContainerColumn from '../../../Components/Container/ContainerColumn';
import ContainerRow from '../../../Components/Container/ContainerRow';

const FreeTypeContainer = styled.div`
    position: relative;
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
const ContainerCard = styled(ContainerRow)`
    justify-content: center;
    gap: 30px;
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
    position: absolute;
    bottom: 20px;
    right: 20px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    width: 230px;
    height: 50px;
    gap: 1rem;

    border: none;
    border-radius: 15px;
    color: white;

    background: ${props => props.$background};
`
const CardImg = styled.img`
    object-fit: cover;
    width: 70px;
`
export default function Comopnent(){
    return(
        <FreeMileageContainer>
            <TextHeader>이용권 구매하기</TextHeader>

            <FreeTypeContainer $background="#D6E4F7">
                <FreeTypeHeader>
                    <TextFreeHeader>AI 1회 이용권</TextFreeHeader>
                    <ContainerCard>
                        <CardImg src="/img/coins.png"/>
                        <TextFreeHeader> X1 </TextFreeHeader>
                    </ContainerCard>
                </FreeTypeHeader>

                <NavButton $background="#122033">
                    <TextFreeHeader>1,000P</TextFreeHeader>
                    <TextFreeDescription $color="white"> 사용</TextFreeDescription>
                </NavButton>
            </FreeTypeContainer>
            
            <FreeTypeContainer $background="#D6E4F7">
                <FreeTypeHeader>
                    <TextFreeHeader>AI 5회 이용권</TextFreeHeader>
                    <ContainerCard>
                        <CardImg src="/img/coins.png"/>
                        <TextFreeHeader> X5 </TextFreeHeader>
                    </ContainerCard>
                </FreeTypeHeader>

                <NavButton $background="#122033">
                    <TextFreeHeader>4,000P</TextFreeHeader>
                    <TextFreeDescription $color="white"> 사용</TextFreeDescription>
                </NavButton>
            </FreeTypeContainer>

        </FreeMileageContainer>
    )
}
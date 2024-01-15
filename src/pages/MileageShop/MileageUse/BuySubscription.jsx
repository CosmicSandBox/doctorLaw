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
            <TextHeader>구독권 구매하기</TextHeader>

            <FreeTypeContainer $background="orange">
                <FreeTypeHeader>
                    <TextFreeHeader>귀찮으니깐 알아서 조절하셈</TextFreeHeader>
                    <TextFreeDescription> 법학박사의 모든 서비스를 제한 없이 사용해 보세요! </TextFreeDescription>
                </FreeTypeHeader>

                <NavButton $background="#122033">
                    <TextFreeHeader>1,0000P</TextFreeHeader>
                    <TextFreeDescription $color="white"> 사용</TextFreeDescription>
                </NavButton>
            </FreeTypeContainer>

        </FreeMileageContainer>
    )
}
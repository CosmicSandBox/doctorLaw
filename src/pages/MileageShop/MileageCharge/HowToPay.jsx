import styled from 'styled-components';
import ContainerColumn from '../../../Components/Container/ContainerColumn';


const FreeMileageContainer = styled(ContainerColumn)`

`

const TextHeader = styled.h1`
    font-family: LINE-Bd;
    font-size: 2rem;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 20px;
`;


function GridButton({$img, children}){
    const Button = styled.button`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color:
        cursor: pointer;

        &:hover {
            background-color: #e0e0e0;
        }
    `;
    const Text = styled.p`
        font-family: LINE-Rg;
        font-size: 1rem;
    `
    const Image = styled.img`
        height: 50px;
    `
    return(
        <Button>
            <Image src={$img}></Image>
            <Text>{children}</Text>
        </Button>
    )
}

export default function Comopnent(){
    return(
        <FreeMileageContainer>
            <TextHeader>무료 마일리지 받기</TextHeader>
            <GridContainer>
                <GridButton $img="/img/coins.png">신용카드</GridButton>
                <GridButton $img="/img/coins.png">휴대폰</GridButton>
                <GridButton $img="/img/coins.png">무통장입금</GridButton>
                <GridButton $img="/img/coins.png">toss pay</GridButton>
                <GridButton $img="/img/coins.png">N pay</GridButton>
                <GridButton $img="/img/coins.png">카카오페이</GridButton>
            </GridContainer>
            
        </FreeMileageContainer>
    )
}
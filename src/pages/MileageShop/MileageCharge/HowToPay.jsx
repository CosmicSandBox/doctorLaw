import styled from 'styled-components';
import ContainerColumn from '../../../Components/Container/ContainerColumn';


const FreeMileageContainer = styled(ContainerColumn)`

`

const TextHeader = styled.h1`
    font-family: LINE-Bd;
    //font-size: 2rem;
    font-size: 25px;
    padding: 10px;
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
        padding: 40px;
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
        font-size: 2rem;
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
            <TextHeader>결제 수단 선택하기</TextHeader>
            <GridContainer>
                <GridButton $img="/img/charge/신용카드.png">신용카드</GridButton>
                <GridButton $img="/img/charge/휴대폰.png">휴대폰</GridButton>
                <GridButton $img="/img/charge/무통장입금.png" >무통장입금</GridButton>
                <GridButton $img="/img/charge/toss_logo.svg">toss pay</GridButton>
                <GridButton $img="/img/charge/네이버페이2.png">네이버페이</GridButton>
                <GridButton $img="/img/charge/카카오페이!.png" >카카오페이</GridButton>
            </GridContainer>
            
        </FreeMileageContainer>
    )
}
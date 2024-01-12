import styled from 'styled-components';
import ContainerRow from '../../Components/Container/ContainerRow';
import ContainerColumn from '../../Components/Container/ContainerColumn';

const TextHeader = styled.h1`
`

const ImageContainer = styled(ContainerRow)`
    justify-content: center;
`

function Image({$src}) {
    const ImageDiv = styled.div`
        border: 2px solid black;
        border-radius: 50%;
        overflow: hidden;
    `
    const ImageItem = styled.img`
        width: 100px;
        height: 100px;
    `
    return (
        <ImageDiv>
            <ImageItem src={$src}/>
        </ImageDiv>
    )
}

const ImageType = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ImageText = styled.p`
`

export default function Component(){

    return (
        <ContainerColumn>
            <TextHeader>계약서 고민을 해결해 드립니다</TextHeader>

            <ImageContainer>
                <ImageType>
                    <Image $src="/img/sample.png"/>
                    <ImageText>개똥이</ImageText>
                </ImageType>
                <ImageType>
                    <Image $src="/img/sample.png"/>
                    <ImageText>개똥이</ImageText>
                </ImageType>
                <ImageType>
                    <Image $src="/img/sample.png"/>
                    <ImageText>개똥이</ImageText>
                </ImageType>
            </ImageContainer>
        </ContainerColumn>
    )
}
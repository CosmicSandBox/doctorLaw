import styled from 'styled-components';
import BeigeContainer from './BeigeContainer';

const TextHeader = styled.h1`
    font-family: 'LINE-Bd';
    font-size: 2rem;
`
const TypeContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    align-items:center;
`
const TypeButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 10px;
`
const Image = styled.img`
    width: ${props => props.$width};
    height: ${props => props.$height};
`
const ImageDescription = styled.h1`
    font-family: 'LINE-Bd';
    font-size: 1.5rem;
`

export default function Component(){
    return(
        <BeigeContainer>
            <TextHeader>계약서를 알려주세요!</TextHeader>
            <TypeContainer>
                <TypeButton>
                    <Image $width="80px" $height="100px" src="/img/type/pdf.png"/>
                    <ImageDescription>PDF로 등록</ImageDescription>
                </TypeButton>
                <TypeButton>
                    <Image $width="140px" $height="100px" src="/img/type/img.png"/>
                    <ImageDescription>PDF로 등록</ImageDescription>
                </TypeButton>
            </TypeContainer>
        </BeigeContainer>
    )
}
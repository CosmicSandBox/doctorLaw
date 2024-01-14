import styled from 'styled-components';

const TypeButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex: 1;
`;

const Image = styled.img`
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
`;

const TextH1 = styled.h1`
    font-family: "LINE-Bd";
    font-size: 1.5rem;
    color = ${props => props.$color};
`;

const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    align-items:center;
    cursor: pointer;
    gap:10px;
`

export default function Component({$fileType, $label, $onFileSelect, $imgWidth, $imgHeight, $imgSrc}){

    return(
        <TypeButton>
            <input 
                type="file"
                style={{ display: "none" }}
                accept={$fileType}
                onChange={$onFileSelect}
                id={$fileType}
            />
            <StyledLabel htmlFor={$fileType}>
                <Image $width={$imgWidth} $height={$imgHeight} src={$imgSrc}/>
                <TextH1> {$label} </TextH1>
            </StyledLabel>
        </TypeButton>
    )
}
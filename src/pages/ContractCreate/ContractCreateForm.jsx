import styled from 'styled-components';
import ContainerColumn from '../../Components/Container/ContainerColumn';
import ContainerRow from '../../Components/Container/ContainerRow';

const FormContainer = styled(ContainerColumn)`
    align-items: center;
    background: #D6E4F7;
    padding: 30px;
    gap: 10px;
`
const RowFormContainer = styled(ContainerRow)`
    width: 100%;
    gap: 2rem;
`

const SubmitButton = styled.button`
    padding: 20px;
    margin: 10px;
    color: white;
    cursor: pointer;
    background: #F48553;

    font-family: LINE-Bd;
    font-size: 1.2rem;
    border: none;
    border-radius: 20px;
`

const TextHeader = styled.h1`
    font-family: LINE-Bd;
    font-size: 1.5rem;
`
const TextDescription = styled.p`
    font-size: 1.5rem;
`

const FieldHeader = styled.h1`
    font-family: LINE-Bd;
    font-size: 1rem;
    width: 10rem;
`
const FieldInput = styled.input`
    width: 100%;
    padding: 10px;
    font-family: LINE-Rg;
    font-size: 1rem;
`

const formGuideData = [
    ['계약 당사자1','True','계약 당사자1의 역할을 입력해주세요.(ex 고용주, 임대인, 증여자 등)'],
    ['계약 당사자2','True','계약 당사자2의 역할을 입력해주세요.(ex 근로자, 임차인, 수증자 등)'],
    ['계약 당사자1의 권리','False','꼭 넣고 싶은 권리를 입력해주세요. (선택)'],
    ['계약 당사자1의 의무','False','꼭 넣고 싶은 의무를 입력해주세요. (선택)'],
    ['계약 당사자2의 권리','False','꼭 넣고 싶은 권리를 입력해주세요. (선택)'],
    ['계약 당사자2의 의무','False','꼭 넣고 싶은 의무를 입력해주세요. (선택)'],
    ['의무 불이행 시 조건','False','계약상의 의무를 불이행하거나 지체했을 경우 원하는 조치를 입력해주세요. (선택)']
]

export default function Component({$type}) {
    return(
        <FormContainer>
            <TextHeader>가이드라인 제공을 위한 간단한 정보를 입력해주세요!</TextHeader>
            <TextDescription>선택한 계약 종류 : {$type || "선택되지 않음"}</TextDescription>
            {
                formGuideData.map(el => (
                    <RowFormContainer>
                        <FieldHeader>{el[0]}</FieldHeader>
                        <FieldInput placeholder={el[2]}/>
                    </RowFormContainer>
                ))
            }
            <SubmitButton>계약서 가이드라인 받기</SubmitButton>
        </FormContainer>
    )
}
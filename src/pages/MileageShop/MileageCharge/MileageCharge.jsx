import styled from 'styled-components';
import ContainerColumn from '../../../Components/Container/ContainerColumn';
import FreeMileage from './FreeMileage';
import HowToPay from './HowToPay';

const PageContainer = styled(ContainerColumn)`
    padding: 30px;
`

const StyledHr = styled.hr`
  border: none;
  height: 1px;
  background-color: gray;
  width: 100%;
`;

export default function Component() {
    return (
        <PageContainer>
            <FreeMileage/> {/* 무료 마일리지 영역 */}
            <StyledHr/>
            <HowToPay/>
        </PageContainer>
    )
}
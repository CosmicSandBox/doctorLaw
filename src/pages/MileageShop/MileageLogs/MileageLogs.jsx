import styled from 'styled-components';
import ContainerColumn from '../../../Components/Container/ContainerColumn';
import MileageLog from './MyMileage';
import MyHistory from './MyHistory';

const PageContainer = styled(ContainerColumn)`
    padding: 30px;
`

export default function Component() {
    return (
        <PageContainer>
            <MileageLog/>
            <MyHistory />
        </PageContainer>
    )
}
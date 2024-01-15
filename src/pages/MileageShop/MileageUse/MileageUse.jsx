import styled from 'styled-components';
import ContainerColumn from '../../../Components/Container/ContainerColumn';
import BuyCard from './BuyCard';
import BuySubsccription from './BuySubscription';

const PageContainer = styled(ContainerColumn)`
    padding: 30px;
`

const StyledHr = styled.hr`
  border: none;
  height: 1px;

  margin: 50px 0;

  background-color: gray;
  width: 100%;
`;

export default function Component() {
    return (
        <PageContainer>
            <BuyCard/>
            <StyledHr/>
            <BuySubsccription/>
        </PageContainer>
    )
}
import styled from 'styled-components';
import MainBackground from './MainBackground';
import MainBanner from './MainBanner';
import ContainerRow from '../../Components/Container/ContainerRow';
import ContractAnalyzeButton from './Buttons/ContractAnalyzeButton';
import ContractCreateButton from './Buttons/ContractCreateButton';
import MileageShopButton from './Buttons/MileageShopButton';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
`;

export default function Component() {

  return (
    <MainBackground>
      <MainContainer>

        <MainBanner/> {/* 재우 파트 */}

        <ContainerRow $gap="30px"> {/* 재우 파트 */}
          <ContractAnalyzeButton/>
          <ContractCreateButton/>
        </ContainerRow>

        <MileageShopButton/>

      </MainContainer>
    </MainBackground>
  );
};

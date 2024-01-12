import styled from 'styled-components';
import MainBackground from './MainBackground';
import MainBanner from './MainBanner';
import ContainerRow from '../../Components/Container/ContainerRow';
import ContractAnalyzeButton from './Buttons/ContractAnalyzeButton';
import ContractCreateButton from './Buttons/ContractCreateButton';
import MileageShopButton from './Buttons/MileageShopButton';
import Header from '../../Components/Header/Header';

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

        <MainBanner /> {/* 재우 파트 - 배너 이미지 영역*/}

        <ContainerRow $gap="30px"> {/* 수혁 파트 - 버튼 영역*/}
          <ContractAnalyzeButton />
          <ContractCreateButton />
        </ContainerRow>

        <MileageShopButton /> {/* 수혁 파트 - 마일리지 샵 영역*/}

      </MainContainer>
    </MainBackground>
  );
};

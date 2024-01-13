import { styled } from 'styled-components';
import ContainerColumn from '../../Components/Container/ContainerColumn';
import ChoiceType from './ProcessContainer/ChoiceType';
import HowItGoes from './HowItGoes';
import AdMileageShop from './AdMileageShop';
import MileageShopButton from '../MainPage/Buttons/MileageShopButton'

const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

export default function Component() {
  return (
    <ContainerColumn>
      <ChoiceType />
      <NoticeContainer>
        <HowItGoes />
        <AdMileageShop />
        <MileageShopButton $width="none" />
      </NoticeContainer>
    </ContainerColumn>
  );
};

import { styled } from "styled-components";
import { Outlet } from "react-router-dom";
import ContainerColumn from "../../Components/Container/ContainerColumn";
import HowItGoes from "./SelectResults/HowItGoes";
import AdMileageShop from "./AdMileageShop";
import MileageShopButton from "../MainPage/Buttons/MileageShopButton";

const NoticeContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
`;

export default function Component() {
  return (
    <ContainerColumn>
      <Outlet/>
      <NoticeContainer>
        <HowItGoes/>
        <AdMileageShop/>
        <MileageShopButton $width="none"/>
      </NoticeContainer>
    </ContainerColumn>
  );
};

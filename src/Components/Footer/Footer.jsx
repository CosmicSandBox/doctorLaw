import { styled } from 'styled-components';
import ContainerCenter from '../Container/ContainerCenter';
import ContainerColumn from '../Container/ContainerColumn';
import ContainerRow from '../Container/ContainerRow';

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #D9D9D9;
`;

const Logo = styled.div`
    width: 200px;
    height: 100px;
    img {
        width: 100%;
        height: 100%;
    }
`

const Icon = styled.div`
    width: 100px;
    height: 50px;
    img {
         width: 100%;
        height: 100%;
    }
`

const Sizedbox = styled.div`
   height: 20px;
`

const StyledLink = styled.a`
    color: white;
    text-decoration: none;
`;

export default function Component() {
    return (
        <FooterContainer>
            <ContainerCenter>
                <Logo>
                    <img src="img/로고.svg" alt="로고" />
                </Logo>
            </ContainerCenter>
            <ContainerCenter>
                <ContainerColumn>
                    <p>COMPANY</p>
                    <Sizedbox />
                    <p>상호: Dr.Law</p>
                    <p>사업자 등록 번호: NNNNNNNNN</p>
                    <Sizedbox />
                    <p>대표: 이수혁</p>
                </ContainerColumn>
            </ContainerCenter>
            <ContainerCenter>
                <ContainerColumn>
                    <p>CONTACT US</p>
                    <Sizedbox />
                    <ContainerRow>
                        <Icon>
                            <img src="img/icon_insta.svg" alt="로고" />
                        </Icon>
                        <p>DrLaw.Official</p>
                    </ContainerRow>
                    <ContainerRow>
                        <Icon>
                            <img src="img/icon_email.svg" alt="로고" />
                        </Icon>
                        <p>xxxxxxxxx@gmail.com</p>
                    </ContainerRow>
                </ContainerColumn>
            </ContainerCenter>
        </FooterContainer>
    );
};
import { styled } from 'styled-components';
import ContainerCenter from '../Container/ContainerCenter';

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #122033;
    color: white;
`;

const Logo = styled.div`
    width: 100px;
    height: 50px;
    padding-left: 20px;
    img {
        width: 100%;
        height: 100%;
    }
`

const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const LoginContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const Sizedbox = styled.div`
   width: 20px;
`

const StyledLink = styled.a`
    color: white;
    text-decoration: none;
`;

export default function Component() {
    return (
        <HeaderContainer>
            <Logo>
                <StyledLink href="/">
                    <img src="img/로고.svg" alt="로고" />
                </StyledLink>
            </Logo>
            <MenuContainer>
                <ContainerCenter>
                    <StyledLink href="/analyze">계약서 분석</StyledLink>
                </ContainerCenter>
                <Sizedbox />
                <ContainerCenter>
                    <StyledLink href="/create">계약서 생성</StyledLink>
                </ContainerCenter>
                <Sizedbox />
                <ContainerCenter>
                    <LoginContainer>
                        <StyledLink href="/login">로그인</StyledLink>
                        <Sizedbox />
                        <p>|</p>
                        <Sizedbox />
                        <StyledLink href="/signup">회원가입</StyledLink>
                    </LoginContainer>
                </ContainerCenter>
                <Sizedbox />
            </MenuContainer>
        </HeaderContainer>
    );
};
import * as React from "react";
import styled from "@emotion/styled";
import Search from "./search_bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { RouteComponentProps } from "@reach/router";
import { Link } from "@reach/router";

const HeaderContainer = styled.header`
  display: flex;
`;

const LeftSection = styled.div`
  width: 25%;
`;

const CenterSection = styled.div`
  width: 50%;
`;

const RightSection = styled.div`
  width: 25%;
`;

const HomeButton = styled(Link)`
  font-size: 35px;
`;

interface PageProps {
  navigate: RouteComponentProps["navigate"];
}

const Header: React.FunctionComponent<PageProps> = ({ navigate }) => {
  return (
    <HeaderContainer>
      <LeftSection>
        <HomeButton to="/">
          <FontAwesomeIcon icon={faHome} />
        </HomeButton>
      </LeftSection>
      <CenterSection>
        <Search navigate={navigate} />
      </CenterSection>
      <RightSection />
    </HeaderContainer>
  );
};

export default Header;

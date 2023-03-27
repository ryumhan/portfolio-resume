import { TypoGraphy } from '@/components/common-style';
import { LayOutContainer, NavItem, NavMenu } from './style';

interface Props {
  children: React.ReactElement;
}

const Layout = ({ children }: Props): React.ReactElement => {
  return (
    <LayOutContainer>
      {/* nav bar */}
      <NavMenu>
        <NavItem>
          <TypoGraphy>Ryu MyungHan</TypoGraphy>
        </NavItem>
        <NavItem>
          <TypoGraphy>Career</TypoGraphy>
        </NavItem>
        <NavItem>
          <TypoGraphy>Project</TypoGraphy>
        </NavItem>
        <NavItem>
          <TypoGraphy>Education</TypoGraphy>
        </NavItem>
      </NavMenu>

      {/* contents */}
      {children}
    </LayOutContainer>
  );
};

export default Layout;

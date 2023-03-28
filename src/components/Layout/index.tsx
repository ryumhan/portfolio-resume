import { useMemo } from 'react';
import { TypoGraphy } from '@/components/common-style';
import { LayOutContainer, NavItem, NavMenu } from './style';

interface Props {
  children: React.ReactElement;
  menuList: string[];
  selectCallback: (select: number) => void;
}

const Layout = ({ children, menuList, selectCallback }: Props): React.ReactElement => {
  return (
    <LayOutContainer>
      {/* nav bar */}
      <NavMenu>
        {useMemo(() => {
          return menuList.map((menu: string, index: number) => {
            return (
              <NavItem onClick={() => selectCallback(index)} key={menu + index}>
                <TypoGraphy>{menu}</TypoGraphy>
              </NavItem>
            );
          });
        }, [menuList])}
      </NavMenu>

      {/* contents */}
      {children}
    </LayOutContainer>
  );
};

export default Layout;

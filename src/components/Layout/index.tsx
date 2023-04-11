import { useMemo } from 'react';
import { Horizontal, TypoGraphy } from '@/components/common-style';
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
      <Horizontal justifyContent="space-between" style={{ width: '100%' }}>
        <div>
          <TypoGraphy style={{ fontSize: '25px' }}>PORTFOLIO</TypoGraphy>
        </div>
        <NavMenu>
          {useMemo(() => {
            return menuList.map((menu: string, index: number) => {
              return (
                <NavItem onClick={() => selectCallback(index)} key={menu + index}>
                  <TypoGraphy style={{ fontSize: '24px' }}>{menu}</TypoGraphy>
                </NavItem>
              );
            });
          }, [menuList])}
        </NavMenu>
      </Horizontal>

      {/* contents */}
      {children}
    </LayOutContainer>
  );
};

export default Layout;

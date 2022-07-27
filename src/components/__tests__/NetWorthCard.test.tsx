import '@testing-library/jest-dom';

import React from 'react';

import { render } from '@testing-library/react';

import { AccountStore } from '../../mobx/accountStore';
import { PortfolioStore } from '../../mobx/portfolioStore';
import { RootStore, StoreProvider } from '../../mobx/rootStore';
import NetWorthCard from '../NetWorthCard';
import testAccount from './testAccount.json';

describe('NetWorthCard', () => {
  const rootStore = new RootStore();
  const accountStore = new AccountStore({ preload: false });
  const portfolioStore = new PortfolioStore();
  const store = { rootStore, accountStore, portfolioStore };
  accountStore.account = testAccount;

  it('renders correctly', () => {
    const tree = render(
      <StoreProvider value={store}>
        <NetWorthCard />
      </StoreProvider>,
    );

    expect(tree).toMatchSnapshot();
  });
});

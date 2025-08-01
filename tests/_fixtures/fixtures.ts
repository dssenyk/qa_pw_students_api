import { mergeTests } from '@playwright/test';
import { test as genericTest } from './fixturesGeneric';
import { test as goodsAPITest } from './fixturesGoodsAPI';
import { test as todosAPI } from './fixturesTodosApi';

export const test = mergeTests(genericTest, goodsAPITest, todosAPI);

export { expect } from '@playwright/test';

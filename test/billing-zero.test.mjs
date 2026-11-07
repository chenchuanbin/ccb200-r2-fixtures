import {test} from 'node:test';
import assert from 'node:assert/strict';
import {amount} from '../modules/billing/amount.mjs';
test('zero is a valid amount, not a missing value',()=>assert.equal(amount(0),0));

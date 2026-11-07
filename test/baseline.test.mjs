import {test} from 'node:test';
import assert from 'node:assert/strict';
import {amount} from '../modules/billing/amount.mjs';
import {quota} from '../modules/limits/quota.mjs';
test('defaults for absent inputs',()=>{assert.equal(amount(undefined),100);assert.equal(quota(undefined),10);});

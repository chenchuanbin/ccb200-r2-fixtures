import {test} from 'node:test';
import assert from 'node:assert/strict';
import {quota} from '../modules/limits/quota.mjs';
test('zero is a valid quota, not a missing value',()=>assert.equal(quota(0),0));

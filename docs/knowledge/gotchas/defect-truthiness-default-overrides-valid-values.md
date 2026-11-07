---
status: proposed
tags:
  - defect
  - lint
sources:
  - https://github.com/chenchuanbin/ccb200-r2-fixtures/pull/1
  - https://github.com/chenchuanbin/ccb200-r2-fixtures/pull/1/files#diff-790eec4ea64330e6416b7cbd69ceecac92f40530f64d59a3605b22469f570321
  - https://github.com/chenchuanbin/ccb200-r2-fixtures/pull/1/files#diff-e9bbbea7e80725b657466e3c4f4f4b8f40d4bf87e97ff11c822f71ec1d454ed5
  - https://github.com/chenchuanbin/ccb200-r2-fixtures/pull/2
  - https://github.com/chenchuanbin/ccb200-r2-fixtures/pull/2/files#diff-ebb31767bdd1e146acaf6acefadfc523c714f40fc630b653059d25315e9f2a33
  - https://github.com/chenchuanbin/ccb200-r2-fixtures/pull/2/files#diff-efe252cee7f571174e1948a43875fdf5cbda8d683b846f887a8fe747637e3d49
reviewed_at: 2026-11-07
cluster: truthiness-default-overrides-valid-values
scope:
  - modules/billing/amount.mjs
  - modules/limits/quota.mjs
  - test/billing-zero.test.mjs
  - test/limits-zero.test.mjs
created_at: 2026-11-07T05:21:07.558Z
severity: S2
evidence_hash: 192c5696a7221bb46b98f30a4d38858e0db89c938839245c258eeb292a4f820c
form: lint
proposal_key: 5c00af45d6cfb1e7276e6da6f81c55430c21a9343615cd2da071702c766fd585
---

# 真值回退覆盖有效值

默认值逻辑使用真值判断，而业务仅将 null 或 undefined 视为缺失，导致合法的假值被默认值覆盖。

先明确字段的缺失值契约，再选择默认值策略；对允许零值的数值字段，自动检查默认值逻辑，并用零值、缺失值和普通值验证行为。

自动检查提议：lint。此提议尚未证明覆盖效果；验证前不能标记为已覆盖。

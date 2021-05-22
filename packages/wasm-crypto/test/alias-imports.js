// Copyright 2019-2021 @polkadot/wasm-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

require('override-require')(
  (request) =>
    request.endsWith('@tetcoin/wasm-crypto-asmjs') ||
    request.endsWith('@tetcoin/wasm-crypto-wasm'),
  (request) =>
    request.endsWith('@tetcoin/wasm-crypto-asmjs')
      ? require('../../wasm-crypto-asmjs/build/data')
      : require('../../wasm-crypto-wasm/build/empty')
);

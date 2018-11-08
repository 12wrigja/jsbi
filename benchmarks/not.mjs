// Copyright 2018 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the “License”);
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// <https://apache.org/licenses/LICENSE-2.0>.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an “AS IS” BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const dataBig = [{
  a: '-0xb5b6e862668e6bc68c13d9f94720ce071f6d0b0a4edb3a',
  r: '0xb5b6e862668e6bc68c13d9f94720ce071f6d0b0a4edb39'
}, {
  a: '-0xe6a3d8d7c7a6d2130b4ba72dca7d6184edf743f076',
  r: '0xe6a3d8d7c7a6d2130b4ba72dca7d6184edf743f075'
}, {
  a: '0xd15689e3ff323d11347c6da0856f7887870f5313087c5d7a9b787ea2c8c4e6c160c8',
  r: '-0xd15689e3ff323d11347c6da0856f7887870f5313087c5d7a9b787ea2c8c4e6c160c9'
}, {
  a: '0xc47ae861b4fd3378056429f8904567c045fa7d4ac697d4a7a48a362',
  r: '-0xc47ae861b4fd3378056429f8904567c045fa7d4ac697d4a7a48a363'
}, {
  a: '-0x248a9134374f29486ab30ccd8018a275b8456281ee0efee3bf818c3ddb6b73b835b51',
  r: '0x248a9134374f29486ab30ccd8018a275b8456281ee0efee3bf818c3ddb6b73b835b50'
}, {
  a: '0xc6863a47c0f91ef47a696341accb5ff00c4975ddea306ad37',
  r: '-0xc6863a47c0f91ef47a696341accb5ff00c4975ddea306ad38'
}, {
  a: '0x763658d6605617ca02d9b8c70471f3fe7ae93d54ae1b0b56418084029d529f8',
  r: '-0x763658d6605617ca02d9b8c70471f3fe7ae93d54ae1b0b56418084029d529f9'
}, {
  a: '0x82151550bc5c5306401da48b8116e463b3fca89b',
  r: '-0x82151550bc5c5306401da48b8116e463b3fca89c'
}, {
  a: '-0x9ac8ed66d3864875a94b666be26c8e01203bd',
  r: '0x9ac8ed66d3864875a94b666be26c8e01203bc'
}, {
  a: '-0x862def7ef6b77a5797ccb9507f60119823e795aabfe646',
  r: '0x862def7ef6b77a5797ccb9507f60119823e795aabfe645'
}, {
  a: '-0x73aba57b065ffd798ada34e621a80fd67e9e0c2df70747e2c7e6195b6f8',
  r: '0x73aba57b065ffd798ada34e621a80fd67e9e0c2df70747e2c7e6195b6f7'
}, {
  a: '-0x5510dbe28ed307e7608913ded9cb649b81a4',
  r: '0x5510dbe28ed307e7608913ded9cb649b81a3'
}, {
  a: '-0x4df9e68c336204ed9fa7991b588c404d31c',
  r: '0x4df9e68c336204ed9fa7991b588c404d31b'
}, {
  a: '-0xefd4aa5bbba62478a8b0c6000a80c9ac3d6425dc2e746de3d89bff1b46ba0aea7f2869',
  r: '0xefd4aa5bbba62478a8b0c6000a80c9ac3d6425dc2e746de3d89bff1b46ba0aea7f2868'
}, {
  a: '-0x659f40e1e8f2d20bc863364f610d499ad1243b31a6645b5cf8055b3ef6e9c6b5c17',
  r: '0x659f40e1e8f2d20bc863364f610d499ad1243b31a6645b5cf8055b3ef6e9c6b5c16'
}, {
  a: '-0x1a61ae7db71384728eaddd8cc0c03f108b66c878276535f5bc27d',
  r: '0x1a61ae7db71384728eaddd8cc0c03f108b66c878276535f5bc27c'
}, {
  a: '0x37e36d9ae49b35294f23c37337249822f9489ea881573983ed211501b193a1c',
  r: '-0x37e36d9ae49b35294f23c37337249822f9489ea881573983ed211501b193a1d'
}, {
  a: '0x41873eb938a2e0e54b01e3c78abeb67be940b87f0ee5ad',
  r: '-0x41873eb938a2e0e54b01e3c78abeb67be940b87f0ee5ae'
}, {
  a: '-0x20242dc9705423ccc999600daccc6c61ee8be071e6540d08103329f78f7fe5d4',
  r: '0x20242dc9705423ccc999600daccc6c61ee8be071e6540d08103329f78f7fe5d3'
}, {
  a: '0x825750f974b8b0fd434331714da15e05136599e24d3a5b9d6db26658ca3b1',
  r: '-0x825750f974b8b0fd434331714da15e05136599e24d3a5b9d6db26658ca3b2'
}, {
  a: '0x1ba335d30c4a0fa75e77d7ac7bc49c46f48ba16674',
  r: '-0x1ba335d30c4a0fa75e77d7ac7bc49c46f48ba16675'
}, {
  a: '-0xd6294608959828581df94fc06cc0a7dfc5512',
  r: '0xd6294608959828581df94fc06cc0a7dfc5511'
}, {
  a: '-0xf0b913221318afb26c98923c417127f3e44289c695464b864c899',
  r: '0xf0b913221318afb26c98923c417127f3e44289c695464b864c898'
}, {
  a: '-0xa09b953d3b9f10e3bfd4f892342aed34db9e3b04414c36db005d7e7025f5ee69348f',
  r: '0xa09b953d3b9f10e3bfd4f892342aed34db9e3b04414c36db005d7e7025f5ee69348e'
}, {
  a: '-0x50e25d51f70b760300c460a6b465eb3f9c29',
  r: '0x50e25d51f70b760300c460a6b465eb3f9c28'
}, {
  a: '-0x882f218b9cba8c6e8d92d3c00eb31b098b4835a387ba6bbce20b755253',
  r: '0x882f218b9cba8c6e8d92d3c00eb31b098b4835a387ba6bbce20b755252'
}, {
  a: '-0x6ee23a530ac16c75094e84a27296dc6d41c989e41ea9dea',
  r: '0x6ee23a530ac16c75094e84a27296dc6d41c989e41ea9de9'
}, {
  a: '-0x78f27bef197da926bfbcc72f03cb3ce67700992fcb91f4fa9dee09696be8f3a27d07',
  r: '0x78f27bef197da926bfbcc72f03cb3ce67700992fcb91f4fa9dee09696be8f3a27d06'
}, {
  a: '0xe757a3167cf7d3e31c9836c2e68f3c092d292',
  r: '-0xe757a3167cf7d3e31c9836c2e68f3c092d293'
}, {
  a: '-0x1d6bb5178840893db395aece8951ba9e817a48f7',
  r: '0x1d6bb5178840893db395aece8951ba9e817a48f6'
}, {
  a: '-0x82878e4b36de53f217e6875add9e823bf630d6feca3665b581518c2a7',
  r: '0x82878e4b36de53f217e6875add9e823bf630d6feca3665b581518c2a6'
}, {
  a: '0xf6983ef2cdf19340a29c6fb8e4bc32df6ffc0b70e0ae',
  r: '-0xf6983ef2cdf19340a29c6fb8e4bc32df6ffc0b70e0af'
}, {
  a: '0x6ed1f1944375e6e583bbdd6d25407ffce72e6365fd77626e1bed521',
  r: '-0x6ed1f1944375e6e583bbdd6d25407ffce72e6365fd77626e1bed522'
}, {
  a: '-0x112059fa06f6e5dc98e784c2c30e39aa4b0b691139b23423241abddcbf48',
  r: '0x112059fa06f6e5dc98e784c2c30e39aa4b0b691139b23423241abddcbf47'
}, {
  a: '-0xb754e6974611dd9e4340c4fc047eb2fcb4ed4ecdfb3e2f5808ada263aec324e',
  r: '0xb754e6974611dd9e4340c4fc047eb2fcb4ed4ecdfb3e2f5808ada263aec324d'
}, {
  a: '-0xf7d1700b862ad4c541a38294adc904429b8922f78184e92307367f891ccdda82',
  r: '0xf7d1700b862ad4c541a38294adc904429b8922f78184e92307367f891ccdda81'
}, {
  a: '0x5d700ce4712d6a0ae1796b3fd88aeb4a6dec12b9ad924d92d1bf54ecc035ccec9',
  r: '-0x5d700ce4712d6a0ae1796b3fd88aeb4a6dec12b9ad924d92d1bf54ecc035cceca'
}, {
  a: '-0x5c992695af562d006aa97d59ec41529990ea996e1d6',
  r: '0x5c992695af562d006aa97d59ec41529990ea996e1d5'
}, {
  a: '0x29b2b76df396f30e5d7082b2c8cdd09ef4da4fa45fc66ffd43bd7f099a4',
  r: '-0x29b2b76df396f30e5d7082b2c8cdd09ef4da4fa45fc66ffd43bd7f099a5'
}, {
  a: '0x6f2cd2e0505c489b2efd98c0017f35c5a7a432fb',
  r: '-0x6f2cd2e0505c489b2efd98c0017f35c5a7a432fc'
}, {
  a: '-0x36b8c4193718050cdfff22eb0a5f861efb8241f5c',
  r: '0x36b8c4193718050cdfff22eb0a5f861efb8241f5b'
}, {
  a: '0x8504a1b95b21922d84af9b6bb4b3f4a1fbc6b1713105038fd',
  r: '-0x8504a1b95b21922d84af9b6bb4b3f4a1fbc6b1713105038fe'
}, {
  a: '0x54de8583e00de9a2c431e2e185965072ee48',
  r: '-0x54de8583e00de9a2c431e2e185965072ee49'
}, {
  a: '0xa14334b87134441d72e24f2f888d6696610863ea',
  r: '-0xa14334b87134441d72e24f2f888d6696610863eb'
}, {
  a: '-0x1db86ae9bbdc588b070c2d8a206e99ab739a46610d1424e36f74df75a112',
  r: '0x1db86ae9bbdc588b070c2d8a206e99ab739a46610d1424e36f74df75a111'
}, {
  a: '0x7842e96d981d69d2634451162cd11fc1fd55',
  r: '-0x7842e96d981d69d2634451162cd11fc1fd56'
}, {
  a: '-0x13975876607b00782cfaca92083c264d052976529208261b374',
  r: '0x13975876607b00782cfaca92083c264d052976529208261b373'
}, {
  a: '0x2cf373c8088a65b2ceb42007ff195b5a90e2352cab5c030e46a977121bf0a',
  r: '-0x2cf373c8088a65b2ceb42007ff195b5a90e2352cab5c030e46a977121bf0b'
}, {
  a: '-0xb79feb4f22d805feb8dfc8bd61bef045e07001746c31',
  r: '0xb79feb4f22d805feb8dfc8bd61bef045e07001746c30'
}, {
  a: '-0x1b0274dfb6601b5c39ce27c97e4aa45d4948073ff28e99d1b25ada1b',
  r: '0x1b0274dfb6601b5c39ce27c97e4aa45d4948073ff28e99d1b25ada1a'
}, {
  a: '-0xbd90c44f997680dd925b4edee8d46b70c2cc4bfe609041ea',
  r: '0xbd90c44f997680dd925b4edee8d46b70c2cc4bfe609041e9'
}, {
  a: '-0x3cb22467215b96638375e723c533b52206a',
  r: '0x3cb22467215b96638375e723c533b522069'
}, {
  a: '0x5e7715d200762401fbf2216e64639ff219dec56b5f4b23616b64e460047727',
  r: '-0x5e7715d200762401fbf2216e64639ff219dec56b5f4b23616b64e460047728'
}, {
  a: '0xad5d0496b9d267e95efd5985413ee0243492cbda1bdf947b',
  r: '-0xad5d0496b9d267e95efd5985413ee0243492cbda1bdf947c'
}, {
  a: '0xf669bd1236014c27986545bd99053b291d748b49eb',
  r: '-0xf669bd1236014c27986545bd99053b291d748b49ec'
}, {
  a: '0x16a8fe178d37f4406b2ce84c8bd1fbc3627d811d500286d2a9a81c',
  r: '-0x16a8fe178d37f4406b2ce84c8bd1fbc3627d811d500286d2a9a81d'
}, {
  a: '0xf28ff097e4df258459cc93f5d81c75441922e6feffa1462130',
  r: '-0xf28ff097e4df258459cc93f5d81c75441922e6feffa1462131'
}, {
  a: '-0x1b2dc223e4700118cc06d64b434b9f5bd9720297ce3565c79bcb7b8fb22',
  r: '0x1b2dc223e4700118cc06d64b434b9f5bd9720297ce3565c79bcb7b8fb21'
}, {
  a: '-0x65de5c36ecfc15605cfaef441a8538d0188',
  r: '0x65de5c36ecfc15605cfaef441a8538d0187'
}, {
  a: '-0xbd5b076bdd08913832041f771c7296711a6353eba',
  r: '0xbd5b076bdd08913832041f771c7296711a6353eb9'
}, {
  a: '-0xd4991d653b26add011b4f36843b6bcd9afd00caf8062e1c10e783e0e4371ed26f68',
  r: '0xd4991d653b26add011b4f36843b6bcd9afd00caf8062e1c10e783e0e4371ed26f67'
}, {
  a: '0xe1d102024de7c718df691e04dae692695ba8f73a6',
  r: '-0xe1d102024de7c718df691e04dae692695ba8f73a7'
}, {
  a: '0xeed60ba9e555eaa6dd04887fb7161b8b319a90ccc73c2781c089938ad2',
  r: '-0xeed60ba9e555eaa6dd04887fb7161b8b319a90ccc73c2781c089938ad3'
}, {
  a: '-0x9bcd94d5cdeacc7fa64d127f629237b164c6cfb7eb338',
  r: '0x9bcd94d5cdeacc7fa64d127f629237b164c6cfb7eb337'
}, {
  a: '0xc31bfb01b23d73896ff67d8488283b2838450f97916',
  r: '-0xc31bfb01b23d73896ff67d8488283b2838450f97917'
}, {
  a: '-0xb291cbbc98cfce59ce35d653e14ccdb4c784e4be5c94c5af5a0',
  r: '0xb291cbbc98cfce59ce35d653e14ccdb4c784e4be5c94c5af59f'
}, {
  a: '-0xe1e976c444a607da1737d5a2667e4b4b93fecc8a1c',
  r: '0xe1e976c444a607da1737d5a2667e4b4b93fecc8a1b'
}, {
  a: '-0x500d8092e567c5b39aa042646177e3c695a0e64d152dea2d454b58',
  r: '0x500d8092e567c5b39aa042646177e3c695a0e64d152dea2d454b57'
}, {
  a: '-0x8108fc560beacbe68cd97d9a622469e6674edb9a750c783',
  r: '0x8108fc560beacbe68cd97d9a622469e6674edb9a750c782'
}, {
  a: '-0xa50e246cd338d1f14da8a1dca5d0fb19f66a4c9ddf5d79eac1',
  r: '0xa50e246cd338d1f14da8a1dca5d0fb19f66a4c9ddf5d79eac0'
}, {
  a: '-0x7736e83ae17b3221d413df98398002512164e39471df4687b60e56dbc2bb50db9be9',
  r: '0x7736e83ae17b3221d413df98398002512164e39471df4687b60e56dbc2bb50db9be8'
}, {
  a: '-0x16c0411ea2f32aafb3ee4dca8e9b0c6633006243d89efbc7fbcdfa',
  r: '0x16c0411ea2f32aafb3ee4dca8e9b0c6633006243d89efbc7fbcdf9'
}, {
  a: '0x4fdcccdeff9f0bfe85e06113e0dd037d5841823b3405b887008459c8204f1a4b',
  r: '-0x4fdcccdeff9f0bfe85e06113e0dd037d5841823b3405b887008459c8204f1a4c'
}, {
  a: '-0x67b7b5510aef937122bdb38c4ffbd010e2170672ed424f6d48',
  r: '0x67b7b5510aef937122bdb38c4ffbd010e2170672ed424f6d47'
}, {
  a: '-0x73c9038f1d1fd3358c140180f36b95c5f3ab320eb5a8611c',
  r: '0x73c9038f1d1fd3358c140180f36b95c5f3ab320eb5a8611b'
}, {
  a: '0xfc8b2ae1e423e22a0c0b8ca3582512930fee1d644c7c2effec6cd6b3a5ee15f726887',
  r: '-0xfc8b2ae1e423e22a0c0b8ca3582512930fee1d644c7c2effec6cd6b3a5ee15f726888'
}, {
  a: '-0x650928beb54fb296a3352bf9fe6f38a1dc6dd27',
  r: '0x650928beb54fb296a3352bf9fe6f38a1dc6dd26'
}, {
  a: '-0x18981bc49c91317660c944952944b1e50cb9b5f09abd70249798',
  r: '0x18981bc49c91317660c944952944b1e50cb9b5f09abd70249797'
}, {
  a: '0x8c8aac7603f573a8ad92825c7a06cad9bf70b7b57146fb4d2c71d1efcd71',
  r: '-0x8c8aac7603f573a8ad92825c7a06cad9bf70b7b57146fb4d2c71d1efcd72'
}, {
  a: '0xe6192a724023e6d7d469d5ae691a97c0e1ac68e25de896c61ee9f5582406ccd',
  r: '-0xe6192a724023e6d7d469d5ae691a97c0e1ac68e25de896c61ee9f5582406cce'
}, {
  a: '0x51d8d9ea4964b642bd7feb8ee57456c80dabce6b6a82f2a80875a3760c4173',
  r: '-0x51d8d9ea4964b642bd7feb8ee57456c80dabce6b6a82f2a80875a3760c4174'
}, {
  a: '-0x488d6602bf4465a6fa50c0717c7a5ba690038881079f49040474d2efaf',
  r: '0x488d6602bf4465a6fa50c0717c7a5ba690038881079f49040474d2efae'
}, {
  a: '-0x386396cf23c3daaeea6413f6f35b669b09ac216f1ebbf92f8957912b90bcff230aa50',
  r: '0x386396cf23c3daaeea6413f6f35b669b09ac216f1ebbf92f8957912b90bcff230aa4f'
}, {
  a: '0xea29b0d802b8f6e6b498703b35e78435bf5b675a1d6d4a5bdab4b50b',
  r: '-0xea29b0d802b8f6e6b498703b35e78435bf5b675a1d6d4a5bdab4b50c'
}, {
  a: '0xe5521c1e63420c01609b7f878475fa2f8fb351c7960d308be',
  r: '-0xe5521c1e63420c01609b7f878475fa2f8fb351c7960d308bf'
}, {
  a: '-0xcdfd5b78d1a84b26bc353a17e93f20879f90cec034d7b0f12fd11fce97dc2dc2',
  r: '0xcdfd5b78d1a84b26bc353a17e93f20879f90cec034d7b0f12fd11fce97dc2dc1'
}, {
  a: '0x405677fa9303d5f5b70c65e648afe7ec66db376499be4fe14b7292aa',
  r: '-0x405677fa9303d5f5b70c65e648afe7ec66db376499be4fe14b7292ab'
}, {
  a: '-0xd6a4ab000f16f69b013cf378d8ca2e9197409c14ce014f63',
  r: '0xd6a4ab000f16f69b013cf378d8ca2e9197409c14ce014f62'
}, {
  a: '0x409261907d9a9592618c4120e94bd7fd4614b23755ee3f099e1b372e5429d804',
  r: '-0x409261907d9a9592618c4120e94bd7fd4614b23755ee3f099e1b372e5429d805'
}, {
  a: '0xe8061f2bced0eb9036c5f9a9a63892a428ec56f',
  r: '-0xe8061f2bced0eb9036c5f9a9a63892a428ec570'
}, {
  a: '0x42cb3c6936dc4cd15354f44de793356f22adf89d1bb7c63d63ccec0d13529',
  r: '-0x42cb3c6936dc4cd15354f44de793356f22adf89d1bb7c63d63ccec0d1352a'
}, {
  a: '-0x53216a44e263db55a92fbc01741cd4341eff42cd050c2b321988d1c4d6f',
  r: '0x53216a44e263db55a92fbc01741cd4341eff42cd050c2b321988d1c4d6e'
}, {
  a: '0x2cc9e42990a50c4d065d653cdd6529d1c4605e6',
  r: '-0x2cc9e42990a50c4d065d653cdd6529d1c4605e7'
}, {
  a: '0xd194d08fe8c4d5525a29e8f0807e170390c17e',
  r: '-0xd194d08fe8c4d5525a29e8f0807e170390c17f'
}, {
  a: '-0x987903840cac88e60d24e1df73cf686cba4b60bcb37257f49',
  r: '0x987903840cac88e60d24e1df73cf686cba4b60bcb37257f48'
}, {
  a: '-0x2f716545ba6b238acc92d8a3605c1905461058d0b2467e538c4037713ec956',
  r: '0x2f716545ba6b238acc92d8a3605c1905461058d0b2467e538c4037713ec955'
}, {
  a: '0xcf5afd88e5360688b0770ea280ddaee0453eab6f1d249ac6f8790d206a65ad086',
  r: '-0xcf5afd88e5360688b0770ea280ddaee0453eab6f1d249ac6f8790d206a65ad087'
}, {
  a: '0xd5114aa48257ff924320995ba8f37f3a68d8b31',
  r: '-0xd5114aa48257ff924320995ba8f37f3a68d8b32'
}, {
  a: '-0x682ce59c9e714c2394ede663648dcff49440ccc0da111a8ad308',
  r: '0x682ce59c9e714c2394ede663648dcff49440ccc0da111a8ad307'
}, {
  a: '-0x118dc6a06f94d62a24a9ba369188876e8c90',
  r: '0x118dc6a06f94d62a24a9ba369188876e8c8f'
}];

const dataSmall = [{
  a: '0x0',
  r: '-0x1'
}, {
  a: '-0xcf2cf4',
  r: '0xcf2cf3'
}, {
  a: '-0x5934605d',
  r: '0x5934605c'
}, {
  a: '-0xe831414df93cc',
  r: '0xe831414df93cb'
}, {
  a: '0x0',
  r: '-0x1'
}, {
  a: '-0x9ed98',
  r: '0x9ed97'
}, {
  a: '0xf8f1509c43854',
  r: '-0xf8f1509c43855'
}, {
  a: '0x26fbcc3babe000',
  r: '-0x26fbcc3babe001'
}, {
  a: '0xc1389b38d',
  r: '-0xc1389b38e'
}, {
  a: '0x9d91b6c6',
  r: '-0x9d91b6c7'
}, {
  a: '0x170f19c83ec',
  r: '-0x170f19c83ed'
}, {
  a: '-0xa3e55',
  r: '0xa3e54'
}, {
  a: '0xfc55701',
  r: '-0xfc55702'
}, {
  a: '0x4acc',
  r: '-0x4acd'
}, {
  a: '0x5cdb30eb43e3f11',
  r: '-0x5cdb30eb43e3f12'
}, {
  a: '0x3a4db627e0d12a',
  r: '-0x3a4db627e0d12b'
}, {
  a: '0xb88a079aa93a88',
  r: '-0xb88a079aa93a89'
}, {
  a: '0xe0428a5341',
  r: '-0xe0428a5342'
}, {
  a: '0x1262142e1784',
  r: '-0x1262142e1785'
}, {
  a: '-0xc73dccd75',
  r: '0xc73dccd74'
}, {
  a: '-0x1',
  r: '0x0'
}, {
  a: '-0x6d',
  r: '0x6c'
}, {
  a: '-0x540bd',
  r: '0x540bc'
}, {
  a: '0xc48b54',
  r: '-0xc48b55'
}, {
  a: '0xb888459f0',
  r: '-0xb888459f1'
}, {
  a: '0xb4a8efeb5643b17',
  r: '-0xb4a8efeb5643b18'
}, {
  a: '-0x67e12ead1b83',
  r: '0x67e12ead1b82'
}, {
  a: '0x25cff955f0',
  r: '-0x25cff955f1'
}, {
  a: '0x22603f516',
  r: '-0x22603f517'
}, {
  a: '0x483973',
  r: '-0x483974'
}, {
  a: '0x3f',
  r: '-0x40'
}, {
  a: '0xae176',
  r: '-0xae177'
}, {
  a: '0x0',
  r: '-0x1'
}, {
  a: '-0x36f2b157f477a08b',
  r: '0x36f2b157f477a08a'
}, {
  a: '0xe902',
  r: '-0xe903'
}, {
  a: '-0xbaf04c75efd87',
  r: '0xbaf04c75efd86'
}, {
  a: '-0x62fb6134',
  r: '0x62fb6133'
}, {
  a: '0xf8f02baefade49',
  r: '-0xf8f02baefade4a'
}, {
  a: '0x54dfa2d034ed1ca',
  r: '-0x54dfa2d034ed1cb'
}, {
  a: '0xe0ca9',
  r: '-0xe0caa'
}, {
  a: '0x0',
  r: '-0x1'
}, {
  a: '0xb33c8263f',
  r: '-0xb33c82640'
}, {
  a: '-0x2f537',
  r: '0x2f536'
}, {
  a: '0xc29288',
  r: '-0xc29289'
}, {
  a: '0x94',
  r: '-0x95'
}, {
  a: '0xc55117c81a56c',
  r: '-0xc55117c81a56d'
}, {
  a: '0x2af5a27',
  r: '-0x2af5a28'
}, {
  a: '0xfdee',
  r: '-0xfdef'
}, {
  a: '-0xccb1c1f5793094a4',
  r: '0xccb1c1f5793094a3'
}, {
  a: '0xe783b903f',
  r: '-0xe783b9040'
}, {
  a: '-0x961fe50b',
  r: '0x961fe50a'
}, {
  a: '-0x9ace',
  r: '0x9acd'
}, {
  a: '-0xe5',
  r: '0xe4'
}, {
  a: '-0x16c6afaa714',
  r: '0x16c6afaa713'
}, {
  a: '0x0',
  r: '-0x1'
}, {
  a: '-0x70fe8ba4c58982',
  r: '0x70fe8ba4c58981'
}, {
  a: '-0x851d05',
  r: '0x851d04'
}, {
  a: '0x90324c790f0e',
  r: '-0x90324c790f0f'
}, {
  a: '-0xdf7e54a7337f',
  r: '0xdf7e54a7337e'
}, {
  a: '-0xc9e3755809a',
  r: '0xc9e37558099'
}, {
  a: '0x86544c7fb61',
  r: '-0x86544c7fb62'
}, {
  a: '0x3d2',
  r: '-0x3d3'
}, {
  a: '0xa849aa1882048a',
  r: '-0xa849aa1882048b'
}, {
  a: '-0xb5e82ebd19d0e5',
  r: '0xb5e82ebd19d0e4'
}, {
  a: '-0x2aade14e',
  r: '0x2aade14d'
}, {
  a: '0xf',
  r: '-0x10'
}, {
  a: '-0xdde8cdb749fb',
  r: '0xdde8cdb749fa'
}, {
  a: '0xefbb',
  r: '-0xefbc'
}, {
  a: '0xa03b1ef8',
  r: '-0xa03b1ef9'
}, {
  a: '-0xe',
  r: '0xd'
}, {
  a: '0xbb529130',
  r: '-0xbb529131'
}, {
  a: '-0xdaf5c6fbb4909ba',
  r: '0xdaf5c6fbb4909b9'
}, {
  a: '-0xc2b93fdd89f5',
  r: '0xc2b93fdd89f4'
}, {
  a: '0x64dcee1aae',
  r: '-0x64dcee1aaf'
}, {
  a: '-0xa27bba8',
  r: '0xa27bba7'
}, {
  a: '0x0',
  r: '-0x1'
}, {
  a: '0x0',
  r: '-0x1'
}, {
  a: '-0x34c96',
  r: '0x34c95'
}, {
  a: '0x93c7cabbc6dd',
  r: '-0x93c7cabbc6de'
}, {
  a: '0x841',
  r: '-0x842'
}, {
  a: '0xdaaf4c5a',
  r: '-0xdaaf4c5b'
}, {
  a: '0x10edf9099039',
  r: '-0x10edf909903a'
}, {
  a: '0xaff6446',
  r: '-0xaff6447'
}, {
  a: '0x29298b',
  r: '-0x29298c'
}, {
  a: '0xfd7b07f206',
  r: '-0xfd7b07f207'
}, {
  a: '0x61',
  r: '-0x62'
}, {
  a: '0x0',
  r: '-0x1'
}, {
  a: '0x0',
  r: '-0x1'
}, {
  a: '-0xe93e023dbdae7256',
  r: '0xe93e023dbdae7255'
}, {
  a: '0xe0133f',
  r: '-0xe01340'
}, {
  a: '-0xc3b166',
  r: '0xc3b165'
}, {
  a: '-0xa67a5a3bf0d93f88',
  r: '0xa67a5a3bf0d93f87'
}, {
  a: '0x908578',
  r: '-0x908579'
}, {
  a: '0xe31',
  r: '-0xe32'
}, {
  a: '-0x2f7b0',
  r: '0x2f7af'
}, {
  a: '0x2482f4d',
  r: '-0x2482f4e'
}, {
  a: '-0x51f333c5c',
  r: '0x51f333c5b'
}, {
  a: '-0xcf77fb55ffd',
  r: '0xcf77fb55ffc'
}, {
  a: '0xf3961d523eaa0',
  r: '-0xf3961d523eaa1'
}, {
  a: '0xdff0f83c65ca5',
  r: '-0xdff0f83c65ca6'
}];

import JSBI from '../jsbi.mjs';
const JSBigInt = JSBI.BigInt;

let errorCount = 0;

const dataBigNative = [];
const dataBigJsb = [];
const dataSmallNative = [];
const dataSmallJsb = [];

function hexParseN(s) {
  if (s.charCodeAt(0) === 0x2D) return -BigInt(s.slice(1));
  return BigInt(s);
}
function parseNative(d) {
  if (d.b) {
    return {a: hexParseN(d.a), b: hexParseN(d.b), r: hexParseN(d.r)};
  }
  return {a: hexParseN(d.a), r: hexParseN(d.r)};
}
function hexParse(s) {
  if (s.charCodeAt(0) === 0x2D) {
    const result = JSBigInt(s.slice(1));
    result.sign = true;
    return result;
  }
  return JSBigInt(s);
}
function parseJSB(d) {
  if (d.b) {
    return {a: hexParse(d.a), b: hexParse(d.b), r: hexParse(d.r)};
  }
  return {a: hexParse(d.a), r: hexParse(d.r)};
}
function prepareData(src, dstNative, dstJsb) {
  for (let i = 0; i < src.length; i++) {
    const d = src[i];
    dstNative.push(parseNative(d));
    dstJsb.push(parseJSB(d));
  }
}
prepareData(dataBig, dataBigNative, dataBigJsb);
prepareData(dataSmall, dataSmallNative, dataSmallJsb);


function testNative(data, reps) {
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    let r = d.a; r = ~r;
    if (d.r !== r) {
      console.log('Input:    ' + d.a.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: ~');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = d.a; r = ~r;
    }
  }
  return Date.now() - t1;
}


function testJsb(data, reps) {
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const r = d.a.bitwiseNot();
    if (!r.equal(d.r)) {
      console.log('Input:    ' + d.a.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: bitwiseNot');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = d.a.bitwiseNot();
    }
  }
  return Date.now() - t1;
}


const kRepsBig = 40000;
const kRepsSmall = 120000;

console.log('Native/big:   ' + testNative(dataBigNative, kRepsBig));
console.log('JSB/big:      ' + testJsb(dataBigJsb, kRepsBig));
console.log('Native/small: ' + testNative(dataSmallNative, kRepsSmall));
console.log('JSB/small:    ' + testJsb(dataSmallJsb, kRepsSmall));

if (errorCount !== 0) {
  console.error('Finished with ' + errorCount + ' errors.');
  // Support both d8 (`quit`) and Node.js (`process.exit`).
  (typeof quit !== 'undefined' ? quit : process.exit)(1);
}

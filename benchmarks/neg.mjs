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
  a: '0xf5d4b5e0073b3788aa82343729846495730439d5218935df343a7f64b',
  r: '-0xf5d4b5e0073b3788aa82343729846495730439d5218935df343a7f64b'
}, {
  a: '0xc9a92800e4b95f5b4b4930e051719ce3b878b9e1',
  r: '-0xc9a92800e4b95f5b4b4930e051719ce3b878b9e1'
}, {
  a: '-0x249b1b538ef70d28483f735e8e3250ed306299987296d8777d5bd0c98c4',
  r: '0x249b1b538ef70d28483f735e8e3250ed306299987296d8777d5bd0c98c4'
}, {
  a: '-0xacff00e886b1244cdab58225493a40721ad3d0708c4e6bec591856e3be630d',
  r: '0xacff00e886b1244cdab58225493a40721ad3d0708c4e6bec591856e3be630d'
}, {
  a: '0xc2dc83c9720ab727dbc9fa497d91c56639f38d263e89f175d76cb6eb',
  r: '-0xc2dc83c9720ab727dbc9fa497d91c56639f38d263e89f175d76cb6eb'
}, {
  a: '0x276ae24893e0018076ce18fe75145df40793d3b7a87256f04186d2180af34b83f',
  r: '-0x276ae24893e0018076ce18fe75145df40793d3b7a87256f04186d2180af34b83f'
}, {
  a: '0x99f90508e6f3f48014c5112809d44f476485b8e2b17b17e3cde0162a938588',
  r: '-0x99f90508e6f3f48014c5112809d44f476485b8e2b17b17e3cde0162a938588'
}, {
  a: '-0x32607fafe21c77df7e9b1ee19d6d258d7d58d10df08297c752df6784e6',
  r: '0x32607fafe21c77df7e9b1ee19d6d258d7d58d10df08297c752df6784e6'
}, {
  a: '0x1ae2d690a61338702a55499182a68ab5c26ab28ffdeae33f44f',
  r: '-0x1ae2d690a61338702a55499182a68ab5c26ab28ffdeae33f44f'
}, {
  a: '-0x6e9a0919b38faeee50464079b0cf6611afa2ad01',
  r: '0x6e9a0919b38faeee50464079b0cf6611afa2ad01'
}, {
  a: '-0xea1ea95aa20fb7eda1a8436b37c086c208aa',
  r: '0xea1ea95aa20fb7eda1a8436b37c086c208aa'
}, {
  a: '-0x5d606bbfa0989d15e9ce6561da6c0d6a915637db78192834e4c432dee556f44c00f',
  r: '0x5d606bbfa0989d15e9ce6561da6c0d6a915637db78192834e4c432dee556f44c00f'
}, {
  a: '-0xe5d608656ce16a6ec890bb491a5e59f8439b319d9cf5a5a978eace891',
  r: '0xe5d608656ce16a6ec890bb491a5e59f8439b319d9cf5a5a978eace891'
}, {
  a: '-0x1a35b1ce2de9097d75925df6391f55347edbfa71868b7a2c8fd63a0d',
  r: '0x1a35b1ce2de9097d75925df6391f55347edbfa71868b7a2c8fd63a0d'
}, {
  a: '0xfb8f04643b7c4c67af7bdf531ab3ef3e5bc5922397911bdd0b4a6d953299074f498b9',
  r: '-0xfb8f04643b7c4c67af7bdf531ab3ef3e5bc5922397911bdd0b4a6d953299074f498b9'
}, {
  a: '-0xd457228a90f02ec465774dd7ad7a3a8507d457',
  r: '0xd457228a90f02ec465774dd7ad7a3a8507d457'
}, {
  a: '-0x315f653b9b15949b67f1136dc3f37fdbe3b0cd1d3c',
  r: '0x315f653b9b15949b67f1136dc3f37fdbe3b0cd1d3c'
}, {
  a: '-0x16a16571d5a05bcb029e67b50818dc3576545c798b95e798e0a45ed',
  r: '0x16a16571d5a05bcb029e67b50818dc3576545c798b95e798e0a45ed'
}, {
  a: '-0x8fb84ba270f6cee82d9385bf639daf542301e88',
  r: '0x8fb84ba270f6cee82d9385bf639daf542301e88'
}, {
  a: '0x2fca976a054e175437670047e0f7d58b5afbe60c2ed0fb59',
  r: '-0x2fca976a054e175437670047e0f7d58b5afbe60c2ed0fb59'
}, {
  a: '-0x967b57ae02b85b55ea2127fe6aab79e7ef9985a18675577c2b823d97a2bfaa01c01',
  r: '0x967b57ae02b85b55ea2127fe6aab79e7ef9985a18675577c2b823d97a2bfaa01c01'
}, {
  a: '-0xcfd33e4e29b3e38b38424e19281edca9fb10d14c3f53621314b7dbdcb',
  r: '0xcfd33e4e29b3e38b38424e19281edca9fb10d14c3f53621314b7dbdcb'
}, {
  a: '0xbfaa332990ff60755afe6552ea1bbec1fb64b16a310c045a8f59703a',
  r: '-0xbfaa332990ff60755afe6552ea1bbec1fb64b16a310c045a8f59703a'
}, {
  a: '-0x5ffd5f08fb2402993a73adb0531c8c9b90d8c3a4',
  r: '0x5ffd5f08fb2402993a73adb0531c8c9b90d8c3a4'
}, {
  a: '0x1b968a678f540111dab9f2c7954077c263897272fad',
  r: '-0x1b968a678f540111dab9f2c7954077c263897272fad'
}, {
  a: '-0xd1be1dc52286a8ab5d37e5f5451fb79ce1c3f909034781906030f0d0619c400ee84',
  r: '0xd1be1dc52286a8ab5d37e5f5451fb79ce1c3f909034781906030f0d0619c400ee84'
}, {
  a: '-0x286f96ecc052d446cb60ef0adb691a28f139c3bde4113e793bde039e9',
  r: '0x286f96ecc052d446cb60ef0adb691a28f139c3bde4113e793bde039e9'
}, {
  a: '-0xeea1025c2b2f61f40f89b3d5242a6352c2161fc83712c4ff4fb44505f5f2d4bc',
  r: '0xeea1025c2b2f61f40f89b3d5242a6352c2161fc83712c4ff4fb44505f5f2d4bc'
}, {
  a: '0xc763dd4811b0a1ddcec44caef50dcba1f27896f89fcbcc2fcc47b2acea76c8b97ae',
  r: '-0xc763dd4811b0a1ddcec44caef50dcba1f27896f89fcbcc2fcc47b2acea76c8b97ae'
}, {
  a: '-0xa1c65e6c3f46cf1ed4beff8fb9684ffd6969079c35e98437fc126',
  r: '0xa1c65e6c3f46cf1ed4beff8fb9684ffd6969079c35e98437fc126'
}, {
  a: '-0xf5242f8f597eb816c715b9945135e792507b79ae313c694aeffb5dc9',
  r: '0xf5242f8f597eb816c715b9945135e792507b79ae313c694aeffb5dc9'
}, {
  a: '0xcf873f7d1802c10258376ad7d06380ec1d23d79961d1dccf459c09899a635ff478',
  r: '-0xcf873f7d1802c10258376ad7d06380ec1d23d79961d1dccf459c09899a635ff478'
}, {
  a: '-0xf30c1d5070baf3699e8c9bfdac65a9b78556dfe00e4ffda7c00f645253938eb6b',
  r: '0xf30c1d5070baf3699e8c9bfdac65a9b78556dfe00e4ffda7c00f645253938eb6b'
}, {
  a: '-0xdbc740291388800ed37f82aa409f50661e45b6844e5a7638e3305b6686',
  r: '0xdbc740291388800ed37f82aa409f50661e45b6844e5a7638e3305b6686'
}, {
  a: '-0x8903e016d57716eedb7e589717e734355fb96c',
  r: '0x8903e016d57716eedb7e589717e734355fb96c'
}, {
  a: '0xd626265a724a9130f00f7babf830272ca93b2959e3c3',
  r: '-0xd626265a724a9130f00f7babf830272ca93b2959e3c3'
}, {
  a: '-0x2d9cbfb5978c4b8a6f7712a8386cc1f864f5623640',
  r: '0x2d9cbfb5978c4b8a6f7712a8386cc1f864f5623640'
}, {
  a: '-0x7eb8298e080b1ada9b2c8704e08a28595505475',
  r: '0x7eb8298e080b1ada9b2c8704e08a28595505475'
}, {
  a: '0x95608bd6eb2c79b2720e9b0d5660a8078ac9c126d9b934f8dc7a',
  r: '-0x95608bd6eb2c79b2720e9b0d5660a8078ac9c126d9b934f8dc7a'
}, {
  a: '0x9b750f8f8b0eb47362ff63da343cce4ffb0ee767896cfe984140205272532bd',
  r: '-0x9b750f8f8b0eb47362ff63da343cce4ffb0ee767896cfe984140205272532bd'
}, {
  a: '0x5d2a38c02fdb4f4101047a00fda5f062ee2f5e7fd699e4fc0dc4b42a89',
  r: '-0x5d2a38c02fdb4f4101047a00fda5f062ee2f5e7fd699e4fc0dc4b42a89'
}, {
  a: '-0xf5c09ad79ae849b77bf71510828ae5e5bc1b6d4d1ce99a4536069c85d68bf68e5',
  r: '0xf5c09ad79ae849b77bf71510828ae5e5bc1b6d4d1ce99a4536069c85d68bf68e5'
}, {
  a: '0x560350f43981d2dc8266772e4ad57335342e6381722',
  r: '-0x560350f43981d2dc8266772e4ad57335342e6381722'
}, {
  a: '-0xa2d8c5c0899f9f6346b0215ab73c0e3fa1512b3648705',
  r: '0xa2d8c5c0899f9f6346b0215ab73c0e3fa1512b3648705'
}, {
  a: '0x26106f23c6d9808f80bab55a7e25e4c0a472c4cda3',
  r: '-0x26106f23c6d9808f80bab55a7e25e4c0a472c4cda3'
}, {
  a: '-0xde82857e50c46cb2150c3c795511398779d332607e5fdd0f3dec3f72d4c3cb',
  r: '0xde82857e50c46cb2150c3c795511398779d332607e5fdd0f3dec3f72d4c3cb'
}, {
  a: '0x1ce3325bfab66dba8568b4164832ee023b5c7635a216373752c4d7742334c8ce',
  r: '-0x1ce3325bfab66dba8568b4164832ee023b5c7635a216373752c4d7742334c8ce'
}, {
  a: '0x589a4b534e14ae66fc104502ee95a1df826eda7364d1b6e49c7ce1c8898ca81646f8a',
  r: '-0x589a4b534e14ae66fc104502ee95a1df826eda7364d1b6e49c7ce1c8898ca81646f8a'
}, {
  a: '-0x813bba00b52e2dbf316a5526edaa257eb1935b88fd50d6aa93675b5b7eaf5d7bb',
  r: '0x813bba00b52e2dbf316a5526edaa257eb1935b88fd50d6aa93675b5b7eaf5d7bb'
}, {
  a: '-0x8d9c2a5eb25d102c8c5e00d561b2333ff161dabd81',
  r: '0x8d9c2a5eb25d102c8c5e00d561b2333ff161dabd81'
}, {
  a: '-0x644489aa1f259bef6fe1b02343788d56f61292f4e',
  r: '0x644489aa1f259bef6fe1b02343788d56f61292f4e'
}, {
  a: '0xadd6d75e32e252806332f5e835a0180021c7',
  r: '-0xadd6d75e32e252806332f5e835a0180021c7'
}, {
  a: '-0x4b40ccc2128fc1760f04b0abb992141b85a3625343bd1478f5ad74a5602',
  r: '0x4b40ccc2128fc1760f04b0abb992141b85a3625343bd1478f5ad74a5602'
}, {
  a: '-0x1f976926ee8ee52faabd3d37f6b9f54ebcbcc32ccfe0b373026e8cf42ce7964457d9',
  r: '0x1f976926ee8ee52faabd3d37f6b9f54ebcbcc32ccfe0b373026e8cf42ce7964457d9'
}, {
  a: '0x27e78d29a3830cba333fc71345fb0cb24fc8de2413e8',
  r: '-0x27e78d29a3830cba333fc71345fb0cb24fc8de2413e8'
}, {
  a: '-0x302e2c688b5b55c6c152a25e039bb00378fff42f68c2f07d4990b14a791fc7bc847bff',
  r: '0x302e2c688b5b55c6c152a25e039bb00378fff42f68c2f07d4990b14a791fc7bc847bff'
}, {
  a: '-0xa0d437d09957372b3b92e68674f71dffcd3',
  r: '0xa0d437d09957372b3b92e68674f71dffcd3'
}, {
  a: '0xe00625cd189829ef828c42b0b227b25e3b89e544075d94436cc38ca2421f11c',
  r: '-0xe00625cd189829ef828c42b0b227b25e3b89e544075d94436cc38ca2421f11c'
}, {
  a: '0x2e78ee849ef19ea789e005b7c98dfb086f0ea120fd31b33e7a3f',
  r: '-0x2e78ee849ef19ea789e005b7c98dfb086f0ea120fd31b33e7a3f'
}, {
  a: '-0xf4625ba8f7c56500588ae841c93cb02273e01dfcc61f',
  r: '0xf4625ba8f7c56500588ae841c93cb02273e01dfcc61f'
}, {
  a: '-0xc65391d0c14a534e05a797379a857afebc8af130070defd12cc5da39c6323caaf240',
  r: '0xc65391d0c14a534e05a797379a857afebc8af130070defd12cc5da39c6323caaf240'
}, {
  a: '0xc06c66e34224cf03d07ca52001b39eaed77ce2f3d8b435a81c4f10a2b8e7ee4d29e',
  r: '-0xc06c66e34224cf03d07ca52001b39eaed77ce2f3d8b435a81c4f10a2b8e7ee4d29e'
}, {
  a: '-0x9447bb9c4bfb363e6ca465354d3c3d50cbc2533d3dc939d4a',
  r: '0x9447bb9c4bfb363e6ca465354d3c3d50cbc2533d3dc939d4a'
}, {
  a: '-0x95ffbd9c240dd85fe7e4f1b34703f7b255dc482a5b',
  r: '0x95ffbd9c240dd85fe7e4f1b34703f7b255dc482a5b'
}, {
  a: '-0xac2fcc11576ace6c0780ebeaba6b9682935138a3b3c021ddf',
  r: '0xac2fcc11576ace6c0780ebeaba6b9682935138a3b3c021ddf'
}, {
  a: '0xff7a8192836c38939e1d4e454f901c6224fdf2eae',
  r: '-0xff7a8192836c38939e1d4e454f901c6224fdf2eae'
}, {
  a: '0x17ad684551bf10c2acdeaac9e14b53dc3f4e6bed6b49c9684330df874ffe271e6',
  r: '-0x17ad684551bf10c2acdeaac9e14b53dc3f4e6bed6b49c9684330df874ffe271e6'
}, {
  a: '-0xe91bbc0f915700842375e89d7ccf0537fdc0cb',
  r: '0xe91bbc0f915700842375e89d7ccf0537fdc0cb'
}, {
  a: '0x3bcfd8d45cb7b7a1bd948ea1fe0cfef5933',
  r: '-0x3bcfd8d45cb7b7a1bd948ea1fe0cfef5933'
}, {
  a: '0x1d27f6a981f0832ff73de149447b40c5d05699cf555a8cd123f5b6a0be82d8',
  r: '-0x1d27f6a981f0832ff73de149447b40c5d05699cf555a8cd123f5b6a0be82d8'
}, {
  a: '0xd3f444b31dc91f701a0bdeeda5a777c0ee38fd0',
  r: '-0xd3f444b31dc91f701a0bdeeda5a777c0ee38fd0'
}, {
  a: '-0x874a47ba220f0272d749e269defa38180826890d931fb178603f065096c9',
  r: '0x874a47ba220f0272d749e269defa38180826890d931fb178603f065096c9'
}, {
  a: '0x75547aa4beedebfabaa79e47d582a8b015488edfde1',
  r: '-0x75547aa4beedebfabaa79e47d582a8b015488edfde1'
}, {
  a: '-0xcbc61aaa9fd944ebbdb86d738590393b77fc1ed62db8dbef',
  r: '0xcbc61aaa9fd944ebbdb86d738590393b77fc1ed62db8dbef'
}, {
  a: '-0x77167f35614efa51e03c01dd15b5e8892e92b6af2a4484923352399b11bd38987da2',
  r: '0x77167f35614efa51e03c01dd15b5e8892e92b6af2a4484923352399b11bd38987da2'
}, {
  a: '0xe424ed8a10ef84c5251edd81206680fb8345cef',
  r: '-0xe424ed8a10ef84c5251edd81206680fb8345cef'
}, {
  a: '-0x62d60bb148e1cbee74abfb11826a7ffb1f059dfe14c670ff',
  r: '0x62d60bb148e1cbee74abfb11826a7ffb1f059dfe14c670ff'
}, {
  a: '0x3c6da30ad39657b255af3a6c86497ee8ea0c34f3443',
  r: '-0x3c6da30ad39657b255af3a6c86497ee8ea0c34f3443'
}, {
  a: '0x6f75e06934b8e5c35846e80960f49fad3daca511a728b3941d34d817d48c38',
  r: '-0x6f75e06934b8e5c35846e80960f49fad3daca511a728b3941d34d817d48c38'
}, {
  a: '-0xa86597c2f74aa9eea3aa362c4036644199672e054c16f2a46ee69255b046862',
  r: '0xa86597c2f74aa9eea3aa362c4036644199672e054c16f2a46ee69255b046862'
}, {
  a: '-0x9eb764f7f7e701898948a6b30276277e00940355101782e0f0c4b98',
  r: '0x9eb764f7f7e701898948a6b30276277e00940355101782e0f0c4b98'
}, {
  a: '-0xa49de121e52104829f4d1b60b14cc9d19b83',
  r: '0xa49de121e52104829f4d1b60b14cc9d19b83'
}, {
  a: '0xa12bdcd2622d68a4d7908513f75dfcdbd0c23d40a6cf7edc9e5fa602',
  r: '-0xa12bdcd2622d68a4d7908513f75dfcdbd0c23d40a6cf7edc9e5fa602'
}, {
  a: '0xd6b657694465eef303a0500877cfc3939fdf87a6d34adcba9e1fbc34f37e21',
  r: '-0xd6b657694465eef303a0500877cfc3939fdf87a6d34adcba9e1fbc34f37e21'
}, {
  a: '-0xad5c3fa4454be06b7e287e3c898f967af60bbe72f2a9909a999bb2f2350b55cbda31',
  r: '0xad5c3fa4454be06b7e287e3c898f967af60bbe72f2a9909a999bb2f2350b55cbda31'
}, {
  a: '-0x1a865ecdd39a7587e389eeb8c5b1e873069364fab2b9a21819',
  r: '0x1a865ecdd39a7587e389eeb8c5b1e873069364fab2b9a21819'
}, {
  a: '0xa5ca5141bbeae1e593a9dfa3a0f065e77c8d11327584b0cbb873fd04cc3',
  r: '-0xa5ca5141bbeae1e593a9dfa3a0f065e77c8d11327584b0cbb873fd04cc3'
}, {
  a: '0x88211af9664e8474d0652ea4111ff30cdc13d4',
  r: '-0x88211af9664e8474d0652ea4111ff30cdc13d4'
}, {
  a: '-0x9d11024c32d0fa56e35080befa3465915c1fb9fa770ba7691d',
  r: '0x9d11024c32d0fa56e35080befa3465915c1fb9fa770ba7691d'
}, {
  a: '0x29fc080d4c44187f2c3c9fa98fe36ba5c4a705d4a2dbe',
  r: '-0x29fc080d4c44187f2c3c9fa98fe36ba5c4a705d4a2dbe'
}, {
  a: '0xe1bcbe0bceed4a1cffb70b69c8ae64edfdc972b31cf5b73accb0296143ce65b3',
  r: '-0xe1bcbe0bceed4a1cffb70b69c8ae64edfdc972b31cf5b73accb0296143ce65b3'
}, {
  a: '-0xec198a55b41322119fa8d34d47d12850f6883f2be15',
  r: '0xec198a55b41322119fa8d34d47d12850f6883f2be15'
}, {
  a: '0xdbc0e1614db0b5da1650f831af053f4c7c13d7733b25d775a7e66623cef6c2ab',
  r: '-0xdbc0e1614db0b5da1650f831af053f4c7c13d7733b25d775a7e66623cef6c2ab'
}, {
  a: '-0x5499ee8cb5c498ffefc03c3216ba1afca6c91ef4f17',
  r: '0x5499ee8cb5c498ffefc03c3216ba1afca6c91ef4f17'
}, {
  a: '0x5dee84c09110cdb2676152e5af82ea4329d877b1f385b0',
  r: '-0x5dee84c09110cdb2676152e5af82ea4329d877b1f385b0'
}, {
  a: '-0x836935cd53c2635f1e3b832e7acfe22c03ffe104c96cb06',
  r: '0x836935cd53c2635f1e3b832e7acfe22c03ffe104c96cb06'
}, {
  a: '0xa59a2911089de886d9dbb14239a33e733a619d149490aeed55d',
  r: '-0xa59a2911089de886d9dbb14239a33e733a619d149490aeed55d'
}, {
  a: '-0x7902aea9f3df4a98a4e1ea1e986a4331830bdfb568e6a205f576b5f7f6be677f11',
  r: '0x7902aea9f3df4a98a4e1ea1e986a4331830bdfb568e6a205f576b5f7f6be677f11'
}, {
  a: '0x81c0f59316505373dfef0576ff1f7d902eb01d2683b135',
  r: '-0x81c0f59316505373dfef0576ff1f7d902eb01d2683b135'
}, {
  a: '0x33b4569bdaf4274970687d7bfd2046c5f85d6e2fb37b9418257375f4c5255f5041a2',
  r: '-0x33b4569bdaf4274970687d7bfd2046c5f85d6e2fb37b9418257375f4c5255f5041a2'
}];

const dataSmall = [{
  a: '-0x7e9e2720adf',
  r: '0x7e9e2720adf'
}, {
  a: '0x6745eae6f680e6',
  r: '-0x6745eae6f680e6'
}, {
  a: '-0xeef2d6a431031208',
  r: '0xeef2d6a431031208'
}, {
  a: '0x140bc21c',
  r: '-0x140bc21c'
}, {
  a: '-0xfe00c2',
  r: '0xfe00c2'
}, {
  a: '-0xdc7a4be217',
  r: '0xdc7a4be217'
}, {
  a: '-0xc66502c324d70',
  r: '0xc66502c324d70'
}, {
  a: '0x0',
  r: '0x0'
}, {
  a: '-0x8b',
  r: '0x8b'
}, {
  a: '0x39338551e149',
  r: '-0x39338551e149'
}, {
  a: '0xcda4b5c424c7b4',
  r: '-0xcda4b5c424c7b4'
}, {
  a: '0xe6b8df5ab',
  r: '-0xe6b8df5ab'
}, {
  a: '0x287303012d1641',
  r: '-0x287303012d1641'
}, {
  a: '0x352fe5f',
  r: '-0x352fe5f'
}, {
  a: '-0x77055744804cb4',
  r: '0x77055744804cb4'
}, {
  a: '-0x5df2fde372f5af',
  r: '0x5df2fde372f5af'
}, {
  a: '-0xc6b0d60488cb',
  r: '0xc6b0d60488cb'
}, {
  a: '-0xdc04de2cb8',
  r: '0xdc04de2cb8'
}, {
  a: '0x3f5073d',
  r: '-0x3f5073d'
}, {
  a: '0xf',
  r: '-0xf'
}, {
  a: '-0x8521f',
  r: '0x8521f'
}, {
  a: '0x1a0f31447b6b',
  r: '-0x1a0f31447b6b'
}, {
  a: '0x0',
  r: '0x0'
}, {
  a: '-0x4202',
  r: '0x4202'
}, {
  a: '0xc7f68',
  r: '-0xc7f68'
}, {
  a: '-0x4a664f3',
  r: '0x4a664f3'
}, {
  a: '0xbcffb33ef',
  r: '-0xbcffb33ef'
}, {
  a: '0xd0b',
  r: '-0xd0b'
}, {
  a: '0x733de50e68e8fc3b',
  r: '-0x733de50e68e8fc3b'
}, {
  a: '-0x9e',
  r: '0x9e'
}, {
  a: '0x2c',
  r: '-0x2c'
}, {
  a: '0xeea',
  r: '-0xeea'
}, {
  a: '-0x1c0a950c8f467346',
  r: '0x1c0a950c8f467346'
}, {
  a: '0x85be0be03',
  r: '-0x85be0be03'
}, {
  a: '0xe467ef',
  r: '-0xe467ef'
}, {
  a: '0x5e4a46',
  r: '-0x5e4a46'
}, {
  a: '-0x8565c0d8',
  r: '0x8565c0d8'
}, {
  a: '-0x19f0',
  r: '0x19f0'
}, {
  a: '0x4d4afafbe72e30e',
  r: '-0x4d4afafbe72e30e'
}, {
  a: '-0xc55a39',
  r: '0xc55a39'
}, {
  a: '-0x9e6df6e8955e',
  r: '0x9e6df6e8955e'
}, {
  a: '-0x66fcfefa21a04b',
  r: '0x66fcfefa21a04b'
}, {
  a: '0x6098c7',
  r: '-0x6098c7'
}, {
  a: '0x91584e22657eb06f',
  r: '-0x91584e22657eb06f'
}, {
  a: '0x1f8f001ed1be00f',
  r: '-0x1f8f001ed1be00f'
}, {
  a: '-0xbed1ee5a08d',
  r: '0xbed1ee5a08d'
}, {
  a: '0xaa7b',
  r: '-0xaa7b'
}, {
  a: '0xf',
  r: '-0xf'
}, {
  a: '0x522f572a1d56',
  r: '-0x522f572a1d56'
}, {
  a: '-0xc01c2',
  r: '0xc01c2'
}, {
  a: '0xdb22fb96012',
  r: '-0xdb22fb96012'
}, {
  a: '-0x59f2453ca351',
  r: '0x59f2453ca351'
}, {
  a: '0x41c725dd77',
  r: '-0x41c725dd77'
}, {
  a: '0xd7193',
  r: '-0xd7193'
}, {
  a: '0x990f80611bc96e',
  r: '-0x990f80611bc96e'
}, {
  a: '-0x6c4418',
  r: '0x6c4418'
}, {
  a: '0x4b6170',
  r: '-0x4b6170'
}, {
  a: '-0x1f9863d076415',
  r: '0x1f9863d076415'
}, {
  a: '-0x8ac54',
  r: '0x8ac54'
}, {
  a: '-0x714e49f',
  r: '0x714e49f'
}, {
  a: '0xc795',
  r: '-0xc795'
}, {
  a: '0x8683fe7ea',
  r: '-0x8683fe7ea'
}, {
  a: '0x7af3319dfa521',
  r: '-0x7af3319dfa521'
}, {
  a: '0x43',
  r: '-0x43'
}, {
  a: '-0x974aca441ea78a',
  r: '0x974aca441ea78a'
}, {
  a: '0xda2218',
  r: '-0xda2218'
}, {
  a: '0x465790ce5503c',
  r: '-0x465790ce5503c'
}, {
  a: '0x4',
  r: '-0x4'
}, {
  a: '-0x9e',
  r: '0x9e'
}, {
  a: '-0xfb34e',
  r: '0xfb34e'
}, {
  a: '0xf88ea459f',
  r: '-0xf88ea459f'
}, {
  a: '0x90ed8d',
  r: '-0x90ed8d'
}, {
  a: '0x68885b3b510f493',
  r: '-0x68885b3b510f493'
}, {
  a: '0x42d',
  r: '-0x42d'
}, {
  a: '0x468adddcd78',
  r: '-0x468adddcd78'
}, {
  a: '0xf72b1a',
  r: '-0xf72b1a'
}, {
  a: '0x82e6a70830dd3b12',
  r: '-0x82e6a70830dd3b12'
}, {
  a: '0xde92cbbf407eeb10',
  r: '-0xde92cbbf407eeb10'
}, {
  a: '0xc711f05b509816f9',
  r: '-0xc711f05b509816f9'
}, {
  a: '0x21babf55f1be',
  r: '-0x21babf55f1be'
}, {
  a: '0xa6acb6b',
  r: '-0xa6acb6b'
}, {
  a: '-0x55a1bbc01c',
  r: '0x55a1bbc01c'
}, {
  a: '0x5e981c',
  r: '-0x5e981c'
}, {
  a: '0x45fdd4dfe6e50b56',
  r: '-0x45fdd4dfe6e50b56'
}, {
  a: '0xc91d924fbfa8',
  r: '-0xc91d924fbfa8'
}, {
  a: '-0x5',
  r: '0x5'
}, {
  a: '-0xdf5f342e7',
  r: '0xdf5f342e7'
}, {
  a: '0xee6fc60a6b1630a',
  r: '-0xee6fc60a6b1630a'
}, {
  a: '-0xe3ef626e17437c07',
  r: '0xe3ef626e17437c07'
}, {
  a: '-0x25c0614aa945',
  r: '0x25c0614aa945'
}, {
  a: '-0xa0',
  r: '0xa0'
}, {
  a: '0xd4d6',
  r: '-0xd4d6'
}, {
  a: '0x28e',
  r: '-0x28e'
}, {
  a: '0x0',
  r: '0x0'
}, {
  a: '0x62ee3a',
  r: '-0x62ee3a'
}, {
  a: '-0x45c205',
  r: '0x45c205'
}, {
  a: '0x3',
  r: '-0x3'
}, {
  a: '-0xa9543ce7',
  r: '0xa9543ce7'
}, {
  a: '-0x1df247',
  r: '0x1df247'
}, {
  a: '-0x1165',
  r: '0x1165'
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
    let r = d.a; r = -r;
    if (d.r !== r) {
      console.log('Input:    ' + d.a.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: -');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = d.a; r = -r;
    }
  }
  return Date.now() - t1;
}


function testJsb(data, reps) {
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const r = d.a.unaryMinus();
    if (!r.equal(d.r)) {
      console.log('Input:    ' + d.a.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: unaryMinus');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = d.a.unaryMinus();
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

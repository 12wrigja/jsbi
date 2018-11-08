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
  a: '0xfbd1592f054125cfa446d9204f70857e4aef3e543579cbb8a641eb7185814c',
  b: '0x2e689048857f0a97c8f33cf89e6fbb026166aee9c3363d0c27c87d69843a2ef8f',
  r: '0x2e6fbd5d97ff5e97dcfb7cfd9e6fff0a77e6aefbe7777f9cbfca7d7fb73a7efcf'
}, {
  a: '-0x3038039e7e6713f406b560da244920e777e86de13',
  b: '0xf0665f6f14b4b6495a14a095e61d931cbe43af796696e119dbea7c66d15e',
  r: '-0x3030019e264610100400609200482041502800e01'
}, {
  a: '0x594856d08c1975387a5d1c545c2d3696c29172de72e428ac24f6ac977925a74e4f0',
  b: '0xd04bad082f235a612d66c6a9fad12a1a67840913e05adff7da1bca54a08ed15adda7',
  r: '0xd5dfad6d2fe3df73afe7d7edffd3fb7b6fad1f3fe77edfffda5feaddf79edb7efdf7'
}, {
  a: '0x53b22fc2ca858e4fa61fde1de68beae5c61767b9',
  b: '-0xad2c6b9e1e073be8c4294dca2bfaa93946acedda8d837b543e61c3e8edea4d9972848',
  r: '-0xad2c6b9e1e073be8c4294dca2bfaa8004400c15285030114020001804140019800847'
}, {
  a: '0xb6ba10651b2afc9f8ea8a43b180f70e31596aeee04042fa649421194785',
  b: '-0x5497476bfe01bc3079adae02e0e78424c97463e141f5aabbcce2bd92a33ca5d6d2ed',
  r: '-0x5497476bf4001c30280d000200050424487400e140a480110ca2bd00832884c69069'
}, {
  a: '-0x3c4f6f26b3afff88379deba16f05588f21975d8a4ce3b56f43ab97e9',
  b: '-0x51ddba8d3c02a8cf0696aeed106bc66acff',
  r: '-0x1014b0050802084500848e29106002284e9'
}, {
  a: '-0xc6dc4c933e838d6c014948c549627606f977ba8d248c7537ee4f39bb27843cfbc3d25f',
  b: '0x337f2cf2947ada58ede7dd536537fdbdd0ff3dc5748b85d8d72b7c4242b',
  r: '-0xc6dc4c933e80880c00400840486020022841a880240070042208310322000c4803d255'
}, {
  a: '-0xf1c5312bc0dd12c4640475bfa95dfbbeb33ba7a241caead20b32bb55fc91e',
  b: '0x98aa30ce2c744761437dd6499b52ca90075b81',
  r: '-0xf1c5312bc0dd12c4640475b6215cf31c303b81a240028a420a1212558801d'
}, {
  a: '0x29300cb7929cc0405217c73e1d92026c82f201390182',
  b: '0x311fb1eb5a961ac98fc79da9d22fa3a7e90e',
  r: '0x29300cb7b39ff1eb5a97dfff9fd79fedd2ffa3bfe98e'
}, {
  a: '0x95f6fcd8335c7b8248d811f924f748a4f5e75e',
  b: '0xc283d383e83f5ed89fad91e068274cd8c4a7dba32a791f485e98296d144ca14c',
  r: '0xc283d383e83f5ed89fad91e068b7fefcdcb7dffbaa79df59ffbcff6db4fde75e'
}, {
  a: '0xfaebdae5afb73d2d09e16e03647ae03b802a3c31002528e15972f75dc8132bcb3c',
  b: '-0x2f2df27fe92635c7ffbb9d3592c37e295c6b32317c2cf5b6469cc33cb',
  r: '-0x40c202f612015c1b8119c0590403c295c29302068008022468c430c3'
}, {
  a: '0x32e9a685f6ac6218cfcd040e5220041ebc15a263110d8b728',
  b: '-0xec4cef6f20ad930bf6a1c6b83b5a58258b44dbf2980ab04e5c',
  r: '-0xec4065072085110a720106b81a585824000481d0880a204854'
}, {
  a: '-0x625801c927d49046b6112358949ab471807ff723349c84cf33cd410731839fdd94d23',
  b: '0x61b318c78f782fe458aa3977e1fe4a5302f1f1c8b09f3f4e136',
  r: '-0x625801c927d49046b61000401010845000275502001c008520cd0006310300c090c01'
}, {
  a: '-0xe5f11d09de3343ad47217f4cca973b919b7a2602eb21',
  b: '0x6fc7d75fd422cb856e8922b38fa6abedf12b567b8bc3be74ccd1aa51f3f901fd83',
  r: '-0x44701900120240a904203c408a132a118a0806020221'
}, {
  a: '0x8bf8ec402d176444d26d621de87c650b168b536d2577',
  b: '-0x5db6828bc90de99e2117931066cd49e2a3f3',
  r: '-0x50a0828b0900898201039210604408828281'
}, {
  a: '-0xc837edd033681ace89e761af9d528d69cf0e44da10bd767495',
  b: '-0xfb09fd01b627c9adec5cf3c105f2fea405ce',
  r: '-0xca09e501a605408d684c02400010bc240485'
}, {
  a: '0x7ec02ebea0b01fb62d4d1b67811ee28aee584967d0acb004b732a3cf75',
  b: '-0xb5fefed725913019213a9deb8792b596d0ffc8fc174d6376de40ee1439712fbc6dcb',
  r: '-0xb5fefed725813011011a0de00192b084907ec01c150123369800420439400d1c208b'
}, {
  a: '0xbd1557dd09446229a78546eb6ac8f6a6b092bd8d9708e908e9a9e251ca6a',
  b: '0xc8a69009a7c265b30010fa30267462facdfe983b0aade086ee1',
  r: '0xbd1557dd0dce6b29bffd66fb7ac9ffa7b2f7ffafbfdfe98bf9abfe59eeeb'
}, {
  a: '0x2b2498316bb06a7b4932331b620b6c24185592edfbe36a9',
  b: '-0x7fec85771546f4a2ba96b9d3262eaa5dba6b5b5cd32440d3',
  r: '-0x7d4c84740144f0000a0498c2000e081dba6a025000004053'
}, {
  a: '-0x28318a79c40a18604f7d38dc1f72e951e2b13421d3434ccb0f97cfaaff75c',
  b: '0x4229324c54c404aeb3deb4cc8c560d51e2c26e1cc3b35e31bbc',
  r: '-0x28318a79c4081040032938d8114021412231202082010c8103144ca0ce444'
}, {
  a: '0xd4e8750c9c7364e85b3426e445279a9537503eb35f0a173bc70c0e4aa4c172e6dc7',
  b: '-0x554a916bc411b2c81343b63c9c6f29398238de25388d4606782f94',
  r: '-0x114a00298011a0801200823c144a091880008e2518050200500211'
}, {
  a: '0x9bac0ea096704bdfbffd1b0ecc982f59c272927ec234c7a2262c',
  b: '0xfb841ae37aff06aa94f5858793877346b0e2ccf30',
  r: '0x9bac0ea0967ffbdfbfffbffeeeb96f59da7bba7ff67fcfaeef3c'
}, {
  a: '-0xfa63388b99dd6b09e6b16d5f9bdfc527f87766f5eb5e3edcb5e984e19',
  b: '-0xd5b6f693bee47ee40c072ad6de46ab4e8dc4ae9c618',
  r: '-0x1a6b0011e805ec404002246d4420a0e8c84a884611'
}, {
  a: '0x68e3496e67f5ae9d6d1b0ae6a9a27d6a3a8f1d5557',
  b: '-0x669872346af3cdd71aaf9362c616d21fcce69a5fdf62704af81d97c8',
  r: '-0x669872346af3cd9718a6910002104212c4e418565d02104070008281'
}, {
  a: '0xfbf87a7c89412288f7c0c38f4f0994f5d63bb3c6092135e7c46',
  b: '0x4e35d5812ae54b1b0ce7544ec290e725d6d8',
  r: '0xfbf87a7c8941228cf7dddb9fef5db5f5de7ff7ee292f77ffede'
}, {
  a: '-0xcaade1422a26597e7bdf9ee6f0ecd908a1abf7e',
  b: '0x4a85049b45a04ae8dd7a91b4ee332ee375b4f59744e2aeab9e555d3486c',
  r: '-0x4a0901400004084a0a489a0450444108a08b712'
}, {
  a: '0x5b7497bc2a7dbe5f45827c938a4cbd76214b',
  b: '0x639b7517a98a000cc1ce834a2dbc6df5473f7548fd36bf2f9585a5cd9f32a2ce878a8',
  r: '0x639b7517a98a000cc1ce834a2dbc6df547bf7d7bffb7ffeff5dda7cdbfb6ebdfe79eb'
}, {
  a: '0x26c0999388ce0d3ded109821fe3927181768057dbd789e33fea7084c256',
  b: '0x5dbb18496645067f73ab72761aefcd0bef8c7b0e42523691d9e54abf',
  r: '0x26c5dbb38cde6d7deff7bab7ff79affcd7fefdffbdfcbf33ffbf9e5caff'
}, {
  a: '-0xfaf23500b061f605ad7d7fef82386c04cefd7c69803297e2e0d81597ed0f32822',
  b: '0x5fcee5a4a61efed93a8794911e4c51b51543ed3c4fdeb8486845d',
  r: '-0xfaf23500b061a001085959e1002044004a6c6021800282a000c01001450712821'
}, {
  a: '0x517bd77119d2602eec73adece1b2e797d8e26f3f',
  b: '0x1d416b8bf6d0aea2ba12b1be5423885c9c81a2c7cca262680f042abc281f37da03',
  r: '0x1d416b8bf6d0aea2ba12b1be5473fbdffd99f2e7eeee73edefe5baffbfdff7ff3f'
}, {
  a: '-0x3d88b9c1c73256c05b35db927921020556545ae70c398b735103145',
  b: '-0xb87cacfc463a2921e2e1d08203a0b5eef227c2d',
  r: '-0x183488904020000142405082002081625003005'
}, {
  a: '-0x81c0e4a78e7b4470ed7d9d2d5d19f58aac65163325a39d4d7c9004e75793',
  b: '0x87d468830cc567180ab68c34440f481ceb373ba8e1ef29fa25a45c5d4a4d5fc0',
  r: '-0x8140e0228863444061499920150114888445161004019849208004a20013'
}, {
  a: '-0x4d7997bce3173908d811c8a847921b13ec9c871140b013bbdd006eef3f0e104c',
  b: '0xbba664db5d06ae18f03360290b682d9a7cc969ad2f0118a9df6178aae7be',
  r: '-0x4d790418830420085001088807921013c0048310001010bac500208e07041042'
}, {
  a: '0x82ffe22455b5da90b0f01382ecd1692da2b06931d688dfd67911478117d6',
  b: '0x62c5632364f311c39b262166ee5bfa1d6db08e9b2e1339df',
  r: '0x82ffe22455b5fad5f3f377f3fdd3fb2fa3f6ef7bfe9dfff6ff9b6f933fdf'
}, {
  a: '0xcff8ab856764ba3858fc883fa91583798b8f18800d1873ca2b1',
  b: '-0xefc72a847ed9b8ba9923fa18a0ddec994c1486d8cbf6f3bee647d5082e7cf27dc1da10',
  r: '-0xefc72a847ed9b8ba99230010008988904c100010480462a6c0474508267c2278c1580f'
}, {
  a: '0xeaa1cb387dd744bc4c367f8702d966d66509a9a2',
  b: '0xfd000740912a394163129201aad173764003ec1ecdefbbcb08dc1f3a',
  r: '0xfd000740912a3941ebb3db39ffd777fe4c37ff9fcfffffdf6dddbfba'
}, {
  a: '-0xed3c0c4e7905e8a53b48f52f9879c2efb19258',
  b: '0x8a41b42729060bc230b2d31569c7628f5d19840548885580a33ef218278020687f61ff',
  r: '-0xa024084a3105a825184005279879c287809201'
}, {
  a: '0xcc857d1db79a14b20cf14215ea059e4e5aefd318d231467',
  b: '0xf49f7f9fd213325a008e9251248f8f8c414ee0a6c63947',
  r: '0xcfcdfffdffbb37b7acf9eb35fa4dfefedeffff1afe73d67'
}, {
  a: '0x83417f4e1fd53ce43fdad59e824dda3922d91e2e3c0643a9b2240678',
  b: '0x69bc5fe56e51009b001c071a33286581dcab9fb09c8720633d1d9697736406aa96',
  r: '0x69bc5fe56ed341ff4e1fd73ef73fffd5deabdffabda7f97f3f3d96d7fbf626aefe'
}, {
  a: '0xdacd4ec02c9f0bb30d20a01ea9b5c9fd36bbfc115546df866f83ff6a9ae2a520',
  b: '0x23d820dce9bafc4d5be97056ec49ba3a260f2aabe77',
  r: '0xdacd4ec02c9f0bb30d20a23fabbdcfffbffffdbfd747ffc6ffa3ff6afaeabf77'
}, {
  a: '-0xf5b62740174f081f54e26b977ad109f32b9a4f30fe60ba80b1557f5f',
  b: '-0x8b7df2481421700b56e3d1de2fb66d9026e558e7e8cac91f4f6',
  r: '-0x1704000214002106381100f32298022054003a80a0117455'
}, {
  a: '-0xfd7c58e137c0788a0369f11e549e59b74780dec0ac7d146866dfa2c',
  b: '0xdfe820344a4c618ecbef53582bac557a50c16e5017cd02c80be1',
  r: '-0xfd700061348058080301410a401c41320000d2c0087c0028425f00b'
}, {
  a: '-0xe0028e613c9b0b020e765522062611098ded79c3f1eda21ee612ccbb75d16887d81',
  b: '0x63e7cdf13c40e6391797892ebde6016e3864417f7e2f84',
  r: '-0xe0028e613c9b0b020e76510002200009818c6882816d000086000c3931c00805001'
}, {
  a: '0xb0b85de63f689eecb60764e909ca8c4a5679657ea67f3ce087fc2a7e5d09fbeffd1af',
  b: '-0x9302fc4c8e5928c9fb34786f952ecb4f4ce',
  r: '-0x82028048804108480314002294040002441'
}, {
  a: '0xfa06af36a51234bbf40cd2b6093906e19402d5e23e69f91dd8d7035f9ff6913e',
  b: '-0x6ee8557cd13d81d1b538499ea23b3680eda5057fb79d39ad11ea0c',
  r: '-0x6cc84408d12d01d08438080aa02a148084040027209c2020016a02'
}, {
  a: '-0x7e51b671087f18ad9d9577fe254e130487be2441e5854637700e4af21c8',
  b: '0x322f99209ecdd86c7ecc544f8170f1428e7517e0f803f25d4cd1d9e970fe',
  r: '-0x5c00247000221828111033062040030400ae00406580422330024060102'
}, {
  a: '0x6ed679964b16e0b7dc91f08844a033494f22097da428bf4a45c',
  b: '0x36213b5bd8b2010ce304b20af52531659ea77854b57059d3b51',
  r: '0x7ef77bdfdbb6e1bfff95f28af5a5336ddfa7797db578ffdbf5d'
}, {
  a: '0xbdb22853c810729926b228d34a3c3016cb30a6a786d20f1a3f2acc5d25',
  b: '-0xe671e5f05af3abe887fb3a777ba40ac639fc005b23a38e3bba6df705',
  r: '-0x4451a4304a8122c805d32835438408040958005921a084009021a201'
}, {
  a: '0x82513495d6d6699434f8f791535970e6ddfcc01d2ed1a9051852eb90c531d',
  b: '0xcaa7dbe182f37872274a1f81e152df647664981244723329179eb9d8fb3b207dc24',
  r: '0xcaa7dbe3d3f7fdf6f76b9fb5f9f7df777f74fedffcf23f2fd7bfbdd8fbfbb0fdf3d'
}, {
  a: '0x1cb3e2d88fda11e5656cbdc428ee64641a1c23651784b6',
  b: '0x9c4cfa1cdba5ada0edc4c82a6d442487f46d1dc710292',
  r: '0x1df7eff9cffa5bff6ffcfdc6aefe666c7f5ef3fd7786b6'
}, {
  a: '-0x1e34a622869a968d98969e9ad26cffdb6a9ea6ffbb5457485f3dfb7b310acb5cc83',
  b: '0x47b3c6f6b922cb95f3b3bb5d37714daed27f398330d9ed9051d7',
  r: '-0x1e34a622869a968980829090404046804084022c88400500580c634830000258c01'
}, {
  a: '0x75fc95e16be503dd600b093be29cde43192c42274a09ca97e4ef541f856ad8000',
  b: '-0xd05c54ae10fd18211a38072ecee9cf61c29f0249f2d18',
  r: '-0xd044142200bc00011818052604680b008280020122d18'
}, {
  a: '-0xd06763146b5153c830cb72cea96d92541cef840387ac78',
  b: '-0x72658baac8dd3e4d9b0095bc1d8f65943dbc21ec84816',
  r: '-0x264010280153c01080004a8148925000cb8002800816'
}, {
  a: '-0x29a75c726df9d3a05793f1a978060c0d049a5870f13973cc0993b8ab3',
  b: '0x1c0584305797b3f31f6cf5d996a597092075906e8a90c41220329',
  r: '-0x29a7407269c980204400e08108060808009258006111714c098198893'
}, {
  a: '0xdcee0561a86a9a4de09bab1a353f004af8376248407dba204',
  b: '-0x32fce4504b3ea59b4b2ce52d0ebf028f4dab8d',
  r: '-0x12582050410e04880b28402c089b0288040989'
}, {
  a: '0x3057a8d32188205b0210af5b9434ece9f567fa84465e3874f455b13327cfcc30245',
  b: '-0x3179bd7139c8ec236042480382b2c0757279070525523d838df35c5c236',
  r: '-0x10719d2039c8402060420002029000713021070101020c808830104c031'
}, {
  a: '-0xcb509804df0ae4dbd5f94630a32db6d41d4787ff31',
  b: '-0xfcefcae07396d2220eca62905c166556afd2e7b528c41',
  r: '-0xc80000004d0220c884290400220522d40c43028c01'
}, {
  a: '0xa0095e5582044eee260100bf43cee8693569b7ec8f083200e84',
  b: '-0x1aa40c5283039ede5a52a1ec66a7eec889e85c',
  r: '-0x10040c42800382105840a16400270e4889e05c'
}, {
  a: '-0xf826a96c3fb25b03705e57d7ba2d9379de0d877b9',
  b: '0x110a8960c36e5ae89cf6ef9d2672457f41f98d4d2d1d236625',
  r: '-0xc802016430900201105a0003a02503290e0d81199'
}, {
  a: '0x2ee3afd113ceb3dd717a4ee50987abf4010e9b239562e6a79555d',
  b: '0xd1abfdf4dcc97de82270c98045137f5d6c3bbe0538ad12376',
  r: '0x2ee3fffbfffeffdd7dfa6ef5c987eff77f5fff3bbf67feaf9777f'
}, {
  a: '-0x409e1372bb28187b5a6aa47b459bde675b39e7e76060af',
  b: '0x449451a9bcaa5e46e3ee3ca02d4c633f7a3a2e03725ff1cb584dbb648c280',
  r: '-0x801030b92818480848041b409a00634a39244120202f'
}, {
  a: '-0xbcad07f483b3648a92982341961290783d96728fdba85e2ff3fa16b51',
  b: '-0x424cc6bb189e17b745a0714267f67cf46055ad87',
  r: '-0x4190008078341202040228460f420012901'
}, {
  a: '-0xdd08c7ba0691d026ea7e5445bdba4ded4ec00a828e6e843bb59f',
  b: '0x7232af4cb206bc183db6c7a7417214e38b3d7d5eda3123d42421d008364dbe1a908',
  r: '-0x5c0083800280d020c24c000010184dc00c8002820c0a041a1497'
}, {
  a: '-0x1b288ca0d0d2954fd4bf8b99d0e9b28b4a3434065bf75af8b5dcf12a4f2bbc45120',
  b: '-0x237f9065dd694c5bbb02107a35fbe6d1c127f12ef5a',
  r: '-0x699001482004021b02107835d8e0004123b00411a'
}, {
  a: '0x55fcb90a6d47f515166edea9b9374f916a6867aec9a4bf8082d',
  b: '0x135ba3d12569d5b66af869762281d79ff6aa7f231ded37710ace06b0b2c27bd19fc',
  r: '0x135ba3d12569d5b67ffcf97e6fc7f79ff6eeffabbdff7ff16aee67befbe6ffd19fd'
}, {
  a: '0x78c778f4ef31e85e9930327bd3c1f4e23dc143586b9d23f3eae3c50798e',
  b: '0xb259cc4892a553421e26835503cfa36831e2c3c6c9f738165a98c0e2d3bbe6',
  r: '0xb25fcc7f9feff35e9fef935727ffbf7f7fe3dfd6fdf7b9d67fbeeefed3fbee'
}, {
  a: '-0x706bd8b4e0c12005259872732f06f5548e214ea4b8f0565b',
  b: '0x61c5191c476988033aed400a8510b16b958f56a13dc31d517626ea72b',
  r: '-0x63588440012005249060422702954402000aa098905051'
}, {
  a: '-0xf08f8a8d7cdfc877c054536fc04d3e55347b7b93e9d72',
  b: '0xaa04e496305a2b5f627c9ddae233e3a21ef',
  r: '-0xf08f8a8d7c55c81340440144800d02402419481049c11'
}, {
  a: '0x2bf3986eb83868e1bd80e5f4e46eb2e91332e1fa47320752c2507',
  b: '0x356a3a6bd8f27a02f7cecf71e31211aa32af6e675df3ce2e1efed',
  r: '0x3ffbba6ff8fa7ae3ffceeff5e77eb3eb33bfefff5ff3cf7edefef'
}, {
  a: '0xccda2f6ebdd553e4201680a607afb08bf38b',
  b: '-0x643f748d6e96c3e95df680c494ce14beb7b82b49a3d7b6662116ca6ec36d4b5014',
  r: '-0x643f748d6e96c3e95df680c494ce1432259001402284124621164868404d400011'
}, {
  a: '0x19b98a414e020527523b8f378c4d05c0339c6a9139839',
  b: '-0xa7a0f7b59a934cea7890dd60f4377b506a877',
  r: '-0xa1a0f290888040c87090d820c423114042047'
}, {
  a: '0x30a396bc2b606fa117a269f0cab525b9a8208',
  b: '0x59dda3b558ebda84377d1a6cf48c9382ce1cacc367deef15b8d7195175',
  r: '0x59dda3b558ebda84377d1b6efdefd3b6cefebdfb67dfefbffadf9bd37d'
}, {
  a: '-0x3c02a975090547339c8d7a3f9aec2a45362f',
  b: '0xcc05a7855cadcfbff0ec0a6ab45d346b29fab1926f3571173d0',
  r: '-0x2951000004310c005026980c2844042f'
}, {
  a: '0x1e1fd8dbd139bcb155ee8513e7c5f376046',
  b: '0xe05608f33249179732cdfa8c39a7c4df53db2a0daffe48fc0df654e5ba7b3a',
  r: '0xe05608f33249179732cdfa8c39a7e5ffdfff3b9fefff5efc5dfe7cffbf7b7e'
}, {
  a: '-0x210a1c5b7f0aeee4525a8bcfa6c8ef280dd62528ef857eb32079',
  b: '-0x8edc5443f423af5ac3f83bec3dc0bc573052513',
  r: '-0x8e440400b4222c0ac28019601080b8572012011'
}, {
  a: '-0x2a45f61df9f97a23fd146297e259e3ca5602cee027f3ad7f312d',
  b: '0x2e37f1ad15f68fb36c584548bac4eceb7a74659',
  r: '-0x2a45f61df9f97800800422808200c10a52024440213108583125'
}, {
  a: '-0xc88c1026259252fc9e1a303f5c321b411bb61c889b4373907ec727ed4ebaffc',
  b: '-0xa7523fe9983299f9e76a146e63092f451b3469be37cb88415a13aa6d80e4',
  r: '-0x81022249002289e1a302144221000101010009b4370900405212806980e4'
}, {
  a: '-0x84cd0d418679b1707c506fc9b8ed858a5176df80',
  b: '0x2a0400a6123ff2b3d2f97d252432411aed6673036fec4218492ac05',
  r: '-0x80c0080184389160500008c98801018a5164537b'
}, {
  a: '-0x675c538153576acb69a950611765796107614ff1e13bf',
  b: '-0xcb2443925a4e18658c44e188ef26c259b30f',
  r: '-0x12400921a040001044480006604c218130f'
}, {
  a: '0x3d8e244f3bc7c543f1a5989765afd8005ecc1afd94e65ee2be6147cf',
  b: '0x6549dc2b51a461e9df7a3fed5ef6effb207c4f2a9416c7d5963c40119228d2ee85',
  r: '0x6549dc2b51bdefeddf7bffed5ff7effbb77deffa945ecfdfffbce65ff2bef3efcf'
}, {
  a: '0x9400c0d1162569ce6449e98139935cda63bd3558d9d2972636',
  b: '0x613525d360e8d5c1098c45338c0a9614db2ad3ed87aee1ac283f2',
  r: '0x613d65df6df9f7d79dee45bf9c1b9f35dfaefbffd7affdad7a7f6'
}, {
  a: '-0xadfcec529127ba71de31fd157777bd840c554ff6eec51cd3952670f97d19aa30',
  b: '0xf6d7ed01f06b22c4a5be093f34c9a67478754a28106b72b90ab7ceacc78f5d30db3',
  r: '-0x812ce0500103b0201e200c116510b80008554ef048c40c50810430810808a20d'
}, {
  a: '0xd8c9864da86e881e39741895d52310f3ae47d9c705e260430d0ef18ddf16d20afc35c',
  b: '0x79631b41f9aa16bfd2e539e83e499f549af8fc1967eca0fcaee10bd2bb16110eb235b',
  r: '0xf9eb9f4df9ee9ebffbf539fdff6b9ff7befffddf67eee0ffafeffbdfff16d30efe35f'
}, {
  a: '-0x408eea4da6f846adce5d3a9e39065616fd6ce2a7da33ddc9f',
  b: '0x6b170b7b4d3050cc23cf4721ec6b33d61ae8ebf3c8ce7a0214',
  r: '-0x408e484924f8422dc2090880390442165160408352105dc8b'
}, {
  a: '0x8f275bbdd1c088bbeb9328de4600a6332ae1ca8c4c8bff8',
  b: '-0xeb95f03f0760f379ca7dfb0a5a2ce56e0088be',
  r: '-0xe3957001064072198a7598085020452a000006'
}, {
  a: '-0xfb142c7ccb503eb1cfaf696415e4cc405a77590a6b32a6d06593cad0596512791b5a0',
  b: '-0x8ed82f7924901835128ba0d2c7d112df5531d6a3ec2bafcc0b989b330d8db86cea',
  r: '-0x2c00c31008018301282005244c00087551086a32829064808880112010590248a'
}, {
  a: '-0x2b6d99ee2cef2531239db62a5f82997025a1795fb2239fe5a8a',
  b: '-0x5f248991994eb05b34dc8be954b40df608f6db92f21570fc7349b7841832538f08564',
  r: '-0x8098944240d2400229992221500987001a1001832038f00002'
}, {
  a: '0x5a155c03c22859cc6110ef2dbd38d7c8507afce555bad3bb3bb4e6c2974e7644fe9eb3',
  b: '0xbb10abd069a0c06237784ada56af5110c99',
  r: '0x5a155c03c22859cc6110ef2dbd38d7c8507bfdeffdbedbbf3fb7f7c6bfef7ef5ff9ebb'
}, {
  a: '-0xc8dd23a826221602545243dc990b91cd97a73040eb6a1963003',
  b: '0x792562f116fac5a68840220442c890076e5f59041fad90c82a05b9374fa00cdd5cd',
  r: '-0x409d01a824220600100002d88002010595a20040a04a1122003'
}, {
  a: '0xa29e8ac093c617f11ec869643c205215f41b9122bb3c9bed30a4c3f2e34eb8',
  b: '0x9b9e5fb03736ef64c812e97083b124f669c4acefbe79a37eff2402ffcd50f1dec676',
  r: '0x9b9e5fb2bfbeeff7ce17f97ecbf964fe69d6bdffbff9a3ffffbfefffedd3f3ffcefe'
}, {
  a: '0x6c9960c75f0ada2eeb85f02bde04c8d75ee83770be8433064b393f60b3f1de43',
  b: '0xa0335c72d713acaed640ba1b6209ed14595e5ccd28753b9',
  r: '0x6c9960c75f0ada2eeb87f5efff75fadfffec3ff1bea4bfd74fbdffecf3f7dffb'
}, {
  a: '0xd8b200a0d795c74a2dbd81eac1c0c765467ec44f32651',
  b: '-0x905c63923f5d000a328fa7bc0b1404ef9f3497',
  r: '-0x900423821d0400001283a3880b1000ab0c1087'
}, {
  a: '-0x4c6abdd5696912524d708ea47a72d835fe692c7',
  b: '-0x56ca536a0ebb35ddf5294643e315a805d0641a54c3e4d37dfbdeb24dc2eeaafa',
  r: '-0x4a8055004100400c400684386200142e682c1'
}, {
  a: '-0xfdf7ab9491fea74a900c48eb3840813bacc8078b08769439f9ae89905b83b1084ec',
  b: '0x62b458575dfcf8a01b1c9c4e9267f63835f43ee606',
  r: '-0xfdf7ab9491fea74a900c48eb3840803a8800000108461439108880905880b0000ea'
}, {
  a: '0xc32c3bf1eae108e8c1ca5d81f75414354074450c9cd854656132',
  b: '-0x1c0203974bc65b89d0a62219f31d9e1a7a8051b62a8b849c1',
  r: '-0x1c0001114b40538150262008b21c8a183a8010322a89808c1'
}, {
  a: '0x6f410bafb3a37413a46839178c964684b4c',
  b: '-0xe67ffffda32838f15a1fac652279df8ed48b7db6b7cdbb61',
  r: '-0xe67ffffda32838014a0504450038c588540a05369385b021'
}, {
  a: '-0xcbd4721fc8f4d000d7a0bb9592e9b7672517a44ec4bade3cb77b8515',
  b: '-0x3113ade61a603e6346982e7d4a10fb2dbbc0704222b07bbaacf04e42ceb7d517943',
  r: '-0x3c4300980e4d00007a09b94020022230513a04e04a00c2835510101'
}, {
  a: '-0xfdd4af848b8964195df4806b5b564ca3ba99f',
  b: '-0xd021e2609f134a50fa43519ea144c553cd964078ec784014d6e2',
  r: '-0xd8425008a0044111cd000030a46040108081'
}, {
  a: '0x8a73101e232484ef1228489a507312119db93718115da93e3d1d78be7a',
  b: '-0xa2c9529f65abc797966819027ff9d2eed16cf2d046ec21147b8',
  r: '-0xc9129104894316126808026620408e50682040042c2014186'
}, {
  a: '0x4a6adbf13100d8ab287f9b833bceb0c67b7f830bf85',
  b: '-0x59f6e0605acf66e986ba9237a0fe74b8411793171f84724f6eb6282022b693d',
  r: '-0x59f6e0605acf66e986ba9015200e44b801149300040440014e30000020b4039'
}];

const dataSmall = [{
  a: '-0x55094ff5ab25f929',
  b: '0x83',
  r: '-0x55094ff5ab25f929'
}, {
  a: '0xe8dcfade3400',
  b: '-0xdb9',
  r: '-0x9b9'
}, {
  a: '0x2160a27a79ed',
  b: '-0x738a594670203246',
  r: '-0x738a580650000201'
}, {
  a: '0xc',
  b: '-0x969b6c',
  r: '-0x969b64'
}, {
  a: '-0xdf2dfcb07af9',
  b: '0x2d989dc6835d079',
  r: '-0x562194802a81'
}, {
  a: '0x0',
  b: '-0x775c7f0cb',
  r: '-0x775c7f0cb'
}, {
  a: '0x168a69',
  b: '0xb57039af',
  r: '0xb576bbef'
}, {
  a: '0x7cc52cf',
  b: '0xb5444',
  r: '0x7cf56cf'
}, {
  a: '-0x90c73ed935',
  b: '-0xad8d45e2',
  r: '-0x850c4121'
}, {
  a: '0xf0313af82841513',
  b: '0x21a43',
  r: '0xf0313af82861f53'
}, {
  a: '0x3d1e4f',
  b: '0x0',
  r: '0x3d1e4f'
}, {
  a: '-0x1cc75aa44859f3f3',
  b: '-0x67dab',
  r: '-0x71a3'
}, {
  a: '-0x9bb137c75267',
  b: '-0xc9554a58deb25',
  r: '-0x911025854225'
}, {
  a: '-0x661fe1ca6',
  b: '-0x37',
  r: '-0x25'
}, {
  a: '0xb50671119c5c92b0',
  b: '0x9',
  r: '0xb50671119c5c92b9'
}, {
  a: '0x4b9be582',
  b: '-0xe4',
  r: '-0x62'
}, {
  a: '0x341b80dda0',
  b: '0x15b2447b7',
  r: '0x355ba4dfb7'
}, {
  a: '-0xad11f3253fa7',
  b: '-0x2ffba0492d0a41',
  r: '-0xa90041250a01'
}, {
  a: '0xa2a1a449214',
  b: '0x5d9048009586a3',
  r: '0x5d9a6a1ad596b7'
}, {
  a: '-0x7d4',
  b: '0x3c',
  r: '-0x7c4'
}, {
  a: '-0xb',
  b: '0xa',
  r: '-0x1'
}, {
  a: '0xf90ad89eaa',
  b: '-0xa21b6efee6a',
  r: '-0xa00b4276042'
}, {
  a: '-0x87cdb331c5fb079',
  b: '0x0',
  r: '-0x87cdb331c5fb079'
}, {
  a: '-0x1808',
  b: '-0x23ebf71a63',
  r: '-0x1803'
}, {
  a: '0x3e1d92a47ea2308',
  b: '0xcef9b',
  r: '0x3e1d92a47eeef9b'
}, {
  a: '0x5',
  b: '-0x214e',
  r: '-0x2149'
}, {
  a: '-0x5c1f3de14a4',
  b: '-0x71ea',
  r: '-0x10a2'
}, {
  a: '0x726d3',
  b: '0x414f8e78f980',
  r: '0x414f8e7fffd3'
}, {
  a: '0x16923e6eeb5cd',
  b: '-0x7615',
  r: '-0x4211'
}, {
  a: '0x7c0e6c1',
  b: '-0xce89',
  r: '-0x809'
}, {
  a: '0x97a31b2e',
  b: '0xf932bb5',
  r: '0x9fb33bbf'
}, {
  a: '-0x104d389a73081',
  b: '-0x11733361a72',
  r: '-0x1301261001'
}, {
  a: '-0xa5d94552a316f',
  b: '0x61df4c0bd',
  r: '-0xa5d90400a3143'
}, {
  a: '0x6a7',
  b: '0x199ffa',
  r: '0x199fff'
}, {
  a: '-0xf088a89',
  b: '0x439a88f315672',
  r: '-0x88889'
}, {
  a: '-0x6f7c987b',
  b: '0xff1a8',
  r: '-0x6f700853'
}, {
  a: '0x572e4f0443fa9',
  b: '0x51d4ff92603cf',
  r: '0x57feff9663fef'
}, {
  a: '-0xa1007ee',
  b: '0x1dcff16b1ca',
  r: '-0x626'
}, {
  a: '0x65585b',
  b: '0xc1c5a0d',
  r: '0xc7d5a5f'
}, {
  a: '0xc96',
  b: '-0xb47ee6c1f',
  r: '-0xb47ee6009'
}, {
  a: '-0xb',
  b: '0x7bb816e26d',
  r: '-0x3'
}, {
  a: '-0xb06',
  b: '-0x44468a965aac8f88',
  r: '-0xb06'
}, {
  a: '0x9c808ac',
  b: '-0x2b0babb39ac',
  r: '-0x2b0b2333104'
}, {
  a: '0xcae123d',
  b: '0x70b912647',
  r: '0x70fbf367f'
}, {
  a: '-0x1b5808a6ce19',
  b: '-0xaf7b61e5943930',
  r: '-0x1b4000840809'
}, {
  a: '-0xf6c13d18',
  b: '0xf7ef',
  r: '-0xf6c10811'
}, {
  a: '-0xc0a0938f255ca5e4',
  b: '-0xb',
  r: '-0x3'
}, {
  a: '0xd16fa20599dbb43',
  b: '-0xe65d03ace5',
  r: '-0xc6040204a5'
}, {
  a: '-0x48686447b65',
  b: '0xe5f7737c',
  r: '-0x48602000801'
}, {
  a: '0x3098f2ce93',
  b: '0x92f',
  r: '0x3098f2cfbf'
}, {
  a: '0xfb8686821aaaf56',
  b: '-0x8dab90cd61c',
  r: '-0x929804500a'
}, {
  a: '-0x5118fc6790345bdd',
  b: '-0x1adcafe2124705a',
  r: '-0x108c86600245059'
}, {
  a: '0x67b',
  b: '-0xf9101aaae966c',
  r: '-0xf9101aaae9001'
}, {
  a: '0x5c3',
  b: '-0x28b4adebe5',
  r: '-0x28b4adea25'
}, {
  a: '-0xb494a4328f5c14',
  b: '-0xd4',
  r: '-0x14'
}, {
  a: '-0x2c5',
  b: '-0xc92044f41f8',
  r: '-0xc5'
}, {
  a: '0x0',
  b: '0xd761b9dc',
  r: '0xd761b9dc'
}, {
  a: '-0x5',
  b: '0x6bb46483b419f',
  r: '-0x1'
}, {
  a: '0xd4',
  b: '-0x274cfc04ed107c',
  r: '-0x274cfc04ed102c'
}, {
  a: '0x0',
  b: '0xcb59fdeb',
  r: '0xcb59fdeb'
}, {
  a: '-0x7b13cb0d84cbfc6d',
  b: '0x7bb0d10b3705d5',
  r: '-0x7b004b0c84c8f829'
}, {
  a: '0xc2b0',
  b: '0xdf185a1b',
  r: '0xdf18dabb'
}, {
  a: '-0xe989a',
  b: '0x52f6e',
  r: '-0xa9092'
}, {
  a: '0xc996eb8',
  b: '0xe',
  r: '0xc996ebe'
}, {
  a: '-0x8e2e8687906550',
  b: '0x0',
  r: '-0x8e2e8687906550'
}, {
  a: '0xa417f8a418b9a',
  b: '-0xaa695',
  r: '-0xa2405'
}, {
  a: '0x90e2d17306d3d',
  b: '0x671e9f0',
  r: '0x90e2d1771edfd'
}, {
  a: '0x23f9e9',
  b: '0xbc5e525578be',
  r: '0xbc5e5277f9ff'
}, {
  a: '0x592',
  b: '0xce86ac59f38b5',
  r: '0xce86ac59f3db7'
}, {
  a: '-0xbfc8dcc342adb41',
  b: '0x2e03',
  r: '-0xbfc8dcc342ad141'
}, {
  a: '0x968',
  b: '0xc1e92c',
  r: '0xc1e96c'
}, {
  a: '0x0',
  b: '0xfa10dd',
  r: '0xfa10dd'
}, {
  a: '0x56f912fc5d64cb34',
  b: '0x7d8e',
  r: '0x56f912fc5d64ffbe'
}, {
  a: '0xe228675f90afcee1',
  b: '0x8decc1de93411078',
  r: '0xefece7df93efdef9'
}, {
  a: '0x3f05a97c94c',
  b: '0x55386a74aff86bd',
  r: '0x55387f75affcffd'
}, {
  a: '-0x3c1b22e',
  b: '-0xfe6',
  r: '-0x226'
}, {
  a: '0x142b41530927',
  b: '0x5c62425b06085b1',
  r: '0x5c6342ff1738db7'
}, {
  a: '-0xc78653be9b9c94',
  b: '-0xd9344cb188881a',
  r: '-0xc10440b0888812'
}, {
  a: '-0xa35679f9ce71945',
  b: '-0xfab34b',
  r: '-0xe21141'
}, {
  a: '-0x27c24f15',
  b: '0xfa15',
  r: '-0x27c20501'
}, {
  a: '-0x7c5',
  b: '0x87',
  r: '-0x741'
}, {
  a: '0x25de5a',
  b: '-0x622e9ac1f5',
  r: '-0x622e9a01a5'
}, {
  a: '-0x2bd3fff7e39f',
  b: '0x4de6de',
  r: '-0x2bd3ffb20101'
}, {
  a: '0xc43df',
  b: '-0xa9461feff',
  r: '-0xa9461bc21'
}, {
  a: '0xa22be2cd',
  b: '0x8e5c40741',
  r: '0x8e7efe7cd'
}, {
  a: '0x73f1a71e',
  b: '-0x28689723c38c06',
  r: '-0x28689700020802'
}, {
  a: '-0x693e92bc859c',
  b: '0x1ca90',
  r: '-0x693e92bc050c'
}, {
  a: '-0x2',
  b: '0x0',
  r: '-0x2'
}, {
  a: '-0x5c7',
  b: '0xd92b4c88679c671',
  r: '-0x187'
}, {
  a: '0xc5ea2809a5bdad59',
  b: '0xf117bc',
  r: '0xc5ea2809a5fdbffd'
}, {
  a: '0xc',
  b: '-0x83197ba4ba',
  r: '-0x83197ba4b2'
}, {
  a: '-0x868f7e5dec9',
  b: '-0xdd1e9b',
  r: '-0xc51e89'
}, {
  a: '0xdce',
  b: '-0xd33cd4cd66',
  r: '-0xd33cd4c022'
}, {
  a: '-0x6821c0f5',
  b: '-0x9e2691611ab1d608',
  r: '-0x821c005'
}, {
  a: '-0xaa145b',
  b: '-0x2779616dd18fcf18',
  r: '-0x8a0413'
}, {
  a: '-0x68d619c3a2f1a1',
  b: '-0xc5',
  r: '-0x81'
}, {
  a: '0x4eb17b905',
  b: '0x6',
  r: '0x4eb17b907'
}, {
  a: '0x3ed',
  b: '0x0',
  r: '0x3ed'
}, {
  a: '-0xb',
  b: '0x684151bf8',
  r: '-0x3'
}, {
  a: '-0x117d3d069e',
  b: '-0xc1f8c4906e0c8',
  r: '-0x49040086'
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
    const r = d.a | d.b;
    if (d.r !== r) {
      console.log('Input A:  ' + d.a.toString(16));
      console.log('Input B:  ' + d.b.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: |');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = d.a | d.b;
    }
  }
  return Date.now() - t1;
}


function testJsb(data, reps) {
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const r = d.a.bitwiseOr(d.b);
    if (!r.equal(d.r)) {
      console.log('Input A:  ' + d.a.toString(16));
      console.log('Input B:  ' + d.b.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: bitwiseOr');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = d.a.bitwiseOr(d.b);
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

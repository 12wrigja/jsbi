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
  a: '-0x17d42cb950d3b564d02c8647449c287cceae7c1efb48e5f9be78921',
  b: '0xb46747c48f4f101979b5b5579e88a714c8acaaecfff9112c4dd',
  r: '-0x17d4e120989844b3e045fffcf9f3c70575c344cba635e5f2cfa4dfe'
}, {
  a: '0x34583a57a759e91b44b06fba7f14111d9f74e49b59f942e8582e03',
  b: '-0x67155e44cde4a770640878f8366e2af8e792270258d',
  r: '0x34583a57a7605a7128fd4e04f61a51a52ef84b7e0987bc0ac85390'
}, {
  a: '0x3e9dbabaaa389912d88396c1e7debeec9260a93741f5ad6e748787fd4b77ba4fff7f',
  b: '0xa4af5a14896c1337f73b4ac93aff0e1150be0ab450af7da3a58c23fdd',
  r: '0x3e9dbabaaa2e4e1d373b0000b45f4b37e5ccf94660e0a18dc9427d05713d618dbfa2'
}, {
  a: '-0xdc916b810b43a6e7debc8a841070a885f9c252562cc13553e3d9452744bf0d',
  b: '-0x626fa5b54f084a001000c010b304a14c7f82cce08ca50ec14b6c84ae',
  r: '-0xdc916b1e9b9df198d6728a740fb097d2f52105d6a9f454c73eca83dbd83a5f'
}, {
  a: '-0xd075eea2ec8aad9299009d05f529d66b58d2cc5602051e6e05e76fa40ffd109',
  b: '-0x10ba13293cb0a264b460adedfef1eb16bc1b419cf4b',
  r: '-0xd075eea2ec8aad9299008c4be20099bab66e17f554171f7c1ad0b388ce601be'
}, {
  a: '0x4c567741b9e64280a18b3ab2378ee35d18c8231bd35f86321b',
  b: '0xdb07bad8283073a7d9c988a57ee60fe21618cdfc',
  r: '0x4c567741b90b3ac5c9630a3e8fb519d473493d0bf1496d641f'
}, {
  a: '-0x6196568330bf91802536020ed99e6d0a200a49a4',
  b: '-0x9a1c650f7c0ec53fa80bc7b022ac59aa6e9',
  r: '-0x61964ce16a6e99bf38e2078e1d236adf5a6fa2bb'
}, {
  a: '0xaaf6299ebf2e4d084dc35e49103f885cf67317ac3be6839dea1cf86e849b',
  b: '0xa6819dfd9f3bdd9583785e97fd43e6d42992147277b',
  r: '0xaaf6299ebf2e4d08435b4469364bca839e3b91c2bc124530a783d7275d20'
}, {
  a: '-0xf5355acd37e97084d8074e4d3d5f95780fd2f8b3462286191b4bc9030b4c34be0',
  b: '0x811774d77fea62be240b2de160169c4aade4964ba3d3564727d6827882e9',
  r: '-0xf53562deaf36e8837e33308df03dab797997a3918f87405650b03b807373bcec9'
}, {
  a: '-0x82a2023d4ef0577b6fd426477726d9212081aad991ba6c10742c45f2d',
  b: '0x9b74bc7fe08b7187e198ea50233764d2dbfc731d88bfd1',
  r: '-0x82a2023d4efa0ec737d22efe8fa4f2afc583de4fdee82bd7a604d1efe'
}, {
  a: '-0x1efab00cde3a83ac7331ef6a83d5aaa962021e2e80cd028112aed3f3539b1f6dc9ce67',
  b: '-0x40b68366d18a18dc021d40f97a7bf5e565f2af097a4d444510d86e',
  r: '-0x1efab00cde3a83ac327b6c03b24b91cd5fe4dd3506510c9bacbc24e9d94ddb28b8f5f9'
}, {
  a: '-0xa129edfb6a10b495c4265f4a59d67c85b1526460e5f959',
  b: '0x1c8c20fb98972c4aefd04f0d669d4f0896136454d6ea13b12c3',
  r: '-0x1c8c2b0e3776e2ebfb19ab4fcc91f4a5fddbbf69fd302210c1c'
}, {
  a: '-0x8a35388ef95419dac3f872dc85d01647eca22',
  b: '0xb19f5097eeaff11d8d9e04fde9a45d9032fe7b5670ef5ffa030c03bd4f68186d14',
  r: '-0xb19f5097eeaff11d8d9e04fde9a4663386876aebb28d0c398a39cc1a50cc973736'
}, {
  a: '-0x9e001e17227eb3c06123d414f3a1a8fb5a2b8480ef9d',
  b: '0x82aa375cd8600d5d4a8d4ac56f09a6bbc7ab93930c247fa5d8446e36284c4541',
  r: '-0x82aa375cd8600d5d4a8de8c58d20c93a7b6bf4b6e0397347813fc861accd34de'
}, {
  a: '0x130bad9f2c2a8cf07e0e70567a4e9c8ae81627497045601a',
  b: '-0x6e7b3ce9cdce76c5ddeac2bcd66aad5e6d0242b',
  r: '0x130bad9f331240bf1aeb57c2d82d48b6b57cd21f57158445'
}, {
  a: '-0x8de9f1c46687c996daab1b73f8e70169b8705cf7d132aa8638c1c33bc9',
  b: '0x3193f828f5b463e9bf746124557c5fa69865767cb52742e646406632c',
  r: '-0x91033146f5e30fd576a261863e3ec76421f6b45f9c851eb49d25c99ef5'
}, {
  a: '0xb01fb9a531df4573e695be68bd1e5de3d5122dac22e5c5',
  b: '-0x32c36d8b6881163369bebc840d83e7d58f68585bd62df907bba7c7a96c6038e110',
  r: '0x32c36d8b6881163369bf6ca3c72919b4d4dc3ef19496b626198b9cbb9a0c5bc6d5'
}, {
  a: '-0x3307a1e2d6f6de8272bb26bfdbb9c032f0fa30c9a75d983e53b836f7',
  b: '-0xf46852f50d9f8836fe468853a15f05e9bf79c4e15b822950ab15f1eec84e81915',
  r: '0xf46852f50a6f0e18d0d71a6b7a33537dc1be28de2c72864410a0186ae312fe21e'
}, {
  a: '-0xc2bd713e2314f52f5ab3bad383cc5ea99b56eeb4',
  b: '-0x5c9d42b825053358901767f277fe809deecde858284c5cfa',
  r: '0x5c9d42b76247c21a6d0272c31d4ac5ca6b0189ae8cf56e46'
}, {
  a: '0xb7dc44a8a7c01b3c8d058f4155900abc50ecc5504ddda21002',
  b: '-0xfbb1aa00f49e61c17ef7db770640dbe74c467b',
  r: '0xb7dc44a8a7c116ee370683dfb75189b42c63cb9129c4ee567d'
}, {
  a: '0xe7d44d163242ddd19448c15fea5dd7b24f5a23c534253f41be62',
  b: '-0xf53c7c709fff3fa80294724d531863dba1a',
  r: '0xe7d44d163242ddd1a39c8926f45dcbaccf836aea0956c57f787c'
}, {
  a: '-0xa6ab99a04b269860b44c6aee26193c88c9752748b92ddc6539a0c',
  b: '0x4d73bf9d6abaeede2d4fd1bbaa496c7ad5d3ccd52f03ec852b2',
  r: '-0xa6f90d5fe891534f9279babfe1c385f5444afb158e5ce051becbe'
}, {
  a: '-0xaf5ff9d1508c27d37ed81460c3448aedea2f1cdc452aea2e43d82a742eba3db',
  b: '0x166ffee5c69e00d620ba97f920381171c9a28a483ff',
  r: '-0xaf5ff9d1508c27d37ed82ad0c22a518beb053d96dd240a665549f416b9027da'
}, {
  a: '0xcfa30c122b2041255564d23e29d264380d3cc7e81dadf675fd8fb2b4e59b25b0caeaf3',
  b: '-0xa28c30455f31cfc85d3ae109f388b4528ab1f7aa2a5c1bbd3ff72cf1d4217c9a5b0',
  r: '0xcfad34d52f76344251eaa5ec3a719cc35265730798509c37b963b227b4b867c89490a3'
}, {
  a: '-0xf89c9589d04a7cf1f5384d31c785b2e40464340bfadd33',
  b: '-0x6f179135dd4eefb462187d5003db51267815b0d2a1e',
  r: '-0xf895a410bceca802f9f22ba9f285752ef1fcb2b0edb315'
}, {
  a: '-0xde9621008d9ebc32ed00517eb54b1acb729',
  b: '0x7c87e398994b88ae65933cfd717ea8a65064455fd84920bbb6eda49f54',
  r: '-0x7c87e398994b88ae65933d0b5ae0b8af2a50088ea84e38a70b9f51567d'
}, {
  a: '-0xe6ab4fdd5a01de5dd2991dd0b8b8803ab5da5e11c7212',
  b: '0xb80e905a1c9b1a6910abf5d56f442aa82a331e13ffc22b1605a3',
  r: '-0xb80e90688750183eb0c9dbb298d607b3b5bb21bf5d680c3277b5'
}, {
  a: '0x6273ae2c544c918a21e97177592c0b94fefbbd9e4c07727e0a',
  b: '-0xe5c18126dcbe3070d45338265efbf77f45da',
  r: '0x6273ae2c544c926fe36a9854175c7c695233e3fd47fef1c3e4'
}, {
  a: '0xaa30039e81fbe353cfc2b937908b8ace8e9bc3b8f8d346b63049e11',
  b: '0x5358c553221f26b7c8ae813fd1a48b9e3b357a66134fed1f1b972f',
  r: '0xa4fa77494fd9f0e85337d12393714214aae86c12979e47e43e906e2'
}, {
  a: '-0xb3051acb46a6c36b2fc82d627f8c48753443f003e30eb',
  b: '0x5627eeb1c954660c80d7c16fb649f1eb02e3394354ec5ee4d458e1cc5f117f821',
  r: '-0x5627eeb1c954660c80d87474d1153891c64e690b824ede711cce16104f156290c'
}, {
  a: '0xd4e3f50bf9e7432e950fcf868c208849823b6f6d6afdd9d0fa',
  b: '-0x9b29a3198894b2fe358cfdbbce7b63f48dd1b3c25eec7878d85b55bd4508caa29b7',
  r: '0x9b29a3198894b2fe42db3d0c8e19d8277722b0bac7ae80fd707f0cb41bb8a83fab1'
}, {
  a: '-0x7afc342ce926bfe8a69d66973cadd848579767',
  b: '-0x6e5f9d7a83cc65d2efe60e5818ac2a910b4f0e5ac33fe603d748bf40cee',
  r: '0x6e5f9d7a83cc65d2efe606a855695bfe9f5083f0ecd67238f9c439c7587'
}, {
  a: '-0x632d222336d5f1805f3980439721e66a111f6bac45a85c2e6cb661a',
  b: '0xdf28ca1111921441fed2460b5886157721ba715c48131c130ffa5fc68c3ab6',
  r: '-0xdf28ca17446436756c315e114c1e19b093d8d7fd5a09d6d76a8022ad57a0d0'
}, {
  a: '-0x21b929acbe8e789cdc0937c81ff2ee9678c295923d70525927d1d',
  b: '-0x2c9c16c1292e49c292f5bab63d52b6e20cde9527a',
  r: '-0x21b929acbe8e4c00c5480e99d6305ba0be0c583f868e457a92aa3'
}, {
  a: '-0x2a312dec80eb33ce1d5e3891744b8b4f6794f4e692e33f4c',
  b: '0xbb119970c15df437e0b6572fc5b43b4aaa6e2490e16',
  r: '-0x2a31399d9a823fe3fca1b69cd9be87aaab499f8d752c4d62'
}, {
  a: '0x22b49072bccb51b46aee807be43de235061b57781841',
  b: '-0xada23d39319548f0396bf8ade209a866ead9fe64a6c2f53577a34c',
  r: '0xada23d3931b7fd80ac28c3ff967496e766be3c46dbc9108cefbb8d'
}, {
  a: '-0x9c466306f0a5899e4b4d824e35bd3d294a4948e91',
  b: '0xd4df4730716c1c0bb2d104b3524983cc7876eda4c9f504a2c65ca9',
  r: '-0xd4df4730716c25d0190173bdaae36881509bd1009dc799475aeb3a'
}, {
  a: '-0xcd4c5a1083dbd15ce08ddfb8eea407324c6d1a',
  b: '-0xf984c85e7822fafd7c4bf95fd1fbf04d7a2',
  r: '-0xcd3cc1c3fdf44f2d30b61af958a6e773479578'
}, {
  a: '0x87439cd7746a81ea103572e4dd6a0fcedb0df887',
  b: '-0xc32cab4a175510bdf2f782b38bdef18f900519b7',
  r: '0x14a7048218bbf92a8032cf5986949015e6b13123e'
}, {
  a: '-0xa428545e09ea699134e298c015db9e4ba13a1a857c9ec94c0150',
  b: '0x2cae4831ecd87c70c854c18c2baa5a5ba346853c570bf1f85417269d923b477e1',
  r: '-0x2cae4831ecd886b34d9aa22ad2436da9ccd2869a10f0ac0bf5bf7e677ed007931'
}, {
  a: '0x3400c6bf8c96cef898da08a2376b34f9612494723fc8f37a6d57b24bb0d3c2d274',
  b: '-0xbc7b39d9d7551f057db425413fc309c209ee077abb42b26aa1c640b0e4f046ac4a',
  r: '0xf07c009963ebedfe168e2de3772e3ebb6b129becfb0ba5e50f1df2fc95c4097ebe'
}, {
  a: '-0x24d77c369e7ccc92aa5828f17df321df7ec3deb4d41380a2c',
  b: '0x661b1354e3848e8cf5d4e3c1c59da9c7a0e8e82cdb850519804c',
  r: '-0x661d60cca6ee7659beff894454b588f9bee0d46ac6d246518a78'
}, {
  a: '0xf5fd744b4f8b39109c69577f78791cb588ac363d',
  b: '-0xb80129a0f3b23280b924e192d525162cd02632915e8c16ad26e7875d2601d7e4f08bd0',
  r: '0xb80129a0f3b23280b924e192d5251722cd9a7de0e9c52749903f06d59f1e8d6d9cc20d'
}, {
  a: '-0xae380f63d5ab0be53b2755b1edc1d877c9e0bd6ab727c62dc03df63b22ea97e',
  b: '-0xe740498c22ded9264dde8e55f7167abd8f4b2d105bceb883f63f1c695d1334455',
  r: '0xe692117cbf092e1a68a367004528b8e517814c52f11790bdc87ede7321f049ad7'
}, {
  a: '-0x7e26eb15eede4172b1d1af1df4b19cbf420afcb0644d0e',
  b: '-0x187dfd55d46135910def39b5a158d6dd897418b9397ff9',
  r: '-0x65a8edc01a7d0be1a3e275685358c5e1b896e3f72acd15'
}, {
  a: '0x85e4ce32f0c9088fb1ecc3a1f7020835834',
  b: '-0x20ac25e6c3f3556ab6dddb8e55602a4f7bfab42252e3d5f9f',
  r: '0x20ac25e6c3f355f09bac0e7f1e68ba0168be561954ec0b7d3'
}, {
  a: '-0x563caa536f5304ab678067cd8b7cd1c4b29e4a9dff',
  b: '-0x2bdc5e62c34187ae5c611ecafb0c874d140dfc',
  r: '-0x563c7e7710f04169dfd20b6c6cb1d6b82b51369003'
}, {
  a: '-0x2821f3f1288f80a3a1e1e34114033a0e3e18eb5d6',
  b: '-0x613e81e9ec3222e81a969cff652e0eacfdd7dc473156282dce4f',
  r: '0x613e81e9ec2fa0c8db8414075af3f08ec9c69c139072469f1879'
}, {
  a: '-0xbb2724c49b2792fbba8c5822d3e4f93940cad32175edb9aa',
  b: '0x59155387d531382fd22aa51dc6d487b032213865210',
  r: '-0xbb272a55f060104ece0f55457e36d5a68945d64389740bba'
}, {
  a: '-0x22b447e2db0603f1353e101dad56d2967065e5176b0212658',
  b: '0x74bfc9d277e2371e702322412e46c4ffa7f30',
  r: '-0x22b447e2db0678b0ff1087ffe47542b992a7135e3001ba588'
}, {
  a: '-0xc9fd372ffc0f8de744b8e764045a1be7cd1b25678662f15ceeb',
  b: '0xec6b5f79f0bb11bfd9426b161363a263febbc820a6123d1deace480a1aa8509',
  r: '-0xec6b5f79f0bbdbbd10726725a14ae71ce61fcc7ac1fa0a391035ce6d0c053f4'
}, {
  a: '-0xd80e5a8970c7fa7108b7d1ec04414075bb9e32df4c9badd1f27b8',
  b: '-0xe0d23ee17183eb65718c298befdb7cb0a9607ac917e87c5e01e8cb9bf2a0522e8',
  r: '0xe0d23ee1718313571702b8c3f56a73f8d7747687d772c0bfcf097f0044ce5fb30'
}, {
  a: '-0xc1ab2d94c49165db09fc88bceda8ec1099e4ad4935e92b52a0dc7bd6c74f',
  b: '-0xe8aee5fd0b2bab2335da8f0f886600ce1494c677c583bc79',
  r: '-0xc1ab2d94c4907d2c23ff7d914285b6360ad524e3351b16bdda64b6530ad6'
}, {
  a: '0x7d0db77e1e91c671021eba89d11044a47be8860f643f03104bf8180ca',
  b: '0xe2ae3d85b2180412a65321638b0a77af4cde',
  r: '0x7d0db77e1e91c671021eac5eed37e982fba75baa3228ca5fa47d233ec'
}, {
  a: '0x54a5d8dce445989459bda26dde345e7981472e82733aae5e226b4cd25a0b4',
  b: '-0x1463915b6a33adc1e3746877b9f6d3a1f350bc466e674f1110',
  r: '0x54a5d8dce446decd6f7445a8ba5295c008c2cdefad59e369e6d233474b1c4'
}, {
  a: '-0xa90e8d6775c6dc370fbbfaad0a6419f790b28fed11d928921edc6b78ecd7bf70b3d',
  b: '0x809d62d167dc51a246cf633a17c6981a8f1b31037d',
  r: '-0xa90e8d6775c6dc370fbbfaad126df024a730550736461ec5c058d4fa95c97280eba'
}, {
  a: '0x5eabae81911cda89a670b1cb994bbca1a4e755',
  b: '0x52a1c577f12eca103c50b23f2c4976fcb0cbd469595de5b818',
  r: '-0x52a1c577f12e6b648dcf212251bfd08bff003b1d9cbc40d0c3'
}, {
  a: '-0x763e3e514a86f34a88ed080cf61adf90ac6e6845ef827875a84259044079f665457b15',
  b: '0xbc8678fc8c840d8b7a93f97e069af07f5f78711b4f7921e443',
  r: '-0x763e3e514a86f34a88edc4936f176c14b9f9e2d9e9007f1098c1b87cb19545de675f58'
}, {
  a: '0x9b752e73dca8da5afd836c667b7b6b2517b2f52fd0c86a',
  b: '0x4d4daebda1557a58d39a29b5d1f346b8e29e9bf0ac3615b5cef39b318d7649a966',
  r: '-0x4d4daebda1557a58d3998e40a37f6a1008439e6d3fcf9a3a63ce837e984678e0fc'
}, {
  a: '-0xf7bd95d8377b7d3ad664624f6898fecdc2370d4d69e7',
  b: '-0xd9dc1f71036fdc9c132c964e6b51715d457dd2f55c6cc9ea239',
  r: '0xd9dc1f6187967f189b74c2a1050b4c66bbede61938fbf513852'
}, {
  a: '-0xefaa42d5ed0644f4f89ece139dd778529898c5039',
  b: '0x7d6e1764adb8327551b10ce6588f3f40e02',
  r: '-0xefaa43535b1da9a2b0d143654ee45eab27d805e3b'
}, {
  a: '-0x8c083080ffce67e28682e7afc7f9c1f824b824c1151bbf641',
  b: '0xaa5fa7f112073e6920b5648b8e1b9a85f3537e2',
  r: '-0x8c0830810078c78a7794eeee311a775cb046405b9b0f12e23'
}, {
  a: '-0x9af61a15f6902ddf9b8ad3359beb592fee6033c6ba361a',
  b: '-0xcf891463e8fd4c133c2568c7351af341100b0ea',
  r: '-0x9af61a08fdfee7a10bb61201d994ccbc9cb0ffb5b98530'
}, {
  a: '0x75b12814f2d3295afe0f381d9ed8174ac8523',
  b: '0x5a562b6f5a19b1f89c276e32a471339eedc7dc2cc598e4ea086779caca7eb',
  r: '-0x5a562b6f5a19b1f89c276e322ec00b89faf4b2d1c789accc698f6280022c8'
}, {
  a: '-0xa21183cbc4bc46bc5dd7d8544ee24c049099c6d593afe3368595',
  b: '-0xcd6fc66dce829483a04422910cce63184f2643cb012',
  r: '-0xa21183cbb7e54a5580efaf0c14de09db7fcce0a40ebd7ef9d583'
}, {
  a: '0xb563cdabf94159316f855b6e3a8b9def277f7f0b3f',
  b: '0xff66cfa162c848e9c67f4decca37113ba53df057858e2f69948e8090e99c0',
  r: '-0xff66cfa162c848e9c673f7afef777d261226f801ceaa86afb59c0898f8e81'
}, {
  a: '0x542b8935c8de5baf935f19c1cb8c4ff3d264694c9409',
  b: '-0xb6bc90c128e106342d0154c63e1a11b1303535d',
  r: '0x542b94a191ea6e3da3c25c91e0d8b3d5737f7c4fe766'
}, {
  a: '-0x546c642e0a3721e5f6b1ef32cb98e24482cea059fa564b79394a49da9c2b6d18c2d12b',
  b: '-0xac7fbcadaefb4b5d7c9af68625e6aaff1e2deb8f69aabd1d2ec44e153374224',
  r: '-0x546c6423423b570b06fd395b01e979e22463f068177792829e9e7807afe68bc58b8f07'
}, {
  a: '0xcbb30237ce5ab27a71c9fc3c83d7caca4a4ffdc63560',
  b: '0xef386f362a1c05e452418d339ed55406e651',
  r: '0xcbb30236df22434447adf65831963d96ab7aa9bf4f0f'
}, {
  a: '-0x864661fc4ae24af8a1eda8e6119cc87f90d982a20d26c61adef06f85ddec1aa17',
  b: '-0x36dd164f6779b486896f950d68a9a025ae25c966daf554f75',
  r: '-0x864661fc4ae24af86b109296aa2313f90769ed94a47d25f530caa61f02f6c5aa2'
}, {
  a: '-0x2189a19395570fcf355034b4ad77ad4a0c930e21b3df544428b42e2901cabc9e71a351',
  b: '0x20d5c3be174a38586993a7cc0c0085f03eba59f5e40c9',
  r: '-0x2189a19395570fcf355034b4af850985ee07b1a73a788ec0e974368805b6623dcfe41a'
}, {
  a: '-0xa297189a3954a306715fe2eb7c597e6987b496bd',
  b: '0x314348b058ffbc349cb50cb810bd4beac37c3518c46',
  r: '-0x314d7221e2a3517ecd1c22b63f751182aa14b062303'
}, {
  a: '-0x99a568d4ccbbe67f865ee094face54204d47ed445',
  b: '0x79fa2ed2554c3e5745fb36fc2094ae43888a2981b5bb3e17be73a5845dc',
  r: '-0x79fa2ed2554c3e574694dc64f5616a2a081088624ab60c6bdec0ed71a21'
}, {
  a: '-0x3a3da27a2e7a90c88cb9e7e1fa5f76fe0fc4b4d2d8acb5e79da8',
  b: '0xe98564d3309627a3b11d508bee5e488c55b554',
  r: '-0x3a3da27a2e7a91b2121ebb1290871aaf2d1540c136f5423d52fc'
}, {
  a: '0x584d1ccf085f3a87b235090d799553955b5e8fd884eff18',
  b: '-0xdcd2121a2245641bdf7020bfdfb8f84ad3321c7482f7f',
  r: '0x5929eee122817febce14792e39750c8da631c1f4f972e97'
}, {
  a: '-0x5d47e5326608d29164c5bd840e1d4baf9827990d28dddf20fdf',
  b: '0x447215b0de871e4534ff3ef6b8a9cdfd66ac1fce4093',
  r: '-0x5d47e536ad2a2d9f4d37a1d75e113b1b22c478e3939fdc05072'
}, {
  a: '-0x8f4210888c0c49d11482f6a5d032da15cb248d5',
  b: '-0x2ec6916caedf46c2330a15cf9b1742da5885bb4434c8e6583',
  r: '0x2ec6916cae5004b1aa7e0985ca02bfe3b2b5886a1efdc1cae'
}, {
  a: '0x89be74c0c4c4c840d3ebee6131af2b1d1516c9647b7b0e2ea19ec300aff0',
  b: '-0x155ffe146f49355838255f2ff3e6049611689c144f73e95371026a0c706c93d2c421',
  r: '0x155ffe14f907aa18fcea2770c7d1f2f74317c731648ab2b7ec7d783b120b56d37411'
}, {
  a: '0x75dc515a79e41f854d11a4334f6bdeb83fe8844d9bdc175ce5f76d8968d9ed50b',
  b: '0x718befad8a67b7603b7e4757592fad2e5c1376a541619c7989cf5a8ab78e4bf0cb48',
  r: '-0x718491e874c0191e4329763d15fab670708f781cfc87deb81400fb13def7be51f63d'
}, {
  a: '0x157e85f1abeb417e054a65a4fd008f24c50ad',
  b: '-0x16c87ee2ba26a58c2f8e3dc7f463622f277be7',
  r: '0x18206741d4e559a40fe2e42244336b2173cc94'
}, {
  a: '-0x2dce835afab67fc331ae869b468e70888d484180ed21e0fffdd106ef3b372',
  b: '-0xb7f40ec23c4d260d1684e4390d56627d0b319e66315f71f',
  r: '-0x2dce835afab67f0b3d9fc45ef96863720864087396bf63f4cc32a0bddbc53'
}, {
  a: '0xfa516dc27dcb5a85232019b89886ff4466072d73951d849',
  b: '-0xe6ee1c30db739c82f36b4b27869a7ec036d637dd8402ea0',
  r: '0x1e13f89f3593ef708168b64e01f217e049cdd655119206e9'
}, {
  a: '0xb42d467a4f51870466756eace972be6c2eaca3ae77ab',
  b: '-0xb17b575960d0cc707fb26bfa32c4fd5bfa418b05c5722',
  r: '0xbcbe2bc105c5e4e0c619c2e5015c2942bd2c5540acecd'
}, {
  a: '-0xdf1d170a36617606936a8c36fa2af70a1703b38',
  b: '-0x2f9a5c1f5175a764f479a1d1c569b37b5af520115',
  r: '0x2ebb3f08473f45eeede637458e6f888450de1c5dd'
}, {
  a: '-0x133b53940d3ea366146f01b14f7f2cdbc995154d835d32ee0f55bdf8ba',
  b: '-0x9356b6d3742c24f3a8d768dddcc0b1b16fed5240e11b',
  r: '-0x133b53940d3ea2d2bdb82e3d235a3932f22c3770c2ab817e22037d179f'
}, {
  a: '0xb8433c7e6f1f5007d36c638496f38eb6c96764523aff9d38ce93a41a13d009125f',
  b: '0xe8829390f92bff88e1d38def7f23a8e3a5b759b6706add404d975917569417f3',
  r: '0xb75ab9eade2624084a8a8ff6a7746b0de5c1acf8848f325b8e460cc0fc7974fa6c'
}, {
  a: '0xe278886c31e64caf14aaba550ad2cd043e8517db77caaa12c47625c9506a32bfc68d',
  b: '-0xcb1338e600dfdd7f4919d425fd10f6986e4d4e4e2e881aa53405f57d61279d1d926774',
  r: '0xcbf5b16e6d11c3cbf82e7ee0521bc965728bd36609ffe54f46ca6ba32a780750522e01'
}, {
  a: '-0xb2bf5274eae015a4c89e85f604fc6b13b7b51b6d5434d9',
  b: '-0x2d25c13b924f2e2dc1f37e85f9e81ed52bb5ca29d2bdd43837b81ab142c14b',
  r: '0x2d25c13b924f2e2d0f342c110f08093063174433cdc169248002ff43ee8c72'
}, {
  a: '-0x9217db716492a57b50b5a0d3fc803c3abd78402f5e534b398bc0a89d6d3952f7db',
  b: '-0x7458414881a186ef53aac8f9e1d1d4c2ef27025bf8d',
  r: '-0x9217db716492a57b50b5a0ccb6fc27b2a35fd13a23a6bb9b6ea35c6e7ac92d384e'
}, {
  a: '-0xf2f0efa90750f63aea9a270be2ab57150e26288102de2d303149dc67',
  b: '0x942aead5c1e96d26045a5b82239bf160e87ee',
  r: '-0xf2f0efa90750f63aeaa369ba900775abe0866e26bb0066ef47586455'
}, {
  a: '0x4ed0861a51071d0b5d0b93946803a83554ecc9b26cd7768b34d7e',
  b: '0x2c352323cf5a67b6ab3484c74060a0f05a2086c143b0563ee7f8be27f',
  r: '-0x2c34d453494016af8e2927bbaccc38ecb1eb31d479fde967716d89501'
}, {
  a: '0xb3b8af45709667129a255b9b3506c8bbc4418ad4',
  b: '0xb43d82220dd12e46af7b52e039c2811dca0b70cf56aaf0f0388fa779f806c',
  r: '-0xb43d82220dd12e46af7b47a4aece2a14639a472d00f13d9fcc03eb35df598'
}, {
  a: '0x69bc39d002408db862a1ce2615937aa4262516e4cae3217907ff00d5014621',
  b: '0xe8964f89bf6cdd9c2bbff78888b6c4aa1cabf54b158a1c1514b3bc60',
  r: '0x69bc38e76bf103f8f5c431fa559bf21b6f606cc81eedd6637de2ebc04d89c1'
}, {
  a: '-0xbeefe420d5bbda4a561765f9125c4443db5a6a190263d0f8dea4c',
  b: '-0xeae63d216fa20994a6559cc3eaf95a69d6663c13b4f',
  r: '-0xbeefe420d4d0f40d34a7c3ef7db5eea7176f70be988d6abccaefd'
}, {
  a: '-0x57121d82af72d089614d732919b9a4c454b47883db7b6e',
  b: '0x1a1ba1cc265228d1e9d6c6828f204bf4123e',
  r: '-0x57121d82af8cec2b2d73c551eba37b8ad74398cfcf8dac'
}, {
  a: '0x348aaeaf1a5d2405106860ef646a1479e30b5456f6a39c611289c3fbe15954',
  b: '-0x361fcbc3f20933b5984bf73998d972b0a15cc857636854f53651f5507',
  r: '0x348ab21117196325a3a3ba7423ddae077a365e6cc329129797d9176100ae5b'
}, {
  a: '-0x1e33eb31e321ab512a88bde888bd29fd85e4b3350607ee6c092fa06cb5aab7ae63a60',
  b: '-0x6009b5b56e32530f7447db495ae6e34479ccedef9b',
  r: '-0x1e33eb31e321ab512a88bde888b729622a8dd00fd510a9ee5499f1fe81631adf84ac5'
}, {
  a: '0x6cb588a248de4ad406a3f2fb09cca3a5bd49ee4fcca3a66776b2549d6c293468',
  b: '0xbf456deef6ef3f3e18296a54b24a96ad706dec3e5f7311c75de9',
  r: '0x6cb588a248dd8b8e98b4fc0bca8e8b7c52f53c0535f635f98a73f52a5a61d67f'
}, {
  a: '0x4bd61e287a62b42cfdfbf9cdbfc658a2d5fa63d2d546521e98b32e50c4b66d0',
  b: '-0x73a31b361b1be62c42bd941ace72a094ff0b8d40fc2f60fced5554f57',
  r: '0x4bd61e9c1d7dea4819e226107d5a7371489af8d1e0d3931ac8142b3e1a0b627'
}, {
  a: '-0xabe3e45d2fac9d6cc9f9ab99541b54162c656017f422a961ac6866eb6b3',
  b: '-0x9c5bb43e3c3e09b6e6b874d41ec67821baee5840db2148c896',
  r: '-0xabe3e45d25e6e228e635cafde5afccc8ea78f895d873c3dd9eb6525ee1d'
}];

const dataSmall = [{
  a: '-0x23e17de0c091f',
  b: '0x262d72cb30',
  r: '-0x23e3e0b7ed44f'
}, {
  a: '-0x5e4fb8288c3',
  b: '-0x3',
  r: '-0x5e4fb8288c0'
}, {
  a: '-0xb48641481',
  b: '0xab9',
  r: '-0xb48641f3a'
}, {
  a: '-0xd7ae0',
  b: '-0xcb08',
  r: '-0xcafd8'
}, {
  a: '-0xf338b747',
  b: '-0x4fe7c9089d443f',
  r: '0x4fe7c815648cf8'
}, {
  a: '0xd0884ce8',
  b: '0x6735af3',
  r: '0xca14f1f5'
}, {
  a: '0xa',
  b: '-0xb3a5d41fa176c8',
  r: '0xb3a5d41fa176d2'
}, {
  a: '-0x29',
  b: '0xda8eec2bfb0',
  r: '-0xda8eec2bfd9'
}, {
  a: '0x37ca742',
  b: '0x98b3',
  r: '0x37c0e8f'
}, {
  a: '0x5d4',
  b: '0xa',
  r: '0x5ca'
}, {
  a: '0xb04c1fa1fc',
  b: '0xf5',
  r: '0xb04c1fa107'
}, {
  a: '-0xf800d6a5ce605dab',
  b: '-0x431db8f560',
  r: '-0xf800d662b0a7684b'
}, {
  a: '0x7ee1369eba3',
  b: '0x503c763663f',
  r: '0x2ea4c068564'
}, {
  a: '0xd65d7214b149da4',
  b: '-0xea60e419739a0',
  r: '0xd747d2f8cabd744'
}, {
  a: '0x14c166e81a',
  b: '-0x55',
  r: '0x14c166e86f'
}, {
  a: '-0x4f3f794',
  b: '0x14b891472b2844dc',
  r: '-0x14b89147301c3c70'
}, {
  a: '0x7245983c',
  b: '0x64add05d8d062f2',
  r: '-0x64add05668acab6'
}, {
  a: '0xa82',
  b: '0xfe0c',
  r: '-0xf38a'
}, {
  a: '0x96',
  b: '-0x74',
  r: '0x10a'
}, {
  a: '-0xca13f41c2d',
  b: '-0x2979a3605',
  r: '-0xc77c59e628'
}, {
  a: '0x42fc',
  b: '0x53af71b81a6eda',
  r: '-0x53af71b81a2bde'
}, {
  a: '-0x666723',
  b: '0x98ec6dbeaf3e0ae',
  r: '-0x98ec6dbeb5a47d1'
}, {
  a: '0x2256bc3977f5',
  b: '0x34297',
  r: '0x2256bc36355e'
}, {
  a: '0xc547983a7841d4e5',
  b: '-0x8fb',
  r: '0xc547983a7841dde0'
}, {
  a: '-0xc880ae83b',
  b: '-0xf886a43',
  r: '-0xc78827df8'
}, {
  a: '-0x72228644a36',
  b: '0x1c68f181df61473',
  r: '-0x1c6963a465a5ea9'
}, {
  a: '-0x4c156cffccaee9a',
  b: '-0x3dd',
  r: '-0x4c156cffccaeabd'
}, {
  a: '0xd19f7b51f0a4',
  b: '0x988b2ed78a236',
  r: '-0x8b7137226b192'
}, {
  a: '-0xcc3987e6af',
  b: '-0x97ba74e6b8199d',
  r: '0x97b9a8ad3032ee'
}, {
  a: '0x3c28f0a539c',
  b: '-0x32',
  r: '0x3c28f0a53ce'
}, {
  a: '0xa',
  b: '0xd88e',
  r: '-0xd884'
}, {
  a: '-0x66e2f345b',
  b: '-0xafd57a6e86',
  r: '0xa9674b3a2b'
}, {
  a: '-0x1df6827c9164d',
  b: '0x93b46c8',
  r: '-0x1df6831045d15'
}, {
  a: '0x0',
  b: '0x0',
  r: '0x0'
}, {
  a: '0x0',
  b: '-0x79d31ae99e2fb72',
  r: '0x79d31ae99e2fb72'
}, {
  a: '-0xe',
  b: '-0xeb9d2713',
  r: '0xeb9d2705'
}, {
  a: '-0x2ccd3d2',
  b: '-0x5',
  r: '-0x2ccd3cd'
}, {
  a: '0xe5de16c',
  b: '-0xa704fb3ae4',
  r: '0xa713591c50'
}, {
  a: '0x4',
  b: '0x91274',
  r: '-0x91270'
}, {
  a: '0xba20932c9ac39',
  b: '0xf61305d83e08a',
  r: '-0x3bf272aba3451'
}, {
  a: '0x891f00b27c1',
  b: '0x13d31',
  r: '0x891f009ea90'
}, {
  a: '-0x765021df560',
  b: '-0xa3ef8d78eae',
  r: '0x2d9f6b9994e'
}, {
  a: '-0x401dcd7cc5eb9510',
  b: '0x784ef96',
  r: '-0x401dcd7ccd7084a6'
}, {
  a: '0x2d7a32',
  b: '0xabb4ad3f',
  r: '-0xab87330d'
}, {
  a: '0xbdb2f19544',
  b: '0x8b8e666372c1',
  r: '-0x8ad0b371dd7d'
}, {
  a: '-0x12ab',
  b: '-0x64919ad59004cc6',
  r: '0x64919ad59003a1b'
}, {
  a: '0xe5df0fa1d42296',
  b: '0xd41d1dfe10',
  r: '0xe5de3b84b62486'
}, {
  a: '0x515a2d0d9',
  b: '-0xd6040f41531d29',
  r: '0xd6041456f5ee02'
}, {
  a: '-0x513a',
  b: '0x567e',
  r: '-0xa7b8'
}, {
  a: '0x9',
  b: '0x8a125a0ca9e4dc4',
  r: '-0x8a125a0ca9e4dbb'
}, {
  a: '0xeef640084875449d',
  b: '-0x592051508',
  r: '0xeef6400dda7a59a5'
}, {
  a: '0x636fa1',
  b: '-0x75d955edfe2',
  r: '0x75d95c24f83'
}, {
  a: '0x9cb7db5e3c4e7',
  b: '0xc',
  r: '0x9cb7db5e3c4db'
}, {
  a: '-0x224370367',
  b: '-0xa9c2aff2bb87',
  r: '0xa9c08bbbb820'
}, {
  a: '-0x318c6d807f8376',
  b: '-0xa7ae6',
  r: '-0x318c6d80750890'
}, {
  a: '-0xd2dc',
  b: '-0x47c422a0dbcb585',
  r: '0x47c422a0dbbe2a9'
}, {
  a: '0xa49532882f3',
  b: '0x2c',
  r: '0xa49532882c7'
}, {
  a: '0x881afc8f0',
  b: '-0xafb48c3b9834759',
  r: '0xafb48cc3b331049'
}, {
  a: '0xdb573',
  b: '0x88867642bb3',
  r: '-0x88867567640'
}, {
  a: '-0xb0eb58ad03c82e',
  b: '0x10eedd979f3f',
  r: '-0xb0fc478a9b676d'
}, {
  a: '0x283d03e86a81cde',
  b: '0x2902d54a899096',
  r: '0x25acd693c1e8c48'
}, {
  a: '0xa916',
  b: '-0x57fcc202',
  r: '0x57fd6b18'
}, {
  a: '-0x603',
  b: '-0x5c93fac7',
  r: '0x5c93f4c4'
}, {
  a: '0x0',
  b: '0xcd9e8dfe0',
  r: '-0xcd9e8dfe0'
}, {
  a: '-0xe',
  b: '0x0',
  r: '-0xe'
}, {
  a: '-0xcdb0f',
  b: '-0xc2c3b175',
  r: '0xc2b6d666'
}, {
  a: '-0x91bf23',
  b: '0x6ceafb6905df',
  r: '-0x6ceafbfac502'
}, {
  a: '-0x1bcc264af5a9ac83',
  b: '0x2259e63e775dff4',
  r: '-0x1df1c4aedd1f8c77'
}, {
  a: '0x0',
  b: '0x5c591a4d0c',
  r: '-0x5c591a4d0c'
}, {
  a: '-0xc26fc2158e1fa84',
  b: '0x0',
  r: '-0xc26fc2158e1fa84'
}, {
  a: '-0x21eb950',
  b: '-0x56e09e73485f',
  r: '0x56e09c548f0f'
}, {
  a: '0xb1380',
  b: '0x4d6947088b32b',
  r: '-0x4d694707d9fab'
}, {
  a: '0x66f8ce20cd4549ab',
  b: '0x298ce8bf984c3',
  r: '0x66f63552414bc4e8'
}, {
  a: '0x163d79d711bf2b',
  b: '0x30',
  r: '0x163d79d711befb'
}, {
  a: '-0x8c597f5eec2fa0d',
  b: '0x8e231db5b',
  r: '-0x8c597fed0f4d568'
}, {
  a: '0x6f66e23',
  b: '0x72841496b035c943',
  r: '-0x72841496a93f5b20'
}, {
  a: '0x0',
  b: '0x5e6da',
  r: '-0x5e6da'
}, {
  a: '-0x6fac00',
  b: '-0x6',
  r: '-0x6fabfa'
}, {
  a: '0x9143829504',
  b: '0x90e74',
  r: '0x9143798690'
}, {
  a: '0x559bd2bd224b',
  b: '0xbba9f383015727',
  r: '-0xbb5457b04434dc'
}, {
  a: '0x5988ee082087',
  b: '0x504',
  r: '0x5988ee081b83'
}, {
  a: '-0xab0b',
  b: '-0x8c05c63b71c1ad',
  r: '0x8c05c63b7116a2'
}, {
  a: '-0x40c8',
  b: '-0x48c9460e24da89',
  r: '0x48c9460e2499c1'
}, {
  a: '-0x85be78baf40',
  b: '-0xfacbc8c',
  r: '-0x85bd7def2b4'
}, {
  a: '-0x45291fe5bfff78bd',
  b: '-0x8397',
  r: '-0x45291fe5bffef526'
}, {
  a: '-0x4807ce',
  b: '-0x200b8a',
  r: '-0x27fc44'
}, {
  a: '0x48',
  b: '-0xf45773e1d79ff10',
  r: '0xf45773e1d79ff58'
}, {
  a: '0x109f30bc1e',
  b: '-0x336c06d39ef',
  r: '0x3475f9df60d'
}, {
  a: '0x95b52dc62ad72',
  b: '-0xa9db1d',
  r: '0x95b52dd0c888f'
}, {
  a: '-0x9eeb87ea0faaa',
  b: '0x172a81b',
  r: '-0x9eeb88013a2c5'
}, {
  a: '-0xe057a2b5111',
  b: '-0x173130a',
  r: '-0xe0578b83e07'
}, {
  a: '0x1',
  b: '-0x487567ee9',
  r: '0x487567eea'
}, {
  a: '0xc376ac',
  b: '0x5f11',
  r: '0xc3179b'
}, {
  a: '0x8a5a0',
  b: '0x439c31edfb4c4c',
  r: '-0x439c31edf2a6ac'
}, {
  a: '-0xf36c3d7af',
  b: '-0xeb5ce94b',
  r: '-0xe4b66ee64'
}, {
  a: '-0x8a4',
  b: '0xa0a3b891e7b5',
  r: '-0xa0a3b891f059'
}, {
  a: '0xc0ecbd31918f0c3',
  b: '0x45941418e7b25',
  r: '0xc0a7291d78a759e'
}, {
  a: '0x9c7',
  b: '0xf1d',
  r: '-0x556'
}, {
  a: '-0xe7715819',
  b: '0xcf48e57187b67be',
  r: '-0xcf48e57ffecbfd7'
}, {
  a: '0x5',
  b: '-0x7bffcbdfc',
  r: '0x7bffcbe01'
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
    const r = d.a - d.b;
    if (d.r !== r) {
      console.log('Input A:  ' + d.a.toString(16));
      console.log('Input B:  ' + d.b.toString(16));
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
      r = d.a - d.b;
    }
  }
  return Date.now() - t1;
}


function testJsb(data, reps) {
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const r = d.a.subtract(d.b);
    if (!r.equal(d.r)) {
      console.log('Input A:  ' + d.a.toString(16));
      console.log('Input B:  ' + d.b.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: subtract');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = d.a.subtract(d.b);
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

// 暂时只考虑以太坊网络的
const tokenList = [
    {
        "address": "0x006BeA43Baa3f7A6f765F14f10A1a1b08334EF45",
        "name": "Stox",
        "symbol": "STX",
        "logoURI": "https://tokens.1inch.io/0x006bea43baa3f7a6f765f14f10a1a1b08334ef45.png"
    },
    {
        "address": "0x0327112423F3A68efdF1fcF402F6c5CB9f7C33fd",
        "name": "PieDAOBTC++",
        "symbol": "BTC",
        "logoURI": "https://tokens.1inch.io/0x0327112423f3a68efdf1fcf402f6c5cb9f7c33fd.png"
    },
    {
        "address": "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
        "name": "UMAVotingTokenv1",
        "symbol": "UMA",
        "logoURI": "https://tokens.1inch.io/0x04fa0d235c4abf4bcf4787af4cf447de572ef828.png"
    },
    {
        "address": "0x08d967bb0134F2d07f7cfb6E246680c53927DD30",
        "name": "MATHToken",
        "symbol": "MATH",
        "logoURI": "https://tokens.1inch.io/0x08d967bb0134f2d07f7cfb6e246680c53927dd30.png"
    },
    {
        "address": "0x0A913beaD80F321E7Ac35285Ee10d9d922659cB7",
        "name": "DOSNetworkToken",
        "symbol": "DOS",
        "logoURI": "https://tokens.1inch.io/0x0a913bead80f321e7ac35285ee10d9d922659cb7.png"
    },
    {
        "address": "0x0Ae055097C6d159879521C384F1D2123D1f195e6",
        "name": "STAKE",
        "symbol": "STAKE",
        "logoURI": "https://tokens.1inch.io/0x0ae055097c6d159879521c384f1d2123d1f195e6.png"
    },
    {
        "address": "0x88dF592F8eb5D7Bd38bFeF7dEb0fBc02cf3778a0",
        "name": "TellorTributes",
        "symbol": "TRB",
        "logoURI": "https://tokens.1inch.io/0x88df592f8eb5d7bd38bfef7deb0fbc02cf3778a0.png"
    },
    {
        "address": "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
        "name": "yearn.finance",
        "symbol": "YFI",
        "logoURI": "https://tokens.1inch.io/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e.png"
    },
    {
        "address": "0x0Cf0Ee63788A0849fE5297F3407f701E122cC023",
        "name": "Streamr",
        "symbol": "DATA",
        "logoURI": "https://tokens.1inch.io/0x0cf0ee63788a0849fe5297f3407f701e122cc023.png"
    },
    {
        "address": "0x0d438F3b5175Bebc262bF23753C1E53d03432bDE",
        "name": "WrappedNXM",
        "symbol": "wNXM",
        "logoURI": "https://tokens.1inch.io/0x0d438f3b5175bebc262bf23753c1e53d03432bde.png"
    },
    {
        "address": "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
        "name": "BasicAttentionToken",
        "symbol": "BAT",
        "logoURI": "https://tokens.1inch.io/0x0d8775f648430679a709e98d2b0cb6250d2887ef.png"
    },
    {
        "address": "0x0E8d6b471e332F140e7d9dbB99E5E3822F728DA6",
        "name": "Abyss",
        "symbol": "ABYSS",
        "logoURI": "https://tokens.1inch.io/0x0e8d6b471e332f140e7d9dbb99e5e3822f728da6.png"
    },
    {
        "address": "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
        "name": "Mana",
        "symbol": "MANA",
        "logoURI": "https://tokens.1inch.io/0x0f5d2fb29fb7d3cfee444a200298f468908cc942.png"
    },
    {
        "address": "0x0f7F961648aE6Db43C75663aC7E5414Eb79b5704",
        "name": "XIONetwork",
        "symbol": "XIO",
        "logoURI": "https://tokens.1inch.io/0x0f7f961648ae6db43c75663ac7e5414eb79b5704.png"
    },
    {
        "address": "0x12f649A9E821F90BB143089a6e56846945892ffB",
        "name": "uDOO",
        "symbol": "uDOO",
        "logoURI": "https://tokens.1inch.io/0x12f649a9e821f90bb143089a6e56846945892ffb.png"
    },
    {
        "address": "0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671",
        "name": "Numeraire",
        "symbol": "NMR",
        "logoURI": "https://tokens.1inch.io/0x1776e1f26f98b1a5df9cd347953a26dd3cb46671.png"
    },
    {
        "address": "0x178c820f862B14f316509ec36b13123DA19A6054",
        "name": "EnergyWebTokenBridged",
        "symbol": "EWTB",
        "logoURI": "https://tokens.1inch.io/0x178c820f862b14f316509ec36b13123da19a6054.png"
    },
    {
        "address": "0x1A5F9352Af8aF974bFC03399e3767DF6370d82e4",
        "name": "OWLToken",
        "symbol": "OWL",
        "logoURI": "https://tokens.1inch.io/0x1a5f9352af8af974bfc03399e3767df6370d82e4.png"
    },
    {
        "address": "0x1BeEF31946fbbb40B877a72E4ae04a8D1A5Cee06",
        "name": "Parachute",
        "symbol": "PAR",
        "logoURI": "https://tokens.1inch.io/0x1beef31946fbbb40b877a72e4ae04a8d1a5cee06.png"
    },
    {
        "address": "0x196f4727526eA7FB1e17b2071B3d8eAA38486988",
        "name": "Reserve",
        "symbol": "RSV",
        "logoURI": "https://tokens.1inch.io/0x196f4727526ea7fb1e17b2071b3d8eaa38486988.png"
    },
    {
        "address": "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C",
        "name": "Bancor",
        "symbol": "BNT",
        "logoURI": "https://tokens.1inch.io/0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c.png"
    },
    {
        "address": "0x221657776846890989a759BA2973e427DfF5C9bB",
        "name": "ReputationV2",
        "symbol": "REPv2",
        "logoURI": "https://tokens.1inch.io/0x221657776846890989a759ba2973e427dff5c9bb.png"
    },
    {
        "address": "0x255Aa6DF07540Cb5d3d297f0D0D4D84cb52bc8e6",
        "name": "RaidenNetworkToken",
        "symbol": "RDN",
        "logoURI": "https://tokens.1inch.io/0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6.png"
    },
    {
        "address": "0x28cb7e841ee97947a86B06fA4090C8451f64c0be",
        "name": "YFLink",
        "symbol": "YFL",
        "logoURI": "https://tokens.1inch.io/0x28cb7e841ee97947a86b06fa4090c8451f64c0be.png"
    },
    {
        "address": "0x28dee01D53FED0Edf5f6E310BF8Ef9311513Ae40",
        "name": "BlitzPredict",
        "symbol": "XBP",
        "logoURI": "https://tokens.1inch.io/0x28dee01d53fed0edf5f6e310bf8ef9311513ae40.png"
    },
    {
        "address": "0x2ba592F78dB6436527729929AAf6c908497cB200",
        "name": "Cream",
        "symbol": "CREAM",
        "logoURI": "https://tokens.1inch.io/0x2ba592f78db6436527729929aaf6c908497cb200.png"
    },
    {
        "address": "0x2C974B2d0BA1716E644c1FC59982a89DDD2fF724",
        "name": "Viberate",
        "symbol": "VIB",
        "logoURI": "https://tokens.1inch.io/0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724.png"
    },
    {
        "address": "0x301C755bA0fcA00B1923768Fffb3Df7f4E63aF31",
        "name": "GlobalDigitalContent",
        "symbol": "GDC",
        "logoURI": "https://tokens.1inch.io/0x301c755ba0fca00b1923768fffb3df7f4e63af31.png"
    },
    {
        "address": "0x309627af60F0926daa6041B8279484312f2bf060",
        "name": "USDB",
        "symbol": "USDB",
        "logoURI": "https://tokens.1inch.io/0x309627af60f0926daa6041b8279484312f2bf060.png"
    },
    {
        "address": "0x30f271C9E86D2B7d00a6376Cd96A1cFBD5F0b9b3",
        "name": "Decentr",
        "symbol": "DEC",
        "logoURI": "https://tokens.1inch.io/0x30f271c9e86d2b7d00a6376cd96a1cfbd5f0b9b3.png"
    },
    {
        "address": "0x340D2bdE5Eb28c1eed91B2f790723E3B160613B7",
        "name": "BLOCKv",
        "symbol": "VEE",
        "logoURI": "https://tokens.1inch.io/0x340d2bde5eb28c1eed91b2f790723e3b160613b7.png"
    },
    {
        "address": "0x3C6ff50c9Ec362efa359317009428d52115fe643",
        "name": "PeerExNetwork",
        "symbol": "PERX",
        "logoURI": "https://tokens.1inch.io/0x3c6ff50c9ec362efa359317009428d52115fe643.png"
    },
    {
        "address": "0x408e41876cCCDC0F92210600ef50372656052a38",
        "name": "Republic",
        "symbol": "REN",
        "logoURI": "https://tokens.1inch.io/0x408e41876cccdc0f92210600ef50372656052a38.png"
    },
    {
        "address": "0x40FD72257597aA14C7231A7B1aaa29Fce868F677",
        "name": "SoraToken",
        "symbol": "XOR",
        "logoURI": "https://tokens.1inch.io/0x40fd72257597aa14c7231a7b1aaa29fce868f677.png"
    },
    {
        "address": "0x42d6622deCe394b54999Fbd73D108123806f6a18",
        "name": "SPANK",
        "symbol": "SPANK",
        "logoURI": "https://tokens.1inch.io/0x42d6622dece394b54999fbd73d108123806f6a18.png"
    },
    {
        "address": "0x43044f861ec040DB59A7e324c40507adDb673142",
        "name": "Cap",
        "symbol": "CAP",
        "logoURI": "https://tokens.1inch.io/0x43044f861ec040db59a7e324c40507addb673142.png"
    },
    {
        "address": "0xfeF4185594457050cC9c23980d301908FE057Bb1",
        "name": "VIDTDatalink",
        "symbol": "VIDT",
        "logoURI": "https://tokens.1inch.io/0xfef4185594457050cc9c23980d301908fe057bb1.png"
    },
    {
        "address": "0x456AE45c0CE901E2e7c99c0718031cEc0A7A59Ff",
        "name": "VisionNetwork",
        "symbol": "VSN",
        "logoURI": "https://tokens.1inch.io/0x456ae45c0ce901e2e7c99c0718031cec0a7a59ff.png"
    },
    {
        "address": "0x4946Fcea7C692606e8908002e55A582af44AC121",
        "name": "FOAMToken",
        "symbol": "FOAM",
        "logoURI": "https://tokens.1inch.io/0x4946fcea7c692606e8908002e55a582af44ac121.png"
    },
    {
        "address": "0x4a220E6096B25EADb88358cb44068A3248254675",
        "name": "Quant",
        "symbol": "QNT",
        "logoURI": "https://tokens.1inch.io/0x4a220e6096b25eadb88358cb44068a3248254675.png"
    },
    {
        "address": "0x4c327471C44B2dacD6E90525f9D629bd2e4f662C",
        "name": "GHOST",
        "symbol": "GHOST",
        "logoURI": "https://tokens.1inch.io/0x4c327471c44b2dacd6e90525f9d629bd2e4f662c.png"
    },
    {
        "address": "0x4DA9b813057D04BAef4e5800E36083717b4a0341",
        "name": "AaveInterestbearingTUSD",
        "symbol": "aTUSDv1",
        "logoURI": "https://tokens.1inch.io/0x4da9b813057d04baef4e5800e36083717b4a0341.png"
    },
    {
        "address": "0x4e352cF164E64ADCBad318C3a1e222E9EBa4Ce42",
        "name": "MCDEXToken",
        "symbol": "MCB",
        "logoURI": "https://tokens.1inch.io/0x4e352cf164e64adcbad318c3a1e222e9eba4ce42.png"
    },
    {
        "address": "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
        "name": "BinanceUSD",
        "symbol": "BUSD",
        "logoURI": "https://tokens.1inch.io/0x4fabb145d64652a948d72533023f6e7a623c7c53.png"
    },
    {
        "address": "0x514910771AF9Ca656af840dff83E8264EcF986CA",
        "name": "ChainLink",
        "symbol": "LINK",
        "logoURI": "https://tokens.1inch.io/0x514910771af9ca656af840dff83e8264ecf986ca.png"
    },
    {
        "address": "0x543Ff227F64Aa17eA132Bf9886cAb5DB55DCAddf",
        "name": "DAOStack",
        "symbol": "GEN",
        "logoURI": "https://tokens.1inch.io/0x543ff227f64aa17ea132bf9886cab5db55dcaddf.png"
    },
    {
        "address": "0x56d811088235F11C8920698a204A5010a788f4b3",
        "name": "bZxProtocolToken",
        "symbol": "BZRX",
        "logoURI": "https://tokens.1inch.io/0x56d811088235f11c8920698a204a5010a788f4b3.png"
    },
    {
        "address": "0x5732046A883704404F284Ce41FfADd5b007FD668",
        "name": "Bluzelle",
        "symbol": "BLZ",
        "logoURI": "https://tokens.1inch.io/0x5732046a883704404f284ce41ffadd5b007fd668.png"
    },
    {
        "address": "0x57700244B20f84799a31c6C96DadFF373ca9D6c5",
        "name": "TRUSTDAO",
        "symbol": "TRUST",
        "logoURI": "https://tokens.1inch.io/0x57700244b20f84799a31c6c96dadff373ca9d6c5.png"
    },
    {
        "address": "0x58b6A8A3302369DAEc383334672404Ee733aB239",
        "name": "LivepeerToken",
        "symbol": "LPT",
        "logoURI": "https://tokens.1inch.io/0x58b6a8a3302369daec383334672404ee733ab239.png"
    },
    {
        "address": "0x5adc961D6AC3f7062D2eA45FEFB8D8167d44b190",
        "name": "Dether",
        "symbol": "DTH",
        "logoURI": "https://tokens.1inch.io/0x5adc961d6ac3f7062d2ea45fefb8d8167d44b190.png"
    },
    {
        "address": "0x5c872500c00565505F3624AB435c222E558E9ff8",
        "name": "CoTrader",
        "symbol": "COT",
        "logoURI": "https://tokens.1inch.io/0x5c872500c00565505f3624ab435c222e558e9ff8.png"
    },
    {
        "address": "0x5cAf454Ba92e6F2c929DF14667Ee360eD9fD5b26",
        "name": "Dev",
        "symbol": "DEV",
        "logoURI": "https://tokens.1inch.io/0x5caf454ba92e6f2c929df14667ee360ed9fd5b26.png"
    },
    {
        "address": "0x5d60d8d7eF6d37E16EBABc324de3bE57f135e0BC",
        "name": "MyBit",
        "symbol": "MYB",
        "logoURI": "https://tokens.1inch.io/0x5d60d8d7ef6d37e16ebabc324de3be57f135e0bc.png"
    },
    {
        "address": "0x607C794cDa77efB21F8848B7910ecf27451Ae842",
        "name": "DeFiPIEToken",
        "symbol": "PIE",
        "logoURI": "https://tokens.1inch.io/0x607c794cda77efb21f8848b7910ecf27451ae842.png"
    },
    {
        "address": "0x6226caA1857AFBc6DFB6ca66071Eb241228031A1",
        "name": "Linkart",
        "symbol": "LAR",
        "logoURI": "https://tokens.1inch.io/0x6226caa1857afbc6dfb6ca66071eb241228031a1.png"
    },
    {
        "address": "0x6251E725CD45Fb1AF99354035a414A2C0890B929",
        "name": "MixTrust",
        "symbol": "MXT",
        "logoURI": "https://tokens.1inch.io/0x6251e725cd45fb1af99354035a414a2c0890b929.png"
    },
    {
        "address": "0x625aE63000f46200499120B906716420bd059240",
        "name": "AaveInterestbearingSUSD",
        "symbol": "aSUSDv1",
        "logoURI": "https://tokens.1inch.io/0x625ae63000f46200499120b906716420bd059240.png"
    },
    {
        "address": "0x6710c63432A2De02954fc0f851db07146a6c0312",
        "name": "SmartMFG",
        "symbol": "MFG",
        "logoURI": "https://tokens.1inch.io/0x6710c63432a2de02954fc0f851db07146a6c0312.png"
    },
    {
        "address": "0x6810e776880C02933D47DB1b9fc05908e5386b96",
        "name": "Gnosis",
        "symbol": "GNO",
        "logoURI": "https://tokens.1inch.io/0x6810e776880c02933d47db1b9fc05908e5386b96.png"
    },
    {
        "address": "0x68d57c9a1C35f63E2c83eE8e49A64e9d70528D25",
        "name": "SirinLabs",
        "symbol": "SRN",
        "logoURI": "https://tokens.1inch.io/0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25.png"
    },
    {
        "address": "0x6b785a0322126826d8226d77e173d75DAfb84d11",
        "name": "BankrollVault",
        "symbol": "VLT",
        "logoURI": "https://tokens.1inch.io/0x6b785a0322126826d8226d77e173d75dafb84d11.png"
    },
    {
        "address": "0x6B9f031D718dDed0d681c20cB754F97b3BB81b78",
        "name": "Geeq",
        "symbol": "GEEQ",
        "logoURI": "https://tokens.1inch.io/0x6b9f031d718dded0d681c20cb754f97b3bb81b78.png"
    },
    {
        "address": "0x6c6EE5e31d828De241282B9606C8e98Ea48526E2",
        "name": "HoloToken",
        "symbol": "HOT",
        "logoURI": "https://tokens.1inch.io/0x6c6ee5e31d828de241282b9606c8e98ea48526e2.png"
    },
    {
        "address": "0x6F87D756DAf0503d08Eb8993686c7Fc01Dc44fB1",
        "name": "UniTrade",
        "symbol": "TRADE",
        "logoURI": "https://tokens.1inch.io/0x6f87d756daf0503d08eb8993686c7fc01dc44fb1.png"
    },
    {
        "address": "0x737F98AC8cA59f2C68aD658E3C3d8C8963E40a4c",
        "name": "Amon",
        "symbol": "AMN",
        "logoURI": "https://tokens.1inch.io/0x737f98ac8ca59f2c68ad658e3c3d8c8963e40a4c.png"
    },
    {
        "address": "0x744d70FDBE2Ba4CF95131626614a1763DF805B9E",
        "name": "Status",
        "symbol": "SNT",
        "logoURI": "https://tokens.1inch.io/0x744d70fdbe2ba4cf95131626614a1763df805b9e.png"
    },
    {
        "address": "0x7b123f53421b1bF8533339BFBdc7C98aA94163db",
        "name": "dfohub",
        "symbol": "buidl1",
        "logoURI": "https://tokens.1inch.io/0x7b123f53421b1bf8533339bfbdc7c98aa94163db.png"
    },
    {
        "address": "0x7C5A0CE9267ED19B22F8cae653F198e3E8daf098",
        "name": "Santiment",
        "symbol": "SAN",
        "logoURI": "https://tokens.1inch.io/0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098.png"
    },
    {
        "address": "0x80fB784B7eD66730e8b1DBd9820aFD29931aab03",
        "name": "EthLend",
        "symbol": "LEND",
        "logoURI": "https://tokens.1inch.io/0x80fb784b7ed66730e8b1dbd9820afd29931aab03.png"
    },
    {
        "address": "0x814e0908b12A99FeCf5BC101bB5d0b8B5cDf7d26",
        "name": "MeasurableDataToken",
        "symbol": "MDT1",
        "logoURI": "https://tokens.1inch.io/0x814e0908b12a99fecf5bc101bb5d0b8b5cdf7d26.png"
    },
    {
        "address": "0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26",
        "name": "OriginProtocol",
        "symbol": "OGN",
        "logoURI": "https://tokens.1inch.io/0x8207c1ffc5b6804f6024322ccf34f29c3541ae26.png"
    },
    {
        "address": "0x821144518dfE9e7b44fCF4d0824e15e8390d4637",
        "name": "ATISToken",
        "symbol": "ATIS",
        "logoURI": "https://tokens.1inch.io/0x821144518dfe9e7b44fcf4d0824e15e8390d4637.png"
    },
    {
        "address": "0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419",
        "name": "DIAToken",
        "symbol": "DIA",
        "logoURI": "https://tokens.1inch.io/0x84ca8bc7997272c7cfb4d0cd3d55cd942b3c9419.png"
    },
    {
        "address": "0x8762db106B2c2A0bccB3A80d1Ed41273552616E8",
        "name": "ReserveRights",
        "symbol": "RSR",
        "logoURI": "https://tokens.1inch.io/0x8762db106b2c2a0bccb3a80d1ed41273552616e8.png"
    },
    {
        "address": "0x89Ab32156e46F46D02ade3FEcbe5Fc4243B9AAeD",
        "name": "pNetworkToken",
        "symbol": "PNT",
        "logoURI": "https://tokens.1inch.io/0x89ab32156e46f46d02ade3fecbe5fc4243b9aaed.png"
    },
    {
        "address": "0x8Ab7404063Ec4DBcfd4598215992DC3F8EC853d7",
        "name": "Akropolis",
        "symbol": "AKRO",
        "logoURI": "https://tokens.1inch.io/0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7.png"
    },
    {
        "address": "0x8CE9137d39326AD0cD6491fb5CC0CbA0e089b6A9",
        "name": "Swipe",
        "symbol": "SXP",
        "logoURI": "https://tokens.1inch.io/0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9.png"
    },
    {
        "address": "0x8E870D67F660D95d5be530380D0eC0bd388289E1",
        "name": "PaxDollar",
        "symbol": "USDP",
        "logoURI": "https://tokens.1inch.io/0x8e870d67f660d95d5be530380d0ec0bd388289e1.png"
    },
    {
        "address": "0x8f8221aFbB33998d8584A2B05749bA73c37a938a",
        "name": "Request",
        "symbol": "REQ",
        "logoURI": "https://tokens.1inch.io/0x8f8221afbb33998d8584a2b05749ba73c37a938a.png"
    },
    {
        "address": "0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d",
        "name": "Kleros",
        "symbol": "PNK",
        "logoURI": "https://tokens.1inch.io/0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d.png"
    },
    {
        "address": "0x95172ccBe8344fecD73D0a30F54123652981BD6F",
        "name": "MeridianNetwork",
        "symbol": "LOCK",
        "logoURI": "https://tokens.1inch.io/0x95172ccbe8344fecd73d0a30f54123652981bd6f.png"
    },
    {
        "address": "0x960b236A07cf122663c4303350609A66A7B288C0",
        "name": "AragonNetworkToken",
        "symbol": "ANTv1",
        "logoURI": "https://tokens.1inch.io/0x960b236a07cf122663c4303350609a66a7b288c0.png"
    },
    {
        "address": "0x967da4048cD07aB37855c090aAF366e4ce1b9F48",
        "name": "OceanToken",
        "symbol": "OCEAN",
        "logoURI": "https://tokens.1inch.io/0x967da4048cd07ab37855c090aaf366e4ce1b9f48.png"
    },
    {
        "address": "0x990f341946A3fdB507aE7e52d17851B87168017c",
        "name": "Strong",
        "symbol": "STRONG",
        "logoURI": "https://tokens.1inch.io/0x990f341946a3fdb507ae7e52d17851b87168017c.png"
    },
    {
        "address": "0x9992eC3cF6A55b00978cdDF2b27BC6882d88D1eC",
        "name": "Polymath",
        "symbol": "POLY",
        "logoURI": "https://tokens.1inch.io/0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec.png"
    },
    {
        "address": "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
        "name": "Maker",
        "symbol": "MKR",
        "logoURI": "https://tokens.1inch.io/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2.png"
    },
    {
        "address": "0xA15C7Ebe1f07CaF6bFF097D8a589fb8AC49Ae5B3",
        "name": "PundiX",
        "symbol": "NPXS",
        "logoURI": "https://tokens.1inch.io/0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3.png"
    },
    {
        "address": "0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83",
        "name": "YFII.finance",
        "symbol": "YFII",
        "logoURI": "https://tokens.1inch.io/0xa1d0e215a23d7030842fc67ce582a6afa3ccab83.png"
    },
    {
        "address": "0xa1d65E8fB6e87b60FECCBc582F7f97804B725521",
        "name": "DXdao",
        "symbol": "DXD",
        "logoURI": "https://tokens.1inch.io/0xa1d65e8fb6e87b60feccbc582f7f97804b725521.png"
    },
    {
        "address": "0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2",
        "name": "Meta",
        "symbol": "MTA",
        "logoURI": "https://tokens.1inch.io/0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2.png"
    },
    {
        "address": "0xa3d58c4E56fedCae3a7c43A725aeE9A71F0ece4e",
        "name": "Metronome",
        "symbol": "MET",
        "logoURI": "https://tokens.1inch.io/0xa3d58c4e56fedcae3a7c43a725aee9a71f0ece4e.png"
    },
    {
        "address": "0xa462d0E6Bb788c7807B1B1C96992CE1f7069E195",
        "name": "EQUUSMiningToken",
        "symbol": "EQMT",
        "logoURI": "https://tokens.1inch.io/0xa462d0e6bb788c7807b1b1c96992ce1f7069e195.png"
    },
    {
        "address": "0xA4e8C3Ec456107eA67d3075bF9e3DF3A75823DB0",
        "name": "LoomNetwork",
        "symbol": "LOOM",
        "logoURI": "https://tokens.1inch.io/0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0.png"
    },
    {
        "address": "0xA64BD6C70Cb9051F6A9ba1F163Fdc07E0DfB5F84",
        "name": "AaveInterestbearingLINK",
        "symbol": "aLINKv1",
        "logoURI": "https://tokens.1inch.io/0xa64bd6c70cb9051f6a9ba1f163fdc07e0dfb5f84.png"
    },
    {
        "address": "0xa704fCe7b309Ec09DF16e2F5Ab8cAf6Fe8A4BAA9",
        "name": "AgriChain",
        "symbol": "AGRI",
        "logoURI": "https://tokens.1inch.io/0xa704fce7b309ec09df16e2f5ab8caf6fe8a4baa9.png"
    },
    {
        "address": "0xb056c38f6b7Dc4064367403E26424CD2c60655e1",
        "name": "CEEKVR",
        "symbol": "CEEK",
        "logoURI": "https://tokens.1inch.io/0xb056c38f6b7dc4064367403e26424cd2c60655e1.png"
    },
    {
        "address": "0xB4272071eCAdd69d933AdcD19cA99fe80664fc08",
        "name": "CryptoFranc",
        "symbol": "XCHF",
        "logoURI": "https://tokens.1inch.io/0xb4272071ecadd69d933adcd19ca99fe80664fc08.png"
    },
    {
        "address": "0xB4EFd85c19999D84251304bDA99E90B92300Bd93",
        "name": "RocketPool",
        "symbol": "RPL",
        "logoURI": "https://tokens.1inch.io/0xb4efd85c19999d84251304bda99e90b92300bd93.png"
    },
    {
        "address": "0xeca82185adCE47f39c684352B0439f030f860318",
        "name": "Perlin",
        "symbol": "PERL",
        "logoURI": "https://tokens.1inch.io/0xeca82185adce47f39c684352b0439f030f860318.png"
    },
    {
        "address": "0xb6c4267C4877BB0D6b1685Cfd85b0FBe82F105ec",
        "name": "Relevant",
        "symbol": "REL",
        "logoURI": "https://tokens.1inch.io/0xb6c4267c4877bb0d6b1685cfd85b0fbe82f105ec.png"
    },
    {
        "address": "0xba100000625a3754423978a60c9317c58a424e3D",
        "name": "Balancer",
        "symbol": "BAL",
        "logoURI": "https://tokens.1inch.io/0xba100000625a3754423978a60c9317c58a424e3d.png"
    },
    {
        "address": "0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55",
        "name": "BandProtocol",
        "symbol": "BAND",
        "logoURI": "https://tokens.1inch.io/0xba11d00c5f74255f56a5e366f4f77f5a186d7f55.png"
    },
    {
        "address": "0xBB1fA4FdEB3459733bF67EbC6f893003fA976a82",
        "name": "Bitnation",
        "symbol": "XPAT",
        "logoURI": "https://tokens.1inch.io/0xbb1fa4fdeb3459733bf67ebc6f893003fa976a82.png"
    },
    {
        "address": "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD",
        "name": "Loopring",
        "symbol": "LRC",
        "logoURI": "https://tokens.1inch.io/0xbbbbca6a901c926f240b89eacb641d8aec7aeafd.png"
    },
    {
        "address": "0xBC86727E770de68B1060C91f6BB6945c73e10388",
        "name": "InkProtocol",
        "symbol": "XNK",
        "logoURI": "https://tokens.1inch.io/0xbc86727e770de68b1060c91f6bb6945c73e10388.png"
    },
    {
        "address": "0xBd2949F67DcdC549c6Ebe98696449Fa79D988A9F",
        "name": "MeterGovernancemappedbyMeter.io",
        "symbol": "eMTRG",
        "logoURI": "https://tokens.1inch.io/0xbd2949f67dcdc549c6ebe98696449fa79d988a9f.png"
    },
    {
        "address": "0xbE9375C6a420D2eEB258962efB95551A5b722803",
        "name": "KyberStormXToken",
        "symbol": "STMX",
        "logoURI": "https://tokens.1inch.io/0xbe9375c6a420d2eeb258962efb95551a5b722803.png"
    },
    {
        "address": "0xbf2179859fc6D5BEE9Bf9158632Dc51678a4100e",
        "name": "Aelf",
        "symbol": "ELF",
        "logoURI": "https://tokens.1inch.io/0xbf2179859fc6d5bee9bf9158632dc51678a4100e.png"
    },
    {
        "address": "0xc00e94Cb662C3520282E6f5717214004A7f26888",
        "name": "Compound",
        "symbol": "COMP",
        "logoURI": "https://tokens.1inch.io/0xc00e94cb662c3520282e6f5717214004a7f26888.png"
    },
    {
        "address": "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
        "name": "SynthetixNetworkToken",
        "symbol": "SNX",
        "logoURI": "https://tokens.1inch.io/0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f.png"
    },
    {
        "address": "0x27702a26126e0B3702af63Ee09aC4d1A084EF628",
        "name": "aleph.imv2",
        "symbol": "ALEPH",
        "logoURI": "https://tokens.1inch.io/0x27702a26126e0b3702af63ee09ac4d1a084ef628.png"
    },
    {
        "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        "name": "WrappedEther",
        "symbol": "WETH",
        "logoURI": "https://tokens.1inch.io/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png"
    },
    {
        "address": "0xc12d099be31567add4e4e4d0D45691C3F58f5663",
        "name": "Auctus",
        "symbol": "AUC",
        "logoURI": "https://tokens.1inch.io/0xc12d099be31567add4e4e4d0d45691c3f58f5663.png"
    },
    {
        "address": "0xC28e931814725BbEB9e670676FaBBCb694Fe7DF2",
        "name": "QuadrantProtocol",
        "symbol": "EQUAD",
        "logoURI": "https://tokens.1inch.io/0xc28e931814725bbeb9e670676fabbcb694fe7df2.png"
    },
    {
        "address": "0xc3dD23A0a854b4f9aE80670f528094E9Eb607CCb",
        "name": "Trendering",
        "symbol": "TRND",
        "logoURI": "https://tokens.1inch.io/0xc3dd23a0a854b4f9ae80670f528094e9eb607ccb.png"
    },
    {
        "address": "0xCC4304A31d09258b0029eA7FE63d032f52e44EFe",
        "name": "TrustSwapToken",
        "symbol": "SWAP",
        "logoURI": "https://tokens.1inch.io/0xcc4304a31d09258b0029ea7fe63d032f52e44efe.png"
    },
    {
        "address": "0xCc80C051057B774cD75067Dc48f8987C4Eb97A5e",
        "name": "EthfinexNectarToken",
        "symbol": "NEC",
        "logoURI": "https://tokens.1inch.io/0xcc80c051057b774cd75067dc48f8987c4eb97a5e.png"
    },
    {
        "address": "0xcD62b1C403fa761BAadFC74C525ce2B51780b184",
        "name": "AragonNetworkJuror",
        "symbol": "ANJ",
        "logoURI": "https://tokens.1inch.io/0xcd62b1c403fa761baadfc74c525ce2b51780b184.png"
    },
    {
        "address": "0xCf8f9555D55CE45a3A33a81D6eF99a2a2E71Dee2",
        "name": "CBIIndex7",
        "symbol": "CBIX7",
        "logoURI": "https://tokens.1inch.io/0xcf8f9555d55ce45a3a33a81d6ef99a2a2e71dee2.png"
    },
    {
        "address": "0xd15eCDCF5Ea68e3995b2D0527A0aE0a3258302F8",
        "name": "MachiXToken",
        "symbol": "MCX",
        "logoURI": "https://tokens.1inch.io/0xd15ecdcf5ea68e3995b2d0527a0ae0a3258302f8.png"
    },
    {
        "address": "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07",
        "name": "OmiseGO",
        "symbol": "OMG",
        "logoURI": "https://tokens.1inch.io/0xd26114cd6ee289accf82350c8d8487fedb8a0c07.png"
    },
    {
        "address": "0xd4c435F5B09F855C3317c8524Cb1F586E42795fa",
        "name": "Cindicator",
        "symbol": "CND",
        "logoURI": "https://tokens.1inch.io/0xd4c435f5b09f855c3317c8524cb1f586e42795fa.png"
    },
    {
        "address": "0xd559f20296FF4895da39b5bd9ADd54b442596a61",
        "name": "FintruX",
        "symbol": "FTX",
        "logoURI": "https://tokens.1inch.io/0xd559f20296ff4895da39b5bd9add54b442596a61.png"
    },
    {
        "address": "0xD6F0Bb2A45110f819e908a915237D652Ac7c5AA8",
        "name": "DFOHub",
        "symbol": "BUIDL2",
        "logoURI": "https://tokens.1inch.io/0xd6f0bb2a45110f819e908a915237d652ac7c5aa8.png"
    },
    {
        "address": "0xD8912C10681D8B21Fd3742244f44658dBA12264E",
        "name": "Pluton",
        "symbol": "PLU",
        "logoURI": "https://tokens.1inch.io/0xd8912c10681d8b21fd3742244f44658dba12264e.png"
    },
    {
        "address": "0xdd974D5C2e2928deA5F71b9825b8b646686BD200",
        "name": "KyberNetworkLegacy",
        "symbol": "KNCL",
        "logoURI": "https://tokens.1inch.io/0xdd974d5c2e2928dea5f71b9825b8b646686bd200.png"
    },
    {
        "address": "0xDF2C7238198Ad8B389666574f2d8bc411A4b7428",
        "name": "Mainframe",
        "symbol": "MFT",
        "logoURI": "https://tokens.1inch.io/0xdf2c7238198ad8b389666574f2d8bc411a4b7428.png"
    },
    {
        "address": "0xe3818504c1B32bF1557b16C238B2E01Fd3149C17",
        "name": "Pillar",
        "symbol": "PLR",
        "logoURI": "https://tokens.1inch.io/0xe3818504c1b32bf1557b16c238b2e01fd3149c17.png"
    },
    {
        "address": "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
        "name": "0xProtocol",
        "symbol": "ZRX",
        "logoURI": "https://tokens.1inch.io/0xe41d2489571d322189246dafa5ebde1f4699f498.png"
    },
    {
        "address": "0xE48972fCd82a274411c01834e2f031D4377Fa2c0",
        "name": "2key.network",
        "symbol": "2KEY",
        "logoURI": "https://tokens.1inch.io/0xe48972fcd82a274411c01834e2f031d4377fa2c0.png"
    },
    {
        "address": "0xec67005c4E498Ec7f55E092bd1d35cbC47C91892",
        "name": "MelonToken",
        "symbol": "MLN",
        "logoURI": "https://tokens.1inch.io/0xec67005c4e498ec7f55e092bd1d35cbc47c91892.png"
    },
    {
        "address": "0xeEEE2a622330E6d2036691e983DEe87330588603",
        "name": "AskobarNetwork",
        "symbol": "ASKO",
        "logoURI": "https://tokens.1inch.io/0xeeee2a622330e6d2036691e983dee87330588603.png"
    },
    {
        "address": "0xEeEeeeeEe2aF8D0e1940679860398308e0eF24d6",
        "name": "EthverseToken",
        "symbol": "ETHVEthverse",
        "logoURI": "https://tokens.1inch.io/0xeeeeeeeee2af8d0e1940679860398308e0ef24d6.png"
    },
    {
        "address": "0xeF9Cd7882c067686691B6fF49e650b43AFBBCC6B",
        "name": "FinNexus",
        "symbol": "FNX",
        "logoURI": "https://tokens.1inch.io/0xef9cd7882c067686691b6ff49e650b43afbbcc6b.png"
    },
    {
        "address": "0xf04a8ac553FceDB5BA99A64799155826C136b0Be",
        "name": "Flixxo",
        "symbol": "FLIXX",
        "logoURI": "https://tokens.1inch.io/0xf04a8ac553fcedb5ba99a64799155826c136b0be.png"
    },
    {
        "address": "0xF1290473E210b2108A85237fbCd7b6eb42Cc654F",
        "name": "HedgeTrade",
        "symbol": "HEDG",
        "logoURI": "https://tokens.1inch.io/0xf1290473e210b2108a85237fbcd7b6eb42cc654f.png"
    },
    {
        "address": "0xf29e46887FFAE92f1ff87DfE39713875Da541373",
        "name": "UniCrypt",
        "symbol": "UNC",
        "logoURI": "https://tokens.1inch.io/0xf29e46887ffae92f1ff87dfe39713875da541373.png"
    },
    {
        "address": "0xF2f9A7e93f845b3ce154EfbeB64fB9346FCCE509",
        "name": "UniPower",
        "symbol": "POWER",
        "logoURI": "https://tokens.1inch.io/0xf2f9a7e93f845b3ce154efbeb64fb9346fcce509.png"
    },
    {
        "address": "0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c",
        "name": "EnjinCoin",
        "symbol": "ENJ",
        "logoURI": "https://tokens.1inch.io/0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c.png"
    },
    {
        "address": "0xf8e386EDa857484f5a12e4B5DAa9984E06E73705",
        "name": "Indorse",
        "symbol": "IND",
        "logoURI": "https://tokens.1inch.io/0xf8e386eda857484f5a12e4b5daa9984e06e73705.png"
    },
    {
        "address": "0xF970b8E36e23F7fC3FD752EeA86f8Be8D83375A6",
        "name": "Ripio",
        "symbol": "RCN",
        "logoURI": "https://tokens.1inch.io/0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6.png"
    },
    {
        "address": "0xfC1E690f61EFd961294b3e1Ce3313fBD8aa4f85d",
        "name": "AaveInterestbearingDAI",
        "symbol": "aDAIv1",
        "logoURI": "https://tokens.1inch.io/0xfc1e690f61efd961294b3e1ce3313fbd8aa4f85d.png"
    },
    {
        "address": "0x00000000441378008EA67F4284A57932B1c000a5",
        "name": "TrueGBP",
        "symbol": "TGBP",
        "logoURI": "https://tokens.1inch.io/0x00000000441378008ea67f4284a57932b1c000a5.png"
    },
    {
        "address": "0x06AF07097C9Eeb7fD685c692751D5C66dB49c215",
        "name": "ChaiToken",
        "symbol": "CHAI",
        "logoURI": "https://tokens.1inch.io/0x06af07097c9eeb7fd685c692751d5c66db49c215.png"
    },
    {
        "address": "0x2AF5D2aD76741191D15Dfe7bF6aC92d4Bd912Ca3",
        "name": "BitfinexLEOToken",
        "symbol": "LEO",
        "logoURI": "https://tokens.1inch.io/0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3.png"
    },
    {
        "address": "0x6f259637dcD74C767781E37Bc6133cd6A68aa161",
        "name": "HuobiToken",
        "symbol": "HT",
        "logoURI": "https://tokens.1inch.io/0x6f259637dcd74c767781e37bc6133cd6a68aa161.png"
    },
    {
        "address": "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
        "name": "MaticToken",
        "symbol": "MATIC",
        "logoURI": "https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png"
    },
    {
        "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "name": "DaiStablecoin",
        "symbol": "DAI",
        "logoURI": "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png"
    },
    {
        "address": "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359",
        "name": "SaiStablecoin",
        "symbol": "SAI",
        "logoURI": "https://tokens.1inch.io/0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359.png"
    },
    {
        "address": "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
        "name": "SynthsUSD",
        "symbol": "sUSD",
        "logoURI": "https://tokens.1inch.io/0x57ab1ec28d129707052df4df418d58a2d46d5f51.png"
    },
    {
        "address": "0x0000000000085d4780B73119b644AE5ecd22b376",
        "name": "TrueUSD",
        "symbol": "TUSD",
        "logoURI": "https://tokens.1inch.io/0x0000000000085d4780b73119b644ae5ecd22b376.png"
    },
    {
        "address": "0x3a3A65aAb0dd2A17E3F1947bA16138cd37d08c04",
        "name": "AaveInterestbearingETH",
        "symbol": "aETHv1",
        "logoURI": "https://tokens.1inch.io/0x3a3a65aab0dd2a17e3f1947ba16138cd37d08c04.png"
    },
    {
        "address": "0xE1BA0FB44CCb0D11b80F92f4f8Ed94CA3fF51D00",
        "name": "AaveInterestbearingBAT",
        "symbol": "aBATv1",
        "logoURI": "https://tokens.1inch.io/0xe1ba0fb44ccb0d11b80f92f4f8ed94ca3ff51d00.png"
    },
    {
        "address": "0x9D91BE44C06d373a8a226E1f3b146956083803eB",
        "name": "AaveInterestbearingKNC",
        "symbol": "aKNCv1",
        "logoURI": "https://tokens.1inch.io/0x9d91be44c06d373a8a226e1f3b146956083803eb.png"
    },
    {
        "address": "0x7D2D3688Df45Ce7C552E19c27e007673da9204B8",
        "name": "AaveInterestbearingLEND",
        "symbol": "aLENDv1",
        "logoURI": "https://tokens.1inch.io/0x7d2d3688df45ce7c552e19c27e007673da9204b8.png"
    },
    {
        "address": "0x6FCE4A401B6B80ACe52baAefE4421Bd188e76F6f",
        "name": "AaveInterestbearingMANA",
        "symbol": "aMANAv1",
        "logoURI": "https://tokens.1inch.io/0x6fce4a401b6b80ace52baaefe4421bd188e76f6f.png"
    },
    {
        "address": "0x7deB5e830be29F91E298ba5FF1356BB7f8146998",
        "name": "AaveInterestbearingMKR",
        "symbol": "aMKRv1",
        "logoURI": "https://tokens.1inch.io/0x7deb5e830be29f91e298ba5ff1356bb7f8146998.png"
    },
    {
        "address": "0x71010A9D003445aC60C4e6A7017c1E89A477B438",
        "name": "AaveInterestbearingREP",
        "symbol": "aREPv1",
        "logoURI": "https://tokens.1inch.io/0x71010a9d003445ac60c4e6a7017c1e89a477b438.png"
    },
    {
        "address": "0x328C4c80BC7aCa0834Db37e6600A6c49E12Da4DE",
        "name": "AaveInterestbearingSNX",
        "symbol": "aSNXv1",
        "logoURI": "https://tokens.1inch.io/0x328c4c80bc7aca0834db37e6600a6c49e12da4de.png"
    },
    {
        "address": "0x6Fb0855c404E09c47C3fBCA25f08d4E41f9F062f",
        "name": "AaveInterestbearingZRX",
        "symbol": "aZRXv1",
        "logoURI": "https://tokens.1inch.io/0x6fb0855c404e09c47c3fbca25f08d4e41f9f062f.png"
    },
    {
        "address": "0x66fD97a78d8854fEc445cd1C80a07896B0b4851f",
        "name": "LunchMoney",
        "symbol": "LMY",
        "logoURI": "https://tokens.1inch.io/0x66fd97a78d8854fec445cd1c80a07896b0b4851f.png"
    },
    {
        "address": "0x16de59092dAE5CcF4A1E6439D611fd0653f0Bd01",
        "name": "iearnDAIv2",
        "symbol": "yDAIv2",
        "logoURI": "https://tokens.1inch.io/0x16de59092dae5ccf4a1e6439d611fd0653f0bd01.png"
    },
    {
        "address": "0xC2cB1040220768554cf699b0d863A3cd4324ce32",
        "name": "iearnDAIv3",
        "symbol": "yDAIv3",
        "logoURI": "https://tokens.1inch.io/0xc2cb1040220768554cf699b0d863a3cd4324ce32.png"
    },
    {
        "address": "0xAcfa209Fb73bF3Dd5bBfb1101B9Bc999C49062a5",
        "name": "BlockchainCertifiedDataToken",
        "symbol": "BCDT",
        "logoURI": "https://tokens.1inch.io/0xacfa209fb73bf3dd5bbfb1101b9bc999c49062a5.png"
    },
    {
        "address": "0x4de2573e27E648607B50e1Cfff921A33E4A34405",
        "name": "LendroidSupportToken",
        "symbol": "LST",
        "logoURI": "https://tokens.1inch.io/0x4de2573e27e648607b50e1cfff921a33e4a34405.png"
    },
    {
        "address": "0xD56daC73A4d6766464b38ec6D91eB45Ce7457c44",
        "name": "Panvalapan",
        "symbol": "PAN",
        "logoURI": "https://tokens.1inch.io/0xd56dac73a4d6766464b38ec6d91eb45ce7457c44.png"
    },
    {
        "address": "0x6Ee0f7BB50a54AB5253dA0667B0Dc2ee526C30a8",
        "name": "AaveInterestbearingBinanceUSD",
        "symbol": "aBUSDv1",
        "logoURI": "https://tokens.1inch.io/0x6ee0f7bb50a54ab5253da0667b0dc2ee526c30a8.png"
    },
    {
        "address": "0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC",
        "name": "KEEPToken",
        "symbol": "KEEP",
        "logoURI": "https://tokens.1inch.io/0x85eee30c52b0b379b046fb0f85f4f3dc3009afec.png"
    },
    {
        "address": "0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa",
        "name": "tBTC",
        "symbol": "tBTC",
        "logoURI": "https://tokens.1inch.io/0x8daebade922df735c38c80c7ebd708af50815faa.png"
    },
    {
        "address": "0x0316EB71485b0Ab14103307bf65a021042c6d380",
        "name": "HuobiBTC",
        "symbol": "HBTC",
        "logoURI": "https://tokens.1inch.io/0x0316eb71485b0ab14103307bf65a021042c6d380.png"
    },
    {
        "address": "0x3A9FfF453d50D4Ac52A6890647b823379ba36B9E",
        "name": "Shuffle.MonsterV3",
        "symbol": "SHUF",
        "logoURI": "https://tokens.1inch.io/0x3a9fff453d50d4ac52a6890647b823379ba36b9e.png"
    },
    {
        "address": "0xC0F9bD5Fa5698B6505F643900FFA515Ea5dF54A9",
        "name": "DONUT",
        "symbol": "DONUT",
        "logoURI": "https://tokens.1inch.io/0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9.png"
    },
    {
        "address": "0x45804880De22913dAFE09f4980848ECE6EcbAf78",
        "name": "PaxosGold",
        "symbol": "PAXG",
        "logoURI": "https://tokens.1inch.io/0x45804880de22913dafe09f4980848ece6ecbaf78.png"
    },
    {
        "address": "0x035dF12E0F3ac6671126525f1015E47D79dFEDDF",
        "name": "0xMonero",
        "symbol": "0xMR",
        "logoURI": "https://tokens.1inch.io/0x035df12e0f3ac6671126525f1015e47d79dfeddf.png"
    },
    {
        "address": "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8",
        "name": "Curve.fiiearnpooltoken",
        "symbol": "yCurve",
        "logoURI": "https://tokens.1inch.io/0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8.png"
    },
    {
        "address": "0xFca59Cd816aB1eaD66534D82bc21E7515cE441CF",
        "name": "Rarible",
        "symbol": "RARI",
        "logoURI": "https://tokens.1inch.io/0xfca59cd816ab1ead66534d82bc21e7515ce441cf.png"
    },
    {
        "address": "0x5228a22e72ccC52d415EcFd199F99D0665E7733b",
        "name": "pTokensBTC",
        "symbol": "pBTC",
        "logoURI": "https://tokens.1inch.io/0x5228a22e72ccc52d415ecfd199f99d0665e7733b.png"
    },
    {
        "address": "0xa7DE087329BFcda5639247F96140f9DAbe3DeED1",
        "name": "Statera",
        "symbol": "STA",
        "logoURI": "https://tokens.1inch.io/0xa7de087329bfcda5639247f96140f9dabe3deed1.png"
    },
    {
        "address": "0x0AaCfbeC6a24756c20D41914F2caba817C0d8521",
        "name": "YAM",
        "symbol": "YAM",
        "logoURI": "https://tokens.1inch.io/0x0aacfbec6a24756c20d41914f2caba817c0d8521.png"
    },
    {
        "address": "0xADE00C28244d5CE17D72E40330B1c318cD12B7c3",
        "name": "AdExNetwork",
        "symbol": "ADX",
        "logoURI": "https://tokens.1inch.io/0xade00c28244d5ce17d72e40330b1c318cd12b7c3.png"
    },
    {
        "address": "0xD533a949740bb3306d119CC777fa900bA034cd52",
        "name": "CurveDAOToken",
        "symbol": "CRV",
        "logoURI": "https://tokens.1inch.io/0xd533a949740bb3306d119cc777fa900ba034cd52.png"
    },
    {
        "address": "0x9469D013805bFfB7D3DEBe5E7839237e535ec483",
        "name": "DarwiniaNetworkNativeToken",
        "symbol": "RING",
        "logoURI": "https://tokens.1inch.io/0x9469d013805bffb7d3debe5e7839237e535ec483.png"
    },
    {
        "address": "0x2baEcDf43734F22FD5c152DB08E3C27233F0c7d2",
        "name": "OMToken",
        "symbol": "OMv1",
        "logoURI": "https://tokens.1inch.io/0x2baecdf43734f22fd5c152db08e3c27233f0c7d2.png"
    },
    {
        "address": "0x491604c0FDF08347Dd1fa4Ee062a822A5DD06B5D",
        "name": "CartesiToken",
        "symbol": "CTSI",
        "logoURI": "https://tokens.1inch.io/0x491604c0fdf08347dd1fa4ee062a822a5dd06b5d.png"
    },
    {
        "address": "0x0fF6ffcFDa92c53F615a4A75D982f399C989366b",
        "name": "Unilayer",
        "symbol": "LAYER",
        "logoURI": "https://tokens.1inch.io/0x0ff6ffcfda92c53f615a4a75d982f399c989366b.png"
    },
    {
        "address": "0xaA7a9CA87d3694B5755f213B5D04094b8d0F0A6F",
        "name": "Trace",
        "symbol": "TRAC",
        "logoURI": "https://tokens.1inch.io/0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f.png"
    },
    {
        "address": "0x8A9C67fee641579dEbA04928c4BC45F66e26343A",
        "name": "JarvisRewardToken",
        "symbol": "JRT",
        "logoURI": "https://tokens.1inch.io/0x8a9c67fee641579deba04928c4bc45f66e26343a.png"
    },
    {
        "address": "0x45f24BaEef268BB6d63AEe5129015d69702BCDfa",
        "name": "YFValue",
        "symbol": "YFV",
        "logoURI": "https://tokens.1inch.io/0x45f24baeef268bb6d63aee5129015d69702bcdfa.png"
    },
    {
        "address": "0x674C6Ad92Fd080e4004b2312b45f796a192D27a0",
        "name": "Neutrino",
        "symbol": "USDN",
        "logoURI": "https://tokens.1inch.io/0x674c6ad92fd080e4004b2312b45f796a192d27a0.png"
    },
    {
        "address": "0x362bc847A3a9637d3af6624EeC853618a43ed7D2",
        "name": "ParsiqToken",
        "symbol": "PRQ",
        "logoURI": "https://tokens.1inch.io/0x362bc847a3a9637d3af6624eec853618a43ed7d2.png"
    },
    {
        "address": "0x0E29e5AbbB5FD88e28b2d355774e73BD47dE3bcd",
        "name": "HakkaFinance",
        "symbol": "HAKKA",
        "logoURI": "https://tokens.1inch.io/0x0e29e5abbb5fd88e28b2d355774e73bd47de3bcd.png"
    },
    {
        "address": "0x08AD83D779BDf2BBE1ad9cc0f78aa0D24AB97802",
        "name": "RobonomicsWebServicesV1",
        "symbol": "RWS",
        "logoURI": "https://tokens.1inch.io/0x08ad83d779bdf2bbe1ad9cc0f78aa0d24ab97802.png"
    },
    {
        "address": "0x38e4adB44ef08F22F5B5b76A8f0c2d0dCbE7DcA1",
        "name": "ConcentratedVotingPower",
        "symbol": "CVP",
        "logoURI": "https://tokens.1inch.io/0x38e4adb44ef08f22f5b5b76a8f0c2d0dcbe7dca1.png"
    },
    {
        "address": "0x4FE5851C9af07df9e5AD8217aFAE1ea72737Ebda",
        "name": "OpenPredictToken",
        "symbol": "OPT",
        "logoURI": "https://tokens.1inch.io/0x4fe5851c9af07df9e5ad8217afae1ea72737ebda.png"
    },
    {
        "address": "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2",
        "name": "SushiToken",
        "symbol": "SUSHI",
        "logoURI": "https://tokens.1inch.io/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2.png"
    },
    {
        "address": "0x3aFfCCa64c2A6f4e3B6Bd9c64CD2C969EFd1ECBe",
        "name": "DSLA",
        "symbol": "DSLA",
        "logoURI": "https://tokens.1inch.io/0x3affcca64c2a6f4e3b6bd9c64cd2c969efd1ecbe.png"
    },
    {
        "address": "0xBa21Ef4c9f433Ede00badEFcC2754B8E74bd538A",
        "name": "Swapfolio",
        "symbol": "SWFL",
        "logoURI": "https://tokens.1inch.io/0xba21ef4c9f433ede00badefcc2754b8e74bd538a.png"
    },
    {
        "address": "0xfffffffFf15AbF397dA76f1dcc1A1604F45126DB",
        "name": "FalconSwapToken",
        "symbol": "FSW",
        "logoURI": "https://tokens.1inch.io/0xfffffffff15abf397da76f1dcc1a1604f45126db.png"
    },
    {
        "address": "0xB8BAa0e4287890a5F79863aB62b7F175ceCbD433",
        "name": "SwerveDAOToken",
        "symbol": "SWRV",
        "logoURI": "https://tokens.1inch.io/0xb8baa0e4287890a5f79863ab62b7f175cecbd433.png"
    },
    {
        "address": "0x5dbcF33D8c2E976c6b560249878e6F1491Bca25c",
        "name": "yearnCurve.fiyDAIyUSDCyUSDTyTUSD",
        "symbol": "yUSD",
        "logoURI": "https://tokens.1inch.io/0x5dbcf33d8c2e976c6b560249878e6f1491bca25c.png"
    },
    {
        "address": "0x556148562d5DdeB72545D7EC4B3eC8edc8F55Ba7",
        "name": "PredixNetwork",
        "symbol": "PRDX",
        "logoURI": "https://tokens.1inch.io/0x556148562d5ddeb72545d7ec4b3ec8edc8f55ba7.png"
    },
    {
        "address": "0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b",
        "name": "DefiPulseIndex",
        "symbol": "DPI",
        "logoURI": "https://tokens.1inch.io/0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b.png"
    },
    {
        "address": "0x3F382DbD960E3a9bbCeaE22651E88158d2791550",
        "name": "AavegotchiGHSTToken",
        "symbol": "GHST",
        "logoURI": "https://tokens.1inch.io/0x3f382dbd960e3a9bbceae22651e88158d2791550.png"
    },
    {
        "address": "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
        "name": "Uniswap",
        "symbol": "UNI",
        "logoURI": "https://tokens.1inch.io/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png"
    },
    {
        "address": "0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5",
        "name": "PickleToken",
        "symbol": "PICKLE",
        "logoURI": "https://tokens.1inch.io/0x429881672b9ae42b8eba0e26cd9c73711b891ca5.png"
    },
    {
        "address": "0xf8C3527CC04340b208C854E985240c02F7B7793f",
        "name": "FrontierToken",
        "symbol": "FRONT",
        "logoURI": "https://tokens.1inch.io/0xf8c3527cc04340b208c854e985240c02f7b7793f.png"
    },
    {
        "address": "0xca1207647Ff814039530D7d35df0e1Dd2e91Fa84",
        "name": "dHedgeDAOToken",
        "symbol": "DHT",
        "logoURI": "https://tokens.1inch.io/0xca1207647ff814039530d7d35df0e1dd2e91fa84.png"
    },
    {
        "address": "0xa0246c9032bC3A600820415aE600c6388619A14D",
        "name": "FARMRewardToken",
        "symbol": "FARM",
        "logoURI": "https://tokens.1inch.io/0xa0246c9032bc3a600820415ae600c6388619a14d.png"
    },
    {
        "address": "0x488E0369f9BC5C40C002eA7c1fe4fd01A198801c",
        "name": "Golff.finance",
        "symbol": "GOF",
        "logoURI": "https://tokens.1inch.io/0x488e0369f9bc5c40c002ea7c1fe4fd01a198801c.png"
    },
    {
        "address": "0x2A8e1E676Ec238d8A992307B495b45B3fEAa5e86",
        "name": "OriginDollar",
        "symbol": "OUSD",
        "logoURI": "https://tokens.1inch.io/0x2a8e1e676ec238d8a992307b495b45b3feaa5e86.png"
    },
    {
        "address": "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
        "name": "AaveToken",
        "symbol": "AAVE",
        "logoURI": "https://tokens.1inch.io/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9.png"
    },
    {
        "address": "0x43Dfc4159D86F3A37A5A4B3D4580b888ad7d4DDd",
        "name": "DODObird",
        "symbol": "DODO",
        "logoURI": "https://tokens.1inch.io/0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd.png"
    },
    {
        "address": "0x6006FC2a849fEdABa8330ce36F5133DE01F96189",
        "name": "SHAKEtokenbySpaceSwapv2",
        "symbol": "SHAKE",
        "logoURI": "https://tokens.1inch.io/0x6006fc2a849fedaba8330ce36f5133de01f96189.png"
    },
    {
        "address": "0x80c8C3dCfB854f9542567c8Dac3f44D709eBc1de",
        "name": "MilkyWayTokenbySpaceSwapv2",
        "symbol": "MILK2",
        "logoURI": "https://tokens.1inch.io/0x80c8c3dcfb854f9542567c8dac3f44d709ebc1de.png"
    },
    {
        "address": "0x62359Ed7505Efc61FF1D56fEF82158CcaffA23D7",
        "name": "cVault.finance",
        "symbol": "CORE",
        "logoURI": "https://tokens.1inch.io/0x62359ed7505efc61ff1d56fef82158ccaffa23d7.png"
    },
    {
        "address": "0xbC396689893D065F41bc2C6EcbeE5e0085233447",
        "name": "Perpetual",
        "symbol": "PERP",
        "logoURI": "https://tokens.1inch.io/0xbc396689893d065f41bc2c6ecbee5e0085233447.png"
    },
    {
        "address": "0x1c48f86ae57291F7686349F12601910BD8D470bb",
        "name": "USDK",
        "symbol": "USDK",
        "logoURI": "https://tokens.1inch.io/0x1c48f86ae57291f7686349f12601910bd8d470bb.png"
    },
    {
        "address": "0x87eDfFDe3E14c7a66c9b9724747a1C5696b742e6",
        "name": "SwagToken",
        "symbol": "SWAG",
        "logoURI": "https://tokens.1inch.io/0x87edffde3e14c7a66c9b9724747a1c5696b742e6.png"
    },
    {
        "address": "0xaD6A626aE2B43DCb1B39430Ce496d2FA0365BA9C",
        "name": "PieDAODEFISmallCap",
        "symbol": "DEFIS",
        "logoURI": "https://tokens.1inch.io/0xad6a626ae2b43dcb1b39430ce496d2fa0365ba9c.png"
    },
    {
        "address": "0xad32A8e6220741182940c5aBF610bDE99E737b2D",
        "name": "PieDAODOUGHv2",
        "symbol": "DOUGH",
        "logoURI": "https://tokens.1inch.io/0xad32a8e6220741182940c5abf610bde99e737b2d.png"
    },
    {
        "address": "0xe2f2a5C287993345a840Db3B0845fbC70f5935a5",
        "name": "mStableUSD",
        "symbol": "mUSD",
        "logoURI": "https://tokens.1inch.io/0xe2f2a5c287993345a840db3b0845fbc70f5935a5.png"
    },
    {
        "address": "0x2eDf094dB69d6Dcd487f1B3dB9febE2eeC0dd4c5",
        "name": "ZeroSwapToken",
        "symbol": "ZEE",
        "logoURI": "https://tokens.1inch.io/0x2edf094db69d6dcd487f1b3db9febe2eec0dd4c5.png"
    },
    {
        "address": "0x584bC13c7D411c00c01A62e8019472dE68768430",
        "name": "Hegic",
        "symbol": "HEGIC",
        "logoURI": "https://tokens.1inch.io/0x584bc13c7d411c00c01a62e8019472de68768430.png"
    },
    {
        "address": "0x054f76beED60AB6dBEb23502178C52d6C5dEbE40",
        "name": "DeFiner",
        "symbol": "FIN",
        "logoURI": "https://tokens.1inch.io/0x054f76beed60ab6dbeb23502178c52d6c5debe40.png"
    },
    {
        "address": "0xcbd55D4fFc43467142761A764763652b48b969ff",
        "name": "AstroTools.io",
        "symbol": "ASTRO",
        "logoURI": "https://tokens.1inch.io/0xcbd55d4ffc43467142761a764763652b48b969ff.png"
    },
    {
        "address": "0xfF20817765cB7f73d4bde2e66e067E58D11095C2",
        "name": "Amp",
        "symbol": "AMP",
        "logoURI": "https://tokens.1inch.io/0xff20817765cb7f73d4bde2e66e067e58d11095c2.png"
    },
    {
        "address": "0x0391D2021f89DC339F60Fff84546EA23E337750f",
        "name": "BarnBridgeGovernanceToken",
        "symbol": "BOND",
        "logoURI": "https://tokens.1inch.io/0x0391d2021f89dc339f60fff84546ea23e337750f.png"
    },
    {
        "address": "0xa117000000f279D81A1D3cc75430fAA017FA5A2e",
        "name": "AragonNetworkToken",
        "symbol": "ANT",
        "logoURI": "https://tokens.1inch.io/0xa117000000f279d81a1d3cc75430faa017fa5a2e.png"
    },
    {
        "address": "0x970B9bB2C0444F5E81e9d0eFb84C8ccdcdcAf84d",
        "name": "FuseToken",
        "symbol": "FUSE",
        "logoURI": "https://tokens.1inch.io/0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d.png"
    },
    {
        "address": "0x36F3FD68E7325a35EB768F1AedaAe9EA0689d723",
        "name": "EmptySetDollar",
        "symbol": "ESD",
        "logoURI": "https://tokens.1inch.io/0x36f3fd68e7325a35eb768f1aedaae9ea0689d723.png"
    },
    {
        "address": "0x1cEB5cB57C4D4E2b2433641b95Dd330A33185A44",
        "name": "Keep3rV1",
        "symbol": "KP3R",
        "logoURI": "https://tokens.1inch.io/0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44.png"
    },
    {
        "address": "0x5BC25f649fc4e26069dDF4cF4010F9f706c23831",
        "name": "DefiDollar",
        "symbol": "DUSD",
        "logoURI": "https://tokens.1inch.io/0x5bc25f649fc4e26069ddf4cf4010f9f706c23831.png"
    },
    {
        "address": "0xB705268213D593B8FD88d3FDEFF93AFF5CbDcfAE",
        "name": "IDEXToken",
        "symbol": "IDEX",
        "logoURI": "https://tokens.1inch.io/0xb705268213d593b8fd88d3fdeff93aff5cbdcfae.png"
    },
    {
        "address": "0x2e2364966267B5D7D2cE6CD9A9B5bD19d9C7C6A9",
        "name": "VoiceToken",
        "symbol": "VOICE",
        "logoURI": "https://tokens.1inch.io/0x2e2364966267b5d7d2ce6cd9a9b5bd19d9c7c6a9.png"
    },
    {
        "address": "0xEEF9f339514298C6A857EfCfC1A762aF84438dEE",
        "name": "HermezNetworkToken",
        "symbol": "HEZ",
        "logoURI": "https://tokens.1inch.io/0xeef9f339514298c6a857efcfc1a762af84438dee.png"
    },
    {
        "address": "0xEa319e87Cf06203DAe107Dd8E5672175e3Ee976c",
        "name": "SURF.Finance",
        "symbol": "SURF",
        "logoURI": "https://tokens.1inch.io/0xea319e87cf06203dae107dd8e5672175e3ee976c.png"
    },
    {
        "address": "0x3383c5a8969Dc413bfdDc9656Eb80A1408E4bA20",
        "name": "WrappedANATHA",
        "symbol": "wANATHA",
        "logoURI": "https://tokens.1inch.io/0x3383c5a8969dc413bfddc9656eb80a1408e4ba20.png"
    },
    {
        "address": "0x18aAA7115705e8be94bfFEBDE57Af9BFc265B998",
        "name": "Audius",
        "symbol": "AUDIO",
        "logoURI": "https://tokens.1inch.io/0x18aaa7115705e8be94bffebde57af9bfc265b998.png"
    },
    {
        "address": "0xa665FED1b0C9dA00e91ca582f77dF36E325048c5",
        "name": "yfarm.finance",
        "symbol": "YFM",
        "logoURI": "https://tokens.1inch.io/0xa665fed1b0c9da00e91ca582f77df36e325048c5.png"
    },
    {
        "address": "0x0954906da0Bf32d5479e25f46056d22f08464cab",
        "name": "Index",
        "symbol": "INDEX",
        "logoURI": "https://tokens.1inch.io/0x0954906da0bf32d5479e25f46056d22f08464cab.png"
    },
    {
        "address": "0xC57d533c50bC22247d49a368880fb49a1caA39F7",
        "name": "PowerTradeFuelToken",
        "symbol": "PTF",
        "logoURI": "https://tokens.1inch.io/0xc57d533c50bc22247d49a368880fb49a1caa39f7.png"
    },
    {
        "address": "0x20c36f062a31865bED8a5B1e512D9a1A20AA333A",
        "name": "DefiDollarDAO",
        "symbol": "DFD",
        "logoURI": "https://tokens.1inch.io/0x20c36f062a31865bed8a5b1e512d9a1a20aa333a.png"
    },
    {
        "address": "0x95a4492F028aa1fd432Ea71146b433E7B4446611",
        "name": "APYGovernanceToken",
        "symbol": "APY",
        "logoURI": "https://tokens.1inch.io/0x95a4492f028aa1fd432ea71146b433e7b4446611.png"
    },
    {
        "address": "0xbEa98c05eEAe2f3bC8c3565Db7551Eb738c8CCAb",
        "name": "Geyser",
        "symbol": "GYSR",
        "logoURI": "https://tokens.1inch.io/0xbea98c05eeae2f3bc8c3565db7551eb738c8ccab.png"
    },
    {
        "address": "0xA89ac6e529aCf391CfbBD377F3aC9D93eae9664e",
        "name": "Keep4r",
        "symbol": "KP4R",
        "logoURI": "https://tokens.1inch.io/0xa89ac6e529acf391cfbbd377f3ac9d93eae9664e.png"
    },
    {
        "address": "0xBB0E17EF65F82Ab018d8EDd776e8DD940327B28b",
        "name": "AxieInfinityShard",
        "symbol": "AXS",
        "logoURI": "https://tokens.1inch.io/0xbb0e17ef65f82ab018d8edd776e8dd940327b28b.png"
    },
    {
        "address": "0x00a8b738E453fFd858a7edf03bcCfe20412f0Eb0",
        "name": "AllianceBlockToken",
        "symbol": "ALBT",
        "logoURI": "https://tokens.1inch.io/0x00a8b738e453ffd858a7edf03bccfe20412f0eb0.png"
    },
    {
        "address": "0x05D3606d5c81EB9b7B18530995eC9B29da05FaBa",
        "name": "TomoChain",
        "symbol": "TOMOE",
        "logoURI": "https://tokens.1inch.io/0x05d3606d5c81eb9b7b18530995ec9b29da05faba.png"
    },
    {
        "address": "0xB1f66997A5760428D3a87D68b90BfE0aE64121cC",
        "name": "LuaToken",
        "symbol": "LUA",
        "logoURI": "https://tokens.1inch.io/0xb1f66997a5760428d3a87d68b90bfe0ae64121cc.png"
    },
    {
        "address": "0xf4CD3d3Fda8d7Fd6C5a500203e38640A70Bf9577",
        "name": "YfDAI.finance",
        "symbol": "YfDAI",
        "logoURI": "https://tokens.1inch.io/0xf4cd3d3fda8d7fd6c5a500203e38640a70bf9577.png"
    },
    {
        "address": "0x83e6f1E41cdd28eAcEB20Cb649155049Fac3D5Aa",
        "name": "PolkastarterToken",
        "symbol": "POLS",
        "logoURI": "https://tokens.1inch.io/0x83e6f1e41cdd28eaceb20cb649155049fac3d5aa.png"
    },
    {
        "address": "0xaf9f549774ecEDbD0966C52f250aCc548D3F36E5",
        "name": "RioFuelToken",
        "symbol": "RFuel",
        "logoURI": "https://tokens.1inch.io/0xaf9f549774ecedbd0966c52f250acc548d3f36e5.png"
    },
    {
        "address": "0x0202Be363B8a4820f3F4DE7FaF5224fF05943AB1",
        "name": "UniLendFinanceToken",
        "symbol": "UFT",
        "logoURI": "https://tokens.1inch.io/0x0202be363b8a4820f3f4de7faf5224ff05943ab1.png"
    },
    {
        "address": "0xaE697F994Fc5eBC000F8e22EbFfeE04612f98A0d",
        "name": "LGCYNetwork",
        "symbol": "LGCY",
        "logoURI": "https://tokens.1inch.io/0xae697f994fc5ebc000f8e22ebffee04612f98a0d.png"
    },
    {
        "address": "0x9D47894f8BECB68B9cF3428d256311Affe8B068B",
        "name": "ROPE",
        "symbol": "ROPE",
        "logoURI": "https://tokens.1inch.io/0x9d47894f8becb68b9cf3428d256311affe8b068b.png"
    },
    {
        "address": "0x72F020f8f3E8fd9382705723Cd26380f8D0c66Bb",
        "name": "PLOT",
        "symbol": "PLOT",
        "logoURI": "https://tokens.1inch.io/0x72f020f8f3e8fd9382705723cd26380f8d0c66bb.png"
    },
    {
        "address": "0x6A7Ef4998eB9d0f706238756949F311a59E05745",
        "name": "KenysiansNetwork",
        "symbol": "KEN",
        "logoURI": "https://tokens.1inch.io/0x6a7ef4998eb9d0f706238756949f311a59e05745.png"
    },
    {
        "address": "0x20945cA1df56D237fD40036d47E866C7DcCD2114",
        "name": "NsureNetworkToken",
        "symbol": "Nsure",
        "logoURI": "https://tokens.1inch.io/0x20945ca1df56d237fd40036d47e866c7dccd2114.png"
    },
    {
        "address": "0x12e51E77DAAA58aA0E9247db7510Ea4B46F9bEAd",
        "name": "AaveInterestbearingYFI",
        "symbol": "aYFIv1",
        "logoURI": "https://tokens.1inch.io/0x12e51e77daaa58aa0e9247db7510ea4b46f9bead.png"
    },
    {
        "address": "0xba3D9687Cf50fE253cd2e1cFeEdE1d6787344Ed5",
        "name": "AaveInterestbearingAaveToken",
        "symbol": "aAAVEv1",
        "logoURI": "https://tokens.1inch.io/0xba3d9687cf50fe253cd2e1cfeede1d6787344ed5.png"
    },
    {
        "address": "0xB124541127A0A657f056D9Dd06188c4F1b0e5aab",
        "name": "AaveInterestbearingUniswap",
        "symbol": "aUNIv1",
        "logoURI": "https://tokens.1inch.io/0xb124541127a0a657f056d9dd06188c4f1b0e5aab.png"
    },
    {
        "address": "0x712DB54daA836B53Ef1EcBb9c6ba3b9Efb073F40",
        "name": "AaveInterestbearingENJ",
        "symbol": "aENJv1",
        "logoURI": "https://tokens.1inch.io/0x712db54daa836b53ef1ecbb9c6ba3b9efb073f40.png"
    },
    {
        "address": "0xb753428af26E81097e7fD17f40c88aaA3E04902c",
        "name": "Spice",
        "symbol": "SFI",
        "logoURI": "https://tokens.1inch.io/0xb753428af26e81097e7fd17f40c88aaa3e04902c.png"
    },
    {
        "address": "0x8888801aF4d980682e47f1A9036e589479e835C5",
        "name": "88mph.app",
        "symbol": "MPH",
        "logoURI": "https://tokens.1inch.io/0x8888801af4d980682e47f1a9036e589479e835c5.png"
    },
    {
        "address": "0x5D8d9F5b96f4438195BE9b99eee6118Ed4304286",
        "name": "CoverProtocol",
        "symbol": "COVERv1",
        "logoURI": "https://tokens.1inch.io/0x5d8d9f5b96f4438195be9b99eee6118ed4304286.png"
    },
    {
        "address": "0xc3Eb2622190c57429aac3901808994443b64B466",
        "name": "OROToken",
        "symbol": "ORO",
        "logoURI": "https://tokens.1inch.io/0xc3eb2622190c57429aac3901808994443b64b466.png"
    },
    {
        "address": "0x6468e79A80C0eaB0F9A2B574c8d5bC374Af59414",
        "name": "E-RADIX",
        "symbol": "eXRD",
        "logoURI": "https://tokens.1inch.io/0x6468e79a80c0eab0f9a2b574c8d5bc374af59414.png"
    },
    {
        "address": "0x3e780920601D61cEdb860fe9c4a90c9EA6A35E78",
        "name": "BoostedFinance",
        "symbol": "BOOST",
        "logoURI": "https://tokens.1inch.io/0x3e780920601d61cedb860fe9c4a90c9ea6a35e78.png"
    },
    {
        "address": "0x431ad2ff6a9C365805eBaD47Ee021148d6f7DBe0",
        "name": "dForce",
        "symbol": "DF",
        "logoURI": "https://tokens.1inch.io/0x431ad2ff6a9c365805ebad47ee021148d6f7dbe0.png"
    },
    {
        "address": "0x4fE83213D56308330EC302a8BD641f1d0113A4Cc",
        "name": "NuCypher",
        "symbol": "NU",
        "logoURI": "https://tokens.1inch.io/0x4fe83213d56308330ec302a8bd641f1d0113a4cc.png"
    },
    {
        "address": "0x6e0daDE58D2d89eBBe7aFc384e3E4f15b70b14D8",
        "name": "QuiverX",
        "symbol": "QRX",
        "logoURI": "https://tokens.1inch.io/0x6e0dade58d2d89ebbe7afc384e3e4f15b70b14d8.png"
    },
    {
        "address": "0x05079687D35b93538cbd59fe5596380cae9054A9",
        "name": "BitSong",
        "symbol": "BTSG",
        "logoURI": "https://tokens.1inch.io/0x05079687d35b93538cbd59fe5596380cae9054a9.png"
    },
    {
        "address": "0x69948cC03f478B95283F7dbf1CE764d0fc7EC54C",
        "name": "AaveInterestbearingREN",
        "symbol": "aRENv1",
        "logoURI": "https://tokens.1inch.io/0x69948cc03f478b95283f7dbf1ce764d0fc7ec54c.png"
    },
    {
        "address": "0xe88f8313e61A97cEc1871EE37fBbe2a8bf3ed1E4",
        "name": "SoraValidatorToken",
        "symbol": "VAL",
        "logoURI": "https://tokens.1inch.io/0xe88f8313e61a97cec1871ee37fbbe2a8bf3ed1e4.png"
    },
    {
        "address": "0x0b38210ea11411557c13457D4dA7dC6ea731B88a",
        "name": "API3",
        "symbol": "API3",
        "logoURI": "https://tokens.1inch.io/0x0b38210ea11411557c13457d4da7dc6ea731b88a.png"
    },
    {
        "address": "0x3449FC1Cd036255BA1EB19d65fF4BA2b8903A69a",
        "name": "BAC",
        "symbol": "BAC",
        "logoURI": "https://tokens.1inch.io/0x3449fc1cd036255ba1eb19d65ff4ba2b8903a69a.png"
    },
    {
        "address": "0x26607aC599266b21d13c7aCF7942c7701a8b699c",
        "name": "PowerIndexPoolToken",
        "symbol": "PIPT",
        "logoURI": "https://tokens.1inch.io/0x26607ac599266b21d13c7acf7942c7701a8b699c.png"
    },
    {
        "address": "0x3218A02F8F8B5c3894ce30EB255F10Bcba13E654",
        "name": "MegaCryptoPolisMEGATokenMEGA",
        "symbol": "MEGA",
        "logoURI": "https://tokens.1inch.io/0x3218a02f8f8b5c3894ce30eb255f10bcba13e654.png"
    },
    {
        "address": "0x91dFbEE3965baAEE32784c2d546B7a0C62F268c9",
        "name": "Bondly",
        "symbol": "BONDLY",
        "logoURI": "https://tokens.1inch.io/0x91dfbee3965baaee32784c2d546b7a0c62f268c9.png"
    },
    {
        "address": "0xB62132e35a6c13ee1EE0f84dC5d40bad8d815206",
        "name": "Nexo",
        "symbol": "NEXO",
        "logoURI": "https://tokens.1inch.io/0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206.png"
    },
    {
        "address": "0xFFC97d72E13E01096502Cb8Eb52dEe56f74DAD7B",
        "name": "AaveinterestbearingAAVE",
        "symbol": "aAAVE",
        "logoURI": "https://tokens.1inch.io/0xffc97d72e13e01096502cb8eb52dee56f74dad7b.png"
    },
    {
        "address": "0x05Ec93c0365baAeAbF7AefFb0972ea7ECdD39CF1",
        "name": "AaveinterestbearingBAT",
        "symbol": "aBAT",
        "logoURI": "https://tokens.1inch.io/0x05ec93c0365baaeabf7aeffb0972ea7ecdd39cf1.png"
    },
    {
        "address": "0xA361718326c15715591c299427c62086F69923D9",
        "name": "AaveinterestbearingBUSD",
        "symbol": "aBUSD",
        "logoURI": "https://tokens.1inch.io/0xa361718326c15715591c299427c62086f69923d9.png"
    },
    {
        "address": "0x028171bCA77440897B824Ca71D1c56caC55b68A3",
        "name": "AaveinterestbearingDAI",
        "symbol": "aDAI",
        "logoURI": "https://tokens.1inch.io/0x028171bca77440897b824ca71d1c56cac55b68a3.png"
    },
    {
        "address": "0xaC6Df26a590F08dcC95D5a4705ae8abbc88509Ef",
        "name": "AaveinterestbearingENJ",
        "symbol": "aENJ",
        "logoURI": "https://tokens.1inch.io/0xac6df26a590f08dcc95d5a4705ae8abbc88509ef.png"
    },
    {
        "address": "0x39C6b3e42d6A679d7D776778Fe880BC9487C2EDA",
        "name": "AaveinterestbearingKNC",
        "symbol": "aKNC",
        "logoURI": "https://tokens.1inch.io/0x39c6b3e42d6a679d7d776778fe880bc9487c2eda.png"
    },
    {
        "address": "0xa06bC25B5805d5F8d82847D191Cb4Af5A3e873E0",
        "name": "AaveinterestbearingLINK",
        "symbol": "aLINK",
        "logoURI": "https://tokens.1inch.io/0xa06bc25b5805d5f8d82847d191cb4af5a3e873e0.png"
    },
    {
        "address": "0xa685a61171bb30d4072B338c80Cb7b2c865c873E",
        "name": "AaveinterestbearingMANA",
        "symbol": "aMANA",
        "logoURI": "https://tokens.1inch.io/0xa685a61171bb30d4072b338c80cb7b2c865c873e.png"
    },
    {
        "address": "0xc713e5E149D5D0715DcD1c156a020976e7E56B88",
        "name": "AaveinterestbearingMKR",
        "symbol": "aMKR",
        "logoURI": "https://tokens.1inch.io/0xc713e5e149d5d0715dcd1c156a020976e7e56b88.png"
    },
    {
        "address": "0xCC12AbE4ff81c9378D670De1b57F8e0Dd228D77a",
        "name": "AaveInterestbearingREN",
        "symbol": "aREN",
        "logoURI": "https://tokens.1inch.io/0xcc12abe4ff81c9378d670de1b57f8e0dd228d77a.png"
    },
    {
        "address": "0x35f6B052C598d933D69A4EEC4D04c73A191fE6c2",
        "name": "AaveinterestbearingSNX",
        "symbol": "aSNX",
        "logoURI": "https://tokens.1inch.io/0x35f6b052c598d933d69a4eec4d04c73a191fe6c2.png"
    },
    {
        "address": "0x6C5024Cd4F8A59110119C56f8933403A539555EB",
        "name": "AaveinterestbearingSUSD",
        "symbol": "aSUSD",
        "logoURI": "https://tokens.1inch.io/0x6c5024cd4f8a59110119c56f8933403a539555eb.png"
    },
    {
        "address": "0x101cc05f4A51C0319f570d5E146a8C625198e636",
        "name": "AaveinterestbearingTUSD",
        "symbol": "aTUSD",
        "logoURI": "https://tokens.1inch.io/0x101cc05f4a51c0319f570d5e146a8c625198e636.png"
    },
    {
        "address": "0xB9D7CB55f463405CDfBe4E90a6D2Df01C2B92BF1",
        "name": "AaveinterestbearingUNI",
        "symbol": "aUNI",
        "logoURI": "https://tokens.1inch.io/0xb9d7cb55f463405cdfbe4e90a6d2df01c2b92bf1.png"
    },
    {
        "address": "0x030bA81f1c18d280636F32af80b9AAd02Cf0854e",
        "name": "AaveinterestbearingWETH",
        "symbol": "aWETH",
        "logoURI": "https://tokens.1inch.io/0x030ba81f1c18d280636f32af80b9aad02cf0854e.png"
    },
    {
        "address": "0x5165d24277cD063F5ac44Efd447B27025e888f37",
        "name": "AaveinterestbearingYFI",
        "symbol": "aYFI",
        "logoURI": "https://tokens.1inch.io/0x5165d24277cd063f5ac44efd447b27025e888f37.png"
    },
    {
        "address": "0xDf7FF54aAcAcbFf42dfe29DD6144A69b629f8C9e",
        "name": "AaveinterestbearingZRX",
        "symbol": "aZRX",
        "logoURI": "https://tokens.1inch.io/0xdf7ff54aacacbff42dfe29dd6144a69b629f8c9e.png"
    },
    {
        "address": "0xdc9Ac3C20D1ed0B540dF9b1feDC10039Df13F99c",
        "name": "UtrustToken",
        "symbol": "UTK",
        "logoURI": "https://tokens.1inch.io/0xdc9ac3c20d1ed0b540df9b1fedc10039df13f99c.png"
    },
    {
        "address": "0x3472A5A71965499acd81997a54BBA8D852C6E53d",
        "name": "Badger",
        "symbol": "BADGER",
        "logoURI": "https://tokens.1inch.io/0x3472a5a71965499acd81997a54bba8d852c6e53d.png"
    },
    {
        "address": "0xc944E90C64B2c07662A292be6244BDf05Cda44a7",
        "name": "GraphToken",
        "symbol": "GRT",
        "logoURI": "https://tokens.1inch.io/0xc944e90c64b2c07662a292be6244bdf05cda44a7.png"
    },
    {
        "address": "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32",
        "name": "LidoDAOToken",
        "symbol": "LDO",
        "logoURI": "https://tokens.1inch.io/0x5a98fcbea516cf06857215779fd812ca3bef1b32.png"
    },
    {
        "address": "0x77777FeDdddFfC19Ff86DB637967013e6C6A116C",
        "name": "TornadoCash",
        "symbol": "TORN",
        "logoURI": "https://tokens.1inch.io/0x77777feddddffc19ff86db637967013e6c6a116c.png"
    },
    {
        "address": "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
        "name": "stETH",
        "symbol": "stETH",
        "logoURI": "https://tokens.1inch.io/0xae7ab96520de3a18e5e111b5eaab095312d7fe84.png"
    },
    {
        "address": "0xB4d930279552397bbA2ee473229f89Ec245bc365",
        "name": "MahaDAO",
        "symbol": "MAHA",
        "logoURI": "https://tokens.1inch.io/0xb4d930279552397bba2ee473229f89ec245bc365.png"
    },
    {
        "address": "0x57B946008913B82E4dF85f501cbAeD910e58D26C",
        "name": "MarlinPOND",
        "symbol": "POND",
        "logoURI": "https://tokens.1inch.io/0x57b946008913b82e4df85f501cbaed910e58d26c.png"
    },
    {
        "address": "0x3593D125a4f7849a1B059E64F4517A86Dd60c95d",
        "name": "MANTRADAO",
        "symbol": "OMv2",
        "logoURI": "https://tokens.1inch.io/0x3593d125a4f7849a1b059e64f4517a86dd60c95d.png"
    },
    {
        "address": "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
        "name": "FraxShare",
        "symbol": "FXS",
        "logoURI": "https://tokens.1inch.io/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0.png"
    },
    {
        "address": "0x1fDaB294EDA5112B7d066ED8F2E4E562D5bCc664",
        "name": "Spice",
        "symbol": "SPICE",
        "logoURI": "https://tokens.1inch.io/0x1fdab294eda5112b7d066ed8f2e4e562d5bcc664.png"
    },
    {
        "address": "0x111111111117dC0aa78b770fA6A738034120C302",
        "name": "1INCHToken",
        "symbol": "1INCH",
        "logoURI": "https://tokens.1inch.io/0x111111111117dc0aa78b770fa6a738034120c302.png"
    },
    {
        "address": "0x054D64b73d3D8A21Af3D764eFd76bCaA774f3Bb2",
        "name": "Plasma",
        "symbol": "PPAY",
        "logoURI": "https://tokens.1inch.io/0x054d64b73d3d8a21af3d764efd76bcaa774f3bb2.png"
    },
    {
        "address": "0x368B3a58B5f49392e5C9E4C998cb0bB966752E51",
        "name": "MIC",
        "symbol": "MIC",
        "logoURI": "https://tokens.1inch.io/0x368b3a58b5f49392e5c9e4c998cb0bb966752e51.png"
    },
    {
        "address": "0x4b4D2e899658FB59b1D518b68fe836B100ee8958",
        "name": "MIS",
        "symbol": "MIS",
        "logoURI": "https://tokens.1inch.io/0x4b4d2e899658fb59b1d518b68fe836b100ee8958.png"
    },
    {
        "address": "0xee573a945B01B788B9287CE062A0CFC15bE9fd86",
        "name": "Exeedme",
        "symbol": "XED",
        "logoURI": "https://tokens.1inch.io/0xee573a945b01b788b9287ce062a0cfc15be9fd86.png"
    },
    {
        "address": "0x34950Ff2b487d9E5282c5aB342d08A2f712eb79F",
        "name": "EFFORCEIEO",
        "symbol": "WOZX",
        "logoURI": "https://tokens.1inch.io/0x34950ff2b487d9e5282c5ab342d08a2f712eb79f.png"
    },
    {
        "address": "0xBD2F0Cd039E0BFcf88901C98c0bFAc5ab27566e3",
        "name": "DynamicSetDollar",
        "symbol": "DSD",
        "logoURI": "https://tokens.1inch.io/0xbd2f0cd039e0bfcf88901c98c0bfac5ab27566e3.png"
    },
    {
        "address": "0xc770EEfAd204B5180dF6a14Ee197D99d808ee52d",
        "name": "FOX",
        "symbol": "FOX",
        "logoURI": "https://tokens.1inch.io/0xc770eefad204b5180df6a14ee197d99d808ee52d.png"
    },
    {
        "address": "0x4688a8b1F292FDaB17E9a90c8Bc379dC1DBd8713",
        "name": "CoverProtocolGovernanceToken",
        "symbol": "COVER",
        "logoURI": "https://tokens.1inch.io/0x4688a8b1f292fdab17e9a90c8bc379dc1dbd8713.png"
    },
    {
        "address": "0x66a0f676479Cee1d7373f3DC2e2952778BfF5bd6",
        "name": "WiseToken",
        "symbol": "WISE",
        "logoURI": "https://tokens.1inch.io/0x66a0f676479cee1d7373f3dc2e2952778bff5bd6.png"
    },
    {
        "address": "0x539F3615C1dBAfa0D008d87504667458acBd16Fa",
        "name": "FERA",
        "symbol": "FERA",
        "logoURI": "https://tokens.1inch.io/0x539f3615c1dbafa0d008d87504667458acbd16fa.png"
    },
    {
        "address": "0xfFffFffF2ba8F66D4e51811C5190992176930278",
        "name": "Furucombo",
        "symbol": "COMBO",
        "logoURI": "https://tokens.1inch.io/0xffffffff2ba8f66d4e51811c5190992176930278.png"
    },
    {
        "address": "0x2B4200A8D373d484993C37d63eE14AeE0096cd12",
        "name": "USDFreeLiquidity",
        "symbol": "USDFL",
        "logoURI": "https://tokens.1inch.io/0x2b4200a8d373d484993c37d63ee14aee0096cd12.png"
    },
    {
        "address": "0xaea46A60368A7bD060eec7DF8CBa43b7EF41Ad85",
        "name": "Fetch",
        "symbol": "FET",
        "logoURI": "https://tokens.1inch.io/0xaea46a60368a7bd060eec7df8cba43b7ef41ad85.png"
    },
    {
        "address": "0x6c5bA91642F10282b576d91922Ae6448C9d52f4E",
        "name": "Phala",
        "symbol": "PHA",
        "logoURI": "https://tokens.1inch.io/0x6c5ba91642f10282b576d91922ae6448c9d52f4e.png"
    },
    {
        "address": "0xA8b12Cc90AbF65191532a12bb5394A714A46d358",
        "name": "POWBTC-35WT",
        "symbol": "pBTC35A",
        "logoURI": "https://tokens.1inch.io/0xa8b12cc90abf65191532a12bb5394a714a46d358.png"
    },
    {
        "address": "0x853d955aCEf822Db058eb8505911ED77F175b99e",
        "name": "Frax",
        "symbol": "FRAX",
        "logoURI": "https://tokens.1inch.io/0x853d955acef822db058eb8505911ed77f175b99e.png"
    },
    {
        "address": "0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30",
        "name": "InjectiveToken",
        "symbol": "INJ",
        "logoURI": "https://tokens.1inch.io/0xe28b3b32b6c345a34ff64674606124dd5aceca30.png"
    },
    {
        "address": "0xF94b5C5651c888d928439aB6514B93944eEE6F48",
        "name": "Yield",
        "symbol": "YLDAPP",
        "logoURI": "https://tokens.1inch.io/0xf94b5c5651c888d928439ab6514b93944eee6f48.png"
    },
    {
        "address": "0x63b4f3e3fa4e438698CE330e365E831F7cCD1eF4",
        "name": "CyberFiToken",
        "symbol": "CFi",
        "logoURI": "https://tokens.1inch.io/0x63b4f3e3fa4e438698ce330e365e831f7ccd1ef4.png"
    },
    {
        "address": "0xD291E7a03283640FDc51b121aC401383A46cC623",
        "name": "RariGovernanceToken",
        "symbol": "RGT",
        "logoURI": "https://tokens.1inch.io/0xd291e7a03283640fdc51b121ac401383a46cc623.png"
    },
    {
        "address": "0xfA5047c9c78B8877af97BDcb85Db743fD7313d4a",
        "name": "ROOK",
        "symbol": "ROOK",
        "logoURI": "https://tokens.1inch.io/0xfa5047c9c78b8877af97bdcb85db743fd7313d4a.png"
    },
    {
        "address": "0x87d73E916D7057945c9BcD8cdd94e42A6F47f776",
        "name": "NFTX",
        "symbol": "NFTX",
        "logoURI": "https://tokens.1inch.io/0x87d73e916d7057945c9bcd8cdd94e42a6f47f776.png"
    },
    {
        "address": "0xA4EED63db85311E22dF4473f87CcfC3DaDCFA3E3",
        "name": "Rubic",
        "symbol": "RBC",
        "logoURI": "https://tokens.1inch.io/0xa4eed63db85311e22df4473f87ccfc3dadcfa3e3.png"
    },
    {
        "address": "0x73968b9a57c6E53d41345FD57a6E6ae27d6CDB2F",
        "name": "StakeDAOToken",
        "symbol": "SDT",
        "logoURI": "https://tokens.1inch.io/0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f.png"
    },
    {
        "address": "0x9248c485b0B80f76DA451f167A8db30F33C70907",
        "name": "Debase",
        "symbol": "DEBASE",
        "logoURI": "https://tokens.1inch.io/0x9248c485b0b80f76da451f167a8db30f33c70907.png"
    },
    {
        "address": "0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4",
        "name": "AnkrNetwork",
        "symbol": "ANKR",
        "logoURI": "https://tokens.1inch.io/0x8290333cef9e6d528dd5618fb97a76f268f3edd4.png"
    },
    {
        "address": "0xc719d010B63E5bbF2C0551872CD5316ED26AcD83",
        "name": "DecentralizedInsuranceProtocol",
        "symbol": "DIPInsurance",
        "logoURI": "https://tokens.1inch.io/0xc719d010b63e5bbf2c0551872cd5316ed26acd83.png"
    },
    {
        "address": "0x3155BA85D5F96b2d030a4966AF206230e46849cb",
        "name": "THORChainETH.RUNE",
        "symbol": "RUNE",
        "logoURI": "https://tokens.1inch.io/0x3155ba85d5f96b2d030a4966af206230e46849cb.png"
    },
    {
        "address": "0x374CB8C27130E2c9E04F44303f3c8351B9De61C1",
        "name": "BaoToken",
        "symbol": "BAO",
        "logoURI": "https://tokens.1inch.io/0x374cb8c27130e2c9e04f44303f3c8351b9de61c1.png"
    },
    {
        "address": "0xFE3E6a25e6b192A42a44ecDDCd13796471735ACf",
        "name": "Reef.finance",
        "symbol": "REEF",
        "logoURI": "https://tokens.1inch.io/0xfe3e6a25e6b192a42a44ecddcd13796471735acf.png"
    },
    {
        "address": "0x86772b1409b61c639EaAc9Ba0AcfBb6E238e5F83",
        "name": "Indexed",
        "symbol": "NDX",
        "logoURI": "https://tokens.1inch.io/0x86772b1409b61c639eaac9ba0acfbb6e238e5f83.png"
    },
    {
        "address": "0xF0939011a9bb95c3B791f0cb546377Ed2693a574",
        "name": "Zero.ExchangeToken",
        "symbol": "ZERO",
        "logoURI": "https://tokens.1inch.io/0xf0939011a9bb95c3b791f0cb546377ed2693a574.png"
    },
    {
        "address": "0x7240aC91f01233BaAf8b064248E80feaA5912BA3",
        "name": "Octo.fi",
        "symbol": "OCTO",
        "logoURI": "https://tokens.1inch.io/0x7240ac91f01233baaf8b064248e80feaa5912ba3.png"
    },
    {
        "address": "0x4c11249814f11b9346808179Cf06e71ac328c1b5",
        "name": "OraichainToken",
        "symbol": "ORAI",
        "logoURI": "https://tokens.1inch.io/0x4c11249814f11b9346808179cf06e71ac328c1b5.png"
    },
    {
        "address": "0xFbEEa1C75E4c4465CB2FCCc9c6d6afe984558E20",
        "name": "DuckDaoDime",
        "symbol": "DDIM",
        "logoURI": "https://tokens.1inch.io/0xfbeea1c75e4c4465cb2fccc9c6d6afe984558e20.png"
    },
    {
        "address": "0x70401dFD142A16dC7031c56E862Fc88Cb9537Ce0",
        "name": "Bird.Money",
        "symbol": "BIRD",
        "logoURI": "https://tokens.1inch.io/0x70401dfd142a16dc7031c56e862fc88cb9537ce0.png"
    },
    {
        "address": "0xCae72A7A0Fd9046cf6b165CA54c9e3a3872109E0",
        "name": "AnRKeyX",
        "symbol": "ANRX",
        "logoURI": "https://tokens.1inch.io/0xcae72a7a0fd9046cf6b165ca54c9e3a3872109e0.png"
    },
    {
        "address": "0x9B02dD390a603Add5c07f9fd9175b7DABE8D63B7",
        "name": "Shopping.io",
        "symbol": "SPIShopping",
        "logoURI": "https://tokens.1inch.io/0x9b02dd390a603add5c07f9fd9175b7dabe8d63b7.png"
    },
    {
        "address": "0x86ed939B500E121C0C5f493F399084Db596dAd20",
        "name": "SpaceChainV2",
        "symbol": "SPC",
        "logoURI": "https://tokens.1inch.io/0x86ed939b500e121c0c5f493f399084db596dad20.png"
    },
    {
        "address": "0x33D0568941C0C64ff7e0FB4fbA0B11BD37deEd9f",
        "name": "RAMPDEFI",
        "symbol": "RAMP",
        "logoURI": "https://tokens.1inch.io/0x33d0568941c0c64ff7e0fb4fba0b11bd37deed9f.png"
    },
    {
        "address": "0xB987D48Ed8f2C468D52D6405624EADBa5e76d723",
        "name": "StabilizeToken",
        "symbol": "STBZ",
        "logoURI": "https://tokens.1inch.io/0xb987d48ed8f2c468d52d6405624eadba5e76d723.png"
    },
    {
        "address": "0x159751323A9E0415DD3d6D42a1212fe9F4a0848C",
        "name": "INFI",
        "symbol": "INFI",
        "logoURI": "https://tokens.1inch.io/0x159751323a9e0415dd3d6d42a1212fe9f4a0848c.png"
    },
    {
        "address": "0xA8b919680258d369114910511cc87595aec0be6D",
        "name": "LUKSOToken",
        "symbol": "LYXe",
        "logoURI": "https://tokens.1inch.io/0xa8b919680258d369114910511cc87595aec0be6d.png"
    },
    {
        "address": "0xd084B83C305daFD76AE3E1b4E1F1fe2eCcCb3988",
        "name": "TerraVirtuaKolect",
        "symbol": "TVK",
        "logoURI": "https://tokens.1inch.io/0xd084b83c305dafd76ae3e1b4e1f1fe2ecccb3988.png"
    },
    {
        "address": "0xa1faa113cbE53436Df28FF0aEe54275c13B40975",
        "name": "AlphaToken",
        "symbol": "ALPHA",
        "logoURI": "https://tokens.1inch.io/0xa1faa113cbe53436df28ff0aee54275c13b40975.png"
    },
    {
        "address": "0x817bbDbC3e8A1204f3691d14bB44992841e3dB35",
        "name": "CudosToken",
        "symbol": "CUDOS",
        "logoURI": "https://tokens.1inch.io/0x817bbdbc3e8a1204f3691d14bb44992841e3db35.png"
    },
    {
        "address": "0xde4EE8057785A7e8e800Db58F9784845A5C2Cbd6",
        "name": "Dexe",
        "symbol": "DEXE",
        "logoURI": "https://tokens.1inch.io/0xde4ee8057785a7e8e800db58f9784845a5c2cbd6.png"
    },
    {
        "address": "0x3845badAde8e6dFF049820680d1F14bD3903a5d0",
        "name": "SAND",
        "symbol": "SAND",
        "logoURI": "https://tokens.1inch.io/0x3845badade8e6dff049820680d1f14bd3903a5d0.png"
    },
    {
        "address": "0x3C03b4EC9477809072FF9CC9292C9B25d4A8e6c6",
        "name": "PolkaCover",
        "symbol": "CVR",
        "logoURI": "https://tokens.1inch.io/0x3c03b4ec9477809072ff9cc9292c9b25d4a8e6c6.png"
    },
    {
        "address": "0x298d492e8c1d909D3F63Bc4A36C66c64ACB3d695",
        "name": "PolkaBridge",
        "symbol": "PBR",
        "logoURI": "https://tokens.1inch.io/0x298d492e8c1d909d3f63bc4a36c66c64acb3d695.png"
    },
    {
        "address": "0xfe9A29aB92522D14Fc65880d817214261D8479AE",
        "name": "SnowSwap",
        "symbol": "SNOW",
        "logoURI": "https://tokens.1inch.io/0xfe9a29ab92522d14fc65880d817214261d8479ae.png"
    },
    {
        "address": "0x220B71671b649c03714dA9c621285943f3cbcDC6",
        "name": "TosDis",
        "symbol": "DIS",
        "logoURI": "https://tokens.1inch.io/0x220b71671b649c03714da9c621285943f3cbcdc6.png"
    },
    {
        "address": "0x69A95185ee2a045CDC4bCd1b1Df10710395e4e23",
        "name": "PoolzFinance",
        "symbol": "POOLZ",
        "logoURI": "https://tokens.1inch.io/0x69a95185ee2a045cdc4bcd1b1df10710395e4e23.png"
    },
    {
        "address": "0xe4815AE53B124e7263F08dcDBBB757d41Ed658c6",
        "name": "Zks",
        "symbol": "ZKS",
        "logoURI": "https://tokens.1inch.io/0xe4815ae53b124e7263f08dcdbbb757d41ed658c6.png"
    },
    {
        "address": "0x1337DEF16F9B486fAEd0293eb623Dc8395dFE46a",
        "name": "Armor",
        "symbol": "ARMOR",
        "logoURI": "https://tokens.1inch.io/0x1337def16f9b486faed0293eb623dc8395dfe46a.png"
    },
    {
        "address": "0x1337DEF18C680aF1f9f45cBcab6309562975b1dD",
        "name": "ArmorNXM",
        "symbol": "arNXM",
        "logoURI": "https://tokens.1inch.io/0x1337def18c680af1f9f45cbcab6309562975b1dd.png"
    },
    {
        "address": "0x888888888889C00c67689029D7856AAC1065eC11",
        "name": "OpiumGovernanceToken",
        "symbol": "OPIUM",
        "logoURI": "https://tokens.1inch.io/0x888888888889c00c67689029d7856aac1065ec11.png"
    },
    {
        "address": "0x3FA729B4548beCBAd4EaB6EF18413470e6D5324C",
        "name": "Holyheld",
        "symbol": "HH",
        "logoURI": "https://tokens.1inch.io/0x3fa729b4548becbad4eab6ef18413470e6d5324c.png"
    },
    {
        "address": "0xb4bebD34f6DaaFd808f73De0d10235a92Fbb6c3D",
        "name": "YearnEcosystemTokenIndex",
        "symbol": "YETI",
        "logoURI": "https://tokens.1inch.io/0xb4bebd34f6daafd808f73de0d10235a92fbb6c3d.png"
    },
    {
        "address": "0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17",
        "name": "DeFiYieldProtocol",
        "symbol": "DYP",
        "logoURI": "https://tokens.1inch.io/0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17.png"
    },
    {
        "address": "0xE95A203B1a91a908F9B9CE46459d101078c2c3cb",
        "name": "AnkrEth2RewardBearingBond",
        "symbol": "aETHc",
        "logoURI": "https://tokens.1inch.io/0xe95a203b1a91a908f9b9ce46459d101078c2c3cb.png"
    },
    {
        "address": "0x4E15361FD6b4BB609Fa63C81A2be19d873717870",
        "name": "FantomToken",
        "symbol": "FTM",
        "logoURI": "https://tokens.1inch.io/0x4e15361fd6b4bb609fa63c81a2be19d873717870.png"
    },
    {
        "address": "0x8642A849D0dcb7a15a974794668ADcfbe4794B56",
        "name": "Prosper",
        "symbol": "PROS",
        "logoURI": "https://tokens.1inch.io/0x8642a849d0dcb7a15a974794668adcfbe4794b56.png"
    },
    {
        "address": "0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
        "name": "WrappedUSTToken",
        "symbol": "UST",
        "logoURI": "https://tokens.1inch.io/0xa47c8bf37f92abed4a126bda807a7b7498661acd.png"
    },
    {
        "address": "0x09a3EcAFa817268f77BE1283176B946C4ff2E608",
        "name": "WrappedMIRToken",
        "symbol": "MIR",
        "logoURI": "https://tokens.1inch.io/0x09a3ecafa817268f77be1283176b946c4ff2e608.png"
    },
    {
        "address": "0xEfc1C73A3D8728Dc4Cf2A18ac5705FE93E5914AC",
        "name": "Metric.exchange",
        "symbol": "METRIC",
        "logoURI": "https://tokens.1inch.io/0xefc1c73a3d8728dc4cf2a18ac5705fe93e5914ac.png"
    },
    {
        "address": "0x1d37986F252d0e349522EA6C3B98Cb935495E63E",
        "name": "ChartEx",
        "symbol": "CHART",
        "logoURI": "https://tokens.1inch.io/0x1d37986f252d0e349522ea6c3b98cb935495e63e.png"
    },
    {
        "address": "0x725C263e32c72dDC3A19bEa12C5a0479a81eE688",
        "name": "BridgeMutual",
        "symbol": "BMI",
        "logoURI": "https://tokens.1inch.io/0x725c263e32c72ddc3a19bea12c5a0479a81ee688.png"
    },
    {
        "address": "0xc666081073E8DfF8D3d1c2292A29aE1A2153eC09",
        "name": "DigitexFutures",
        "symbol": "DGTX",
        "logoURI": "https://tokens.1inch.io/0xc666081073e8dff8d3d1c2292a29ae1a2153ec09.png"
    },
    {
        "address": "0xa283aA7CfBB27EF0cfBcb2493dD9F4330E0fd304",
        "name": "MMToken",
        "symbol": "MM1",
        "logoURI": "https://tokens.1inch.io/0xa283aa7cfbb27ef0cfbcb2493dd9f4330e0fd304.png"
    },
    {
        "address": "0x0000000000095413afC295d19EDeb1Ad7B71c952",
        "name": "Tokenlon",
        "symbol": "LON",
        "logoURI": "https://tokens.1inch.io/0x0000000000095413afc295d19edeb1ad7b71c952.png"
    },
    {
        "address": "0x1F3f9D3068568F8040775be2e8C03C103C61f3aF",
        "name": "ArcherDAOGovernanceToken",
        "symbol": "ARCH",
        "logoURI": "https://tokens.1inch.io/0x1f3f9d3068568f8040775be2e8c03c103c61f3af.png"
    },
    {
        "address": "0x6Fa0952355607dFB2d399138B7fE10EB90F245e4",
        "name": "ClashToken",
        "symbol": "SCT",
        "logoURI": "https://tokens.1inch.io/0x6fa0952355607dfb2d399138b7fe10eb90f245e4.png"
    },
    {
        "address": "0xBbff34E47E559ef680067a6B1c980639EEb64D24",
        "name": "LeverjGluon",
        "symbol": "L2",
        "logoURI": "https://tokens.1inch.io/0xbbff34e47e559ef680067a6b1c980639eeb64d24.png"
    },
    {
        "address": "0xE0aD1806Fd3E7edF6FF52Fdb822432e847411033",
        "name": "OnX.finance",
        "symbol": "ONX",
        "logoURI": "https://tokens.1inch.io/0xe0ad1806fd3e7edf6ff52fdb822432e847411033.png"
    },
    {
        "address": "0x2791BfD60D232150Bff86b39B7146c0eaAA2BA81",
        "name": "BiFi",
        "symbol": "BiFi",
        "logoURI": "https://tokens.1inch.io/0x2791bfd60d232150bff86b39b7146c0eaaa2ba81.png"
    },
    {
        "address": "0xef3A930e1FfFFAcd2fc13434aC81bD278B0ecC8d",
        "name": "StaFi",
        "symbol": "FIS",
        "logoURI": "https://tokens.1inch.io/0xef3a930e1ffffacd2fc13434ac81bd278b0ecc8d.png"
    },
    {
        "address": "0x3E9BC21C9b189C09dF3eF1B824798658d5011937",
        "name": "LinearToken",
        "symbol": "LINA",
        "logoURI": "https://tokens.1inch.io/0x3e9bc21c9b189c09df3ef1b824798658d5011937.png"
    },
    {
        "address": "0xb1f871Ae9462F1b2C6826E88A7827e76f86751d4",
        "name": "GNYerc20",
        "symbol": "GNYerc20",
        "logoURI": "https://tokens.1inch.io/0xb1f871ae9462f1b2c6826e88a7827e76f86751d4.png"
    },
    {
        "address": "0x8F6A193C8B3c949E1046f1547C3A3f0836944E4b",
        "name": "xINCH",
        "symbol": "xINCHa",
        "logoURI": "https://tokens.1inch.io/0x8f6a193c8b3c949e1046f1547c3a3f0836944e4b.png"
    },
    {
        "address": "0xaC0104Cca91D167873B8601d2e71EB3D4D8c33e0",
        "name": "Crowns",
        "symbol": "CWS",
        "logoURI": "https://tokens.1inch.io/0xac0104cca91d167873b8601d2e71eb3d4d8c33e0.png"
    },
    {
        "address": "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
        "name": "SHIBAINU",
        "symbol": "SHIB",
        "logoURI": "https://tokens.1inch.io/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce.png"
    },
    {
        "address": "0x6D0F5149c502faf215C89ab306ec3E50b15e2892",
        "name": "PortionToken",
        "symbol": "PRT",
        "logoURI": "https://tokens.1inch.io/0x6d0f5149c502faf215c89ab306ec3e50b15e2892.png"
    },
    {
        "address": "0x8A9c4dfe8b9D8962B31e4e16F8321C44d48e246E",
        "name": "NameChangeToken",
        "symbol": "NCT",
        "logoURI": "https://tokens.1inch.io/0x8a9c4dfe8b9d8962b31e4e16f8321c44d48e246e.png"
    },
    {
        "address": "0xB6Ca7399B4F9CA56FC27cBfF44F4d2e4Eef1fc81",
        "name": "Muse",
        "symbol": "MUSE",
        "logoURI": "https://tokens.1inch.io/0xb6ca7399b4f9ca56fc27cbff44f4d2e4eef1fc81.png"
    },
    {
        "address": "0x6e36556B3ee5Aa28Def2a8EC3DAe30eC2B208739",
        "name": "BUILDFinance",
        "symbol": "BUILD",
        "logoURI": "https://tokens.1inch.io/0x6e36556b3ee5aa28def2a8ec3dae30ec2b208739.png"
    },
    {
        "address": "0x4f5fa8f2d12e5eB780f6082Dd656C565C48E0f24",
        "name": "GourmetGalaxy",
        "symbol": "GUM",
        "logoURI": "https://tokens.1inch.io/0x4f5fa8f2d12e5eb780f6082dd656c565c48e0f24.png"
    },
    {
        "address": "0x8eEF5a82E6Aa222a60F009ac18c24EE12dBf4b41",
        "name": "TixlToken",
        "symbol": "TXL",
        "logoURI": "https://tokens.1inch.io/0x8eef5a82e6aa222a60f009ac18c24ee12dbf4b41.png"
    },
    {
        "address": "0x50DE6856358Cc35f3A9a57eAAA34BD4cB707d2cd",
        "name": "RAZOR",
        "symbol": "RAZOR",
        "logoURI": "https://tokens.1inch.io/0x50de6856358cc35f3a9a57eaaa34bd4cb707d2cd.png"
    },
    {
        "address": "0x297D33e17e61C2Ddd812389C2105193f8348188a",
        "name": "StrudelFinance",
        "symbol": "TRDL",
        "logoURI": "https://tokens.1inch.io/0x297d33e17e61c2ddd812389c2105193f8348188a.png"
    },
    {
        "address": "0xEC681F28f4561c2a9534799AA38E0d36A83Cf478",
        "name": "YVS.Finance",
        "symbol": "YVS",
        "logoURI": "https://tokens.1inch.io/0xec681f28f4561c2a9534799aa38e0d36a83cf478.png"
    },
    {
        "address": "0x8D3E855f3f55109D473735aB76F753218400fe96",
        "name": "Bundles",
        "symbol": "BUND",
        "logoURI": "https://tokens.1inch.io/0x8d3e855f3f55109d473735ab76f753218400fe96.png"
    },
    {
        "address": "0xC28E27870558cF22ADD83540d2126da2e4b464c2",
        "name": "SashimiToken",
        "symbol": "SASHIMI",
        "logoURI": "https://tokens.1inch.io/0xc28e27870558cf22add83540d2126da2e4b464c2.png"
    },
    {
        "address": "0x9Ed8e7C9604790F7Ec589F99b94361d8AAB64E5E",
        "name": "Unistake",
        "symbol": "UNISTAKE",
        "logoURI": "https://tokens.1inch.io/0x9ed8e7c9604790f7ec589f99b94361d8aab64e5e.png"
    },
    {
        "address": "0x910524678C0B1B23FFB9285a81f99C29C11CBaEd",
        "name": "DokiDokiAzuki",
        "symbol": "AZUKI",
        "logoURI": "https://tokens.1inch.io/0x910524678c0b1b23ffb9285a81f99c29c11cbaed.png"
    },
    {
        "address": "0x5F64Ab1544D28732F0A24F4713c2C8ec0dA089f0",
        "name": "DEXTFToken",
        "symbol": "DEXTF",
        "logoURI": "https://tokens.1inch.io/0x5f64ab1544d28732f0a24f4713c2c8ec0da089f0.png"
    },
    {
        "address": "0x018fb5Af9d015Af25592a014C4266a84143De7a0",
        "name": "mp3",
        "symbol": "MP3",
        "logoURI": "https://tokens.1inch.io/0x018fb5af9d015af25592a014c4266a84143de7a0.png"
    },
    {
        "address": "0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723",
        "name": "Litentry",
        "symbol": "LIT",
        "logoURI": "https://tokens.1inch.io/0xb59490ab09a0f526cc7305822ac65f2ab12f9723.png"
    },
    {
        "address": "0xd2877702675e6cEb975b4A1dFf9fb7BAF4C91ea9",
        "name": "WrappedLUNAToken",
        "symbol": "LUNA",
        "logoURI": "https://tokens.1inch.io/0xd2877702675e6ceb975b4a1dff9fb7baf4c91ea9.png"
    },
    {
        "address": "0xB6ff96B8A8d214544Ca0dBc9B33f7AD6503eFD32",
        "name": "SYNC",
        "symbol": "SYNC",
        "logoURI": "https://tokens.1inch.io/0xb6ff96b8a8d214544ca0dbc9b33f7ad6503efd32.png"
    },
    {
        "address": "0x8a40c222996f9F3431f63Bf80244C36822060f12",
        "name": "Finxflo",
        "symbol": "FXF",
        "logoURI": "https://tokens.1inch.io/0x8a40c222996f9f3431f63bf80244c36822060f12.png"
    },
    {
        "address": "0xf9FBE825BFB2bF3E387af0Dc18caC8d87F29DEa8",
        "name": "BotOcean",
        "symbol": "BOTS",
        "logoURI": "https://tokens.1inch.io/0xf9fbe825bfb2bf3e387af0dc18cac8d87f29dea8.png"
    },
    {
        "address": "0x66C0DDEd8433c9EA86C8cf91237B14e10b4d70B7",
        "name": "MarsToken",
        "symbol": "Mars",
        "logoURI": "https://tokens.1inch.io/0x66c0dded8433c9ea86c8cf91237b14e10b4d70b7.png"
    },
    {
        "address": "0x7b3D36Eb606f873A75A6aB68f8c999848B04F935",
        "name": "NFTLootBox.com",
        "symbol": "LOOT",
        "logoURI": "https://tokens.1inch.io/0x7b3d36eb606f873a75a6ab68f8c999848b04f935.png"
    },
    {
        "address": "0xC0bA369c8Db6eB3924965e5c4FD0b4C1B91e305F",
        "name": "DLPDuckToken",
        "symbol": "DUCK",
        "logoURI": "https://tokens.1inch.io/0xc0ba369c8db6eb3924965e5c4fd0b4c1b91e305f.png"
    },
    {
        "address": "0xcca0c9c383076649604eE31b20248BC04FdF61cA",
        "name": "BitMaxtoken",
        "symbol": "BTMX",
        "logoURI": "https://tokens.1inch.io/0xcca0c9c383076649604ee31b20248bc04fdf61ca.png"
    },
    {
        "address": "0xEBd9D99A3982d547C5Bb4DB7E3b1F9F14b67Eb83",
        "name": "EverestID",
        "symbol": "ID",
        "logoURI": "https://tokens.1inch.io/0xebd9d99a3982d547c5bb4db7e3b1f9f14b67eb83.png"
    },
    {
        "address": "0x00c83aeCC790e8a4453e5dD3B0B4b3680501a7A7",
        "name": "SKALE",
        "symbol": "SKL",
        "logoURI": "https://tokens.1inch.io/0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7.png"
    },
    {
        "address": "0x0f51bb10119727a7e5eA3538074fb341F56B09Ad",
        "name": "DAOMaker",
        "symbol": "DAO",
        "logoURI": "https://tokens.1inch.io/0x0f51bb10119727a7e5ea3538074fb341f56b09ad.png"
    },
    {
        "address": "0x76c5449F4950f6338A393F53CdA8b53B0cd3Ca3a",
        "name": "BT.Finance",
        "symbol": "BT",
        "logoURI": "https://tokens.1inch.io/0x76c5449f4950f6338a393f53cda8b53b0cd3ca3a.png"
    },
    {
        "address": "0xf680429328caaaCabee69b7A9FdB21a71419c063",
        "name": "ButterflyProtocolGovernanceToken",
        "symbol": "BFLY",
        "logoURI": "https://tokens.1inch.io/0xf680429328caaacabee69b7a9fdb21a71419c063.png"
    },
    {
        "address": "0x6fC13EACE26590B80cCCAB1ba5d51890577D83B2",
        "name": "Umbrella",
        "symbol": "UMB",
        "logoURI": "https://tokens.1inch.io/0x6fc13eace26590b80cccab1ba5d51890577d83b2.png"
    },
    {
        "address": "0x1456688345527bE1f37E9e627DA0837D6f08C925",
        "name": "USDPStablecoin",
        "symbol": "USDP2",
        "logoURI": "https://tokens.1inch.io/0x1456688345527be1f37e9e627da0837d6f08c925.png"
    },
    {
        "address": "0x23B608675a2B2fB1890d3ABBd85c5775c51691d5",
        "name": "UnisocksEdition0",
        "symbol": "SOCKS",
        "logoURI": "https://tokens.1inch.io/0x23b608675a2b2fb1890d3abbd85c5775c51691d5.png"
    },
    {
        "address": "0xAa4e3edb11AFa93c41db59842b29de64b72E355B",
        "name": "MarginSwap",
        "symbol": "MFI",
        "logoURI": "https://tokens.1inch.io/0xaa4e3edb11afa93c41db59842b29de64b72e355b.png"
    },
    {
        "address": "0x9aF15D7B8776fa296019979E70a5BE53c714A7ec",
        "name": "EvnToken",
        "symbol": "EVN",
        "logoURI": "https://tokens.1inch.io/0x9af15d7b8776fa296019979e70a5be53c714a7ec.png"
    },
    {
        "address": "0xE6C3502997f97F9BDe34CB165fBce191065E068f",
        "name": "KBTC",
        "symbol": "KBTC",
        "logoURI": "https://tokens.1inch.io/0xe6c3502997f97f9bde34cb165fbce191065e068f.png"
    },
    {
        "address": "0xDcB01cc464238396E213a6fDd933E36796eAfF9f",
        "name": "Yield",
        "symbol": "YLD",
        "logoURI": "https://tokens.1inch.io/0xdcb01cc464238396e213a6fdd933e36796eaff9f.png"
    },
    {
        "address": "0x69e8b9528CABDA89fe846C67675B5D73d463a916",
        "name": "BBB",
        "symbol": "OPEN",
        "logoURI": "https://tokens.1inch.io/0x69e8b9528cabda89fe846c67675b5d73d463a916.png"
    },
    {
        "address": "0x196c81385Bc536467433014042788Eb707703934",
        "name": "CTASKToken",
        "symbol": "CTASK",
        "logoURI": "https://tokens.1inch.io/0x196c81385bc536467433014042788eb707703934.png"
    },
    {
        "address": "0xD7B7d3C0bdA57723Fb54ab95Fd8F9EA033AF37f2",
        "name": "PYLON",
        "symbol": "PYLON",
        "logoURI": "https://tokens.1inch.io/0xd7b7d3c0bda57723fb54ab95fd8f9ea033af37f2.png"
    },
    {
        "address": "0x89bD2E7e388fAB44AE88BEf4e1AD12b4F1E0911c",
        "name": "NUXPeanut.trade",
        "symbol": "NUX",
        "logoURI": "https://tokens.1inch.io/0x89bd2e7e388fab44ae88bef4e1ad12b4f1e0911c.png"
    },
    {
        "address": "0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb",
        "name": "DePay",
        "symbol": "DEPAY",
        "logoURI": "https://tokens.1inch.io/0xa0bed124a09ac2bd941b10349d8d224fe3c955eb.png"
    },
    {
        "address": "0x6BFf2fE249601ed0Db3a87424a2E923118BB0312",
        "name": "FYOOZ",
        "symbol": "FYZ",
        "logoURI": "https://tokens.1inch.io/0x6bff2fe249601ed0db3a87424a2e923118bb0312.png"
    },
    {
        "address": "0xfDC4a3FC36df16a78edCAf1B837d3ACAaeDB2CB4",
        "name": "ScifiToken",
        "symbol": "SCIFI",
        "logoURI": "https://tokens.1inch.io/0xfdc4a3fc36df16a78edcaf1b837d3acaaedb2cb4.png"
    },
    {
        "address": "0xaDB2437e6F65682B85F814fBc12FeC0508A7B1D0",
        "name": "UniCrypt",
        "symbol": "UNCX",
        "logoURI": "https://tokens.1inch.io/0xadb2437e6f65682b85f814fbc12fec0508a7b1d0.png"
    },
    {
        "address": "0xEd40834A13129509A89be39a9bE9C0E96A0DDd71",
        "name": "WarpToken",
        "symbol": "WARP",
        "logoURI": "https://tokens.1inch.io/0xed40834a13129509a89be39a9be9c0e96a0ddd71.png"
    },
    {
        "address": "0x875773784Af8135eA0ef43b5a374AaD105c5D39e",
        "name": "Idle",
        "symbol": "IDLE",
        "logoURI": "https://tokens.1inch.io/0x875773784af8135ea0ef43b5a374aad105c5d39e.png"
    },
    {
        "address": "0x0488401c3F535193Fa8Df029d9fFe615A06E74E6",
        "name": "SparkPoint",
        "symbol": "SRK",
        "logoURI": "https://tokens.1inch.io/0x0488401c3f535193fa8df029d9ffe615a06e74e6.png"
    },
    {
        "address": "0x038a68FF68c393373eC894015816e33Ad41BD564",
        "name": "Glitch",
        "symbol": "GLCH",
        "logoURI": "https://tokens.1inch.io/0x038a68ff68c393373ec894015816e33ad41bd564.png"
    },
    {
        "address": "0x10Be9a8dAe441d276a5027936c3aADEd2d82bC15",
        "name": "unimexnetwork",
        "symbol": "UMX",
        "logoURI": "https://tokens.1inch.io/0x10be9a8dae441d276a5027936c3aaded2d82bc15.png"
    },
    {
        "address": "0x5F0E628B693018f639D10e4A4F59BD4d8B2B6B44",
        "name": "WhiteheartToken",
        "symbol": "WHITE",
        "logoURI": "https://tokens.1inch.io/0x5f0e628b693018f639d10e4a4f59bd4d8b2b6b44.png"
    },
    {
        "address": "0xB1e9157c2Fdcc5a856C8DA8b2d89b6C32b3c1229",
        "name": "ZenfuseTradingPlatformToken",
        "symbol": "ZEFU",
        "logoURI": "https://tokens.1inch.io/0xb1e9157c2fdcc5a856c8da8b2d89b6c32b3c1229.png"
    },
    {
        "address": "0x260e63d91fCCC499606BAe3FE945c4ed1CF56A56",
        "name": "MoonTools.io",
        "symbol": "MOONS",
        "logoURI": "https://tokens.1inch.io/0x260e63d91fccc499606bae3fe945c4ed1cf56a56.png"
    },
    {
        "address": "0x945Facb997494CC2570096c74b5F66A3507330a1",
        "name": "mStableBTC",
        "symbol": "mBTC",
        "logoURI": "https://tokens.1inch.io/0x945facb997494cc2570096c74b5f66a3507330a1.png"
    },
    {
        "address": "0x1b40183EFB4Dd766f11bDa7A7c3AD8982e998421",
        "name": "VesperToken",
        "symbol": "VSP",
        "logoURI": "https://tokens.1inch.io/0x1b40183efb4dd766f11bda7a7c3ad8982e998421.png"
    },
    {
        "address": "0xEd0439EACf4c4965AE4613D77a5C2Efe10e5f183",
        "name": "shroom.finance",
        "symbol": "SHROOM",
        "logoURI": "https://tokens.1inch.io/0xed0439eacf4c4965ae4613d77a5c2efe10e5f183.png"
    },
    {
        "address": "0xaac41EC512808d64625576EDdd580e7Ea40ef8B2",
        "name": "gameswap.org",
        "symbol": "GSWAP",
        "logoURI": "https://tokens.1inch.io/0xaac41ec512808d64625576eddd580e7ea40ef8b2.png"
    },
    {
        "address": "0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919",
        "name": "RaiReflexIndex",
        "symbol": "RAI",
        "logoURI": "https://tokens.1inch.io/0x03ab458634910aad20ef5f1c8ee96f1d6ac54919.png"
    },
    {
        "address": "0x9cEB84f92A0561fa3Cc4132aB9c0b76A59787544",
        "name": "DokiDokiFinance",
        "symbol": "DOKI",
        "logoURI": "https://tokens.1inch.io/0x9ceb84f92a0561fa3cc4132ab9c0b76a59787544.png"
    },
    {
        "address": "0xfc05987bd2be489ACCF0f509E44B0145d68240f7",
        "name": "ESSENTIA",
        "symbol": "ESS",
        "logoURI": "https://tokens.1inch.io/0xfc05987bd2be489accf0f509e44b0145d68240f7.png"
    },
    {
        "address": "0xABe580E7ee158dA464b51ee1a83Ac0289622e6be",
        "name": "Offshift",
        "symbol": "XFT",
        "logoURI": "https://tokens.1inch.io/0xabe580e7ee158da464b51ee1a83ac0289622e6be.png"
    },
    {
        "address": "0xCa3FE04C7Ee111F0bbb02C328c699226aCf9Fd33",
        "name": "seen.haus",
        "symbol": "SEEN",
        "logoURI": "https://tokens.1inch.io/0xca3fe04c7ee111f0bbb02c328c699226acf9fd33.png"
    },
    {
        "address": "0x34612903Db071e888a4dADcaA416d3EE263a87b9",
        "name": "ethart",
        "symbol": "arte",
        "logoURI": "https://tokens.1inch.io/0x34612903db071e888a4dadcaa416d3ee263a87b9.png"
    },
    {
        "address": "0x7cA4408137eb639570F8E647d9bD7B7E8717514A",
        "name": "AlpaToken",
        "symbol": "ALPA",
        "logoURI": "https://tokens.1inch.io/0x7ca4408137eb639570f8e647d9bd7b7e8717514a.png"
    },
    {
        "address": "0xa58a4f5c4Bb043d2CC1E170613B74e767c94189B",
        "name": "UTUCoin",
        "symbol": "UTU",
        "logoURI": "https://tokens.1inch.io/0xa58a4f5c4bb043d2cc1e170613b74e767c94189b.png"
    },
    {
        "address": "0x9A0aBA393aac4dFbFf4333B06c407458002C6183",
        "name": "ACoconut",
        "symbol": "AC",
        "logoURI": "https://tokens.1inch.io/0x9a0aba393aac4dfbff4333b06c407458002c6183.png"
    },
    {
        "address": "0x7eaF9C89037e4814DC0d9952Ac7F888C784548DB",
        "name": "Royale",
        "symbol": "ROYA",
        "logoURI": "https://tokens.1inch.io/0x7eaf9c89037e4814dc0d9952ac7f888c784548db.png"
    },
    {
        "address": "0x6399C842dD2bE3dE30BF99Bc7D1bBF6Fa3650E70",
        "name": "Premia",
        "symbol": "PREMIA",
        "logoURI": "https://tokens.1inch.io/0x6399c842dd2be3de30bf99bc7d1bbf6fa3650e70.png"
    },
    {
        "address": "0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e",
        "name": "PoolTogether",
        "symbol": "POOL",
        "logoURI": "https://tokens.1inch.io/0x0cec1a9154ff802e7934fc916ed7ca50bde6844e.png"
    },
    {
        "address": "0x72e9D9038cE484EE986FEa183f8d8Df93f9aDA13",
        "name": "SMARTCREDITToken",
        "symbol": "SMARTCREDIT",
        "logoURI": "https://tokens.1inch.io/0x72e9d9038ce484ee986fea183f8d8df93f9ada13.png"
    },
    {
        "address": "0xCb5f72d37685C3D5aD0bB5F982443BC8FcdF570E",
        "name": "RootKit",
        "symbol": "ROOT",
        "logoURI": "https://tokens.1inch.io/0xcb5f72d37685c3d5ad0bb5f982443bc8fcdf570e.png"
    },
    {
        "address": "0x557B933a7C2c45672B610F8954A3deB39a51A8Ca",
        "name": "REVV",
        "symbol": "REVV",
        "logoURI": "https://tokens.1inch.io/0x557b933a7c2c45672b610f8954a3deb39a51a8ca.png"
    },
    {
        "address": "0x38A2fDc11f526Ddd5a607C1F251C065f40fBF2f7",
        "name": "PhoenixDAO",
        "symbol": "PHNX",
        "logoURI": "https://tokens.1inch.io/0x38a2fdc11f526ddd5a607c1f251c065f40fbf2f7.png"
    },
    {
        "address": "0x7866E48C74CbFB8183cd1a929cd9b95a7a5CB4F4",
        "name": "DexKit",
        "symbol": "KIT",
        "logoURI": "https://tokens.1inch.io/0x7866e48c74cbfb8183cd1a929cd9b95a7a5cb4f4.png"
    },
    {
        "address": "0x4691937a7508860F876c9c0a2a617E7d9E945D4B",
        "name": "WootradeNetwork",
        "symbol": "WOO",
        "logoURI": "https://tokens.1inch.io/0x4691937a7508860f876c9c0a2a617e7d9e945d4b.png"
    },
    {
        "address": "0xEA1ea0972fa092dd463f2968F9bB51Cc4c981D71",
        "name": "Modefi",
        "symbol": "MOD",
        "logoURI": "https://tokens.1inch.io/0xea1ea0972fa092dd463f2968f9bb51cc4c981d71.png"
    },
    {
        "address": "0x0fe629d1E84E171f8fF0C1Ded2Cc2221Caa48a3f",
        "name": "Mask",
        "symbol": "MASK",
        "logoURI": "https://tokens.1inch.io/0x0fe629d1e84e171f8ff0c1ded2cc2221caa48a3f.png"
    },
    {
        "address": "0xf99d58e463A2E07e5692127302C20A191861b4D6",
        "name": "Anyswap",
        "symbol": "ANY",
        "logoURI": "https://tokens.1inch.io/0xf99d58e463a2e07e5692127302c20a191861b4d6.png"
    },
    {
        "address": "0xf1f955016EcbCd7321c7266BccFB96c68ea5E49b",
        "name": "Rally",
        "symbol": "RLY",
        "logoURI": "https://tokens.1inch.io/0xf1f955016ecbcd7321c7266bccfb96c68ea5e49b.png"
    },
    {
        "address": "0x147faF8De9d8D8DAAE129B187F0D02D819126750",
        "name": "GeoDBCoin",
        "symbol": "GEO",
        "logoURI": "https://tokens.1inch.io/0x147faf8de9d8d8daae129b187f0d02d819126750.png"
    },
    {
        "address": "0x8a854288a5976036A725879164Ca3e91d30c6A1B",
        "name": "GET",
        "symbol": "GET",
        "logoURI": "https://tokens.1inch.io/0x8a854288a5976036a725879164ca3e91d30c6a1b.png"
    },
    {
        "address": "0x9E78b8274e1D6a76a0dBbf90418894DF27cBCEb5",
        "name": "UniFi",
        "symbol": "UniFi",
        "logoURI": "https://tokens.1inch.io/0x9e78b8274e1d6a76a0dbbf90418894df27cbceb5.png"
    },
    {
        "address": "0x3A880652F47bFaa771908C07Dd8673A787dAEd3A",
        "name": "DerivaDAO",
        "symbol": "DDX",
        "logoURI": "https://tokens.1inch.io/0x3a880652f47bfaa771908c07dd8673a787daed3a.png"
    },
    {
        "address": "0x6c28AeF8977c9B773996d0e8376d2EE379446F2f",
        "name": "Quickswap",
        "symbol": "QUICK",
        "logoURI": "https://tokens.1inch.io/0x6c28aef8977c9b773996d0e8376d2ee379446f2f.png"
    },
    {
        "address": "0xa1d6Df714F91DeBF4e0802A542E13067f31b8262",
        "name": "RFOX",
        "symbol": "RFOX",
        "logoURI": "https://tokens.1inch.io/0xa1d6df714f91debf4e0802a542e13067f31b8262.png"
    },
    {
        "address": "0x275f5Ad03be0Fa221B4C6649B8AeE09a42D9412A",
        "name": "Monavale",
        "symbol": "MONA",
        "logoURI": "https://tokens.1inch.io/0x275f5ad03be0fa221b4c6649b8aee09a42d9412a.png"
    },
    {
        "address": "0x9b53E429B0baDd98ef7F01F03702986c516a5715",
        "name": "hybrixhydra",
        "symbol": "HY",
        "logoURI": "https://tokens.1inch.io/0x9b53e429b0badd98ef7f01f03702986c516a5715.png"
    },
    {
        "address": "0xe53EC727dbDEB9E2d5456c3be40cFF031AB40A55",
        "name": "SuperFarm",
        "symbol": "SUPER",
        "logoURI": "https://tokens.1inch.io/0xe53ec727dbdeb9e2d5456c3be40cff031ab40a55.png"
    },
    {
        "address": "0x6149C26Cd2f7b5CCdb32029aF817123F6E37Df5B",
        "name": "Launchpooltoken",
        "symbol": "LPOOL",
        "logoURI": "https://tokens.1inch.io/0x6149c26cd2f7b5ccdb32029af817123f6e37df5b.png"
    },
    {
        "address": "0x69af81e73A73B40adF4f3d4223Cd9b1ECE623074",
        "name": "MaskNetwork",
        "symbol": "MASKNTWRK",
        "logoURI": "https://tokens.1inch.io/0x69af81e73a73b40adf4f3d4223cd9b1ece623074.png"
    },
    {
        "address": "0x7F3EDcdD180Dbe4819Bd98FeE8929b5cEdB3AdEB",
        "name": "xToken",
        "symbol": "XTK",
        "logoURI": "https://tokens.1inch.io/0x7f3edcdd180dbe4819bd98fee8929b5cedb3adeb.png"
    },
    {
        "address": "0x7777777777697cFEECF846A76326dA79CC606517",
        "name": "xSigma",
        "symbol": "SIG",
        "logoURI": "https://tokens.1inch.io/0x7777777777697cfeecf846a76326da79cc606517.png"
    },
    {
        "address": "0xF5581dFeFD8Fb0e4aeC526bE659CFaB1f8c781dA",
        "name": "HOPRToken",
        "symbol": "HOPR",
        "logoURI": "https://tokens.1inch.io/0xf5581dfefd8fb0e4aec526be659cfab1f8c781da.png"
    },
    {
        "address": "0x6c972b70c533E2E045F333Ee28b9fFb8D717bE69",
        "name": "FoundryLogisticsToken",
        "symbol": "FRY",
        "logoURI": "https://tokens.1inch.io/0x6c972b70c533e2e045f333ee28b9ffb8d717be69.png"
    },
    {
        "address": "0x63f88A2298a5c4AEE3c216Aa6D926B184a4b2437",
        "name": "GAMECredits",
        "symbol": "GAME",
        "logoURI": "https://tokens.1inch.io/0x63f88a2298a5c4aee3c216aa6d926b184a4b2437.png"
    },
    {
        "address": "0x6De037ef9aD2725EB40118Bb1702EBb27e4Aeb24",
        "name": "RenderToken",
        "symbol": "RNDR",
        "logoURI": "https://tokens.1inch.io/0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24.png"
    },
    {
        "address": "0x21BfBDa47A0B4B5b1248c767Ee49F7caA9B23697",
        "name": "OVR",
        "symbol": "OVR",
        "logoURI": "https://tokens.1inch.io/0x21bfbda47a0b4b5b1248c767ee49f7caa9b23697.png"
    },
    {
        "address": "0x2e1E15C44Ffe4Df6a0cb7371CD00d5028e571d14",
        "name": "Mettalex",
        "symbol": "MTLX",
        "logoURI": "https://tokens.1inch.io/0x2e1e15c44ffe4df6a0cb7371cd00d5028e571d14.png"
    },
    {
        "address": "0xD478161C952357F05f0292B56012Cd8457F1cfbF",
        "name": "Polkamarkets",
        "symbol": "POLK",
        "logoURI": "https://tokens.1inch.io/0xd478161c952357f05f0292b56012cd8457f1cfbf.png"
    },
    {
        "address": "0x48Fb253446873234F2fEBbF9BdeAA72d9d387f94",
        "name": "BancorGovernanceToken",
        "symbol": "vBNT",
        "logoURI": "https://tokens.1inch.io/0x48fb253446873234f2febbf9bdeaa72d9d387f94.png"
    },
    {
        "address": "0x6e9730EcFfBed43fD876A264C982e254ef05a0DE",
        "name": "NordToken",
        "symbol": "NORD",
        "logoURI": "https://tokens.1inch.io/0x6e9730ecffbed43fd876a264c982e254ef05a0de.png"
    },
    {
        "address": "0x661Ab0Ed68000491d98C796146bcF28c20d7c559",
        "name": "ShadowsNetwork",
        "symbol": "DOWS",
        "logoURI": "https://tokens.1inch.io/0x661ab0ed68000491d98c796146bcf28c20d7c559.png"
    },
    {
        "address": "0x0CDF9acd87E940837ff21BB40c9fd55F68bba059",
        "name": "PublicMint",
        "symbol": "MINT",
        "logoURI": "https://tokens.1inch.io/0x0cdf9acd87e940837ff21bb40c9fd55f68bba059.png"
    },
    {
        "address": "0x126c121f99e1E211dF2e5f8De2d96Fa36647c855",
        "name": "DEGENIndex",
        "symbol": "DEGEN",
        "logoURI": "https://tokens.1inch.io/0x126c121f99e1e211df2e5f8de2d96fa36647c855.png"
    },
    {
        "address": "0x0c7D5ae016f806603CB1782bEa29AC69471CAb9c",
        "name": "Bifrost",
        "symbol": "BFC",
        "logoURI": "https://tokens.1inch.io/0x0c7d5ae016f806603cb1782bea29ac69471cab9c.png"
    },
    {
        "address": "0xD23Ac27148aF6A2f339BD82D0e3CFF380b5093de",
        "name": "SIREN",
        "symbol": "SI",
        "logoURI": "https://tokens.1inch.io/0xd23ac27148af6a2f339bd82d0e3cff380b5093de.png"
    },
    {
        "address": "0x4C25Bdf026Ea05F32713F00f73Ca55857Fbf6342",
        "name": "Font",
        "symbol": "FONT",
        "logoURI": "https://tokens.1inch.io/0x4c25bdf026ea05f32713f00f73ca55857fbf6342.png"
    },
    {
        "address": "0x68a3637bA6E75c0f66B61A42639c4e9fCD3D4824",
        "name": "MoonToken",
        "symbol": "MOON",
        "logoURI": "https://tokens.1inch.io/0x68a3637ba6e75c0f66b61a42639c4e9fcd3d4824.png"
    },
    {
        "address": "0x4B1E80cAC91e2216EEb63e29B957eB91Ae9C2Be8",
        "name": "Jupiter",
        "symbol": "JUP",
        "logoURI": "https://tokens.1inch.io/0x4b1e80cac91e2216eeb63e29b957eb91ae9c2be8.png"
    },
    {
        "address": "0x88EF27e69108B2633F8E1C184CC37940A075cC02",
        "name": "dego.finance",
        "symbol": "DEGO",
        "logoURI": "https://tokens.1inch.io/0x88ef27e69108b2633f8e1c184cc37940a075cc02.png"
    },
    {
        "address": "0xEE06A81a695750E71a662B51066F2c74CF4478a0",
        "name": "decentral.games",
        "symbol": "DG",
        "logoURI": "https://tokens.1inch.io/0xee06a81a695750e71a662b51066f2c74cf4478a0.png"
    },
    {
        "address": "0x0DDe6F6e345bfd23f3F419F0DFe04E93143b44FB",
        "name": "SOTA",
        "symbol": "SOTA",
        "logoURI": "https://tokens.1inch.io/0x0dde6f6e345bfd23f3f419f0dfe04e93143b44fb.png"
    },
    {
        "address": "0x739763a258640919981F9bA610AE65492455bE53",
        "name": "NodeRunners",
        "symbol": "NDR",
        "logoURI": "https://tokens.1inch.io/0x739763a258640919981f9ba610ae65492455be53.png"
    },
    {
        "address": "0x31c8EAcBFFdD875c74b94b077895Bd78CF1E64A3",
        "name": "Radicle",
        "symbol": "RAD",
        "logoURI": "https://tokens.1inch.io/0x31c8eacbffdd875c74b94b077895bd78cf1e64a3.png"
    },
    {
        "address": "0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF",
        "name": "Alchemix",
        "symbol": "ALCX",
        "logoURI": "https://tokens.1inch.io/0xdbdb4d16eda451d0503b854cf79d55697f90c8df.png"
    },
    {
        "address": "0x24A6A37576377F63f194Caa5F518a60f45b42921",
        "name": "FloatBank",
        "symbol": "BANK",
        "logoURI": "https://tokens.1inch.io/0x24a6a37576377f63f194caa5f518a60f45b42921.png"
    },
    {
        "address": "0x9B99CcA871Be05119B2012fd4474731dd653FEBe",
        "name": "Antimatter.FinanceGovernanceToken",
        "symbol": "MATTER",
        "logoURI": "https://tokens.1inch.io/0x9b99cca871be05119b2012fd4474731dd653febe.png"
    },
    {
        "address": "0xF4d861575ecC9493420A3f5a14F85B13f0b50EB3",
        "name": "FractalProtocolToken",
        "symbol": "FCL",
        "logoURI": "https://tokens.1inch.io/0xf4d861575ecc9493420a3f5a14f85b13f0b50eb3.png"
    },
    {
        "address": "0xF411903cbC70a74d22900a5DE66A2dda66507255",
        "name": "VERA",
        "symbol": "VRA",
        "logoURI": "https://tokens.1inch.io/0xf411903cbc70a74d22900a5de66a2dda66507255.png"
    },
    {
        "address": "0xe5feeaC09D36B18b3FA757E5Cf3F8dA6B8e27F4C",
        "name": "NFTINDEX",
        "symbol": "NFTI",
        "logoURI": "https://tokens.1inch.io/0xe5feeac09d36b18b3fa757e5cf3f8da6b8e27f4c.png"
    },
    {
        "address": "0xf3dcbc6D72a4E1892f7917b7C43b74131Df8480e",
        "name": "BDPToken",
        "symbol": "BDP",
        "logoURI": "https://tokens.1inch.io/0xf3dcbc6d72a4e1892f7917b7c43b74131df8480e.png"
    },
    {
        "address": "0xBBc2AE13b23d715c30720F079fcd9B4a74093505",
        "name": "EthernityChainERNToken",
        "symbol": "ERN",
        "logoURI": "https://tokens.1inch.io/0xbbc2ae13b23d715c30720f079fcd9b4a74093505.png"
    },
    {
        "address": "0x67B6D479c7bB412C54e03dCA8E1Bc6740ce6b99C",
        "name": "KylinNetwork",
        "symbol": "KYL",
        "logoURI": "https://tokens.1inch.io/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c.png"
    },
    {
        "address": "0xfb5453340C03db5aDe474b27E68B6a9c6b2823Eb",
        "name": "MetaFactory",
        "symbol": "ROBOT",
        "logoURI": "https://tokens.1inch.io/0xfb5453340c03db5ade474b27e68b6a9c6b2823eb.png"
    },
    {
        "address": "0x4C6eC08CF3fc987c6C4BEB03184D335A2dFc4042",
        "name": "Paint",
        "symbol": "PAINT",
        "logoURI": "https://tokens.1inch.io/0x4c6ec08cf3fc987c6c4beb03184d335a2dfc4042.png"
    },
    {
        "address": "0x2aECCB42482cc64E087b6D2e5Da39f5A7A7001f8",
        "name": "RulerProtocol",
        "symbol": "RULER",
        "logoURI": "https://tokens.1inch.io/0x2aeccb42482cc64e087b6d2e5da39f5a7a7001f8.png"
    },
    {
        "address": "0x7a5ce6abD131EA6B148a022CB76fc180ae3315A6",
        "name": "bAlpha",
        "symbol": "bALPHA",
        "logoURI": "https://tokens.1inch.io/0x7a5ce6abd131ea6b148a022cb76fc180ae3315a6.png"
    },
    {
        "address": "0x3506424F91fD33084466F402d5D97f05F8e3b4AF",
        "name": "chiliZ",
        "symbol": "CHZ",
        "logoURI": "https://tokens.1inch.io/0x3506424f91fd33084466f402d5d97f05f8e3b4af.png"
    },
    {
        "address": "0x41D5D79431A913C4aE7d69a668ecdfE5fF9DFB68",
        "name": "InverseDAO",
        "symbol": "INV",
        "logoURI": "https://tokens.1inch.io/0x41d5d79431a913c4ae7d69a668ecdfe5ff9dfb68.png"
    },
    {
        "address": "0xeEAA40B28A2d1b0B08f6f97bB1DD4B75316c6107",
        "name": "GOVI",
        "symbol": "GOVI",
        "logoURI": "https://tokens.1inch.io/0xeeaa40b28a2d1b0b08f6f97bb1dd4b75316c6107.png"
    },
    {
        "address": "0xCF3C8Be2e2C42331Da80EF210e9B1b307C03d36A",
        "name": "BetProtocolToken",
        "symbol": "BEPRO",
        "logoURI": "https://tokens.1inch.io/0xcf3c8be2e2c42331da80ef210e9b1b307c03d36a.png"
    },
    {
        "address": "0x1cBb83EbcD552D5EBf8131eF8c9CD9d9BAB342bC",
        "name": "Non-FungibleYearn",
        "symbol": "NFY",
        "logoURI": "https://tokens.1inch.io/0x1cbb83ebcd552d5ebf8131ef8c9cd9d9bab342bc.png"
    },
    {
        "address": "0x2216e873ea4282EbEf7A02aC5aeA220bE6391A7C",
        "name": "smol",
        "symbol": "SMOL",
        "logoURI": "https://tokens.1inch.io/0x2216e873ea4282ebef7a02ac5aea220be6391a7c.png"
    },
    {
        "address": "0x92E187a03B6CD19CB6AF293ba17F2745Fd2357D5",
        "name": "UnitProtocol",
        "symbol": "DUCKUNIT",
        "logoURI": "https://tokens.1inch.io/0x92e187a03b6cd19cb6af293ba17f2745fd2357d5.png"
    },
    {
        "address": "0x888888435FDe8e7d4c54cAb67f206e4199454c60",
        "name": "DFXToken",
        "symbol": "DFX",
        "logoURI": "https://tokens.1inch.io/0x888888435fde8e7d4c54cab67f206e4199454c60.png"
    },
    {
        "address": "0xc4De189Abf94c57f396bD4c52ab13b954FebEfD8",
        "name": "B.20",
        "symbol": "B20",
        "logoURI": "https://tokens.1inch.io/0xc4de189abf94c57f396bd4c52ab13b954febefd8.png"
    },
    {
        "address": "0x7f1F2D3dFa99678675ECE1C243d3f7bC3746db5D",
        "name": "Tapmydata",
        "symbol": "TAP",
        "logoURI": "https://tokens.1inch.io/0x7f1f2d3dfa99678675ece1c243d3f7bc3746db5d.png"
    },
    {
        "address": "0x00D1793D7C3aAE506257Ba985b34C76AaF642557",
        "name": "Tacos",
        "symbol": "TACO",
        "logoURI": "https://tokens.1inch.io/0x00d1793d7c3aae506257ba985b34c76aaf642557.png"
    },
    {
        "address": "0xED30Dd7E50EdF3581AD970eFC5D9379Ce2614AdB",
        "name": "ARCGovernanceTokenOld",
        "symbol": "ARCXOLD",
        "logoURI": "https://tokens.1inch.io/0xed30dd7e50edf3581ad970efc5d9379ce2614adb.png"
    },
    {
        "address": "0xcD91538B91B4ba7797D39a2f66E63810b50A33d0",
        "name": "ARCSTABLEx",
        "symbol": "STABLEx",
        "logoURI": "https://tokens.1inch.io/0xcd91538b91b4ba7797d39a2f66e63810b50a33d0.png"
    },
    {
        "address": "0x940a2dB1B7008B6C776d4faaCa729d6d4A4AA551",
        "name": "DuskNetwork",
        "symbol": "DUSK",
        "logoURI": "https://tokens.1inch.io/0x940a2db1b7008b6c776d4faaca729d6d4a4aa551.png"
    },
    {
        "address": "0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD",
        "name": "ETH2xFlexibleLeverageIndex",
        "symbol": "ETH2xFLI",
        "logoURI": "https://tokens.1inch.io/0xaa6e8127831c9de45ae56bb1b0d4d4da6e5665bd.png"
    },
    {
        "address": "0x50D1c9771902476076eCFc8B2A83Ad6b9355a4c9",
        "name": "FTT",
        "symbol": "FTXToken",
        "logoURI": "https://tokens.1inch.io/0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9.png"
    },
    {
        "address": "0x037A54AaB062628C9Bbae1FDB1583c195585fe41",
        "name": "LCX",
        "symbol": "LCX",
        "logoURI": "https://tokens.1inch.io/0x037a54aab062628c9bbae1fdb1583c195585fe41.png"
    },
    {
        "address": "0x544c42fBB96B39B21DF61cf322b5EDC285EE7429",
        "name": "InsurAce",
        "symbol": "INSUR",
        "logoURI": "https://tokens.1inch.io/0x544c42fbb96b39b21df61cf322b5edc285ee7429.png"
    },
    {
        "address": "0x8185Bc4757572Da2a610f887561c32298f1A5748",
        "name": "Aluna",
        "symbol": "ALN",
        "logoURI": "https://tokens.1inch.io/0x8185bc4757572da2a610f887561c32298f1a5748.png"
    },
    {
        "address": "0x1fE24F25b1Cf609B9c4e7E12D802e3640dFA5e43",
        "name": "ChainGuardiansGovernanceToken",
        "symbol": "CGG",
        "logoURI": "https://tokens.1inch.io/0x1fe24f25b1cf609b9c4e7e12d802e3640dfa5e43.png"
    },
    {
        "address": "0x32a7C02e79c4ea1008dD6564b35F131428673c41",
        "name": "CRUST",
        "symbol": "CRU",
        "logoURI": "https://tokens.1inch.io/0x32a7c02e79c4ea1008dd6564b35f131428673c41.png"
    },
    {
        "address": "0x1C9922314ED1415c95b9FD453c3818fd41867d0B",
        "name": "TOWER",
        "symbol": "TOWER",
        "logoURI": "https://tokens.1inch.io/0x1c9922314ed1415c95b9fd453c3818fd41867d0b.png"
    },
    {
        "address": "0xa8B61CfF52564758A204F841E636265bEBC8db9B",
        "name": "YieldProtocol",
        "symbol": "YIELD",
        "logoURI": "https://tokens.1inch.io/0xa8b61cff52564758a204f841e636265bebc8db9b.png"
    },
    {
        "address": "0x850aAB69f0e0171A9a49dB8BE3E71351c8247Df4",
        "name": "Konomi",
        "symbol": "KONO",
        "logoURI": "https://tokens.1inch.io/0x850aab69f0e0171a9a49db8be3e71351c8247df4.png"
    },
    {
        "address": "0xac3211a5025414Af2866FF09c23FC18bc97e79b1",
        "name": "DOVU",
        "symbol": "DOV",
        "logoURI": "https://tokens.1inch.io/0xac3211a5025414af2866ff09c23fc18bc97e79b1.png"
    },
    {
        "address": "0x73374Ea518De7adDD4c2B624C0e8B113955ee041",
        "name": "JuggernautDeFi",
        "symbol": "JGN",
        "logoURI": "https://tokens.1inch.io/0x73374ea518de7addd4c2b624c0e8b113955ee041.png"
    },
    {
        "address": "0xDea67845A51E24461D5fED8084E69B426AF3D5Db",
        "name": "HodlTree",
        "symbol": "HTRE",
        "logoURI": "https://tokens.1inch.io/0xdea67845a51e24461d5fed8084e69b426af3d5db.png"
    },
    {
        "address": "0x8B39B70E39Aa811b69365398e0aACe9bee238AEb",
        "name": "PolkaFoundry",
        "symbol": "PKF",
        "logoURI": "https://tokens.1inch.io/0x8b39b70e39aa811b69365398e0aace9bee238aeb.png"
    },
    {
        "address": "0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9",
        "name": "Deri",
        "symbol": "DERI",
        "logoURI": "https://tokens.1inch.io/0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9.png"
    },
    {
        "address": "0x14Da7b27b2E0FedEfe0a664118b0c9bc68e2E9AF",
        "name": "BlockchainCutiesUniverseGovernanceToken",
        "symbol": "BCUG",
        "logoURI": "https://tokens.1inch.io/0x14da7b27b2e0fedefe0a664118b0c9bc68e2e9af.png"
    },
    {
        "address": "0x8b0E42F366bA502d787BB134478aDfAE966C8798",
        "name": "LABSGroup",
        "symbol": "LABS",
        "logoURI": "https://tokens.1inch.io/0x8b0e42f366ba502d787bb134478adfae966c8798.png"
    },
    {
        "address": "0xCbfef8fdd706cde6F208460f2Bf39Aa9c785F05D",
        "name": "KineGovernanceToken",
        "symbol": "KINE",
        "logoURI": "https://tokens.1inch.io/0xcbfef8fdd706cde6f208460f2bf39aa9c785f05d.png"
    },
    {
        "address": "0xD9c2D319Cd7e6177336b0a9c93c21cb48d84Fb54",
        "name": "HAPI",
        "symbol": "HAPI",
        "logoURI": "https://tokens.1inch.io/0xd9c2d319cd7e6177336b0a9c93c21cb48d84fb54.png"
    },
    {
        "address": "0xc5bDdf9843308380375a611c18B50Fb9341f502A",
        "name": "veCRV-DAOyVault",
        "symbol": "yveCRVDAO",
        "logoURI": "https://tokens.1inch.io/0xc5bddf9843308380375a611c18b50fb9341f502a.png"
    },
    {
        "address": "0xB9d99C33eA2d86EC5eC6b8A4dD816EBBA64404AF",
        "name": "k21.kanon.art",
        "symbol": "K21",
        "logoURI": "https://tokens.1inch.io/0xb9d99c33ea2d86ec5ec6b8a4dd816ebba64404af.png"
    },
    {
        "address": "0x226f7b842E0F0120b7E194D05432b3fd14773a9D",
        "name": "UNIONProtocolGovernanceToken",
        "symbol": "UNN",
        "logoURI": "https://tokens.1inch.io/0x226f7b842e0f0120b7e194d05432b3fd14773a9d.png"
    },
    {
        "address": "0xa42F266684ac2aD6ecb00df95b1c76EFbb6f136c",
        "name": "CashTech",
        "symbol": "CATE",
        "logoURI": "https://tokens.1inch.io/0xa42f266684ac2ad6ecb00df95b1c76efbb6f136c.png"
    },
    {
        "address": "0xbc4171f45EF0EF66E76F979dF021a34B46DCc81d",
        "name": "Dorayaki",
        "symbol": "DORA",
        "logoURI": "https://tokens.1inch.io/0xbc4171f45ef0ef66e76f979df021a34b46dcc81d.png"
    },
    {
        "address": "0x07baC35846e5eD502aA91AdF6A9e7aA210F2DcbE",
        "name": "erowan",
        "symbol": "erowan",
        "logoURI": "https://tokens.1inch.io/0x07bac35846e5ed502aa91adf6a9e7aa210f2dcbe.png"
    },
    {
        "address": "0x7865af71cf0b288b4E7F654f4F7851EB46a2B7F8",
        "name": "Sentivate",
        "symbol": "SNTVT",
        "logoURI": "https://tokens.1inch.io/0x7865af71cf0b288b4e7f654f4f7851eb46a2b7f8.png"
    },
    {
        "address": "0xC4C2614E694cF534D407Ee49F8E44D125E4681c4",
        "name": "ChainGames",
        "symbol": "CHAIN",
        "logoURI": "https://tokens.1inch.io/0xc4c2614e694cf534d407ee49f8e44d125e4681c4.png"
    },
    {
        "address": "0x000000000000d0151E748d25b766e77efe2A6c83",
        "name": "XDEFIGovernanceToken",
        "symbol": "XDEX",
        "logoURI": "https://tokens.1inch.io/0x000000000000d0151e748d25b766e77efe2a6c83.png"
    },
    {
        "address": "0x8564653879a18C560E7C0Ea0E084c516C62F5653",
        "name": "UpBots",
        "symbol": "UBXT",
        "logoURI": "https://tokens.1inch.io/0x8564653879a18c560e7c0ea0e084c516c62f5653.png"
    },
    {
        "address": "0x9F9c8ec3534c3cE16F928381372BfbFBFb9F4D24",
        "name": "GraphLinq",
        "symbol": "GLQ",
        "logoURI": "https://tokens.1inch.io/0x9f9c8ec3534c3ce16f928381372bfbfbfb9f4d24.png"
    },
    {
        "address": "0xc690F7C7FcfFA6a82b79faB7508c466FEfdfc8c5",
        "name": "Lympotokens",
        "symbol": "LYM",
        "logoURI": "https://tokens.1inch.io/0xc690f7c7fcffa6a82b79fab7508c466fefdfc8c5.png"
    },
    {
        "address": "0x3D3D35bb9bEC23b06Ca00fe472b50E7A4c692C30",
        "name": "Vidya",
        "symbol": "VIDYA",
        "logoURI": "https://tokens.1inch.io/0x3d3d35bb9bec23b06ca00fe472b50e7a4c692c30.png"
    },
    {
        "address": "0xFc979087305A826c2B2a0056cFAbA50aad3E6439",
        "name": "DAFIToken",
        "symbol": "DAFI",
        "logoURI": "https://tokens.1inch.io/0xfc979087305a826c2b2a0056cfaba50aad3e6439.png"
    },
    {
        "address": "0xCd2828fc4D8E8a0eDe91bB38CF64B1a81De65Bf6",
        "name": "OddzToken",
        "symbol": "ODDZ",
        "logoURI": "https://tokens.1inch.io/0xcd2828fc4d8e8a0ede91bb38cf64b1a81de65bf6.png"
    },
    {
        "address": "0x72630B1e3B42874bf335020Ba0249e3E9e47Bafc",
        "name": "PaypolitanToken",
        "symbol": "EPAN",
        "logoURI": "https://tokens.1inch.io/0x72630b1e3b42874bf335020ba0249e3e9e47bafc.png"
    },
    {
        "address": "0xa92E7c82B11d10716aB534051B271D2f6aEf7Df5",
        "name": "AraToken",
        "symbol": "ARA",
        "logoURI": "https://tokens.1inch.io/0xa92e7c82b11d10716ab534051b271d2f6aef7df5.png"
    },
    {
        "address": "0xc3D088842DcF02C13699F936BB83DFBBc6f721Ab",
        "name": "VoucherEthereum",
        "symbol": "vETH",
        "logoURI": "https://tokens.1inch.io/0xc3d088842dcf02c13699f936bb83dfbbc6f721ab.png"
    },
    {
        "address": "0xCA0e7269600d353F70b14Ad118A49575455C0f2f",
        "name": "AMLT",
        "symbol": "AMLT",
        "logoURI": "https://tokens.1inch.io/0xca0e7269600d353f70b14ad118a49575455c0f2f.png"
    },
    {
        "address": "0xceb286C9604c542d3cc08b41AA6C9675B078A832",
        "name": "VortexDeFi",
        "symbol": "VTX",
        "logoURI": "https://tokens.1inch.io/0xceb286c9604c542d3cc08b41aa6c9675b078a832.png"
    },
    {
        "address": "0xbA4cFE5741b357FA371b506e5db0774aBFeCf8Fc",
        "name": "vVSPpool",
        "symbol": "vVSP",
        "logoURI": "https://tokens.1inch.io/0xba4cfe5741b357fa371b506e5db0774abfecf8fc.png"
    },
    {
        "address": "0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B",
        "name": "Tribe",
        "symbol": "TRIBE",
        "logoURI": "https://tokens.1inch.io/0xc7283b66eb1eb5fb86327f08e1b5816b0720212b.png"
    },
    {
        "address": "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
        "name": "FeiUSD",
        "symbol": "FEI",
        "logoURI": "https://tokens.1inch.io/0x956f47f50a910163d8bf957cf5846d573e7f87ca.png"
    },
    {
        "address": "0x626E8036dEB333b408Be468F951bdB42433cBF18",
        "name": "AIOZNetwork",
        "symbol": "AIOZ",
        "logoURI": "https://tokens.1inch.io/0x626e8036deb333b408be468f951bdb42433cbf18.png"
    },
    {
        "address": "0xA0CF46eb152656C7090e769916eb44a138aaa406",
        "name": "Spheroid",
        "symbol": "SPH",
        "logoURI": "https://tokens.1inch.io/0xa0cf46eb152656c7090e769916eb44a138aaa406.png"
    },
    {
        "address": "0x1796ae0b0fa4862485106a0de9b654eFE301D0b2",
        "name": "Polkamon",
        "symbol": "PMON",
        "logoURI": "https://tokens.1inch.io/0x1796ae0b0fa4862485106a0de9b654efe301d0b2.png"
    },
    {
        "address": "0xf293d23BF2CDc05411Ca0edDD588eb1977e8dcd4",
        "name": "Sylo",
        "symbol": "SYLO",
        "logoURI": "https://tokens.1inch.io/0xf293d23bf2cdc05411ca0eddd588eb1977e8dcd4.png"
    },
    {
        "address": "0x1735Db6AB5BAa19eA55d0AdcEeD7bcDc008B3136",
        "name": "UREEQAToken",
        "symbol": "URQA",
        "logoURI": "https://tokens.1inch.io/0x1735db6ab5baa19ea55d0adceed7bcdc008b3136.png"
    },
    {
        "address": "0x99295f1141d58A99e939F7bE6BBe734916a875B8",
        "name": "LinkPool",
        "symbol": "LPL",
        "logoURI": "https://tokens.1inch.io/0x99295f1141d58a99e939f7be6bbe734916a875b8.png"
    },
    {
        "address": "0xFF75CEd57419bcaEBe5F05254983b013B0646eF5",
        "name": "CookToken",
        "symbol": "COOK",
        "logoURI": "https://tokens.1inch.io/0xff75ced57419bcaebe5f05254983b013b0646ef5.png"
    },
    {
        "address": "0x26c8AFBBFE1EBaca03C2bB082E69D0476Bffe099",
        "name": "CellframeToken",
        "symbol": "CELL",
        "logoURI": "https://tokens.1inch.io/0x26c8afbbfe1ebaca03c2bb082e69d0476bffe099.png"
    },
    {
        "address": "0x5B09A0371C1DA44A8E24D36Bf5DEb1141a84d875",
        "name": "MADToken",
        "symbol": "MAD",
        "logoURI": "https://tokens.1inch.io/0x5b09a0371c1da44a8e24d36bf5deb1141a84d875.png"
    },
    {
        "address": "0xc834Fa996fA3BeC7aAD3693af486ae53D8aA8B50",
        "name": "Convergence",
        "symbol": "CONV",
        "logoURI": "https://tokens.1inch.io/0xc834fa996fa3bec7aad3693af486ae53d8aa8b50.png"
    },
    {
        "address": "0x106538CC16F938776c7c180186975BCA23875287",
        "name": "BASv2",
        "symbol": "BASv2",
        "logoURI": "https://tokens.1inch.io/0x106538cc16f938776c7c180186975bca23875287.png"
    },
    {
        "address": "0x3505F494c3f0fed0B594E01Fa41Dd3967645ca39",
        "name": "SWARM",
        "symbol": "SWM",
        "logoURI": "https://tokens.1inch.io/0x3505f494c3f0fed0b594e01fa41dd3967645ca39.png"
    },
    {
        "address": "0xFbbE9b1142C699512545f47937Ee6fae0e4B0aA9",
        "name": "EDDA",
        "symbol": "EDDA",
        "logoURI": "https://tokens.1inch.io/0xfbbe9b1142c699512545f47937ee6fae0e4b0aa9.png"
    },
    {
        "address": "0x29CbD0510EEc0327992CD6006e63F9Fa8E7f33B7",
        "name": "TidalToken",
        "symbol": "TIDAL",
        "logoURI": "https://tokens.1inch.io/0x29cbd0510eec0327992cd6006e63f9fa8e7f33b7.png"
    },
    {
        "address": "0xb78B3320493a4EFaa1028130C5Ba26f0B6085Ef8",
        "name": "DraculaToken",
        "symbol": "DRC2",
        "logoURI": "https://tokens.1inch.io/0xb78b3320493a4efaa1028130c5ba26f0b6085ef8.png"
    },
    {
        "address": "0x55296f69f40Ea6d20E478533C15A6B08B654E758",
        "name": "XYOracle",
        "symbol": "XYO",
        "logoURI": "https://tokens.1inch.io/0x55296f69f40ea6d20e478533c15a6b08b654e758.png"
    },
    {
        "address": "0x0f71B8De197A1C84d31de0F1fA7926c365F052B3",
        "name": "ArconaDistributionContract",
        "symbol": "ARCONA",
        "logoURI": "https://tokens.1inch.io/0x0f71b8de197a1c84d31de0f1fa7926c365f052b3.png"
    },
    {
        "address": "0xA31B1767e09f842ECFd4bc471Fe44F830E3891AA",
        "name": "ROOBEE",
        "symbol": "ROOBEE",
        "logoURI": "https://tokens.1inch.io/0xa31b1767e09f842ecfd4bc471fe44f830e3891aa.png"
    },
    {
        "address": "0xf3AE5d769e153Ef72b4e3591aC004E89F48107a1",
        "name": "DeeperNetwork",
        "symbol": "DPR",
        "logoURI": "https://tokens.1inch.io/0xf3ae5d769e153ef72b4e3591ac004e89f48107a1.png"
    },
    {
        "address": "0xd9b312D77Bc7BEd9B9CecB56636300bED4Fe5Ce9",
        "name": "Gains",
        "symbol": "GAINS",
        "logoURI": "https://tokens.1inch.io/0xd9b312d77bc7bed9b9cecb56636300bed4fe5ce9.png"
    },
    {
        "address": "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
        "name": "LUSDStablecoin",
        "symbol": "LUSD",
        "logoURI": "https://tokens.1inch.io/0x5f98805a4e8be255a32880fdec7f6728c6568ba0.png"
    },
    {
        "address": "0x1Da87b114f35E1DC91F72bF57fc07A768Ad40Bb0",
        "name": "Equalizer",
        "symbol": "EQZ",
        "logoURI": "https://tokens.1inch.io/0x1da87b114f35e1dc91f72bf57fc07a768ad40bb0.png"
    },
    {
        "address": "0xe0B9a2C3E9f40CF74B2C7F591B2b0CCa055c3112",
        "name": "GenShards",
        "symbol": "GS",
        "logoURI": "https://tokens.1inch.io/0xe0b9a2c3e9f40cf74b2c7f591b2b0cca055c3112.png"
    },
    {
        "address": "0x88ACDd2a6425c3FaAE4Bc9650Fd7E27e0Bebb7aB",
        "name": "Alchemist",
        "symbol": "MIST",
        "logoURI": "https://tokens.1inch.io/0x88acdd2a6425c3faae4bc9650fd7e27e0bebb7ab.png"
    },
    {
        "address": "0x3d6F0DEa3AC3C607B3998e6Ce14b6350721752d9",
        "name": "CARD.STARTER",
        "symbol": "CARDS",
        "logoURI": "https://tokens.1inch.io/0x3d6f0dea3ac3c607b3998e6ce14b6350721752d9.png"
    },
    {
        "address": "0x33840024177A7DacA3468912363BeD8b425015c5",
        "name": "ethboxToken",
        "symbol": "EBOX",
        "logoURI": "https://tokens.1inch.io/0x33840024177a7daca3468912363bed8b425015c5.png"
    },
    {
        "address": "0xEC213F83defB583af3A000B1c0ada660b1902A0F",
        "name": "Presearch",
        "symbol": "PRE",
        "logoURI": "https://tokens.1inch.io/0xec213f83defb583af3a000b1c0ada660b1902a0f.png"
    },
    {
        "address": "0xf418588522d5dd018b425E472991E52EBBeEEEEE",
        "name": "EthereumPushNotificationService",
        "symbol": "PUSH",
        "logoURI": "https://tokens.1inch.io/0xf418588522d5dd018b425e472991e52ebbeeeeee.png"
    },
    {
        "address": "0xC477D038d5420C6A9e0b031712f61c5120090de9",
        "name": "BosonToken",
        "symbol": "BOSON",
        "logoURI": "https://tokens.1inch.io/0xc477d038d5420c6a9e0b031712f61c5120090de9.png"
    },
    {
        "address": "0xDd1Ad9A21Ce722C151A836373baBe42c868cE9a4",
        "name": "UniversalBasicIncome",
        "symbol": "UBI",
        "logoURI": "https://tokens.1inch.io/0xdd1ad9a21ce722c151a836373babe42c868ce9a4.png"
    },
    {
        "address": "0x53C8395465A84955c95159814461466053DedEDE",
        "name": "DeGateToken",
        "symbol": "DG2",
        "logoURI": "https://tokens.1inch.io/0x53c8395465a84955c95159814461466053dedede.png"
    },
    {
        "address": "0x16c52CeeCE2ed57dAd87319D91B5e3637d50aFa4",
        "name": "TCAPToken",
        "symbol": "TCAP",
        "logoURI": "https://tokens.1inch.io/0x16c52ceece2ed57dad87319d91b5e3637d50afa4.png"
    },
    {
        "address": "0x44564d0bd94343f72E3C8a0D22308B7Fa71DB0Bb",
        "name": "BasketDAOGov",
        "symbol": "BASK",
        "logoURI": "https://tokens.1inch.io/0x44564d0bd94343f72e3c8a0d22308b7fa71db0bb.png"
    },
    {
        "address": "0x5Cf04716BA20127F1E2297AdDCf4B5035000c9eb",
        "name": "NKN",
        "symbol": "NKN",
        "logoURI": "https://tokens.1inch.io/0x5cf04716ba20127f1e2297addcf4b5035000c9eb.png"
    },
    {
        "address": "0x4730fB1463A6F1F44AEB45F6c5c422427f37F4D0",
        "name": "The4thPillarToken",
        "symbol": "FOUR",
        "logoURI": "https://tokens.1inch.io/0x4730fb1463a6f1f44aeb45f6c5c422427f37f4d0.png"
    },
    {
        "address": "0x77FbA179C79De5B7653F68b5039Af940AdA60ce0",
        "name": "AmpleforthGovernance",
        "symbol": "FORTH",
        "logoURI": "https://tokens.1inch.io/0x77fba179c79de5b7653f68b5039af940ada60ce0.png"
    },
    {
        "address": "0xE796d6ca1ceb1b022EcE5296226BF784110031Cd",
        "name": "BlindBoxesToken",
        "symbol": "BLES",
        "logoURI": "https://tokens.1inch.io/0xe796d6ca1ceb1b022ece5296226bf784110031cd.png"
    },
    {
        "address": "0x48C3399719B582dD63eB5AADf12A40B4C3f52FA2",
        "name": "StakeWise",
        "symbol": "SWISE",
        "logoURI": "https://tokens.1inch.io/0x48c3399719b582dd63eb5aadf12a40b4c3f52fa2.png"
    },
    {
        "address": "0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202",
        "name": "KyberNetworkCrystalv2",
        "symbol": "KNC",
        "logoURI": "https://tokens.1inch.io/0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202.png"
    },
    {
        "address": "0x0adA190c81b814548ddC2F6AdC4a689ce7C1FE73",
        "name": "yAxisV2",
        "symbol": "YAXIS",
        "logoURI": "https://tokens.1inch.io/0x0ada190c81b814548ddc2f6adc4a689ce7c1fe73.png"
    },
    {
        "address": "0xff56Cc6b1E6dEd347aA0B7676C85AB0B3D08B0FA",
        "name": "Orbs",
        "symbol": "ORBS",
        "logoURI": "https://tokens.1inch.io/0xff56cc6b1e6ded347aa0b7676c85ab0b3d08b0fa.png"
    },
    {
        "address": "0xa02120696c7B8fE16C09C749E4598819b2B0E915",
        "name": "WirexToken",
        "symbol": "WXT",
        "logoURI": "https://tokens.1inch.io/0xa02120696c7b8fe16c09c749e4598819b2b0e915.png"
    },
    {
        "address": "0x28A06c02287e657ec3F8e151A13C36A1D43814b0",
        "name": "BAG",
        "symbol": "BAG",
        "logoURI": "https://tokens.1inch.io/0x28a06c02287e657ec3f8e151a13c36a1d43814b0.png"
    },
    {
        "address": "0x2F109021aFe75B949429fe30523Ee7C0D5B27207",
        "name": "OCC",
        "symbol": "OCC",
        "logoURI": "https://tokens.1inch.io/0x2f109021afe75b949429fe30523ee7c0d5b27207.png"
    },
    {
        "address": "0x767FE9EDC9E0dF98E07454847909b5E959D7ca0E",
        "name": "Illuvium",
        "symbol": "ILV",
        "logoURI": "https://tokens.1inch.io/0x767fe9edc9e0df98e07454847909b5e959d7ca0e.png"
    },
    {
        "address": "0x5218E472cFCFE0b64A064F055B43b4cdC9EfD3A6",
        "name": "UnFederalReserveToken",
        "symbol": "eRSDL",
        "logoURI": "https://tokens.1inch.io/0x5218e472cfcfe0b64a064f055b43b4cdc9efd3a6.png"
    },
    {
        "address": "0xf16e81dce15B08F326220742020379B855B87DF9",
        "name": "IceToken",
        "symbol": "ICE",
        "logoURI": "https://tokens.1inch.io/0xf16e81dce15b08f326220742020379b855b87df9.png"
    },
    {
        "address": "0xE4CFE9eAa8Cdb0942A80B7bC68fD8Ab0F6D44903",
        "name": "XEND",
        "symbol": "XEND",
        "logoURI": "https://tokens.1inch.io/0xe4cfe9eaa8cdb0942a80b7bc68fd8ab0f6d44903.png"
    },
    {
        "address": "0x5a666c7d92E5fA7Edcb6390E4efD6d0CDd69cF37",
        "name": "UnmarshalToken",
        "symbol": "MARSH",
        "logoURI": "https://tokens.1inch.io/0x5a666c7d92e5fa7edcb6390e4efd6d0cdd69cf37.png"
    },
    {
        "address": "0x7FF4169a6B5122b664c51c95727d87750eC07c84",
        "name": "10SetToken",
        "symbol": "10SET",
        "logoURI": "https://tokens.1inch.io/0x7ff4169a6b5122b664c51c95727d87750ec07c84.png"
    },
    {
        "address": "0x1DE5e000C41C8d35b9f1f4985C23988f05831057",
        "name": "BonFi",
        "symbol": "BNF",
        "logoURI": "https://tokens.1inch.io/0x1de5e000c41c8d35b9f1f4985c23988f05831057.png"
    },
    {
        "address": "0x7DD9c5Cba05E151C895FDe1CF355C9A1D5DA6429",
        "name": "GolemNetworkToken",
        "symbol": "GLM",
        "logoURI": "https://tokens.1inch.io/0x7dd9c5cba05e151c895fde1cf355c9a1d5da6429.png"
    },
    {
        "address": "0x90DE74265a416e1393A450752175AED98fe11517",
        "name": "UnlockDiscountToken",
        "symbol": "UDT",
        "logoURI": "https://tokens.1inch.io/0x90de74265a416e1393a450752175aed98fe11517.png"
    },
    {
        "address": "0x808507121B80c02388fAd14726482e061B8da827",
        "name": "Pendle",
        "symbol": "PENDLE",
        "logoURI": "https://tokens.1inch.io/0x808507121b80c02388fad14726482e061b8da827.png"
    },
    {
        "address": "0x15B543e986b8c34074DFc9901136d9355a537e7E",
        "name": "StudentCoin",
        "symbol": "STC",
        "logoURI": "https://tokens.1inch.io/0x15b543e986b8c34074dfc9901136d9355a537e7e.png"
    },
    {
        "address": "0x16ECCfDbb4eE1A85A33f3A9B21175Cd7Ae753dB4",
        "name": "Route",
        "symbol": "ROUTE",
        "logoURI": "https://tokens.1inch.io/0x16eccfdbb4ee1a85a33f3a9b21175cd7ae753db4.png"
    },
    {
        "address": "0x1614F18Fc94f47967A3Fbe5FfcD46d4e7Da3D787",
        "name": "PAIDNetwork",
        "symbol": "PAID",
        "logoURI": "https://tokens.1inch.io/0x1614f18fc94f47967a3fbe5ffcd46d4e7da3d787.png"
    },
    {
        "address": "0x182F4c4C97cd1c24E1Df8FC4c053E5C47bf53Bef",
        "name": "keyTangoToken",
        "symbol": "TANGO",
        "logoURI": "https://tokens.1inch.io/0x182f4c4c97cd1c24e1df8fc4c053e5c47bf53bef.png"
    },
    {
        "address": "0x7BEF710a5759d197EC0Bf621c3Df802C2D60D848",
        "name": "SPLYTSHOPX",
        "symbol": "SHOPX",
        "logoURI": "https://tokens.1inch.io/0x7bef710a5759d197ec0bf621c3df802c2d60d848.png"
    },
    {
        "address": "0x358AA737e033F34df7c54306960a38d09AaBd523",
        "name": "AresProtocol",
        "symbol": "ARES",
        "logoURI": "https://tokens.1inch.io/0x358aa737e033f34df7c54306960a38d09aabd523.png"
    },
    {
        "address": "0x321C2fE4446C7c963dc41Dd58879AF648838f98D",
        "name": "Cryptex",
        "symbol": "CTX",
        "logoURI": "https://tokens.1inch.io/0x321c2fe4446c7c963dc41dd58879af648838f98d.png"
    },
    {
        "address": "0x2d94AA3e47d9D5024503Ca8491fcE9A2fB4DA198",
        "name": "BanklessToken",
        "symbol": "BANKBANKLESS",
        "logoURI": "https://tokens.1inch.io/0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198.png"
    },
    {
        "address": "0x0B498ff89709d3838a063f1dFA463091F9801c2b",
        "name": "BTC2xFlexibleLeverageIndex",
        "symbol": "BTC2xFLI",
        "logoURI": "https://tokens.1inch.io/0x0b498ff89709d3838a063f1dfa463091f9801c2b.png"
    },
    {
        "address": "0x841FB148863454A3b3570f515414759BE9091465",
        "name": "ShihTzu",
        "symbol": "SHIH",
        "logoURI": "https://tokens.1inch.io/0x841fb148863454a3b3570f515414759be9091465.png"
    },
    {
        "address": "0xEe9801669C6138E84bD50dEB500827b776777d28",
        "name": "O3SwapToken",
        "symbol": "O3",
        "logoURI": "https://tokens.1inch.io/0xee9801669c6138e84bd50deb500827b776777d28.png"
    },
    {
        "address": "0xB1191F691A355b43542Bea9B8847bc73e7Abb137",
        "name": "Kirobo",
        "symbol": "KIRO",
        "logoURI": "https://tokens.1inch.io/0xb1191f691a355b43542bea9b8847bc73e7abb137.png"
    },
    {
        "address": "0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B",
        "name": "ConvexToken",
        "symbol": "CVX",
        "logoURI": "https://tokens.1inch.io/0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b.png"
    },
    {
        "address": "0xA3c4Dc4A9cE2a6B40B57F25F8b50DeCc2c64deC2",
        "name": "SeedSwapToken",
        "symbol": "SNFT",
        "logoURI": "https://tokens.1inch.io/0xa3c4dc4a9ce2a6b40b57f25f8b50decc2c64dec2.png"
    },
    {
        "address": "0xFeea0bDd3D07eb6FE305938878C0caDBFa169042",
        "name": "8PAYNetwork",
        "symbol": "8PAY",
        "logoURI": "https://tokens.1inch.io/0xfeea0bdd3d07eb6fe305938878c0cadbfa169042.png"
    },
    {
        "address": "0xDe30da39c46104798bB5aA3fe8B9e0e1F348163F",
        "name": "Gitcoin",
        "symbol": "GTC",
        "logoURI": "https://tokens.1inch.io/0xde30da39c46104798bb5aa3fe8b9e0e1f348163f.png"
    },
    {
        "address": "0x01e0E2e61f554eCAaeC0cC933E739Ad90f24a86d",
        "name": "Graviton",
        "symbol": "GTON",
        "logoURI": "https://tokens.1inch.io/0x01e0e2e61f554ecaaec0cc933e739ad90f24a86d.png"
    },
    {
        "address": "0xBC6DA0FE9aD5f3b0d58160288917AA56653660E9",
        "name": "AlchemixUSD",
        "symbol": "alUSD",
        "logoURI": "https://tokens.1inch.io/0xbc6da0fe9ad5f3b0d58160288917aa56653660e9.png"
    },
    {
        "address": "0x7697B462A7c4Ff5F8b55BDBC2F4076c2aF9cF51A",
        "name": "Sarcophagus",
        "symbol": "SARCO",
        "logoURI": "https://tokens.1inch.io/0x7697b462a7c4ff5f8b55bdbc2f4076c2af9cf51a.png"
    },
    {
        "address": "0x677ddbd918637E5F2c79e164D402454dE7dA8619",
        "name": "VUSD",
        "symbol": "VUSD",
        "logoURI": "https://tokens.1inch.io/0x677ddbd918637e5f2c79e164d402454de7da8619.png"
    },
    {
        "address": "0x761D38e5ddf6ccf6Cf7c55759d5210750B5D60F3",
        "name": "Dogelon",
        "symbol": "ELON",
        "logoURI": "https://tokens.1inch.io/0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3.png"
    },
    {
        "address": "0x0563DCe613D559a47877fFD1593549fb9d3510D6",
        "name": "SuperBid",
        "symbol": "SUPERBID",
        "logoURI": "https://tokens.1inch.io/0x0563dce613d559a47877ffd1593549fb9d3510d6.png"
    },
    {
        "address": "0x2Ab6Bb8408ca3199B8Fa6C92d5b455F820Af03c4",
        "name": "TE-FOODTustChain",
        "symbol": "TONE",
        "logoURI": "https://tokens.1inch.io/0x2ab6bb8408ca3199b8fa6c92d5b455f820af03c4.png"
    },
    {
        "address": "0xEB58343b36C7528F23CAAe63a150240241310049",
        "name": "Nimbus",
        "symbol": "NBU",
        "logoURI": "https://tokens.1inch.io/0xeb58343b36c7528f23caae63a150240241310049.png"
    },
    {
        "address": "0x27C70Cd1946795B66be9d954418546998b546634",
        "name": "DOGEKILLER",
        "symbol": "LEASH",
        "logoURI": "https://tokens.1inch.io/0x27c70cd1946795b66be9d954418546998b546634.png"
    },
    {
        "address": "0x0AbdAce70D3790235af448C88547603b945604ea",
        "name": "district0xNetworkToken",
        "symbol": "DNT",
        "logoURI": "https://tokens.1inch.io/0x0abdace70d3790235af448c88547603b945604ea.png"
    },
    {
        "address": "0xdef1fac7Bf08f173D286BbBDcBeeADe695129840",
        "name": "DefiFactoryToken",
        "symbol": "DEFT",
        "logoURI": "https://tokens.1inch.io/0xdef1fac7bf08f173d286bbbdcbeeade695129840.png"
    },
    {
        "address": "0x9695e0114e12C0d3A3636fAb5A18e6b737529023",
        "name": "DFYNToken",
        "symbol": "DFYN",
        "logoURI": "https://tokens.1inch.io/0x9695e0114e12c0d3a3636fab5a18e6b737529023.png"
    },
    {
        "address": "0x72e364F2ABdC788b7E918bc238B21f109Cd634D7",
        "name": "MetaverseIndex",
        "symbol": "MVI",
        "logoURI": "https://tokens.1inch.io/0x72e364f2abdc788b7e918bc238b21f109cd634d7.png"
    },
    {
        "address": "0x3301Ee63Fb29F863f2333Bd4466acb46CD8323E6",
        "name": "AkitaInu",
        "symbol": "AKITA",
        "logoURI": "https://tokens.1inch.io/0x3301ee63fb29f863f2333bd4466acb46cd8323e6.png"
    },
    {
        "address": "0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D",
        "name": "LQTY",
        "symbol": "LQTY",
        "logoURI": "https://tokens.1inch.io/0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d.png"
    },
    {
        "address": "0x87DE305311D5788e8da38D19bb427645b09CB4e5",
        "name": "Verox",
        "symbol": "VRX",
        "logoURI": "https://tokens.1inch.io/0x87de305311d5788e8da38d19bb427645b09cb4e5.png"
    },
    {
        "address": "0xf65B5C5104c4faFD4b709d9D60a185eAE063276c",
        "name": "Truebit",
        "symbol": "TRUTruebit",
        "logoURI": "https://tokens.1inch.io/0xf65b5c5104c4fafd4b709d9d60a185eae063276c.png"
    },
    {
        "address": "0x15874d65e649880c2614e7a480cb7c9A55787FF6",
        "name": "EthereumMax",
        "symbol": "eMax",
        "logoURI": "https://tokens.1inch.io/0x15874d65e649880c2614e7a480cb7c9a55787ff6.png"
    },
    {
        "address": "0x6f40d4A6237C257fff2dB00FA0510DeEECd303eb",
        "name": "Instadapp",
        "symbol": "INST",
        "logoURI": "https://tokens.1inch.io/0x6f40d4a6237c257fff2db00fa0510deeecd303eb.png"
    },
    {
        "address": "0x8CB924583681cbFE487A62140a994A49F833c244",
        "name": "SwappToken",
        "symbol": "SWAPP",
        "logoURI": "https://tokens.1inch.io/0x8cb924583681cbfe487a62140a994a49f833c244.png"
    },
    {
        "address": "0x10633216E7E8281e33c86F02Bf8e565a635D9770",
        "name": "Dvision",
        "symbol": "DVI",
        "logoURI": "https://tokens.1inch.io/0x10633216e7e8281e33c86f02bf8e565a635d9770.png"
    },
    {
        "address": "0xcaDC0acd4B445166f12d2C07EAc6E2544FbE2Eef",
        "name": "CADCoin",
        "symbol": "CADC",
        "logoURI": "https://tokens.1inch.io/0xcadc0acd4b445166f12d2c07eac6e2544fbe2eef.png"
    },
    {
        "address": "0x1321f1f1aa541A56C31682c57b80ECfCCd9bB288",
        "name": "ARCxGovernanceToken",
        "symbol": "ARCX",
        "logoURI": "https://tokens.1inch.io/0x1321f1f1aa541a56c31682c57b80ecfccd9bb288.png"
    },
    {
        "address": "0xA9536B9c75A9E0faE3B56a96AC8EdF76AbC91978",
        "name": "AmunDeFiIndex",
        "symbol": "DFI",
        "logoURI": "https://tokens.1inch.io/0xa9536b9c75a9e0fae3b56a96ac8edf76abc91978.png"
    },
    {
        "address": "0x1660F10B4D610cF482194356eCe8eFD65B15bA83",
        "name": "AmunDeFiMomentumIndex",
        "symbol": "DMX",
        "logoURI": "https://tokens.1inch.io/0x1660f10b4d610cf482194356ece8efd65b15ba83.png"
    },
    {
        "address": "0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272",
        "name": "SushiBar",
        "symbol": "xSUSHI",
        "logoURI": "https://tokens.1inch.io/0x8798249c2e607446efb7ad49ec89dd1865ff4272.png"
    },
    {
        "address": "0xA9B1Eb5908CfC3cdf91F9B8B3a74108598009096",
        "name": "BounceToken",
        "symbol": "Auction",
        "logoURI": "https://tokens.1inch.io/0xa9b1eb5908cfc3cdf91f9b8b3a74108598009096.png"
    },
    {
        "address": "0x6595b8fD9C920C81500dCa94e53Cdc712513Fb1f",
        "name": "Olyseum",
        "symbol": "OLY",
        "logoURI": "https://tokens.1inch.io/0x6595b8fd9c920c81500dca94e53cdc712513fb1f.png"
    },
    {
        "address": "0xC52C326331E9Ce41F04484d3B5E5648158028804",
        "name": "ZENExchangeToken",
        "symbol": "ZCX",
        "logoURI": "https://tokens.1inch.io/0xc52c326331e9ce41f04484d3b5e5648158028804.png"
    },
    {
        "address": "0x3431F91b3a388115F00C5Ba9FdB899851D005Fb5",
        "name": "GeroWallet",
        "symbol": "GERO",
        "logoURI": "https://tokens.1inch.io/0x3431f91b3a388115f00c5ba9fdb899851d005fb5.png"
    },
    {
        "address": "0x474021845C4643113458ea4414bdb7fB74A01A77",
        "name": "UnoRe",
        "symbol": "UNO",
        "logoURI": "https://tokens.1inch.io/0x474021845c4643113458ea4414bdb7fb74a01a77.png"
    },
    {
        "address": "0xcAaa93712BDAc37f736C323C93D4D5fDEFCc31CC",
        "name": "CryptalDash",
        "symbol": "CRD",
        "logoURI": "https://tokens.1inch.io/0xcaaa93712bdac37f736c323c93d4d5fdefcc31cc.png"
    },
    {
        "address": "0x1F8A626883d7724DBd59eF51CBD4BF1Cf2016D13",
        "name": "Jigstack",
        "symbol": "STAK",
        "logoURI": "https://tokens.1inch.io/0x1f8a626883d7724dbd59ef51cbd4bf1cf2016d13.png"
    },
    {
        "address": "0x33349B282065b0284d756F0577FB39c158F935e6",
        "name": "MapleToken",
        "symbol": "MPL",
        "logoURI": "https://tokens.1inch.io/0x33349b282065b0284d756f0577fb39c158f935e6.png"
    },
    {
        "address": "0x6243d8CEA23066d098a15582d81a598b4e8391F4",
        "name": "FlexUngovernanceToken",
        "symbol": "FLX",
        "logoURI": "https://tokens.1inch.io/0x6243d8cea23066d098a15582d81a598b4e8391f4.png"
    },
    {
        "address": "0xC53342fd7575f572b0fF4569e31941A5B821aC76",
        "name": "ETHVolatilityIndex",
        "symbol": "ETHV",
        "logoURI": "https://tokens.1inch.io/0xc53342fd7575f572b0ff4569e31941a5b821ac76.png"
    },
    {
        "address": "0x3A707d56D538e85B783E8CE12B346e7fB6511F90",
        "name": "InverseETHVolatilityIndex",
        "symbol": "iETHV",
        "logoURI": "https://tokens.1inch.io/0x3a707d56d538e85b783e8ce12b346e7fb6511f90.png"
    },
    {
        "address": "0x51B0bcBEFf204B39Ce792D1E16767Fe6F7631970",
        "name": "BTCVolatilityIndex",
        "symbol": "BTCV",
        "logoURI": "https://tokens.1inch.io/0x51b0bcbeff204b39ce792d1e16767fe6f7631970.png"
    },
    {
        "address": "0x2590F1fD14Ef8Bb0A46C7A889c4CBc146510f9C3",
        "name": "InverseBTCVolatilityIndex",
        "symbol": "iBTCV",
        "logoURI": "https://tokens.1inch.io/0x2590f1fd14ef8bb0a46c7a889c4cbc146510f9c3.png"
    },
    {
        "address": "0xfB7B4564402E5500dB5bB6d63Ae671302777C75a",
        "name": "DEXTools",
        "symbol": "DEXT",
        "logoURI": "https://tokens.1inch.io/0xfb7b4564402e5500db5bb6d63ae671302777c75a.png"
    },
    {
        "address": "0x853Bb55c1f469902F088A629db8C8803A9BE3857",
        "name": "Stable1INCH",
        "symbol": "one1INCH",
        "logoURI": "https://tokens.1inch.io/0x853bb55c1f469902f088a629db8c8803a9be3857.png"
    },
    {
        "address": "0xDDdddd4301A082e62E84e43F474f044423921918",
        "name": "DeversiFiToken",
        "symbol": "DVF",
        "logoURI": "https://tokens.1inch.io/0xdddddd4301a082e62e84e43f474f044423921918.png"
    },
    {
        "address": "0x6B4c7A5e3f0B99FCD83e9c089BDDD6c7FCe5c611",
        "name": "Million",
        "symbol": "MM2",
        "logoURI": "https://tokens.1inch.io/0x6b4c7a5e3f0b99fcd83e9c089bddd6c7fce5c611.png"
    },
    {
        "address": "0x011864D37035439E078d64630777Ec518138aF05",
        "name": "ZerogokiToken",
        "symbol": "REI",
        "logoURI": "https://tokens.1inch.io/0x011864d37035439e078d64630777ec518138af05.png"
    },
    {
        "address": "0x76417E660DF3E5c90C0361674C192da152A806E4",
        "name": "ZerogokiUSD",
        "symbol": "zUSD",
        "logoURI": "https://tokens.1inch.io/0x76417e660df3e5c90c0361674c192da152a806e4.png"
    },
    {
        "address": "0x8E6cd950Ad6ba651F6DD608Dc70e5886B1AA6B24",
        "name": "StarLink",
        "symbol": "STARL",
        "logoURI": "https://tokens.1inch.io/0x8e6cd950ad6ba651f6dd608dc70e5886b1aa6b24.png"
    },
    {
        "address": "0x70D2b7C19352bB76e4409858FF5746e500f2B67c",
        "name": "PawtocolNetworkUPIToken",
        "symbol": "UPI",
        "logoURI": "https://tokens.1inch.io/0x70d2b7c19352bb76e4409858ff5746e500f2b67c.png"
    },
    {
        "address": "0x1559FA1b8F28238FD5D76D9f434ad86FD20D1559",
        "name": "Eden",
        "symbol": "EDEN",
        "logoURI": "https://tokens.1inch.io/0x1559fa1b8f28238fd5d76d9f434ad86fd20d1559.png"
    },
    {
        "address": "0xe1030B48b2033314979143766d7dC1F40ef8CE11",
        "name": "ThePeoplesCoin",
        "symbol": "PEEPS",
        "logoURI": "https://tokens.1inch.io/0xe1030b48b2033314979143766d7dc1f40ef8ce11.png"
    },
    {
        "address": "0x515d7E9D75E2b76DB60F8a051Cd890eBa23286Bc",
        "name": "Governor",
        "symbol": "GDAO",
        "logoURI": "https://tokens.1inch.io/0x515d7e9d75e2b76db60f8a051cd890eba23286bc.png"
    },
    {
        "address": "0xB26631c6dda06aD89B93C71400D25692de89c068",
        "name": "Minds",
        "symbol": "MINDS",
        "logoURI": "https://tokens.1inch.io/0xb26631c6dda06ad89b93c71400d25692de89c068.png"
    },
    {
        "address": "0x5166E09628b696285E3A151e84FB977736a83575",
        "name": "VolatilityProtocolToken",
        "symbol": "VOL",
        "logoURI": "https://tokens.1inch.io/0x5166e09628b696285e3a151e84fb977736a83575.png"
    },
    {
        "address": "0x06F3C323f0238c72BF35011071f2b5B7F43A054c",
        "name": "MASQ",
        "symbol": "MASQ",
        "logoURI": "https://tokens.1inch.io/0x06f3c323f0238c72bf35011071f2b5b7f43a054c.png"
    },
    {
        "address": "0xDDB3422497E61e13543BeA06989C0789117555c5",
        "name": "COTIToken",
        "symbol": "COTI",
        "logoURI": "https://tokens.1inch.io/0xddb3422497e61e13543bea06989c0789117555c5.png"
    },
    {
        "address": "0x92D6C1e31e14520e676a687F0a93788B716BEff5",
        "name": "dYdX",
        "symbol": "DYDX",
        "logoURI": "https://tokens.1inch.io/0x92d6c1e31e14520e676a687f0a93788b716beff5.png"
    },
    {
        "address": "0xa4eF4b0B23C1fc81d3f9ecF93510e64f58A4A016",
        "name": "1MILNFT",
        "symbol": "1MIL",
        "logoURI": "https://tokens.1inch.io/0xa4ef4b0b23c1fc81d3f9ecf93510e64f58a4a016.png"
    },
    {
        "address": "0x25e1474170c4c0aA64fa98123bdc8dB49D7802fa",
        "name": "Bidao",
        "symbol": "BID",
        "logoURI": "https://tokens.1inch.io/0x25e1474170c4c0aa64fa98123bdc8db49d7802fa.png"
    },
    {
        "address": "0x61107a409fFFe1965126aa456Af679719695C69C",
        "name": "UmiToken",
        "symbol": "UMI",
        "logoURI": "https://tokens.1inch.io/0x61107a409fffe1965126aa456af679719695c69c.png"
    },
    {
        "address": "0xD85AD783cc94bd04196a13DC042A3054a9B52210",
        "name": "TribeOne",
        "symbol": "HAKA",
        "logoURI": "https://tokens.1inch.io/0xd85ad783cc94bd04196a13dc042a3054a9b52210.png"
    },
    {
        "address": "0x62Dc4817588d53a056cBbD18231d91ffCcd34b2A",
        "name": "DeHive.finance",
        "symbol": "DHV",
        "logoURI": "https://tokens.1inch.io/0x62dc4817588d53a056cbbd18231d91ffccd34b2a.png"
    },
    {
        "address": "0x15b7c0c907e4C6b9AdaAaabC300C08991D6CEA05",
        "name": "GelatoNetworkToken",
        "symbol": "GEL",
        "logoURI": "https://tokens.1inch.io/0x15b7c0c907e4c6b9adaaaabc300c08991d6cea05.png"
    },
    {
        "address": "0xE94B97b6b43639E238c851A7e693F50033EfD75C",
        "name": "RainbowToken",
        "symbol": "RNBW",
        "logoURI": "https://tokens.1inch.io/0xe94b97b6b43639e238c851a7e693f50033efd75c.png"
    },
    {
        "address": "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
        "name": "MagicInternetMoney",
        "symbol": "MIM",
        "logoURI": "https://tokens.1inch.io/0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3.png"
    },
    {
        "address": "0x090185f2135308BaD17527004364eBcC2D37e5F6",
        "name": "SpellToken",
        "symbol": "SPELL",
        "logoURI": "https://tokens.1inch.io/0x090185f2135308bad17527004364ebcc2d37e5f6.png"
    },
    {
        "address": "0xDE5ed76E7c05eC5e4572CfC88d1ACEA165109E44",
        "name": "DEUS",
        "symbol": "DEUS",
        "logoURI": "https://tokens.1inch.io/0xde5ed76e7c05ec5e4572cfc88d1acea165109e44.png"
    },
    {
        "address": "0xf009f5531dE69067435e32c4b9D36077F4C4A673",
        "name": "Unvest",
        "symbol": "UNV",
        "logoURI": "https://tokens.1inch.io/0xf009f5531de69067435e32c4b9d36077f4c4a673.png"
    },
    {
        "address": "0xc221b7E65FfC80DE234bbB6667aBDd46593D34F0",
        "name": "WrappedCentrifuge",
        "symbol": "wCFG",
        "logoURI": "https://tokens.1inch.io/0xc221b7e65ffc80de234bbb6667abdd46593d34f0.png"
    },
    {
        "address": "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
        "name": "WrappedliquidstakedEther2.0",
        "symbol": "wstETH",
        "logoURI": "https://tokens.1inch.io/0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0.png"
    },
    {
        "address": "0x949D48EcA67b17269629c7194F4b727d4Ef9E5d6",
        "name": "MeritCircle",
        "symbol": "MC",
        "logoURI": "https://tokens.1inch.io/0x949d48eca67b17269629c7194f4b727d4ef9e5d6.png"
    },
    {
        "address": "0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6",
        "name": "SynthsBTC",
        "symbol": "sBTC",
        "logoURI": "https://tokens.1inch.io/0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6.png"
    },
    {
        "address": "0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb",
        "name": "SynthsETH",
        "symbol": "sETH",
        "logoURI": "https://tokens.1inch.io/0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb.png"
    },
    {
        "address": "0xD71eCFF9342A5Ced620049e616c5035F1dB98620",
        "name": "SynthsEUR",
        "symbol": "sEUR",
        "logoURI": "https://tokens.1inch.io/0xd71ecff9342a5ced620049e616c5035f1db98620.png"
    },
    {
        "address": "0x24E89bDf2f65326b94E36978A7EDeAc63623DAFA",
        "name": "TigerKing",
        "symbol": "TKING",
        "logoURI": "https://tokens.1inch.io/0x24e89bdf2f65326b94e36978a7edeac63623dafa.png"
    },
    {
        "address": "0xAaAAAA20D9E0e2461697782ef11675f668207961",
        "name": "Aurora",
        "symbol": "AURORA",
        "logoURI": "https://tokens.1inch.io/0xaaaaaa20d9e0e2461697782ef11675f668207961.png"
    },
    {
        "address": "0xed0889F7E1c7C7267407222Be277e1f1Ef4d4892",
        "name": "Melalie",
        "symbol": "MEL",
        "logoURI": "https://tokens.1inch.io/0xed0889f7e1c7c7267407222be277e1f1ef4d4892.png"
    },
    {
        "address": "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72",
        "name": "EthereumNameService",
        "symbol": "ENS",
        "logoURI": "https://tokens.1inch.io/0xc18360217d8f7ab5e7c516566761ea12ce7f9d72.png"
    },
    {
        "address": "0x37fE0f067FA808fFBDd12891C0858532CFE7361d",
        "name": "Civilization",
        "symbol": "CIV",
        "logoURI": "https://tokens.1inch.io/0x37fe0f067fa808ffbdd12891c0858532cfe7361d.png"
    },
    {
        "address": "0xF32aa187d5Bc16A2C02A6aFb7Df1459d0D107574",
        "name": "HachikoInu",
        "symbol": "Inu",
        "logoURI": "https://tokens.1inch.io/0xf32aa187d5bc16a2c02a6afb7df1459d0d107574.png"
    },
    {
        "address": "0xcAfE001067cDEF266AfB7Eb5A286dCFD277f3dE5",
        "name": "ParaSwap",
        "symbol": "PSP",
        "logoURI": "https://tokens.1inch.io/0xcafe001067cdef266afb7eb5a286dcfd277f3de5.png"
    },
    {
        "address": "0xbb1EE07d6c7BAeB702949904080eb61f5D5e7732",
        "name": "Dogey-Inu",
        "symbol": "DINU",
        "logoURI": "https://tokens.1inch.io/0xbb1ee07d6c7baeb702949904080eb61f5d5e7732.png"
    },
    {
        "address": "0xe87e15B9c7d989474Cb6d8c56b3DB4eFAD5b21E8",
        "name": "HokkaidoInu",
        "symbol": "HOKK",
        "logoURI": "https://tokens.1inch.io/0xe87e15b9c7d989474cb6d8c56b3db4efad5b21e8.png"
    },
    {
        "address": "0x4104b135DBC9609Fc1A9490E61369036497660c8",
        "name": "APWineToken",
        "symbol": "APW",
        "logoURI": "https://tokens.1inch.io/0x4104b135dbc9609fc1a9490e61369036497660c8.png"
    },
    {
        "address": "0xae78736Cd615f374D3085123A210448E74Fc6393",
        "name": "RocketPoolETH",
        "symbol": "rETH",
        "logoURI": "https://tokens.1inch.io/0xae78736cd615f374d3085123a210448e74fc6393.png"
    },
    {
        "address": "0x1FbD3dF007eB8A7477A1Eab2c63483dCc24EfFD6",
        "name": "ScaleSwapToken",
        "symbol": "SCA",
        "logoURI": "https://tokens.1inch.io/0x1fbd3df007eb8a7477a1eab2c63483dcc24effd6.png"
    },
    {
        "address": "0x8037b1B69d6fA63a9cc053c25f7e168e6e6d857A",
        "name": "PartsofFourCoin",
        "symbol": "P4C",
        "logoURI": "https://tokens.1inch.io/0x8037b1b69d6fa63a9cc053c25f7e168e6e6d857a.png"
    },
    {
        "address": "0x41A3Dba3D677E573636BA691a70ff2D606c29666",
        "name": "GoBlankToken",
        "symbol": "BLANK",
        "logoURI": "https://tokens.1inch.io/0x41a3dba3d677e573636ba691a70ff2d606c29666.png"
    },
    {
        "address": "0x8254e26e453EB5aBd29B3c37AC9E8Da32E5d3299",
        "name": "RBX",
        "symbol": "RBX",
        "logoURI": "https://tokens.1inch.io/0x8254e26e453eb5abd29b3c37ac9e8da32e5d3299.png"
    },
    {
        "address": "0x3b484b82567a09e2588A13D54D032153f0c0aEe0",
        "name": "SOS",
        "symbol": "SOS",
        "logoURI": "https://tokens.1inch.io/0x3b484b82567a09e2588a13d54d032153f0c0aee0.png"
    },
    {
        "address": "0x16CC8367055aE7e9157DBcB9d86Fd6CE82522b31",
        "name": "VoxelXNetwork",
        "symbol": "VXL",
        "logoURI": "https://tokens.1inch.io/0x16cc8367055ae7e9157dbcb9d86fd6ce82522b31.png"
    },
    {
        "address": "0x6Bba316c48b49BD1eAc44573c5c871ff02958469",
        "name": "GasDAO",
        "symbol": "GAS",
        "logoURI": "https://tokens.1inch.io/0x6bba316c48b49bd1eac44573c5c871ff02958469.png"
    },
    {
        "address": "0xA36FDBBAE3c9d55a1d67EE5821d53B50B63A1aB9",
        "name": "Tempus",
        "symbol": "TEMP",
        "logoURI": "https://tokens.1inch.io/0xa36fdbbae3c9d55a1d67ee5821d53b50b63a1ab9.png"
    },
    {
        "address": "0x21E783bcf445B515957A10E992aD3c8E9FF51288",
        "name": "Let'sGoBrandon",
        "symbol": "LGB",
        "logoURI": "https://tokens.1inch.io/0x21e783bcf445b515957a10e992ad3c8e9ff51288.png"
    },
    {
        "address": "0x44709a920fCcF795fbC57BAA433cc3dd53C44DbE",
        "name": "DappRadar",
        "symbol": "RADAR",
        "logoURI": "https://tokens.1inch.io/0x44709a920fccf795fbc57baa433cc3dd53c44dbe.png"
    },
    {
        "address": "0x138C2F1123cF3f82E4596d097c118eAc6684940B",
        "name": "Alpha",
        "symbol": "ALPHA1",
        "logoURI": "https://tokens.1inch.io/0x138c2f1123cf3f82e4596d097c118eac6684940b.png"
    },
    {
        "address": "0x47252A63C723889814AeBcAC0683E615624ceC64",
        "name": "nil",
        "symbol": "NIL",
        "logoURI": "https://tokens.1inch.io/0x47252a63c723889814aebcac0683e615624cec64.png"
    },
    {
        "address": "0xBC19712FEB3a26080eBf6f2F7849b417FdD792CA",
        "name": "BoringDAO",
        "symbol": "BORING",
        "logoURI": "https://tokens.1inch.io/0xbc19712feb3a26080ebf6f2f7849b417fdd792ca.png"
    },
    {
        "address": "0xA68Dd8cB83097765263AdAD881Af6eeD479c4a33",
        "name": "fees.wtf",
        "symbol": "WTF",
        "logoURI": "https://tokens.1inch.io/0xa68dd8cb83097765263adad881af6eed479c4a33.png"
    },
    {
        "address": "0xB56A1f3310578f23120182Fb2e58c087EFE6e147",
        "name": "AllCoinsYieldCapital",
        "symbol": "ACYC",
        "logoURI": "https://tokens.1inch.io/0xb56a1f3310578f23120182fb2e58c087efe6e147.png"
    },
    {
        "address": "0x47110d43175f7f2C2425E7d15792acC5817EB44f",
        "name": "BanklessDeFiInnovationIndex",
        "symbol": "GMI",
        "logoURI": "https://tokens.1inch.io/0x47110d43175f7f2c2425e7d15792acc5817eb44f.png"
    },
    {
        "address": "0x7475C42f8BF2c19F4EAF12fEaabaBA859fdC8914",
        "name": "ACCEL",
        "symbol": "ACCEL",
        "logoURI": "https://tokens.1inch.io/0x7475c42f8bf2c19f4eaf12feaababa859fdc8914.png"
    },
    {
        "address": "0x39fBBABf11738317a448031930706cd3e612e1B9",
        "name": "WrappedXRP",
        "symbol": "WXRP",
        "logoURI": "https://tokens.1inch.io/0x39fbbabf11738317a448031930706cd3e612e1b9.png"
    },
    {
        "address": "0xCdF7028ceAB81fA0C6971208e83fa7872994beE5",
        "name": "ThresholdNetworkToken",
        "symbol": "T",
        "logoURI": "https://tokens.1inch.io/0xcdf7028ceab81fa0c6971208e83fa7872994bee5.png"
    },
    {
        "address": "0x0De05F6447ab4D22c8827449EE4bA2D5C288379B",
        "name": "OokiToken",
        "symbol": "OOKI",
        "logoURI": "https://tokens.1inch.io/0x0de05f6447ab4d22c8827449ee4ba2d5c288379b.png"
    },
    {
        "address": "0x73d7c860998CA3c01Ce8c808F5577d94d545d1b4",
        "name": "IxsToken",
        "symbol": "IXS",
        "logoURI": "https://tokens.1inch.io/0x73d7c860998ca3c01ce8c808f5577d94d545d1b4.png"
    },
    {
        "address": "0x1a7e4e63778B4f12a199C062f3eFdD288afCBce8",
        "name": "agEUR",
        "symbol": "agEUR",
        "logoURI": "https://tokens.1inch.io/0x1a7e4e63778b4f12a199c062f3efdd288afcbce8.png"
    },
    {
        "address": "0xf4d2888d29D722226FafA5d9B24F9164c092421E",
        "name": "LooksRareToken",
        "symbol": "LOOKS",
        "logoURI": "https://tokens.1inch.io/0xf4d2888d29d722226fafa5d9b24f9164c092421e.png"
    },
    {
        "address": "0x31429d1856aD1377A8A0079410B297e1a9e214c2",
        "name": "ANGLE",
        "symbol": "ANGLE",
        "logoURI": "https://tokens.1inch.io/0x31429d1856ad1377a8a0079410b297e1a9e214c2.png"
    },
    {
        "address": "0xF1cA9cb74685755965c7458528A36934Df52A3EF",
        "name": "AVINOCToken",
        "symbol": "AVINOC",
        "logoURI": "https://tokens.1inch.io/0xf1ca9cb74685755965c7458528a36934df52a3ef.png"
    },
    {
        "address": "0x618679dF9EfCd19694BB1daa8D00718Eacfa2883",
        "name": "XYZGovernanceToken",
        "symbol": "XYZ",
        "logoURI": "https://tokens.1inch.io/0x618679df9efcd19694bb1daa8d00718eacfa2883.png"
    },
    {
        "address": "0x9E32b13ce7f2E80A01932B42553652E053D6ed8e",
        "name": "MetisToken",
        "symbol": "Metis",
        "logoURI": "https://tokens.1inch.io/0x9e32b13ce7f2e80a01932b42553652e053d6ed8e.png"
    },
    {
        "address": "0xd38BB40815d2B0c2d2c866e0c72c5728ffC76dd9",
        "name": "Symbiosis",
        "symbol": "SIS",
        "logoURI": "https://tokens.1inch.io/0xd38bb40815d2b0c2d2c866e0c72c5728ffc76dd9.png"
    },
    {
        "address": "0xFe459828c90c0BA4bC8b42F5C5D44F316700B430",
        "name": "BBS",
        "symbol": "BBS",
        "logoURI": "https://tokens.1inch.io/0xfe459828c90c0ba4bc8b42f5c5d44f316700b430.png"
    },
    {
        "address": "0xa5DEf515cFd373D17830E7c1de1639cB3530a112",
        "name": "DePoToken",
        "symbol": "DEPO",
        "logoURI": "https://tokens.1inch.io/0xa5def515cfd373d17830e7c1de1639cb3530a112.png"
    },
    {
        "address": "0x1E4EDE388cbc9F4b5c79681B7f94d36a11ABEBC9",
        "name": "X2Y2Token",
        "symbol": "X2Y2",
        "logoURI": "https://tokens.1inch.io/0x1e4ede388cbc9f4b5c79681b7f94d36a11abebc9.png"
    },
    {
        "address": "0xD5d86FC8d5C0Ea1aC1Ac5Dfab6E529c9967a45E9",
        "name": "NFTWorlds",
        "symbol": "WRLD",
        "logoURI": "https://tokens.1inch.io/0xd5d86fc8d5c0ea1ac1ac5dfab6e529c9967a45e9.png"
    },
    {
        "address": "0x2602278EE1882889B946eb11DC0E810075650983",
        "name": "Vader",
        "symbol": "VADER",
        "logoURI": "https://tokens.1inch.io/0x2602278ee1882889b946eb11dc0e810075650983.png"
    },
    {
        "address": "0x249e38Ea4102D0cf8264d3701f1a0E39C4f2DC3B",
        "name": "THETRUTH",
        "symbol": "UFO",
        "logoURI": "https://tokens.1inch.io/0x249e38ea4102d0cf8264d3701f1a0e39c4f2dc3b.png"
    },
    {
        "address": "0xF57e7e7C23978C3cAEC3C3548E3D615c346e79fF",
        "name": "ImmutableX",
        "symbol": "IMX",
        "logoURI": "https://tokens.1inch.io/0xf57e7e7c23978c3caec3c3548e3d615c346e79ff.png"
    },
    {
        "address": "0x2e9d63788249371f1DFC918a52f8d799F4a38C94",
        "name": "Tokemak",
        "symbol": "TOKE",
        "logoURI": "https://tokens.1inch.io/0x2e9d63788249371f1dfc918a52f8d799f4a38c94.png"
    },
    {
        "address": "0xDB5C3C46E28B53a39C255AA39A411dD64e5fed9c",
        "name": "NeosCredits",
        "symbol": "NCR",
        "logoURI": "https://tokens.1inch.io/0xdb5c3c46e28b53a39c255aa39a411dd64e5fed9c.png"
    },
    {
        "address": "0x0f2D719407FdBeFF09D87557AbB7232601FD9F29",
        "name": "Synapse",
        "symbol": "SYN",
        "logoURI": "https://tokens.1inch.io/0x0f2d719407fdbeff09d87557abb7232601fd9f29.png"
    },
    {
        "address": "0x525eF76138Bf76118d786DbedeaE5F87aaBf4a81",
        "name": "ScalaraNFTIndex",
        "symbol": "NFTI2",
        "logoURI": "https://tokens.1inch.io/0x525ef76138bf76118d786dbedeae5f87aabf4a81.png"
    },
    {
        "address": "0x5c147e74D63B1D31AA3Fd78Eb229B65161983B2b",
        "name": "WrappedFlow",
        "symbol": "WFLOW",
        "logoURI": "https://tokens.1inch.io/0x5c147e74d63b1d31aa3fd78eb229b65161983b2b.png"
    },
    {
        "address": "0x509A38b7a1cC0dcd83Aa9d06214663D9eC7c7F4a",
        "name": "BlocksquareToken",
        "symbol": "BST",
        "logoURI": "https://tokens.1inch.io/0x509a38b7a1cc0dcd83aa9d06214663d9ec7c7f4a.png"
    },
    {
        "address": "0xa5f2211B9b8170F694421f2046281775E8468044",
        "name": "THORSwapToken",
        "symbol": "THOR",
        "logoURI": "https://tokens.1inch.io/0xa5f2211b9b8170f694421f2046281775e8468044.png"
    },
    {
        "address": "0x4C2e59D098DF7b6cBaE0848d66DE2f8A4889b9C3",
        "name": "Fodl",
        "symbol": "FODL",
        "logoURI": "https://tokens.1inch.io/0x4c2e59d098df7b6cbae0848d66de2f8a4889b9c3.png"
    },
    {
        "address": "0x4d224452801ACEd8B2F0aebE155379bb5D594381",
        "name": "ApeCoin",
        "symbol": "APE",
        "logoURI": "https://tokens.1inch.io/0x4d224452801aced8b2f0aebe155379bb5d594381.png"
    },
    {
        "address": "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6",
        "name": "StargateToken",
        "symbol": "STG",
        "logoURI": "https://tokens.1inch.io/0xaf5191b0de278c7286d6c7cc6ab6bb8a73ba2cd6.png"
    },
    {
        "address": "0xa6422E3E219ee6d4C1B18895275FE43556fd50eD",
        "name": "StoboxTokenv.2",
        "symbol": "STBU",
        "logoURI": "https://tokens.1inch.io/0xa6422e3e219ee6d4c1b18895275fe43556fd50ed.png"
    },
    {
        "address": "0xDEf1CA1fb7FBcDC777520aa7f396b4E015F497aB",
        "name": "CoWProtocolToken",
        "symbol": "COW",
        "logoURI": "https://tokens.1inch.io/0xdef1ca1fb7fbcdc777520aa7f396b4e015f497ab.png"
    },
    {
        "address": "0x3541A5C1b04AdABA0B83F161747815cd7B1516bC",
        "name": "CitaDAO",
        "symbol": "KNIGHT",
        "logoURI": "https://tokens.1inch.io/0x3541a5c1b04adaba0b83f161747815cd7b1516bc.png"
    },
    {
        "address": "0xf0f9D895aCa5c8678f706FB8216fa22957685A13",
        "name": "CultDAO",
        "symbol": "CULT",
        "logoURI": "https://tokens.1inch.io/0xf0f9d895aca5c8678f706fb8216fa22957685a13.png"
    },
    {
        "address": "0x9506d37f70eB4C3d79C398d326C871aBBf10521d",
        "name": "MediaLicensingToken",
        "symbol": "MLT",
        "logoURI": "https://tokens.1inch.io/0x9506d37f70eb4c3d79c398d326c871abbf10521d.png"
    },
    {
        "address": "0x4f640F2529ee0cF119A2881485845FA8e61A782A",
        "name": "pTokensORE",
        "symbol": "ORE",
        "logoURI": "https://tokens.1inch.io/0x4f640f2529ee0cf119a2881485845fa8e61a782a.png"
    }
];
export default tokenList;
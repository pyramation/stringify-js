import { jsStringify } from "../src";

const assetlist = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "comdex",
  "assets": [
    {
      "description": "Native Token of Comdex Protocol",
      "denom_units": [
        {
          "denom": "ucmdx",
          "exponent": 0
        },
        {
          "denom": "cmdx",
          "exponent": 6
        }
      ],
      "base": "ucmdx",
      "name": "Comdex",
      "display": "cmdx",
      "symbol": "CMDX",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg"
      },
      "coingecko_id": "comdex",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg"
        }
      ]
    },
    {
      "description": "Governance Token of Harbor protocol on Comdex network",
      "denom_units": [
        {
          "denom": "uharbor",
          "exponent": 0
        },
        {
          "denom": "harbor",
          "exponent": 6
        }
      ],
      "base": "uharbor",
      "name": "Harbor",
      "display": "harbor",
      "symbol": "HARBOR",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg"
      },
      "coingecko_id": "harbor-2",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg"
        }
      ]
    },
    {
      "description": "Stable Token of Harbor protocol on Comdex network",
      "denom_units": [
        {
          "denom": "ucmst",
          "exponent": 0
        },
        {
          "denom": "cmst",
          "exponent": 6
        }
      ],
      "base": "ucmst",
      "name": "CMST",
      "display": "cmst",
      "symbol": "CMST",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg"
      },
      "coingecko_id": "composite",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg"
        }
      ]
    }
  ]
};


it('assetlist', () => {
  expect(jsStringify(assetlist, { camelCase: true, space: 2 })).toMatchSnapshot();
});
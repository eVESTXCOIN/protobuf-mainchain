///
//  Generated code. Do not modify.
//  source: vrp/order.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,deprecated_member_use_from_same_package,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use assetPairDescriptor instead')
const AssetPair$json = const {
  '1': 'AssetPair',
  '2': const [
    const {'1': 'amount_asset_id', '3': 1, '4': 1, '5': 12, '10': 'amountAssetId'},
    const {'1': 'price_asset_id', '3': 2, '4': 1, '5': 12, '10': 'priceAssetId'},
  ],
};

/// Descriptor for `AssetPair`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List assetPairDescriptor = $convert.base64Decode('CglBc3NldFBhaXISJgoPYW1vdW50X2Fzc2V0X2lkGAEgASgMUg1hbW91bnRBc3NldElkEiQKDnByaWNlX2Fzc2V0X2lkGAIgASgMUgxwcmljZUFzc2V0SWQ=');
@$core.Deprecated('Use orderDescriptor instead')
const Order$json = const {
  '1': 'Order',
  '2': const [
    const {'1': 'chain_id', '3': 1, '4': 1, '5': 3, '10': 'chainId'},
    const {'1': 'matcher_public_key', '3': 3, '4': 1, '5': 12, '10': 'matcherPublicKey'},
    const {'1': 'asset_pair', '3': 4, '4': 1, '5': 11, '6': '.vrp.AssetPair', '10': 'assetPair'},
    const {'1': 'order_side', '3': 5, '4': 1, '5': 14, '6': '.vrp.Order.Side', '10': 'orderSide'},
    const {'1': 'amount', '3': 6, '4': 1, '5': 3, '10': 'amount'},
    const {'1': 'price', '3': 7, '4': 1, '5': 3, '10': 'price'},
    const {'1': 'timestamp', '3': 8, '4': 1, '5': 3, '10': 'timestamp'},
    const {'1': 'expiration', '3': 9, '4': 1, '5': 3, '10': 'expiration'},
    const {'1': 'matcher_fee', '3': 10, '4': 1, '5': 11, '6': '.vrp.Amount', '10': 'matcherFee'},
    const {'1': 'version', '3': 11, '4': 1, '5': 5, '10': 'version'},
    const {'1': 'proofs', '3': 12, '4': 3, '5': 12, '10': 'proofs'},
    const {'1': 'price_mode', '3': 14, '4': 1, '5': 14, '6': '.vrp.Order.PriceMode', '10': 'priceMode'},
    const {'1': 'sender_public_key', '3': 2, '4': 1, '5': 12, '9': 0, '10': 'senderPublicKey'},
    const {'1': 'eip712_signature', '3': 13, '4': 1, '5': 12, '9': 0, '10': 'eip712Signature'},
  ],
  '4': const [Order_Side$json, Order_PriceMode$json],
  '8': const [
    const {'1': 'sender'},
  ],
};

@$core.Deprecated('Use orderDescriptor instead')
const Order_Side$json = const {
  '1': 'Side',
  '2': const [
    const {'1': 'BUY', '2': 0},
    const {'1': 'SELL', '2': 1},
  ],
};

@$core.Deprecated('Use orderDescriptor instead')
const Order_PriceMode$json = const {
  '1': 'PriceMode',
  '2': const [
    const {'1': 'DEFAULT', '2': 0},
    const {'1': 'FIXED_DECIMALS', '2': 1},
    const {'1': 'ASSET_DECIMALS', '2': 2},
  ],
};

/// Descriptor for `Order`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List orderDescriptor = $convert.base64Decode('CgVPcmRlchIZCghjaGFpbl9pZBgBIAEoA1IHY2hhaW5JZBIsChJtYXRjaGVyX3B1YmxpY19rZXkYAyABKAxSEG1hdGNoZXJQdWJsaWNLZXkSLQoKYXNzZXRfcGFpchgEIAEoCzIOLnZycC5Bc3NldFBhaXJSCWFzc2V0UGFpchIuCgpvcmRlcl9zaWRlGAUgASgOMg8udnJwLk9yZGVyLlNpZGVSCW9yZGVyU2lkZRIWCgZhbW91bnQYBiABKANSBmFtb3VudBIUCgVwcmljZRgHIAEoA1IFcHJpY2USHAoJdGltZXN0YW1wGAggASgDUgl0aW1lc3RhbXASHgoKZXhwaXJhdGlvbhgJIAEoA1IKZXhwaXJhdGlvbhIsCgttYXRjaGVyX2ZlZRgKIAEoCzILLnZycC5BbW91bnRSCm1hdGNoZXJGZWUSGAoHdmVyc2lvbhgLIAEoBVIHdmVyc2lvbhIWCgZwcm9vZnMYDCADKAxSBnByb29mcxIzCgpwcmljZV9tb2RlGA4gASgOMhQudnJwLk9yZGVyLlByaWNlTW9kZVIJcHJpY2VNb2RlEiwKEXNlbmRlcl9wdWJsaWNfa2V5GAIgASgMSABSD3NlbmRlclB1YmxpY0tleRIrChBlaXA3MTJfc2lnbmF0dXJlGA0gASgMSABSD2VpcDcxMlNpZ25hdHVyZSIZCgRTaWRlEgcKA0JVWRAAEggKBFNFTEwQASJACglQcmljZU1vZGUSCwoHREVGQVVMVBAAEhIKDkZJWEVEX0RFQ0lNQUxTEAESEgoOQVNTRVRfREVDSU1BTFMQAkIICgZzZW5kZXI=');

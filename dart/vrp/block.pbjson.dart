///
//  Generated code. Do not modify.
//  source: vrp/block.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,deprecated_member_use_from_same_package,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use blockDescriptor instead')
const Block$json = const {
  '1': 'Block',
  '2': const [
    const {'1': 'header', '3': 1, '4': 1, '5': 11, '6': '.vrp.Block.Header', '10': 'header'},
    const {'1': 'signature', '3': 2, '4': 1, '5': 12, '10': 'signature'},
    const {'1': 'transactions', '3': 3, '4': 3, '5': 11, '6': '.vrp.SignedTransaction', '10': 'transactions'},
  ],
  '3': const [Block_Header$json],
};

@$core.Deprecated('Use blockDescriptor instead')
const Block_Header$json = const {
  '1': 'Header',
  '2': const [
    const {'1': 'chain_id', '3': 1, '4': 1, '5': 5, '10': 'chainId'},
    const {'1': 'reference', '3': 2, '4': 1, '5': 12, '10': 'reference'},
    const {'1': 'base_target', '3': 3, '4': 1, '5': 3, '10': 'baseTarget'},
    const {'1': 'generation_signature', '3': 4, '4': 1, '5': 12, '10': 'generationSignature'},
    const {'1': 'feature_votes', '3': 5, '4': 3, '5': 13, '10': 'featureVotes'},
    const {'1': 'timestamp', '3': 6, '4': 1, '5': 3, '10': 'timestamp'},
    const {'1': 'version', '3': 7, '4': 1, '5': 5, '10': 'version'},
    const {'1': 'generator', '3': 8, '4': 1, '5': 12, '10': 'generator'},
    const {'1': 'reward_vote', '3': 9, '4': 1, '5': 3, '10': 'rewardVote'},
    const {'1': 'reward_burned', '3': 10, '4': 1, '5': 3, '10': 'rewardBurned'},
    const {'1': 'transactions_root', '3': 11, '4': 1, '5': 12, '10': 'transactionsRoot'},
  ],
};

/// Descriptor for `Block`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List blockDescriptor = $convert.base64Decode('CgVCbG9jaxIpCgZoZWFkZXIYASABKAsyES52cnAuQmxvY2suSGVhZGVyUgZoZWFkZXISHAoJc2lnbmF0dXJlGAIgASgMUglzaWduYXR1cmUSOgoMdHJhbnNhY3Rpb25zGAMgAygLMhYudnJwLlNpZ25lZFRyYW5zYWN0aW9uUgx0cmFuc2FjdGlvbnMagwMKBkhlYWRlchIZCghjaGFpbl9pZBgBIAEoBVIHY2hhaW5JZBIcCglyZWZlcmVuY2UYAiABKAxSCXJlZmVyZW5jZRIfCgtiYXNlX3RhcmdldBgDIAEoA1IKYmFzZVRhcmdldBIxChRnZW5lcmF0aW9uX3NpZ25hdHVyZRgEIAEoDFITZ2VuZXJhdGlvblNpZ25hdHVyZRIjCg1mZWF0dXJlX3ZvdGVzGAUgAygNUgxmZWF0dXJlVm90ZXMSHAoJdGltZXN0YW1wGAYgASgDUgl0aW1lc3RhbXASGAoHdmVyc2lvbhgHIAEoBVIHdmVyc2lvbhIcCglnZW5lcmF0b3IYCCABKAxSCWdlbmVyYXRvchIfCgtyZXdhcmRfdm90ZRgJIAEoA1IKcmV3YXJkVm90ZRIjCg1yZXdhcmRfYnVybmVkGAogASgDUgxyZXdhcmRCdXJuZWQSKwoRdHJhbnNhY3Rpb25zX3Jvb3QYCyABKAxSEHRyYW5zYWN0aW9uc1Jvb3Q=');
@$core.Deprecated('Use microBlockDescriptor instead')
const MicroBlock$json = const {
  '1': 'MicroBlock',
  '2': const [
    const {'1': 'version', '3': 1, '4': 1, '5': 5, '10': 'version'},
    const {'1': 'reference', '3': 2, '4': 1, '5': 12, '10': 'reference'},
    const {'1': 'updated_block_signature', '3': 3, '4': 1, '5': 12, '10': 'updatedBlockSignature'},
    const {'1': 'sender_public_key', '3': 4, '4': 1, '5': 12, '10': 'senderPublicKey'},
    const {'1': 'transactions', '3': 5, '4': 3, '5': 11, '6': '.vrp.SignedTransaction', '10': 'transactions'},
  ],
};

/// Descriptor for `MicroBlock`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List microBlockDescriptor = $convert.base64Decode('CgpNaWNyb0Jsb2NrEhgKB3ZlcnNpb24YASABKAVSB3ZlcnNpb24SHAoJcmVmZXJlbmNlGAIgASgMUglyZWZlcmVuY2USNgoXdXBkYXRlZF9ibG9ja19zaWduYXR1cmUYAyABKAxSFXVwZGF0ZWRCbG9ja1NpZ25hdHVyZRIqChFzZW5kZXJfcHVibGljX2tleRgEIAEoDFIPc2VuZGVyUHVibGljS2V5EjoKDHRyYW5zYWN0aW9ucxgFIAMoCzIWLnZycC5TaWduZWRUcmFuc2FjdGlvblIMdHJhbnNhY3Rpb25z');
@$core.Deprecated('Use signedMicroBlockDescriptor instead')
const SignedMicroBlock$json = const {
  '1': 'SignedMicroBlock',
  '2': const [
    const {'1': 'micro_block', '3': 1, '4': 1, '5': 11, '6': '.vrp.MicroBlock', '10': 'microBlock'},
    const {'1': 'signature', '3': 2, '4': 1, '5': 12, '10': 'signature'},
    const {'1': 'total_block_id', '3': 3, '4': 1, '5': 12, '10': 'totalBlockId'},
  ],
};

/// Descriptor for `SignedMicroBlock`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List signedMicroBlockDescriptor = $convert.base64Decode('ChBTaWduZWRNaWNyb0Jsb2NrEjAKC21pY3JvX2Jsb2NrGAEgASgLMg8udnJwLk1pY3JvQmxvY2tSCm1pY3JvQmxvY2sSHAoJc2lnbmF0dXJlGAIgASgMUglzaWduYXR1cmUSJAoOdG90YWxfYmxvY2tfaWQYAyABKAxSDHRvdGFsQmxvY2tJZA==');

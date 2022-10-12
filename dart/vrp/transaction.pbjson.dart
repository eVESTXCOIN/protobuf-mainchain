///
//  Generated code. Do not modify.
//  source: vrp/transaction.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,deprecated_member_use_from_same_package,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use signedTransactionDescriptor instead')
const SignedTransaction$json = const {
  '1': 'SignedTransaction',
  '2': const [
    const {'1': 'vrp_transaction', '3': 1, '4': 1, '5': 11, '6': '.vrp.Transaction', '9': 0, '10': 'vrpTransaction'},
    const {'1': 'ethereum_transaction', '3': 3, '4': 1, '5': 12, '9': 0, '10': 'ethereumTransaction'},
    const {'1': 'proofs', '3': 2, '4': 3, '5': 12, '10': 'proofs'},
  ],
  '8': const [
    const {'1': 'transaction'},
  ],
};

/// Descriptor for `SignedTransaction`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List signedTransactionDescriptor = $convert.base64Decode('ChFTaWduZWRUcmFuc2FjdGlvbhI7Cg92cnBfdHJhbnNhY3Rpb24YASABKAsyEC52cnAuVHJhbnNhY3Rpb25IAFIOdnJwVHJhbnNhY3Rpb24SMwoUZXRoZXJldW1fdHJhbnNhY3Rpb24YAyABKAxIAFITZXRoZXJldW1UcmFuc2FjdGlvbhIWCgZwcm9vZnMYAiADKAxSBnByb29mc0INCgt0cmFuc2FjdGlvbg==');
@$core.Deprecated('Use transactionDescriptor instead')
const Transaction$json = const {
  '1': 'Transaction',
  '2': const [
    const {'1': 'chain_id', '3': 1, '4': 1, '5': 5, '10': 'chainId'},
    const {'1': 'sender_public_key', '3': 2, '4': 1, '5': 12, '10': 'senderPublicKey'},
    const {'1': 'fee', '3': 3, '4': 1, '5': 11, '6': '.vrp.Amount', '10': 'fee'},
    const {'1': 'timestamp', '3': 4, '4': 1, '5': 3, '10': 'timestamp'},
    const {'1': 'version', '3': 5, '4': 1, '5': 5, '10': 'version'},
    const {'1': 'genesis', '3': 101, '4': 1, '5': 11, '6': '.vrp.GenesisTransactionData', '9': 0, '10': 'genesis'},
    const {'1': 'payment', '3': 102, '4': 1, '5': 11, '6': '.vrp.PaymentTransactionData', '9': 0, '10': 'payment'},
    const {'1': 'issue', '3': 103, '4': 1, '5': 11, '6': '.vrp.IssueTransactionData', '9': 0, '10': 'issue'},
    const {'1': 'transfer', '3': 104, '4': 1, '5': 11, '6': '.vrp.TransferTransactionData', '9': 0, '10': 'transfer'},
    const {'1': 'reissue', '3': 105, '4': 1, '5': 11, '6': '.vrp.ReissueTransactionData', '9': 0, '10': 'reissue'},
    const {'1': 'burn', '3': 106, '4': 1, '5': 11, '6': '.vrp.BurnTransactionData', '9': 0, '10': 'burn'},
    const {'1': 'exchange', '3': 107, '4': 1, '5': 11, '6': '.vrp.ExchangeTransactionData', '9': 0, '10': 'exchange'},
    const {'1': 'lease', '3': 108, '4': 1, '5': 11, '6': '.vrp.LeaseTransactionData', '9': 0, '10': 'lease'},
    const {'1': 'lease_cancel', '3': 109, '4': 1, '5': 11, '6': '.vrp.LeaseCancelTransactionData', '9': 0, '10': 'leaseCancel'},
    const {'1': 'create_alias', '3': 110, '4': 1, '5': 11, '6': '.vrp.CreateAliasTransactionData', '9': 0, '10': 'createAlias'},
    const {'1': 'mass_transfer', '3': 111, '4': 1, '5': 11, '6': '.vrp.MassTransferTransactionData', '9': 0, '10': 'massTransfer'},
    const {'1': 'data_transaction', '3': 112, '4': 1, '5': 11, '6': '.vrp.DataTransactionData', '9': 0, '10': 'dataTransaction'},
    const {'1': 'set_script', '3': 113, '4': 1, '5': 11, '6': '.vrp.SetScriptTransactionData', '9': 0, '10': 'setScript'},
    const {'1': 'sponsor_fee', '3': 114, '4': 1, '5': 11, '6': '.vrp.SponsorFeeTransactionData', '9': 0, '10': 'sponsorFee'},
    const {'1': 'set_asset_script', '3': 115, '4': 1, '5': 11, '6': '.vrp.SetAssetScriptTransactionData', '9': 0, '10': 'setAssetScript'},
    const {'1': 'invoke_script', '3': 116, '4': 1, '5': 11, '6': '.vrp.InvokeScriptTransactionData', '9': 0, '10': 'invokeScript'},
    const {'1': 'update_asset_info', '3': 117, '4': 1, '5': 11, '6': '.vrp.UpdateAssetInfoTransactionData', '9': 0, '10': 'updateAssetInfo'},
    const {'1': 'anonymous_tx', '3': 118, '4': 1, '5': 11, '6': '.vrp.PrivatePaymentTransactionData', '9': 0, '10': 'anonymousTx'},
  ],
  '8': const [
    const {'1': 'data'},
  ],
};

/// Descriptor for `Transaction`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List transactionDescriptor = $convert.base64Decode('CgtUcmFuc2FjdGlvbhIZCghjaGFpbl9pZBgBIAEoBVIHY2hhaW5JZBIqChFzZW5kZXJfcHVibGljX2tleRgCIAEoDFIPc2VuZGVyUHVibGljS2V5Eh0KA2ZlZRgDIAEoCzILLnZycC5BbW91bnRSA2ZlZRIcCgl0aW1lc3RhbXAYBCABKANSCXRpbWVzdGFtcBIYCgd2ZXJzaW9uGAUgASgFUgd2ZXJzaW9uEjcKB2dlbmVzaXMYZSABKAsyGy52cnAuR2VuZXNpc1RyYW5zYWN0aW9uRGF0YUgAUgdnZW5lc2lzEjcKB3BheW1lbnQYZiABKAsyGy52cnAuUGF5bWVudFRyYW5zYWN0aW9uRGF0YUgAUgdwYXltZW50EjEKBWlzc3VlGGcgASgLMhkudnJwLklzc3VlVHJhbnNhY3Rpb25EYXRhSABSBWlzc3VlEjoKCHRyYW5zZmVyGGggASgLMhwudnJwLlRyYW5zZmVyVHJhbnNhY3Rpb25EYXRhSABSCHRyYW5zZmVyEjcKB3JlaXNzdWUYaSABKAsyGy52cnAuUmVpc3N1ZVRyYW5zYWN0aW9uRGF0YUgAUgdyZWlzc3VlEi4KBGJ1cm4YaiABKAsyGC52cnAuQnVyblRyYW5zYWN0aW9uRGF0YUgAUgRidXJuEjoKCGV4Y2hhbmdlGGsgASgLMhwudnJwLkV4Y2hhbmdlVHJhbnNhY3Rpb25EYXRhSABSCGV4Y2hhbmdlEjEKBWxlYXNlGGwgASgLMhkudnJwLkxlYXNlVHJhbnNhY3Rpb25EYXRhSABSBWxlYXNlEkQKDGxlYXNlX2NhbmNlbBhtIAEoCzIfLnZycC5MZWFzZUNhbmNlbFRyYW5zYWN0aW9uRGF0YUgAUgtsZWFzZUNhbmNlbBJECgxjcmVhdGVfYWxpYXMYbiABKAsyHy52cnAuQ3JlYXRlQWxpYXNUcmFuc2FjdGlvbkRhdGFIAFILY3JlYXRlQWxpYXMSRwoNbWFzc190cmFuc2ZlchhvIAEoCzIgLnZycC5NYXNzVHJhbnNmZXJUcmFuc2FjdGlvbkRhdGFIAFIMbWFzc1RyYW5zZmVyEkUKEGRhdGFfdHJhbnNhY3Rpb24YcCABKAsyGC52cnAuRGF0YVRyYW5zYWN0aW9uRGF0YUgAUg9kYXRhVHJhbnNhY3Rpb24SPgoKc2V0X3NjcmlwdBhxIAEoCzIdLnZycC5TZXRTY3JpcHRUcmFuc2FjdGlvbkRhdGFIAFIJc2V0U2NyaXB0EkEKC3Nwb25zb3JfZmVlGHIgASgLMh4udnJwLlNwb25zb3JGZWVUcmFuc2FjdGlvbkRhdGFIAFIKc3BvbnNvckZlZRJOChBzZXRfYXNzZXRfc2NyaXB0GHMgASgLMiIudnJwLlNldEFzc2V0U2NyaXB0VHJhbnNhY3Rpb25EYXRhSABSDnNldEFzc2V0U2NyaXB0EkcKDWludm9rZV9zY3JpcHQYdCABKAsyIC52cnAuSW52b2tlU2NyaXB0VHJhbnNhY3Rpb25EYXRhSABSDGludm9rZVNjcmlwdBJRChF1cGRhdGVfYXNzZXRfaW5mbxh1IAEoCzIjLnZycC5VcGRhdGVBc3NldEluZm9UcmFuc2FjdGlvbkRhdGFIAFIPdXBkYXRlQXNzZXRJbmZvEkcKDGFub255bW91c190eBh2IAEoCzIiLnZycC5Qcml2YXRlUGF5bWVudFRyYW5zYWN0aW9uRGF0YUgAUgthbm9ueW1vdXNUeEIGCgRkYXRh');
@$core.Deprecated('Use genesisTransactionDataDescriptor instead')
const GenesisTransactionData$json = const {
  '1': 'GenesisTransactionData',
  '2': const [
    const {'1': 'recipient_address', '3': 1, '4': 1, '5': 12, '10': 'recipientAddress'},
    const {'1': 'amount', '3': 2, '4': 1, '5': 3, '10': 'amount'},
  ],
};

/// Descriptor for `GenesisTransactionData`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List genesisTransactionDataDescriptor = $convert.base64Decode('ChZHZW5lc2lzVHJhbnNhY3Rpb25EYXRhEisKEXJlY2lwaWVudF9hZGRyZXNzGAEgASgMUhByZWNpcGllbnRBZGRyZXNzEhYKBmFtb3VudBgCIAEoA1IGYW1vdW50');
@$core.Deprecated('Use paymentTransactionDataDescriptor instead')
const PaymentTransactionData$json = const {
  '1': 'PaymentTransactionData',
  '2': const [
    const {'1': 'recipient_address', '3': 1, '4': 1, '5': 12, '10': 'recipientAddress'},
    const {'1': 'amount', '3': 2, '4': 1, '5': 3, '10': 'amount'},
  ],
};

/// Descriptor for `PaymentTransactionData`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List paymentTransactionDataDescriptor = $convert.base64Decode('ChZQYXltZW50VHJhbnNhY3Rpb25EYXRhEisKEXJlY2lwaWVudF9hZGRyZXNzGAEgASgMUhByZWNpcGllbnRBZGRyZXNzEhYKBmFtb3VudBgCIAEoA1IGYW1vdW50');
@$core.Deprecated('Use transferTransactionDataDescriptor instead')
const TransferTransactionData$json = const {
  '1': 'TransferTransactionData',
  '2': const [
    const {'1': 'recipient', '3': 1, '4': 1, '5': 11, '6': '.vrp.Recipient', '10': 'recipient'},
    const {'1': 'amount', '3': 2, '4': 1, '5': 11, '6': '.vrp.Amount', '10': 'amount'},
    const {'1': 'attachment', '3': 3, '4': 1, '5': 12, '10': 'attachment'},
  ],
};

/// Descriptor for `TransferTransactionData`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List transferTransactionDataDescriptor = $convert.base64Decode('ChdUcmFuc2ZlclRyYW5zYWN0aW9uRGF0YRIsCglyZWNpcGllbnQYASABKAsyDi52cnAuUmVjaXBpZW50UglyZWNpcGllbnQSIwoGYW1vdW50GAIgASgLMgsudnJwLkFtb3VudFIGYW1vdW50Eh4KCmF0dGFjaG1lbnQYAyABKAxSCmF0dGFjaG1lbnQ=');
@$core.Deprecated('Use createAliasTransactionDataDescriptor instead')
const CreateAliasTransactionData$json = const {
  '1': 'CreateAliasTransactionData',
  '2': const [
    const {'1': 'alias', '3': 1, '4': 1, '5': 9, '10': 'alias'},
  ],
};

/// Descriptor for `CreateAliasTransactionData`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List createAliasTransactionDataDescriptor = $convert.base64Decode('ChpDcmVhdGVBbGlhc1RyYW5zYWN0aW9uRGF0YRIUCgVhbGlhcxgBIAEoCVIFYWxpYXM=');
@$core.Deprecated('Use dataTransactionDataDescriptor instead')
const DataTransactionData$json = const {
  '1': 'DataTransactionData',
  '2': const [
    const {'1': 'data', '3': 1, '4': 3, '5': 11, '6': '.vrp.DataTransactionData.DataEntry', '10': 'data'},
  ],
  '3': const [DataTransactionData_DataEntry$json],
};

@$core.Deprecated('Use dataTransactionDataDescriptor instead')
const DataTransactionData_DataEntry$json = const {
  '1': 'DataEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'int_value', '3': 10, '4': 1, '5': 3, '9': 0, '10': 'intValue'},
    const {'1': 'bool_value', '3': 11, '4': 1, '5': 8, '9': 0, '10': 'boolValue'},
    const {'1': 'binary_value', '3': 12, '4': 1, '5': 12, '9': 0, '10': 'binaryValue'},
    const {'1': 'string_value', '3': 13, '4': 1, '5': 9, '9': 0, '10': 'stringValue'},
  ],
  '8': const [
    const {'1': 'value'},
  ],
};

/// Descriptor for `DataTransactionData`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List dataTransactionDataDescriptor = $convert.base64Decode('ChNEYXRhVHJhbnNhY3Rpb25EYXRhEjYKBGRhdGEYASADKAsyIi52cnAuRGF0YVRyYW5zYWN0aW9uRGF0YS5EYXRhRW50cnlSBGRhdGEasAEKCURhdGFFbnRyeRIQCgNrZXkYASABKAlSA2tleRIdCglpbnRfdmFsdWUYCiABKANIAFIIaW50VmFsdWUSHwoKYm9vbF92YWx1ZRgLIAEoCEgAUglib29sVmFsdWUSIwoMYmluYXJ5X3ZhbHVlGAwgASgMSABSC2JpbmFyeVZhbHVlEiMKDHN0cmluZ192YWx1ZRgNIAEoCUgAUgtzdHJpbmdWYWx1ZUIHCgV2YWx1ZQ==');
@$core.Deprecated('Use massTransferTransactionDataDescriptor instead')
const MassTransferTransactionData$json = const {
  '1': 'MassTransferTransactionData',
  '2': const [
    const {'1': 'asset_id', '3': 1, '4': 1, '5': 12, '10': 'assetId'},
    const {'1': 'transfers', '3': 2, '4': 3, '5': 11, '6': '.vrp.MassTransferTransactionData.Transfer', '10': 'transfers'},
    const {'1': 'attachment', '3': 3, '4': 1, '5': 12, '10': 'attachment'},
  ],
  '3': const [MassTransferTransactionData_Transfer$json],
};

@$core.Deprecated('Use massTransferTransactionDataDescriptor instead')
const MassTransferTransactionData_Transfer$json = const {
  '1': 'Transfer',
  '2': const [
    const {'1': 'recipient', '3': 1, '4': 1, '5': 11, '6': '.vrp.Recipient', '10': 'recipient'},
    const {'1': 'amount', '3': 2, '4': 1, '5': 3, '10': 'amount'},
  ],
};

/// Descriptor for `MassTransferTransactionData`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List massTransferTransactionDataDescriptor = $convert.base64Decode('ChtNYXNzVHJhbnNmZXJUcmFuc2FjdGlvbkRhdGESGQoIYXNzZXRfaWQYASABKAxSB2Fzc2V0SWQSRwoJdHJhbnNmZXJzGAIgAygLMikudnJwLk1hc3NUcmFuc2ZlclRyYW5zYWN0aW9uRGF0YS5UcmFuc2ZlclIJdHJhbnNmZXJzEh4KCmF0dGFjaG1lbnQYAyABKAxSCmF0dGFjaG1lbnQaUAoIVHJhbnNmZXISLAoJcmVjaXBpZW50GAEgASgLMg4udnJwLlJlY2lwaWVudFIJcmVjaXBpZW50EhYKBmFtb3VudBgCIAEoA1IGYW1vdW50');
@$core.Deprecated('Use leaseTransactionDataDescriptor instead')
const LeaseTransactionData$json = const {
  '1': 'LeaseTransactionData',
  '2': const [
    const {'1': 'recipient', '3': 1, '4': 1, '5': 11, '6': '.vrp.Recipient', '10': 'recipient'},
    const {'1': 'amount', '3': 2, '4': 1, '5': 3, '10': 'amount'},
  ],
};

/// Descriptor for `LeaseTransactionData`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List leaseTransactionDataDescriptor = $convert.base64Decode('ChRMZWFzZVRyYW5zYWN0aW9uRGF0YRIsCglyZWNpcGllbnQYASABKAsyDi52cnAuUmVjaXBpZW50UglyZWNpcGllbnQSFgoGYW1vdW50GAIgASgDUgZhbW91bnQ=');
@$core.Deprecated('Use leaseCancelTransactionDataDescriptor instead')
const LeaseCancelTransactionData$json = const {
  '1': 'LeaseCancelTransactionData',
  '2': const [
    const {'1': 'lease_id', '3': 1, '4': 1, '5': 12, '10': 'leaseId'},
  ],
};

/// Descriptor for `LeaseCancelTransactionData`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List leaseCancelTransactionDataDescriptor = $convert.base64Decode('ChpMZWFzZUNhbmNlbFRyYW5zYWN0aW9uRGF0YRIZCghsZWFzZV9pZBgBIAEoDFIHbGVhc2VJZA==');
@$core.Deprecated('Use burnTransactionDataDescriptor instead')
const BurnTransactionData$json = const {
  '1': 'BurnTransactionData',
  '2': const [
    const {'1': 'asset_amount', '3': 1, '4': 1, '5': 11, '6': '.vrp.Amount', '10': 'assetAmount'},
  ],
};

/// Descriptor for `BurnTransactionData`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List burnTransactionDataDescriptor = $convert.base64Decode('ChNCdXJuVHJhbnNhY3Rpb25EYXRhEi4KDGFzc2V0X2Ftb3VudBgBIAEoCzILLnZycC5BbW91bnRSC2Fzc2V0QW1vdW50');
@$core.Deprecated('Use issueTransactionDataDescriptor instead')
const IssueTransactionData$json = const {
  '1': 'IssueTransactionData',
  '2': const [
    const {'1': 'name', '3': 1, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'description', '3': 2, '4': 1, '5': 9, '10': 'description'},
    const {'1': 'amount', '3': 3, '4': 1, '5': 3, '10': 'amount'},
    const {'1': 'decimals', '3': 4, '4': 1, '5': 5, '10': 'decimals'},
    const {'1': 'reissuable', '3': 5, '4': 1, '5': 8, '10': 'reissuable'},
    const {'1': 'script', '3': 6, '4': 1, '5': 12, '10': 'script'},
  ],
};

/// Descriptor for `IssueTransactionData`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List issueTransactionDataDescriptor = $convert.base64Decode('ChRJc3N1ZVRyYW5zYWN0aW9uRGF0YRISCgRuYW1lGAEgASgJUgRuYW1lEiAKC2Rlc2NyaXB0aW9uGAIgASgJUgtkZXNjcmlwdGlvbhIWCgZhbW91bnQYAyABKANSBmFtb3VudBIaCghkZWNpbWFscxgEIAEoBVIIZGVjaW1hbHMSHgoKcmVpc3N1YWJsZRgFIAEoCFIKcmVpc3N1YWJsZRIWCgZzY3JpcHQYBiABKAxSBnNjcmlwdA==');
@$core.Deprecated('Use reissueTransactionDataDescriptor instead')
const ReissueTransactionData$json = const {
  '1': 'ReissueTransactionData',
  '2': const [
    const {'1': 'asset_amount', '3': 1, '4': 1, '5': 11, '6': '.vrp.Amount', '10': 'assetAmount'},
    const {'1': 'reissuable', '3': 2, '4': 1, '5': 8, '10': 'reissuable'},
  ],
};

/// Descriptor for `ReissueTransactionData`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List reissueTransactionDataDescriptor = $convert.base64Decode('ChZSZWlzc3VlVHJhbnNhY3Rpb25EYXRhEi4KDGFzc2V0X2Ftb3VudBgBIAEoCzILLnZycC5BbW91bnRSC2Fzc2V0QW1vdW50Eh4KCnJlaXNzdWFibGUYAiABKAhSCnJlaXNzdWFibGU=');
@$core.Deprecated('Use setAssetScriptTransactionDataDescriptor instead')
const SetAssetScriptTransactionData$json = const {
  '1': 'SetAssetScriptTransactionData',
  '2': const [
    const {'1': 'asset_id', '3': 1, '4': 1, '5': 12, '10': 'assetId'},
    const {'1': 'script', '3': 2, '4': 1, '5': 12, '10': 'script'},
  ],
};

/// Descriptor for `SetAssetScriptTransactionData`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List setAssetScriptTransactionDataDescriptor = $convert.base64Decode('Ch1TZXRBc3NldFNjcmlwdFRyYW5zYWN0aW9uRGF0YRIZCghhc3NldF9pZBgBIAEoDFIHYXNzZXRJZBIWCgZzY3JpcHQYAiABKAxSBnNjcmlwdA==');
@$core.Deprecated('Use setScriptTransactionDataDescriptor instead')
const SetScriptTransactionData$json = const {
  '1': 'SetScriptTransactionData',
  '2': const [
    const {'1': 'script', '3': 1, '4': 1, '5': 12, '10': 'script'},
  ],
};

/// Descriptor for `SetScriptTransactionData`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List setScriptTransactionDataDescriptor = $convert.base64Decode('ChhTZXRTY3JpcHRUcmFuc2FjdGlvbkRhdGESFgoGc2NyaXB0GAEgASgMUgZzY3JpcHQ=');
@$core.Deprecated('Use exchangeTransactionDataDescriptor instead')
const ExchangeTransactionData$json = const {
  '1': 'ExchangeTransactionData',
  '2': const [
    const {'1': 'amount', '3': 1, '4': 1, '5': 3, '10': 'amount'},
    const {'1': 'price', '3': 2, '4': 1, '5': 3, '10': 'price'},
    const {'1': 'buy_matcher_fee', '3': 3, '4': 1, '5': 3, '10': 'buyMatcherFee'},
    const {'1': 'sell_matcher_fee', '3': 4, '4': 1, '5': 3, '10': 'sellMatcherFee'},
    const {'1': 'orders', '3': 5, '4': 3, '5': 11, '6': '.vrp.Order', '10': 'orders'},
  ],
};

/// Descriptor for `ExchangeTransactionData`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List exchangeTransactionDataDescriptor = $convert.base64Decode('ChdFeGNoYW5nZVRyYW5zYWN0aW9uRGF0YRIWCgZhbW91bnQYASABKANSBmFtb3VudBIUCgVwcmljZRgCIAEoA1IFcHJpY2USJgoPYnV5X21hdGNoZXJfZmVlGAMgASgDUg1idXlNYXRjaGVyRmVlEigKEHNlbGxfbWF0Y2hlcl9mZWUYBCABKANSDnNlbGxNYXRjaGVyRmVlEiIKBm9yZGVycxgFIAMoCzIKLnZycC5PcmRlclIGb3JkZXJz');
@$core.Deprecated('Use sponsorFeeTransactionDataDescriptor instead')
const SponsorFeeTransactionData$json = const {
  '1': 'SponsorFeeTransactionData',
  '2': const [
    const {'1': 'min_fee', '3': 1, '4': 1, '5': 11, '6': '.vrp.Amount', '10': 'minFee'},
  ],
};

/// Descriptor for `SponsorFeeTransactionData`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List sponsorFeeTransactionDataDescriptor = $convert.base64Decode('ChlTcG9uc29yRmVlVHJhbnNhY3Rpb25EYXRhEiQKB21pbl9mZWUYASABKAsyCy52cnAuQW1vdW50UgZtaW5GZWU=');
@$core.Deprecated('Use invokeScriptTransactionDataDescriptor instead')
const InvokeScriptTransactionData$json = const {
  '1': 'InvokeScriptTransactionData',
  '2': const [
    const {'1': 'd_app', '3': 1, '4': 1, '5': 11, '6': '.vrp.Recipient', '10': 'dApp'},
    const {'1': 'function_call', '3': 2, '4': 1, '5': 12, '10': 'functionCall'},
    const {'1': 'payments', '3': 3, '4': 3, '5': 11, '6': '.vrp.Amount', '10': 'payments'},
  ],
};

/// Descriptor for `InvokeScriptTransactionData`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List invokeScriptTransactionDataDescriptor = $convert.base64Decode('ChtJbnZva2VTY3JpcHRUcmFuc2FjdGlvbkRhdGESIwoFZF9hcHAYASABKAsyDi52cnAuUmVjaXBpZW50UgRkQXBwEiMKDWZ1bmN0aW9uX2NhbGwYAiABKAxSDGZ1bmN0aW9uQ2FsbBInCghwYXltZW50cxgDIAMoCzILLnZycC5BbW91bnRSCHBheW1lbnRz');
@$core.Deprecated('Use updateAssetInfoTransactionDataDescriptor instead')
const UpdateAssetInfoTransactionData$json = const {
  '1': 'UpdateAssetInfoTransactionData',
  '2': const [
    const {'1': 'asset_id', '3': 1, '4': 1, '5': 12, '10': 'assetId'},
    const {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'description', '3': 3, '4': 1, '5': 9, '10': 'description'},
    const {'1': 'image', '3': 4, '4': 1, '5': 9, '10': 'image'},
  ],
};

/// Descriptor for `UpdateAssetInfoTransactionData`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List updateAssetInfoTransactionDataDescriptor = $convert.base64Decode('Ch5VcGRhdGVBc3NldEluZm9UcmFuc2FjdGlvbkRhdGESGQoIYXNzZXRfaWQYASABKAxSB2Fzc2V0SWQSEgoEbmFtZRgCIAEoCVIEbmFtZRIgCgtkZXNjcmlwdGlvbhgDIAEoCVILZGVzY3JpcHRpb24SFAoFaW1hZ2UYBCABKAlSBWltYWdl');
@$core.Deprecated('Use invokeExpressionTransactionDataDescriptor instead')
const InvokeExpressionTransactionData$json = const {
  '1': 'InvokeExpressionTransactionData',
  '2': const [
    const {'1': 'expression', '3': 1, '4': 1, '5': 12, '10': 'expression'},
  ],
};

/// Descriptor for `InvokeExpressionTransactionData`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List invokeExpressionTransactionDataDescriptor = $convert.base64Decode('Ch9JbnZva2VFeHByZXNzaW9uVHJhbnNhY3Rpb25EYXRhEh4KCmV4cHJlc3Npb24YASABKAxSCmV4cHJlc3Npb24=');
@$core.Deprecated('Use privatePaymentTransactionDataDescriptor instead')
const PrivatePaymentTransactionData$json = const {
  '1': 'PrivatePaymentTransactionData',
  '2': const [
    const {'1': 'recipient_address', '3': 1, '4': 1, '5': 12, '10': 'recipientAddress'},
    const {'1': 'amount', '3': 2, '4': 1, '5': 3, '10': 'amount'},
  ],
};

/// Descriptor for `PrivatePaymentTransactionData`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List privatePaymentTransactionDataDescriptor = $convert.base64Decode('Ch1Qcml2YXRlUGF5bWVudFRyYW5zYWN0aW9uRGF0YRIrChFyZWNpcGllbnRfYWRkcmVzcxgBIAEoDFIQcmVjaXBpZW50QWRkcmVzcxIWCgZhbW91bnQYAiABKANSBmFtb3VudA==');

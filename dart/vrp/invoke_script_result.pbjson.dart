///
//  Generated code. Do not modify.
//  source: vrp/invoke_script_result.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,deprecated_member_use_from_same_package,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use invokeScriptResultDescriptor instead')
const InvokeScriptResult$json = const {
  '1': 'InvokeScriptResult',
  '2': const [
    const {'1': 'data', '3': 1, '4': 3, '5': 11, '6': '.vrp.DataTransactionData.DataEntry', '10': 'data'},
    const {'1': 'transfers', '3': 2, '4': 3, '5': 11, '6': '.vrp.InvokeScriptResult.Payment', '10': 'transfers'},
    const {'1': 'issues', '3': 3, '4': 3, '5': 11, '6': '.vrp.InvokeScriptResult.Issue', '10': 'issues'},
    const {'1': 'reissues', '3': 4, '4': 3, '5': 11, '6': '.vrp.InvokeScriptResult.Reissue', '10': 'reissues'},
    const {'1': 'burns', '3': 5, '4': 3, '5': 11, '6': '.vrp.InvokeScriptResult.Burn', '10': 'burns'},
    const {'1': 'error_message', '3': 6, '4': 1, '5': 11, '6': '.vrp.InvokeScriptResult.ErrorMessage', '10': 'errorMessage'},
    const {'1': 'sponsor_fees', '3': 7, '4': 3, '5': 11, '6': '.vrp.InvokeScriptResult.SponsorFee', '10': 'sponsorFees'},
    const {'1': 'leases', '3': 8, '4': 3, '5': 11, '6': '.vrp.InvokeScriptResult.Lease', '10': 'leases'},
    const {'1': 'lease_cancels', '3': 9, '4': 3, '5': 11, '6': '.vrp.InvokeScriptResult.LeaseCancel', '10': 'leaseCancels'},
    const {'1': 'invokes', '3': 10, '4': 3, '5': 11, '6': '.vrp.InvokeScriptResult.Invocation', '10': 'invokes'},
    const {'1': 'private_payment', '3': 11, '4': 3, '5': 11, '6': '.vrp.InvokeScriptResult.PrivatePayment', '10': 'privatePayment'},
  ],
  '3': const [InvokeScriptResult_Payment$json, InvokeScriptResult_PrivatePayment$json, InvokeScriptResult_Issue$json, InvokeScriptResult_Reissue$json, InvokeScriptResult_Burn$json, InvokeScriptResult_SponsorFee$json, InvokeScriptResult_Lease$json, InvokeScriptResult_LeaseCancel$json, InvokeScriptResult_ErrorMessage$json, InvokeScriptResult_Call$json, InvokeScriptResult_Invocation$json],
};

@$core.Deprecated('Use invokeScriptResultDescriptor instead')
const InvokeScriptResult_Payment$json = const {
  '1': 'Payment',
  '2': const [
    const {'1': 'address', '3': 1, '4': 1, '5': 12, '10': 'address'},
    const {'1': 'amount', '3': 2, '4': 1, '5': 11, '6': '.vrp.Amount', '10': 'amount'},
  ],
};

@$core.Deprecated('Use invokeScriptResultDescriptor instead')
const InvokeScriptResult_PrivatePayment$json = const {
  '1': 'PrivatePayment',
  '2': const [
    const {'1': 'address', '3': 1, '4': 1, '5': 12, '10': 'address'},
    const {'1': 'amount', '3': 2, '4': 1, '5': 11, '6': '.vrp.Amount', '10': 'amount'},
  ],
};

@$core.Deprecated('Use invokeScriptResultDescriptor instead')
const InvokeScriptResult_Issue$json = const {
  '1': 'Issue',
  '2': const [
    const {'1': 'asset_id', '3': 1, '4': 1, '5': 12, '10': 'assetId'},
    const {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'description', '3': 3, '4': 1, '5': 9, '10': 'description'},
    const {'1': 'image', '3': 4, '4': 1, '5': 9, '10': 'image'},
    const {'1': 'amount', '3': 5, '4': 1, '5': 3, '10': 'amount'},
    const {'1': 'decimals', '3': 6, '4': 1, '5': 5, '10': 'decimals'},
    const {'1': 'reissuable', '3': 7, '4': 1, '5': 8, '10': 'reissuable'},
    const {'1': 'script', '3': 8, '4': 1, '5': 12, '10': 'script'},
    const {'1': 'nonce', '3': 9, '4': 1, '5': 3, '10': 'nonce'},
  ],
};

@$core.Deprecated('Use invokeScriptResultDescriptor instead')
const InvokeScriptResult_Reissue$json = const {
  '1': 'Reissue',
  '2': const [
    const {'1': 'asset_id', '3': 1, '4': 1, '5': 12, '10': 'assetId'},
    const {'1': 'amount', '3': 2, '4': 1, '5': 3, '10': 'amount'},
    const {'1': 'is_reissuable', '3': 3, '4': 1, '5': 8, '10': 'isReissuable'},
  ],
};

@$core.Deprecated('Use invokeScriptResultDescriptor instead')
const InvokeScriptResult_Burn$json = const {
  '1': 'Burn',
  '2': const [
    const {'1': 'asset_id', '3': 1, '4': 1, '5': 12, '10': 'assetId'},
    const {'1': 'amount', '3': 2, '4': 1, '5': 3, '10': 'amount'},
  ],
};

@$core.Deprecated('Use invokeScriptResultDescriptor instead')
const InvokeScriptResult_SponsorFee$json = const {
  '1': 'SponsorFee',
  '2': const [
    const {'1': 'min_fee', '3': 1, '4': 1, '5': 11, '6': '.vrp.Amount', '10': 'minFee'},
  ],
};

@$core.Deprecated('Use invokeScriptResultDescriptor instead')
const InvokeScriptResult_Lease$json = const {
  '1': 'Lease',
  '2': const [
    const {'1': 'recipient', '3': 1, '4': 1, '5': 11, '6': '.vrp.Recipient', '10': 'recipient'},
    const {'1': 'amount', '3': 2, '4': 1, '5': 3, '10': 'amount'},
    const {'1': 'nonce', '3': 3, '4': 1, '5': 3, '10': 'nonce'},
    const {'1': 'lease_id', '3': 4, '4': 1, '5': 12, '10': 'leaseId'},
  ],
};

@$core.Deprecated('Use invokeScriptResultDescriptor instead')
const InvokeScriptResult_LeaseCancel$json = const {
  '1': 'LeaseCancel',
  '2': const [
    const {'1': 'lease_id', '3': 1, '4': 1, '5': 12, '10': 'leaseId'},
  ],
};

@$core.Deprecated('Use invokeScriptResultDescriptor instead')
const InvokeScriptResult_ErrorMessage$json = const {
  '1': 'ErrorMessage',
  '2': const [
    const {'1': 'code', '3': 1, '4': 1, '5': 5, '10': 'code'},
    const {'1': 'text', '3': 2, '4': 1, '5': 9, '10': 'text'},
  ],
};

@$core.Deprecated('Use invokeScriptResultDescriptor instead')
const InvokeScriptResult_Call$json = const {
  '1': 'Call',
  '2': const [
    const {'1': 'function', '3': 1, '4': 1, '5': 9, '10': 'function'},
    const {
      '1': 'args_bytes',
      '3': 2,
      '4': 3,
      '5': 12,
      '8': const {'3': true},
      '10': 'argsBytes',
    },
    const {'1': 'args', '3': 3, '4': 3, '5': 11, '6': '.vrp.InvokeScriptResult.Call.Argument', '10': 'args'},
  ],
  '3': const [InvokeScriptResult_Call_Argument$json],
};

@$core.Deprecated('Use invokeScriptResultDescriptor instead')
const InvokeScriptResult_Call_Argument$json = const {
  '1': 'Argument',
  '2': const [
    const {'1': 'integer_value', '3': 1, '4': 1, '5': 3, '9': 0, '10': 'integerValue'},
    const {'1': 'binary_value', '3': 2, '4': 1, '5': 12, '9': 0, '10': 'binaryValue'},
    const {'1': 'string_value', '3': 3, '4': 1, '5': 9, '9': 0, '10': 'stringValue'},
    const {'1': 'boolean_value', '3': 4, '4': 1, '5': 8, '9': 0, '10': 'booleanValue'},
    const {'1': 'case_obj', '3': 5, '4': 1, '5': 12, '9': 0, '10': 'caseObj'},
    const {'1': 'list', '3': 10, '4': 1, '5': 11, '6': '.vrp.InvokeScriptResult.Call.Argument.List', '9': 0, '10': 'list'},
  ],
  '3': const [InvokeScriptResult_Call_Argument_List$json],
  '8': const [
    const {'1': 'value'},
  ],
};

@$core.Deprecated('Use invokeScriptResultDescriptor instead')
const InvokeScriptResult_Call_Argument_List$json = const {
  '1': 'List',
  '2': const [
    const {'1': 'items', '3': 1, '4': 3, '5': 11, '6': '.vrp.InvokeScriptResult.Call.Argument', '10': 'items'},
  ],
};

@$core.Deprecated('Use invokeScriptResultDescriptor instead')
const InvokeScriptResult_Invocation$json = const {
  '1': 'Invocation',
  '2': const [
    const {'1': 'dApp', '3': 1, '4': 1, '5': 12, '10': 'dApp'},
    const {'1': 'call', '3': 2, '4': 1, '5': 11, '6': '.vrp.InvokeScriptResult.Call', '10': 'call'},
    const {'1': 'payments', '3': 3, '4': 3, '5': 11, '6': '.vrp.Amount', '10': 'payments'},
    const {'1': 'stateChanges', '3': 4, '4': 1, '5': 11, '6': '.vrp.InvokeScriptResult', '10': 'stateChanges'},
  ],
};

/// Descriptor for `InvokeScriptResult`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List invokeScriptResultDescriptor = $convert.base64Decode('ChJJbnZva2VTY3JpcHRSZXN1bHQSNgoEZGF0YRgBIAMoCzIiLnZycC5EYXRhVHJhbnNhY3Rpb25EYXRhLkRhdGFFbnRyeVIEZGF0YRI9Cgl0cmFuc2ZlcnMYAiADKAsyHy52cnAuSW52b2tlU2NyaXB0UmVzdWx0LlBheW1lbnRSCXRyYW5zZmVycxI1CgZpc3N1ZXMYAyADKAsyHS52cnAuSW52b2tlU2NyaXB0UmVzdWx0Lklzc3VlUgZpc3N1ZXMSOwoIcmVpc3N1ZXMYBCADKAsyHy52cnAuSW52b2tlU2NyaXB0UmVzdWx0LlJlaXNzdWVSCHJlaXNzdWVzEjIKBWJ1cm5zGAUgAygLMhwudnJwLkludm9rZVNjcmlwdFJlc3VsdC5CdXJuUgVidXJucxJJCg1lcnJvcl9tZXNzYWdlGAYgASgLMiQudnJwLkludm9rZVNjcmlwdFJlc3VsdC5FcnJvck1lc3NhZ2VSDGVycm9yTWVzc2FnZRJFCgxzcG9uc29yX2ZlZXMYByADKAsyIi52cnAuSW52b2tlU2NyaXB0UmVzdWx0LlNwb25zb3JGZWVSC3Nwb25zb3JGZWVzEjUKBmxlYXNlcxgIIAMoCzIdLnZycC5JbnZva2VTY3JpcHRSZXN1bHQuTGVhc2VSBmxlYXNlcxJICg1sZWFzZV9jYW5jZWxzGAkgAygLMiMudnJwLkludm9rZVNjcmlwdFJlc3VsdC5MZWFzZUNhbmNlbFIMbGVhc2VDYW5jZWxzEjwKB2ludm9rZXMYCiADKAsyIi52cnAuSW52b2tlU2NyaXB0UmVzdWx0Lkludm9jYXRpb25SB2ludm9rZXMSTwoPcHJpdmF0ZV9wYXltZW50GAsgAygLMiYudnJwLkludm9rZVNjcmlwdFJlc3VsdC5Qcml2YXRlUGF5bWVudFIOcHJpdmF0ZVBheW1lbnQaSAoHUGF5bWVudBIYCgdhZGRyZXNzGAEgASgMUgdhZGRyZXNzEiMKBmFtb3VudBgCIAEoCzILLnZycC5BbW91bnRSBmFtb3VudBpPCg5Qcml2YXRlUGF5bWVudBIYCgdhZGRyZXNzGAEgASgMUgdhZGRyZXNzEiMKBmFtb3VudBgCIAEoCzILLnZycC5BbW91bnRSBmFtb3VudBrwAQoFSXNzdWUSGQoIYXNzZXRfaWQYASABKAxSB2Fzc2V0SWQSEgoEbmFtZRgCIAEoCVIEbmFtZRIgCgtkZXNjcmlwdGlvbhgDIAEoCVILZGVzY3JpcHRpb24SFAoFaW1hZ2UYBCABKAlSBWltYWdlEhYKBmFtb3VudBgFIAEoA1IGYW1vdW50EhoKCGRlY2ltYWxzGAYgASgFUghkZWNpbWFscxIeCgpyZWlzc3VhYmxlGAcgASgIUgpyZWlzc3VhYmxlEhYKBnNjcmlwdBgIIAEoDFIGc2NyaXB0EhQKBW5vbmNlGAkgASgDUgVub25jZRphCgdSZWlzc3VlEhkKCGFzc2V0X2lkGAEgASgMUgdhc3NldElkEhYKBmFtb3VudBgCIAEoA1IGYW1vdW50EiMKDWlzX3JlaXNzdWFibGUYAyABKAhSDGlzUmVpc3N1YWJsZRo5CgRCdXJuEhkKCGFzc2V0X2lkGAEgASgMUgdhc3NldElkEhYKBmFtb3VudBgCIAEoA1IGYW1vdW50GjIKClNwb25zb3JGZWUSJAoHbWluX2ZlZRgBIAEoCzILLnZycC5BbW91bnRSBm1pbkZlZRp+CgVMZWFzZRIsCglyZWNpcGllbnQYASABKAsyDi52cnAuUmVjaXBpZW50UglyZWNpcGllbnQSFgoGYW1vdW50GAIgASgDUgZhbW91bnQSFAoFbm9uY2UYAyABKANSBW5vbmNlEhkKCGxlYXNlX2lkGAQgASgMUgdsZWFzZUlkGigKC0xlYXNlQ2FuY2VsEhkKCGxlYXNlX2lkGAEgASgMUgdsZWFzZUlkGjYKDEVycm9yTWVzc2FnZRISCgRjb2RlGAEgASgFUgRjb2RlEhIKBHRleHQYAiABKAlSBHRleHQa0gMKBENhbGwSGgoIZnVuY3Rpb24YASABKAlSCGZ1bmN0aW9uEiEKCmFyZ3NfYnl0ZXMYAiADKAxCAhgBUglhcmdzQnl0ZXMSOQoEYXJncxgDIAMoCzIlLnZycC5JbnZva2VTY3JpcHRSZXN1bHQuQ2FsbC5Bcmd1bWVudFIEYXJncxrPAgoIQXJndW1lbnQSJQoNaW50ZWdlcl92YWx1ZRgBIAEoA0gAUgxpbnRlZ2VyVmFsdWUSIwoMYmluYXJ5X3ZhbHVlGAIgASgMSABSC2JpbmFyeVZhbHVlEiMKDHN0cmluZ192YWx1ZRgDIAEoCUgAUgtzdHJpbmdWYWx1ZRIlCg1ib29sZWFuX3ZhbHVlGAQgASgISABSDGJvb2xlYW5WYWx1ZRIbCghjYXNlX29iahgFIAEoDEgAUgdjYXNlT2JqEkAKBGxpc3QYCiABKAsyKi52cnAuSW52b2tlU2NyaXB0UmVzdWx0LkNhbGwuQXJndW1lbnQuTGlzdEgAUgRsaXN0GkMKBExpc3QSOwoFaXRlbXMYASADKAsyJS52cnAuSW52b2tlU2NyaXB0UmVzdWx0LkNhbGwuQXJndW1lbnRSBWl0ZW1zQgcKBXZhbHVlGrgBCgpJbnZvY2F0aW9uEhIKBGRBcHAYASABKAxSBGRBcHASMAoEY2FsbBgCIAEoCzIcLnZycC5JbnZva2VTY3JpcHRSZXN1bHQuQ2FsbFIEY2FsbBInCghwYXltZW50cxgDIAMoCzILLnZycC5BbW91bnRSCHBheW1lbnRzEjsKDHN0YXRlQ2hhbmdlcxgEIAEoCzIXLnZycC5JbnZva2VTY3JpcHRSZXN1bHRSDHN0YXRlQ2hhbmdlcw==');

///
//  Generated code. Do not modify.
//  source: vrp/recipient.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,deprecated_member_use_from_same_package,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use recipientDescriptor instead')
const Recipient$json = const {
  '1': 'Recipient',
  '2': const [
    const {'1': 'public_key_hash', '3': 1, '4': 1, '5': 12, '9': 0, '10': 'publicKeyHash'},
    const {'1': 'alias', '3': 2, '4': 1, '5': 9, '9': 0, '10': 'alias'},
  ],
  '8': const [
    const {'1': 'recipient'},
  ],
};

/// Descriptor for `Recipient`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List recipientDescriptor = $convert.base64Decode('CglSZWNpcGllbnQSKAoPcHVibGljX2tleV9oYXNoGAEgASgMSABSDXB1YmxpY0tleUhhc2gSFgoFYWxpYXMYAiABKAlIAFIFYWxpYXNCCwoJcmVjaXBpZW50');

///
//  Generated code. Do not modify.
//  source: vrp/recipient.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

enum Recipient_Recipient {
  publicKeyHash, 
  alias, 
  notSet
}

class Recipient extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, Recipient_Recipient> _Recipient_RecipientByTag = {
    1 : Recipient_Recipient.publicKeyHash,
    2 : Recipient_Recipient.alias,
    0 : Recipient_Recipient.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Recipient', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..oo(0, [1, 2])
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'publicKeyHash', $pb.PbFieldType.OY)
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'alias')
    ..hasRequiredFields = false
  ;

  Recipient._() : super();
  factory Recipient({
    $core.List<$core.int>? publicKeyHash,
    $core.String? alias,
  }) {
    final _result = create();
    if (publicKeyHash != null) {
      _result.publicKeyHash = publicKeyHash;
    }
    if (alias != null) {
      _result.alias = alias;
    }
    return _result;
  }
  factory Recipient.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Recipient.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Recipient clone() => Recipient()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Recipient copyWith(void Function(Recipient) updates) => super.copyWith((message) => updates(message as Recipient)) as Recipient; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Recipient create() => Recipient._();
  Recipient createEmptyInstance() => create();
  static $pb.PbList<Recipient> createRepeated() => $pb.PbList<Recipient>();
  @$core.pragma('dart2js:noInline')
  static Recipient getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Recipient>(create);
  static Recipient? _defaultInstance;

  Recipient_Recipient whichRecipient() => _Recipient_RecipientByTag[$_whichOneof(0)]!;
  void clearRecipient() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  $core.List<$core.int> get publicKeyHash => $_getN(0);
  @$pb.TagNumber(1)
  set publicKeyHash($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasPublicKeyHash() => $_has(0);
  @$pb.TagNumber(1)
  void clearPublicKeyHash() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get alias => $_getSZ(1);
  @$pb.TagNumber(2)
  set alias($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasAlias() => $_has(1);
  @$pb.TagNumber(2)
  void clearAlias() => clearField(2);
}


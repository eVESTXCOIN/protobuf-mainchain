///
//  Generated code. Do not modify.
//  source: vrp/invoke_script_result.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:core' as $core;

import 'package:fixnum/fixnum.dart' as $fixnum;
import 'package:protobuf/protobuf.dart' as $pb;

import 'transaction.pb.dart' as $3;
import 'amount.pb.dart' as $0;
import 'recipient.pb.dart' as $1;

class InvokeScriptResult_Payment extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'InvokeScriptResult.Payment', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'address', $pb.PbFieldType.OY)
    ..aOM<$0.Amount>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'amount', subBuilder: $0.Amount.create)
    ..hasRequiredFields = false
  ;

  InvokeScriptResult_Payment._() : super();
  factory InvokeScriptResult_Payment({
    $core.List<$core.int>? address,
    $0.Amount? amount,
  }) {
    final _result = create();
    if (address != null) {
      _result.address = address;
    }
    if (amount != null) {
      _result.amount = amount;
    }
    return _result;
  }
  factory InvokeScriptResult_Payment.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory InvokeScriptResult_Payment.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  InvokeScriptResult_Payment clone() => InvokeScriptResult_Payment()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  InvokeScriptResult_Payment copyWith(void Function(InvokeScriptResult_Payment) updates) => super.copyWith((message) => updates(message as InvokeScriptResult_Payment)) as InvokeScriptResult_Payment; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult_Payment create() => InvokeScriptResult_Payment._();
  InvokeScriptResult_Payment createEmptyInstance() => create();
  static $pb.PbList<InvokeScriptResult_Payment> createRepeated() => $pb.PbList<InvokeScriptResult_Payment>();
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult_Payment getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<InvokeScriptResult_Payment>(create);
  static InvokeScriptResult_Payment? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get address => $_getN(0);
  @$pb.TagNumber(1)
  set address($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasAddress() => $_has(0);
  @$pb.TagNumber(1)
  void clearAddress() => clearField(1);

  @$pb.TagNumber(2)
  $0.Amount get amount => $_getN(1);
  @$pb.TagNumber(2)
  set amount($0.Amount v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasAmount() => $_has(1);
  @$pb.TagNumber(2)
  void clearAmount() => clearField(2);
  @$pb.TagNumber(2)
  $0.Amount ensureAmount() => $_ensure(1);
}

class InvokeScriptResult_PrivatePayment extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'InvokeScriptResult.PrivatePayment', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'address', $pb.PbFieldType.OY)
    ..aOM<$0.Amount>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'amount', subBuilder: $0.Amount.create)
    ..hasRequiredFields = false
  ;

  InvokeScriptResult_PrivatePayment._() : super();
  factory InvokeScriptResult_PrivatePayment({
    $core.List<$core.int>? address,
    $0.Amount? amount,
  }) {
    final _result = create();
    if (address != null) {
      _result.address = address;
    }
    if (amount != null) {
      _result.amount = amount;
    }
    return _result;
  }
  factory InvokeScriptResult_PrivatePayment.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory InvokeScriptResult_PrivatePayment.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  InvokeScriptResult_PrivatePayment clone() => InvokeScriptResult_PrivatePayment()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  InvokeScriptResult_PrivatePayment copyWith(void Function(InvokeScriptResult_PrivatePayment) updates) => super.copyWith((message) => updates(message as InvokeScriptResult_PrivatePayment)) as InvokeScriptResult_PrivatePayment; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult_PrivatePayment create() => InvokeScriptResult_PrivatePayment._();
  InvokeScriptResult_PrivatePayment createEmptyInstance() => create();
  static $pb.PbList<InvokeScriptResult_PrivatePayment> createRepeated() => $pb.PbList<InvokeScriptResult_PrivatePayment>();
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult_PrivatePayment getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<InvokeScriptResult_PrivatePayment>(create);
  static InvokeScriptResult_PrivatePayment? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get address => $_getN(0);
  @$pb.TagNumber(1)
  set address($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasAddress() => $_has(0);
  @$pb.TagNumber(1)
  void clearAddress() => clearField(1);

  @$pb.TagNumber(2)
  $0.Amount get amount => $_getN(1);
  @$pb.TagNumber(2)
  set amount($0.Amount v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasAmount() => $_has(1);
  @$pb.TagNumber(2)
  void clearAmount() => clearField(2);
  @$pb.TagNumber(2)
  $0.Amount ensureAmount() => $_ensure(1);
}

class InvokeScriptResult_Issue extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'InvokeScriptResult.Issue', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'assetId', $pb.PbFieldType.OY)
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'description')
    ..aOS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'image')
    ..aInt64(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'amount')
    ..a<$core.int>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'decimals', $pb.PbFieldType.O3)
    ..aOB(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'reissuable')
    ..a<$core.List<$core.int>>(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'script', $pb.PbFieldType.OY)
    ..aInt64(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'nonce')
    ..hasRequiredFields = false
  ;

  InvokeScriptResult_Issue._() : super();
  factory InvokeScriptResult_Issue({
    $core.List<$core.int>? assetId,
    $core.String? name,
    $core.String? description,
    $core.String? image,
    $fixnum.Int64? amount,
    $core.int? decimals,
    $core.bool? reissuable,
    $core.List<$core.int>? script,
    $fixnum.Int64? nonce,
  }) {
    final _result = create();
    if (assetId != null) {
      _result.assetId = assetId;
    }
    if (name != null) {
      _result.name = name;
    }
    if (description != null) {
      _result.description = description;
    }
    if (image != null) {
      _result.image = image;
    }
    if (amount != null) {
      _result.amount = amount;
    }
    if (decimals != null) {
      _result.decimals = decimals;
    }
    if (reissuable != null) {
      _result.reissuable = reissuable;
    }
    if (script != null) {
      _result.script = script;
    }
    if (nonce != null) {
      _result.nonce = nonce;
    }
    return _result;
  }
  factory InvokeScriptResult_Issue.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory InvokeScriptResult_Issue.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  InvokeScriptResult_Issue clone() => InvokeScriptResult_Issue()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  InvokeScriptResult_Issue copyWith(void Function(InvokeScriptResult_Issue) updates) => super.copyWith((message) => updates(message as InvokeScriptResult_Issue)) as InvokeScriptResult_Issue; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult_Issue create() => InvokeScriptResult_Issue._();
  InvokeScriptResult_Issue createEmptyInstance() => create();
  static $pb.PbList<InvokeScriptResult_Issue> createRepeated() => $pb.PbList<InvokeScriptResult_Issue>();
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult_Issue getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<InvokeScriptResult_Issue>(create);
  static InvokeScriptResult_Issue? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get assetId => $_getN(0);
  @$pb.TagNumber(1)
  set assetId($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasAssetId() => $_has(0);
  @$pb.TagNumber(1)
  void clearAssetId() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get name => $_getSZ(1);
  @$pb.TagNumber(2)
  set name($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasName() => $_has(1);
  @$pb.TagNumber(2)
  void clearName() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get description => $_getSZ(2);
  @$pb.TagNumber(3)
  set description($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasDescription() => $_has(2);
  @$pb.TagNumber(3)
  void clearDescription() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get image => $_getSZ(3);
  @$pb.TagNumber(4)
  set image($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasImage() => $_has(3);
  @$pb.TagNumber(4)
  void clearImage() => clearField(4);

  @$pb.TagNumber(5)
  $fixnum.Int64 get amount => $_getI64(4);
  @$pb.TagNumber(5)
  set amount($fixnum.Int64 v) { $_setInt64(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasAmount() => $_has(4);
  @$pb.TagNumber(5)
  void clearAmount() => clearField(5);

  @$pb.TagNumber(6)
  $core.int get decimals => $_getIZ(5);
  @$pb.TagNumber(6)
  set decimals($core.int v) { $_setSignedInt32(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasDecimals() => $_has(5);
  @$pb.TagNumber(6)
  void clearDecimals() => clearField(6);

  @$pb.TagNumber(7)
  $core.bool get reissuable => $_getBF(6);
  @$pb.TagNumber(7)
  set reissuable($core.bool v) { $_setBool(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasReissuable() => $_has(6);
  @$pb.TagNumber(7)
  void clearReissuable() => clearField(7);

  @$pb.TagNumber(8)
  $core.List<$core.int> get script => $_getN(7);
  @$pb.TagNumber(8)
  set script($core.List<$core.int> v) { $_setBytes(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasScript() => $_has(7);
  @$pb.TagNumber(8)
  void clearScript() => clearField(8);

  @$pb.TagNumber(9)
  $fixnum.Int64 get nonce => $_getI64(8);
  @$pb.TagNumber(9)
  set nonce($fixnum.Int64 v) { $_setInt64(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasNonce() => $_has(8);
  @$pb.TagNumber(9)
  void clearNonce() => clearField(9);
}

class InvokeScriptResult_Reissue extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'InvokeScriptResult.Reissue', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'assetId', $pb.PbFieldType.OY)
    ..aInt64(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'amount')
    ..aOB(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'isReissuable')
    ..hasRequiredFields = false
  ;

  InvokeScriptResult_Reissue._() : super();
  factory InvokeScriptResult_Reissue({
    $core.List<$core.int>? assetId,
    $fixnum.Int64? amount,
    $core.bool? isReissuable,
  }) {
    final _result = create();
    if (assetId != null) {
      _result.assetId = assetId;
    }
    if (amount != null) {
      _result.amount = amount;
    }
    if (isReissuable != null) {
      _result.isReissuable = isReissuable;
    }
    return _result;
  }
  factory InvokeScriptResult_Reissue.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory InvokeScriptResult_Reissue.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  InvokeScriptResult_Reissue clone() => InvokeScriptResult_Reissue()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  InvokeScriptResult_Reissue copyWith(void Function(InvokeScriptResult_Reissue) updates) => super.copyWith((message) => updates(message as InvokeScriptResult_Reissue)) as InvokeScriptResult_Reissue; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult_Reissue create() => InvokeScriptResult_Reissue._();
  InvokeScriptResult_Reissue createEmptyInstance() => create();
  static $pb.PbList<InvokeScriptResult_Reissue> createRepeated() => $pb.PbList<InvokeScriptResult_Reissue>();
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult_Reissue getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<InvokeScriptResult_Reissue>(create);
  static InvokeScriptResult_Reissue? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get assetId => $_getN(0);
  @$pb.TagNumber(1)
  set assetId($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasAssetId() => $_has(0);
  @$pb.TagNumber(1)
  void clearAssetId() => clearField(1);

  @$pb.TagNumber(2)
  $fixnum.Int64 get amount => $_getI64(1);
  @$pb.TagNumber(2)
  set amount($fixnum.Int64 v) { $_setInt64(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasAmount() => $_has(1);
  @$pb.TagNumber(2)
  void clearAmount() => clearField(2);

  @$pb.TagNumber(3)
  $core.bool get isReissuable => $_getBF(2);
  @$pb.TagNumber(3)
  set isReissuable($core.bool v) { $_setBool(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasIsReissuable() => $_has(2);
  @$pb.TagNumber(3)
  void clearIsReissuable() => clearField(3);
}

class InvokeScriptResult_Burn extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'InvokeScriptResult.Burn', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'assetId', $pb.PbFieldType.OY)
    ..aInt64(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'amount')
    ..hasRequiredFields = false
  ;

  InvokeScriptResult_Burn._() : super();
  factory InvokeScriptResult_Burn({
    $core.List<$core.int>? assetId,
    $fixnum.Int64? amount,
  }) {
    final _result = create();
    if (assetId != null) {
      _result.assetId = assetId;
    }
    if (amount != null) {
      _result.amount = amount;
    }
    return _result;
  }
  factory InvokeScriptResult_Burn.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory InvokeScriptResult_Burn.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  InvokeScriptResult_Burn clone() => InvokeScriptResult_Burn()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  InvokeScriptResult_Burn copyWith(void Function(InvokeScriptResult_Burn) updates) => super.copyWith((message) => updates(message as InvokeScriptResult_Burn)) as InvokeScriptResult_Burn; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult_Burn create() => InvokeScriptResult_Burn._();
  InvokeScriptResult_Burn createEmptyInstance() => create();
  static $pb.PbList<InvokeScriptResult_Burn> createRepeated() => $pb.PbList<InvokeScriptResult_Burn>();
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult_Burn getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<InvokeScriptResult_Burn>(create);
  static InvokeScriptResult_Burn? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get assetId => $_getN(0);
  @$pb.TagNumber(1)
  set assetId($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasAssetId() => $_has(0);
  @$pb.TagNumber(1)
  void clearAssetId() => clearField(1);

  @$pb.TagNumber(2)
  $fixnum.Int64 get amount => $_getI64(1);
  @$pb.TagNumber(2)
  set amount($fixnum.Int64 v) { $_setInt64(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasAmount() => $_has(1);
  @$pb.TagNumber(2)
  void clearAmount() => clearField(2);
}

class InvokeScriptResult_SponsorFee extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'InvokeScriptResult.SponsorFee', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..aOM<$0.Amount>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'minFee', subBuilder: $0.Amount.create)
    ..hasRequiredFields = false
  ;

  InvokeScriptResult_SponsorFee._() : super();
  factory InvokeScriptResult_SponsorFee({
    $0.Amount? minFee,
  }) {
    final _result = create();
    if (minFee != null) {
      _result.minFee = minFee;
    }
    return _result;
  }
  factory InvokeScriptResult_SponsorFee.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory InvokeScriptResult_SponsorFee.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  InvokeScriptResult_SponsorFee clone() => InvokeScriptResult_SponsorFee()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  InvokeScriptResult_SponsorFee copyWith(void Function(InvokeScriptResult_SponsorFee) updates) => super.copyWith((message) => updates(message as InvokeScriptResult_SponsorFee)) as InvokeScriptResult_SponsorFee; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult_SponsorFee create() => InvokeScriptResult_SponsorFee._();
  InvokeScriptResult_SponsorFee createEmptyInstance() => create();
  static $pb.PbList<InvokeScriptResult_SponsorFee> createRepeated() => $pb.PbList<InvokeScriptResult_SponsorFee>();
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult_SponsorFee getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<InvokeScriptResult_SponsorFee>(create);
  static InvokeScriptResult_SponsorFee? _defaultInstance;

  @$pb.TagNumber(1)
  $0.Amount get minFee => $_getN(0);
  @$pb.TagNumber(1)
  set minFee($0.Amount v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasMinFee() => $_has(0);
  @$pb.TagNumber(1)
  void clearMinFee() => clearField(1);
  @$pb.TagNumber(1)
  $0.Amount ensureMinFee() => $_ensure(0);
}

class InvokeScriptResult_Lease extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'InvokeScriptResult.Lease', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..aOM<$1.Recipient>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'recipient', subBuilder: $1.Recipient.create)
    ..aInt64(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'amount')
    ..aInt64(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'nonce')
    ..a<$core.List<$core.int>>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'leaseId', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  InvokeScriptResult_Lease._() : super();
  factory InvokeScriptResult_Lease({
    $1.Recipient? recipient,
    $fixnum.Int64? amount,
    $fixnum.Int64? nonce,
    $core.List<$core.int>? leaseId,
  }) {
    final _result = create();
    if (recipient != null) {
      _result.recipient = recipient;
    }
    if (amount != null) {
      _result.amount = amount;
    }
    if (nonce != null) {
      _result.nonce = nonce;
    }
    if (leaseId != null) {
      _result.leaseId = leaseId;
    }
    return _result;
  }
  factory InvokeScriptResult_Lease.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory InvokeScriptResult_Lease.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  InvokeScriptResult_Lease clone() => InvokeScriptResult_Lease()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  InvokeScriptResult_Lease copyWith(void Function(InvokeScriptResult_Lease) updates) => super.copyWith((message) => updates(message as InvokeScriptResult_Lease)) as InvokeScriptResult_Lease; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult_Lease create() => InvokeScriptResult_Lease._();
  InvokeScriptResult_Lease createEmptyInstance() => create();
  static $pb.PbList<InvokeScriptResult_Lease> createRepeated() => $pb.PbList<InvokeScriptResult_Lease>();
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult_Lease getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<InvokeScriptResult_Lease>(create);
  static InvokeScriptResult_Lease? _defaultInstance;

  @$pb.TagNumber(1)
  $1.Recipient get recipient => $_getN(0);
  @$pb.TagNumber(1)
  set recipient($1.Recipient v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasRecipient() => $_has(0);
  @$pb.TagNumber(1)
  void clearRecipient() => clearField(1);
  @$pb.TagNumber(1)
  $1.Recipient ensureRecipient() => $_ensure(0);

  @$pb.TagNumber(2)
  $fixnum.Int64 get amount => $_getI64(1);
  @$pb.TagNumber(2)
  set amount($fixnum.Int64 v) { $_setInt64(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasAmount() => $_has(1);
  @$pb.TagNumber(2)
  void clearAmount() => clearField(2);

  @$pb.TagNumber(3)
  $fixnum.Int64 get nonce => $_getI64(2);
  @$pb.TagNumber(3)
  set nonce($fixnum.Int64 v) { $_setInt64(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasNonce() => $_has(2);
  @$pb.TagNumber(3)
  void clearNonce() => clearField(3);

  @$pb.TagNumber(4)
  $core.List<$core.int> get leaseId => $_getN(3);
  @$pb.TagNumber(4)
  set leaseId($core.List<$core.int> v) { $_setBytes(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasLeaseId() => $_has(3);
  @$pb.TagNumber(4)
  void clearLeaseId() => clearField(4);
}

class InvokeScriptResult_LeaseCancel extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'InvokeScriptResult.LeaseCancel', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'leaseId', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  InvokeScriptResult_LeaseCancel._() : super();
  factory InvokeScriptResult_LeaseCancel({
    $core.List<$core.int>? leaseId,
  }) {
    final _result = create();
    if (leaseId != null) {
      _result.leaseId = leaseId;
    }
    return _result;
  }
  factory InvokeScriptResult_LeaseCancel.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory InvokeScriptResult_LeaseCancel.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  InvokeScriptResult_LeaseCancel clone() => InvokeScriptResult_LeaseCancel()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  InvokeScriptResult_LeaseCancel copyWith(void Function(InvokeScriptResult_LeaseCancel) updates) => super.copyWith((message) => updates(message as InvokeScriptResult_LeaseCancel)) as InvokeScriptResult_LeaseCancel; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult_LeaseCancel create() => InvokeScriptResult_LeaseCancel._();
  InvokeScriptResult_LeaseCancel createEmptyInstance() => create();
  static $pb.PbList<InvokeScriptResult_LeaseCancel> createRepeated() => $pb.PbList<InvokeScriptResult_LeaseCancel>();
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult_LeaseCancel getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<InvokeScriptResult_LeaseCancel>(create);
  static InvokeScriptResult_LeaseCancel? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get leaseId => $_getN(0);
  @$pb.TagNumber(1)
  set leaseId($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasLeaseId() => $_has(0);
  @$pb.TagNumber(1)
  void clearLeaseId() => clearField(1);
}

class InvokeScriptResult_ErrorMessage extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'InvokeScriptResult.ErrorMessage', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..a<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'code', $pb.PbFieldType.O3)
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'text')
    ..hasRequiredFields = false
  ;

  InvokeScriptResult_ErrorMessage._() : super();
  factory InvokeScriptResult_ErrorMessage({
    $core.int? code,
    $core.String? text,
  }) {
    final _result = create();
    if (code != null) {
      _result.code = code;
    }
    if (text != null) {
      _result.text = text;
    }
    return _result;
  }
  factory InvokeScriptResult_ErrorMessage.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory InvokeScriptResult_ErrorMessage.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  InvokeScriptResult_ErrorMessage clone() => InvokeScriptResult_ErrorMessage()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  InvokeScriptResult_ErrorMessage copyWith(void Function(InvokeScriptResult_ErrorMessage) updates) => super.copyWith((message) => updates(message as InvokeScriptResult_ErrorMessage)) as InvokeScriptResult_ErrorMessage; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult_ErrorMessage create() => InvokeScriptResult_ErrorMessage._();
  InvokeScriptResult_ErrorMessage createEmptyInstance() => create();
  static $pb.PbList<InvokeScriptResult_ErrorMessage> createRepeated() => $pb.PbList<InvokeScriptResult_ErrorMessage>();
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult_ErrorMessage getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<InvokeScriptResult_ErrorMessage>(create);
  static InvokeScriptResult_ErrorMessage? _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get code => $_getIZ(0);
  @$pb.TagNumber(1)
  set code($core.int v) { $_setSignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasCode() => $_has(0);
  @$pb.TagNumber(1)
  void clearCode() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get text => $_getSZ(1);
  @$pb.TagNumber(2)
  set text($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasText() => $_has(1);
  @$pb.TagNumber(2)
  void clearText() => clearField(2);
}

class InvokeScriptResult_Call_Argument_List extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'InvokeScriptResult.Call.Argument.List', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..pc<InvokeScriptResult_Call_Argument>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'items', $pb.PbFieldType.PM, subBuilder: InvokeScriptResult_Call_Argument.create)
    ..hasRequiredFields = false
  ;

  InvokeScriptResult_Call_Argument_List._() : super();
  factory InvokeScriptResult_Call_Argument_List({
    $core.Iterable<InvokeScriptResult_Call_Argument>? items,
  }) {
    final _result = create();
    if (items != null) {
      _result.items.addAll(items);
    }
    return _result;
  }
  factory InvokeScriptResult_Call_Argument_List.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory InvokeScriptResult_Call_Argument_List.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  InvokeScriptResult_Call_Argument_List clone() => InvokeScriptResult_Call_Argument_List()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  InvokeScriptResult_Call_Argument_List copyWith(void Function(InvokeScriptResult_Call_Argument_List) updates) => super.copyWith((message) => updates(message as InvokeScriptResult_Call_Argument_List)) as InvokeScriptResult_Call_Argument_List; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult_Call_Argument_List create() => InvokeScriptResult_Call_Argument_List._();
  InvokeScriptResult_Call_Argument_List createEmptyInstance() => create();
  static $pb.PbList<InvokeScriptResult_Call_Argument_List> createRepeated() => $pb.PbList<InvokeScriptResult_Call_Argument_List>();
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult_Call_Argument_List getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<InvokeScriptResult_Call_Argument_List>(create);
  static InvokeScriptResult_Call_Argument_List? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<InvokeScriptResult_Call_Argument> get items => $_getList(0);
}

enum InvokeScriptResult_Call_Argument_Value {
  integerValue, 
  binaryValue, 
  stringValue, 
  booleanValue, 
  caseObj, 
  list, 
  notSet
}

class InvokeScriptResult_Call_Argument extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, InvokeScriptResult_Call_Argument_Value> _InvokeScriptResult_Call_Argument_ValueByTag = {
    1 : InvokeScriptResult_Call_Argument_Value.integerValue,
    2 : InvokeScriptResult_Call_Argument_Value.binaryValue,
    3 : InvokeScriptResult_Call_Argument_Value.stringValue,
    4 : InvokeScriptResult_Call_Argument_Value.booleanValue,
    5 : InvokeScriptResult_Call_Argument_Value.caseObj,
    10 : InvokeScriptResult_Call_Argument_Value.list,
    0 : InvokeScriptResult_Call_Argument_Value.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'InvokeScriptResult.Call.Argument', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..oo(0, [1, 2, 3, 4, 5, 10])
    ..aInt64(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'integerValue')
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'binaryValue', $pb.PbFieldType.OY)
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'stringValue')
    ..aOB(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'booleanValue')
    ..a<$core.List<$core.int>>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'caseObj', $pb.PbFieldType.OY)
    ..aOM<InvokeScriptResult_Call_Argument_List>(10, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'list', subBuilder: InvokeScriptResult_Call_Argument_List.create)
    ..hasRequiredFields = false
  ;

  InvokeScriptResult_Call_Argument._() : super();
  factory InvokeScriptResult_Call_Argument({
    $fixnum.Int64? integerValue,
    $core.List<$core.int>? binaryValue,
    $core.String? stringValue,
    $core.bool? booleanValue,
    $core.List<$core.int>? caseObj,
    InvokeScriptResult_Call_Argument_List? list,
  }) {
    final _result = create();
    if (integerValue != null) {
      _result.integerValue = integerValue;
    }
    if (binaryValue != null) {
      _result.binaryValue = binaryValue;
    }
    if (stringValue != null) {
      _result.stringValue = stringValue;
    }
    if (booleanValue != null) {
      _result.booleanValue = booleanValue;
    }
    if (caseObj != null) {
      _result.caseObj = caseObj;
    }
    if (list != null) {
      _result.list = list;
    }
    return _result;
  }
  factory InvokeScriptResult_Call_Argument.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory InvokeScriptResult_Call_Argument.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  InvokeScriptResult_Call_Argument clone() => InvokeScriptResult_Call_Argument()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  InvokeScriptResult_Call_Argument copyWith(void Function(InvokeScriptResult_Call_Argument) updates) => super.copyWith((message) => updates(message as InvokeScriptResult_Call_Argument)) as InvokeScriptResult_Call_Argument; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult_Call_Argument create() => InvokeScriptResult_Call_Argument._();
  InvokeScriptResult_Call_Argument createEmptyInstance() => create();
  static $pb.PbList<InvokeScriptResult_Call_Argument> createRepeated() => $pb.PbList<InvokeScriptResult_Call_Argument>();
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult_Call_Argument getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<InvokeScriptResult_Call_Argument>(create);
  static InvokeScriptResult_Call_Argument? _defaultInstance;

  InvokeScriptResult_Call_Argument_Value whichValue() => _InvokeScriptResult_Call_Argument_ValueByTag[$_whichOneof(0)]!;
  void clearValue() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  $fixnum.Int64 get integerValue => $_getI64(0);
  @$pb.TagNumber(1)
  set integerValue($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasIntegerValue() => $_has(0);
  @$pb.TagNumber(1)
  void clearIntegerValue() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get binaryValue => $_getN(1);
  @$pb.TagNumber(2)
  set binaryValue($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasBinaryValue() => $_has(1);
  @$pb.TagNumber(2)
  void clearBinaryValue() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get stringValue => $_getSZ(2);
  @$pb.TagNumber(3)
  set stringValue($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasStringValue() => $_has(2);
  @$pb.TagNumber(3)
  void clearStringValue() => clearField(3);

  @$pb.TagNumber(4)
  $core.bool get booleanValue => $_getBF(3);
  @$pb.TagNumber(4)
  set booleanValue($core.bool v) { $_setBool(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasBooleanValue() => $_has(3);
  @$pb.TagNumber(4)
  void clearBooleanValue() => clearField(4);

  @$pb.TagNumber(5)
  $core.List<$core.int> get caseObj => $_getN(4);
  @$pb.TagNumber(5)
  set caseObj($core.List<$core.int> v) { $_setBytes(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasCaseObj() => $_has(4);
  @$pb.TagNumber(5)
  void clearCaseObj() => clearField(5);

  @$pb.TagNumber(10)
  InvokeScriptResult_Call_Argument_List get list => $_getN(5);
  @$pb.TagNumber(10)
  set list(InvokeScriptResult_Call_Argument_List v) { setField(10, v); }
  @$pb.TagNumber(10)
  $core.bool hasList() => $_has(5);
  @$pb.TagNumber(10)
  void clearList() => clearField(10);
  @$pb.TagNumber(10)
  InvokeScriptResult_Call_Argument_List ensureList() => $_ensure(5);
}

class InvokeScriptResult_Call extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'InvokeScriptResult.Call', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'function')
    ..p<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'argsBytes', $pb.PbFieldType.PY)
    ..pc<InvokeScriptResult_Call_Argument>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'args', $pb.PbFieldType.PM, subBuilder: InvokeScriptResult_Call_Argument.create)
    ..hasRequiredFields = false
  ;

  InvokeScriptResult_Call._() : super();
  factory InvokeScriptResult_Call({
    $core.String? function,
  @$core.Deprecated('This field is deprecated.')
    $core.Iterable<$core.List<$core.int>>? argsBytes,
    $core.Iterable<InvokeScriptResult_Call_Argument>? args,
  }) {
    final _result = create();
    if (function != null) {
      _result.function = function;
    }
    if (argsBytes != null) {
      // ignore: deprecated_member_use_from_same_package
      _result.argsBytes.addAll(argsBytes);
    }
    if (args != null) {
      _result.args.addAll(args);
    }
    return _result;
  }
  factory InvokeScriptResult_Call.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory InvokeScriptResult_Call.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  InvokeScriptResult_Call clone() => InvokeScriptResult_Call()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  InvokeScriptResult_Call copyWith(void Function(InvokeScriptResult_Call) updates) => super.copyWith((message) => updates(message as InvokeScriptResult_Call)) as InvokeScriptResult_Call; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult_Call create() => InvokeScriptResult_Call._();
  InvokeScriptResult_Call createEmptyInstance() => create();
  static $pb.PbList<InvokeScriptResult_Call> createRepeated() => $pb.PbList<InvokeScriptResult_Call>();
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult_Call getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<InvokeScriptResult_Call>(create);
  static InvokeScriptResult_Call? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get function => $_getSZ(0);
  @$pb.TagNumber(1)
  set function($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasFunction() => $_has(0);
  @$pb.TagNumber(1)
  void clearFunction() => clearField(1);

  @$core.Deprecated('This field is deprecated.')
  @$pb.TagNumber(2)
  $core.List<$core.List<$core.int>> get argsBytes => $_getList(1);

  @$pb.TagNumber(3)
  $core.List<InvokeScriptResult_Call_Argument> get args => $_getList(2);
}

class InvokeScriptResult_Invocation extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'InvokeScriptResult.Invocation', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'dApp', $pb.PbFieldType.OY, protoName: 'dApp')
    ..aOM<InvokeScriptResult_Call>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'call', subBuilder: InvokeScriptResult_Call.create)
    ..pc<$0.Amount>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'payments', $pb.PbFieldType.PM, subBuilder: $0.Amount.create)
    ..aOM<InvokeScriptResult>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'stateChanges', protoName: 'stateChanges', subBuilder: InvokeScriptResult.create)
    ..hasRequiredFields = false
  ;

  InvokeScriptResult_Invocation._() : super();
  factory InvokeScriptResult_Invocation({
    $core.List<$core.int>? dApp,
    InvokeScriptResult_Call? call,
    $core.Iterable<$0.Amount>? payments,
    InvokeScriptResult? stateChanges,
  }) {
    final _result = create();
    if (dApp != null) {
      _result.dApp = dApp;
    }
    if (call != null) {
      _result.call = call;
    }
    if (payments != null) {
      _result.payments.addAll(payments);
    }
    if (stateChanges != null) {
      _result.stateChanges = stateChanges;
    }
    return _result;
  }
  factory InvokeScriptResult_Invocation.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory InvokeScriptResult_Invocation.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  InvokeScriptResult_Invocation clone() => InvokeScriptResult_Invocation()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  InvokeScriptResult_Invocation copyWith(void Function(InvokeScriptResult_Invocation) updates) => super.copyWith((message) => updates(message as InvokeScriptResult_Invocation)) as InvokeScriptResult_Invocation; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult_Invocation create() => InvokeScriptResult_Invocation._();
  InvokeScriptResult_Invocation createEmptyInstance() => create();
  static $pb.PbList<InvokeScriptResult_Invocation> createRepeated() => $pb.PbList<InvokeScriptResult_Invocation>();
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult_Invocation getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<InvokeScriptResult_Invocation>(create);
  static InvokeScriptResult_Invocation? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get dApp => $_getN(0);
  @$pb.TagNumber(1)
  set dApp($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasDApp() => $_has(0);
  @$pb.TagNumber(1)
  void clearDApp() => clearField(1);

  @$pb.TagNumber(2)
  InvokeScriptResult_Call get call => $_getN(1);
  @$pb.TagNumber(2)
  set call(InvokeScriptResult_Call v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasCall() => $_has(1);
  @$pb.TagNumber(2)
  void clearCall() => clearField(2);
  @$pb.TagNumber(2)
  InvokeScriptResult_Call ensureCall() => $_ensure(1);

  @$pb.TagNumber(3)
  $core.List<$0.Amount> get payments => $_getList(2);

  @$pb.TagNumber(4)
  InvokeScriptResult get stateChanges => $_getN(3);
  @$pb.TagNumber(4)
  set stateChanges(InvokeScriptResult v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasStateChanges() => $_has(3);
  @$pb.TagNumber(4)
  void clearStateChanges() => clearField(4);
  @$pb.TagNumber(4)
  InvokeScriptResult ensureStateChanges() => $_ensure(3);
}

class InvokeScriptResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'InvokeScriptResult', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..pc<$3.DataTransactionData_DataEntry>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'data', $pb.PbFieldType.PM, subBuilder: $3.DataTransactionData_DataEntry.create)
    ..pc<InvokeScriptResult_Payment>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'transfers', $pb.PbFieldType.PM, subBuilder: InvokeScriptResult_Payment.create)
    ..pc<InvokeScriptResult_Issue>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'issues', $pb.PbFieldType.PM, subBuilder: InvokeScriptResult_Issue.create)
    ..pc<InvokeScriptResult_Reissue>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'reissues', $pb.PbFieldType.PM, subBuilder: InvokeScriptResult_Reissue.create)
    ..pc<InvokeScriptResult_Burn>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'burns', $pb.PbFieldType.PM, subBuilder: InvokeScriptResult_Burn.create)
    ..aOM<InvokeScriptResult_ErrorMessage>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'errorMessage', subBuilder: InvokeScriptResult_ErrorMessage.create)
    ..pc<InvokeScriptResult_SponsorFee>(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'sponsorFees', $pb.PbFieldType.PM, subBuilder: InvokeScriptResult_SponsorFee.create)
    ..pc<InvokeScriptResult_Lease>(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'leases', $pb.PbFieldType.PM, subBuilder: InvokeScriptResult_Lease.create)
    ..pc<InvokeScriptResult_LeaseCancel>(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'leaseCancels', $pb.PbFieldType.PM, subBuilder: InvokeScriptResult_LeaseCancel.create)
    ..pc<InvokeScriptResult_Invocation>(10, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'invokes', $pb.PbFieldType.PM, subBuilder: InvokeScriptResult_Invocation.create)
    ..pc<InvokeScriptResult_PrivatePayment>(11, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'privatePayment', $pb.PbFieldType.PM, subBuilder: InvokeScriptResult_PrivatePayment.create)
    ..hasRequiredFields = false
  ;

  InvokeScriptResult._() : super();
  factory InvokeScriptResult({
    $core.Iterable<$3.DataTransactionData_DataEntry>? data,
    $core.Iterable<InvokeScriptResult_Payment>? transfers,
    $core.Iterable<InvokeScriptResult_Issue>? issues,
    $core.Iterable<InvokeScriptResult_Reissue>? reissues,
    $core.Iterable<InvokeScriptResult_Burn>? burns,
    InvokeScriptResult_ErrorMessage? errorMessage,
    $core.Iterable<InvokeScriptResult_SponsorFee>? sponsorFees,
    $core.Iterable<InvokeScriptResult_Lease>? leases,
    $core.Iterable<InvokeScriptResult_LeaseCancel>? leaseCancels,
    $core.Iterable<InvokeScriptResult_Invocation>? invokes,
    $core.Iterable<InvokeScriptResult_PrivatePayment>? privatePayment,
  }) {
    final _result = create();
    if (data != null) {
      _result.data.addAll(data);
    }
    if (transfers != null) {
      _result.transfers.addAll(transfers);
    }
    if (issues != null) {
      _result.issues.addAll(issues);
    }
    if (reissues != null) {
      _result.reissues.addAll(reissues);
    }
    if (burns != null) {
      _result.burns.addAll(burns);
    }
    if (errorMessage != null) {
      _result.errorMessage = errorMessage;
    }
    if (sponsorFees != null) {
      _result.sponsorFees.addAll(sponsorFees);
    }
    if (leases != null) {
      _result.leases.addAll(leases);
    }
    if (leaseCancels != null) {
      _result.leaseCancels.addAll(leaseCancels);
    }
    if (invokes != null) {
      _result.invokes.addAll(invokes);
    }
    if (privatePayment != null) {
      _result.privatePayment.addAll(privatePayment);
    }
    return _result;
  }
  factory InvokeScriptResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory InvokeScriptResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  InvokeScriptResult clone() => InvokeScriptResult()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  InvokeScriptResult copyWith(void Function(InvokeScriptResult) updates) => super.copyWith((message) => updates(message as InvokeScriptResult)) as InvokeScriptResult; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult create() => InvokeScriptResult._();
  InvokeScriptResult createEmptyInstance() => create();
  static $pb.PbList<InvokeScriptResult> createRepeated() => $pb.PbList<InvokeScriptResult>();
  @$core.pragma('dart2js:noInline')
  static InvokeScriptResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<InvokeScriptResult>(create);
  static InvokeScriptResult? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$3.DataTransactionData_DataEntry> get data => $_getList(0);

  @$pb.TagNumber(2)
  $core.List<InvokeScriptResult_Payment> get transfers => $_getList(1);

  @$pb.TagNumber(3)
  $core.List<InvokeScriptResult_Issue> get issues => $_getList(2);

  @$pb.TagNumber(4)
  $core.List<InvokeScriptResult_Reissue> get reissues => $_getList(3);

  @$pb.TagNumber(5)
  $core.List<InvokeScriptResult_Burn> get burns => $_getList(4);

  @$pb.TagNumber(6)
  InvokeScriptResult_ErrorMessage get errorMessage => $_getN(5);
  @$pb.TagNumber(6)
  set errorMessage(InvokeScriptResult_ErrorMessage v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasErrorMessage() => $_has(5);
  @$pb.TagNumber(6)
  void clearErrorMessage() => clearField(6);
  @$pb.TagNumber(6)
  InvokeScriptResult_ErrorMessage ensureErrorMessage() => $_ensure(5);

  @$pb.TagNumber(7)
  $core.List<InvokeScriptResult_SponsorFee> get sponsorFees => $_getList(6);

  @$pb.TagNumber(8)
  $core.List<InvokeScriptResult_Lease> get leases => $_getList(7);

  @$pb.TagNumber(9)
  $core.List<InvokeScriptResult_LeaseCancel> get leaseCancels => $_getList(8);

  @$pb.TagNumber(10)
  $core.List<InvokeScriptResult_Invocation> get invokes => $_getList(9);

  @$pb.TagNumber(11)
  $core.List<InvokeScriptResult_PrivatePayment> get privatePayment => $_getList(10);
}


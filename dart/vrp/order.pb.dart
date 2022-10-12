///
//  Generated code. Do not modify.
//  source: vrp/order.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:core' as $core;

import 'package:fixnum/fixnum.dart' as $fixnum;
import 'package:protobuf/protobuf.dart' as $pb;

import 'amount.pb.dart' as $0;

import 'order.pbenum.dart';

export 'order.pbenum.dart';

class AssetPair extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'AssetPair', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'amountAssetId', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'priceAssetId', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  AssetPair._() : super();
  factory AssetPair({
    $core.List<$core.int>? amountAssetId,
    $core.List<$core.int>? priceAssetId,
  }) {
    final _result = create();
    if (amountAssetId != null) {
      _result.amountAssetId = amountAssetId;
    }
    if (priceAssetId != null) {
      _result.priceAssetId = priceAssetId;
    }
    return _result;
  }
  factory AssetPair.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AssetPair.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  AssetPair clone() => AssetPair()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  AssetPair copyWith(void Function(AssetPair) updates) => super.copyWith((message) => updates(message as AssetPair)) as AssetPair; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static AssetPair create() => AssetPair._();
  AssetPair createEmptyInstance() => create();
  static $pb.PbList<AssetPair> createRepeated() => $pb.PbList<AssetPair>();
  @$core.pragma('dart2js:noInline')
  static AssetPair getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AssetPair>(create);
  static AssetPair? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get amountAssetId => $_getN(0);
  @$pb.TagNumber(1)
  set amountAssetId($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasAmountAssetId() => $_has(0);
  @$pb.TagNumber(1)
  void clearAmountAssetId() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get priceAssetId => $_getN(1);
  @$pb.TagNumber(2)
  set priceAssetId($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasPriceAssetId() => $_has(1);
  @$pb.TagNumber(2)
  void clearPriceAssetId() => clearField(2);
}

enum Order_Sender {
  senderPublicKey, 
  eip712Signature, 
  notSet
}

class Order extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, Order_Sender> _Order_SenderByTag = {
    2 : Order_Sender.senderPublicKey,
    13 : Order_Sender.eip712Signature,
    0 : Order_Sender.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Order', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..oo(0, [2, 13])
    ..aInt64(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'chainId')
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'senderPublicKey', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'matcherPublicKey', $pb.PbFieldType.OY)
    ..aOM<AssetPair>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'assetPair', subBuilder: AssetPair.create)
    ..e<Order_Side>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'orderSide', $pb.PbFieldType.OE, defaultOrMaker: Order_Side.BUY, valueOf: Order_Side.valueOf, enumValues: Order_Side.values)
    ..aInt64(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'amount')
    ..aInt64(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'price')
    ..aInt64(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'timestamp')
    ..aInt64(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'expiration')
    ..aOM<$0.Amount>(10, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'matcherFee', subBuilder: $0.Amount.create)
    ..a<$core.int>(11, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'version', $pb.PbFieldType.O3)
    ..p<$core.List<$core.int>>(12, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'proofs', $pb.PbFieldType.PY)
    ..a<$core.List<$core.int>>(13, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'eip712Signature', $pb.PbFieldType.OY)
    ..e<Order_PriceMode>(14, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'priceMode', $pb.PbFieldType.OE, defaultOrMaker: Order_PriceMode.DEFAULT, valueOf: Order_PriceMode.valueOf, enumValues: Order_PriceMode.values)
    ..hasRequiredFields = false
  ;

  Order._() : super();
  factory Order({
    $fixnum.Int64? chainId,
    $core.List<$core.int>? senderPublicKey,
    $core.List<$core.int>? matcherPublicKey,
    AssetPair? assetPair,
    Order_Side? orderSide,
    $fixnum.Int64? amount,
    $fixnum.Int64? price,
    $fixnum.Int64? timestamp,
    $fixnum.Int64? expiration,
    $0.Amount? matcherFee,
    $core.int? version,
    $core.Iterable<$core.List<$core.int>>? proofs,
    $core.List<$core.int>? eip712Signature,
    Order_PriceMode? priceMode,
  }) {
    final _result = create();
    if (chainId != null) {
      _result.chainId = chainId;
    }
    if (senderPublicKey != null) {
      _result.senderPublicKey = senderPublicKey;
    }
    if (matcherPublicKey != null) {
      _result.matcherPublicKey = matcherPublicKey;
    }
    if (assetPair != null) {
      _result.assetPair = assetPair;
    }
    if (orderSide != null) {
      _result.orderSide = orderSide;
    }
    if (amount != null) {
      _result.amount = amount;
    }
    if (price != null) {
      _result.price = price;
    }
    if (timestamp != null) {
      _result.timestamp = timestamp;
    }
    if (expiration != null) {
      _result.expiration = expiration;
    }
    if (matcherFee != null) {
      _result.matcherFee = matcherFee;
    }
    if (version != null) {
      _result.version = version;
    }
    if (proofs != null) {
      _result.proofs.addAll(proofs);
    }
    if (eip712Signature != null) {
      _result.eip712Signature = eip712Signature;
    }
    if (priceMode != null) {
      _result.priceMode = priceMode;
    }
    return _result;
  }
  factory Order.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Order.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Order clone() => Order()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Order copyWith(void Function(Order) updates) => super.copyWith((message) => updates(message as Order)) as Order; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Order create() => Order._();
  Order createEmptyInstance() => create();
  static $pb.PbList<Order> createRepeated() => $pb.PbList<Order>();
  @$core.pragma('dart2js:noInline')
  static Order getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Order>(create);
  static Order? _defaultInstance;

  Order_Sender whichSender() => _Order_SenderByTag[$_whichOneof(0)]!;
  void clearSender() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  $fixnum.Int64 get chainId => $_getI64(0);
  @$pb.TagNumber(1)
  set chainId($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasChainId() => $_has(0);
  @$pb.TagNumber(1)
  void clearChainId() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get senderPublicKey => $_getN(1);
  @$pb.TagNumber(2)
  set senderPublicKey($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasSenderPublicKey() => $_has(1);
  @$pb.TagNumber(2)
  void clearSenderPublicKey() => clearField(2);

  @$pb.TagNumber(3)
  $core.List<$core.int> get matcherPublicKey => $_getN(2);
  @$pb.TagNumber(3)
  set matcherPublicKey($core.List<$core.int> v) { $_setBytes(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasMatcherPublicKey() => $_has(2);
  @$pb.TagNumber(3)
  void clearMatcherPublicKey() => clearField(3);

  @$pb.TagNumber(4)
  AssetPair get assetPair => $_getN(3);
  @$pb.TagNumber(4)
  set assetPair(AssetPair v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasAssetPair() => $_has(3);
  @$pb.TagNumber(4)
  void clearAssetPair() => clearField(4);
  @$pb.TagNumber(4)
  AssetPair ensureAssetPair() => $_ensure(3);

  @$pb.TagNumber(5)
  Order_Side get orderSide => $_getN(4);
  @$pb.TagNumber(5)
  set orderSide(Order_Side v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasOrderSide() => $_has(4);
  @$pb.TagNumber(5)
  void clearOrderSide() => clearField(5);

  @$pb.TagNumber(6)
  $fixnum.Int64 get amount => $_getI64(5);
  @$pb.TagNumber(6)
  set amount($fixnum.Int64 v) { $_setInt64(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasAmount() => $_has(5);
  @$pb.TagNumber(6)
  void clearAmount() => clearField(6);

  @$pb.TagNumber(7)
  $fixnum.Int64 get price => $_getI64(6);
  @$pb.TagNumber(7)
  set price($fixnum.Int64 v) { $_setInt64(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasPrice() => $_has(6);
  @$pb.TagNumber(7)
  void clearPrice() => clearField(7);

  @$pb.TagNumber(8)
  $fixnum.Int64 get timestamp => $_getI64(7);
  @$pb.TagNumber(8)
  set timestamp($fixnum.Int64 v) { $_setInt64(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasTimestamp() => $_has(7);
  @$pb.TagNumber(8)
  void clearTimestamp() => clearField(8);

  @$pb.TagNumber(9)
  $fixnum.Int64 get expiration => $_getI64(8);
  @$pb.TagNumber(9)
  set expiration($fixnum.Int64 v) { $_setInt64(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasExpiration() => $_has(8);
  @$pb.TagNumber(9)
  void clearExpiration() => clearField(9);

  @$pb.TagNumber(10)
  $0.Amount get matcherFee => $_getN(9);
  @$pb.TagNumber(10)
  set matcherFee($0.Amount v) { setField(10, v); }
  @$pb.TagNumber(10)
  $core.bool hasMatcherFee() => $_has(9);
  @$pb.TagNumber(10)
  void clearMatcherFee() => clearField(10);
  @$pb.TagNumber(10)
  $0.Amount ensureMatcherFee() => $_ensure(9);

  @$pb.TagNumber(11)
  $core.int get version => $_getIZ(10);
  @$pb.TagNumber(11)
  set version($core.int v) { $_setSignedInt32(10, v); }
  @$pb.TagNumber(11)
  $core.bool hasVersion() => $_has(10);
  @$pb.TagNumber(11)
  void clearVersion() => clearField(11);

  @$pb.TagNumber(12)
  $core.List<$core.List<$core.int>> get proofs => $_getList(11);

  @$pb.TagNumber(13)
  $core.List<$core.int> get eip712Signature => $_getN(12);
  @$pb.TagNumber(13)
  set eip712Signature($core.List<$core.int> v) { $_setBytes(12, v); }
  @$pb.TagNumber(13)
  $core.bool hasEip712Signature() => $_has(12);
  @$pb.TagNumber(13)
  void clearEip712Signature() => clearField(13);

  @$pb.TagNumber(14)
  Order_PriceMode get priceMode => $_getN(13);
  @$pb.TagNumber(14)
  set priceMode(Order_PriceMode v) { setField(14, v); }
  @$pb.TagNumber(14)
  $core.bool hasPriceMode() => $_has(13);
  @$pb.TagNumber(14)
  void clearPriceMode() => clearField(14);
}


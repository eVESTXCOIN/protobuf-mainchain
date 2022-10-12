///
//  Generated code. Do not modify.
//  source: vrp/block.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:core' as $core;

import 'package:fixnum/fixnum.dart' as $fixnum;
import 'package:protobuf/protobuf.dart' as $pb;

import 'transaction.pb.dart' as $3;

class Block_Header extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Block.Header', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..a<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'chainId', $pb.PbFieldType.O3)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'reference', $pb.PbFieldType.OY)
    ..aInt64(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'baseTarget')
    ..a<$core.List<$core.int>>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'generationSignature', $pb.PbFieldType.OY)
    ..p<$core.int>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'featureVotes', $pb.PbFieldType.KU3)
    ..aInt64(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'timestamp')
    ..a<$core.int>(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'version', $pb.PbFieldType.O3)
    ..a<$core.List<$core.int>>(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'generator', $pb.PbFieldType.OY)
    ..aInt64(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'rewardVote')
    ..aInt64(10, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'rewardBurned')
    ..a<$core.List<$core.int>>(11, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'transactionsRoot', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  Block_Header._() : super();
  factory Block_Header({
    $core.int? chainId,
    $core.List<$core.int>? reference,
    $fixnum.Int64? baseTarget,
    $core.List<$core.int>? generationSignature,
    $core.Iterable<$core.int>? featureVotes,
    $fixnum.Int64? timestamp,
    $core.int? version,
    $core.List<$core.int>? generator,
    $fixnum.Int64? rewardVote,
    $fixnum.Int64? rewardBurned,
    $core.List<$core.int>? transactionsRoot,
  }) {
    final _result = create();
    if (chainId != null) {
      _result.chainId = chainId;
    }
    if (reference != null) {
      _result.reference = reference;
    }
    if (baseTarget != null) {
      _result.baseTarget = baseTarget;
    }
    if (generationSignature != null) {
      _result.generationSignature = generationSignature;
    }
    if (featureVotes != null) {
      _result.featureVotes.addAll(featureVotes);
    }
    if (timestamp != null) {
      _result.timestamp = timestamp;
    }
    if (version != null) {
      _result.version = version;
    }
    if (generator != null) {
      _result.generator = generator;
    }
    if (rewardVote != null) {
      _result.rewardVote = rewardVote;
    }
    if (rewardBurned != null) {
      _result.rewardBurned = rewardBurned;
    }
    if (transactionsRoot != null) {
      _result.transactionsRoot = transactionsRoot;
    }
    return _result;
  }
  factory Block_Header.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Block_Header.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Block_Header clone() => Block_Header()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Block_Header copyWith(void Function(Block_Header) updates) => super.copyWith((message) => updates(message as Block_Header)) as Block_Header; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Block_Header create() => Block_Header._();
  Block_Header createEmptyInstance() => create();
  static $pb.PbList<Block_Header> createRepeated() => $pb.PbList<Block_Header>();
  @$core.pragma('dart2js:noInline')
  static Block_Header getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Block_Header>(create);
  static Block_Header? _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get chainId => $_getIZ(0);
  @$pb.TagNumber(1)
  set chainId($core.int v) { $_setSignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasChainId() => $_has(0);
  @$pb.TagNumber(1)
  void clearChainId() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get reference => $_getN(1);
  @$pb.TagNumber(2)
  set reference($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasReference() => $_has(1);
  @$pb.TagNumber(2)
  void clearReference() => clearField(2);

  @$pb.TagNumber(3)
  $fixnum.Int64 get baseTarget => $_getI64(2);
  @$pb.TagNumber(3)
  set baseTarget($fixnum.Int64 v) { $_setInt64(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasBaseTarget() => $_has(2);
  @$pb.TagNumber(3)
  void clearBaseTarget() => clearField(3);

  @$pb.TagNumber(4)
  $core.List<$core.int> get generationSignature => $_getN(3);
  @$pb.TagNumber(4)
  set generationSignature($core.List<$core.int> v) { $_setBytes(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasGenerationSignature() => $_has(3);
  @$pb.TagNumber(4)
  void clearGenerationSignature() => clearField(4);

  @$pb.TagNumber(5)
  $core.List<$core.int> get featureVotes => $_getList(4);

  @$pb.TagNumber(6)
  $fixnum.Int64 get timestamp => $_getI64(5);
  @$pb.TagNumber(6)
  set timestamp($fixnum.Int64 v) { $_setInt64(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasTimestamp() => $_has(5);
  @$pb.TagNumber(6)
  void clearTimestamp() => clearField(6);

  @$pb.TagNumber(7)
  $core.int get version => $_getIZ(6);
  @$pb.TagNumber(7)
  set version($core.int v) { $_setSignedInt32(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasVersion() => $_has(6);
  @$pb.TagNumber(7)
  void clearVersion() => clearField(7);

  @$pb.TagNumber(8)
  $core.List<$core.int> get generator => $_getN(7);
  @$pb.TagNumber(8)
  set generator($core.List<$core.int> v) { $_setBytes(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasGenerator() => $_has(7);
  @$pb.TagNumber(8)
  void clearGenerator() => clearField(8);

  @$pb.TagNumber(9)
  $fixnum.Int64 get rewardVote => $_getI64(8);
  @$pb.TagNumber(9)
  set rewardVote($fixnum.Int64 v) { $_setInt64(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasRewardVote() => $_has(8);
  @$pb.TagNumber(9)
  void clearRewardVote() => clearField(9);

  @$pb.TagNumber(10)
  $fixnum.Int64 get rewardBurned => $_getI64(9);
  @$pb.TagNumber(10)
  set rewardBurned($fixnum.Int64 v) { $_setInt64(9, v); }
  @$pb.TagNumber(10)
  $core.bool hasRewardBurned() => $_has(9);
  @$pb.TagNumber(10)
  void clearRewardBurned() => clearField(10);

  @$pb.TagNumber(11)
  $core.List<$core.int> get transactionsRoot => $_getN(10);
  @$pb.TagNumber(11)
  set transactionsRoot($core.List<$core.int> v) { $_setBytes(10, v); }
  @$pb.TagNumber(11)
  $core.bool hasTransactionsRoot() => $_has(10);
  @$pb.TagNumber(11)
  void clearTransactionsRoot() => clearField(11);
}

class Block extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Block', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..aOM<Block_Header>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'header', subBuilder: Block_Header.create)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'signature', $pb.PbFieldType.OY)
    ..pc<$3.SignedTransaction>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'transactions', $pb.PbFieldType.PM, subBuilder: $3.SignedTransaction.create)
    ..hasRequiredFields = false
  ;

  Block._() : super();
  factory Block({
    Block_Header? header,
    $core.List<$core.int>? signature,
    $core.Iterable<$3.SignedTransaction>? transactions,
  }) {
    final _result = create();
    if (header != null) {
      _result.header = header;
    }
    if (signature != null) {
      _result.signature = signature;
    }
    if (transactions != null) {
      _result.transactions.addAll(transactions);
    }
    return _result;
  }
  factory Block.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Block.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Block clone() => Block()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Block copyWith(void Function(Block) updates) => super.copyWith((message) => updates(message as Block)) as Block; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Block create() => Block._();
  Block createEmptyInstance() => create();
  static $pb.PbList<Block> createRepeated() => $pb.PbList<Block>();
  @$core.pragma('dart2js:noInline')
  static Block getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Block>(create);
  static Block? _defaultInstance;

  @$pb.TagNumber(1)
  Block_Header get header => $_getN(0);
  @$pb.TagNumber(1)
  set header(Block_Header v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasHeader() => $_has(0);
  @$pb.TagNumber(1)
  void clearHeader() => clearField(1);
  @$pb.TagNumber(1)
  Block_Header ensureHeader() => $_ensure(0);

  @$pb.TagNumber(2)
  $core.List<$core.int> get signature => $_getN(1);
  @$pb.TagNumber(2)
  set signature($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasSignature() => $_has(1);
  @$pb.TagNumber(2)
  void clearSignature() => clearField(2);

  @$pb.TagNumber(3)
  $core.List<$3.SignedTransaction> get transactions => $_getList(2);
}

class MicroBlock extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'MicroBlock', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..a<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'version', $pb.PbFieldType.O3)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'reference', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'updatedBlockSignature', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'senderPublicKey', $pb.PbFieldType.OY)
    ..pc<$3.SignedTransaction>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'transactions', $pb.PbFieldType.PM, subBuilder: $3.SignedTransaction.create)
    ..hasRequiredFields = false
  ;

  MicroBlock._() : super();
  factory MicroBlock({
    $core.int? version,
    $core.List<$core.int>? reference,
    $core.List<$core.int>? updatedBlockSignature,
    $core.List<$core.int>? senderPublicKey,
    $core.Iterable<$3.SignedTransaction>? transactions,
  }) {
    final _result = create();
    if (version != null) {
      _result.version = version;
    }
    if (reference != null) {
      _result.reference = reference;
    }
    if (updatedBlockSignature != null) {
      _result.updatedBlockSignature = updatedBlockSignature;
    }
    if (senderPublicKey != null) {
      _result.senderPublicKey = senderPublicKey;
    }
    if (transactions != null) {
      _result.transactions.addAll(transactions);
    }
    return _result;
  }
  factory MicroBlock.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory MicroBlock.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  MicroBlock clone() => MicroBlock()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  MicroBlock copyWith(void Function(MicroBlock) updates) => super.copyWith((message) => updates(message as MicroBlock)) as MicroBlock; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static MicroBlock create() => MicroBlock._();
  MicroBlock createEmptyInstance() => create();
  static $pb.PbList<MicroBlock> createRepeated() => $pb.PbList<MicroBlock>();
  @$core.pragma('dart2js:noInline')
  static MicroBlock getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<MicroBlock>(create);
  static MicroBlock? _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get version => $_getIZ(0);
  @$pb.TagNumber(1)
  set version($core.int v) { $_setSignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasVersion() => $_has(0);
  @$pb.TagNumber(1)
  void clearVersion() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get reference => $_getN(1);
  @$pb.TagNumber(2)
  set reference($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasReference() => $_has(1);
  @$pb.TagNumber(2)
  void clearReference() => clearField(2);

  @$pb.TagNumber(3)
  $core.List<$core.int> get updatedBlockSignature => $_getN(2);
  @$pb.TagNumber(3)
  set updatedBlockSignature($core.List<$core.int> v) { $_setBytes(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasUpdatedBlockSignature() => $_has(2);
  @$pb.TagNumber(3)
  void clearUpdatedBlockSignature() => clearField(3);

  @$pb.TagNumber(4)
  $core.List<$core.int> get senderPublicKey => $_getN(3);
  @$pb.TagNumber(4)
  set senderPublicKey($core.List<$core.int> v) { $_setBytes(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasSenderPublicKey() => $_has(3);
  @$pb.TagNumber(4)
  void clearSenderPublicKey() => clearField(4);

  @$pb.TagNumber(5)
  $core.List<$3.SignedTransaction> get transactions => $_getList(4);
}

class SignedMicroBlock extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'SignedMicroBlock', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..aOM<MicroBlock>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'microBlock', subBuilder: MicroBlock.create)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'signature', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'totalBlockId', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  SignedMicroBlock._() : super();
  factory SignedMicroBlock({
    MicroBlock? microBlock,
    $core.List<$core.int>? signature,
    $core.List<$core.int>? totalBlockId,
  }) {
    final _result = create();
    if (microBlock != null) {
      _result.microBlock = microBlock;
    }
    if (signature != null) {
      _result.signature = signature;
    }
    if (totalBlockId != null) {
      _result.totalBlockId = totalBlockId;
    }
    return _result;
  }
  factory SignedMicroBlock.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SignedMicroBlock.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  SignedMicroBlock clone() => SignedMicroBlock()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  SignedMicroBlock copyWith(void Function(SignedMicroBlock) updates) => super.copyWith((message) => updates(message as SignedMicroBlock)) as SignedMicroBlock; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SignedMicroBlock create() => SignedMicroBlock._();
  SignedMicroBlock createEmptyInstance() => create();
  static $pb.PbList<SignedMicroBlock> createRepeated() => $pb.PbList<SignedMicroBlock>();
  @$core.pragma('dart2js:noInline')
  static SignedMicroBlock getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SignedMicroBlock>(create);
  static SignedMicroBlock? _defaultInstance;

  @$pb.TagNumber(1)
  MicroBlock get microBlock => $_getN(0);
  @$pb.TagNumber(1)
  set microBlock(MicroBlock v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasMicroBlock() => $_has(0);
  @$pb.TagNumber(1)
  void clearMicroBlock() => clearField(1);
  @$pb.TagNumber(1)
  MicroBlock ensureMicroBlock() => $_ensure(0);

  @$pb.TagNumber(2)
  $core.List<$core.int> get signature => $_getN(1);
  @$pb.TagNumber(2)
  set signature($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasSignature() => $_has(1);
  @$pb.TagNumber(2)
  void clearSignature() => clearField(2);

  @$pb.TagNumber(3)
  $core.List<$core.int> get totalBlockId => $_getN(2);
  @$pb.TagNumber(3)
  set totalBlockId($core.List<$core.int> v) { $_setBytes(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasTotalBlockId() => $_has(2);
  @$pb.TagNumber(3)
  void clearTotalBlockId() => clearField(3);
}


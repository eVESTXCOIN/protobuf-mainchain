///
//  Generated code. Do not modify.
//  source: vrp/transaction.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:core' as $core;

import 'package:fixnum/fixnum.dart' as $fixnum;
import 'package:protobuf/protobuf.dart' as $pb;

import 'amount.pb.dart' as $0;
import 'recipient.pb.dart' as $1;
import 'order.pb.dart' as $2;

enum SignedTransaction_Transaction {
  vrpTransaction, 
  ethereumTransaction, 
  notSet
}

class SignedTransaction extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, SignedTransaction_Transaction> _SignedTransaction_TransactionByTag = {
    1 : SignedTransaction_Transaction.vrpTransaction,
    3 : SignedTransaction_Transaction.ethereumTransaction,
    0 : SignedTransaction_Transaction.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'SignedTransaction', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..oo(0, [1, 3])
    ..aOM<Transaction>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'vrpTransaction', subBuilder: Transaction.create)
    ..p<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'proofs', $pb.PbFieldType.PY)
    ..a<$core.List<$core.int>>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ethereumTransaction', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  SignedTransaction._() : super();
  factory SignedTransaction({
    Transaction? vrpTransaction,
    $core.Iterable<$core.List<$core.int>>? proofs,
    $core.List<$core.int>? ethereumTransaction,
  }) {
    final _result = create();
    if (vrpTransaction != null) {
      _result.vrpTransaction = vrpTransaction;
    }
    if (proofs != null) {
      _result.proofs.addAll(proofs);
    }
    if (ethereumTransaction != null) {
      _result.ethereumTransaction = ethereumTransaction;
    }
    return _result;
  }
  factory SignedTransaction.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SignedTransaction.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  SignedTransaction clone() => SignedTransaction()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  SignedTransaction copyWith(void Function(SignedTransaction) updates) => super.copyWith((message) => updates(message as SignedTransaction)) as SignedTransaction; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SignedTransaction create() => SignedTransaction._();
  SignedTransaction createEmptyInstance() => create();
  static $pb.PbList<SignedTransaction> createRepeated() => $pb.PbList<SignedTransaction>();
  @$core.pragma('dart2js:noInline')
  static SignedTransaction getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SignedTransaction>(create);
  static SignedTransaction? _defaultInstance;

  SignedTransaction_Transaction whichTransaction() => _SignedTransaction_TransactionByTag[$_whichOneof(0)]!;
  void clearTransaction() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  Transaction get vrpTransaction => $_getN(0);
  @$pb.TagNumber(1)
  set vrpTransaction(Transaction v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasVrpTransaction() => $_has(0);
  @$pb.TagNumber(1)
  void clearVrpTransaction() => clearField(1);
  @$pb.TagNumber(1)
  Transaction ensureVrpTransaction() => $_ensure(0);

  @$pb.TagNumber(2)
  $core.List<$core.List<$core.int>> get proofs => $_getList(1);

  @$pb.TagNumber(3)
  $core.List<$core.int> get ethereumTransaction => $_getN(2);
  @$pb.TagNumber(3)
  set ethereumTransaction($core.List<$core.int> v) { $_setBytes(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasEthereumTransaction() => $_has(2);
  @$pb.TagNumber(3)
  void clearEthereumTransaction() => clearField(3);
}

enum Transaction_Data {
  genesis, 
  payment, 
  issue, 
  transfer, 
  reissue, 
  burn, 
  exchange, 
  lease, 
  leaseCancel, 
  createAlias, 
  massTransfer, 
  dataTransaction, 
  setScript, 
  sponsorFee, 
  setAssetScript, 
  invokeScript, 
  updateAssetInfo, 
  anonymousTx, 
  notSet
}

class Transaction extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, Transaction_Data> _Transaction_DataByTag = {
    101 : Transaction_Data.genesis,
    102 : Transaction_Data.payment,
    103 : Transaction_Data.issue,
    104 : Transaction_Data.transfer,
    105 : Transaction_Data.reissue,
    106 : Transaction_Data.burn,
    107 : Transaction_Data.exchange,
    108 : Transaction_Data.lease,
    109 : Transaction_Data.leaseCancel,
    110 : Transaction_Data.createAlias,
    111 : Transaction_Data.massTransfer,
    112 : Transaction_Data.dataTransaction,
    113 : Transaction_Data.setScript,
    114 : Transaction_Data.sponsorFee,
    115 : Transaction_Data.setAssetScript,
    116 : Transaction_Data.invokeScript,
    117 : Transaction_Data.updateAssetInfo,
    118 : Transaction_Data.anonymousTx,
    0 : Transaction_Data.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Transaction', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..oo(0, [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118])
    ..a<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'chainId', $pb.PbFieldType.O3)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'senderPublicKey', $pb.PbFieldType.OY)
    ..aOM<$0.Amount>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'fee', subBuilder: $0.Amount.create)
    ..aInt64(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'timestamp')
    ..a<$core.int>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'version', $pb.PbFieldType.O3)
    ..aOM<GenesisTransactionData>(101, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'genesis', subBuilder: GenesisTransactionData.create)
    ..aOM<PaymentTransactionData>(102, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'payment', subBuilder: PaymentTransactionData.create)
    ..aOM<IssueTransactionData>(103, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'issue', subBuilder: IssueTransactionData.create)
    ..aOM<TransferTransactionData>(104, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'transfer', subBuilder: TransferTransactionData.create)
    ..aOM<ReissueTransactionData>(105, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'reissue', subBuilder: ReissueTransactionData.create)
    ..aOM<BurnTransactionData>(106, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'burn', subBuilder: BurnTransactionData.create)
    ..aOM<ExchangeTransactionData>(107, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'exchange', subBuilder: ExchangeTransactionData.create)
    ..aOM<LeaseTransactionData>(108, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'lease', subBuilder: LeaseTransactionData.create)
    ..aOM<LeaseCancelTransactionData>(109, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'leaseCancel', subBuilder: LeaseCancelTransactionData.create)
    ..aOM<CreateAliasTransactionData>(110, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'createAlias', subBuilder: CreateAliasTransactionData.create)
    ..aOM<MassTransferTransactionData>(111, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'massTransfer', subBuilder: MassTransferTransactionData.create)
    ..aOM<DataTransactionData>(112, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'dataTransaction', subBuilder: DataTransactionData.create)
    ..aOM<SetScriptTransactionData>(113, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'setScript', subBuilder: SetScriptTransactionData.create)
    ..aOM<SponsorFeeTransactionData>(114, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'sponsorFee', subBuilder: SponsorFeeTransactionData.create)
    ..aOM<SetAssetScriptTransactionData>(115, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'setAssetScript', subBuilder: SetAssetScriptTransactionData.create)
    ..aOM<InvokeScriptTransactionData>(116, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'invokeScript', subBuilder: InvokeScriptTransactionData.create)
    ..aOM<UpdateAssetInfoTransactionData>(117, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'updateAssetInfo', subBuilder: UpdateAssetInfoTransactionData.create)
    ..aOM<PrivatePaymentTransactionData>(118, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'anonymousTx', subBuilder: PrivatePaymentTransactionData.create)
    ..hasRequiredFields = false
  ;

  Transaction._() : super();
  factory Transaction({
    $core.int? chainId,
    $core.List<$core.int>? senderPublicKey,
    $0.Amount? fee,
    $fixnum.Int64? timestamp,
    $core.int? version,
    GenesisTransactionData? genesis,
    PaymentTransactionData? payment,
    IssueTransactionData? issue,
    TransferTransactionData? transfer,
    ReissueTransactionData? reissue,
    BurnTransactionData? burn,
    ExchangeTransactionData? exchange,
    LeaseTransactionData? lease,
    LeaseCancelTransactionData? leaseCancel,
    CreateAliasTransactionData? createAlias,
    MassTransferTransactionData? massTransfer,
    DataTransactionData? dataTransaction,
    SetScriptTransactionData? setScript,
    SponsorFeeTransactionData? sponsorFee,
    SetAssetScriptTransactionData? setAssetScript,
    InvokeScriptTransactionData? invokeScript,
    UpdateAssetInfoTransactionData? updateAssetInfo,
    PrivatePaymentTransactionData? anonymousTx,
  }) {
    final _result = create();
    if (chainId != null) {
      _result.chainId = chainId;
    }
    if (senderPublicKey != null) {
      _result.senderPublicKey = senderPublicKey;
    }
    if (fee != null) {
      _result.fee = fee;
    }
    if (timestamp != null) {
      _result.timestamp = timestamp;
    }
    if (version != null) {
      _result.version = version;
    }
    if (genesis != null) {
      _result.genesis = genesis;
    }
    if (payment != null) {
      _result.payment = payment;
    }
    if (issue != null) {
      _result.issue = issue;
    }
    if (transfer != null) {
      _result.transfer = transfer;
    }
    if (reissue != null) {
      _result.reissue = reissue;
    }
    if (burn != null) {
      _result.burn = burn;
    }
    if (exchange != null) {
      _result.exchange = exchange;
    }
    if (lease != null) {
      _result.lease = lease;
    }
    if (leaseCancel != null) {
      _result.leaseCancel = leaseCancel;
    }
    if (createAlias != null) {
      _result.createAlias = createAlias;
    }
    if (massTransfer != null) {
      _result.massTransfer = massTransfer;
    }
    if (dataTransaction != null) {
      _result.dataTransaction = dataTransaction;
    }
    if (setScript != null) {
      _result.setScript = setScript;
    }
    if (sponsorFee != null) {
      _result.sponsorFee = sponsorFee;
    }
    if (setAssetScript != null) {
      _result.setAssetScript = setAssetScript;
    }
    if (invokeScript != null) {
      _result.invokeScript = invokeScript;
    }
    if (updateAssetInfo != null) {
      _result.updateAssetInfo = updateAssetInfo;
    }
    if (anonymousTx != null) {
      _result.anonymousTx = anonymousTx;
    }
    return _result;
  }
  factory Transaction.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Transaction.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Transaction clone() => Transaction()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Transaction copyWith(void Function(Transaction) updates) => super.copyWith((message) => updates(message as Transaction)) as Transaction; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Transaction create() => Transaction._();
  Transaction createEmptyInstance() => create();
  static $pb.PbList<Transaction> createRepeated() => $pb.PbList<Transaction>();
  @$core.pragma('dart2js:noInline')
  static Transaction getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Transaction>(create);
  static Transaction? _defaultInstance;

  Transaction_Data whichData() => _Transaction_DataByTag[$_whichOneof(0)]!;
  void clearData() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  $core.int get chainId => $_getIZ(0);
  @$pb.TagNumber(1)
  set chainId($core.int v) { $_setSignedInt32(0, v); }
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
  $0.Amount get fee => $_getN(2);
  @$pb.TagNumber(3)
  set fee($0.Amount v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasFee() => $_has(2);
  @$pb.TagNumber(3)
  void clearFee() => clearField(3);
  @$pb.TagNumber(3)
  $0.Amount ensureFee() => $_ensure(2);

  @$pb.TagNumber(4)
  $fixnum.Int64 get timestamp => $_getI64(3);
  @$pb.TagNumber(4)
  set timestamp($fixnum.Int64 v) { $_setInt64(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasTimestamp() => $_has(3);
  @$pb.TagNumber(4)
  void clearTimestamp() => clearField(4);

  @$pb.TagNumber(5)
  $core.int get version => $_getIZ(4);
  @$pb.TagNumber(5)
  set version($core.int v) { $_setSignedInt32(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasVersion() => $_has(4);
  @$pb.TagNumber(5)
  void clearVersion() => clearField(5);

  @$pb.TagNumber(101)
  GenesisTransactionData get genesis => $_getN(5);
  @$pb.TagNumber(101)
  set genesis(GenesisTransactionData v) { setField(101, v); }
  @$pb.TagNumber(101)
  $core.bool hasGenesis() => $_has(5);
  @$pb.TagNumber(101)
  void clearGenesis() => clearField(101);
  @$pb.TagNumber(101)
  GenesisTransactionData ensureGenesis() => $_ensure(5);

  @$pb.TagNumber(102)
  PaymentTransactionData get payment => $_getN(6);
  @$pb.TagNumber(102)
  set payment(PaymentTransactionData v) { setField(102, v); }
  @$pb.TagNumber(102)
  $core.bool hasPayment() => $_has(6);
  @$pb.TagNumber(102)
  void clearPayment() => clearField(102);
  @$pb.TagNumber(102)
  PaymentTransactionData ensurePayment() => $_ensure(6);

  @$pb.TagNumber(103)
  IssueTransactionData get issue => $_getN(7);
  @$pb.TagNumber(103)
  set issue(IssueTransactionData v) { setField(103, v); }
  @$pb.TagNumber(103)
  $core.bool hasIssue() => $_has(7);
  @$pb.TagNumber(103)
  void clearIssue() => clearField(103);
  @$pb.TagNumber(103)
  IssueTransactionData ensureIssue() => $_ensure(7);

  @$pb.TagNumber(104)
  TransferTransactionData get transfer => $_getN(8);
  @$pb.TagNumber(104)
  set transfer(TransferTransactionData v) { setField(104, v); }
  @$pb.TagNumber(104)
  $core.bool hasTransfer() => $_has(8);
  @$pb.TagNumber(104)
  void clearTransfer() => clearField(104);
  @$pb.TagNumber(104)
  TransferTransactionData ensureTransfer() => $_ensure(8);

  @$pb.TagNumber(105)
  ReissueTransactionData get reissue => $_getN(9);
  @$pb.TagNumber(105)
  set reissue(ReissueTransactionData v) { setField(105, v); }
  @$pb.TagNumber(105)
  $core.bool hasReissue() => $_has(9);
  @$pb.TagNumber(105)
  void clearReissue() => clearField(105);
  @$pb.TagNumber(105)
  ReissueTransactionData ensureReissue() => $_ensure(9);

  @$pb.TagNumber(106)
  BurnTransactionData get burn => $_getN(10);
  @$pb.TagNumber(106)
  set burn(BurnTransactionData v) { setField(106, v); }
  @$pb.TagNumber(106)
  $core.bool hasBurn() => $_has(10);
  @$pb.TagNumber(106)
  void clearBurn() => clearField(106);
  @$pb.TagNumber(106)
  BurnTransactionData ensureBurn() => $_ensure(10);

  @$pb.TagNumber(107)
  ExchangeTransactionData get exchange => $_getN(11);
  @$pb.TagNumber(107)
  set exchange(ExchangeTransactionData v) { setField(107, v); }
  @$pb.TagNumber(107)
  $core.bool hasExchange() => $_has(11);
  @$pb.TagNumber(107)
  void clearExchange() => clearField(107);
  @$pb.TagNumber(107)
  ExchangeTransactionData ensureExchange() => $_ensure(11);

  @$pb.TagNumber(108)
  LeaseTransactionData get lease => $_getN(12);
  @$pb.TagNumber(108)
  set lease(LeaseTransactionData v) { setField(108, v); }
  @$pb.TagNumber(108)
  $core.bool hasLease() => $_has(12);
  @$pb.TagNumber(108)
  void clearLease() => clearField(108);
  @$pb.TagNumber(108)
  LeaseTransactionData ensureLease() => $_ensure(12);

  @$pb.TagNumber(109)
  LeaseCancelTransactionData get leaseCancel => $_getN(13);
  @$pb.TagNumber(109)
  set leaseCancel(LeaseCancelTransactionData v) { setField(109, v); }
  @$pb.TagNumber(109)
  $core.bool hasLeaseCancel() => $_has(13);
  @$pb.TagNumber(109)
  void clearLeaseCancel() => clearField(109);
  @$pb.TagNumber(109)
  LeaseCancelTransactionData ensureLeaseCancel() => $_ensure(13);

  @$pb.TagNumber(110)
  CreateAliasTransactionData get createAlias => $_getN(14);
  @$pb.TagNumber(110)
  set createAlias(CreateAliasTransactionData v) { setField(110, v); }
  @$pb.TagNumber(110)
  $core.bool hasCreateAlias() => $_has(14);
  @$pb.TagNumber(110)
  void clearCreateAlias() => clearField(110);
  @$pb.TagNumber(110)
  CreateAliasTransactionData ensureCreateAlias() => $_ensure(14);

  @$pb.TagNumber(111)
  MassTransferTransactionData get massTransfer => $_getN(15);
  @$pb.TagNumber(111)
  set massTransfer(MassTransferTransactionData v) { setField(111, v); }
  @$pb.TagNumber(111)
  $core.bool hasMassTransfer() => $_has(15);
  @$pb.TagNumber(111)
  void clearMassTransfer() => clearField(111);
  @$pb.TagNumber(111)
  MassTransferTransactionData ensureMassTransfer() => $_ensure(15);

  @$pb.TagNumber(112)
  DataTransactionData get dataTransaction => $_getN(16);
  @$pb.TagNumber(112)
  set dataTransaction(DataTransactionData v) { setField(112, v); }
  @$pb.TagNumber(112)
  $core.bool hasDataTransaction() => $_has(16);
  @$pb.TagNumber(112)
  void clearDataTransaction() => clearField(112);
  @$pb.TagNumber(112)
  DataTransactionData ensureDataTransaction() => $_ensure(16);

  @$pb.TagNumber(113)
  SetScriptTransactionData get setScript => $_getN(17);
  @$pb.TagNumber(113)
  set setScript(SetScriptTransactionData v) { setField(113, v); }
  @$pb.TagNumber(113)
  $core.bool hasSetScript() => $_has(17);
  @$pb.TagNumber(113)
  void clearSetScript() => clearField(113);
  @$pb.TagNumber(113)
  SetScriptTransactionData ensureSetScript() => $_ensure(17);

  @$pb.TagNumber(114)
  SponsorFeeTransactionData get sponsorFee => $_getN(18);
  @$pb.TagNumber(114)
  set sponsorFee(SponsorFeeTransactionData v) { setField(114, v); }
  @$pb.TagNumber(114)
  $core.bool hasSponsorFee() => $_has(18);
  @$pb.TagNumber(114)
  void clearSponsorFee() => clearField(114);
  @$pb.TagNumber(114)
  SponsorFeeTransactionData ensureSponsorFee() => $_ensure(18);

  @$pb.TagNumber(115)
  SetAssetScriptTransactionData get setAssetScript => $_getN(19);
  @$pb.TagNumber(115)
  set setAssetScript(SetAssetScriptTransactionData v) { setField(115, v); }
  @$pb.TagNumber(115)
  $core.bool hasSetAssetScript() => $_has(19);
  @$pb.TagNumber(115)
  void clearSetAssetScript() => clearField(115);
  @$pb.TagNumber(115)
  SetAssetScriptTransactionData ensureSetAssetScript() => $_ensure(19);

  @$pb.TagNumber(116)
  InvokeScriptTransactionData get invokeScript => $_getN(20);
  @$pb.TagNumber(116)
  set invokeScript(InvokeScriptTransactionData v) { setField(116, v); }
  @$pb.TagNumber(116)
  $core.bool hasInvokeScript() => $_has(20);
  @$pb.TagNumber(116)
  void clearInvokeScript() => clearField(116);
  @$pb.TagNumber(116)
  InvokeScriptTransactionData ensureInvokeScript() => $_ensure(20);

  @$pb.TagNumber(117)
  UpdateAssetInfoTransactionData get updateAssetInfo => $_getN(21);
  @$pb.TagNumber(117)
  set updateAssetInfo(UpdateAssetInfoTransactionData v) { setField(117, v); }
  @$pb.TagNumber(117)
  $core.bool hasUpdateAssetInfo() => $_has(21);
  @$pb.TagNumber(117)
  void clearUpdateAssetInfo() => clearField(117);
  @$pb.TagNumber(117)
  UpdateAssetInfoTransactionData ensureUpdateAssetInfo() => $_ensure(21);

  @$pb.TagNumber(118)
  PrivatePaymentTransactionData get anonymousTx => $_getN(22);
  @$pb.TagNumber(118)
  set anonymousTx(PrivatePaymentTransactionData v) { setField(118, v); }
  @$pb.TagNumber(118)
  $core.bool hasAnonymousTx() => $_has(22);
  @$pb.TagNumber(118)
  void clearAnonymousTx() => clearField(118);
  @$pb.TagNumber(118)
  PrivatePaymentTransactionData ensureAnonymousTx() => $_ensure(22);
}

class GenesisTransactionData extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GenesisTransactionData', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'recipientAddress', $pb.PbFieldType.OY)
    ..aInt64(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'amount')
    ..hasRequiredFields = false
  ;

  GenesisTransactionData._() : super();
  factory GenesisTransactionData({
    $core.List<$core.int>? recipientAddress,
    $fixnum.Int64? amount,
  }) {
    final _result = create();
    if (recipientAddress != null) {
      _result.recipientAddress = recipientAddress;
    }
    if (amount != null) {
      _result.amount = amount;
    }
    return _result;
  }
  factory GenesisTransactionData.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GenesisTransactionData.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GenesisTransactionData clone() => GenesisTransactionData()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GenesisTransactionData copyWith(void Function(GenesisTransactionData) updates) => super.copyWith((message) => updates(message as GenesisTransactionData)) as GenesisTransactionData; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GenesisTransactionData create() => GenesisTransactionData._();
  GenesisTransactionData createEmptyInstance() => create();
  static $pb.PbList<GenesisTransactionData> createRepeated() => $pb.PbList<GenesisTransactionData>();
  @$core.pragma('dart2js:noInline')
  static GenesisTransactionData getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GenesisTransactionData>(create);
  static GenesisTransactionData? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get recipientAddress => $_getN(0);
  @$pb.TagNumber(1)
  set recipientAddress($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasRecipientAddress() => $_has(0);
  @$pb.TagNumber(1)
  void clearRecipientAddress() => clearField(1);

  @$pb.TagNumber(2)
  $fixnum.Int64 get amount => $_getI64(1);
  @$pb.TagNumber(2)
  set amount($fixnum.Int64 v) { $_setInt64(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasAmount() => $_has(1);
  @$pb.TagNumber(2)
  void clearAmount() => clearField(2);
}

class PaymentTransactionData extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PaymentTransactionData', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'recipientAddress', $pb.PbFieldType.OY)
    ..aInt64(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'amount')
    ..hasRequiredFields = false
  ;

  PaymentTransactionData._() : super();
  factory PaymentTransactionData({
    $core.List<$core.int>? recipientAddress,
    $fixnum.Int64? amount,
  }) {
    final _result = create();
    if (recipientAddress != null) {
      _result.recipientAddress = recipientAddress;
    }
    if (amount != null) {
      _result.amount = amount;
    }
    return _result;
  }
  factory PaymentTransactionData.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PaymentTransactionData.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PaymentTransactionData clone() => PaymentTransactionData()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PaymentTransactionData copyWith(void Function(PaymentTransactionData) updates) => super.copyWith((message) => updates(message as PaymentTransactionData)) as PaymentTransactionData; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PaymentTransactionData create() => PaymentTransactionData._();
  PaymentTransactionData createEmptyInstance() => create();
  static $pb.PbList<PaymentTransactionData> createRepeated() => $pb.PbList<PaymentTransactionData>();
  @$core.pragma('dart2js:noInline')
  static PaymentTransactionData getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PaymentTransactionData>(create);
  static PaymentTransactionData? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get recipientAddress => $_getN(0);
  @$pb.TagNumber(1)
  set recipientAddress($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasRecipientAddress() => $_has(0);
  @$pb.TagNumber(1)
  void clearRecipientAddress() => clearField(1);

  @$pb.TagNumber(2)
  $fixnum.Int64 get amount => $_getI64(1);
  @$pb.TagNumber(2)
  set amount($fixnum.Int64 v) { $_setInt64(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasAmount() => $_has(1);
  @$pb.TagNumber(2)
  void clearAmount() => clearField(2);
}

class TransferTransactionData extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'TransferTransactionData', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..aOM<$1.Recipient>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'recipient', subBuilder: $1.Recipient.create)
    ..aOM<$0.Amount>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'amount', subBuilder: $0.Amount.create)
    ..a<$core.List<$core.int>>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'attachment', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  TransferTransactionData._() : super();
  factory TransferTransactionData({
    $1.Recipient? recipient,
    $0.Amount? amount,
    $core.List<$core.int>? attachment,
  }) {
    final _result = create();
    if (recipient != null) {
      _result.recipient = recipient;
    }
    if (amount != null) {
      _result.amount = amount;
    }
    if (attachment != null) {
      _result.attachment = attachment;
    }
    return _result;
  }
  factory TransferTransactionData.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory TransferTransactionData.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  TransferTransactionData clone() => TransferTransactionData()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  TransferTransactionData copyWith(void Function(TransferTransactionData) updates) => super.copyWith((message) => updates(message as TransferTransactionData)) as TransferTransactionData; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static TransferTransactionData create() => TransferTransactionData._();
  TransferTransactionData createEmptyInstance() => create();
  static $pb.PbList<TransferTransactionData> createRepeated() => $pb.PbList<TransferTransactionData>();
  @$core.pragma('dart2js:noInline')
  static TransferTransactionData getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<TransferTransactionData>(create);
  static TransferTransactionData? _defaultInstance;

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
  $0.Amount get amount => $_getN(1);
  @$pb.TagNumber(2)
  set amount($0.Amount v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasAmount() => $_has(1);
  @$pb.TagNumber(2)
  void clearAmount() => clearField(2);
  @$pb.TagNumber(2)
  $0.Amount ensureAmount() => $_ensure(1);

  @$pb.TagNumber(3)
  $core.List<$core.int> get attachment => $_getN(2);
  @$pb.TagNumber(3)
  set attachment($core.List<$core.int> v) { $_setBytes(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAttachment() => $_has(2);
  @$pb.TagNumber(3)
  void clearAttachment() => clearField(3);
}

class CreateAliasTransactionData extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CreateAliasTransactionData', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'alias')
    ..hasRequiredFields = false
  ;

  CreateAliasTransactionData._() : super();
  factory CreateAliasTransactionData({
    $core.String? alias,
  }) {
    final _result = create();
    if (alias != null) {
      _result.alias = alias;
    }
    return _result;
  }
  factory CreateAliasTransactionData.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CreateAliasTransactionData.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CreateAliasTransactionData clone() => CreateAliasTransactionData()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CreateAliasTransactionData copyWith(void Function(CreateAliasTransactionData) updates) => super.copyWith((message) => updates(message as CreateAliasTransactionData)) as CreateAliasTransactionData; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CreateAliasTransactionData create() => CreateAliasTransactionData._();
  CreateAliasTransactionData createEmptyInstance() => create();
  static $pb.PbList<CreateAliasTransactionData> createRepeated() => $pb.PbList<CreateAliasTransactionData>();
  @$core.pragma('dart2js:noInline')
  static CreateAliasTransactionData getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CreateAliasTransactionData>(create);
  static CreateAliasTransactionData? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get alias => $_getSZ(0);
  @$pb.TagNumber(1)
  set alias($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasAlias() => $_has(0);
  @$pb.TagNumber(1)
  void clearAlias() => clearField(1);
}

enum DataTransactionData_DataEntry_Value {
  intValue, 
  boolValue, 
  binaryValue, 
  stringValue, 
  notSet
}

class DataTransactionData_DataEntry extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, DataTransactionData_DataEntry_Value> _DataTransactionData_DataEntry_ValueByTag = {
    10 : DataTransactionData_DataEntry_Value.intValue,
    11 : DataTransactionData_DataEntry_Value.boolValue,
    12 : DataTransactionData_DataEntry_Value.binaryValue,
    13 : DataTransactionData_DataEntry_Value.stringValue,
    0 : DataTransactionData_DataEntry_Value.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'DataTransactionData.DataEntry', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..oo(0, [10, 11, 12, 13])
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'key')
    ..aInt64(10, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'intValue')
    ..aOB(11, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'boolValue')
    ..a<$core.List<$core.int>>(12, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'binaryValue', $pb.PbFieldType.OY)
    ..aOS(13, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'stringValue')
    ..hasRequiredFields = false
  ;

  DataTransactionData_DataEntry._() : super();
  factory DataTransactionData_DataEntry({
    $core.String? key,
    $fixnum.Int64? intValue,
    $core.bool? boolValue,
    $core.List<$core.int>? binaryValue,
    $core.String? stringValue,
  }) {
    final _result = create();
    if (key != null) {
      _result.key = key;
    }
    if (intValue != null) {
      _result.intValue = intValue;
    }
    if (boolValue != null) {
      _result.boolValue = boolValue;
    }
    if (binaryValue != null) {
      _result.binaryValue = binaryValue;
    }
    if (stringValue != null) {
      _result.stringValue = stringValue;
    }
    return _result;
  }
  factory DataTransactionData_DataEntry.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory DataTransactionData_DataEntry.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  DataTransactionData_DataEntry clone() => DataTransactionData_DataEntry()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  DataTransactionData_DataEntry copyWith(void Function(DataTransactionData_DataEntry) updates) => super.copyWith((message) => updates(message as DataTransactionData_DataEntry)) as DataTransactionData_DataEntry; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static DataTransactionData_DataEntry create() => DataTransactionData_DataEntry._();
  DataTransactionData_DataEntry createEmptyInstance() => create();
  static $pb.PbList<DataTransactionData_DataEntry> createRepeated() => $pb.PbList<DataTransactionData_DataEntry>();
  @$core.pragma('dart2js:noInline')
  static DataTransactionData_DataEntry getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<DataTransactionData_DataEntry>(create);
  static DataTransactionData_DataEntry? _defaultInstance;

  DataTransactionData_DataEntry_Value whichValue() => _DataTransactionData_DataEntry_ValueByTag[$_whichOneof(0)]!;
  void clearValue() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  $core.String get key => $_getSZ(0);
  @$pb.TagNumber(1)
  set key($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasKey() => $_has(0);
  @$pb.TagNumber(1)
  void clearKey() => clearField(1);

  @$pb.TagNumber(10)
  $fixnum.Int64 get intValue => $_getI64(1);
  @$pb.TagNumber(10)
  set intValue($fixnum.Int64 v) { $_setInt64(1, v); }
  @$pb.TagNumber(10)
  $core.bool hasIntValue() => $_has(1);
  @$pb.TagNumber(10)
  void clearIntValue() => clearField(10);

  @$pb.TagNumber(11)
  $core.bool get boolValue => $_getBF(2);
  @$pb.TagNumber(11)
  set boolValue($core.bool v) { $_setBool(2, v); }
  @$pb.TagNumber(11)
  $core.bool hasBoolValue() => $_has(2);
  @$pb.TagNumber(11)
  void clearBoolValue() => clearField(11);

  @$pb.TagNumber(12)
  $core.List<$core.int> get binaryValue => $_getN(3);
  @$pb.TagNumber(12)
  set binaryValue($core.List<$core.int> v) { $_setBytes(3, v); }
  @$pb.TagNumber(12)
  $core.bool hasBinaryValue() => $_has(3);
  @$pb.TagNumber(12)
  void clearBinaryValue() => clearField(12);

  @$pb.TagNumber(13)
  $core.String get stringValue => $_getSZ(4);
  @$pb.TagNumber(13)
  set stringValue($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(13)
  $core.bool hasStringValue() => $_has(4);
  @$pb.TagNumber(13)
  void clearStringValue() => clearField(13);
}

class DataTransactionData extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'DataTransactionData', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..pc<DataTransactionData_DataEntry>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'data', $pb.PbFieldType.PM, subBuilder: DataTransactionData_DataEntry.create)
    ..hasRequiredFields = false
  ;

  DataTransactionData._() : super();
  factory DataTransactionData({
    $core.Iterable<DataTransactionData_DataEntry>? data,
  }) {
    final _result = create();
    if (data != null) {
      _result.data.addAll(data);
    }
    return _result;
  }
  factory DataTransactionData.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory DataTransactionData.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  DataTransactionData clone() => DataTransactionData()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  DataTransactionData copyWith(void Function(DataTransactionData) updates) => super.copyWith((message) => updates(message as DataTransactionData)) as DataTransactionData; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static DataTransactionData create() => DataTransactionData._();
  DataTransactionData createEmptyInstance() => create();
  static $pb.PbList<DataTransactionData> createRepeated() => $pb.PbList<DataTransactionData>();
  @$core.pragma('dart2js:noInline')
  static DataTransactionData getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<DataTransactionData>(create);
  static DataTransactionData? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<DataTransactionData_DataEntry> get data => $_getList(0);
}

class MassTransferTransactionData_Transfer extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'MassTransferTransactionData.Transfer', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..aOM<$1.Recipient>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'recipient', subBuilder: $1.Recipient.create)
    ..aInt64(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'amount')
    ..hasRequiredFields = false
  ;

  MassTransferTransactionData_Transfer._() : super();
  factory MassTransferTransactionData_Transfer({
    $1.Recipient? recipient,
    $fixnum.Int64? amount,
  }) {
    final _result = create();
    if (recipient != null) {
      _result.recipient = recipient;
    }
    if (amount != null) {
      _result.amount = amount;
    }
    return _result;
  }
  factory MassTransferTransactionData_Transfer.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory MassTransferTransactionData_Transfer.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  MassTransferTransactionData_Transfer clone() => MassTransferTransactionData_Transfer()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  MassTransferTransactionData_Transfer copyWith(void Function(MassTransferTransactionData_Transfer) updates) => super.copyWith((message) => updates(message as MassTransferTransactionData_Transfer)) as MassTransferTransactionData_Transfer; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static MassTransferTransactionData_Transfer create() => MassTransferTransactionData_Transfer._();
  MassTransferTransactionData_Transfer createEmptyInstance() => create();
  static $pb.PbList<MassTransferTransactionData_Transfer> createRepeated() => $pb.PbList<MassTransferTransactionData_Transfer>();
  @$core.pragma('dart2js:noInline')
  static MassTransferTransactionData_Transfer getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<MassTransferTransactionData_Transfer>(create);
  static MassTransferTransactionData_Transfer? _defaultInstance;

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
}

class MassTransferTransactionData extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'MassTransferTransactionData', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'assetId', $pb.PbFieldType.OY)
    ..pc<MassTransferTransactionData_Transfer>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'transfers', $pb.PbFieldType.PM, subBuilder: MassTransferTransactionData_Transfer.create)
    ..a<$core.List<$core.int>>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'attachment', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  MassTransferTransactionData._() : super();
  factory MassTransferTransactionData({
    $core.List<$core.int>? assetId,
    $core.Iterable<MassTransferTransactionData_Transfer>? transfers,
    $core.List<$core.int>? attachment,
  }) {
    final _result = create();
    if (assetId != null) {
      _result.assetId = assetId;
    }
    if (transfers != null) {
      _result.transfers.addAll(transfers);
    }
    if (attachment != null) {
      _result.attachment = attachment;
    }
    return _result;
  }
  factory MassTransferTransactionData.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory MassTransferTransactionData.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  MassTransferTransactionData clone() => MassTransferTransactionData()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  MassTransferTransactionData copyWith(void Function(MassTransferTransactionData) updates) => super.copyWith((message) => updates(message as MassTransferTransactionData)) as MassTransferTransactionData; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static MassTransferTransactionData create() => MassTransferTransactionData._();
  MassTransferTransactionData createEmptyInstance() => create();
  static $pb.PbList<MassTransferTransactionData> createRepeated() => $pb.PbList<MassTransferTransactionData>();
  @$core.pragma('dart2js:noInline')
  static MassTransferTransactionData getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<MassTransferTransactionData>(create);
  static MassTransferTransactionData? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get assetId => $_getN(0);
  @$pb.TagNumber(1)
  set assetId($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasAssetId() => $_has(0);
  @$pb.TagNumber(1)
  void clearAssetId() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<MassTransferTransactionData_Transfer> get transfers => $_getList(1);

  @$pb.TagNumber(3)
  $core.List<$core.int> get attachment => $_getN(2);
  @$pb.TagNumber(3)
  set attachment($core.List<$core.int> v) { $_setBytes(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAttachment() => $_has(2);
  @$pb.TagNumber(3)
  void clearAttachment() => clearField(3);
}

class LeaseTransactionData extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'LeaseTransactionData', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..aOM<$1.Recipient>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'recipient', subBuilder: $1.Recipient.create)
    ..aInt64(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'amount')
    ..hasRequiredFields = false
  ;

  LeaseTransactionData._() : super();
  factory LeaseTransactionData({
    $1.Recipient? recipient,
    $fixnum.Int64? amount,
  }) {
    final _result = create();
    if (recipient != null) {
      _result.recipient = recipient;
    }
    if (amount != null) {
      _result.amount = amount;
    }
    return _result;
  }
  factory LeaseTransactionData.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory LeaseTransactionData.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  LeaseTransactionData clone() => LeaseTransactionData()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  LeaseTransactionData copyWith(void Function(LeaseTransactionData) updates) => super.copyWith((message) => updates(message as LeaseTransactionData)) as LeaseTransactionData; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static LeaseTransactionData create() => LeaseTransactionData._();
  LeaseTransactionData createEmptyInstance() => create();
  static $pb.PbList<LeaseTransactionData> createRepeated() => $pb.PbList<LeaseTransactionData>();
  @$core.pragma('dart2js:noInline')
  static LeaseTransactionData getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<LeaseTransactionData>(create);
  static LeaseTransactionData? _defaultInstance;

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
}

class LeaseCancelTransactionData extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'LeaseCancelTransactionData', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'leaseId', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  LeaseCancelTransactionData._() : super();
  factory LeaseCancelTransactionData({
    $core.List<$core.int>? leaseId,
  }) {
    final _result = create();
    if (leaseId != null) {
      _result.leaseId = leaseId;
    }
    return _result;
  }
  factory LeaseCancelTransactionData.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory LeaseCancelTransactionData.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  LeaseCancelTransactionData clone() => LeaseCancelTransactionData()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  LeaseCancelTransactionData copyWith(void Function(LeaseCancelTransactionData) updates) => super.copyWith((message) => updates(message as LeaseCancelTransactionData)) as LeaseCancelTransactionData; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static LeaseCancelTransactionData create() => LeaseCancelTransactionData._();
  LeaseCancelTransactionData createEmptyInstance() => create();
  static $pb.PbList<LeaseCancelTransactionData> createRepeated() => $pb.PbList<LeaseCancelTransactionData>();
  @$core.pragma('dart2js:noInline')
  static LeaseCancelTransactionData getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<LeaseCancelTransactionData>(create);
  static LeaseCancelTransactionData? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get leaseId => $_getN(0);
  @$pb.TagNumber(1)
  set leaseId($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasLeaseId() => $_has(0);
  @$pb.TagNumber(1)
  void clearLeaseId() => clearField(1);
}

class BurnTransactionData extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'BurnTransactionData', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..aOM<$0.Amount>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'assetAmount', subBuilder: $0.Amount.create)
    ..hasRequiredFields = false
  ;

  BurnTransactionData._() : super();
  factory BurnTransactionData({
    $0.Amount? assetAmount,
  }) {
    final _result = create();
    if (assetAmount != null) {
      _result.assetAmount = assetAmount;
    }
    return _result;
  }
  factory BurnTransactionData.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory BurnTransactionData.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  BurnTransactionData clone() => BurnTransactionData()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  BurnTransactionData copyWith(void Function(BurnTransactionData) updates) => super.copyWith((message) => updates(message as BurnTransactionData)) as BurnTransactionData; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static BurnTransactionData create() => BurnTransactionData._();
  BurnTransactionData createEmptyInstance() => create();
  static $pb.PbList<BurnTransactionData> createRepeated() => $pb.PbList<BurnTransactionData>();
  @$core.pragma('dart2js:noInline')
  static BurnTransactionData getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<BurnTransactionData>(create);
  static BurnTransactionData? _defaultInstance;

  @$pb.TagNumber(1)
  $0.Amount get assetAmount => $_getN(0);
  @$pb.TagNumber(1)
  set assetAmount($0.Amount v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasAssetAmount() => $_has(0);
  @$pb.TagNumber(1)
  void clearAssetAmount() => clearField(1);
  @$pb.TagNumber(1)
  $0.Amount ensureAssetAmount() => $_ensure(0);
}

class IssueTransactionData extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'IssueTransactionData', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'description')
    ..aInt64(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'amount')
    ..a<$core.int>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'decimals', $pb.PbFieldType.O3)
    ..aOB(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'reissuable')
    ..a<$core.List<$core.int>>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'script', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  IssueTransactionData._() : super();
  factory IssueTransactionData({
    $core.String? name,
    $core.String? description,
    $fixnum.Int64? amount,
    $core.int? decimals,
    $core.bool? reissuable,
    $core.List<$core.int>? script,
  }) {
    final _result = create();
    if (name != null) {
      _result.name = name;
    }
    if (description != null) {
      _result.description = description;
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
    return _result;
  }
  factory IssueTransactionData.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory IssueTransactionData.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  IssueTransactionData clone() => IssueTransactionData()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  IssueTransactionData copyWith(void Function(IssueTransactionData) updates) => super.copyWith((message) => updates(message as IssueTransactionData)) as IssueTransactionData; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static IssueTransactionData create() => IssueTransactionData._();
  IssueTransactionData createEmptyInstance() => create();
  static $pb.PbList<IssueTransactionData> createRepeated() => $pb.PbList<IssueTransactionData>();
  @$core.pragma('dart2js:noInline')
  static IssueTransactionData getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<IssueTransactionData>(create);
  static IssueTransactionData? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get name => $_getSZ(0);
  @$pb.TagNumber(1)
  set name($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasName() => $_has(0);
  @$pb.TagNumber(1)
  void clearName() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get description => $_getSZ(1);
  @$pb.TagNumber(2)
  set description($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasDescription() => $_has(1);
  @$pb.TagNumber(2)
  void clearDescription() => clearField(2);

  @$pb.TagNumber(3)
  $fixnum.Int64 get amount => $_getI64(2);
  @$pb.TagNumber(3)
  set amount($fixnum.Int64 v) { $_setInt64(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAmount() => $_has(2);
  @$pb.TagNumber(3)
  void clearAmount() => clearField(3);

  @$pb.TagNumber(4)
  $core.int get decimals => $_getIZ(3);
  @$pb.TagNumber(4)
  set decimals($core.int v) { $_setSignedInt32(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasDecimals() => $_has(3);
  @$pb.TagNumber(4)
  void clearDecimals() => clearField(4);

  @$pb.TagNumber(5)
  $core.bool get reissuable => $_getBF(4);
  @$pb.TagNumber(5)
  set reissuable($core.bool v) { $_setBool(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasReissuable() => $_has(4);
  @$pb.TagNumber(5)
  void clearReissuable() => clearField(5);

  @$pb.TagNumber(6)
  $core.List<$core.int> get script => $_getN(5);
  @$pb.TagNumber(6)
  set script($core.List<$core.int> v) { $_setBytes(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasScript() => $_has(5);
  @$pb.TagNumber(6)
  void clearScript() => clearField(6);
}

class ReissueTransactionData extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ReissueTransactionData', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..aOM<$0.Amount>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'assetAmount', subBuilder: $0.Amount.create)
    ..aOB(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'reissuable')
    ..hasRequiredFields = false
  ;

  ReissueTransactionData._() : super();
  factory ReissueTransactionData({
    $0.Amount? assetAmount,
    $core.bool? reissuable,
  }) {
    final _result = create();
    if (assetAmount != null) {
      _result.assetAmount = assetAmount;
    }
    if (reissuable != null) {
      _result.reissuable = reissuable;
    }
    return _result;
  }
  factory ReissueTransactionData.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ReissueTransactionData.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ReissueTransactionData clone() => ReissueTransactionData()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ReissueTransactionData copyWith(void Function(ReissueTransactionData) updates) => super.copyWith((message) => updates(message as ReissueTransactionData)) as ReissueTransactionData; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ReissueTransactionData create() => ReissueTransactionData._();
  ReissueTransactionData createEmptyInstance() => create();
  static $pb.PbList<ReissueTransactionData> createRepeated() => $pb.PbList<ReissueTransactionData>();
  @$core.pragma('dart2js:noInline')
  static ReissueTransactionData getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ReissueTransactionData>(create);
  static ReissueTransactionData? _defaultInstance;

  @$pb.TagNumber(1)
  $0.Amount get assetAmount => $_getN(0);
  @$pb.TagNumber(1)
  set assetAmount($0.Amount v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasAssetAmount() => $_has(0);
  @$pb.TagNumber(1)
  void clearAssetAmount() => clearField(1);
  @$pb.TagNumber(1)
  $0.Amount ensureAssetAmount() => $_ensure(0);

  @$pb.TagNumber(2)
  $core.bool get reissuable => $_getBF(1);
  @$pb.TagNumber(2)
  set reissuable($core.bool v) { $_setBool(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasReissuable() => $_has(1);
  @$pb.TagNumber(2)
  void clearReissuable() => clearField(2);
}

class SetAssetScriptTransactionData extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'SetAssetScriptTransactionData', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'assetId', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'script', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  SetAssetScriptTransactionData._() : super();
  factory SetAssetScriptTransactionData({
    $core.List<$core.int>? assetId,
    $core.List<$core.int>? script,
  }) {
    final _result = create();
    if (assetId != null) {
      _result.assetId = assetId;
    }
    if (script != null) {
      _result.script = script;
    }
    return _result;
  }
  factory SetAssetScriptTransactionData.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SetAssetScriptTransactionData.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  SetAssetScriptTransactionData clone() => SetAssetScriptTransactionData()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  SetAssetScriptTransactionData copyWith(void Function(SetAssetScriptTransactionData) updates) => super.copyWith((message) => updates(message as SetAssetScriptTransactionData)) as SetAssetScriptTransactionData; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SetAssetScriptTransactionData create() => SetAssetScriptTransactionData._();
  SetAssetScriptTransactionData createEmptyInstance() => create();
  static $pb.PbList<SetAssetScriptTransactionData> createRepeated() => $pb.PbList<SetAssetScriptTransactionData>();
  @$core.pragma('dart2js:noInline')
  static SetAssetScriptTransactionData getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SetAssetScriptTransactionData>(create);
  static SetAssetScriptTransactionData? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get assetId => $_getN(0);
  @$pb.TagNumber(1)
  set assetId($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasAssetId() => $_has(0);
  @$pb.TagNumber(1)
  void clearAssetId() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get script => $_getN(1);
  @$pb.TagNumber(2)
  set script($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasScript() => $_has(1);
  @$pb.TagNumber(2)
  void clearScript() => clearField(2);
}

class SetScriptTransactionData extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'SetScriptTransactionData', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'script', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  SetScriptTransactionData._() : super();
  factory SetScriptTransactionData({
    $core.List<$core.int>? script,
  }) {
    final _result = create();
    if (script != null) {
      _result.script = script;
    }
    return _result;
  }
  factory SetScriptTransactionData.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SetScriptTransactionData.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  SetScriptTransactionData clone() => SetScriptTransactionData()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  SetScriptTransactionData copyWith(void Function(SetScriptTransactionData) updates) => super.copyWith((message) => updates(message as SetScriptTransactionData)) as SetScriptTransactionData; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SetScriptTransactionData create() => SetScriptTransactionData._();
  SetScriptTransactionData createEmptyInstance() => create();
  static $pb.PbList<SetScriptTransactionData> createRepeated() => $pb.PbList<SetScriptTransactionData>();
  @$core.pragma('dart2js:noInline')
  static SetScriptTransactionData getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SetScriptTransactionData>(create);
  static SetScriptTransactionData? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get script => $_getN(0);
  @$pb.TagNumber(1)
  set script($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasScript() => $_has(0);
  @$pb.TagNumber(1)
  void clearScript() => clearField(1);
}

class ExchangeTransactionData extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ExchangeTransactionData', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..aInt64(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'amount')
    ..aInt64(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'price')
    ..aInt64(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'buyMatcherFee')
    ..aInt64(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'sellMatcherFee')
    ..pc<$2.Order>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'orders', $pb.PbFieldType.PM, subBuilder: $2.Order.create)
    ..hasRequiredFields = false
  ;

  ExchangeTransactionData._() : super();
  factory ExchangeTransactionData({
    $fixnum.Int64? amount,
    $fixnum.Int64? price,
    $fixnum.Int64? buyMatcherFee,
    $fixnum.Int64? sellMatcherFee,
    $core.Iterable<$2.Order>? orders,
  }) {
    final _result = create();
    if (amount != null) {
      _result.amount = amount;
    }
    if (price != null) {
      _result.price = price;
    }
    if (buyMatcherFee != null) {
      _result.buyMatcherFee = buyMatcherFee;
    }
    if (sellMatcherFee != null) {
      _result.sellMatcherFee = sellMatcherFee;
    }
    if (orders != null) {
      _result.orders.addAll(orders);
    }
    return _result;
  }
  factory ExchangeTransactionData.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ExchangeTransactionData.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ExchangeTransactionData clone() => ExchangeTransactionData()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ExchangeTransactionData copyWith(void Function(ExchangeTransactionData) updates) => super.copyWith((message) => updates(message as ExchangeTransactionData)) as ExchangeTransactionData; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ExchangeTransactionData create() => ExchangeTransactionData._();
  ExchangeTransactionData createEmptyInstance() => create();
  static $pb.PbList<ExchangeTransactionData> createRepeated() => $pb.PbList<ExchangeTransactionData>();
  @$core.pragma('dart2js:noInline')
  static ExchangeTransactionData getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ExchangeTransactionData>(create);
  static ExchangeTransactionData? _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get amount => $_getI64(0);
  @$pb.TagNumber(1)
  set amount($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasAmount() => $_has(0);
  @$pb.TagNumber(1)
  void clearAmount() => clearField(1);

  @$pb.TagNumber(2)
  $fixnum.Int64 get price => $_getI64(1);
  @$pb.TagNumber(2)
  set price($fixnum.Int64 v) { $_setInt64(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasPrice() => $_has(1);
  @$pb.TagNumber(2)
  void clearPrice() => clearField(2);

  @$pb.TagNumber(3)
  $fixnum.Int64 get buyMatcherFee => $_getI64(2);
  @$pb.TagNumber(3)
  set buyMatcherFee($fixnum.Int64 v) { $_setInt64(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasBuyMatcherFee() => $_has(2);
  @$pb.TagNumber(3)
  void clearBuyMatcherFee() => clearField(3);

  @$pb.TagNumber(4)
  $fixnum.Int64 get sellMatcherFee => $_getI64(3);
  @$pb.TagNumber(4)
  set sellMatcherFee($fixnum.Int64 v) { $_setInt64(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasSellMatcherFee() => $_has(3);
  @$pb.TagNumber(4)
  void clearSellMatcherFee() => clearField(4);

  @$pb.TagNumber(5)
  $core.List<$2.Order> get orders => $_getList(4);
}

class SponsorFeeTransactionData extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'SponsorFeeTransactionData', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..aOM<$0.Amount>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'minFee', subBuilder: $0.Amount.create)
    ..hasRequiredFields = false
  ;

  SponsorFeeTransactionData._() : super();
  factory SponsorFeeTransactionData({
    $0.Amount? minFee,
  }) {
    final _result = create();
    if (minFee != null) {
      _result.minFee = minFee;
    }
    return _result;
  }
  factory SponsorFeeTransactionData.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SponsorFeeTransactionData.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  SponsorFeeTransactionData clone() => SponsorFeeTransactionData()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  SponsorFeeTransactionData copyWith(void Function(SponsorFeeTransactionData) updates) => super.copyWith((message) => updates(message as SponsorFeeTransactionData)) as SponsorFeeTransactionData; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SponsorFeeTransactionData create() => SponsorFeeTransactionData._();
  SponsorFeeTransactionData createEmptyInstance() => create();
  static $pb.PbList<SponsorFeeTransactionData> createRepeated() => $pb.PbList<SponsorFeeTransactionData>();
  @$core.pragma('dart2js:noInline')
  static SponsorFeeTransactionData getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SponsorFeeTransactionData>(create);
  static SponsorFeeTransactionData? _defaultInstance;

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

class InvokeScriptTransactionData extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'InvokeScriptTransactionData', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..aOM<$1.Recipient>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'dApp', subBuilder: $1.Recipient.create)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'functionCall', $pb.PbFieldType.OY)
    ..pc<$0.Amount>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'payments', $pb.PbFieldType.PM, subBuilder: $0.Amount.create)
    ..hasRequiredFields = false
  ;

  InvokeScriptTransactionData._() : super();
  factory InvokeScriptTransactionData({
    $1.Recipient? dApp,
    $core.List<$core.int>? functionCall,
    $core.Iterable<$0.Amount>? payments,
  }) {
    final _result = create();
    if (dApp != null) {
      _result.dApp = dApp;
    }
    if (functionCall != null) {
      _result.functionCall = functionCall;
    }
    if (payments != null) {
      _result.payments.addAll(payments);
    }
    return _result;
  }
  factory InvokeScriptTransactionData.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory InvokeScriptTransactionData.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  InvokeScriptTransactionData clone() => InvokeScriptTransactionData()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  InvokeScriptTransactionData copyWith(void Function(InvokeScriptTransactionData) updates) => super.copyWith((message) => updates(message as InvokeScriptTransactionData)) as InvokeScriptTransactionData; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static InvokeScriptTransactionData create() => InvokeScriptTransactionData._();
  InvokeScriptTransactionData createEmptyInstance() => create();
  static $pb.PbList<InvokeScriptTransactionData> createRepeated() => $pb.PbList<InvokeScriptTransactionData>();
  @$core.pragma('dart2js:noInline')
  static InvokeScriptTransactionData getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<InvokeScriptTransactionData>(create);
  static InvokeScriptTransactionData? _defaultInstance;

  @$pb.TagNumber(1)
  $1.Recipient get dApp => $_getN(0);
  @$pb.TagNumber(1)
  set dApp($1.Recipient v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasDApp() => $_has(0);
  @$pb.TagNumber(1)
  void clearDApp() => clearField(1);
  @$pb.TagNumber(1)
  $1.Recipient ensureDApp() => $_ensure(0);

  @$pb.TagNumber(2)
  $core.List<$core.int> get functionCall => $_getN(1);
  @$pb.TagNumber(2)
  set functionCall($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasFunctionCall() => $_has(1);
  @$pb.TagNumber(2)
  void clearFunctionCall() => clearField(2);

  @$pb.TagNumber(3)
  $core.List<$0.Amount> get payments => $_getList(2);
}

class UpdateAssetInfoTransactionData extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'UpdateAssetInfoTransactionData', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'assetId', $pb.PbFieldType.OY)
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'description')
    ..aOS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'image')
    ..hasRequiredFields = false
  ;

  UpdateAssetInfoTransactionData._() : super();
  factory UpdateAssetInfoTransactionData({
    $core.List<$core.int>? assetId,
    $core.String? name,
    $core.String? description,
    $core.String? image,
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
    return _result;
  }
  factory UpdateAssetInfoTransactionData.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory UpdateAssetInfoTransactionData.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  UpdateAssetInfoTransactionData clone() => UpdateAssetInfoTransactionData()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  UpdateAssetInfoTransactionData copyWith(void Function(UpdateAssetInfoTransactionData) updates) => super.copyWith((message) => updates(message as UpdateAssetInfoTransactionData)) as UpdateAssetInfoTransactionData; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static UpdateAssetInfoTransactionData create() => UpdateAssetInfoTransactionData._();
  UpdateAssetInfoTransactionData createEmptyInstance() => create();
  static $pb.PbList<UpdateAssetInfoTransactionData> createRepeated() => $pb.PbList<UpdateAssetInfoTransactionData>();
  @$core.pragma('dart2js:noInline')
  static UpdateAssetInfoTransactionData getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<UpdateAssetInfoTransactionData>(create);
  static UpdateAssetInfoTransactionData? _defaultInstance;

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
}

class InvokeExpressionTransactionData extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'InvokeExpressionTransactionData', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'expression', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  InvokeExpressionTransactionData._() : super();
  factory InvokeExpressionTransactionData({
    $core.List<$core.int>? expression,
  }) {
    final _result = create();
    if (expression != null) {
      _result.expression = expression;
    }
    return _result;
  }
  factory InvokeExpressionTransactionData.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory InvokeExpressionTransactionData.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  InvokeExpressionTransactionData clone() => InvokeExpressionTransactionData()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  InvokeExpressionTransactionData copyWith(void Function(InvokeExpressionTransactionData) updates) => super.copyWith((message) => updates(message as InvokeExpressionTransactionData)) as InvokeExpressionTransactionData; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static InvokeExpressionTransactionData create() => InvokeExpressionTransactionData._();
  InvokeExpressionTransactionData createEmptyInstance() => create();
  static $pb.PbList<InvokeExpressionTransactionData> createRepeated() => $pb.PbList<InvokeExpressionTransactionData>();
  @$core.pragma('dart2js:noInline')
  static InvokeExpressionTransactionData getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<InvokeExpressionTransactionData>(create);
  static InvokeExpressionTransactionData? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get expression => $_getN(0);
  @$pb.TagNumber(1)
  set expression($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasExpression() => $_has(0);
  @$pb.TagNumber(1)
  void clearExpression() => clearField(1);
}

class PrivatePaymentTransactionData extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PrivatePaymentTransactionData', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'vrp'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'recipientAddress', $pb.PbFieldType.OY)
    ..aInt64(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'amount')
    ..hasRequiredFields = false
  ;

  PrivatePaymentTransactionData._() : super();
  factory PrivatePaymentTransactionData({
    $core.List<$core.int>? recipientAddress,
    $fixnum.Int64? amount,
  }) {
    final _result = create();
    if (recipientAddress != null) {
      _result.recipientAddress = recipientAddress;
    }
    if (amount != null) {
      _result.amount = amount;
    }
    return _result;
  }
  factory PrivatePaymentTransactionData.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PrivatePaymentTransactionData.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PrivatePaymentTransactionData clone() => PrivatePaymentTransactionData()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PrivatePaymentTransactionData copyWith(void Function(PrivatePaymentTransactionData) updates) => super.copyWith((message) => updates(message as PrivatePaymentTransactionData)) as PrivatePaymentTransactionData; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PrivatePaymentTransactionData create() => PrivatePaymentTransactionData._();
  PrivatePaymentTransactionData createEmptyInstance() => create();
  static $pb.PbList<PrivatePaymentTransactionData> createRepeated() => $pb.PbList<PrivatePaymentTransactionData>();
  @$core.pragma('dart2js:noInline')
  static PrivatePaymentTransactionData getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PrivatePaymentTransactionData>(create);
  static PrivatePaymentTransactionData? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get recipientAddress => $_getN(0);
  @$pb.TagNumber(1)
  set recipientAddress($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasRecipientAddress() => $_has(0);
  @$pb.TagNumber(1)
  void clearRecipientAddress() => clearField(1);

  @$pb.TagNumber(2)
  $fixnum.Int64 get amount => $_getI64(1);
  @$pb.TagNumber(2)
  set amount($fixnum.Int64 v) { $_setInt64(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasAmount() => $_has(1);
  @$pb.TagNumber(2)
  void clearAmount() => clearField(2);
}


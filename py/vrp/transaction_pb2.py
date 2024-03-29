# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vrp/transaction.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from vrp import amount_pb2 as vrp_dot_amount__pb2
from vrp import recipient_pb2 as vrp_dot_recipient__pb2
from vrp import order_pb2 as vrp_dot_order__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x15vrp/transaction.proto\x12\x03vrp\x1a\x10vrp/amount.proto\x1a\x13vrp/recipient.proto\x1a\x0fvrp/order.proto\"\x7f\n\x11SignedTransaction\x12+\n\x0fvrp_transaction\x18\x01 \x01(\x0b\x32\x10.vrp.TransactionH\x00\x12\x1e\n\x14\x65thereum_transaction\x18\x03 \x01(\x0cH\x00\x12\x0e\n\x06proofs\x18\x02 \x03(\x0c\x42\r\n\x0btransaction\"\xbe\x08\n\x0bTransaction\x12\x10\n\x08\x63hain_id\x18\x01 \x01(\x05\x12\x19\n\x11sender_public_key\x18\x02 \x01(\x0c\x12\x18\n\x03\x66\x65\x65\x18\x03 \x01(\x0b\x32\x0b.vrp.Amount\x12\x11\n\ttimestamp\x18\x04 \x01(\x03\x12\x0f\n\x07version\x18\x05 \x01(\x05\x12.\n\x07genesis\x18\x65 \x01(\x0b\x32\x1b.vrp.GenesisTransactionDataH\x00\x12.\n\x07payment\x18\x66 \x01(\x0b\x32\x1b.vrp.PaymentTransactionDataH\x00\x12*\n\x05issue\x18g \x01(\x0b\x32\x19.vrp.IssueTransactionDataH\x00\x12\x30\n\x08transfer\x18h \x01(\x0b\x32\x1c.vrp.TransferTransactionDataH\x00\x12.\n\x07reissue\x18i \x01(\x0b\x32\x1b.vrp.ReissueTransactionDataH\x00\x12(\n\x04\x62urn\x18j \x01(\x0b\x32\x18.vrp.BurnTransactionDataH\x00\x12\x30\n\x08\x65xchange\x18k \x01(\x0b\x32\x1c.vrp.ExchangeTransactionDataH\x00\x12*\n\x05lease\x18l \x01(\x0b\x32\x19.vrp.LeaseTransactionDataH\x00\x12\x37\n\x0clease_cancel\x18m \x01(\x0b\x32\x1f.vrp.LeaseCancelTransactionDataH\x00\x12\x37\n\x0c\x63reate_alias\x18n \x01(\x0b\x32\x1f.vrp.CreateAliasTransactionDataH\x00\x12\x39\n\rmass_transfer\x18o \x01(\x0b\x32 .vrp.MassTransferTransactionDataH\x00\x12\x34\n\x10\x64\x61ta_transaction\x18p \x01(\x0b\x32\x18.vrp.DataTransactionDataH\x00\x12\x33\n\nset_script\x18q \x01(\x0b\x32\x1d.vrp.SetScriptTransactionDataH\x00\x12\x35\n\x0bsponsor_fee\x18r \x01(\x0b\x32\x1e.vrp.SponsorFeeTransactionDataH\x00\x12>\n\x10set_asset_script\x18s \x01(\x0b\x32\".vrp.SetAssetScriptTransactionDataH\x00\x12\x39\n\rinvoke_script\x18t \x01(\x0b\x32 .vrp.InvokeScriptTransactionDataH\x00\x12@\n\x11update_asset_info\x18u \x01(\x0b\x32#.vrp.UpdateAssetInfoTransactionDataH\x00\x12:\n\x0c\x61nonymous_tx\x18v \x01(\x0b\x32\".vrp.PrivatePaymentTransactionDataH\x00\x42\x06\n\x04\x64\x61ta\"C\n\x16GenesisTransactionData\x12\x19\n\x11recipient_address\x18\x01 \x01(\x0c\x12\x0e\n\x06\x61mount\x18\x02 \x01(\x03\"C\n\x16PaymentTransactionData\x12\x19\n\x11recipient_address\x18\x01 \x01(\x0c\x12\x0e\n\x06\x61mount\x18\x02 \x01(\x03\"m\n\x17TransferTransactionData\x12!\n\trecipient\x18\x01 \x01(\x0b\x32\x0e.vrp.Recipient\x12\x1b\n\x06\x61mount\x18\x02 \x01(\x0b\x32\x0b.vrp.Amount\x12\x12\n\nattachment\x18\x03 \x01(\x0c\"+\n\x1a\x43reateAliasTransactionData\x12\r\n\x05\x61lias\x18\x01 \x01(\t\"\xc5\x01\n\x13\x44\x61taTransactionData\x12\x30\n\x04\x64\x61ta\x18\x01 \x03(\x0b\x32\".vrp.DataTransactionData.DataEntry\x1a|\n\tDataEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x13\n\tint_value\x18\n \x01(\x03H\x00\x12\x14\n\nbool_value\x18\x0b \x01(\x08H\x00\x12\x16\n\x0c\x62inary_value\x18\x0c \x01(\x0cH\x00\x12\x16\n\x0cstring_value\x18\r \x01(\tH\x00\x42\x07\n\x05value\"\xc0\x01\n\x1bMassTransferTransactionData\x12\x10\n\x08\x61sset_id\x18\x01 \x01(\x0c\x12<\n\ttransfers\x18\x02 \x03(\x0b\x32).vrp.MassTransferTransactionData.Transfer\x12\x12\n\nattachment\x18\x03 \x01(\x0c\x1a=\n\x08Transfer\x12!\n\trecipient\x18\x01 \x01(\x0b\x32\x0e.vrp.Recipient\x12\x0e\n\x06\x61mount\x18\x02 \x01(\x03\"I\n\x14LeaseTransactionData\x12!\n\trecipient\x18\x01 \x01(\x0b\x32\x0e.vrp.Recipient\x12\x0e\n\x06\x61mount\x18\x02 \x01(\x03\".\n\x1aLeaseCancelTransactionData\x12\x10\n\x08lease_id\x18\x01 \x01(\x0c\"8\n\x13\x42urnTransactionData\x12!\n\x0c\x61sset_amount\x18\x01 \x01(\x0b\x32\x0b.vrp.Amount\"\x7f\n\x14IssueTransactionData\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x02 \x01(\t\x12\x0e\n\x06\x61mount\x18\x03 \x01(\x03\x12\x10\n\x08\x64\x65\x63imals\x18\x04 \x01(\x05\x12\x12\n\nreissuable\x18\x05 \x01(\x08\x12\x0e\n\x06script\x18\x06 \x01(\x0c\"O\n\x16ReissueTransactionData\x12!\n\x0c\x61sset_amount\x18\x01 \x01(\x0b\x32\x0b.vrp.Amount\x12\x12\n\nreissuable\x18\x02 \x01(\x08\"A\n\x1dSetAssetScriptTransactionData\x12\x10\n\x08\x61sset_id\x18\x01 \x01(\x0c\x12\x0e\n\x06script\x18\x02 \x01(\x0c\"*\n\x18SetScriptTransactionData\x12\x0e\n\x06script\x18\x01 \x01(\x0c\"\x87\x01\n\x17\x45xchangeTransactionData\x12\x0e\n\x06\x61mount\x18\x01 \x01(\x03\x12\r\n\x05price\x18\x02 \x01(\x03\x12\x17\n\x0f\x62uy_matcher_fee\x18\x03 \x01(\x03\x12\x18\n\x10sell_matcher_fee\x18\x04 \x01(\x03\x12\x1a\n\x06orders\x18\x05 \x03(\x0b\x32\n.vrp.Order\"9\n\x19SponsorFeeTransactionData\x12\x1c\n\x07min_fee\x18\x01 \x01(\x0b\x32\x0b.vrp.Amount\"r\n\x1bInvokeScriptTransactionData\x12\x1d\n\x05\x64_app\x18\x01 \x01(\x0b\x32\x0e.vrp.Recipient\x12\x15\n\rfunction_call\x18\x02 \x01(\x0c\x12\x1d\n\x08payments\x18\x03 \x03(\x0b\x32\x0b.vrp.Amount\"d\n\x1eUpdateAssetInfoTransactionData\x12\x10\n\x08\x61sset_id\x18\x01 \x01(\x0c\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x03 \x01(\t\x12\r\n\x05image\x18\x04 \x01(\t\"5\n\x1fInvokeExpressionTransactionData\x12\x12\n\nexpression\x18\x01 \x01(\x0c\"J\n\x1dPrivatePaymentTransactionData\x12\x19\n\x11recipient_address\x18\x01 \x01(\x0c\x12\x0e\n\x06\x61mount\x18\x02 \x01(\x03\x42T\n\x1c\x63om.vrp.protobuf.transactionZ.github.com/eVESTXCOIN/govrp/grpc/generated/vrp\xaa\x02\x03VRPb\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'vrp.transaction_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\034com.vrp.protobuf.transactionZ.github.com/eVESTXCOIN/govrp/grpc/generated/vrp\252\002\003VRP'
  _SIGNEDTRANSACTION._serialized_start=86
  _SIGNEDTRANSACTION._serialized_end=213
  _TRANSACTION._serialized_start=216
  _TRANSACTION._serialized_end=1302
  _GENESISTRANSACTIONDATA._serialized_start=1304
  _GENESISTRANSACTIONDATA._serialized_end=1371
  _PAYMENTTRANSACTIONDATA._serialized_start=1373
  _PAYMENTTRANSACTIONDATA._serialized_end=1440
  _TRANSFERTRANSACTIONDATA._serialized_start=1442
  _TRANSFERTRANSACTIONDATA._serialized_end=1551
  _CREATEALIASTRANSACTIONDATA._serialized_start=1553
  _CREATEALIASTRANSACTIONDATA._serialized_end=1596
  _DATATRANSACTIONDATA._serialized_start=1599
  _DATATRANSACTIONDATA._serialized_end=1796
  _DATATRANSACTIONDATA_DATAENTRY._serialized_start=1672
  _DATATRANSACTIONDATA_DATAENTRY._serialized_end=1796
  _MASSTRANSFERTRANSACTIONDATA._serialized_start=1799
  _MASSTRANSFERTRANSACTIONDATA._serialized_end=1991
  _MASSTRANSFERTRANSACTIONDATA_TRANSFER._serialized_start=1930
  _MASSTRANSFERTRANSACTIONDATA_TRANSFER._serialized_end=1991
  _LEASETRANSACTIONDATA._serialized_start=1993
  _LEASETRANSACTIONDATA._serialized_end=2066
  _LEASECANCELTRANSACTIONDATA._serialized_start=2068
  _LEASECANCELTRANSACTIONDATA._serialized_end=2114
  _BURNTRANSACTIONDATA._serialized_start=2116
  _BURNTRANSACTIONDATA._serialized_end=2172
  _ISSUETRANSACTIONDATA._serialized_start=2174
  _ISSUETRANSACTIONDATA._serialized_end=2301
  _REISSUETRANSACTIONDATA._serialized_start=2303
  _REISSUETRANSACTIONDATA._serialized_end=2382
  _SETASSETSCRIPTTRANSACTIONDATA._serialized_start=2384
  _SETASSETSCRIPTTRANSACTIONDATA._serialized_end=2449
  _SETSCRIPTTRANSACTIONDATA._serialized_start=2451
  _SETSCRIPTTRANSACTIONDATA._serialized_end=2493
  _EXCHANGETRANSACTIONDATA._serialized_start=2496
  _EXCHANGETRANSACTIONDATA._serialized_end=2631
  _SPONSORFEETRANSACTIONDATA._serialized_start=2633
  _SPONSORFEETRANSACTIONDATA._serialized_end=2690
  _INVOKESCRIPTTRANSACTIONDATA._serialized_start=2692
  _INVOKESCRIPTTRANSACTIONDATA._serialized_end=2806
  _UPDATEASSETINFOTRANSACTIONDATA._serialized_start=2808
  _UPDATEASSETINFOTRANSACTIONDATA._serialized_end=2908
  _INVOKEEXPRESSIONTRANSACTIONDATA._serialized_start=2910
  _INVOKEEXPRESSIONTRANSACTIONDATA._serialized_end=2963
  _PRIVATEPAYMENTTRANSACTIONDATA._serialized_start=2965
  _PRIVATEPAYMENTTRANSACTIONDATA._serialized_end=3039
# @@protoc_insertion_point(module_scope)

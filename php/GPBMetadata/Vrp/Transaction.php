<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vrp/transaction.proto

namespace GPBMetadata\Vrp;

class Transaction
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Vrp\Amount::initOnce();
        \GPBMetadata\Vrp\Recipient::initOnce();
        \GPBMetadata\Vrp\Order::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
vrp/transaction.protovrpvrp/recipient.protovrp/order.proto"
SignedTransaction+
vrp_transaction (2.vrp.TransactionH 
ethereum_transaction (H 
proofs (B
transaction"�
Transaction
chain_id (
sender_public_key (
fee (2.vrp.Amount
	timestamp (
version (.
genesise (2.vrp.GenesisTransactionDataH .
paymentf (2.vrp.PaymentTransactionDataH *
issueg (2.vrp.IssueTransactionDataH 0
transferh (2.vrp.TransferTransactionDataH .
reissuei (2.vrp.ReissueTransactionDataH (
burnj (2.vrp.BurnTransactionDataH 0
exchangek (2.vrp.ExchangeTransactionDataH *
leasel (2.vrp.LeaseTransactionDataH 7
lease_cancelm (2.vrp.LeaseCancelTransactionDataH 7
create_aliasn (2.vrp.CreateAliasTransactionDataH 9
mass_transfero (2 .vrp.MassTransferTransactionDataH 4
data_transactionp (2.vrp.DataTransactionDataH 3

set_scriptq (2.vrp.SetScriptTransactionDataH 5
sponsor_feer (2.vrp.SponsorFeeTransactionDataH >
set_asset_scripts (2".vrp.SetAssetScriptTransactionDataH 9
invoke_scriptt (2 .vrp.InvokeScriptTransactionDataH @
update_asset_infou (2#.vrp.UpdateAssetInfoTransactionDataH :
anonymous_txv (2".vrp.PrivatePaymentTransactionDataH B
data"C
GenesisTransactionData
recipient_address (
amount ("C
PaymentTransactionData
recipient_address (
amount ("m
TransferTransactionData!
	recipient (2.vrp.Recipient
amount (2.vrp.Amount

attachment ("+
CreateAliasTransactionData
alias (	"�
DataTransactionData0
data (2".vrp.DataTransactionData.DataEntry|
	DataEntry
key (	
	int_value
 (H 

bool_value (H 
binary_value (H 
string_value (	H B
value"�
MassTransferTransactionData
asset_id (<
	transfers (2).vrp.MassTransferTransactionData.Transfer

attachment (=
Transfer!
	recipient (2.vrp.Recipient
amount ("I
LeaseTransactionData!
	recipient (2.vrp.Recipient
amount (".
LeaseCancelTransactionData
lease_id ("8
BurnTransactionData!
asset_amount (2.vrp.Amount"
IssueTransactionData
name (	
description (	
amount (
decimals (

reissuable (
script ("O
ReissueTransactionData!
asset_amount (2.vrp.Amount

reissuable ("A
SetAssetScriptTransactionData
asset_id (
script ("*
SetScriptTransactionData
script ("�
ExchangeTransactionData
amount (
price (
buy_matcher_fee (
sell_matcher_fee (
orders (2
.vrp.Order"9
SponsorFeeTransactionData
min_fee (2.vrp.Amount"r
InvokeScriptTransactionData
d_app (2.vrp.Recipient
function_call (
payments (2.vrp.Amount"d
UpdateAssetInfoTransactionData
asset_id (
name (	
description (	
image (	"5
InvokeExpressionTransactionData

expression ("J
PrivatePaymentTransactionData
recipient_address (
amount (BT
com.vrp.protobuf.transactionZ.github.com/eVESTXCOIN/govrp/grpc/generated/vrp�VRPbproto3'
        , true);

        static::$is_initialized = true;
    }
}


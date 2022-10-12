<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vrp/transaction.proto

namespace Vrp;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>vrp.Transaction</code>
 */
class Transaction extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>int32 chain_id = 1;</code>
     */
    protected $chain_id = 0;
    /**
     * Generated from protobuf field <code>bytes sender_public_key = 2;</code>
     */
    protected $sender_public_key = '';
    /**
     * Generated from protobuf field <code>.vrp.Amount fee = 3;</code>
     */
    protected $fee = null;
    /**
     * Generated from protobuf field <code>int64 timestamp = 4;</code>
     */
    protected $timestamp = 0;
    /**
     * Generated from protobuf field <code>int32 version = 5;</code>
     */
    protected $version = 0;
    protected $data;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $chain_id
     *     @type string $sender_public_key
     *     @type \Vrp\Amount $fee
     *     @type int|string $timestamp
     *     @type int $version
     *     @type \Vrp\GenesisTransactionData $genesis
     *     @type \Vrp\PaymentTransactionData $payment
     *     @type \Vrp\IssueTransactionData $issue
     *     @type \Vrp\TransferTransactionData $transfer
     *     @type \Vrp\ReissueTransactionData $reissue
     *     @type \Vrp\BurnTransactionData $burn
     *     @type \Vrp\ExchangeTransactionData $exchange
     *     @type \Vrp\LeaseTransactionData $lease
     *     @type \Vrp\LeaseCancelTransactionData $lease_cancel
     *     @type \Vrp\CreateAliasTransactionData $create_alias
     *     @type \Vrp\MassTransferTransactionData $mass_transfer
     *     @type \Vrp\DataTransactionData $data_transaction
     *     @type \Vrp\SetScriptTransactionData $set_script
     *     @type \Vrp\SponsorFeeTransactionData $sponsor_fee
     *     @type \Vrp\SetAssetScriptTransactionData $set_asset_script
     *     @type \Vrp\InvokeScriptTransactionData $invoke_script
     *     @type \Vrp\UpdateAssetInfoTransactionData $update_asset_info
     *     @type \Vrp\PrivatePaymentTransactionData $anonymous_tx
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Vrp\Transaction::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>int32 chain_id = 1;</code>
     * @return int
     */
    public function getChainId()
    {
        return $this->chain_id;
    }

    /**
     * Generated from protobuf field <code>int32 chain_id = 1;</code>
     * @param int $var
     * @return $this
     */
    public function setChainId($var)
    {
        GPBUtil::checkInt32($var);
        $this->chain_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bytes sender_public_key = 2;</code>
     * @return string
     */
    public function getSenderPublicKey()
    {
        return $this->sender_public_key;
    }

    /**
     * Generated from protobuf field <code>bytes sender_public_key = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setSenderPublicKey($var)
    {
        GPBUtil::checkString($var, False);
        $this->sender_public_key = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vrp.Amount fee = 3;</code>
     * @return \Vrp\Amount
     */
    public function getFee()
    {
        return $this->fee;
    }

    /**
     * Generated from protobuf field <code>.vrp.Amount fee = 3;</code>
     * @param \Vrp\Amount $var
     * @return $this
     */
    public function setFee($var)
    {
        GPBUtil::checkMessage($var, \Vrp\Amount::class);
        $this->fee = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int64 timestamp = 4;</code>
     * @return int|string
     */
    public function getTimestamp()
    {
        return $this->timestamp;
    }

    /**
     * Generated from protobuf field <code>int64 timestamp = 4;</code>
     * @param int|string $var
     * @return $this
     */
    public function setTimestamp($var)
    {
        GPBUtil::checkInt64($var);
        $this->timestamp = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 version = 5;</code>
     * @return int
     */
    public function getVersion()
    {
        return $this->version;
    }

    /**
     * Generated from protobuf field <code>int32 version = 5;</code>
     * @param int $var
     * @return $this
     */
    public function setVersion($var)
    {
        GPBUtil::checkInt32($var);
        $this->version = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vrp.GenesisTransactionData genesis = 101;</code>
     * @return \Vrp\GenesisTransactionData
     */
    public function getGenesis()
    {
        return $this->readOneof(101);
    }

    /**
     * Generated from protobuf field <code>.vrp.GenesisTransactionData genesis = 101;</code>
     * @param \Vrp\GenesisTransactionData $var
     * @return $this
     */
    public function setGenesis($var)
    {
        GPBUtil::checkMessage($var, \Vrp\GenesisTransactionData::class);
        $this->writeOneof(101, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vrp.PaymentTransactionData payment = 102;</code>
     * @return \Vrp\PaymentTransactionData
     */
    public function getPayment()
    {
        return $this->readOneof(102);
    }

    /**
     * Generated from protobuf field <code>.vrp.PaymentTransactionData payment = 102;</code>
     * @param \Vrp\PaymentTransactionData $var
     * @return $this
     */
    public function setPayment($var)
    {
        GPBUtil::checkMessage($var, \Vrp\PaymentTransactionData::class);
        $this->writeOneof(102, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vrp.IssueTransactionData issue = 103;</code>
     * @return \Vrp\IssueTransactionData
     */
    public function getIssue()
    {
        return $this->readOneof(103);
    }

    /**
     * Generated from protobuf field <code>.vrp.IssueTransactionData issue = 103;</code>
     * @param \Vrp\IssueTransactionData $var
     * @return $this
     */
    public function setIssue($var)
    {
        GPBUtil::checkMessage($var, \Vrp\IssueTransactionData::class);
        $this->writeOneof(103, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vrp.TransferTransactionData transfer = 104;</code>
     * @return \Vrp\TransferTransactionData
     */
    public function getTransfer()
    {
        return $this->readOneof(104);
    }

    /**
     * Generated from protobuf field <code>.vrp.TransferTransactionData transfer = 104;</code>
     * @param \Vrp\TransferTransactionData $var
     * @return $this
     */
    public function setTransfer($var)
    {
        GPBUtil::checkMessage($var, \Vrp\TransferTransactionData::class);
        $this->writeOneof(104, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vrp.ReissueTransactionData reissue = 105;</code>
     * @return \Vrp\ReissueTransactionData
     */
    public function getReissue()
    {
        return $this->readOneof(105);
    }

    /**
     * Generated from protobuf field <code>.vrp.ReissueTransactionData reissue = 105;</code>
     * @param \Vrp\ReissueTransactionData $var
     * @return $this
     */
    public function setReissue($var)
    {
        GPBUtil::checkMessage($var, \Vrp\ReissueTransactionData::class);
        $this->writeOneof(105, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vrp.BurnTransactionData burn = 106;</code>
     * @return \Vrp\BurnTransactionData
     */
    public function getBurn()
    {
        return $this->readOneof(106);
    }

    /**
     * Generated from protobuf field <code>.vrp.BurnTransactionData burn = 106;</code>
     * @param \Vrp\BurnTransactionData $var
     * @return $this
     */
    public function setBurn($var)
    {
        GPBUtil::checkMessage($var, \Vrp\BurnTransactionData::class);
        $this->writeOneof(106, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vrp.ExchangeTransactionData exchange = 107;</code>
     * @return \Vrp\ExchangeTransactionData
     */
    public function getExchange()
    {
        return $this->readOneof(107);
    }

    /**
     * Generated from protobuf field <code>.vrp.ExchangeTransactionData exchange = 107;</code>
     * @param \Vrp\ExchangeTransactionData $var
     * @return $this
     */
    public function setExchange($var)
    {
        GPBUtil::checkMessage($var, \Vrp\ExchangeTransactionData::class);
        $this->writeOneof(107, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vrp.LeaseTransactionData lease = 108;</code>
     * @return \Vrp\LeaseTransactionData
     */
    public function getLease()
    {
        return $this->readOneof(108);
    }

    /**
     * Generated from protobuf field <code>.vrp.LeaseTransactionData lease = 108;</code>
     * @param \Vrp\LeaseTransactionData $var
     * @return $this
     */
    public function setLease($var)
    {
        GPBUtil::checkMessage($var, \Vrp\LeaseTransactionData::class);
        $this->writeOneof(108, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vrp.LeaseCancelTransactionData lease_cancel = 109;</code>
     * @return \Vrp\LeaseCancelTransactionData
     */
    public function getLeaseCancel()
    {
        return $this->readOneof(109);
    }

    /**
     * Generated from protobuf field <code>.vrp.LeaseCancelTransactionData lease_cancel = 109;</code>
     * @param \Vrp\LeaseCancelTransactionData $var
     * @return $this
     */
    public function setLeaseCancel($var)
    {
        GPBUtil::checkMessage($var, \Vrp\LeaseCancelTransactionData::class);
        $this->writeOneof(109, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vrp.CreateAliasTransactionData create_alias = 110;</code>
     * @return \Vrp\CreateAliasTransactionData
     */
    public function getCreateAlias()
    {
        return $this->readOneof(110);
    }

    /**
     * Generated from protobuf field <code>.vrp.CreateAliasTransactionData create_alias = 110;</code>
     * @param \Vrp\CreateAliasTransactionData $var
     * @return $this
     */
    public function setCreateAlias($var)
    {
        GPBUtil::checkMessage($var, \Vrp\CreateAliasTransactionData::class);
        $this->writeOneof(110, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vrp.MassTransferTransactionData mass_transfer = 111;</code>
     * @return \Vrp\MassTransferTransactionData
     */
    public function getMassTransfer()
    {
        return $this->readOneof(111);
    }

    /**
     * Generated from protobuf field <code>.vrp.MassTransferTransactionData mass_transfer = 111;</code>
     * @param \Vrp\MassTransferTransactionData $var
     * @return $this
     */
    public function setMassTransfer($var)
    {
        GPBUtil::checkMessage($var, \Vrp\MassTransferTransactionData::class);
        $this->writeOneof(111, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vrp.DataTransactionData data_transaction = 112;</code>
     * @return \Vrp\DataTransactionData
     */
    public function getDataTransaction()
    {
        return $this->readOneof(112);
    }

    /**
     * Generated from protobuf field <code>.vrp.DataTransactionData data_transaction = 112;</code>
     * @param \Vrp\DataTransactionData $var
     * @return $this
     */
    public function setDataTransaction($var)
    {
        GPBUtil::checkMessage($var, \Vrp\DataTransactionData::class);
        $this->writeOneof(112, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vrp.SetScriptTransactionData set_script = 113;</code>
     * @return \Vrp\SetScriptTransactionData
     */
    public function getSetScript()
    {
        return $this->readOneof(113);
    }

    /**
     * Generated from protobuf field <code>.vrp.SetScriptTransactionData set_script = 113;</code>
     * @param \Vrp\SetScriptTransactionData $var
     * @return $this
     */
    public function setSetScript($var)
    {
        GPBUtil::checkMessage($var, \Vrp\SetScriptTransactionData::class);
        $this->writeOneof(113, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vrp.SponsorFeeTransactionData sponsor_fee = 114;</code>
     * @return \Vrp\SponsorFeeTransactionData
     */
    public function getSponsorFee()
    {
        return $this->readOneof(114);
    }

    /**
     * Generated from protobuf field <code>.vrp.SponsorFeeTransactionData sponsor_fee = 114;</code>
     * @param \Vrp\SponsorFeeTransactionData $var
     * @return $this
     */
    public function setSponsorFee($var)
    {
        GPBUtil::checkMessage($var, \Vrp\SponsorFeeTransactionData::class);
        $this->writeOneof(114, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vrp.SetAssetScriptTransactionData set_asset_script = 115;</code>
     * @return \Vrp\SetAssetScriptTransactionData
     */
    public function getSetAssetScript()
    {
        return $this->readOneof(115);
    }

    /**
     * Generated from protobuf field <code>.vrp.SetAssetScriptTransactionData set_asset_script = 115;</code>
     * @param \Vrp\SetAssetScriptTransactionData $var
     * @return $this
     */
    public function setSetAssetScript($var)
    {
        GPBUtil::checkMessage($var, \Vrp\SetAssetScriptTransactionData::class);
        $this->writeOneof(115, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vrp.InvokeScriptTransactionData invoke_script = 116;</code>
     * @return \Vrp\InvokeScriptTransactionData
     */
    public function getInvokeScript()
    {
        return $this->readOneof(116);
    }

    /**
     * Generated from protobuf field <code>.vrp.InvokeScriptTransactionData invoke_script = 116;</code>
     * @param \Vrp\InvokeScriptTransactionData $var
     * @return $this
     */
    public function setInvokeScript($var)
    {
        GPBUtil::checkMessage($var, \Vrp\InvokeScriptTransactionData::class);
        $this->writeOneof(116, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vrp.UpdateAssetInfoTransactionData update_asset_info = 117;</code>
     * @return \Vrp\UpdateAssetInfoTransactionData
     */
    public function getUpdateAssetInfo()
    {
        return $this->readOneof(117);
    }

    /**
     * Generated from protobuf field <code>.vrp.UpdateAssetInfoTransactionData update_asset_info = 117;</code>
     * @param \Vrp\UpdateAssetInfoTransactionData $var
     * @return $this
     */
    public function setUpdateAssetInfo($var)
    {
        GPBUtil::checkMessage($var, \Vrp\UpdateAssetInfoTransactionData::class);
        $this->writeOneof(117, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vrp.PrivatePaymentTransactionData anonymous_tx = 118;</code>
     * @return \Vrp\PrivatePaymentTransactionData
     */
    public function getAnonymousTx()
    {
        return $this->readOneof(118);
    }

    /**
     * Generated from protobuf field <code>.vrp.PrivatePaymentTransactionData anonymous_tx = 118;</code>
     * @param \Vrp\PrivatePaymentTransactionData $var
     * @return $this
     */
    public function setAnonymousTx($var)
    {
        GPBUtil::checkMessage($var, \Vrp\PrivatePaymentTransactionData::class);
        $this->writeOneof(118, $var);

        return $this;
    }

    /**
     * @return string
     */
    public function getData()
    {
        return $this->whichOneof("data");
    }

}


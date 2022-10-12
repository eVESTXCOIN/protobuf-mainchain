<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vrp/order.proto

namespace Vrp;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>vrp.Order</code>
 */
class Order extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>int64 chain_id = 1;</code>
     */
    protected $chain_id = 0;
    /**
     * Generated from protobuf field <code>bytes matcher_public_key = 3;</code>
     */
    protected $matcher_public_key = '';
    /**
     * Generated from protobuf field <code>.vrp.AssetPair asset_pair = 4;</code>
     */
    protected $asset_pair = null;
    /**
     * Generated from protobuf field <code>.vrp.Order.Side order_side = 5;</code>
     */
    protected $order_side = 0;
    /**
     * Generated from protobuf field <code>int64 amount = 6;</code>
     */
    protected $amount = 0;
    /**
     * Generated from protobuf field <code>int64 price = 7;</code>
     */
    protected $price = 0;
    /**
     * Generated from protobuf field <code>int64 timestamp = 8;</code>
     */
    protected $timestamp = 0;
    /**
     * Generated from protobuf field <code>int64 expiration = 9;</code>
     */
    protected $expiration = 0;
    /**
     * Generated from protobuf field <code>.vrp.Amount matcher_fee = 10;</code>
     */
    protected $matcher_fee = null;
    /**
     * Generated from protobuf field <code>int32 version = 11;</code>
     */
    protected $version = 0;
    /**
     * Generated from protobuf field <code>repeated bytes proofs = 12;</code>
     */
    private $proofs;
    /**
     * Generated from protobuf field <code>.vrp.Order.PriceMode price_mode = 14;</code>
     */
    protected $price_mode = 0;
    protected $sender;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int|string $chain_id
     *     @type string $matcher_public_key
     *     @type \Vrp\AssetPair $asset_pair
     *     @type int $order_side
     *     @type int|string $amount
     *     @type int|string $price
     *     @type int|string $timestamp
     *     @type int|string $expiration
     *     @type \Vrp\Amount $matcher_fee
     *     @type int $version
     *     @type string[]|\Google\Protobuf\Internal\RepeatedField $proofs
     *     @type int $price_mode
     *     @type string $sender_public_key
     *     @type string $eip712_signature
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Vrp\Order::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>int64 chain_id = 1;</code>
     * @return int|string
     */
    public function getChainId()
    {
        return $this->chain_id;
    }

    /**
     * Generated from protobuf field <code>int64 chain_id = 1;</code>
     * @param int|string $var
     * @return $this
     */
    public function setChainId($var)
    {
        GPBUtil::checkInt64($var);
        $this->chain_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bytes matcher_public_key = 3;</code>
     * @return string
     */
    public function getMatcherPublicKey()
    {
        return $this->matcher_public_key;
    }

    /**
     * Generated from protobuf field <code>bytes matcher_public_key = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setMatcherPublicKey($var)
    {
        GPBUtil::checkString($var, False);
        $this->matcher_public_key = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vrp.AssetPair asset_pair = 4;</code>
     * @return \Vrp\AssetPair
     */
    public function getAssetPair()
    {
        return $this->asset_pair;
    }

    /**
     * Generated from protobuf field <code>.vrp.AssetPair asset_pair = 4;</code>
     * @param \Vrp\AssetPair $var
     * @return $this
     */
    public function setAssetPair($var)
    {
        GPBUtil::checkMessage($var, \Vrp\AssetPair::class);
        $this->asset_pair = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vrp.Order.Side order_side = 5;</code>
     * @return int
     */
    public function getOrderSide()
    {
        return $this->order_side;
    }

    /**
     * Generated from protobuf field <code>.vrp.Order.Side order_side = 5;</code>
     * @param int $var
     * @return $this
     */
    public function setOrderSide($var)
    {
        GPBUtil::checkEnum($var, \Vrp\Order_Side::class);
        $this->order_side = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int64 amount = 6;</code>
     * @return int|string
     */
    public function getAmount()
    {
        return $this->amount;
    }

    /**
     * Generated from protobuf field <code>int64 amount = 6;</code>
     * @param int|string $var
     * @return $this
     */
    public function setAmount($var)
    {
        GPBUtil::checkInt64($var);
        $this->amount = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int64 price = 7;</code>
     * @return int|string
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Generated from protobuf field <code>int64 price = 7;</code>
     * @param int|string $var
     * @return $this
     */
    public function setPrice($var)
    {
        GPBUtil::checkInt64($var);
        $this->price = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int64 timestamp = 8;</code>
     * @return int|string
     */
    public function getTimestamp()
    {
        return $this->timestamp;
    }

    /**
     * Generated from protobuf field <code>int64 timestamp = 8;</code>
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
     * Generated from protobuf field <code>int64 expiration = 9;</code>
     * @return int|string
     */
    public function getExpiration()
    {
        return $this->expiration;
    }

    /**
     * Generated from protobuf field <code>int64 expiration = 9;</code>
     * @param int|string $var
     * @return $this
     */
    public function setExpiration($var)
    {
        GPBUtil::checkInt64($var);
        $this->expiration = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vrp.Amount matcher_fee = 10;</code>
     * @return \Vrp\Amount
     */
    public function getMatcherFee()
    {
        return $this->matcher_fee;
    }

    /**
     * Generated from protobuf field <code>.vrp.Amount matcher_fee = 10;</code>
     * @param \Vrp\Amount $var
     * @return $this
     */
    public function setMatcherFee($var)
    {
        GPBUtil::checkMessage($var, \Vrp\Amount::class);
        $this->matcher_fee = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 version = 11;</code>
     * @return int
     */
    public function getVersion()
    {
        return $this->version;
    }

    /**
     * Generated from protobuf field <code>int32 version = 11;</code>
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
     * Generated from protobuf field <code>repeated bytes proofs = 12;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getProofs()
    {
        return $this->proofs;
    }

    /**
     * Generated from protobuf field <code>repeated bytes proofs = 12;</code>
     * @param string[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setProofs($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::BYTES);
        $this->proofs = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vrp.Order.PriceMode price_mode = 14;</code>
     * @return int
     */
    public function getPriceMode()
    {
        return $this->price_mode;
    }

    /**
     * Generated from protobuf field <code>.vrp.Order.PriceMode price_mode = 14;</code>
     * @param int $var
     * @return $this
     */
    public function setPriceMode($var)
    {
        GPBUtil::checkEnum($var, \Vrp\Order_PriceMode::class);
        $this->price_mode = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bytes sender_public_key = 2;</code>
     * @return string
     */
    public function getSenderPublicKey()
    {
        return $this->readOneof(2);
    }

    /**
     * Generated from protobuf field <code>bytes sender_public_key = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setSenderPublicKey($var)
    {
        GPBUtil::checkString($var, False);
        $this->writeOneof(2, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>bytes eip712_signature = 13;</code>
     * @return string
     */
    public function getEip712Signature()
    {
        return $this->readOneof(13);
    }

    /**
     * Generated from protobuf field <code>bytes eip712_signature = 13;</code>
     * @param string $var
     * @return $this
     */
    public function setEip712Signature($var)
    {
        GPBUtil::checkString($var, False);
        $this->writeOneof(13, $var);

        return $this;
    }

    /**
     * @return string
     */
    public function getSender()
    {
        return $this->whichOneof("sender");
    }

}


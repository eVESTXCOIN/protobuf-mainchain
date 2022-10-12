<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vrp/transaction.proto

namespace Vrp;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>vrp.ReissueTransactionData</code>
 */
class ReissueTransactionData extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.vrp.Amount asset_amount = 1;</code>
     */
    protected $asset_amount = null;
    /**
     * Generated from protobuf field <code>bool reissuable = 2;</code>
     */
    protected $reissuable = false;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Vrp\Amount $asset_amount
     *     @type bool $reissuable
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Vrp\Transaction::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.vrp.Amount asset_amount = 1;</code>
     * @return \Vrp\Amount
     */
    public function getAssetAmount()
    {
        return $this->asset_amount;
    }

    /**
     * Generated from protobuf field <code>.vrp.Amount asset_amount = 1;</code>
     * @param \Vrp\Amount $var
     * @return $this
     */
    public function setAssetAmount($var)
    {
        GPBUtil::checkMessage($var, \Vrp\Amount::class);
        $this->asset_amount = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool reissuable = 2;</code>
     * @return bool
     */
    public function getReissuable()
    {
        return $this->reissuable;
    }

    /**
     * Generated from protobuf field <code>bool reissuable = 2;</code>
     * @param bool $var
     * @return $this
     */
    public function setReissuable($var)
    {
        GPBUtil::checkBool($var);
        $this->reissuable = $var;

        return $this;
    }

}

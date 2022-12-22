<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vrp/transaction.proto

namespace Vrp;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>vrp.SponsorFeeTransactionData</code>
 */
class SponsorFeeTransactionData extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.vrp.Amount min_fee = 1;</code>
     */
    protected $min_fee = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Vrp\Amount $min_fee
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Vrp\Transaction::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.vrp.Amount min_fee = 1;</code>
     * @return \Vrp\Amount|null
     */
    public function getMinFee()
    {
        return $this->min_fee;
    }

    public function hasMinFee()
    {
        return isset($this->min_fee);
    }

    public function clearMinFee()
    {
        unset($this->min_fee);
    }

    /**
     * Generated from protobuf field <code>.vrp.Amount min_fee = 1;</code>
     * @param \Vrp\Amount $var
     * @return $this
     */
    public function setMinFee($var)
    {
        GPBUtil::checkMessage($var, \Vrp\Amount::class);
        $this->min_fee = $var;

        return $this;
    }

}


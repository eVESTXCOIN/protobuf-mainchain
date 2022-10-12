<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vrp/transaction.proto

namespace Vrp;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>vrp.TransferTransactionData</code>
 */
class TransferTransactionData extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.vrp.Recipient recipient = 1;</code>
     */
    protected $recipient = null;
    /**
     * Generated from protobuf field <code>.vrp.Amount amount = 2;</code>
     */
    protected $amount = null;
    /**
     * Generated from protobuf field <code>bytes attachment = 3;</code>
     */
    protected $attachment = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Vrp\Recipient $recipient
     *     @type \Vrp\Amount $amount
     *     @type string $attachment
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Vrp\Transaction::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.vrp.Recipient recipient = 1;</code>
     * @return \Vrp\Recipient
     */
    public function getRecipient()
    {
        return $this->recipient;
    }

    /**
     * Generated from protobuf field <code>.vrp.Recipient recipient = 1;</code>
     * @param \Vrp\Recipient $var
     * @return $this
     */
    public function setRecipient($var)
    {
        GPBUtil::checkMessage($var, \Vrp\Recipient::class);
        $this->recipient = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vrp.Amount amount = 2;</code>
     * @return \Vrp\Amount
     */
    public function getAmount()
    {
        return $this->amount;
    }

    /**
     * Generated from protobuf field <code>.vrp.Amount amount = 2;</code>
     * @param \Vrp\Amount $var
     * @return $this
     */
    public function setAmount($var)
    {
        GPBUtil::checkMessage($var, \Vrp\Amount::class);
        $this->amount = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bytes attachment = 3;</code>
     * @return string
     */
    public function getAttachment()
    {
        return $this->attachment;
    }

    /**
     * Generated from protobuf field <code>bytes attachment = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setAttachment($var)
    {
        GPBUtil::checkString($var, False);
        $this->attachment = $var;

        return $this;
    }

}


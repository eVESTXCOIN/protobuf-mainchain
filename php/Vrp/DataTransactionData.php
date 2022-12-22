<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vrp/transaction.proto

namespace Vrp;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>vrp.DataTransactionData</code>
 */
class DataTransactionData extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .vrp.DataTransactionData.DataEntry data = 1;</code>
     */
    private $data;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type array<\Vrp\DataTransactionData\DataEntry>|\Google\Protobuf\Internal\RepeatedField $data
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Vrp\Transaction::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .vrp.DataTransactionData.DataEntry data = 1;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getData()
    {
        return $this->data;
    }

    /**
     * Generated from protobuf field <code>repeated .vrp.DataTransactionData.DataEntry data = 1;</code>
     * @param array<\Vrp\DataTransactionData\DataEntry>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setData($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Vrp\DataTransactionData\DataEntry::class);
        $this->data = $arr;

        return $this;
    }

}


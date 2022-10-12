<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vrp/invoke_script_result.proto

namespace Vrp\InvokeScriptResult;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>vrp.InvokeScriptResult.Reissue</code>
 */
class Reissue extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>bytes asset_id = 1;</code>
     */
    protected $asset_id = '';
    /**
     * Generated from protobuf field <code>int64 amount = 2;</code>
     */
    protected $amount = 0;
    /**
     * Generated from protobuf field <code>bool is_reissuable = 3;</code>
     */
    protected $is_reissuable = false;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $asset_id
     *     @type int|string $amount
     *     @type bool $is_reissuable
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Vrp\InvokeScriptResult::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>bytes asset_id = 1;</code>
     * @return string
     */
    public function getAssetId()
    {
        return $this->asset_id;
    }

    /**
     * Generated from protobuf field <code>bytes asset_id = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setAssetId($var)
    {
        GPBUtil::checkString($var, False);
        $this->asset_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int64 amount = 2;</code>
     * @return int|string
     */
    public function getAmount()
    {
        return $this->amount;
    }

    /**
     * Generated from protobuf field <code>int64 amount = 2;</code>
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
     * Generated from protobuf field <code>bool is_reissuable = 3;</code>
     * @return bool
     */
    public function getIsReissuable()
    {
        return $this->is_reissuable;
    }

    /**
     * Generated from protobuf field <code>bool is_reissuable = 3;</code>
     * @param bool $var
     * @return $this
     */
    public function setIsReissuable($var)
    {
        GPBUtil::checkBool($var);
        $this->is_reissuable = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Reissue::class, \Vrp\InvokeScriptResult_Reissue::class);

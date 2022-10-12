<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vrp/invoke_script_result.proto

namespace Vrp\InvokeScriptResult;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>vrp.InvokeScriptResult.Issue</code>
 */
class Issue extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>bytes asset_id = 1;</code>
     */
    protected $asset_id = '';
    /**
     * Generated from protobuf field <code>string name = 2;</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>string description = 3;</code>
     */
    protected $description = '';
    /**
     * Generated from protobuf field <code>string image = 4;</code>
     */
    protected $image = '';
    /**
     * Generated from protobuf field <code>int64 amount = 5;</code>
     */
    protected $amount = 0;
    /**
     * Generated from protobuf field <code>int32 decimals = 6;</code>
     */
    protected $decimals = 0;
    /**
     * Generated from protobuf field <code>bool reissuable = 7;</code>
     */
    protected $reissuable = false;
    /**
     * Generated from protobuf field <code>bytes script = 8;</code>
     */
    protected $script = '';
    /**
     * Generated from protobuf field <code>int64 nonce = 9;</code>
     */
    protected $nonce = 0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $asset_id
     *     @type string $name
     *     @type string $description
     *     @type string $image
     *     @type int|string $amount
     *     @type int $decimals
     *     @type bool $reissuable
     *     @type string $script
     *     @type int|string $nonce
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
     * Generated from protobuf field <code>string name = 2;</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Generated from protobuf field <code>string name = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setName($var)
    {
        GPBUtil::checkString($var, True);
        $this->name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string description = 3;</code>
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Generated from protobuf field <code>string description = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setDescription($var)
    {
        GPBUtil::checkString($var, True);
        $this->description = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string image = 4;</code>
     * @return string
     */
    public function getImage()
    {
        return $this->image;
    }

    /**
     * Generated from protobuf field <code>string image = 4;</code>
     * @param string $var
     * @return $this
     */
    public function setImage($var)
    {
        GPBUtil::checkString($var, True);
        $this->image = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int64 amount = 5;</code>
     * @return int|string
     */
    public function getAmount()
    {
        return $this->amount;
    }

    /**
     * Generated from protobuf field <code>int64 amount = 5;</code>
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
     * Generated from protobuf field <code>int32 decimals = 6;</code>
     * @return int
     */
    public function getDecimals()
    {
        return $this->decimals;
    }

    /**
     * Generated from protobuf field <code>int32 decimals = 6;</code>
     * @param int $var
     * @return $this
     */
    public function setDecimals($var)
    {
        GPBUtil::checkInt32($var);
        $this->decimals = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool reissuable = 7;</code>
     * @return bool
     */
    public function getReissuable()
    {
        return $this->reissuable;
    }

    /**
     * Generated from protobuf field <code>bool reissuable = 7;</code>
     * @param bool $var
     * @return $this
     */
    public function setReissuable($var)
    {
        GPBUtil::checkBool($var);
        $this->reissuable = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bytes script = 8;</code>
     * @return string
     */
    public function getScript()
    {
        return $this->script;
    }

    /**
     * Generated from protobuf field <code>bytes script = 8;</code>
     * @param string $var
     * @return $this
     */
    public function setScript($var)
    {
        GPBUtil::checkString($var, False);
        $this->script = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int64 nonce = 9;</code>
     * @return int|string
     */
    public function getNonce()
    {
        return $this->nonce;
    }

    /**
     * Generated from protobuf field <code>int64 nonce = 9;</code>
     * @param int|string $var
     * @return $this
     */
    public function setNonce($var)
    {
        GPBUtil::checkInt64($var);
        $this->nonce = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Issue::class, \Vrp\InvokeScriptResult_Issue::class);

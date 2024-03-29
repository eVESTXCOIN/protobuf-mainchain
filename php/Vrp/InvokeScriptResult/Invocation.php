<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vrp/invoke_script_result.proto

namespace Vrp\InvokeScriptResult;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>vrp.InvokeScriptResult.Invocation</code>
 */
class Invocation extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>bytes dApp = 1;</code>
     */
    protected $dApp = '';
    /**
     * Generated from protobuf field <code>.vrp.InvokeScriptResult.Call call = 2;</code>
     */
    protected $call = null;
    /**
     * Generated from protobuf field <code>repeated .vrp.Amount payments = 3;</code>
     */
    private $payments;
    /**
     * Generated from protobuf field <code>.vrp.InvokeScriptResult stateChanges = 4;</code>
     */
    protected $stateChanges = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $dApp
     *     @type \Vrp\InvokeScriptResult\Call $call
     *     @type array<\Vrp\Amount>|\Google\Protobuf\Internal\RepeatedField $payments
     *     @type \Vrp\InvokeScriptResult $stateChanges
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Vrp\InvokeScriptResult::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>bytes dApp = 1;</code>
     * @return string
     */
    public function getDApp()
    {
        return $this->dApp;
    }

    /**
     * Generated from protobuf field <code>bytes dApp = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setDApp($var)
    {
        GPBUtil::checkString($var, False);
        $this->dApp = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vrp.InvokeScriptResult.Call call = 2;</code>
     * @return \Vrp\InvokeScriptResult\Call|null
     */
    public function getCall()
    {
        return $this->call;
    }

    public function hasCall()
    {
        return isset($this->call);
    }

    public function clearCall()
    {
        unset($this->call);
    }

    /**
     * Generated from protobuf field <code>.vrp.InvokeScriptResult.Call call = 2;</code>
     * @param \Vrp\InvokeScriptResult\Call $var
     * @return $this
     */
    public function setCall($var)
    {
        GPBUtil::checkMessage($var, \Vrp\InvokeScriptResult\Call::class);
        $this->call = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .vrp.Amount payments = 3;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getPayments()
    {
        return $this->payments;
    }

    /**
     * Generated from protobuf field <code>repeated .vrp.Amount payments = 3;</code>
     * @param array<\Vrp\Amount>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setPayments($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Vrp\Amount::class);
        $this->payments = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.vrp.InvokeScriptResult stateChanges = 4;</code>
     * @return \Vrp\InvokeScriptResult|null
     */
    public function getStateChanges()
    {
        return $this->stateChanges;
    }

    public function hasStateChanges()
    {
        return isset($this->stateChanges);
    }

    public function clearStateChanges()
    {
        unset($this->stateChanges);
    }

    /**
     * Generated from protobuf field <code>.vrp.InvokeScriptResult stateChanges = 4;</code>
     * @param \Vrp\InvokeScriptResult $var
     * @return $this
     */
    public function setStateChanges($var)
    {
        GPBUtil::checkMessage($var, \Vrp\InvokeScriptResult::class);
        $this->stateChanges = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Invocation::class, \Vrp\InvokeScriptResult_Invocation::class);


<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vrp/order.proto

namespace GPBMetadata\Vrp;

class Order
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Vrp\Amount::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
vrp/order.protovrp"<
	AssetPair
amount_asset_id (
price_asset_id ("�
Order
chain_id (
matcher_public_key ("

asset_pair (2.vrp.AssetPair#

order_side (2.vrp.Order.Side
amount (
price (
	timestamp (

expiration	 ( 
matcher_fee
 (2.vrp.Amount
version (
proofs ((

price_mode (2.vrp.Order.PriceMode
sender_public_key (H 
eip712_signature (H "
Side
BUY 
SELL"@
	PriceMode
DEFAULT 
FIXED_DECIMALS
ASSET_DECIMALSB
senderBR
com.vrp.protobuf.orderZ2github.com/eVESTXCOIN/govrp/pkg/grpc/generated/vrp�VRPbproto3'
        , true);

        static::$is_initialized = true;
    }
}


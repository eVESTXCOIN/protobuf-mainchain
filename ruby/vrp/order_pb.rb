# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vrp/order.proto

require 'google/protobuf'

require 'vrp/amount_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("vrp/order.proto", :syntax => :proto3) do
    add_message "vrp.AssetPair" do
      optional :amount_asset_id, :bytes, 1
      optional :price_asset_id, :bytes, 2
    end
    add_message "vrp.Order" do
      optional :chain_id, :int64, 1
      optional :matcher_public_key, :bytes, 3
      optional :asset_pair, :message, 4, "vrp.AssetPair"
      optional :order_side, :enum, 5, "vrp.Order.Side"
      optional :amount, :int64, 6
      optional :price, :int64, 7
      optional :timestamp, :int64, 8
      optional :expiration, :int64, 9
      optional :matcher_fee, :message, 10, "vrp.Amount"
      optional :version, :int32, 11
      repeated :proofs, :bytes, 12
      optional :price_mode, :enum, 14, "vrp.Order.PriceMode"
      oneof :sender do
        optional :sender_public_key, :bytes, 2
        optional :eip712_signature, :bytes, 13
      end
    end
    add_enum "vrp.Order.Side" do
      value :BUY, 0
      value :SELL, 1
    end
    add_enum "vrp.Order.PriceMode" do
      value :DEFAULT, 0
      value :FIXED_DECIMALS, 1
      value :ASSET_DECIMALS, 2
    end
  end
end

module Vrp
  AssetPair = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("vrp.AssetPair").msgclass
  Order = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("vrp.Order").msgclass
  Order::Side = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("vrp.Order.Side").enummodule
  Order::PriceMode = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("vrp.Order.PriceMode").enummodule
end
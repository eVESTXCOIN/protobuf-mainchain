# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vrp/amount.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("vrp/amount.proto", :syntax => :proto3) do
    add_message "vrp.Amount" do
      optional :asset_id, :bytes, 1
      optional :amount, :int64, 2
    end
  end
end

module Vrp
  Amount = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("vrp.Amount").msgclass
end

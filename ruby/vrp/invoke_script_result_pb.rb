# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vrp/invoke_script_result.proto

require 'google/protobuf'

require 'vrp/transaction_pb'
require 'vrp/amount_pb'
require 'vrp/recipient_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("vrp/invoke_script_result.proto", :syntax => :proto3) do
    add_message "vrp.InvokeScriptResult" do
      repeated :data, :message, 1, "vrp.DataTransactionData.DataEntry"
      repeated :transfers, :message, 2, "vrp.InvokeScriptResult.Payment"
      repeated :issues, :message, 3, "vrp.InvokeScriptResult.Issue"
      repeated :reissues, :message, 4, "vrp.InvokeScriptResult.Reissue"
      repeated :burns, :message, 5, "vrp.InvokeScriptResult.Burn"
      optional :error_message, :message, 6, "vrp.InvokeScriptResult.ErrorMessage"
      repeated :sponsor_fees, :message, 7, "vrp.InvokeScriptResult.SponsorFee"
      repeated :leases, :message, 8, "vrp.InvokeScriptResult.Lease"
      repeated :lease_cancels, :message, 9, "vrp.InvokeScriptResult.LeaseCancel"
      repeated :invokes, :message, 10, "vrp.InvokeScriptResult.Invocation"
      repeated :private_payment, :message, 11, "vrp.InvokeScriptResult.PrivatePayment"
    end
    add_message "vrp.InvokeScriptResult.Payment" do
      optional :address, :bytes, 1
      optional :amount, :message, 2, "vrp.Amount"
    end
    add_message "vrp.InvokeScriptResult.PrivatePayment" do
      optional :address, :bytes, 1
      optional :amount, :message, 2, "vrp.Amount"
    end
    add_message "vrp.InvokeScriptResult.Issue" do
      optional :asset_id, :bytes, 1
      optional :name, :string, 2
      optional :description, :string, 3
      optional :image, :string, 4
      optional :amount, :int64, 5
      optional :decimals, :int32, 6
      optional :reissuable, :bool, 7
      optional :script, :bytes, 8
      optional :nonce, :int64, 9
    end
    add_message "vrp.InvokeScriptResult.Reissue" do
      optional :asset_id, :bytes, 1
      optional :amount, :int64, 2
      optional :is_reissuable, :bool, 3
    end
    add_message "vrp.InvokeScriptResult.Burn" do
      optional :asset_id, :bytes, 1
      optional :amount, :int64, 2
    end
    add_message "vrp.InvokeScriptResult.SponsorFee" do
      optional :min_fee, :message, 1, "vrp.Amount"
    end
    add_message "vrp.InvokeScriptResult.Lease" do
      optional :recipient, :message, 1, "vrp.Recipient"
      optional :amount, :int64, 2
      optional :nonce, :int64, 3
      optional :lease_id, :bytes, 4
    end
    add_message "vrp.InvokeScriptResult.LeaseCancel" do
      optional :lease_id, :bytes, 1
    end
    add_message "vrp.InvokeScriptResult.ErrorMessage" do
      optional :code, :int32, 1
      optional :text, :string, 2
    end
    add_message "vrp.InvokeScriptResult.Call" do
      optional :function, :string, 1
      repeated :args_bytes, :bytes, 2
      repeated :args, :message, 3, "vrp.InvokeScriptResult.Call.Argument"
    end
    add_message "vrp.InvokeScriptResult.Call.Argument" do
      oneof :value do
        optional :integer_value, :int64, 1
        optional :binary_value, :bytes, 2
        optional :string_value, :string, 3
        optional :boolean_value, :bool, 4
        optional :case_obj, :bytes, 5
        optional :list, :message, 10, "vrp.InvokeScriptResult.Call.Argument.List"
      end
    end
    add_message "vrp.InvokeScriptResult.Call.Argument.List" do
      repeated :items, :message, 1, "vrp.InvokeScriptResult.Call.Argument"
    end
    add_message "vrp.InvokeScriptResult.Invocation" do
      optional :dApp, :bytes, 1
      optional :call, :message, 2, "vrp.InvokeScriptResult.Call"
      repeated :payments, :message, 3, "vrp.Amount"
      optional :stateChanges, :message, 4, "vrp.InvokeScriptResult"
    end
  end
end

module Vrp
  InvokeScriptResult = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("vrp.InvokeScriptResult").msgclass
  InvokeScriptResult::Payment = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("vrp.InvokeScriptResult.Payment").msgclass
  InvokeScriptResult::PrivatePayment = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("vrp.InvokeScriptResult.PrivatePayment").msgclass
  InvokeScriptResult::Issue = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("vrp.InvokeScriptResult.Issue").msgclass
  InvokeScriptResult::Reissue = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("vrp.InvokeScriptResult.Reissue").msgclass
  InvokeScriptResult::Burn = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("vrp.InvokeScriptResult.Burn").msgclass
  InvokeScriptResult::SponsorFee = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("vrp.InvokeScriptResult.SponsorFee").msgclass
  InvokeScriptResult::Lease = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("vrp.InvokeScriptResult.Lease").msgclass
  InvokeScriptResult::LeaseCancel = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("vrp.InvokeScriptResult.LeaseCancel").msgclass
  InvokeScriptResult::ErrorMessage = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("vrp.InvokeScriptResult.ErrorMessage").msgclass
  InvokeScriptResult::Call = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("vrp.InvokeScriptResult.Call").msgclass
  InvokeScriptResult::Call::Argument = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("vrp.InvokeScriptResult.Call.Argument").msgclass
  InvokeScriptResult::Call::Argument::List = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("vrp.InvokeScriptResult.Call.Argument.List").msgclass
  InvokeScriptResult::Invocation = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("vrp.InvokeScriptResult.Invocation").msgclass
end

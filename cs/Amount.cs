// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: vrp/amount.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace VRP {

  /// <summary>Holder for reflection information generated from vrp/amount.proto</summary>
  public static partial class AmountReflection {

    #region Descriptor
    /// <summary>File descriptor for vrp/amount.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static AmountReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "ChB2cnAvYW1vdW50LnByb3RvEgN2cnAiKgoGQW1vdW50EhAKCGFzc2V0X2lk",
            "GAEgASgMEg4KBmFtb3VudBgCIAEoA0JMChBjb20udnJwLnByb3RvYnVmWjJn",
            "aXRodWIuY29tL2VWRVNUWENPSU4vZ292cnAvcGtnL2dycGMvZ2VuZXJhdGVk",
            "L3ZycKoCA1ZSUGIGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::VRP.Amount), global::VRP.Amount.Parser, new[]{ "AssetId", "Amount_" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class Amount : pb::IMessage<Amount> {
    private static readonly pb::MessageParser<Amount> _parser = new pb::MessageParser<Amount>(() => new Amount());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<Amount> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::VRP.AmountReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Amount() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Amount(Amount other) : this() {
      assetId_ = other.assetId_;
      amount_ = other.amount_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Amount Clone() {
      return new Amount(this);
    }

    /// <summary>Field number for the "asset_id" field.</summary>
    public const int AssetIdFieldNumber = 1;
    private pb::ByteString assetId_ = pb::ByteString.Empty;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pb::ByteString AssetId {
      get { return assetId_; }
      set {
        assetId_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "amount" field.</summary>
    public const int Amount_FieldNumber = 2;
    private long amount_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public long Amount_ {
      get { return amount_; }
      set {
        amount_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as Amount);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(Amount other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (AssetId != other.AssetId) return false;
      if (Amount_ != other.Amount_) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (AssetId.Length != 0) hash ^= AssetId.GetHashCode();
      if (Amount_ != 0L) hash ^= Amount_.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
      if (AssetId.Length != 0) {
        output.WriteRawTag(10);
        output.WriteBytes(AssetId);
      }
      if (Amount_ != 0L) {
        output.WriteRawTag(16);
        output.WriteInt64(Amount_);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (AssetId.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeBytesSize(AssetId);
      }
      if (Amount_ != 0L) {
        size += 1 + pb::CodedOutputStream.ComputeInt64Size(Amount_);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(Amount other) {
      if (other == null) {
        return;
      }
      if (other.AssetId.Length != 0) {
        AssetId = other.AssetId;
      }
      if (other.Amount_ != 0L) {
        Amount_ = other.Amount_;
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            AssetId = input.ReadBytes();
            break;
          }
          case 16: {
            Amount_ = input.ReadInt64();
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code

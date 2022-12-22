// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: vrp/recipient.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021, 8981
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace VRP {

  /// <summary>Holder for reflection information generated from vrp/recipient.proto</summary>
  public static partial class RecipientReflection {

    #region Descriptor
    /// <summary>File descriptor for vrp/recipient.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static RecipientReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "ChN2cnAvcmVjaXBpZW50LnByb3RvEgN2cnAiRAoJUmVjaXBpZW50EhkKD3B1",
            "YmxpY19rZXlfaGFzaBgBIAEoDEgAEg8KBWFsaWFzGAIgASgJSABCCwoJcmVj",
            "aXBpZW50QlgKHGNvbS52cnAucHJvdG9idWYudHJhbnNhY3Rpb25aMmdpdGh1",
            "Yi5jb20vZVZFU1RYQ09JTi9nb3ZycC9wa2cvZ3JwYy9nZW5lcmF0ZWQvdnJw",
            "qgIDVlJQYgZwcm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::VRP.Recipient), global::VRP.Recipient.Parser, new[]{ "PublicKeyHash", "Alias" }, new[]{ "Recipient" }, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class Recipient : pb::IMessage<Recipient>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<Recipient> _parser = new pb::MessageParser<Recipient>(() => new Recipient());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<Recipient> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::VRP.RecipientReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Recipient() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Recipient(Recipient other) : this() {
      switch (other.RecipientCase) {
        case RecipientOneofCase.PublicKeyHash:
          PublicKeyHash = other.PublicKeyHash;
          break;
        case RecipientOneofCase.Alias:
          Alias = other.Alias;
          break;
      }

      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Recipient Clone() {
      return new Recipient(this);
    }

    /// <summary>Field number for the "public_key_hash" field.</summary>
    public const int PublicKeyHashFieldNumber = 1;
    /// <summary>
    /// First 20 bytes of the result of the Keccak256(Blake2b256(publicKey)) hashing function.
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pb::ByteString PublicKeyHash {
      get { return recipientCase_ == RecipientOneofCase.PublicKeyHash ? (pb::ByteString) recipient_ : pb::ByteString.Empty; }
      set {
        recipient_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
        recipientCase_ = RecipientOneofCase.PublicKeyHash;
      }
    }

    /// <summary>Field number for the "alias" field.</summary>
    public const int AliasFieldNumber = 2;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public string Alias {
      get { return recipientCase_ == RecipientOneofCase.Alias ? (string) recipient_ : ""; }
      set {
        recipient_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
        recipientCase_ = RecipientOneofCase.Alias;
      }
    }

    private object recipient_;
    /// <summary>Enum of possible cases for the "recipient" oneof.</summary>
    public enum RecipientOneofCase {
      None = 0,
      PublicKeyHash = 1,
      Alias = 2,
    }
    private RecipientOneofCase recipientCase_ = RecipientOneofCase.None;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public RecipientOneofCase RecipientCase {
      get { return recipientCase_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void ClearRecipient() {
      recipientCase_ = RecipientOneofCase.None;
      recipient_ = null;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as Recipient);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(Recipient other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (PublicKeyHash != other.PublicKeyHash) return false;
      if (Alias != other.Alias) return false;
      if (RecipientCase != other.RecipientCase) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      if (recipientCase_ == RecipientOneofCase.PublicKeyHash) hash ^= PublicKeyHash.GetHashCode();
      if (recipientCase_ == RecipientOneofCase.Alias) hash ^= Alias.GetHashCode();
      hash ^= (int) recipientCase_;
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      if (recipientCase_ == RecipientOneofCase.PublicKeyHash) {
        output.WriteRawTag(10);
        output.WriteBytes(PublicKeyHash);
      }
      if (recipientCase_ == RecipientOneofCase.Alias) {
        output.WriteRawTag(18);
        output.WriteString(Alias);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (recipientCase_ == RecipientOneofCase.PublicKeyHash) {
        output.WriteRawTag(10);
        output.WriteBytes(PublicKeyHash);
      }
      if (recipientCase_ == RecipientOneofCase.Alias) {
        output.WriteRawTag(18);
        output.WriteString(Alias);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int CalculateSize() {
      int size = 0;
      if (recipientCase_ == RecipientOneofCase.PublicKeyHash) {
        size += 1 + pb::CodedOutputStream.ComputeBytesSize(PublicKeyHash);
      }
      if (recipientCase_ == RecipientOneofCase.Alias) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Alias);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(Recipient other) {
      if (other == null) {
        return;
      }
      switch (other.RecipientCase) {
        case RecipientOneofCase.PublicKeyHash:
          PublicKeyHash = other.PublicKeyHash;
          break;
        case RecipientOneofCase.Alias:
          Alias = other.Alias;
          break;
      }

      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            PublicKeyHash = input.ReadBytes();
            break;
          }
          case 18: {
            Alias = input.ReadString();
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 10: {
            PublicKeyHash = input.ReadBytes();
            break;
          }
          case 18: {
            Alias = input.ReadString();
            break;
          }
        }
      }
    }
    #endif

  }

  #endregion

}

#endregion Designer generated code

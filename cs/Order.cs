// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: vrp/order.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace VRP {

  /// <summary>Holder for reflection information generated from vrp/order.proto</summary>
  public static partial class OrderReflection {

    #region Descriptor
    /// <summary>File descriptor for vrp/order.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static OrderReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Cg92cnAvb3JkZXIucHJvdG8SA3ZycBoQdnJwL2Ftb3VudC5wcm90byI8CglB",
            "c3NldFBhaXISFwoPYW1vdW50X2Fzc2V0X2lkGAEgASgMEhYKDnByaWNlX2Fz",
            "c2V0X2lkGAIgASgMItEDCgVPcmRlchIQCghjaGFpbl9pZBgBIAEoAxIaChJt",
            "YXRjaGVyX3B1YmxpY19rZXkYAyABKAwSIgoKYXNzZXRfcGFpchgEIAEoCzIO",
            "LnZycC5Bc3NldFBhaXISIwoKb3JkZXJfc2lkZRgFIAEoDjIPLnZycC5PcmRl",
            "ci5TaWRlEg4KBmFtb3VudBgGIAEoAxINCgVwcmljZRgHIAEoAxIRCgl0aW1l",
            "c3RhbXAYCCABKAMSEgoKZXhwaXJhdGlvbhgJIAEoAxIgCgttYXRjaGVyX2Zl",
            "ZRgKIAEoCzILLnZycC5BbW91bnQSDwoHdmVyc2lvbhgLIAEoBRIOCgZwcm9v",
            "ZnMYDCADKAwSKAoKcHJpY2VfbW9kZRgOIAEoDjIULnZycC5PcmRlci5Qcmlj",
            "ZU1vZGUSGwoRc2VuZGVyX3B1YmxpY19rZXkYAiABKAxIABIaChBlaXA3MTJf",
            "c2lnbmF0dXJlGA0gASgMSAAiGQoEU2lkZRIHCgNCVVkQABIICgRTRUxMEAEi",
            "QAoJUHJpY2VNb2RlEgsKB0RFRkFVTFQQABISCg5GSVhFRF9ERUNJTUFMUxAB",
            "EhIKDkFTU0VUX0RFQ0lNQUxTEAJCCAoGc2VuZGVyQlIKFmNvbS52cnAucHJv",
            "dG9idWYub3JkZXJaMmdpdGh1Yi5jb20vZVZFU1RYQ09JTi9nb3ZycC9wa2cv",
            "Z3JwYy9nZW5lcmF0ZWQvdnJwqgIDVlJQYgZwcm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::VRP.AmountReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::VRP.AssetPair), global::VRP.AssetPair.Parser, new[]{ "AmountAssetId", "PriceAssetId" }, null, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::VRP.Order), global::VRP.Order.Parser, new[]{ "ChainId", "MatcherPublicKey", "AssetPair", "OrderSide", "Amount", "Price", "Timestamp", "Expiration", "MatcherFee", "Version", "Proofs", "PriceMode", "SenderPublicKey", "Eip712Signature" }, new[]{ "Sender" }, new[]{ typeof(global::VRP.Order.Types.Side), typeof(global::VRP.Order.Types.PriceMode) }, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class AssetPair : pb::IMessage<AssetPair> {
    private static readonly pb::MessageParser<AssetPair> _parser = new pb::MessageParser<AssetPair>(() => new AssetPair());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<AssetPair> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::VRP.OrderReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public AssetPair() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public AssetPair(AssetPair other) : this() {
      amountAssetId_ = other.amountAssetId_;
      priceAssetId_ = other.priceAssetId_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public AssetPair Clone() {
      return new AssetPair(this);
    }

    /// <summary>Field number for the "amount_asset_id" field.</summary>
    public const int AmountAssetIdFieldNumber = 1;
    private pb::ByteString amountAssetId_ = pb::ByteString.Empty;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pb::ByteString AmountAssetId {
      get { return amountAssetId_; }
      set {
        amountAssetId_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "price_asset_id" field.</summary>
    public const int PriceAssetIdFieldNumber = 2;
    private pb::ByteString priceAssetId_ = pb::ByteString.Empty;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pb::ByteString PriceAssetId {
      get { return priceAssetId_; }
      set {
        priceAssetId_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as AssetPair);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(AssetPair other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (AmountAssetId != other.AmountAssetId) return false;
      if (PriceAssetId != other.PriceAssetId) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (AmountAssetId.Length != 0) hash ^= AmountAssetId.GetHashCode();
      if (PriceAssetId.Length != 0) hash ^= PriceAssetId.GetHashCode();
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
      if (AmountAssetId.Length != 0) {
        output.WriteRawTag(10);
        output.WriteBytes(AmountAssetId);
      }
      if (PriceAssetId.Length != 0) {
        output.WriteRawTag(18);
        output.WriteBytes(PriceAssetId);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (AmountAssetId.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeBytesSize(AmountAssetId);
      }
      if (PriceAssetId.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeBytesSize(PriceAssetId);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(AssetPair other) {
      if (other == null) {
        return;
      }
      if (other.AmountAssetId.Length != 0) {
        AmountAssetId = other.AmountAssetId;
      }
      if (other.PriceAssetId.Length != 0) {
        PriceAssetId = other.PriceAssetId;
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
            AmountAssetId = input.ReadBytes();
            break;
          }
          case 18: {
            PriceAssetId = input.ReadBytes();
            break;
          }
        }
      }
    }

  }

  public sealed partial class Order : pb::IMessage<Order> {
    private static readonly pb::MessageParser<Order> _parser = new pb::MessageParser<Order>(() => new Order());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<Order> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::VRP.OrderReflection.Descriptor.MessageTypes[1]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Order() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Order(Order other) : this() {
      chainId_ = other.chainId_;
      matcherPublicKey_ = other.matcherPublicKey_;
      assetPair_ = other.assetPair_ != null ? other.assetPair_.Clone() : null;
      orderSide_ = other.orderSide_;
      amount_ = other.amount_;
      price_ = other.price_;
      timestamp_ = other.timestamp_;
      expiration_ = other.expiration_;
      matcherFee_ = other.matcherFee_ != null ? other.matcherFee_.Clone() : null;
      version_ = other.version_;
      proofs_ = other.proofs_.Clone();
      priceMode_ = other.priceMode_;
      switch (other.SenderCase) {
        case SenderOneofCase.SenderPublicKey:
          SenderPublicKey = other.SenderPublicKey;
          break;
        case SenderOneofCase.Eip712Signature:
          Eip712Signature = other.Eip712Signature;
          break;
      }

      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Order Clone() {
      return new Order(this);
    }

    /// <summary>Field number for the "chain_id" field.</summary>
    public const int ChainIdFieldNumber = 1;
    private long chainId_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public long ChainId {
      get { return chainId_; }
      set {
        chainId_ = value;
      }
    }

    /// <summary>Field number for the "matcher_public_key" field.</summary>
    public const int MatcherPublicKeyFieldNumber = 3;
    private pb::ByteString matcherPublicKey_ = pb::ByteString.Empty;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pb::ByteString MatcherPublicKey {
      get { return matcherPublicKey_; }
      set {
        matcherPublicKey_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "asset_pair" field.</summary>
    public const int AssetPairFieldNumber = 4;
    private global::VRP.AssetPair assetPair_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::VRP.AssetPair AssetPair {
      get { return assetPair_; }
      set {
        assetPair_ = value;
      }
    }

    /// <summary>Field number for the "order_side" field.</summary>
    public const int OrderSideFieldNumber = 5;
    private global::VRP.Order.Types.Side orderSide_ = global::VRP.Order.Types.Side.Buy;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::VRP.Order.Types.Side OrderSide {
      get { return orderSide_; }
      set {
        orderSide_ = value;
      }
    }

    /// <summary>Field number for the "amount" field.</summary>
    public const int AmountFieldNumber = 6;
    private long amount_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public long Amount {
      get { return amount_; }
      set {
        amount_ = value;
      }
    }

    /// <summary>Field number for the "price" field.</summary>
    public const int PriceFieldNumber = 7;
    private long price_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public long Price {
      get { return price_; }
      set {
        price_ = value;
      }
    }

    /// <summary>Field number for the "timestamp" field.</summary>
    public const int TimestampFieldNumber = 8;
    private long timestamp_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public long Timestamp {
      get { return timestamp_; }
      set {
        timestamp_ = value;
      }
    }

    /// <summary>Field number for the "expiration" field.</summary>
    public const int ExpirationFieldNumber = 9;
    private long expiration_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public long Expiration {
      get { return expiration_; }
      set {
        expiration_ = value;
      }
    }

    /// <summary>Field number for the "matcher_fee" field.</summary>
    public const int MatcherFeeFieldNumber = 10;
    private global::VRP.Amount matcherFee_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::VRP.Amount MatcherFee {
      get { return matcherFee_; }
      set {
        matcherFee_ = value;
      }
    }

    /// <summary>Field number for the "version" field.</summary>
    public const int VersionFieldNumber = 11;
    private int version_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int Version {
      get { return version_; }
      set {
        version_ = value;
      }
    }

    /// <summary>Field number for the "proofs" field.</summary>
    public const int ProofsFieldNumber = 12;
    private static readonly pb::FieldCodec<pb::ByteString> _repeated_proofs_codec
        = pb::FieldCodec.ForBytes(98);
    private readonly pbc::RepeatedField<pb::ByteString> proofs_ = new pbc::RepeatedField<pb::ByteString>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<pb::ByteString> Proofs {
      get { return proofs_; }
    }

    /// <summary>Field number for the "price_mode" field.</summary>
    public const int PriceModeFieldNumber = 14;
    private global::VRP.Order.Types.PriceMode priceMode_ = global::VRP.Order.Types.PriceMode.Default;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::VRP.Order.Types.PriceMode PriceMode {
      get { return priceMode_; }
      set {
        priceMode_ = value;
      }
    }

    /// <summary>Field number for the "sender_public_key" field.</summary>
    public const int SenderPublicKeyFieldNumber = 2;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pb::ByteString SenderPublicKey {
      get { return senderCase_ == SenderOneofCase.SenderPublicKey ? (pb::ByteString) sender_ : pb::ByteString.Empty; }
      set {
        sender_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
        senderCase_ = SenderOneofCase.SenderPublicKey;
      }
    }

    /// <summary>Field number for the "eip712_signature" field.</summary>
    public const int Eip712SignatureFieldNumber = 13;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pb::ByteString Eip712Signature {
      get { return senderCase_ == SenderOneofCase.Eip712Signature ? (pb::ByteString) sender_ : pb::ByteString.Empty; }
      set {
        sender_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
        senderCase_ = SenderOneofCase.Eip712Signature;
      }
    }

    private object sender_;
    /// <summary>Enum of possible cases for the "sender" oneof.</summary>
    public enum SenderOneofCase {
      None = 0,
      SenderPublicKey = 2,
      Eip712Signature = 13,
    }
    private SenderOneofCase senderCase_ = SenderOneofCase.None;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public SenderOneofCase SenderCase {
      get { return senderCase_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void ClearSender() {
      senderCase_ = SenderOneofCase.None;
      sender_ = null;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as Order);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(Order other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (ChainId != other.ChainId) return false;
      if (MatcherPublicKey != other.MatcherPublicKey) return false;
      if (!object.Equals(AssetPair, other.AssetPair)) return false;
      if (OrderSide != other.OrderSide) return false;
      if (Amount != other.Amount) return false;
      if (Price != other.Price) return false;
      if (Timestamp != other.Timestamp) return false;
      if (Expiration != other.Expiration) return false;
      if (!object.Equals(MatcherFee, other.MatcherFee)) return false;
      if (Version != other.Version) return false;
      if(!proofs_.Equals(other.proofs_)) return false;
      if (PriceMode != other.PriceMode) return false;
      if (SenderPublicKey != other.SenderPublicKey) return false;
      if (Eip712Signature != other.Eip712Signature) return false;
      if (SenderCase != other.SenderCase) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (ChainId != 0L) hash ^= ChainId.GetHashCode();
      if (MatcherPublicKey.Length != 0) hash ^= MatcherPublicKey.GetHashCode();
      if (assetPair_ != null) hash ^= AssetPair.GetHashCode();
      if (OrderSide != global::VRP.Order.Types.Side.Buy) hash ^= OrderSide.GetHashCode();
      if (Amount != 0L) hash ^= Amount.GetHashCode();
      if (Price != 0L) hash ^= Price.GetHashCode();
      if (Timestamp != 0L) hash ^= Timestamp.GetHashCode();
      if (Expiration != 0L) hash ^= Expiration.GetHashCode();
      if (matcherFee_ != null) hash ^= MatcherFee.GetHashCode();
      if (Version != 0) hash ^= Version.GetHashCode();
      hash ^= proofs_.GetHashCode();
      if (PriceMode != global::VRP.Order.Types.PriceMode.Default) hash ^= PriceMode.GetHashCode();
      if (senderCase_ == SenderOneofCase.SenderPublicKey) hash ^= SenderPublicKey.GetHashCode();
      if (senderCase_ == SenderOneofCase.Eip712Signature) hash ^= Eip712Signature.GetHashCode();
      hash ^= (int) senderCase_;
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
      if (ChainId != 0L) {
        output.WriteRawTag(8);
        output.WriteInt64(ChainId);
      }
      if (senderCase_ == SenderOneofCase.SenderPublicKey) {
        output.WriteRawTag(18);
        output.WriteBytes(SenderPublicKey);
      }
      if (MatcherPublicKey.Length != 0) {
        output.WriteRawTag(26);
        output.WriteBytes(MatcherPublicKey);
      }
      if (assetPair_ != null) {
        output.WriteRawTag(34);
        output.WriteMessage(AssetPair);
      }
      if (OrderSide != global::VRP.Order.Types.Side.Buy) {
        output.WriteRawTag(40);
        output.WriteEnum((int) OrderSide);
      }
      if (Amount != 0L) {
        output.WriteRawTag(48);
        output.WriteInt64(Amount);
      }
      if (Price != 0L) {
        output.WriteRawTag(56);
        output.WriteInt64(Price);
      }
      if (Timestamp != 0L) {
        output.WriteRawTag(64);
        output.WriteInt64(Timestamp);
      }
      if (Expiration != 0L) {
        output.WriteRawTag(72);
        output.WriteInt64(Expiration);
      }
      if (matcherFee_ != null) {
        output.WriteRawTag(82);
        output.WriteMessage(MatcherFee);
      }
      if (Version != 0) {
        output.WriteRawTag(88);
        output.WriteInt32(Version);
      }
      proofs_.WriteTo(output, _repeated_proofs_codec);
      if (senderCase_ == SenderOneofCase.Eip712Signature) {
        output.WriteRawTag(106);
        output.WriteBytes(Eip712Signature);
      }
      if (PriceMode != global::VRP.Order.Types.PriceMode.Default) {
        output.WriteRawTag(112);
        output.WriteEnum((int) PriceMode);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (ChainId != 0L) {
        size += 1 + pb::CodedOutputStream.ComputeInt64Size(ChainId);
      }
      if (MatcherPublicKey.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeBytesSize(MatcherPublicKey);
      }
      if (assetPair_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(AssetPair);
      }
      if (OrderSide != global::VRP.Order.Types.Side.Buy) {
        size += 1 + pb::CodedOutputStream.ComputeEnumSize((int) OrderSide);
      }
      if (Amount != 0L) {
        size += 1 + pb::CodedOutputStream.ComputeInt64Size(Amount);
      }
      if (Price != 0L) {
        size += 1 + pb::CodedOutputStream.ComputeInt64Size(Price);
      }
      if (Timestamp != 0L) {
        size += 1 + pb::CodedOutputStream.ComputeInt64Size(Timestamp);
      }
      if (Expiration != 0L) {
        size += 1 + pb::CodedOutputStream.ComputeInt64Size(Expiration);
      }
      if (matcherFee_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(MatcherFee);
      }
      if (Version != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(Version);
      }
      size += proofs_.CalculateSize(_repeated_proofs_codec);
      if (PriceMode != global::VRP.Order.Types.PriceMode.Default) {
        size += 1 + pb::CodedOutputStream.ComputeEnumSize((int) PriceMode);
      }
      if (senderCase_ == SenderOneofCase.SenderPublicKey) {
        size += 1 + pb::CodedOutputStream.ComputeBytesSize(SenderPublicKey);
      }
      if (senderCase_ == SenderOneofCase.Eip712Signature) {
        size += 1 + pb::CodedOutputStream.ComputeBytesSize(Eip712Signature);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(Order other) {
      if (other == null) {
        return;
      }
      if (other.ChainId != 0L) {
        ChainId = other.ChainId;
      }
      if (other.MatcherPublicKey.Length != 0) {
        MatcherPublicKey = other.MatcherPublicKey;
      }
      if (other.assetPair_ != null) {
        if (assetPair_ == null) {
          AssetPair = new global::VRP.AssetPair();
        }
        AssetPair.MergeFrom(other.AssetPair);
      }
      if (other.OrderSide != global::VRP.Order.Types.Side.Buy) {
        OrderSide = other.OrderSide;
      }
      if (other.Amount != 0L) {
        Amount = other.Amount;
      }
      if (other.Price != 0L) {
        Price = other.Price;
      }
      if (other.Timestamp != 0L) {
        Timestamp = other.Timestamp;
      }
      if (other.Expiration != 0L) {
        Expiration = other.Expiration;
      }
      if (other.matcherFee_ != null) {
        if (matcherFee_ == null) {
          MatcherFee = new global::VRP.Amount();
        }
        MatcherFee.MergeFrom(other.MatcherFee);
      }
      if (other.Version != 0) {
        Version = other.Version;
      }
      proofs_.Add(other.proofs_);
      if (other.PriceMode != global::VRP.Order.Types.PriceMode.Default) {
        PriceMode = other.PriceMode;
      }
      switch (other.SenderCase) {
        case SenderOneofCase.SenderPublicKey:
          SenderPublicKey = other.SenderPublicKey;
          break;
        case SenderOneofCase.Eip712Signature:
          Eip712Signature = other.Eip712Signature;
          break;
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
          case 8: {
            ChainId = input.ReadInt64();
            break;
          }
          case 18: {
            SenderPublicKey = input.ReadBytes();
            break;
          }
          case 26: {
            MatcherPublicKey = input.ReadBytes();
            break;
          }
          case 34: {
            if (assetPair_ == null) {
              AssetPair = new global::VRP.AssetPair();
            }
            input.ReadMessage(AssetPair);
            break;
          }
          case 40: {
            OrderSide = (global::VRP.Order.Types.Side) input.ReadEnum();
            break;
          }
          case 48: {
            Amount = input.ReadInt64();
            break;
          }
          case 56: {
            Price = input.ReadInt64();
            break;
          }
          case 64: {
            Timestamp = input.ReadInt64();
            break;
          }
          case 72: {
            Expiration = input.ReadInt64();
            break;
          }
          case 82: {
            if (matcherFee_ == null) {
              MatcherFee = new global::VRP.Amount();
            }
            input.ReadMessage(MatcherFee);
            break;
          }
          case 88: {
            Version = input.ReadInt32();
            break;
          }
          case 98: {
            proofs_.AddEntriesFrom(input, _repeated_proofs_codec);
            break;
          }
          case 106: {
            Eip712Signature = input.ReadBytes();
            break;
          }
          case 112: {
            PriceMode = (global::VRP.Order.Types.PriceMode) input.ReadEnum();
            break;
          }
        }
      }
    }

    #region Nested types
    /// <summary>Container for nested types declared in the Order message type.</summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static partial class Types {
      public enum Side {
        [pbr::OriginalName("BUY")] Buy = 0,
        [pbr::OriginalName("SELL")] Sell = 1,
      }

      public enum PriceMode {
        [pbr::OriginalName("DEFAULT")] Default = 0,
        [pbr::OriginalName("FIXED_DECIMALS")] FixedDecimals = 1,
        [pbr::OriginalName("ASSET_DECIMALS")] AssetDecimals = 2,
      }

    }
    #endregion

  }

  #endregion

}

#endregion Designer generated code
// DO NOT EDIT.
// swift-format-ignore-file
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: vrp/recipient.proto
//
// For information on using the generated types, please see the documentation:
//   https://github.com/apple/swift-protobuf/

import Foundation
import SwiftProtobuf

// If the compiler emits an error on this type, it is because this file
// was generated by a version of the `protoc` Swift plug-in that is
// incompatible with the version of SwiftProtobuf to which you are linking.
// Please ensure that you are building against the same version of the API
// that was used to generate this file.
fileprivate struct _GeneratedWithProtocGenSwiftVersion: SwiftProtobuf.ProtobufAPIVersionCheck {
  struct _2: SwiftProtobuf.ProtobufAPIVersion_2 {}
  typealias Version = _2
}

struct Vrp_Recipient {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  var recipient: Vrp_Recipient.OneOf_Recipient? = nil

  /// First 20 bytes of the result of the Keccak256(Blake2b256(publicKey)) hashing function.
  var publicKeyHash: Data {
    get {
      if case .publicKeyHash(let v)? = recipient {return v}
      return Data()
    }
    set {recipient = .publicKeyHash(newValue)}
  }

  var alias: String {
    get {
      if case .alias(let v)? = recipient {return v}
      return String()
    }
    set {recipient = .alias(newValue)}
  }

  var unknownFields = SwiftProtobuf.UnknownStorage()

  enum OneOf_Recipient: Equatable {
    /// First 20 bytes of the result of the Keccak256(Blake2b256(publicKey)) hashing function.
    case publicKeyHash(Data)
    case alias(String)

  #if !swift(>=4.1)
    static func ==(lhs: Vrp_Recipient.OneOf_Recipient, rhs: Vrp_Recipient.OneOf_Recipient) -> Bool {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch (lhs, rhs) {
      case (.publicKeyHash, .publicKeyHash): return {
        guard case .publicKeyHash(let l) = lhs, case .publicKeyHash(let r) = rhs else { preconditionFailure() }
        return l == r
      }()
      case (.alias, .alias): return {
        guard case .alias(let l) = lhs, case .alias(let r) = rhs else { preconditionFailure() }
        return l == r
      }()
      default: return false
      }
    }
  #endif
  }

  init() {}
}

#if swift(>=5.5) && canImport(_Concurrency)
extension Vrp_Recipient: @unchecked Sendable {}
extension Vrp_Recipient.OneOf_Recipient: @unchecked Sendable {}
#endif  // swift(>=5.5) && canImport(_Concurrency)

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "vrp"

extension Vrp_Recipient: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let protoMessageName: String = _protobuf_package + ".Recipient"
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "public_key_hash"),
    2: .same(proto: "alias"),
  ]

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try {
        var v: Data?
        try decoder.decodeSingularBytesField(value: &v)
        if let v = v {
          if self.recipient != nil {try decoder.handleConflictingOneOf()}
          self.recipient = .publicKeyHash(v)
        }
      }()
      case 2: try {
        var v: String?
        try decoder.decodeSingularStringField(value: &v)
        if let v = v {
          if self.recipient != nil {try decoder.handleConflictingOneOf()}
          self.recipient = .alias(v)
        }
      }()
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    // The use of inline closures is to circumvent an issue where the compiler
    // allocates stack space for every if/case branch local when no optimizations
    // are enabled. https://github.com/apple/swift-protobuf/issues/1034 and
    // https://github.com/apple/swift-protobuf/issues/1182
    switch self.recipient {
    case .publicKeyHash?: try {
      guard case .publicKeyHash(let v)? = self.recipient else { preconditionFailure() }
      try visitor.visitSingularBytesField(value: v, fieldNumber: 1)
    }()
    case .alias?: try {
      guard case .alias(let v)? = self.recipient else { preconditionFailure() }
      try visitor.visitSingularStringField(value: v, fieldNumber: 2)
    }()
    case nil: break
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  static func ==(lhs: Vrp_Recipient, rhs: Vrp_Recipient) -> Bool {
    if lhs.recipient != rhs.recipient {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

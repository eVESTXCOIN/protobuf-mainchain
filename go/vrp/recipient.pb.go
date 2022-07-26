// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.12.4
// source: vrp/recipient.proto

package vrp

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Recipient struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Types that are assignable to Recipient:
	//	*Recipient_PublicKeyHash
	//	*Recipient_Alias
	Recipient isRecipient_Recipient `protobuf_oneof:"recipient"`
}

func (x *Recipient) Reset() {
	*x = Recipient{}
	if protoimpl.UnsafeEnabled {
		mi := &file_vrp_recipient_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Recipient) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Recipient) ProtoMessage() {}

func (x *Recipient) ProtoReflect() protoreflect.Message {
	mi := &file_vrp_recipient_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Recipient.ProtoReflect.Descriptor instead.
func (*Recipient) Descriptor() ([]byte, []int) {
	return file_vrp_recipient_proto_rawDescGZIP(), []int{0}
}

func (m *Recipient) GetRecipient() isRecipient_Recipient {
	if m != nil {
		return m.Recipient
	}
	return nil
}

func (x *Recipient) GetPublicKeyHash() []byte {
	if x, ok := x.GetRecipient().(*Recipient_PublicKeyHash); ok {
		return x.PublicKeyHash
	}
	return nil
}

func (x *Recipient) GetAlias() string {
	if x, ok := x.GetRecipient().(*Recipient_Alias); ok {
		return x.Alias
	}
	return ""
}

type isRecipient_Recipient interface {
	isRecipient_Recipient()
}

type Recipient_PublicKeyHash struct {
	// First 20 bytes of the result of the Keccak256(Blake2b256(publicKey)) hashing function.
	PublicKeyHash []byte `protobuf:"bytes,1,opt,name=public_key_hash,json=publicKeyHash,proto3,oneof"`
}

type Recipient_Alias struct {
	Alias string `protobuf:"bytes,2,opt,name=alias,proto3,oneof"`
}

func (*Recipient_PublicKeyHash) isRecipient_Recipient() {}

func (*Recipient_Alias) isRecipient_Recipient() {}

var File_vrp_recipient_proto protoreflect.FileDescriptor

var file_vrp_recipient_proto_rawDesc = []byte{
	0x0a, 0x13, 0x76, 0x72, 0x70, 0x2f, 0x72, 0x65, 0x63, 0x69, 0x70, 0x69, 0x65, 0x6e, 0x74, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x03, 0x76, 0x72, 0x70, 0x22, 0x5a, 0x0a, 0x09, 0x52, 0x65,
	0x63, 0x69, 0x70, 0x69, 0x65, 0x6e, 0x74, 0x12, 0x28, 0x0a, 0x0f, 0x70, 0x75, 0x62, 0x6c, 0x69,
	0x63, 0x5f, 0x6b, 0x65, 0x79, 0x5f, 0x68, 0x61, 0x73, 0x68, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0c,
	0x48, 0x00, 0x52, 0x0d, 0x70, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x4b, 0x65, 0x79, 0x48, 0x61, 0x73,
	0x68, 0x12, 0x16, 0x0a, 0x05, 0x61, 0x6c, 0x69, 0x61, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x48, 0x00, 0x52, 0x05, 0x61, 0x6c, 0x69, 0x61, 0x73, 0x42, 0x0b, 0x0a, 0x09, 0x72, 0x65, 0x63,
	0x69, 0x70, 0x69, 0x65, 0x6e, 0x74, 0x42, 0x54, 0x0a, 0x1c, 0x63, 0x6f, 0x6d, 0x2e, 0x76, 0x72,
	0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x74, 0x72, 0x61, 0x6e, 0x73,
	0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x5a, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x65, 0x56, 0x45, 0x53, 0x54, 0x58, 0x43, 0x4f, 0x49, 0x4e, 0x2f, 0x67, 0x6f,
	0x76, 0x72, 0x70, 0x2f, 0x67, 0x72, 0x70, 0x63, 0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74,
	0x65, 0x64, 0x2f, 0x76, 0x72, 0x70, 0xaa, 0x02, 0x03, 0x56, 0x52, 0x50, 0x62, 0x06, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_vrp_recipient_proto_rawDescOnce sync.Once
	file_vrp_recipient_proto_rawDescData = file_vrp_recipient_proto_rawDesc
)

func file_vrp_recipient_proto_rawDescGZIP() []byte {
	file_vrp_recipient_proto_rawDescOnce.Do(func() {
		file_vrp_recipient_proto_rawDescData = protoimpl.X.CompressGZIP(file_vrp_recipient_proto_rawDescData)
	})
	return file_vrp_recipient_proto_rawDescData
}

var file_vrp_recipient_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_vrp_recipient_proto_goTypes = []interface{}{
	(*Recipient)(nil), // 0: vrp.Recipient
}
var file_vrp_recipient_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_vrp_recipient_proto_init() }
func file_vrp_recipient_proto_init() {
	if File_vrp_recipient_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_vrp_recipient_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Recipient); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	file_vrp_recipient_proto_msgTypes[0].OneofWrappers = []interface{}{
		(*Recipient_PublicKeyHash)(nil),
		(*Recipient_Alias)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_vrp_recipient_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_vrp_recipient_proto_goTypes,
		DependencyIndexes: file_vrp_recipient_proto_depIdxs,
		MessageInfos:      file_vrp_recipient_proto_msgTypes,
	}.Build()
	File_vrp_recipient_proto = out.File
	file_vrp_recipient_proto_rawDesc = nil
	file_vrp_recipient_proto_goTypes = nil
	file_vrp_recipient_proto_depIdxs = nil
}

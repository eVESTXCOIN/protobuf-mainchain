// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.12.4
// source: vrp/node/grpc/blocks_api.proto

package grpc

import (
	vrp "github.com/eVESTXCOIN/govrp/grpc/generated/vrp"
	empty "github.com/golang/protobuf/ptypes/empty"
	wrappers "github.com/golang/protobuf/ptypes/wrappers"
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

type BlockRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Types that are assignable to Request:
	//	*BlockRequest_BlockId
	//	*BlockRequest_Height
	//	*BlockRequest_Reference
	Request             isBlockRequest_Request `protobuf_oneof:"request"`
	IncludeTransactions bool                   `protobuf:"varint,1000,opt,name=include_transactions,json=includeTransactions,proto3" json:"include_transactions,omitempty"`
}

func (x *BlockRequest) Reset() {
	*x = BlockRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_vrp_node_grpc_blocks_api_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BlockRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BlockRequest) ProtoMessage() {}

func (x *BlockRequest) ProtoReflect() protoreflect.Message {
	mi := &file_vrp_node_grpc_blocks_api_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BlockRequest.ProtoReflect.Descriptor instead.
func (*BlockRequest) Descriptor() ([]byte, []int) {
	return file_vrp_node_grpc_blocks_api_proto_rawDescGZIP(), []int{0}
}

func (m *BlockRequest) GetRequest() isBlockRequest_Request {
	if m != nil {
		return m.Request
	}
	return nil
}

func (x *BlockRequest) GetBlockId() []byte {
	if x, ok := x.GetRequest().(*BlockRequest_BlockId); ok {
		return x.BlockId
	}
	return nil
}

func (x *BlockRequest) GetHeight() int32 {
	if x, ok := x.GetRequest().(*BlockRequest_Height); ok {
		return x.Height
	}
	return 0
}

func (x *BlockRequest) GetReference() []byte {
	if x, ok := x.GetRequest().(*BlockRequest_Reference); ok {
		return x.Reference
	}
	return nil
}

func (x *BlockRequest) GetIncludeTransactions() bool {
	if x != nil {
		return x.IncludeTransactions
	}
	return false
}

type isBlockRequest_Request interface {
	isBlockRequest_Request()
}

type BlockRequest_BlockId struct {
	BlockId []byte `protobuf:"bytes,1,opt,name=block_id,json=blockId,proto3,oneof"`
}

type BlockRequest_Height struct {
	Height int32 `protobuf:"varint,2,opt,name=height,proto3,oneof"`
}

type BlockRequest_Reference struct {
	Reference []byte `protobuf:"bytes,3,opt,name=reference,proto3,oneof"`
}

func (*BlockRequest_BlockId) isBlockRequest_Request() {}

func (*BlockRequest_Height) isBlockRequest_Request() {}

func (*BlockRequest_Reference) isBlockRequest_Request() {}

type BlockRangeRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	FromHeight uint32 `protobuf:"varint,1,opt,name=from_height,json=fromHeight,proto3" json:"from_height,omitempty"`
	ToHeight   uint32 `protobuf:"varint,2,opt,name=to_height,json=toHeight,proto3" json:"to_height,omitempty"`
	// Types that are assignable to Filter:
	//	*BlockRangeRequest_GeneratorPublicKey
	//	*BlockRangeRequest_GeneratorAddress
	Filter              isBlockRangeRequest_Filter `protobuf_oneof:"filter"`
	IncludeTransactions bool                       `protobuf:"varint,1000,opt,name=include_transactions,json=includeTransactions,proto3" json:"include_transactions,omitempty"`
}

func (x *BlockRangeRequest) Reset() {
	*x = BlockRangeRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_vrp_node_grpc_blocks_api_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BlockRangeRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BlockRangeRequest) ProtoMessage() {}

func (x *BlockRangeRequest) ProtoReflect() protoreflect.Message {
	mi := &file_vrp_node_grpc_blocks_api_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BlockRangeRequest.ProtoReflect.Descriptor instead.
func (*BlockRangeRequest) Descriptor() ([]byte, []int) {
	return file_vrp_node_grpc_blocks_api_proto_rawDescGZIP(), []int{1}
}

func (x *BlockRangeRequest) GetFromHeight() uint32 {
	if x != nil {
		return x.FromHeight
	}
	return 0
}

func (x *BlockRangeRequest) GetToHeight() uint32 {
	if x != nil {
		return x.ToHeight
	}
	return 0
}

func (m *BlockRangeRequest) GetFilter() isBlockRangeRequest_Filter {
	if m != nil {
		return m.Filter
	}
	return nil
}

func (x *BlockRangeRequest) GetGeneratorPublicKey() []byte {
	if x, ok := x.GetFilter().(*BlockRangeRequest_GeneratorPublicKey); ok {
		return x.GeneratorPublicKey
	}
	return nil
}

func (x *BlockRangeRequest) GetGeneratorAddress() []byte {
	if x, ok := x.GetFilter().(*BlockRangeRequest_GeneratorAddress); ok {
		return x.GeneratorAddress
	}
	return nil
}

func (x *BlockRangeRequest) GetIncludeTransactions() bool {
	if x != nil {
		return x.IncludeTransactions
	}
	return false
}

type isBlockRangeRequest_Filter interface {
	isBlockRangeRequest_Filter()
}

type BlockRangeRequest_GeneratorPublicKey struct {
	GeneratorPublicKey []byte `protobuf:"bytes,3,opt,name=generator_public_key,json=generatorPublicKey,proto3,oneof"`
}

type BlockRangeRequest_GeneratorAddress struct {
	GeneratorAddress []byte `protobuf:"bytes,4,opt,name=generator_address,json=generatorAddress,proto3,oneof"`
}

func (*BlockRangeRequest_GeneratorPublicKey) isBlockRangeRequest_Filter() {}

func (*BlockRangeRequest_GeneratorAddress) isBlockRangeRequest_Filter() {}

type BlockWithHeight struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Block  *vrp.Block `protobuf:"bytes,1,opt,name=block,proto3" json:"block,omitempty"`
	Height uint32     `protobuf:"varint,2,opt,name=height,proto3" json:"height,omitempty"`
}

func (x *BlockWithHeight) Reset() {
	*x = BlockWithHeight{}
	if protoimpl.UnsafeEnabled {
		mi := &file_vrp_node_grpc_blocks_api_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BlockWithHeight) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BlockWithHeight) ProtoMessage() {}

func (x *BlockWithHeight) ProtoReflect() protoreflect.Message {
	mi := &file_vrp_node_grpc_blocks_api_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BlockWithHeight.ProtoReflect.Descriptor instead.
func (*BlockWithHeight) Descriptor() ([]byte, []int) {
	return file_vrp_node_grpc_blocks_api_proto_rawDescGZIP(), []int{2}
}

func (x *BlockWithHeight) GetBlock() *vrp.Block {
	if x != nil {
		return x.Block
	}
	return nil
}

func (x *BlockWithHeight) GetHeight() uint32 {
	if x != nil {
		return x.Height
	}
	return 0
}

var File_vrp_node_grpc_blocks_api_proto protoreflect.FileDescriptor

var file_vrp_node_grpc_blocks_api_proto_rawDesc = []byte{
	0x0a, 0x1e, 0x76, 0x72, 0x70, 0x2f, 0x6e, 0x6f, 0x64, 0x65, 0x2f, 0x67, 0x72, 0x70, 0x63, 0x2f,
	0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x73, 0x5f, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x0d, 0x76, 0x72, 0x70, 0x2e, 0x6e, 0x6f, 0x64, 0x65, 0x2e, 0x67, 0x72, 0x70, 0x63, 0x1a,
	0x0f, 0x76, 0x72, 0x70, 0x2f, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x1a, 0x1b, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2f, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1e, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x77,
	0x72, 0x61, 0x70, 0x70, 0x65, 0x72, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xa4, 0x01,
	0x0a, 0x0c, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b,
	0x0a, 0x08, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0c,
	0x48, 0x00, 0x52, 0x07, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x49, 0x64, 0x12, 0x18, 0x0a, 0x06, 0x68,
	0x65, 0x69, 0x67, 0x68, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x48, 0x00, 0x52, 0x06, 0x68,
	0x65, 0x69, 0x67, 0x68, 0x74, 0x12, 0x1e, 0x0a, 0x09, 0x72, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e,
	0x63, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0c, 0x48, 0x00, 0x52, 0x09, 0x72, 0x65, 0x66, 0x65,
	0x72, 0x65, 0x6e, 0x63, 0x65, 0x12, 0x32, 0x0a, 0x14, 0x69, 0x6e, 0x63, 0x6c, 0x75, 0x64, 0x65,
	0x5f, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0xe8, 0x07,
	0x20, 0x01, 0x28, 0x08, 0x52, 0x13, 0x69, 0x6e, 0x63, 0x6c, 0x75, 0x64, 0x65, 0x54, 0x72, 0x61,
	0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x42, 0x09, 0x0a, 0x07, 0x72, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x22, 0xf2, 0x01, 0x0a, 0x11, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x52, 0x61,
	0x6e, 0x67, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1f, 0x0a, 0x0b, 0x66, 0x72,
	0x6f, 0x6d, 0x5f, 0x68, 0x65, 0x69, 0x67, 0x68, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52,
	0x0a, 0x66, 0x72, 0x6f, 0x6d, 0x48, 0x65, 0x69, 0x67, 0x68, 0x74, 0x12, 0x1b, 0x0a, 0x09, 0x74,
	0x6f, 0x5f, 0x68, 0x65, 0x69, 0x67, 0x68, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x08,
	0x74, 0x6f, 0x48, 0x65, 0x69, 0x67, 0x68, 0x74, 0x12, 0x32, 0x0a, 0x14, 0x67, 0x65, 0x6e, 0x65,
	0x72, 0x61, 0x74, 0x6f, 0x72, 0x5f, 0x70, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x5f, 0x6b, 0x65, 0x79,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x0c, 0x48, 0x00, 0x52, 0x12, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61,
	0x74, 0x6f, 0x72, 0x50, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x4b, 0x65, 0x79, 0x12, 0x2d, 0x0a, 0x11,
	0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x6f, 0x72, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73,
	0x73, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0c, 0x48, 0x00, 0x52, 0x10, 0x67, 0x65, 0x6e, 0x65, 0x72,
	0x61, 0x74, 0x6f, 0x72, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x32, 0x0a, 0x14, 0x69,
	0x6e, 0x63, 0x6c, 0x75, 0x64, 0x65, 0x5f, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69,
	0x6f, 0x6e, 0x73, 0x18, 0xe8, 0x07, 0x20, 0x01, 0x28, 0x08, 0x52, 0x13, 0x69, 0x6e, 0x63, 0x6c,
	0x75, 0x64, 0x65, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x42,
	0x08, 0x0a, 0x06, 0x66, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x22, 0x4b, 0x0a, 0x0f, 0x42, 0x6c, 0x6f,
	0x63, 0x6b, 0x57, 0x69, 0x74, 0x68, 0x48, 0x65, 0x69, 0x67, 0x68, 0x74, 0x12, 0x20, 0x0a, 0x05,
	0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0a, 0x2e, 0x76, 0x72,
	0x70, 0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x52, 0x05, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x12, 0x16,
	0x0a, 0x06, 0x68, 0x65, 0x69, 0x67, 0x68, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x06,
	0x68, 0x65, 0x69, 0x67, 0x68, 0x74, 0x32, 0xf3, 0x01, 0x0a, 0x09, 0x42, 0x6c, 0x6f, 0x63, 0x6b,
	0x73, 0x41, 0x70, 0x69, 0x12, 0x47, 0x0a, 0x08, 0x47, 0x65, 0x74, 0x42, 0x6c, 0x6f, 0x63, 0x6b,
	0x12, 0x1b, 0x2e, 0x76, 0x72, 0x70, 0x2e, 0x6e, 0x6f, 0x64, 0x65, 0x2e, 0x67, 0x72, 0x70, 0x63,
	0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1e, 0x2e,
	0x76, 0x72, 0x70, 0x2e, 0x6e, 0x6f, 0x64, 0x65, 0x2e, 0x67, 0x72, 0x70, 0x63, 0x2e, 0x42, 0x6c,
	0x6f, 0x63, 0x6b, 0x57, 0x69, 0x74, 0x68, 0x48, 0x65, 0x69, 0x67, 0x68, 0x74, 0x12, 0x53, 0x0a,
	0x0d, 0x47, 0x65, 0x74, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x52, 0x61, 0x6e, 0x67, 0x65, 0x12, 0x20,
	0x2e, 0x76, 0x72, 0x70, 0x2e, 0x6e, 0x6f, 0x64, 0x65, 0x2e, 0x67, 0x72, 0x70, 0x63, 0x2e, 0x42,
	0x6c, 0x6f, 0x63, 0x6b, 0x52, 0x61, 0x6e, 0x67, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x1e, 0x2e, 0x76, 0x72, 0x70, 0x2e, 0x6e, 0x6f, 0x64, 0x65, 0x2e, 0x67, 0x72, 0x70, 0x63,
	0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x57, 0x69, 0x74, 0x68, 0x48, 0x65, 0x69, 0x67, 0x68, 0x74,
	0x30, 0x01, 0x12, 0x48, 0x0a, 0x10, 0x47, 0x65, 0x74, 0x43, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x74,
	0x48, 0x65, 0x69, 0x67, 0x68, 0x74, 0x12, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x1a, 0x1c,
	0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x55, 0x49, 0x6e, 0x74, 0x33, 0x32, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x42, 0x5c, 0x0a, 0x10,
	0x63, 0x6f, 0x6d, 0x2e, 0x76, 0x72, 0x70, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x72, 0x70, 0x63,
	0x5a, 0x38, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x65, 0x56, 0x45,
	0x53, 0x54, 0x58, 0x43, 0x4f, 0x49, 0x4e, 0x2f, 0x67, 0x6f, 0x76, 0x72, 0x70, 0x2f, 0x67, 0x72,
	0x70, 0x63, 0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x64, 0x2f, 0x76, 0x72, 0x70,
	0x2f, 0x6e, 0x6f, 0x64, 0x65, 0x2f, 0x67, 0x72, 0x70, 0x63, 0xaa, 0x02, 0x0d, 0x56, 0x52, 0x50,
	0x2e, 0x4e, 0x6f, 0x64, 0x65, 0x2e, 0x47, 0x72, 0x70, 0x63, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_vrp_node_grpc_blocks_api_proto_rawDescOnce sync.Once
	file_vrp_node_grpc_blocks_api_proto_rawDescData = file_vrp_node_grpc_blocks_api_proto_rawDesc
)

func file_vrp_node_grpc_blocks_api_proto_rawDescGZIP() []byte {
	file_vrp_node_grpc_blocks_api_proto_rawDescOnce.Do(func() {
		file_vrp_node_grpc_blocks_api_proto_rawDescData = protoimpl.X.CompressGZIP(file_vrp_node_grpc_blocks_api_proto_rawDescData)
	})
	return file_vrp_node_grpc_blocks_api_proto_rawDescData
}

var file_vrp_node_grpc_blocks_api_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_vrp_node_grpc_blocks_api_proto_goTypes = []interface{}{
	(*BlockRequest)(nil),         // 0: vrp.node.grpc.BlockRequest
	(*BlockRangeRequest)(nil),    // 1: vrp.node.grpc.BlockRangeRequest
	(*BlockWithHeight)(nil),      // 2: vrp.node.grpc.BlockWithHeight
	(*vrp.Block)(nil),            // 3: vrp.Block
	(*empty.Empty)(nil),          // 4: google.protobuf.Empty
	(*wrappers.UInt32Value)(nil), // 5: google.protobuf.UInt32Value
}
var file_vrp_node_grpc_blocks_api_proto_depIdxs = []int32{
	3, // 0: vrp.node.grpc.BlockWithHeight.block:type_name -> vrp.Block
	0, // 1: vrp.node.grpc.BlocksApi.GetBlock:input_type -> vrp.node.grpc.BlockRequest
	1, // 2: vrp.node.grpc.BlocksApi.GetBlockRange:input_type -> vrp.node.grpc.BlockRangeRequest
	4, // 3: vrp.node.grpc.BlocksApi.GetCurrentHeight:input_type -> google.protobuf.Empty
	2, // 4: vrp.node.grpc.BlocksApi.GetBlock:output_type -> vrp.node.grpc.BlockWithHeight
	2, // 5: vrp.node.grpc.BlocksApi.GetBlockRange:output_type -> vrp.node.grpc.BlockWithHeight
	5, // 6: vrp.node.grpc.BlocksApi.GetCurrentHeight:output_type -> google.protobuf.UInt32Value
	4, // [4:7] is the sub-list for method output_type
	1, // [1:4] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_vrp_node_grpc_blocks_api_proto_init() }
func file_vrp_node_grpc_blocks_api_proto_init() {
	if File_vrp_node_grpc_blocks_api_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_vrp_node_grpc_blocks_api_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BlockRequest); i {
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
		file_vrp_node_grpc_blocks_api_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BlockRangeRequest); i {
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
		file_vrp_node_grpc_blocks_api_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BlockWithHeight); i {
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
	file_vrp_node_grpc_blocks_api_proto_msgTypes[0].OneofWrappers = []interface{}{
		(*BlockRequest_BlockId)(nil),
		(*BlockRequest_Height)(nil),
		(*BlockRequest_Reference)(nil),
	}
	file_vrp_node_grpc_blocks_api_proto_msgTypes[1].OneofWrappers = []interface{}{
		(*BlockRangeRequest_GeneratorPublicKey)(nil),
		(*BlockRangeRequest_GeneratorAddress)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_vrp_node_grpc_blocks_api_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_vrp_node_grpc_blocks_api_proto_goTypes,
		DependencyIndexes: file_vrp_node_grpc_blocks_api_proto_depIdxs,
		MessageInfos:      file_vrp_node_grpc_blocks_api_proto_msgTypes,
	}.Build()
	File_vrp_node_grpc_blocks_api_proto = out.File
	file_vrp_node_grpc_blocks_api_proto_rawDesc = nil
	file_vrp_node_grpc_blocks_api_proto_goTypes = nil
	file_vrp_node_grpc_blocks_api_proto_depIdxs = nil
}
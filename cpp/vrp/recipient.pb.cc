// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: vrp/recipient.proto

#include "vrp/recipient.pb.h"

#include <algorithm>

#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/extension_set.h>
#include <google/protobuf/wire_format_lite.h>
#include <google/protobuf/descriptor.h>
#include <google/protobuf/generated_message_reflection.h>
#include <google/protobuf/reflection_ops.h>
#include <google/protobuf/wire_format.h>
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
namespace vrp {
class RecipientDefaultTypeInternal {
 public:
  ::PROTOBUF_NAMESPACE_ID::internal::ExplicitlyConstructed<Recipient> _instance;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr public_key_hash_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr alias_;
} _Recipient_default_instance_;
}  // namespace vrp
static void InitDefaultsscc_info_Recipient_vrp_2frecipient_2eproto() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  {
    void* ptr = &::vrp::_Recipient_default_instance_;
    new (ptr) ::vrp::Recipient();
    ::PROTOBUF_NAMESPACE_ID::internal::OnShutdownDestroyMessage(ptr);
  }
  ::vrp::Recipient::InitAsDefaultInstance();
}

::PROTOBUF_NAMESPACE_ID::internal::SCCInfo<0> scc_info_Recipient_vrp_2frecipient_2eproto =
    {{ATOMIC_VAR_INIT(::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase::kUninitialized), 0, 0, InitDefaultsscc_info_Recipient_vrp_2frecipient_2eproto}, {}};

static ::PROTOBUF_NAMESPACE_ID::Metadata file_level_metadata_vrp_2frecipient_2eproto[1];
static constexpr ::PROTOBUF_NAMESPACE_ID::EnumDescriptor const** file_level_enum_descriptors_vrp_2frecipient_2eproto = nullptr;
static constexpr ::PROTOBUF_NAMESPACE_ID::ServiceDescriptor const** file_level_service_descriptors_vrp_2frecipient_2eproto = nullptr;

const ::PROTOBUF_NAMESPACE_ID::uint32 TableStruct_vrp_2frecipient_2eproto::offsets[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::vrp::Recipient, _internal_metadata_),
  ~0u,  // no _extensions_
  PROTOBUF_FIELD_OFFSET(::vrp::Recipient, _oneof_case_[0]),
  ~0u,  // no _weak_field_map_
  offsetof(::vrp::RecipientDefaultTypeInternal, public_key_hash_),
  offsetof(::vrp::RecipientDefaultTypeInternal, alias_),
  PROTOBUF_FIELD_OFFSET(::vrp::Recipient, recipient_),
};
static const ::PROTOBUF_NAMESPACE_ID::internal::MigrationSchema schemas[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  { 0, -1, sizeof(::vrp::Recipient)},
};

static ::PROTOBUF_NAMESPACE_ID::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::vrp::_Recipient_default_instance_),
};

const char descriptor_table_protodef_vrp_2frecipient_2eproto[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) =
  "\n\023vrp/recipient.proto\022\003vrp\"D\n\tRecipient\022"
  "\031\n\017public_key_hash\030\001 \001(\014H\000\022\017\n\005alias\030\002 \001("
  "\tH\000B\013\n\trecipientBX\n\034com.vrp.protobuf.tra"
  "nsactionZ2github.com/eVESTXCOIN/govrp/pk"
  "g/grpc/generated/vrp\252\002\003VRPb\006proto3"
  ;
static const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable*const descriptor_table_vrp_2frecipient_2eproto_deps[1] = {
};
static ::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase*const descriptor_table_vrp_2frecipient_2eproto_sccs[1] = {
  &scc_info_Recipient_vrp_2frecipient_2eproto.base,
};
static ::PROTOBUF_NAMESPACE_ID::internal::once_flag descriptor_table_vrp_2frecipient_2eproto_once;
const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_vrp_2frecipient_2eproto = {
  false, false, descriptor_table_protodef_vrp_2frecipient_2eproto, "vrp/recipient.proto", 194,
  &descriptor_table_vrp_2frecipient_2eproto_once, descriptor_table_vrp_2frecipient_2eproto_sccs, descriptor_table_vrp_2frecipient_2eproto_deps, 1, 0,
  schemas, file_default_instances, TableStruct_vrp_2frecipient_2eproto::offsets,
  file_level_metadata_vrp_2frecipient_2eproto, 1, file_level_enum_descriptors_vrp_2frecipient_2eproto, file_level_service_descriptors_vrp_2frecipient_2eproto,
};

// Force running AddDescriptors() at dynamic initialization time.
static bool dynamic_init_dummy_vrp_2frecipient_2eproto = (static_cast<void>(::PROTOBUF_NAMESPACE_ID::internal::AddDescriptors(&descriptor_table_vrp_2frecipient_2eproto)), true);
namespace vrp {

// ===================================================================

void Recipient::InitAsDefaultInstance() {
  ::vrp::_Recipient_default_instance_.public_key_hash_.UnsafeSetDefault(
      &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  ::vrp::_Recipient_default_instance_.alias_.UnsafeSetDefault(
      &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
class Recipient::_Internal {
 public:
};

Recipient::Recipient(::PROTOBUF_NAMESPACE_ID::Arena* arena)
  : ::PROTOBUF_NAMESPACE_ID::Message(arena) {
  SharedCtor();
  RegisterArenaDtor(arena);
  // @@protoc_insertion_point(arena_constructor:vrp.Recipient)
}
Recipient::Recipient(const Recipient& from)
  : ::PROTOBUF_NAMESPACE_ID::Message() {
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
  clear_has_recipient();
  switch (from.recipient_case()) {
    case kPublicKeyHash: {
      _internal_set_public_key_hash(from._internal_public_key_hash());
      break;
    }
    case kAlias: {
      _internal_set_alias(from._internal_alias());
      break;
    }
    case RECIPIENT_NOT_SET: {
      break;
    }
  }
  // @@protoc_insertion_point(copy_constructor:vrp.Recipient)
}

void Recipient::SharedCtor() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&scc_info_Recipient_vrp_2frecipient_2eproto.base);
  clear_has_recipient();
}

Recipient::~Recipient() {
  // @@protoc_insertion_point(destructor:vrp.Recipient)
  SharedDtor();
  _internal_metadata_.Delete<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

void Recipient::SharedDtor() {
  GOOGLE_DCHECK(GetArena() == nullptr);
  if (has_recipient()) {
    clear_recipient();
  }
}

void Recipient::ArenaDtor(void* object) {
  Recipient* _this = reinterpret_cast< Recipient* >(object);
  (void)_this;
}
void Recipient::RegisterArenaDtor(::PROTOBUF_NAMESPACE_ID::Arena*) {
}
void Recipient::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}
const Recipient& Recipient::default_instance() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&::scc_info_Recipient_vrp_2frecipient_2eproto.base);
  return *internal_default_instance();
}


void Recipient::clear_recipient() {
// @@protoc_insertion_point(one_of_clear_start:vrp.Recipient)
  switch (recipient_case()) {
    case kPublicKeyHash: {
      recipient_.public_key_hash_.Destroy(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArena());
      break;
    }
    case kAlias: {
      recipient_.alias_.Destroy(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArena());
      break;
    }
    case RECIPIENT_NOT_SET: {
      break;
    }
  }
  _oneof_case_[0] = RECIPIENT_NOT_SET;
}


void Recipient::Clear() {
// @@protoc_insertion_point(message_clear_start:vrp.Recipient)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  clear_recipient();
  _internal_metadata_.Clear<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

const char* Recipient::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  ::PROTOBUF_NAMESPACE_ID::Arena* arena = GetArena(); (void)arena;
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    CHK_(ptr);
    switch (tag >> 3) {
      // bytes public_key_hash = 1;
      case 1:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 10)) {
          auto str = _internal_mutable_public_key_hash();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // string alias = 2;
      case 2:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 18)) {
          auto str = _internal_mutable_alias();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "vrp.Recipient.alias"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      default: {
      handle_unusual:
        if ((tag & 7) == 4 || tag == 0) {
          ctx->SetLastTag(tag);
          goto success;
        }
        ptr = UnknownFieldParse(tag,
            _internal_metadata_.mutable_unknown_fields<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(),
            ptr, ctx);
        CHK_(ptr != nullptr);
        continue;
      }
    }  // switch
  }  // while
success:
  return ptr;
failure:
  ptr = nullptr;
  goto success;
#undef CHK_
}

::PROTOBUF_NAMESPACE_ID::uint8* Recipient::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:vrp.Recipient)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // bytes public_key_hash = 1;
  if (_internal_has_public_key_hash()) {
    target = stream->WriteBytesMaybeAliased(
        1, this->_internal_public_key_hash(), target);
  }

  // string alias = 2;
  if (_internal_has_alias()) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_alias().data(), static_cast<int>(this->_internal_alias().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "vrp.Recipient.alias");
    target = stream->WriteStringMaybeAliased(
        2, this->_internal_alias(), target);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(::PROTOBUF_NAMESPACE_ID::UnknownFieldSet::default_instance), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:vrp.Recipient)
  return target;
}

size_t Recipient::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:vrp.Recipient)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  switch (recipient_case()) {
    // bytes public_key_hash = 1;
    case kPublicKeyHash: {
      total_size += 1 +
        ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::BytesSize(
          this->_internal_public_key_hash());
      break;
    }
    // string alias = 2;
    case kAlias: {
      total_size += 1 +
        ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
          this->_internal_alias());
      break;
    }
    case RECIPIENT_NOT_SET: {
      break;
    }
  }
  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

void Recipient::MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:vrp.Recipient)
  GOOGLE_DCHECK_NE(&from, this);
  const Recipient* source =
      ::PROTOBUF_NAMESPACE_ID::DynamicCastToGenerated<Recipient>(
          &from);
  if (source == nullptr) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:vrp.Recipient)
    ::PROTOBUF_NAMESPACE_ID::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:vrp.Recipient)
    MergeFrom(*source);
  }
}

void Recipient::MergeFrom(const Recipient& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:vrp.Recipient)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  switch (from.recipient_case()) {
    case kPublicKeyHash: {
      _internal_set_public_key_hash(from._internal_public_key_hash());
      break;
    }
    case kAlias: {
      _internal_set_alias(from._internal_alias());
      break;
    }
    case RECIPIENT_NOT_SET: {
      break;
    }
  }
}

void Recipient::CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:vrp.Recipient)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void Recipient::CopyFrom(const Recipient& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:vrp.Recipient)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool Recipient::IsInitialized() const {
  return true;
}

void Recipient::InternalSwap(Recipient* other) {
  using std::swap;
  _internal_metadata_.Swap<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(&other->_internal_metadata_);
  swap(recipient_, other->recipient_);
  swap(_oneof_case_[0], other->_oneof_case_[0]);
}

::PROTOBUF_NAMESPACE_ID::Metadata Recipient::GetMetadata() const {
  return GetMetadataStatic();
}


// @@protoc_insertion_point(namespace_scope)
}  // namespace vrp
PROTOBUF_NAMESPACE_OPEN
template<> PROTOBUF_NOINLINE ::vrp::Recipient* Arena::CreateMaybeMessage< ::vrp::Recipient >(Arena* arena) {
  return Arena::CreateMessageInternal< ::vrp::Recipient >(arena);
}
PROTOBUF_NAMESPACE_CLOSE

// @@protoc_insertion_point(global_scope)
#include <google/protobuf/port_undef.inc>

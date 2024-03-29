// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: vrp/amount.proto

#ifndef GOOGLE_PROTOBUF_INCLUDED_vrp_2famount_2eproto
#define GOOGLE_PROTOBUF_INCLUDED_vrp_2famount_2eproto

#include <limits>
#include <string>

#include <google/protobuf/port_def.inc>
#if PROTOBUF_VERSION < 3021000
#error This file was generated by a newer version of protoc which is
#error incompatible with your Protocol Buffer headers. Please update
#error your headers.
#endif
#if 3021007 < PROTOBUF_MIN_PROTOC_VERSION
#error This file was generated by an older version of protoc which is
#error incompatible with your Protocol Buffer headers. Please
#error regenerate this file with a newer version of protoc.
#endif

#include <google/protobuf/port_undef.inc>
#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/arena.h>
#include <google/protobuf/arenastring.h>
#include <google/protobuf/generated_message_util.h>
#include <google/protobuf/metadata_lite.h>
#include <google/protobuf/generated_message_reflection.h>
#include <google/protobuf/message.h>
#include <google/protobuf/repeated_field.h>  // IWYU pragma: export
#include <google/protobuf/extension_set.h>  // IWYU pragma: export
#include <google/protobuf/unknown_field_set.h>
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
#define PROTOBUF_INTERNAL_EXPORT_vrp_2famount_2eproto
PROTOBUF_NAMESPACE_OPEN
namespace internal {
class AnyMetadata;
}  // namespace internal
PROTOBUF_NAMESPACE_CLOSE

// Internal implementation detail -- do not use these members.
struct TableStruct_vrp_2famount_2eproto {
  static const uint32_t offsets[];
};
extern const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_vrp_2famount_2eproto;
namespace vrp {
class Amount;
struct AmountDefaultTypeInternal;
extern AmountDefaultTypeInternal _Amount_default_instance_;
}  // namespace vrp
PROTOBUF_NAMESPACE_OPEN
template<> ::vrp::Amount* Arena::CreateMaybeMessage<::vrp::Amount>(Arena*);
PROTOBUF_NAMESPACE_CLOSE
namespace vrp {

// ===================================================================

class Amount final :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:vrp.Amount) */ {
 public:
  inline Amount() : Amount(nullptr) {}
  ~Amount() override;
  explicit PROTOBUF_CONSTEXPR Amount(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized);

  Amount(const Amount& from);
  Amount(Amount&& from) noexcept
    : Amount() {
    *this = ::std::move(from);
  }

  inline Amount& operator=(const Amount& from) {
    CopyFrom(from);
    return *this;
  }
  inline Amount& operator=(Amount&& from) noexcept {
    if (this == &from) return *this;
    if (GetOwningArena() == from.GetOwningArena()
  #ifdef PROTOBUF_FORCE_COPY_IN_MOVE
        && GetOwningArena() != nullptr
  #endif  // !PROTOBUF_FORCE_COPY_IN_MOVE
    ) {
      InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }

  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* descriptor() {
    return GetDescriptor();
  }
  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* GetDescriptor() {
    return default_instance().GetMetadata().descriptor;
  }
  static const ::PROTOBUF_NAMESPACE_ID::Reflection* GetReflection() {
    return default_instance().GetMetadata().reflection;
  }
  static const Amount& default_instance() {
    return *internal_default_instance();
  }
  static inline const Amount* internal_default_instance() {
    return reinterpret_cast<const Amount*>(
               &_Amount_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  friend void swap(Amount& a, Amount& b) {
    a.Swap(&b);
  }
  inline void Swap(Amount* other) {
    if (other == this) return;
  #ifdef PROTOBUF_FORCE_COPY_IN_SWAP
    if (GetOwningArena() != nullptr &&
        GetOwningArena() == other->GetOwningArena()) {
   #else  // PROTOBUF_FORCE_COPY_IN_SWAP
    if (GetOwningArena() == other->GetOwningArena()) {
  #endif  // !PROTOBUF_FORCE_COPY_IN_SWAP
      InternalSwap(other);
    } else {
      ::PROTOBUF_NAMESPACE_ID::internal::GenericSwap(this, other);
    }
  }
  void UnsafeArenaSwap(Amount* other) {
    if (other == this) return;
    GOOGLE_DCHECK(GetOwningArena() == other->GetOwningArena());
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  Amount* New(::PROTOBUF_NAMESPACE_ID::Arena* arena = nullptr) const final {
    return CreateMaybeMessage<Amount>(arena);
  }
  using ::PROTOBUF_NAMESPACE_ID::Message::CopyFrom;
  void CopyFrom(const Amount& from);
  using ::PROTOBUF_NAMESPACE_ID::Message::MergeFrom;
  void MergeFrom( const Amount& from) {
    Amount::MergeImpl(*this, from);
  }
  private:
  static void MergeImpl(::PROTOBUF_NAMESPACE_ID::Message& to_msg, const ::PROTOBUF_NAMESPACE_ID::Message& from_msg);
  public:
  PROTOBUF_ATTRIBUTE_REINITIALIZES void Clear() final;
  bool IsInitialized() const final;

  size_t ByteSizeLong() const final;
  const char* _InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) final;
  uint8_t* _InternalSerialize(
      uint8_t* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const final;
  int GetCachedSize() const final { return _impl_._cached_size_.Get(); }

  private:
  void SharedCtor(::PROTOBUF_NAMESPACE_ID::Arena* arena, bool is_message_owned);
  void SharedDtor();
  void SetCachedSize(int size) const final;
  void InternalSwap(Amount* other);

  private:
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "vrp.Amount";
  }
  protected:
  explicit Amount(::PROTOBUF_NAMESPACE_ID::Arena* arena,
                       bool is_message_owned = false);
  public:

  static const ClassData _class_data_;
  const ::PROTOBUF_NAMESPACE_ID::Message::ClassData*GetClassData() const final;

  ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadata() const final;

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  enum : int {
    kAssetIdFieldNumber = 1,
    kAmountFieldNumber = 2,
  };
  // bytes asset_id = 1;
  void clear_asset_id();
  const std::string& asset_id() const;
  template <typename ArgT0 = const std::string&, typename... ArgT>
  void set_asset_id(ArgT0&& arg0, ArgT... args);
  std::string* mutable_asset_id();
  PROTOBUF_NODISCARD std::string* release_asset_id();
  void set_allocated_asset_id(std::string* asset_id);
  private:
  const std::string& _internal_asset_id() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_asset_id(const std::string& value);
  std::string* _internal_mutable_asset_id();
  public:

  // int64 amount = 2;
  void clear_amount();
  int64_t amount() const;
  void set_amount(int64_t value);
  private:
  int64_t _internal_amount() const;
  void _internal_set_amount(int64_t value);
  public:

  // @@protoc_insertion_point(class_scope:vrp.Amount)
 private:
  class _Internal;

  template <typename T> friend class ::PROTOBUF_NAMESPACE_ID::Arena::InternalHelper;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  struct Impl_ {
    ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr asset_id_;
    int64_t amount_;
    mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  };
  union { Impl_ _impl_; };
  friend struct ::TableStruct_vrp_2famount_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// Amount

// bytes asset_id = 1;
inline void Amount::clear_asset_id() {
  _impl_.asset_id_.ClearToEmpty();
}
inline const std::string& Amount::asset_id() const {
  // @@protoc_insertion_point(field_get:vrp.Amount.asset_id)
  return _internal_asset_id();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void Amount::set_asset_id(ArgT0&& arg0, ArgT... args) {
 
 _impl_.asset_id_.SetBytes(static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:vrp.Amount.asset_id)
}
inline std::string* Amount::mutable_asset_id() {
  std::string* _s = _internal_mutable_asset_id();
  // @@protoc_insertion_point(field_mutable:vrp.Amount.asset_id)
  return _s;
}
inline const std::string& Amount::_internal_asset_id() const {
  return _impl_.asset_id_.Get();
}
inline void Amount::_internal_set_asset_id(const std::string& value) {
  
  _impl_.asset_id_.Set(value, GetArenaForAllocation());
}
inline std::string* Amount::_internal_mutable_asset_id() {
  
  return _impl_.asset_id_.Mutable(GetArenaForAllocation());
}
inline std::string* Amount::release_asset_id() {
  // @@protoc_insertion_point(field_release:vrp.Amount.asset_id)
  return _impl_.asset_id_.Release();
}
inline void Amount::set_allocated_asset_id(std::string* asset_id) {
  if (asset_id != nullptr) {
    
  } else {
    
  }
  _impl_.asset_id_.SetAllocated(asset_id, GetArenaForAllocation());
#ifdef PROTOBUF_FORCE_COPY_DEFAULT_STRING
  if (_impl_.asset_id_.IsDefault()) {
    _impl_.asset_id_.Set("", GetArenaForAllocation());
  }
#endif // PROTOBUF_FORCE_COPY_DEFAULT_STRING
  // @@protoc_insertion_point(field_set_allocated:vrp.Amount.asset_id)
}

// int64 amount = 2;
inline void Amount::clear_amount() {
  _impl_.amount_ = int64_t{0};
}
inline int64_t Amount::_internal_amount() const {
  return _impl_.amount_;
}
inline int64_t Amount::amount() const {
  // @@protoc_insertion_point(field_get:vrp.Amount.amount)
  return _internal_amount();
}
inline void Amount::_internal_set_amount(int64_t value) {
  
  _impl_.amount_ = value;
}
inline void Amount::set_amount(int64_t value) {
  _internal_set_amount(value);
  // @@protoc_insertion_point(field_set:vrp.Amount.amount)
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__

// @@protoc_insertion_point(namespace_scope)

}  // namespace vrp

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // GOOGLE_PROTOBUF_INCLUDED_GOOGLE_PROTOBUF_INCLUDED_vrp_2famount_2eproto

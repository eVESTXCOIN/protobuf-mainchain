# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vrp/amount.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='vrp/amount.proto',
  package='vrp',
  syntax='proto3',
  serialized_options=b'\n\020com.vrp.protobufZ2github.com/eVESTXCOIN/govrp/pkg/grpc/generated/vrp\252\002\003VRP',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x10vrp/amount.proto\x12\x03vrp\"*\n\x06\x41mount\x12\x10\n\x08\x61sset_id\x18\x01 \x01(\x0c\x12\x0e\n\x06\x61mount\x18\x02 \x01(\x03\x42L\n\x10\x63om.vrp.protobufZ2github.com/eVESTXCOIN/govrp/pkg/grpc/generated/vrp\xaa\x02\x03VRPb\x06proto3'
)




_AMOUNT = _descriptor.Descriptor(
  name='Amount',
  full_name='vrp.Amount',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='asset_id', full_name='vrp.Amount.asset_id', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=b"",
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='amount', full_name='vrp.Amount.amount', index=1,
      number=2, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=25,
  serialized_end=67,
)

DESCRIPTOR.message_types_by_name['Amount'] = _AMOUNT
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Amount = _reflection.GeneratedProtocolMessageType('Amount', (_message.Message,), {
  'DESCRIPTOR' : _AMOUNT,
  '__module__' : 'vrp.amount_pb2'
  # @@protoc_insertion_point(class_scope:vrp.Amount)
  })
_sym_db.RegisterMessage(Amount)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
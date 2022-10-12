///
//  Generated code. Do not modify.
//  source: vrp/order.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

// ignore_for_file: UNDEFINED_SHOWN_NAME
import 'dart:core' as $core;
import 'package:protobuf/protobuf.dart' as $pb;

class Order_Side extends $pb.ProtobufEnum {
  static const Order_Side BUY = Order_Side._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'BUY');
  static const Order_Side SELL = Order_Side._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'SELL');

  static const $core.List<Order_Side> values = <Order_Side> [
    BUY,
    SELL,
  ];

  static final $core.Map<$core.int, Order_Side> _byValue = $pb.ProtobufEnum.initByValue(values);
  static Order_Side? valueOf($core.int value) => _byValue[value];

  const Order_Side._($core.int v, $core.String n) : super(v, n);
}

class Order_PriceMode extends $pb.ProtobufEnum {
  static const Order_PriceMode DEFAULT = Order_PriceMode._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'DEFAULT');
  static const Order_PriceMode FIXED_DECIMALS = Order_PriceMode._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'FIXED_DECIMALS');
  static const Order_PriceMode ASSET_DECIMALS = Order_PriceMode._(2, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ASSET_DECIMALS');

  static const $core.List<Order_PriceMode> values = <Order_PriceMode> [
    DEFAULT,
    FIXED_DECIMALS,
    ASSET_DECIMALS,
  ];

  static final $core.Map<$core.int, Order_PriceMode> _byValue = $pb.ProtobufEnum.initByValue(values);
  static Order_PriceMode? valueOf($core.int value) => _byValue[value];

  const Order_PriceMode._($core.int v, $core.String n) : super(v, n);
}


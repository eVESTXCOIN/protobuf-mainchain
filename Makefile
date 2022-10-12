PROJECT=protobuf-mainchain
ORGANISATION=vestxhybrid
SOURCE=$(shell find . -name '*' | grep -v vendor/)
SOURCE_DIRS = cpp cs go java js proto py ruby swift objc dart
VERSION=1.0

# Supported languages: C#, C++, Golang, Java, Javascript/Typescript,  Python, Ruby, Php, Swift, Dart

clean: 
	@rm -r cpp/* && rm -r cs/* && rm -r java/* && rm -r py/* && rm -r ruby/* && rm -r swift/* && rm -r swift/* && rm -r objc/* && rm -r dart/*

# Generate all protobuf scheme for all languages
all: clean cpp cs go java js py ruby swift objc dart

# C++
cpp:
	@protoc --proto_path=/proto/ --cpp_out=cpp /proto/vrp/*.proto

# C#
cs:
	@protoc --proto_path=/proto/ --csharp_out=cs /proto/vrp/*.proto

# Golang
go:
	@protoc --proto_path=/proto/ --go-grpc_out=go --go-grpc_opt=require_unimplemented_servers=false /proto/vrp/*.proto    

# Java
java:
	@protoc --proto_path=/proto/ --java_out=java /proto/vrp/*.proto

#js/ts
js:
	npm install
	@npm run build

#python
py:
	@protoc --proto_path=/proto/ --python_out=py /proto/vrp/*.proto

#ruby
ruby:
	@protoc --proto_path=/proto/ --ruby_out=ruby /proto/vrp/*.proto

#php
php:
	@protoc --proto_path=/proto/ --php_out=php /proto/vrp/*.proto

#objective-c
objc:
	@protoc --proto_path=/proto/ --objc_out=objc /proto/vrp/*.proto

#dart
dart:
	dart_dependencies
	@protoc --proto_path=/proto/ --dart_out=dart /proto/vrp/*.proto

#swift
#brew install swift-protobuf
swift:
	swift_dependencies
	@protoc --proto_path=/proto/ --swift_out=swift /proto/vrp/*.proto

#installation of dependencies

#swift
swift_dependencies:
	@brew install swift-protobuf

#dart
dart_dependencies:
	@flutter
	@dart pub global activate protoc_plugin
	@export PATH="$PATH":"$HOME/.pub-cache/bin"
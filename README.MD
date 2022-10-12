# Mainchain Protobuf 

eVESTX Mainchain protobuf schemas with methods for encoding and decoding protobuf messages as well as working with gRPC services.

Version: 0.1.2 beta

## How to use this?

### Java

Add dependency to your pom.xml

```xml
<dependency>
    <groupId>com.vrp</groupId>
    <artifactId>protobuf-schemas</artifactId>
    <version>{version}</version>
</dependency>
```

### JavaScript

Npm package: `@evestx/protobuf-mainchain`.

The @evestx/protobuf-mainchain contains JavaScript classes, as well as raw proto files. The default build uses CommonJS, ES6 and includes all of the proto files necessary for the operation.

`long.js` is used for 64-bit integers: `int64`, `uint64`, etc.

Example:

1. `npm install --save @evestx/protobuf-mainchain`
2. Default build usage

```javascript
const { vrp } = require("@evestx/protobuf-mainchain")

const block = new vrp.Block();
block.header = // ... set necessary fields

const buffer = vrp.Block.encode(block);

const blockDecoded = vrp.Block.decode(buffer);
```

### Rust

Add dependency to your `Cargo.toml`

```toml
[dependencies]
vrp-protobuf-schemas = { git = "https://github.com/eVESTXCOIN/protobuf-mainchain" }
```

### Java

Use `mvn package` to create JAR artifacts:

1. `protobuf-schemas-{version}-protobuf-src.jar` - raw .proto files
2. `protobuf-schemas-{version}.jar` - protoc-generated Java classes
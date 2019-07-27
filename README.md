# http-to-grpc-gateway

Example of using `grpc-gateway` and `httputil.ReverseProxy` to migrate a service to Go and gRPC by automatically proxying requests for unimplemented methods to the old service.

## Requirements

* Go 1.12+ (https://golang.org/dl/)
* Node 10+ (https://nodejs.org/en/download/)
* `protoc` 3.7.0+ (https://github.com/protocolbuffers/protobuf/releases)
* `protoc-gen-go` (go get -u github.com/golang/protobuf/protoc-gen-go)
* `protoc-gen-grpc-gateway` (go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway)

## Running

### Node

```sh
$ cd node
$ npm install
$ npm start
```

### Go

```sh
$ cd go
$ go run main.go
```

## Modifying

### Node

1. Modify `node/index.js`.

### Go

1. Modify `go/hello/hello.proto`.
1. In `go/hello`, run `go generate`.
1. Implement handler in `go/main.go`.

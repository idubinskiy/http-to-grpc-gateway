package hello

//go:generate bash -c "protoc -I/usr/local/include -I. -I`go list -m -f '{{.Dir}}' github.com/grpc-ecosystem/grpc-gateway`/third_party/googleapis --go_out=plugins=grpc:. --grpc-gateway_out=logtostderr=true:. ./hello.proto"

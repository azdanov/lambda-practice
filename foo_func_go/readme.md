Lambda in Go

```bash
# We chose the x86_64 environment (instead of ARM64),
# so we need to compile this of linux AMD64
# Generates file "main"
GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -ldflags="-s -w" -o main main.go

# Zip that file up
zip main.zip main

# Confirm the Lambda function exists
# https://awscli.amazonaws.com/v2/documentation/api/latest/reference/lambda/get-function.html
aws --profile default lambda get-function \
    --function-name foo_func_go

# Upload the zip
# https://awscli.amazonaws.com/v2/documentation/api/latest/reference/lambda/update-function-code.html
# Note: The --publish flag tells it to publish this as the latest / used version
aws --profile default lambda update-function-code \
    --function-name foo_func_go \
    --zip-file fileb://main.zip \
    --publish

# Invoke the function
aws --profile cloudcasts lambda invoke \
    --function-name foo_func_go \
    --invocation-type RequestResponse \
    --cli-binary-format raw-in-base64-out \
    --payload '{"name": "Anton", "message": "People like you!"}' \
    output.json

cat output.json
```

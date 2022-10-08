Lambda in Node.js

```bash
# Zip that file up
zip index.zip index

# Confirm the Lambda function exists
# https://awscli.amazonaws.com/v2/documentation/api/latest/reference/lambda/get-function.html
aws --profile default lambda get-function \
    --function-name foo_func_nodejs

# Create a function and upload the zip
# https://awscli.amazonaws.com/v2/documentation/api/latest/reference/lambda/update-function-code.html
# Note the role ARN
aws --profile default lambda create-function \
          --function-name foo_func_nodejs \
          --role arn:aws:iam::979999999179:role/service-role/foo_func-role-o6hthmoy \
          --runtime nodejs16.x \
          --handler index.handler \
          --memory-size 512 \
          --zip-file fileb://index.zip

# Invoke the function
aws --profile cloudcasts lambda invoke \
    --function-name foo_func_nodejs \
    --invocation-type RequestResponse \
    --cli-binary-format raw-in-base64-out \
    --payload '{"name": "Anton", "message": "People like you!"}' \
    output.json

cat output.json
```

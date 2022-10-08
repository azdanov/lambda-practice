Lambda in PHP

```bash
zip -r9q index.zip .

# Create the function with a PHP runtime layer
# Note that handler is the file name for PHP runtimes
aws --profile default lambda create-function \
    --function-name foo_func_php \
    --role arn:aws:iam::601364042938:role/service-role/foo_func_go-role-h6pfawno \
    --handler index.php \
    --runtime provided.al2 \
    --memory-size 512 \
    --layers "arn:aws:lambda:eu-north-1:209497400698:layer:php-81:31" \
    --zip-file fileb://index.zip

aws --profile default lambda invoke \
    --function-name foo_func_php \
    --invocation-type RequestResponse \
    --cli-binary-format raw-in-base64-out \
    --payload '{"name": "Anton"}' \
    output.json

cat output.json
```

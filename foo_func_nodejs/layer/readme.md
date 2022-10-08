```bash
cp -r ../node_modules package* ./layer/nodejs/

zip -r9q layer.zip .

aws --profile default lambda publish-layer-version \
    --layer-name "foo_nodejs_modules" \
    --description "AWS S3 Node Modules" \
    --zip-file fileb://layer.zip \
    --compatible-runtimes nodejs14.x

aws --profile default lambda update-function-configuration \
    --function-name foo_func_nodejs \
    --layers "arn:aws:lambda:us-east-2:601364042938:layer:foo_nodejs_modules:2"
```

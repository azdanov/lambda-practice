Lambda in Node.js

```bash
zip -r9 index.zip index.js
 
aws --profile default lambda update-function-code \
    --function-name foo_func_nodejs \
    --zip-file fileb://index.zip \
    --publish
 
aws --profile default lambda invoke \
    --function-name foo_func_nodejs \
    --invocation-type RequestResponse \
    output.json
 
cat output.json
```

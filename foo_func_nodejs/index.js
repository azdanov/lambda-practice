const { S3Client, ListObjectsCommand } = require("@aws-sdk/client-s3");

const s3Client = new S3Client({
  region: "eu-north-1",
  version: "latest",
});

const bucket = "azdanov-practice-artifacts";

exports.handler = async function (event, context) {
  const response = await s3Client.send(
    new ListObjectsCommand({
      Bucket: bucket,
    })
  );

  console.log(response);

  return context.logStreamName;
};

exports.handler = async (event) => {
    var srcBucket = event.Records[0].s3.bucket.name;
    var srcKey = decodeURIComponent(event.Records[0].s3.object.key);
    console.log("Hello to " + srcKey + " which was just uploaded to the " + srcBucket + " bucket!");
};

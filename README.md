#P5 with ES6 template

##Usage  
npm i  
npm run start


## Set as website on S3
export region=ap-southeast-2
export bucketName=planet-site

aws s3api create-bucket --acl public-read --bucket $bucketName --region $region --create-bucket-configuration LocationConstraint=$region

aws s3 website s3://$bucketName/ --index-document index.html --error-document error.html

aws s3 cp . s3://$bucketName --recursive --acl public-read --exclude "*" --include "index.html" --include "app.js" --include "src/*" --include "dist/*"


# Delete bucket
aws s3 rm s3://$bucketName --recursive

aws s3api delete-bucket --bucket $bucketName
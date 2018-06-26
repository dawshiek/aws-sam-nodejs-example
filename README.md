# aws-sam-nodejs-example

AWS SAM Nodejs example
- Covering sam deployment templates
- Custom Domain setup
- BasePath Mapping

Intrinsic Deployment:
AWS SAM will take of creation of API Gateway and associated resources. Refer to template name template-basic


Setup SAM CLI
Installation instructions can be found here: https://github.com/awslabs/aws-sam-cli#installation


- Invoke Local

    sam local invoke "helloworld" -e lambda/event.json

        Expected Output:
        {"statusCode":200,"body":"Hello World"}

- Package:

    sam package --template-file template.yaml --s3-bucket my-sam-deployments --output-template-file packaged.yaml

- Deploy:

    sam deploy --template-file ./packaged.yaml --stack-name sam-test --capabilities CAPABILITY_IAM --parameter-overrides environment=dev customDomain=api.example.io certificateARN=arn:aws:acm:us-east-1:12345678:certificate/EECD0A91-5FC7-460F-A9DE-44CD5806A670 stageName=testdev regionalAPIGateway=Yes
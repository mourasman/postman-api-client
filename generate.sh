#!/bin/sh
npx @openapitools/openapi-generator-cli@cli-4.3.1 generate -i api.yaml -g javascript -o . -DusePromises=true
#!/bin/bash

registry_host=10.0.1.3
registry_port=5050
image_name=brianchen.me

if ! [ -z "$2" ]; then 
    echo "image name is $2"
    image_name=$2
fi

if [ -z "$1" ]; then 
    echo "specify a tag please!"
    curl -X GET "$registry_host:$registry_port/v2/$image_name/tags/list"
    exit 1
fi

full_image="$registry_host:$registry_port/$image_name"
read -p "Build and push $full_image:$1? " -n 1 -r
echo "" 
if [[ $REPLY =~ ^[Yy]$ ]]; then
    docker image build --platform=linux/amd64 -t $full_image:$1 .
    docker image tag -t $full_image:$1 $full_image:latest
    docker image push $full_image:$1
else
    echo "Only 'Y' or 'y' accepted."
fi
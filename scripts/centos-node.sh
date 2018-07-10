#!/bin/bash

curl -sL https://rpm.nodesource.com/setup_6.x | sudo -E bash -

yum install -y nodejs

npm install -g serverless

sudo yum -y install python-pip

pip install awscli --upgrade --user

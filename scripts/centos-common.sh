#!/bin/bash

yum update -y --exclude=kernel

yum install -y git screen unzip nc telnet libselinux-python

yum install -y gcc-c++ make

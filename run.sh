#!/bin/sh

docker run --name squid -p 3128:3128 -p 3129:3129 distahl/squid

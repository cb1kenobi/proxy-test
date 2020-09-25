#!/bin/sh

docker exec squid tail -f /var/log/squid/access.log

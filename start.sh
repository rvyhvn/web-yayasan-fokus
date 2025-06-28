#!/bin/sh

cd build;
node ace migration:run --force;
node ace db:seed;
pm2-runtime start ./bin/server.js

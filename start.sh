#!/bin/sh

cd build;
node ace migration:run --force;
pm2-runtime start ./bin/server.js

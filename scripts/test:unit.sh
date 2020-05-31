#!/usr/bin/env sh

export TS_NODE_TRANSPILE_ONLY=true
export NODE_PATH=Src:Test

if [ "$1" = "-w" ]; then
  mocha Test/Unit $1
else
  nyc mocha Test/Unit $1
fi

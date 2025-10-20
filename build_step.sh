#!/bin/bash

echo "Build script"

cd frontend
npm install
npm run build

cd ..
npm install
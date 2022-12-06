FROM lukechannings/deno:v1.28.3 
# Required when running with Macbook M1 ARM, because of https://github.com/denoland/deno/issues/14244
# If you don't run ARM, use: FROM denoland/deno:latest

WORKDIR /usr/src/app

COPY src/deps.ts .

RUN deno cache deps.ts

COPY src .

RUN deno cache server.ts
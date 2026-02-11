# Use the official Bun image
# See all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:latest AS base
WORKDIR /usr/src/app

# Install OpenSSL and git (needed for GitHub dependencies)
RUN apt-get update -y && apt-get install -y openssl git

# Install dependencies with fresh erp-shared-models
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock* /temp/dev/

# Remove erp-shared-models first to ensure fresh install
RUN cd /temp/dev && \
    bun remove erp-shared-models || true && \
    bun add github:alfiyazaidilogimetrix-crypto/erp-shared-models#main && \
    bun install

# Install production dependencies with fresh erp-shared-models
RUN mkdir -p /temp/prod
COPY package.json bun.lock* /temp/prod/
RUN cd /temp/prod && \
    bun remove erp-shared-models || true && \
    bun add github:alfiyazaidilogimetrix-crypto/erp-shared-models#main && \
    bun install --production

# Build stage - build TypeScript and prepare for linking
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# Build the TypeScript project
RUN bun run build

# Run bun link to make this package available for linking
RUN bun link

# Copy production dependencies and source code into final image
FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/dist ./dist
COPY --from=prerelease /usr/src/app/src ./src
COPY --from=prerelease /usr/src/app/tsconfig.json ./tsconfig.json
COPY --from=prerelease /usr/src/app/bunfig.toml* ./
COPY --from=prerelease /usr/src/app/.env* ./
COPY package.json .

# Run the application
USER bun
EXPOSE 4043
CMD ["bun", "run", "prod"]
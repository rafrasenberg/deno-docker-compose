# Deno docker-compose

Basic Deno docker-compose example, with a simple Rest API endpoint by using the Oak middleware library. It is using the `--watch` flag so that files are updated on the fly.

### Quick start

```
cp .env.example .env
```

Update the port if you'd like to, or use the default set in the `.env.example`.

With the `.env` file set, run:

```
docker-compose up -d --build
```

This will start the server and you'll be able to ping it at `localhost:6823/api/v1/hello` (if you did not change the port).

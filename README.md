# simple-pac-hoster

Simple app to hack SOCKS proxies on iOS

## Configuration

You need a two ENVS to start app

```bash
KEROOSHA_PAC_PORT=911 // by default
KEROOSHA_PAC_STRING=SOCKS proxy.org:1080
```

## Running

Just launch index.js or spawn a docker container

```bash
docker run -e KEROOSHA_PAC_PORT=911 \
    -e KEROOSHA_PAC_STRING='SOCKS proxy.org:1080' \
    -p 8000:911 \
    --name pacProxy -d \
    keroosha/simple-pac-hoster
```

After you can set your device to use Auto configurable proxy by any path

```
http://path.org/auto.pac
```

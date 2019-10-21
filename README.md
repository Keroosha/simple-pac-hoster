# simple-pac-hoster

Simple app to hack SOCKS proxies on iOS

## Configuration

You can set a port to host on via ENV variable

```bash
KEROOSHA_PAC_PORT=911 // by default
```

## Running

Just launch index.js or spawn a docker container

```bash
docker run -e KEROOSHA_PAC_PORT=911 \
    -p 8000:911 \
    --name pacProxy -d \
    keroosha/simple-pac-hoster
```

After you can set your device to use Auto configurable proxy by any path

```
http://path.org/?url=example.org&type=SOCKS

response: 

function FindProxyForURL(url, host)
{
    return "SOCKS example.org";
}
```

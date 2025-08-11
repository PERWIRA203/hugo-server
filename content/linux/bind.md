---
title : "Bind server in Ubuntu"
weight : 3
---



![LOGO Apache](https://blog.desdelinux.net/wp-content/uploads/2021/03/bind9.png.webp)
#### Step by Step : 

1.  Update package of your linux
```
sudo apt-get update
```
2. Install Bind server 
```
sudo apt-get install bind9
```
3. Change directory to bind
```
cd /etc/bind
```
4. Copy file configuration db.127 to db.reverse, and db.local to db.forward
```
sudo cp db.127 db.reverse | sudo cp db.local db.forward
```
5. Edit db.reverse configuration, default config : 
```
;
; BIND reverse data file for local loopback interface
;
$TTL    604800
@       IN      SOA     localhost. root.localhost. (
                              1         ; Serial
                         604800         ; Refresh
                          86400         ; Retry
                        2419200         ; Expire
                         604800 )       ; Negative Cache TTL
;
@       IN      NS      localhost.
1.0.0   IN      PTR     localhost.
```
6. To this : 
```
;
; BIND reverse data file for local loopback interface
;
$TTL    604800
@       IN      SOA     contoh.local. root.contoh.local. (
  	                          1         ; Serial
                         604800         ; Refresh
                          86400         ; Retry
                        2419200         ; Expire
                         604800 )       ; Negative Cache TTL
;
@       IN      NS      contoh.local.
2       IN      PTR     contoh.local.
```
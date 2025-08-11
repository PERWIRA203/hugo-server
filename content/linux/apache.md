---
title : "Apache Server in Ubuntu"
weight : 2
---



![LOGO Apache](https://t4.ftcdn.net/jpg/02/46/12/55/360_F_246125553_V91Hzqrf7ogen79eabrSS3T5DT0hJkse.jpg)
#### Step by Step : 

1.  Update package of your linux
```
sudo apt-get update
```

2. Install package apache
```
sudo apt-get install apache2 
```

3. Change Directory to sites-available on directory apache
```
cd /etc/apache2/sites-available
```
4. In this directory, you can see there's 2 default configuration
```
perwira203@ubuntu~/etc/apache2/sites-available# ls
000-default.conf  default-ssl.conf
```
5. The 000-default.conf is for http service
```
000-default.conf
```
6. The default-ssl.conf is for https service
```
default-ssl.conf
```
7. The configuration that on is the default http service, so you can copy it and make new configuration file
```
sudo cp 000-default.conf myconfig.conf
```
8. Edit your configuration file 
```
sudo nano myconfig.conf
```
9. Change the path file of the configuration
```
DocumentRoot /var/www/html
```
to 
```
DocumentRoot /var/www/myconfig
```
10. Save the file with press ctrl with x, and press y and enter for the changes
11. Create the directory for our config
```
sudo mkdir /var/www/myconfig
```
12. Change directory to myconfig
```
cd /var/www/myconfig
```
13. Create the html file
```
sudo touch index.html
```
14. edit html file
```
sudo nano index.html
```

15. Write html file
```
<!DOCTYPE html>
<html>
    <head>
        <title>My Docs file</title>
    </head>
    <body>

        <h1>My Docs file</h1>
        <p>My Docs file</p>

    </body>
</html>
```
16. Deactivate the default configuration file
```
sudo a2dissite 000-default.conf
```
17. Activate myconfig configuration file
```
sudo a2ensite myconfig.conf
``` 
18. Restart your apache server
```
sudo systemctl reload apache2
```
19. This is how it's gonna look
![apache example](../image/apache-example.png)
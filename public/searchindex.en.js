var relearn_searchindex = [
  {
    "breadcrumb": "PERWIRA203 Documentation",
    "content": "This is my Cisco Based Project Documentation",
    "description": "This is my Cisco Based Project Documentation",
    "tags": [],
    "title": "Cisco Documentation",
    "uri": "/cisco/index.html"
  },
  {
    "breadcrumb": "PERWIRA203 Documentation",
    "content": "This is my Linux Project Documentation Basic Command in Ubuntu and Debian based Command Function Example ls See the content of directory ls -l cd Change Path Directory you on cd /etc apt Manage software package apt update rm Delete file rm (file) sudo Make a command super user sudo rm",
    "description": "This is my Linux Project Documentation Basic Command in Ubuntu and Debian based Command Function Example ls See the content of directory ls -l cd Change Path Directory you on cd /etc apt Manage software package apt update rm Delete file rm (file) sudo Make a command super user sudo rm",
    "tags": [],
    "title": "Linux Documentation",
    "uri": "/linux/index.html"
  },
  {
    "breadcrumb": "PERWIRA203 Documentation \u003e Linux Documentation",
    "content": "Step by Step : Update package of your linux sudo apt-get update\rInstall package apache sudo apt-get install apache2 Change Directory to sites-available on directory apache cd /etc/apache2/sites-available\rIn this directory, you can see there’s 2 default configuration perwira203@ubuntu~/etc/apache2/sites-available# ls\r000-default.conf default-ssl.conf\rThe 000-default.conf is for http service 000-default.conf\rThe default-ssl.conf is for https service default-ssl.conf\rThe configuration that on is the default http service, so you can copy it and make new configuration file sudo cp 000-default.conf myconfig.conf\rEdit your configuration file sudo nano myconfig.conf\rChange the path file of the configuration DocumentRoot /var/www/html\rto\nDocumentRoot /var/www/myconfig\rSave the file with press ctrl with x, and press y and enter for the changes Create the directory for our config sudo mkdir /var/www/myconfig\rChange directory to myconfig cd /var/www/myconfig\rCreate the html file sudo touch index.html\redit html file sudo nano index.html\rWrite html file \u003c!DOCTYPE html\u003e\r\u003chtml\u003e\r\u003chead\u003e\r\u003ctitle\u003eMy Docs file\u003c/title\u003e\r\u003c/head\u003e\r\u003cbody\u003e\r\u003ch1\u003eMy Docs file\u003c/h1\u003e\r\u003cp\u003eMy Docs file\u003c/p\u003e\r\u003c/body\u003e\r\u003c/html\u003e\rDeactivate the default configuration file sudo a2dissite 000-default.conf\rActivate myconfig configuration file sudo a2ensite myconfig.conf\rRestart your apache server sudo systemctl reload apache2\rThis is how it’s gonna look",
    "description": "Step by Step : Update package of your linux sudo apt-get update\rInstall package apache sudo apt-get install apache2 Change Directory to sites-available on directory apache cd /etc/apache2/sites-available\rIn this directory, you can see there’s 2 default configuration perwira203@ubuntu~/etc/apache2/sites-available# ls\r000-default.conf default-ssl.conf\rThe 000-default.conf is for http service 000-default.conf\rThe default-ssl.conf is for https service default-ssl.conf\rThe configuration that on is the default http service, so you can copy it and make new configuration file sudo cp 000-default.conf myconfig.conf\rEdit your configuration file sudo nano myconfig.conf\rChange the path file of the configuration DocumentRoot /var/www/html\rto",
    "tags": [],
    "title": "Apache Server in Ubuntu",
    "uri": "/linux/apache/index.html"
  },
  {
    "breadcrumb": "PERWIRA203 Documentation \u003e Cisco Documentation",
    "content": "Voip git status\rgit add\rgit commit",
    "description": "Voip git status\rgit add\rgit commit",
    "tags": [],
    "title": "Voip",
    "uri": "/cisco/voip/index.html"
  },
  {
    "breadcrumb": "PERWIRA203 Documentation \u003e Linux Documentation",
    "content": "Step by Step : Update package of your linux sudo apt-get update\rInstall Bind server sudo apt-get install bind9\rChange directory to bind cd /etc/bind\rCopy file configuration db.127 to db.reverse, and db.local to db.forward sudo cp db.127 db.reverse | sudo cp db.local db.forward\rEdit db.reverse configuration, default config : ;\r; BIND reverse data file for local loopback interface\r;\r$TTL 604800\r@ IN SOA localhost. root.localhost. (\r1 ; Serial\r604800 ; Refresh\r86400 ; Retry\r2419200 ; Expire\r604800 ) ; Negative Cache TTL\r;\r@ IN NS localhost.\r1.0.0 IN PTR localhost.\rTo this : ;\r; BIND reverse data file for local loopback interface\r;\r$TTL 604800\r@ IN SOA contoh.local. root.contoh.local. (\r1 ; Serial\r604800 ; Refresh\r86400 ; Retry\r2419200 ; Expire\r604800 ) ; Negative Cache TTL\r;\r@ IN NS contoh.local.\r2 IN PTR contoh.local.",
    "description": "Step by Step : Update package of your linux sudo apt-get update\rInstall Bind server sudo apt-get install bind9\rChange directory to bind cd /etc/bind\rCopy file configuration db.127 to db.reverse, and db.local to db.forward sudo cp db.127 db.reverse | sudo cp db.local db.forward\rEdit db.reverse configuration, default config : ;\r; BIND reverse data file for local loopback interface\r;\r$TTL 604800\r@ IN SOA localhost. root.localhost. (\r1 ; Serial\r604800 ; Refresh\r86400 ; Retry\r2419200 ; Expire\r604800 ) ; Negative Cache TTL\r;\r@ IN NS localhost.\r1.0.0 IN PTR localhost.\rTo this : ;\r; BIND reverse data file for local loopback interface\r;\r$TTL 604800\r@ IN SOA contoh.local. root.contoh.local. (\r1 ; Serial\r604800 ; Refresh\r86400 ; Retry\r2419200 ; Expire\r604800 ) ; Negative Cache TTL\r;\r@ IN NS contoh.local.\r2 IN PTR contoh.local.",
    "tags": [],
    "title": "Bind server in Ubuntu",
    "uri": "/linux/bind/index.html"
  },
  {
    "breadcrumb": "PERWIRA203 Documentation",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "PERWIRA203 Documentation",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "PERWIRA203 Documentation",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]

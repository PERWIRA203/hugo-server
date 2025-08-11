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
    "content": "Step by Step : Update package of your linux sudo apt-get update Install package apache sudo apt-get install apache2 Change Directory to sites-available on directory apache cd /etc/apache2/sites-available In this directory, you can see there’s 2 default configuration perwira203@ubuntu~/etc/apache2/sites-available# ls 000-default.conf default-ssl.conf The 000-default.conf is for http service 000-default.conf The default-ssl.conf is for https service default-ssl.conf The configuration that on is the default http service, so you can copy it and make new configuration file sudo cp 000-default.conf myconfig.conf Edit your configuration file sudo nano myconfig.conf Change the path file of the configuration DocumentRoot /var/www/html to\nDocumentRoot /var/www/myconfig Save the file with press ctrl with x, and press y and enter for the changes Create the directory for our config sudo mkdir /var/www/myconfig Change directory to myconfig cd /var/www/myconfig Create the html file sudo touch index.html edit html file sudo nano index.html Write html file \u003c!DOCTYPE html\u003e \u003chtml\u003e \u003chead\u003e \u003ctitle\u003eMy Docs file\u003c/title\u003e \u003c/head\u003e \u003cbody\u003e \u003ch1\u003eMy Docs file\u003c/h1\u003e \u003cp\u003eMy Docs file\u003c/p\u003e \u003c/body\u003e \u003c/html\u003e Deactivate the default configuration file sudo a2dissite 000-default.conf Activate myconfig configuration file sudo a2ensite myconfig.conf Restart your apache server sudo systemctl reload apache2 This is how it’s gonna look",
    "description": "Step by Step : Update package of your linux sudo apt-get update Install package apache sudo apt-get install apache2 Change Directory to sites-available on directory apache cd /etc/apache2/sites-available In this directory, you can see there’s 2 default configuration perwira203@ubuntu~/etc/apache2/sites-available# ls 000-default.conf default-ssl.conf The 000-default.conf is for http service 000-default.conf The default-ssl.conf is for https service default-ssl.conf The configuration that on is the default http service, so you can copy it and make new configuration file sudo cp 000-default.conf myconfig.conf Edit your configuration file sudo nano myconfig.conf Change the path file of the configuration DocumentRoot /var/www/html to",
    "tags": [],
    "title": "Apache Server in Ubuntu",
    "uri": "/linux/apache/index.html"
  },
  {
    "breadcrumb": "PERWIRA203 Documentation \u003e Cisco Documentation",
    "content": "Voip git status git add git commit",
    "description": "Voip git status git add git commit",
    "tags": [],
    "title": "Voip",
    "uri": "/cisco/voip/index.html"
  },
  {
    "breadcrumb": "PERWIRA203 Documentation \u003e Linux Documentation",
    "content": "Step by Step : Update package of your linux sudo apt-get update Install Bind server sudo apt-get install bind9 Change directory to bind cd /etc/bind Copy file configuration db.127 to db.reverse, and db.local to db.forward sudo cp db.127 db.reverse | sudo cp db.local db.forward Edit db.reverse configuration, default config : ; ; BIND reverse data file for local loopback interface ; $TTL 604800 @ IN SOA localhost. root.localhost. ( 1 ; Serial 604800 ; Refresh 86400 ; Retry 2419200 ; Expire 604800 ) ; Negative Cache TTL ; @ IN NS localhost. 1.0.0 IN PTR localhost. To this : ; ; BIND reverse data file for local loopback interface ; $TTL 604800 @ IN SOA contoh.local. root.contoh.local. ( 1 ; Serial 604800 ; Refresh 86400 ; Retry 2419200 ; Expire 604800 ) ; Negative Cache TTL ; @ IN NS contoh.local. 2 IN PTR contoh.local.",
    "description": "Step by Step : Update package of your linux sudo apt-get update Install Bind server sudo apt-get install bind9 Change directory to bind cd /etc/bind Copy file configuration db.127 to db.reverse, and db.local to db.forward sudo cp db.127 db.reverse | sudo cp db.local db.forward Edit db.reverse configuration, default config : ; ; BIND reverse data file for local loopback interface ; $TTL 604800 @ IN SOA localhost. root.localhost. ( 1 ; Serial 604800 ; Refresh 86400 ; Retry 2419200 ; Expire 604800 ) ; Negative Cache TTL ; @ IN NS localhost. 1.0.0 IN PTR localhost. To this : ; ; BIND reverse data file for local loopback interface ; $TTL 604800 @ IN SOA contoh.local. root.contoh.local. ( 1 ; Serial 604800 ; Refresh 86400 ; Retry 2419200 ; Expire 604800 ) ; Negative Cache TTL ; @ IN NS contoh.local. 2 IN PTR contoh.local.",
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

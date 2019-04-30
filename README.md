# TEST Network-Frontend

* Frontend on Angular 7+ with Boostrap and Material Angular

## Setup:

- git clone https://github.com/pavel-malashko/Network-Frontend.git

- cd in terminal or command line

- npm install

- npm start



# Technical task

A technical task from "Labinvent" JSC.

## Requirements: 


### Description

When user opens `index.html` he should see a network settings page. Fields contains last saved data. 
Data must be persist in local storage or node.js server(advanced option).

![network_settings](https://user-images.githubusercontent.com/35889544/56999561-4e1a1f00-6bb8-11e9-9070-c8fc089b55f2.png)


All form fields are for the text input. The **"Wireless Network Name"** field is an exception. It should be a drop-down menu.

Fields marked with an asterisk should be mandatory if they were activated by user.

Radio-buttons in state **"Obtain an IP address automatically"** and **"Obtain DNS server address automatically"** makes fields groups 
unavailable and turns off their validation.

Checkbox **"Enable wifi"** does fields wifi settings available in the `true` state .

Checkbox **"Enable Wireless Security"** makes **"Security Key"** field available in the `true` state.

Field **"Wireless Network Name"** lists all available access points.
All points should be sorted by *__strength__*. Access points with *__favorite__* flag = `true`, should be shown on the top of the list.
Pressing **"&#x21bb;"** button sends new request to refresh access points list.

![network_settings_wifi_enabled](https://user-images.githubusercontent.com/35889544/56999576-625e1c00-6bb8-11e9-8ad6-ebe230cf7254.png)

When **"Save"** button pressed the configuration should be validated and saved in local storage or node.js server(advanced option).


### Stack

**You should use:**
* angular(preferred) or react for client
* browser local storage

**Advanced options:**
* node.js for server
* any SQL server or mongodb to keep saved configurations

**Please provide project build and run instructions in the README file**

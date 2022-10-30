import { Card} from 'reactstrap'
import DataTable from "react-data-table-component";
import React, { useEffect } from 'react';



const columns = [
  {
    id: 1,
    name: "IP",
    selector: (row) => row.IP,
    sortable: true,
    reorder: true
  },
  {
    id: 2,
    name: "Country",
    selector: (row) => row.Country,
    sortable: true,
    reorder: true
  },
  {
    id: 3,
    name: "URI",
    selector: (row) => row.URI,
    sortable: true,
    right: true,
    reorder: true
  },
  {
    id: 4,
    name: "Method",
    selector: (row) => row.Method,
    sortable: true,
    right: true,
    reorder: true
  },
  {
    id: 5,
    name: "UserAgent",
    selector: (row) => row.UserAgent,
    sortable: true,
    right: true,
    reorder: true
  },
  {
    id: 6,
    name: "Timestamp",
    selector: (row) => row.Timestamp,
    sortable: true,
    right: true,
    reorder: true
  },
  {
    id: 7,
    name: "RuleNameWithinRuleGroup",
    selector: (row) => row.RuleNameWithinRuleGroup,
    sortable: true,
    right: true,
    reorder: true
  },
  {
    id: 8,
    name: "Action",
    selector: (row) => row.Action,
    sortable: true,
    right: true,
    reorder: true
  }
];

const SecondPage = () => {

	const data = [
    {
        "IP": "212.71.255.211",
        "Country": "GB",
        "URI": "/s/531313e2435313e2234313e28313/_/;/META-INF/maven/com.atlassian.jira/jira-webapp-dist/pom.properties",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:38",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "134.209.149.230",
        "Country": "IN",
        "URI": "/ab2h",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:13:09",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalKnownBotDataCenter",
        "Action": "BLOCK"
    },
    {
        "IP": "135.125.246.189",
        "Country": "FR",
        "URI": "/.env",
        "Method": "GET",
        "UserAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36",
        "Timestamp": "22/10/29 21:32:10",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalKnownBotDataCenter",
        "Action": "BLOCK"
    },
    {
        "IP": "209.97.136.189",
        "Country": "GB",
        "URI": "/",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 22:21:26",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalKnownBotDataCenter",
        "Action": "BLOCK"
    },
    {
        "IP": "54.37.163.160",
        "Country": "FR",
        "URI": "/",
        "Method": "POST",
        "UserAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36",
        "Timestamp": "22/10/29 19:44:20",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalKnownBotDataCenter",
        "Action": "BLOCK"
    },
    {
        "IP": "198.244.154.102",
        "Country": "GB",
        "URI": "/",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:55:52",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalKnownBotDataCenter",
        "Action": "BLOCK"
    },
    {
        "IP": "43.153.10.221",
        "Country": "US",
        "URI": "/",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:54:07",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "69.164.213.190",
        "Country": "US",
        "URI": "/about",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:44",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "167.172.246.222",
        "Country": "US",
        "URI": "/.env",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:38",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "69.164.213.190",
        "Country": "US",
        "URI": "/config.json",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:44",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "51.81.167.146",
        "Country": "US",
        "URI": "/",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:35",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalKnownBotDataCenter",
        "Action": "BLOCK"
    },
    {
        "IP": "69.164.213.190",
        "Country": "US",
        "URI": "/server-status",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:43",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "69.164.213.190",
        "Country": "US",
        "URI": "/s/030323e2230323e2135313e24353/_/;/META-INF/maven/com.atlassian.jira/jira-webapp-dist/pom.properties",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:43",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "134.209.149.230",
        "Country": "IN",
        "URI": "/ab2g",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:13:09",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalKnownBotDataCenter",
        "Action": "BLOCK"
    },
    {
        "IP": "135.125.246.189",
        "Country": "FR",
        "URI": "/",
        "Method": "POST",
        "UserAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36",
        "Timestamp": "22/10/29 21:32:09",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalKnownBotDataCenter",
        "Action": "BLOCK"
    },
    {
        "IP": "134.209.211.100",
        "Country": "US",
        "URI": "/.env",
        "Method": "GET",
        "UserAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36",
        "Timestamp": "22/10/29 21:49:02",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalKnownBotDataCenter",
        "Action": "BLOCK"
    },
    {
        "IP": "134.209.211.100",
        "Country": "US",
        "URI": "/",
        "Method": "POST",
        "UserAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36",
        "Timestamp": "22/10/29 21:49:02",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalKnownBotDataCenter",
        "Action": "BLOCK"
    },
    {
        "IP": "178.128.43.0",
        "Country": "GB",
        "URI": "/ecp/Current/exporttool/microsoft.exchange.ediscovery.exporttool.application",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:43",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "178.128.43.0",
        "Country": "GB",
        "URI": "/debug/default/view?panel=config",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:43",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "167.172.246.222",
        "Country": "US",
        "URI": "/api/v2/cmdb/system/admin/admin",
        "Method": "PUT",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:38",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalKnownBotDataCenter",
        "Action": "BLOCK"
    },
    {
        "IP": "69.164.213.190",
        "Country": "US",
        "URI": "/v2/_catalog",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:44",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "178.128.43.0",
        "Country": "GB",
        "URI": "/about",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:44",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "43.153.10.221",
        "Country": "US",
        "URI": "/",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:53",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "142.93.49.33",
        "Country": "US",
        "URI": "/",
        "Method": "HEAD",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:56",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalKnownBotDataCenter",
        "Action": "BLOCK"
    },
    {
        "IP": "212.71.255.211",
        "Country": "GB",
        "URI": "/?rest_route=/wp/v2/users/",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:38",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "174.138.12.30",
        "Country": "NL",
        "URI": "/ab2g",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 21:17:26",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalKnownBotDataCenter",
        "Action": "BLOCK"
    },
    {
        "IP": "174.138.12.30",
        "Country": "NL",
        "URI": "/",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 21:17:33",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalKnownBotDataCenter",
        "Action": "BLOCK"
    },
    {
        "IP": "69.164.213.190",
        "Country": "US",
        "URI": "/.DS_Store",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:43",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "167.248.133.120",
        "Country": "US",
        "URI": "/",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 21:27:26",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalNonBrowserUserAgent",
        "Action": "BLOCK"
    },
    {
        "IP": "178.128.43.0",
        "Country": "GB",
        "URI": "/",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:38",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalKnownBotDataCenter",
        "Action": "BLOCK"
    },
    {
        "IP": "192.241.213.175",
        "Country": "US",
        "URI": "/ecp/Current/exporttool/microsoft.exchange.ediscovery.exporttool.application",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 21:40:09",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalKnownBotDataCenter",
        "Action": "BLOCK"
    },
    {
        "IP": "69.164.213.190",
        "Country": "US",
        "URI": "/info.php",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:43",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "209.97.136.189",
        "Country": "GB",
        "URI": "/ab2g",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 22:21:17",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalKnownBotDataCenter",
        "Action": "BLOCK"
    },
    {
        "IP": "209.97.136.189",
        "Country": "GB",
        "URI": "/ab2h",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 22:21:18",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalKnownBotDataCenter",
        "Action": "BLOCK"
    },
    {
        "IP": "178.128.43.0",
        "Country": "GB",
        "URI": "/",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:43",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalKnownBotDataCenter",
        "Action": "BLOCK"
    },
    {
        "IP": "69.164.213.190",
        "Country": "US",
        "URI": "/",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:38",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalNonBrowserUserAgent",
        "Action": "BLOCK"
    },
    {
        "IP": "167.172.246.222",
        "Country": "US",
        "URI": "/ecp/Current/exporttool/microsoft.exchange.ediscovery.exporttool.application",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:38",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "54.37.163.160",
        "Country": "FR",
        "URI": "/.env",
        "Method": "GET",
        "UserAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36",
        "Timestamp": "22/10/29 19:44:20",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalKnownBotDataCenter",
        "Action": "BLOCK"
    },
    {
        "IP": "178.128.43.0",
        "Country": "GB",
        "URI": "/.git/config",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:43",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "69.164.213.190",
        "Country": "US",
        "URI": "/login.action",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:44",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "212.71.255.211",
        "Country": "GB",
        "URI": "/server-status",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:38",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "167.172.246.222",
        "Country": "US",
        "URI": "/config.json",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:39",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "178.128.43.0",
        "Country": "GB",
        "URI": "/config.json",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:44",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "178.128.43.0",
        "Country": "GB",
        "URI": "/v2/_catalog",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:44",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "167.172.246.222",
        "Country": "US",
        "URI": "/about",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:39",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "167.172.246.222",
        "Country": "US",
        "URI": "/login.action",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:39",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "43.153.10.221",
        "Country": "US",
        "URI": "/",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:51",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "212.71.255.211",
        "Country": "GB",
        "URI": "/.env",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:38",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "167.172.246.222",
        "Country": "US",
        "URI": "/v2/_catalog",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:39",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "43.153.10.221",
        "Country": "US",
        "URI": "/",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:42",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "43.135.86.121",
        "Country": "HK",
        "URI": "/",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 21:04:13",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalNonBrowserUserAgent",
        "Action": "BLOCK"
    },
    {
        "IP": "167.172.246.222",
        "Country": "US",
        "URI": "/",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:38",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalKnownBotDataCenter",
        "Action": "BLOCK"
    },
    {
        "IP": "174.138.12.30",
        "Country": "NL",
        "URI": "/ab2h",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 21:17:27",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalKnownBotDataCenter",
        "Action": "BLOCK"
    },
    {
        "IP": "69.164.213.190",
        "Country": "US",
        "URI": "/.env",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:43",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "167.248.133.120",
        "Country": "US",
        "URI": "/",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 21:27:26",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalNonBrowserUserAgent",
        "Action": "BLOCK"
    },
    {
        "IP": "69.164.213.190",
        "Country": "US",
        "URI": "/.git/config",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:43",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "167.248.133.120",
        "Country": "US",
        "URI": "/",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 21:27:26",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalNonBrowserUserAgent",
        "Action": "BLOCK"
    },
    {
        "IP": "167.248.133.120",
        "Country": "US",
        "URI": "/",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 21:27:26",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalNonBrowserUserAgent",
        "Action": "BLOCK"
    },
    {
        "IP": "212.71.255.211",
        "Country": "GB",
        "URI": "/v2/_catalog",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:38",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "212.71.255.211",
        "Country": "GB",
        "URI": "/config.json",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:38",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "192.241.212.172",
        "Country": "US",
        "URI": "/owa/auth/x.js",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 21:37:49",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalKnownBotDataCenter",
        "Action": "BLOCK"
    },
    {
        "IP": "192.241.212.107",
        "Country": "US",
        "URI": "/owa/auth/logon.aspx",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 21:39:55",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalKnownBotDataCenter",
        "Action": "BLOCK"
    },
    {
        "IP": "69.164.213.190",
        "Country": "US",
        "URI": "/?rest_route=/wp/v2/users/",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:43",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "167.172.246.222",
        "Country": "US",
        "URI": "/?rest_route=/wp/v2/users/",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:38",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "69.164.213.190",
        "Country": "US",
        "URI": "/debug/default/view?panel=config",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:43",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "212.71.255.211",
        "Country": "GB",
        "URI": "/telescope/requests",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:38",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "205.210.31.186",
        "Country": "US",
        "URI": "/",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 22:17:13",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#SignalNonBrowserUserAgent",
        "Action": "BLOCK"
    },
    {
        "IP": "167.172.246.222",
        "Country": "US",
        "URI": "/.git/config",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:38",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "178.128.43.0",
        "Country": "GB",
        "URI": "/?rest_route=/wp/v2/users/",
        "Method": "GET",
        "UserAgent": "None",
        "Timestamp": "22/10/29 20:53:43",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesBotControlRuleSet#CategoryHttpLibrary",
        "Action": "BLOCK"
    },
    {
        "IP": "95.182.121.73",
        "Country": "RU",
        "URI": "/_ignition/execute-solution",
        "Method": "POST",
        "UserAgent": "None",
        "Timestamp": "22/10/29 21:22:19",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesCommonRuleSet#GenericLFI_BODY",
        "Action": "BLOCK"
    },
    {
        "IP": "54.91.88.212",
        "Country": "US",
        "URI": "/.env.backup",
        "Method": "GET",
        "UserAgent": "Mozilla/5.0 (Windows NT 10.0; rv:91.0) Gecko/20100101 Firefox/91.0",
        "Timestamp": "22/10/29 20:34:31",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesCommonRuleSet#RestrictedExtensions_URIPATH",
        "Action": "BLOCK"
    },
    {
        "IP": "95.182.121.73",
        "Country": "RU",
        "URI": "/_ignition/execute-solution",
        "Method": "POST",
        "UserAgent": "None",
        "Timestamp": "22/10/29 21:22:29",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesCommonRuleSet#SizeRestrictions_BODY",
        "Action": "BLOCK"
    },
    {
        "IP": "95.182.121.73",
        "Country": "RU",
        "URI": "/_ignition/execute-solution",
        "Method": "POST",
        "UserAgent": "None",
        "Timestamp": "22/10/29 21:22:30",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesCommonRuleSet#GenericLFI_BODY",
        "Action": "BLOCK"
    },
    {
        "IP": "95.182.121.73",
        "Country": "RU",
        "URI": "/_ignition/execute-solution",
        "Method": "POST",
        "UserAgent": "None",
        "Timestamp": "22/10/29 21:22:13",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesCommonRuleSet#GenericLFI_BODY",
        "Action": "BLOCK"
    },
    {
        "IP": "95.182.121.73",
        "Country": "RU",
        "URI": "/_ignition/execute-solution",
        "Method": "POST",
        "UserAgent": "None",
        "Timestamp": "22/10/29 21:22:14",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesCommonRuleSet#GenericLFI_BODY",
        "Action": "BLOCK"
    },
    {
        "IP": "95.182.121.73",
        "Country": "RU",
        "URI": "/_ignition/execute-solution",
        "Method": "POST",
        "UserAgent": "None",
        "Timestamp": "22/10/29 21:22:25",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesCommonRuleSet#GenericLFI_BODY",
        "Action": "BLOCK"
    },
    {
        "IP": "95.182.121.73",
        "Country": "RU",
        "URI": "/_ignition/execute-solution",
        "Method": "POST",
        "UserAgent": "None",
        "Timestamp": "22/10/29 21:22:17",
        "RuleNameWithinRuleGroup": "AWS#AWSManagedRulesCommonRuleSet#GenericLFI_BODY",
        "Action": "BLOCK"
    }
]

  return (
    <Card>
      <DataTable
          title="Metrics"
          columns={columns}
          data={data}
          pagination
        />
    </Card>
  )
}

export default SecondPage

/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Home from "views/Home.js";
import Summary from "views/Summary.js";
import Ask from "views/Ask.js";
import Letter from "views/Letter.js";
import ContactUs from "views/ContactUs.js";
import Team from "views/Team.js"

var routes = [
  {
    path: "/home",
    name: "Home",
    icon: "tim-icons icon-bank",
    component: Home,
    layout: "",
  },
  {
    path: "/summary",
    name: "Summary",
    icon: "tim-icons icon-paper",
    component: Summary,
    layout: "",
  },
  {
    path: "/ask",
    name: "Chat Assistant",
    icon: "tim-icons icon-chat-33",
    component: Ask,
    layout: "",
  },
  {
    path: "/letter",
    name: "Appeal",
    icon: "tim-icons icon-bullet-list-67",
    component: Letter,
    layout: "",
  },
  {
    path: "/contactUs",
    name: "Contact Us",
    icon: "tim-icons icon-mobile",
    component: ContactUs,
    layout: "",
  },
  {
    path: "/team",
    name: "Team",
    icon: "tim-icons icon-single-02",
    component: Team,
    layout: "",
  },
];
export default routes;

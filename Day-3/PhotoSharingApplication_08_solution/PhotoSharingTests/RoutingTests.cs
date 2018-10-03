using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Web.Routing;
using System.Web.Mvc;
using PhotoSharingTests.Doubles;
using PhotoSharingApplication;


namespace PhotoSharingTests
{
    [TestClass]
    public class RoutingTests
    {
        [TestMethod]
        public void Test_Default_Route_ControllerOnly()
        {
            var context = new FakeHttpContextForRouting(requestUrl: "~/ControllerName");

            /* 
             * Writing a Routing Test
             * After creating an HTTP context test double, you can write unit tests for each route 
             * in the routing table. These unit tests adopt the following general phases:
             */

            /* 
             * Arrange. 
             * In the Arrange phase of the test, you can create a new HTTP context from your test 
             * double class. 
             * You can set the request URL for this object to be the URL you want to test. 
             * You can then create a new route collection and call the RouteConfig.RegisterRoutes() method 
             * in your web application.
             */
            var routes = new RouteCollection();
            RouteConfig.RegisterRoutes(routes);

            /* 
             * Act. 
             * In the Act phase, you can test the routes by calling the GetRouteData() method of the route collection. 
             * You can then pass the fake HTTP context to this method.
             */
            RouteData routeData = routes.GetRouteData(context);

            /* 
             * 	Assert. 
             * 	In the Assert phase, you can use the RouteData.Values collection to check that 
             * 	the controller, action and other values are assigned correctly.
             */
            Assert.IsNotNull(routeData);
            Assert.AreEqual("ControllerName", routeData.Values["controller"]);
            Assert.AreEqual("Index", routeData.Values["action"]);
            Assert.AreEqual(UrlParameter.Optional, routeData.Values["id"]);
        }

        [TestMethod]
        public void Test_Photo_Route_With_PhotoID()
        {
            var context = new FakeHttpContextForRouting(requestUrl: "~/photo/2");

            var routes = new RouteCollection();
            RouteConfig.RegisterRoutes(routes);

            RouteData routeData = routes.GetRouteData(context);

            Assert.IsNotNull(routeData);
            Assert.AreEqual("Photo", routeData.Values["controller"]);
            Assert.AreEqual("Display", routeData.Values["action"]);
            Assert.AreEqual("2", routeData.Values["id"]);
        }

        [TestMethod]
        public void Test_Photo_Title_Route()
        {
            var context = new FakeHttpContextForRouting(requestUrl: "~/photo/title/my%20title");

            var routes = new RouteCollection();
            RouteConfig.RegisterRoutes(routes);

            RouteData routeData = routes.GetRouteData(context);

            Assert.IsNotNull(routeData);
            Assert.AreEqual("Photo", routeData.Values["controller"]);
            Assert.AreEqual("DisplayByTitle", routeData.Values["action"]);
            Assert.AreEqual("my%20title", routeData.Values["title"]);
        }
    }
}

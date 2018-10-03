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
            /* 
             * In the Test_Default_Route_ControllerOnly test, create a new var by using 
             * the following information:
             * Name: context
             * Type: FakeHttpContextForRouting
             * Request URL: ~/ControllerName
             */
            var context = new FakeHttpContextForRouting(requestUrl: "~/ControllerName");

            /*
             * Create a new RouteCollection object named routes and pass it to the 
             * RouteConfig.RegisterRoutes() method.
             */
            var routes = new RouteCollection();
            RouteConfig.RegisterRoutes(routes);

            /* 
             * Call the routes.GetRouteData() method to run the test by using the following information:
             * Return type: RouteData
             * Return object name: routeData
             * Method: routes.GetRouteData
             * HTTP context object: context
             */
            RouteData routeData = routes.GetRouteData(context);

            /* 
             * Assert the following facts:
             * That routeData is not null
             * That the controller value in routeData is "ControllerName"
             * That the action value in routeData is "Index"
             * That the id value in routeData is "UrlParameter.Optional"  
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

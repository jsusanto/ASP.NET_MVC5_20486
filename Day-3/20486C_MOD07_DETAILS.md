﻿# Module 7: Structuring ASP.NET MVC 5 Web Applications

# Lab: Structuring ASP.NET MVC 5 Web Applications

### Lab Setup

Estimated Time: **40 minutes**

### Preparation Steps

1. Ensure that you have cloned the 20486C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20486-DevelopingASPNETMVCWebApplications/tree/master/Allfiles

### Exercise 1: Using the Routing Engine

#### Task 1: Test the routing configuration.

1. On the taskbar, click the **File Explorer** icon.
2. In the **Libraries** window, go to **Allfiles\20486c\Mod07\LabFiles\PhotoSharingApplication_07_begin**, and then double-click **PhotoSharingApplication.sln**.
3. In the **Solution Explorer** pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, expand **Photo Sharing Tests**, and then expand **Doubles**.
4. In the **Solution Explorer** pane, right-click **Doubles**, point to **Add**, and then click **Existing Item**.
5. In the **Add Existing Item – PhotoSharingTests** dialog box, go to **Allfiles/20486C/Mod07/Labfiles/Fake Http Classes**, click **FakeHttpClasses.cs**, and then click **Add**.
6. In the **Solution Explorer** pane, under **PhotoSharingTests**, right-click **References**, and then click **Add Reference**.
7. In the navigation pane of the **Reference Manager – PhotoSharingTests** dialog box, under **Assemblies**, click **Framework**.
8. In the list of assemblies, click **System.Web**, select the check box corresponding to **System.Web**, and then click **OK**.
9. In the **Solution Explorer** pane, right-click **PhotoSharingTests**, point to **Add**, and then click **Unit Test**.
10. In the **Solution Explorer** pane, right-click **UnitTest1.cs**, click **Rename**, type **RoutingTests**, and then press Enter.
11. In the **Microsoft Visual Studio** dialog box, click **Yes**.
12. In the **RoutingTests.cs** code window, place the mouse cursor at the end of the **Microsoft.VisualStudio.TestTools.UnitTesting** namespace, press Enter, and then type the following code.

  ```cs
        using System.Web.Routing;
        using System.Web.Mvc;
        using PhotoSharingTests.Doubles;
        using PhotoSharingApplication;
```
13. In the **RoutingTests.cs** code window, locate the following code, and then select the code.

  ```cs
        public void TestMethod1()
```
14. Replace the selected code with the following code.

  ```cs
        public void Test_Default_Route_ControllerOnly()
```
15. In the **Test_Default_Route_ControllerOnly** test method code block, press Enter twice, and then type the following code.

  ```cs
        var context = new FakeHttpContextForRouting(requestUrl: "~/ControllerName");
```
16. In the **RoutingTests.cs** code window, place the mouse cursor at the end of the **var context** code block, press Enter, and then type the following code.

  ```cs
        var routes = new RouteCollection();
        RouteConfig.RegisterRoutes(routes);
```
17. Place the mouse cursor at the end of the **RouteConfig.RegisterRoutes()** method code block, press Enter, and then type the following code.

  ```css
        RouteData routeData = routes.GetRouteData(context);
```
18. Place the mouse cursor at the end of the **routes.GetRouteData()** method code block, press Enter, and then type the following code.

  ```cs
        Assert.IsNotNull(routeData);
        Assert.AreEqual("ControllerName", routeData.Values["controller"]);
        Assert.AreEqual("Index", routeData.Values["action"]);
        Assert.AreEqual(UrlParameter.Optional, routeData.Values["id"]);
```
19. Place the mouse cursor after the **Test_Default_Route_ControllerOnly()** test method but inside the **RoutingTests** class code block, press Enter, and then type the following code.

  ```cs
        [TestMethod]
        public void Test_Photo_Route_With_PhotoID()
        {
        }
```
20. In the **Test_Photo_Route_With_PhotoID** test method code block, type the following code.

  ```cs
        var context = new FakeHttpContextForRouting(requestUrl: "~/photo/2");
```
21. Place the mouse cursor at the end of the **var context** code block that you just typed, press Enter, and then type the following code.

  ```cs
        var routes = new RouteCollection();
        RouteConfig.RegisterRoutes(routes);
```
22. Place the mouse cursor at the end of the **RouteConfig.RegisterRoutes()** method code block, press Enter, and then type the following code.

  ```cs
        RouteData routeData = routes.GetRouteData(context);
```
23. Place the mouse cursor at the end of the **routes.GetRouteData()** method code block, press Enter, and then type the following code.

  ```cs
        Assert.IsNotNull(routeData);
        Assert.AreEqual("Photo", routeData.Values["controller"]);
        Assert.AreEqual("Display", routeData.Values["action"]);
        Assert.AreEqual("2", routeData.Values["id"]);
```
24. Place the mouse cursor after the **Test_Photo_Route_With_PhotoID** test method but inside **RoutingTests** class code block, and then type the following code.

  ```cs
        [TestMethod]
        public void Test_Photo_Title_Route()
        {
        }
```
25. In the **Test\_Photo\_Title\_Route** test method code block, type the following code.

  ```cs
        var context = new FakeHttpContextForRouting(requestUrl: "~/photo/title/my%20title");
```
26. Place the mouse cursor at the end of the **var context** code block that you just typed, press Enter, and then type the following code.

  ```cs
        var routes = new RouteCollection();
        RouteConfig.RegisterRoutes(routes);
```
27. Place the mouse cursor at the end of the **RouteConfig.RegisterRoutes()** method code block, press Enter, and then type the following code.

  ```cs
        RouteData routeData = routes.GetRouteData(context);
```
28. Place the mouse cursor at the end of the **routes.GetRouteData()** method code block, press Enter., and then type the following code.

  ```cs
        Assert.IsNotNull(routeData);
        Assert.AreEqual("Photo", routeData.Values["controller"]);
        Assert.AreEqual("DisplayByTitle", routeData.Values["action"]);
        Assert.AreEqual("my%20title", routeData.Values["title"]);
```
29. On the **TEST** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Run**, and then click **All Tests**.
30. In the **Test Explorer** pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, expand **Passed Tests**, and then note that the **Test_Default_Route_Controller_Only** route test has passed.
31. In the **Test Explorer** pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, under **Failed Tests**, note that the **Test_Photo_Route_With_PhotoID** and the **Test_Photo Title_Route** route tests have failed.
32. In the **Test Explorer** pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Close**.

#### Task 2: Add and test the Photo ID route.

1. In the **Solution Explorer** pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, expand **PhotoSharingApplication**, expand **App_Start**, and then click **RouteConfig.cs**.
2. In the **RouteConfig.cs** code window, locate the following code.

  ```cs
       routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
```
3. Place the mouse cursor at the end of the code, press Enter twice, and then type the following code.

  ```cs
       routes.MapRoute(name: "PhotoRoute",url: "photo/{id}",defaults: new { controller = "Photo", action = "Display" },constraints: new { id = "[0-9]+" });
```
4. On the **TEST** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Run**, and then click **All Tests**.
5. In the **Test Explorer** pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, under **Passed Tests**, note that the **Test_Photo_Route_With_PhotoID** route test has passed.
6. In the **Test Explorer** pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Close**.

#### Task 3: Add and test the Photo Title route.

1. In the **RouteConfig.cs** code window, place the mouse cursor after the **PhotoRoute** route but before the **Default** route code block, and then type the following code.

  ```cs
       routes.MapRoute(name: "PhotoTitleRoute",url: "photo/title/{title}", defaults: new { controller = "Photo",action = "DisplayByTitle" });  
```
2. In the **Solution Explorer** pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, under **PhotoSharingApplication**, expand **Controllers**, and then click **PhotoController.cs**.
3. In the **PhotoController.cs** code window, place the mouse cursor after the **Display** action code block, press Enter twice, and then type the following code.

  ```cs
       public ActionResult DisplayByTitle(string title)
       {
       }
```
4. In the **DisplayByTitle** action method code block, type the following code.

  ```cs
       Photo photo = context.FindPhotoByTitle(title);
       if (photo == null)
       {
          return HttpNotFound();
       }
       return View("Display", photo);
```
5. On the **TEST** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Run**, and then click **All Tests**.
6. In the **Test Explorer** pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, under **Passed Tests**, note that the **Test_Photo_Title_Route** route test has passed.
7. In the **Test Explorer** pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Close**.

#### Task 4: Try out the new routes.

1. On the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Start Debugging**.
2. On the **Welcome to Adventure Works Photo Sharing! Use this site to share your adventures** page, right-click **Display** corresponding to any image, and then click **Properties**.
3. In the **Properties** dialog box, note that the **Address** property does not include the name of the **Display** action method, and then click **Cancel**.
4. On the **Welcome to Adventure Works Photo Sharing! Use this site to share your adventures** page, click **Display** corresponding to any image.
5. In the Address bar of the **Microsoft Edge** window, note that the URL does not include the name of the **Display** action method.
6. In the Address bar of the **Microsoft Edge** window, select **/photo/&lt;ID&gt;** in the URL, and then press Delete.
7. In the Address bar, append the existing URL with **/photo/title/sample photo 3**, and then click **Go to**.

   >**Note:** Note that Sample Photo 3 displays.

8. In the **Microsoft Edge** window, click **Close**.
9. On the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Stop Debugging**.

>**Results**: After completing this exercise, you should have successfully created a Photo Sharing application with three configured routes that enable visitors to easily locate photos by using logical URLs.

### Exercise 2: Optional—Building Navigation Controls

#### Task 1: Install the MVC site map provider.

1. On the **Tools** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, point to **NuGet Package Manager** and then click **Package Manager Console**.
2. In **Package Manager Console** window, type the following command and then press Enter.

  ```cs
       Install-Package MvcSiteMapProvider.MVC5 -Version 4.6.22
```
#### Task 2: Configure the MVC site map provider.

1. In the **Solution Explorer** pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Mvc.sitemap**.
2. In the **Mvc.sitemap** code window, select the following code, and then press Delete.

  ```cs
       <mvcSiteMapNode title="About" controller="Home" action="About"/>
```
3. In the **&lt;mvcSiteMapNode&gt;** element, type the following code.

  ```cs
       <mvcSiteMapNode title="All Photos" controller="Photo" action="Index" key="AllPhotos" />
```
4. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save Mvc.sitemap**.
5. On the **BUILD** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Build Solution**.

#### Task 3: Render menus and breadcrumb trails.

1. In the **Solution Explorer** pane, expand **Views**, expand **Home**, and then click **Index.csthml**.
2. In the **Index.cshtml** code window, place the mouse cursor after the **&lt;/p&gt;** tag, press Enter, type the following code, and then press Enter.

  ```cs
       Menu: @Html.MvcSiteMap().Menu(false, false, true)
```
3. In the **Index.cshtml** code window, place the mouse cursor at the end of the **MvcSiteMap** code block, press Enter, and then type the following code.

  ```cs
       Breadcrumb Trail: @Html.MvcSiteMap().SiteMapPath()
```
4. In the **Solution Explorer** pane, under **Views**, expand **Photo**, and then click **Index.csthml**.
5. In the **Index.cshtml** code window, place the mouse cursor after the **&lt;div&gt;** tag, press Enter, type the following code, and then press Enter.

  ```cs
       Menu: @Html.MvcSiteMap().Menu(false, false, true)
```
6. In the **Index.cshtml** code window, place the mouse cursor at the end of the **MvcSiteMap** code block, press Enter, and then type the following code.

  ```cs
       Breadcrumb Trail: @Html.MvcSiteMap().SiteMapPath()
```
#### Task 4: Try out the menus.

1. On the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Start Debugging**.
2. On the **Welcome to Adventures Works Photo Sharing** page, under **Menu**, click **All Photos**, and then note that the **All Photos** page displays.
3. In the **Breadcrumb Trail** section of the **All Photos** page, click **Home**.
4. In the **Microsoft Edge** window, click **Close**.
5. In the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Close**.
6. On the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Stop Debugging**.


>**Results**: After completing this exercise, you should have successfully created a Photo Sharing application with a simple site map, menu, and breadcrumb control.

©2016 Microsoft Corporation. All rights reserved. 

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.

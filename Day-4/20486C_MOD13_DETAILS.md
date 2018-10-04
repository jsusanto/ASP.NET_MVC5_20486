# Module 13: Implementing Web APIs in ASP.NET MVC 5 Web Applications

# Lab: Implementing APIs in ASP.NET MVC 5 Web Applications

### Lab Setup

Estimated Time: **60 minutes**

Before starting this lab, you need to perform the following steps:

1. Ensure that you have cloned the 20486C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20486-DevelopingASPNETMVCWebApplications/tree/master/Allfiles
2. Go to **Allfiles/20486C/Mod11/Labfiles/PhotoSharingApplication_11_begin/PhotoSharingApplication**, and then copy the **web.config** file.  
3. Go to **Allfiles/20486C/Mod13/Labfiles/PhotoSharingApplication_13_begin/PhotoSharingApplication**, and then paste the **web.config** file.  

### Exercise 1: Adding a Web API to the Photo Sharing Application

#### Task 1: Add a Photo API controller.

1. On the taskbar, click the **File Explorer** icon.
2. In the **Libraries** window, go to **Allfiles\20486C\Mod13\Labfiles\PhotoSharingApplication_13_begin**, and then double-click **PhotoSharingApplication.sln**.
3. On the **BUILD** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Build Solution**.
4. In the **Solution Explorer** pane of the **PhotoSharingApplication – Microsoft Visual Studio** window, under **PhotoSharingApplication**, right-click **Controllers**, point to **Add**, and then click **Controller**.
5. In the **Template** list, click **Web API 2 Controller - Empty**, and then click **Add**.
6. In the **Controller name** box of the **Add Controller** dialog box, type **PhotoApiController**, and then click **Add**.
7. In the PhotoApiController.cs code window, locate the following code.

  ```cs
        using System.Web.Http;
```
8. Place the cursor at the end of the located code, press Enter, and then type the following code.

  ```cs
        using PhotoSharingApplication.Models;
```
9. Place the cursor within the **PhotoApiController** class code block, and then type the following code.

  ```cs
        private IPhotoSharingContext context = new PhotoSharingContext();
```
10. Place the cursor at the end of the code you just added, press Enter twice, and then type the following code.

  ```cs
        public List<Photo> GetAllPhotos()
        {
        }
```
11. Place the cursor within the **GetAllPhotos** action code block you just created, and then type the following code.

  ```cs
        return context.Photos.ToList();
```
12. Place the cursor in the **PhotoApiController** class, but outside any action code block, and then type the following code.

  ```cs
        public Photo GetPhotoById(int id)
        {
        }
```
13. Place the cursor within the **GetPhotoById** action code block you just created, and then type the following code.

  ```cs
        Photo photo = context.FindPhotoById(id);
```
14. Place the cursor at the end of the code you just added, press Enter, and then type the following code.

  ```cs
        if (photo == null)
        {
           throw new HttpResponseException(HttpStatusCode.NotFound);
        }
```
15. Place the cursor at the end of the **if** statement code block you just created, press Enter, and then type the following code.

  ```cs
        return photo;
```
16. Place the cursor in the **PhotoApiController** class, but outside any action code block, and then type the following code.

  ```cs
        public Photo GetPhotoByTitle(string title)
        {
        }
```
17. Place the cursor within the **GetPhotoByTitle** action code block you just created, and then type the following code.

  ```cs
        Photo photo = context.FindPhotoByTitle(title);
```
18. Place the cursor at the end of the code you just added, press Enter, and then type the following code.

  ```cs
        if (photo == null)
        {
           throw new HttpResponseException(HttpStatusCode.NotFound);
        }
```
19. Place the cursor at the end of the **if** statement code block you just created, press Enter, and then type the following code.

  ```cs
        return photo;
```
20. On the **FILE** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Save All**.

#### Task 2: Configure API routes.

1. In the **Solution Explorer** pane, expand **App_Start**, and then double-click **WebApiConfig.cs**.
2. In the WebApiConfig.cs code window, locate the following code, select the code, and then press Delete.

  ```cs
       config.Routes.MapHttpRoute(
          name: "DefaultApi",
          routeTemplate: "api/{controller}/{id}",
          defaults: new { id = RouteParameter.Optional }
       );
```
3. Place the cursor within the **Register** method code block, and then type the following code.

  ```cs
       config.Routes.MapHttpRoute(
          name: "PhotoApi",
          routeTemplate: "api/photos/{id}",
          defaults: new { controller = "PhotoApi", action = "GetPhotoById" },
          constraints: new { id = "[0-9]+" }
       );
```
4. Place the cursor at the end of the **PhotoApi** route code block you just added, press Enter twice, and then type the following code.

  ```cs
       config.Routes.MapHttpRoute(
          name: "PhotoTitleApi",
          routeTemplate: "api/photos/{title}",
          defaults: new { controller = "PhotoApi", action = "GetPhotoByTitle" }
       );
```
5. Place the cursor at the end of the **PhotoTitleApi** route code block you just added, press Enter twice, and then type the following code.

  ```cs
       config.Routes.MapHttpRoute(
          name: "PhotosApi",
          routeTemplate: "api/photos",
          defaults: new { controller = "PhotoApi", action = "GetAllPhotos" }
       );
```
6. On the **FILE** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Save All**.

#### Task 3: Configure media-type formatters.

1. In the WebApiConfig.cs code window, place the cursor at the end of the code you just typed, press Enter twice, and then type the following code.

  ```cs
       var json = config.Formatters.JsonFormatter;
```
2. Place the cursor at the end of the **json** variable code block you just added, press Enter, and then type the following code.

  ```cs
       json.SerializerSettings.PreserveReferencesHandling = Newtonsoft.Json.PreserveReferencesHandling.Objects;
```
3. Place the cursor at the end the code you just added, press Enter, and then type the following code.

  ```cs
       config.Formatters.Remove(config.Formatters.XmlFormatter);
```
4. On the **FILE** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Save All**.

#### Task 4: Test the Web API with Microsoft Edge.

1. On the **DEBUG** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Start Debugging**.

    >**Note:** The Adventure Works Photo Sharing page is displayed.

2. In the Address bar of the Microsoft Edge window, type **http://localhost:[port]/api/photos/4**, and then press Enter.
3. In the Microsoft Edge window, note that the Title property is **Sample Photo 4**.
4. In the Address bar of the Microsoft Edge window, replce the last character '4' with **sample photo 5**, and then press **Enter**.
5. In the Microsoft Edge window, note that the Title property is **Sample Photo 5**.
6. In the Microsoft Edge window, click **Close**.
7. In **PhotoSharingApplication – Microsoft Visual Studio** window, click **Stop Debugging**.

>**Results**: After completing this exercise, you should have successfully created a simple Web API for an ASP.NET MVC 5 web application.

### Exercise 2: Using the Web API for a Bing Maps Display

#### Task 1: Create a new template view.

1. In the **Solution Explorer** pane, expand **Views**, and then expand **Shared**.
2. In the **Solution Explorer** pane, under **Shared**, right-click **_MainLayout.cshtml**, and then click **Copy**.
3. In the **Solution Explorer** pane, right-click **Shared**, and then click **Paste**.
4. In the **Solution Explorer** pane, under **Shared**, right-click **Copy of _MainLayout.cshtml**, and then click **Rename**.
5. In the **Solution Explorer** pane, rename **Copy of _MainLayout.cshtml** as **_MapLayout.cshtml**, and then press Enter.
6. In the **Solution Explorer** pane, double-click **_MapLayout.cshtml**.
7. In the _MapLayout.cshtml code window, locate the following code.

  ```cs
       <!DOCTYPE html>
```
8. Replace the located code with the following code.

  ```cs
       <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```
9. In the _MapLayout.cshtml code window, locate the following code.

  ```cs
       <body>
```
10. Replace the located code with the following code.

  ```cs
        <body onload="GetMap();">
```
11. In the _MapLayout.cshtml code window, locate the following code, select the code, and then press Delete.

  ```cs
        <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.ui/1.10.0/jquery-ui.min.js"></script>
```
12. In the _MapLayout.cshtml code window, locate the following code, select the code, and then press Delete.

  ```cs
       <script src="http://ajax.aspnetcdn.com/ajax/mvc/3.0/jquery.unobtrusive-ajax.js" type="text/javascript"></script>
```
13. In the _MapLayout.cshtml code window, locate the following code.

  ```cs
        </head>
```
14. Place the cursor before the located code, type the following code, and then press Enter.

  ```cs
        <script charset="UTF-8" type="text/javascript" src="http://www.bing.com/api/maps/mapcontrol?branch=release"></script>
```
15. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save All**.

#### Task 2: Create a map action, a view, and a script file.

1. In the **Solution Explorer** pane, under **Controllers**, double-click **PhotoController.cs**.
2. In the PhotoController.cs code window, place the cursor in the **PhotoController** class code block, but outside any action code block, press Enter, and then type the following code.

  ```cs
       public ViewResult Map()
       {
       }
```
3. In the **Map** action code block you just created, type the following code.

  ```cs
       return View("Map");
```
4. In the PhotoController.cs code window, locate the following code, right-click the code, and then click **Add View**.

  ```cs
       public ViewResult Map()
```
5. In the **View name** box of the **Add View** dialog box, ensure that the text is **Map**.
6. In the **Template** dropdown, ensure that **Empty (without model)** is selected.
7. Ensure that the **Create as a partial view** check box is cleared.
8. In the **Add View** dialog box, ensure that the **Use a layout page** check box is selected, and then click **...**.
9. In the **Project folders** box, expand **Views**, then select **Shared**.
10. In the **Contents of folder** box of the **Select a Layout Page** dialog box, click **_MapLayout.cshtml**, and then click **OK**.
11. In the **Add View** dialog box, click **Add**.
12. In the Map.cshtml code window, locate the following code, select the code, and then press Delete.

  ```cs
       <h2>Map</h2>
```
13. In the Map.cshtml code window, place the cursor outside the Razor code block, press Enter, and then type the following code.

  ```cs
        <script type="text/javascript">
        </script>
```
14. Place the cursor in the **SCRIPT** element, and then type the following code.

  ```cs
        var webApiUrl = '@Url.Content("~/api/photos")';
```
15. Place the cursor at the end of the code you just typed, press Enter, and then type the following code.

  ```cs
        var pictureUrl = '@Url.Action("GetImage", "Photo")/';
```
16. Place the cursor at the end of the code you just typed, press Enter, and then type the following code.

  ```cs
        var displayUrl = '@Url.Action("Display", "Photo")/';
```
17. Place the cursor at the end of the **&lt;/script&gt;** tag, press Enter twice, and then type the following code.

  ```cs
        <script src="" type="text/javascript"></script>
```
18. Place the cursor in the empty **src** attribute you just created, and then type the following code.

  ```cs
        @Url.Content("~/Scripts/MapDisplay.js")
```
19. Place the cursor at the end of the JavaScript code you just created, press Enter twice, and then type the following code.

  ```cs
        <div id="mapDiv" style="position: absolute; width: 650px; height: 400px;"></div>
```
20. In the **Solution Explorer** pane, right-click **Scripts**, point to **Add**, and then click **Existing Item**.
21. In the **Add Existing Item - PhotoSharingApplication** dialog box, navigate to **Allfiles/20486C/Mod13/Labfiles/Bing Maps Script**, click **MapDisplay.js** and then click **Add**.
22. In the **Solution Explorer** pane, double-click **Mvc.sitemap**.
23. In the Mvc.sitemap code window, locate the following code.

  ```cs
        <mvcSiteMapNode title="Add a Photo" visibility="*" controller="Photo" action="Create" />
```
24. Place the cursor before the located code, type the following code, and then press Enter.

  ```cs
        <mvcSiteMapNode title="Map" visibility="*" controller="Photo" action="Map" />
```
25. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save All**.

#### Task 3: Create a Bing Maps developer account.

1. Switch to the **Microsoft Edge** window.
2. In the Address bar, type **https://www.bingmapsportal.com**, and then click **Go to**.
3. On the **Home – Bing maps | Dev Center** page, click the **Sign in** link.
4. On the **Sign in to your Microsoft account** page, click the **Create one!** link.
5. On the **Create account** page, set the **User name** to **&lt;Your Windows Live account name&gt;**, set the **Password** to **&lt;Your Windows Live account password&gt;**, and then click **Next**.
6. On the **Add details** page, set the **First name** to **&lt;Your first name&gt;**, set the **Last name** to **&lt;Your last name&gt;**, and then click **Next**.
7. On the **Add details** page, set the **Country/region** to **&lt;Your Country/region&gt;**, set the **Birthdate** to **&lt;Your birthdate&gt;**, and then click **Next**.
8. In case the email address has to be verified, verify the email.
9. In case **Create account** page appears, follow the instructions and click **Next**.
10. Open a new **Microsoft Edge** window.
11. In the Address bar of Microsoft Edge, type **https://www.bingmapsportal.com**, and then click **Go to**.
12. On the **Home – Bing maps | Dev Center** page, click the **Sign in** link.
13. On the **Sign in** page, in the **Email, phone or Skype** text box, type **&lt;Your Windows Live account name&gt;**, and then click **Next**.
14. On the **Enter password** page, in the **Password** text box, type **&lt;Your Windows Live account password&gt;**.
15. On the **Enter password** page, select **Keep me signed in**, and then click **Sign in**.
16. In case the question **Is your security info still accurate?** appears on the page that opens, click **Looks good!**.
17. On the **Home – Bing maps | Dev Center** page, In the question **Do you want to use the account &lt;Your Windows Live account name&gt; for your new Bing Maps account?**, click **Yes**.
18. On the **Account details** page, in the **Account name** text box, type _&lt;Your account name&gt;_.
19. In the **Email Address** text box, type &lt;_Your email address_&gt;.
20. Select the **I agree to the Bing Maps Platform APIs' Terms of Use (TOU).** check box, and then click **Create**.

#### Task 4: Configure the Bing Maps Key.

1. On the **My account** menu, click **My Keys**.
2. In the **Application name** text box of the **Create key - Bing maps | Dev Center** page, type **Photo Sharing Application**, in the **Key Type** drop down, ensure that the value is **Basic**, in the **Application type** drop down, ensure that the value is **Public website**, and then click **Create**.

   >**Note:** On the **My Keys - Bing maps | Dev Center** page, the message, **Key created successfully** displays.

3. In the lower section of the **My Keys - Bing maps | Dev Center** page, select the key corresponding to **Photo Sharing Application**, right-click the key, and then click **Copy**.
4. Switch to the **PhotoSharingApplication - Microsoft Visual Studio** window.
5. In the **MapDisplay.js** file, locate the following code.

  ```cs
       Credentials:"{Your Bing Key}"
```
6. Delete the text **{Your Bing Key}**.
7. Place the cursor between the opening quotation mark and the closing quotation mark, and then on the **EDIT** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Paste**.
8. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save All**.
9. On the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Start Debugging**.
10. On the **Adventure Works Photo Sharing** page, click **Map**.

    >**Note:** On the **Map** page, the Bing Map AJAX control is displayed. However, there are no push pins on the map.

11. In the Microsoft Edge window, click **Close**.
12. On the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Stop Debugging**.

#### Task 5: Obtain and display photos.

1. In the **Solution Explorer** pane, under **Scripts**, double-click **MapDisplay.js**.
2. At the end of the file, insert the following code.

  ```cs
       function GetPhotos(serviceUrl) {
       }
```
3. In the **GetPhotos** function code block, type the following code.

  ```cs
       $.support.cors = true;
```
4. Place the cursor at the end of the code you just typed, press Enter, and then type the following code.

  ```cs
       $.ajax({
          url: serviceUrl,
          type: 'GET',
          dataType: 'json',
          success: DisplayPics,
          error: OnError
       });
```
5. Place the cursor at the end of the **GetPhotos** function code block, press Enter twice, and then type the following code.

  ```cs
       function DisplayPics(response) {
       }
```
6. In the **DisplayPics** function code block, type the following code.

  ```cs
       var location;
       var pin;
```
7. Place the cursor at the end of the code you just typed, press Enter, and then type the following code.

  ```cs
       $.each(response, function(index, photo) {
       });
```
8. In the **$.each** function code block, type the following code.

  ```cs
       location = new Microsoft.Maps.Location(photo.Latitude, photo.Longitude);
```
9. Place the cursor at the end of the code you just typed, press Enter, and then type the following code.

  ```cs
       pin = new Microsoft.Maps.Pushpin(location);
```
10. Place the cursor at the end of the code you just typed, press Enter, and then type the following code.

  ```cs
        pin.Title = photo.Title;
        pin.ID = photo.PhotoID;
```
11. Place the cursor at the end of the code you just typed, press Enter, and then type the following code.

  ```cs
        Microsoft.Maps.Events.addHandler(pin, 'click', DisplayInfoBox);
```
12. Place the cursor at the end of the code you just typed, press Enter, and then type the following code.

  ```cs
        map.entities.push(pin);
```
13. Place the cursor at the end of the **DisplayPics** function code block, press Enter twice, and then type the following code.

  ```cs
        function OnError(response) {
        }
```
14. In the **OnError** function code block, type the following code.

  ```cs
        alert("Could not obtain the picture coordinates");
```
15. In the **GetMap** function code block, locate the following code.

  ```cs
        infobox.setMap(map);
```
16. Place the cursor at the end of the located code, press Enter twice, and then type the following code.

  ```cs
        GetPhotos(webApiUrl);
```
17. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save All**.

#### Task 6: Test the Bing Maps control.

1. On the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Start Debugging**.
2. On the **Adventure Works Photo Sharing** page, click **Map**.

    >**Note:** On the **Map** page, the Bing Map AJAX control is displayed along with push pins on the map.

3. On the **Map** page, click a pin of your choice.

    >**Note:** The info box appears, displaying the photo as a thumbnail with the title.

4. In the info box of the **Map** page, click the thumbnail.

    >**Note:** The web application redirects you to the **Display** view, which displays the full size photo. 

5. In the Microsoft Edge window, click **Close**.
6. On the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Stop Debugging**.
7. In the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Close**.

>**Results**: After completing this exercise, you should have successfully created a template view to display a Bing Map AJAX control, and created a view and script file to display a Bing Map. You should have also used jQuery to call a Web API and obtain the details of photos. You should have then mashed up the data from a web API with Bing Maps data.

©2016 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.

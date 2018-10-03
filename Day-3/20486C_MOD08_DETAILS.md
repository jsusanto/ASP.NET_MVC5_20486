# Module 8: Applying Styles to ASP.NET MVC 5 Web Applications

# Lab: Applying Styles to MVC 5 Web Applications

### Lab Setup

Estimated Time: **40 minutes**

### Preparation Steps

1. Ensure that you have cloned the 20486C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20486-DevelopingASPNETMVCWebApplications/tree/master/Allfiles

### Exercise 1: Creating and Applying Layouts

#### Task 1: Open and browse through the Photo Sharing application.

1. On the taskbar, click the **File Explorer** icon.
2. In the **Libraries** window, go to **Allfiles/20486C/Mod08/Labfiles/PhotoSharingApplication_08_begin**, and then double-click **PhotoSharingApplication.sln**.
3. On the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Start Debugging**.

   >**Note:** The Welcome to Adventure Works Photo Sharing! Use this site to share your adventures page opens. The menu and the breadcrumb trail for the site are available on this page.

4. On the Welcome to Adventure Works Photo Sharing! Use this site to share your adventures page, under **Home**, click **All Photos**.

   >**Note:** The **All Photos** page opens. The menu and the breadcrumb trail for the site are not available on this page.

5. Under **Sample Photo 1** of the **All Photos** page, click **Display**.

   >**Note:** The menu and the breadcrumb trail are not available on the **Sample Photo 1** page.

6. In the Microsoft Edge window, click **Close**.
7. On the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Stop Debugging**.

#### Task 2: Create a new layout.

1. In the Solution Explorer pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, expand **PhotoSharingApplication**, and then expand **Views**.

2. Under **Views**, right-click **Shared**, point to **Add**, and then click **View**.
3. In the **View name** box of the **Add View** dialog box, type **_MainLayout**.
4. In the **Template** box, ensure that **Empty (without model)** is selected.
5. Ensure that the **Create as a partial view** check box is cleared.
6. Ensure that the **Use a layout page** check box is cleared, and then click **Add**.
7. In the **_MainLayout.cshtml** code window, locate the following code.

  ```cs
		<title>_MainLayout</title>
```
8. Replace the code with the following code.

  ```cs
		<title>@ViewBag.Title</title>
```
9. In the **DIV** element, type the following code.

  ```cs
		<h1 class="site-page-title">Adventure Works Photo Sharing</h1>
```
10. Place the cursor at the end of the **H1** element you just created, press Enter, and then type the following code.

  ```cs
		<div class="clear-floats" />
```
   >**Note:** The **clear-floats** class you just added to the page will be used with the style sheet for the web application.

11. Place the cursor at the end of the code you just typed, press Enter, type the following code, and then press Enter.

  ```cs
        <div id="topmenu">
           @Html.MvcSiteMap().Menu(false, true, true)
        </div>
```
12. Place the cursor at the end of the code you just typed, press Enter, type the following code, and then press Enter.

  ```cs
        <div id="breadcrumb">
           @Html.MvcSiteMap().SiteMapPath()
        </div>
```
13. Place the cursor at the end of the code you just typed, press Enter, and then type the following code.

  ```cs
        <div>
           @RenderBody()
        </div>
```
14. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save Views\Shared\\_MainLayout.cshtml**.

#### Task 3: Set the default layout for the application.

1. In the Solution Explorer pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, right-click **Views**, point to **Add**, and then click **View**.

2. In the **View name** box of the **Add View** dialog box, type **_ViewStart**.
3. In the **Template** box, ensure that **Empty (without model)** is selected.
4. Ensure that the **Create as a partial view** check box is cleared.
5. Ensure that the **Use a layout page** check box is cleared, and then click **Add**.
6. In the **_ViewStart.cshtml** code window, locate the following code.

  ```cs
		Layout = null;
```
7. Replace the code with the following code.

  ```cs
		Layout = "~/Views/Shared/_MainLayout.cshtml";
```
8. In the **_ViewStart.cshtml** code window, locate the following code, select the code and all the subsequent lines of code, and then press Delete.

  ```cs
		<!DOCTYPE html>
```
9. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save Views/_ViewStart.cshtml**.

#### Task 4: Update the views to use the layout.

1. In the Solution Explorer pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, under **Views**, expand **Home**, and then click **Index.cshtml**.

2. In the **Index.cshtml** code window, locate the following code.

  ```cs
		Layout = null;
```
3. Replace the code with the following code.

  ```cs
		ViewBag.Title = "Welcome to Adventure Works Photo Sharing";
```
4. In the **Index.cshtml** code window, locate the following code, select the code, and then press Delete.

  ```cs
		<!DOCTYPE html>
        <html>
        <head>
           <meta name="viewport" content="width=device-width" />
           <title>Welcome to Adventure Works Photo Sharing</title>
        </head>
        <body>
           <div>
```
5. In the **Index.cshtml** code window, locate the following code, select the code, and then press Delete.

  ```cs
		Menu: @Html.MvcSiteMap().Menu(false, false, true)
        Current Location: @Html.MvcSiteMap().SiteMapPath()
```
6. In the **Index.cshtml** code window, locate the following code, select the code, and then press Delete.

  ```cs
		   </div>
        </body>
        </html>
```
7. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save Views\Home\Index.cshtml**.
8. In the Solution Explorer pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, under **Views**, expand **Photo**, and then click **Display.cshtml**.
9. In the **Display.cshtml** code window, locate the following code.

  ```cs
		Layout = null;
```
10. Replace the code with the following code.

  ```cs
		ViewBag.Title = Model.Title;
```
11. Locate the following code, select the code, and then press Delete.

  ```cs
		<!DOCTYPE html>
        <html>
        <head>
           <meta name="viewport" content="width=device-width" />
           <title>@Model.Title</title>
        </head>
        <body>
           <div>
```
12. Locate the following code, select the code, and then press Delete.

  ```cs
		   </div>
        </body>
        </html>
```
13. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save Views\Photo\Display.cshtml**.
14. In the Solution Explorer pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, in the **Views/Shared** folder, double-click **Error.cshtml**.
15. In the **Error.cshtml** code window, locate the following code.

  ```cs
		Layout = null;
```
16. Replace the code with the following code.

  ```cs
		ViewBag.Title = "Custom Error";
```
17. In the **Error.cshtml** code window, locate the following code, select the code, and then press Delete.

  ```cs	
        <!DOCTYPE html>
        <html>
        <head>
           <meta name="viewport" content="width=device-width" />
           <title>Custom Error</title>
        </head>
        <body>
           <div>
```
18. In the **Error.cshtml** code window, locate the following code, select the code, and then press Delete.

  ```cs
           </div>
        </body>
        </html>
```
19. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save Views\Shared\Error.cshtml**.

#### Task 5: Browse through the web application.

1. Ensure that the file **_MainLayout.cshtml** is the file that is open in **Visual Studio**, and then on the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Start Debugging**.

   >**Note:** On the **Adventure Works Photo Sharing** page, note that the menu and the breadcrumb trail are displayed.

2. On the **Menu** of the **Adventure Works Photo Sharing** page, click **All Photos**.

   >**Note:** On the **All Photos** page, note that the menu and the breadcrumb trail are now displayed.

3. Under **Sample Photo 1** of the **All Photos** page, click **Display**.

   >**Note:** On the **Adventure Works Photo Sharing** page, note that **Sample Photo 1** is displayed. The site title, menu, and breadcrumb trail are now displayed on this webpage.

4. On the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Stop Debugging**.
5. In the Microsoft Edge window, click **Close**.

>**Results**: After completing this exercise, you will be able to create an ASP.NET MVC 5 web application that uses a single layout to display every page of the application.

### Exercise 2: Applying Styles to an MVC Web Application

#### Task 1: Examine the HTML mockup web application.

1. On the taskbar, click the **File Explorer** icon.
2. Navigate to **Allfiles/20486C/Mod08/Labfiles/Expression Web Mock Up**, and then double-click **default.html**.

   >**Note:** On the **Welcome to Adventure Works Photo Sharing** page, note the colors, fonts, and layout.

3. On the **Welcome to Adventure Works Photo Sharing** page, click **All Photos**.

   >**Note:** Note that the layout of the **All Photos** page is similar to the home page, but more photos are displayed on the page.

4. On the **All Photos** page, click **Details** corresponding to any image.

   >**Note:** The photo, metadata, description, and comments are displayed on the **Details** page.

5. In the Microsoft Edge  window, click **Close**.

#### Task 2: Import the styles and graphics.

1. Switch to the **PhotoSharingApplication - Microsoft Visual Studio** window.
2. In the Solution Explorer pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, right-click **PhotoSharingApplication**, point to **Add**, and then click **New Folder**.
3. In the Solution Explorer pane, rename **NewFolder1** as **Content**, and then press Enter.
4. In the Solution Explorer pane, right-click **Content**, point to **Add**, and then click **Existing Item**.
5. In the **Add Existing Item - PhotoSharingApplication** dialog box, go to **Allfiles/20486C/Mod08/Labfiles/Expression Web Mock Up/Content**, click **PhotoSharingStyles.css**, and then click **Add**.
6. In the Solution Explorer pane, right-click **Content**, point to **Add**, and then click **Existing Item**.
7. In the **Add Existing Item - PhotoSharingApplication** dialog box, click **BackgroundGradient.jpg**, and then click **Add**.
8. In the Solution Explorer pane, under **Shared**, click **_MainLayout.cshtml**.
9. In the _**MainLayout.cshtml** code window, locate the following code.

  ```cs
       <title>@ViewBag.Title</title>
```
10. Place the cursor at the end of the **TITLE** element, press Enter, and then type the following code.

  ```cs
        <link type="text/css" rel="stylesheet" href="~/content/PhotoSharingStyles.css" />
```
11. On the **FILE** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Save Views\Shared\\_MainLayout.cshtml**.

#### Task 3: Update the element classes to use the styles.

1. In the Solution Explorer pane, under **Shared**, click **_PhotoGallery.cshtml**.
2. In the **_PhotoGallery.cshtml** window, locate the following code.

  ```cs
       @foreach (var item in Model)
       {
       <div>
       }
```
3. In the code, replace the **&lt;div&gt;** tag with the following code.

  ```cs
       <div class="photo-index-card">
```
4. In the **DIV** element of the **_PhotoGallery.cshtml** window, locate the following code.

  ```cs
       <img width="200"
```
5. Replace the code with the following code.

  ```cs
       <img class="photo-index-card-img"
```
6. In the **_PhotoGallery.cshtml** window, locate the **&lt;div&gt;** tag after the **&lt;img&gt;** tag.
7. Replace the **&lt;div&gt;** tag with the following code.

  ```cs
       <div class="photo-metadata">
```
8. In the **_PhotoGallery.cshtml** window, locate the following code.

  ```cs
       <span>
          Created By:
       </span>
```
9. Replace the code with the following code.

  ```cs
       <span class="display-label">
          Created By:
       </span>
```
10. In the **_PhotoGallery.cshtml** window, locate the following code.

  ```cs
        <span>
           @Html.DisplayFor(model => item.UserName)
        </span>
```
11. Replace the code with the following code.

  ```cs
       <span class="display-field">
          @Html.DisplayFor(model => item.UserName)
       </span>
```
12. In the **_PhotoGallery.cshtml** window, locate the following code.

  ```cs
        <span>
           Created On:
        </span>
```
13. Replace the code with the following code.

  ```cs
        <span class="display-label">
           Created On:
        </span>
```
14. In the **_PhotoGallery.cshtml** window, locate the following code.

  ```cs
       <span>
          @Html.DisplayFor(model => item.CreatedDate)
       </span>
```
15. Replace the code with the following code.

  ```cs
        <span class="display-field">
           @Html.DisplayFor(model => item.CreatedDate)
        </span>
```
#### Task 4: Browse the styled web application.

1. On the **DEBUG** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Start Debugging**.

   >**Note:** On the **Welcome to Adventure Works** page, examine the styles applied to the home page. Note the colors, fonts, and background gradient image. Also note the layout of the photo thumbnail cards, and the top menu and breadcrumb trail shortcuts.

2. On the **Welcome to Adventure Works** page, click **All Photos**.

   >**Note:** Note the new style that is applied to the photo gallery on the **All Photos** page.

3. On the **All Photos** page, click **Display** corresponding to a photo.

   >**Note:** Note the new style that is applied to the display view.

4. In the Microsoft Edge window, click **Close**.
5. On the **DEBUG** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Stop Debugging**.

>**Results**: After completing this exercise, you will be able to create a Photo Sharing application with a consistent look and feel.

### Exercise 3: Optional—Adapting Webpages for Mobile Browsers

#### Task 1: Test the application as a mobile device.

1. On the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Start Debugging**.
2. On the **Ellipsis** menu of the Microsoft Edge window, click **F12 Developer Tools**.

   >**Note:** In the Microsoft Edge window, note that a developer window is displayed.

3. Switch to **Emulation** tab.
4. Change **Browser Profile** to **Windows Phone**.
5. Under **Display**, ensure that **Resolution** is set to **4.3" 800 x 480**.

   >**Note:** The size of the Microsoft Edge window reduces according to the specified dimensions.

   >**Note:** The main heading, menu, and other elements of the home page do not display correctly in the mobile view.

6. In the Microsoft Edge window, click **Close**.
7. On the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Stop Debugging**.

#### Task 2: Add a new mobile layout.

1. In the Solution Explorer pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, under **Shared**, right-click **_MainLayout.cshtml**, and then click **Copy**.
2. In the Solution Explorer pane, right-click **DisplayTemplates**, and then click **Paste**.
3. Under **DisplayTemplates**, right-click **_MainLayout.cshtml**, click **Rename**, type **_MainLayout.Mobile**, and then press Enter.
4. In the **_MainLayout.Mobile.cshtml** code window, locate the following code.

  ```cs
       <h1 class="site-page-title">Adventure Works Photo Sharing</h1>
```
5. Replace the code with the following code.

  ```cs
       <h1 class="site-page-title">
          Adventure Works <br />
          Photo Sharing
       </h1>
```
6. Place the cursor at the end of the **H1** element, press Enter, and then type the following code.

  ```cs
       <h2>Mobile Site</h2>
```
7. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save Views\Shared\\_MainLayout.Mobile.cshtml**.

#### Task 3: Add a media query to the style sheet.

1. In the Solution Explorer pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, under **Content**, click **PhotoSharingStyles.css**.
2. In the **PhotoSharingStyles.css** code window, place the cursor at the end of the style sheet, press Enter, and then type the following code.

  ```cs
       @media only screen and (max-width: 500px) {
       }
```
3. In the **PhotoSharingStyles.css** code window, locate the following code.

  ```cs
    #topmenu li {
        list-style: none;
        float: left;
        background-color: #cccccc;
        width: 200px;
        height: 35px;
        text-align: center;
        line-height: 2em;
        margin: 5px;
    }

```
4. In the **PhotoSharingStyles.css** code window, place the cursor in the media query you just added, and then type the following code.

  ```cs
    #topmenu li {
        list-style: none;
        float: left;
        background-color: #cccccc;
        width: 200px;
        height: 35px;
        text-align: center;
        line-height: 2em;
        margin: 5px;
    }
```
5. In the media query you just pasted, locate the following code.

  ```cs
       width: 200px;
```
6. In the located code, replace **200px** with **100px**.

#### Task 4: Retest the application as a mobile device.

1. On the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Start Debugging**.
2. Click the **Ellipsis** menu of the Microsoft Edge window, then click **F12 developer tools**.
3. On the **Cache** menu of the developer window, click **Clear cache**.
4. On the **Emulation** tab of the developer window, change **Browser profile** to **Windows Phone**.
5. Change **Resolution** to **800 x 480**.

   >**Note:** The size of the Microsoft Edge window reduces according to the specified dimensions.

6. On the Address bar of the Microsoft Edge window, click **Refresh (F5)**, and then note that the home page of the web application opens without problems in the mobile view.

   >**Note:** This indicates that the mobile view and media query have been successfully applied.

7. In the Microsoft Edge window, click **Close**.
8. In the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Close**.
9. On the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Stop Debugging**.


>**Results**: After completing this exercise, you will be able to create a Photo Sharing application that displays well on mobile devices and devices with small screens.

©2016 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.

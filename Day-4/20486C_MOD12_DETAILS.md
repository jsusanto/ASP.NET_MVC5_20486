﻿# Module 12: Building a Resilient ASP.NET MVC 5 Web Application

# Lab: Building a Resilient ASP.NET MVC 5 Web Application

### Lab Setup

Estimated Time: **45 minutes**

### Preparation Steps

1. Ensure that you have cloned the 20486C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20486-DevelopingASPNETMVCWebApplications/tree/master/Allfiles

### Exercise 1: Creating Favorites Controller Actions

#### Task 1: Create the Favorites Slideshow action.

1. On the taskbar, click the **File Explorer** icon.
2. In the **Libraries** window, go to **Allfiles/20486C/Mod12/labfiles/PhotoSharingApplication_12_begin**, and then double-click **PhotoSharingApplication.sln**.
3. On the **BUILD** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click Build Solution.
4. In the **Solution Explorer** pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, expand **PhotoSharingApplication**, expand **Controllers**, and then click **PhotoController.cs**.
5. In the **PhotoController.cs** code window, locate the following code.

  ```cs
       public ActionResult SlideShow()
       {
          return View("SlideShow", context.Photos.ToList());
       }
```
6. Place the mouse cursor at the end of the located code, press Enter twice, and then type the following code.

  ```cs
       public ActionResult FavoritesSlideShow()
       {
       }
```
7. Place the cursor within the **FavoritesSlideShow** action code block you just created, and then type the following code.

  ```cs
        List<Photo> favPhotos = new List<Photo>();
```
8. Place the mouse cursor at the end of the **favPhotos** list code block you just created, press Enter, and then type the following code.

  ```cs
        List<int> favoriteIds = Session["Favorites"] as List<int>;
```
9. Place the mouse cursor at the end of the **favoriteIds** list code block you just created, press Enter, and then type the following code.

  ```cs
        if (favoriteIds == null)
        {
           favoriteIds = new List<int>();
        }
```
10. Place the mouse cursor at the end of the **if** statement code block you just created, press Enter, and then type the following code.

  ```cs
        Photo currentPhoto;
```
11. Place the mouse cursor at the end of the **currentPhoto** object code block you just created, press Enter, and then type the following code.

  ```cs
        foreach (int currentId in favoriteIds)
        {
        }
```
12. Place the mouse cursor within the **foreach** code block you just created, and then type the following code.

  ```cs
        currentPhoto = context.FindPhotoById(currentId);
```
13. Place the mouse cursor at the end of the code you just created, press Enter, and then type the following code.

  ```cs
        if (currentPhoto != null)
        {
           favPhotos.Add(currentPhoto);
        }
```
14. Place the mouse cursor at the end of the **foreach** code block you created earlier, press Enter, and then type the following code.

  ```cs
        return View("SlideShow", favPhotos);
```
   >**Note:** You do not need to create a new view for the **FavoritesSlideShow** action. Instead, you can re-use the **SlideShow.cshtml** view by passing a different list of **Photo** objects.

15. On the **FILE** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Save All**.

#### Task 2: Create the Add Favorite action.

1. Place the mouse cursor immediately after the **FavoritesSlideShow** action code block, but inside the **PhotoController** class code block, and then type the following code.

  ```cs
       public ContentResult AddFavorite(int PhotoId)
       {
       }
```
2. Place the cursor within the **AddFavorite** action code block you just created, and then type the following code.

  ```cs
       List<int> favoriteIds = Session["Favorites"] as List<int>;
```
3. Place the mouse cursor at the end of the **favoriteIds** list code block you just created, press Enter, and then type the following code.

  ```cs
       if (favoriteIds == null)
       {
          favoriteIds = new List<int>();
       }
```
4. Place the mouse cursor at the end of the code block you just created, press Enter, and then type the following code.

  ```cs
       favoriteIds.Add(PhotoId);
```
5. Place the mouse cursor at the end of the code you just created, press Enter, and then type the following code.

  ```cs
       Session["Favorites"] = favoriteIds;
```
6. Place the mouse cursor at the end of the code you just created, press Enter, and then type the following code.

  ```cs
       return Content("The picture has been added to your favorites", "text/plain", System.Text.Encoding.Default);
```
7. On the **FILE** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Save All**.

>**Results**: After completing this exercise, you should have successfully created controller actions that store values in the session state of the web application, and retrieved values from the same session state.

### Exercise 2: Implementing Favorites in Views

#### Task 1: Add an AJAX action link in the Photo Display view.

1. In the **Solution Explorer** pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, expand **Views**, expand **Photo**, and then click **Display.cshtml**.

2. In the **Display.cshtml** code window, locate the following code.

  ```cs
       <div>
          <span class="display-label">
             @Html.DisplayNameFor(model => model.CreatedDate):
          </span>
          <span class="display-field">
             @Html.DisplayFor(model => model.CreatedDate)
          </span>
       </div>
```
3. Place the mouse cursor at the end of the located code, press Enter, and then type the following code.

  ```cs
       <div id="addtofavorites">
       </div>
```
4. In the **DIV** element you just created, type the following code.

  ```cs
         @Ajax.ActionLink("Add this photo to your favorites", "AddFavorite", "Photo",
          new { PhotoId = Model.PhotoID },
          new AjaxOptions {UpdateTargetId = "addtofavorites", HttpMethod = "GET", InsertionMode = InsertionMode.Replace})
```
5. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save All**.

#### Task 2: Add a link and update the site map.

1. In the **Solution Explorer** pane, under Views, expand **Shared**, and then click **_MainLayout.cshtml**.
2. In the **_MainLayout.cshtml** code window, locate the following code.

  ```cs
       <div id="breadcrumb">
          @Html.MvcSiteMap().SiteMapPath()
       </div>
```
3. Place the mouse cursor at the end of the located code, press Enter, and then type the following code.

  ```cs
       @if (Session["Favorites"] != null) {
       }
```
4. In the **@if** statement code block, type the following code.

  ```cs
       <div id="favorites-link">
       </div>
```
5. In the **DIV** element you just created, type the following code.

  ```cs
       @Html.ActionLink("Favorite Photos", "FavoritesSlideShow", "Photo")
```
6. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save All**.
7. In the **Solution Explorer** pane, click **Mvc.sitemap**.
8. In the **sitemap** code window, locate the following code.

  ```cs
       <mvcSiteMapNode title="Slideshow" visibility="*" controller="Photo" action="SlideShow" />
```
9. Place the mouse cursor at the end of the located code, press Enter, and then type the following code.

  ```cs
       <mvcSiteMapNode title="Favorites" visibility="SiteMapPathHelper,!\*" controller="Photo" action="FavoritesSlideShow" />
```
10. On the **FILE** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Save All**.

#### Task 3: Test favorites.

1. On the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Start Debugging**.

   >**Note:** On the **Welcome to Adventure Works Photo Sharing** page, note that there is no link to the **FavoritesSlideShow** action.

2. On the **Welcome to Adventure Works Photo Sharing** page, click **All Photos**.
3. On the **All Photos** page, click **Display** corresponding to any photo of your choice.

   >**Note:** Ensure that the photo you have selected is not already added to the favorites list.

4. On the result page, click **Add this photo to your favorites**.

   >**Note:** The message, **The picture has been added to your favorites** displays. This indicates that the AJAX action displays a confirmation message without a full-page reload.

5. On the result page, click **Back to List**.
6. On the **All Photos** page, click **Display** corresponding to any photo of your choice.

   >**Note:** Ensure that the photo you have selected is not already added to the favorites list.

7. On the result page, click **Add this photo to your favorites**, and then click **Back to List**.
8. On the **All Photos** page, click **Display** corresponding to any photo of your choice.

   >**Note:** Ensure that the photo you selected is not already added to the favorites list.

9. On the result page, click **Add this photo to your favorites**, and then click **Back to List**.
10. On the **All Photos** page, click **Home**, and then click **Favorite Photos**.

   >**Note:** The slideshow displays the photos that were marked as favorites.  
On the **Home** page, if you are not able to view the **Favorite Photos** link, click **Refresh**.

11. In the **Microsoft Edge** window, click **Close**.
12. On the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Stop Debugging**.
13. In the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Close**.

>**Results**: After completing this exercise, you will be able to
>- Create the user interface components for the favorite photos functionality.
>- Test the functionality of the user interface components.

©2016 Microsoft Corporation. All rights reserved. 

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.

﻿# Module 9: Building Responsive Pages in ASP.NET MVC 5 Web Applications

# Lab: Building Responsive Pages in ASP.NET MVC 5 Web Applications

### Lab Setup

Estimated Time: **60 minutes**

### Preparation Steps

1. Ensure that you have cloned the 20486C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20486-DevelopingASPNETMVCWebApplications/tree/master/Allfiles

### Exercise 1: Using Partial Page Updates

#### Task 1: Import the Comment controller and Delete view.

1. On the taskbar, click the **File Explorer** icon.
2. In the Libraries window, navigate to **Allfiles/20486C/Mod09/Labfiles/PhotoSharingApplication_09_begin**, and then double-click **PhotoSharingApplication.sln.**
3. In the Solution Explorer pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, expand  **PhotoSharingApplication**, right-click **Views**, point to **Add**, and then click **New Folder**.
4. In the Solution Explorer pane, rename **New Folder1** as **Comment**, and then press Enter.
5. In the Solution Explorer pane, under Views, right-click **Comment**, point to **Add**, and then click **Existing Item**.
6. In the **Add Existing Item - PhotoSharingApplication** dialog box, navigate to **Allfiles/20486C/Mod09/Labfiles/Comment Components**, click **Delete.cshtml**, and then click **Add**.
7. In the Solution Explorer pane, right-click **Controllers**, point to **Add**, and then click **Existing Item**.
8. In the **Add Existing Item - PhotoSharingApplication** dialog box, navigate to **Allfiles/20486C/Mod09/Labfiles/Comment Components**, click **CommentController.cs**, and then click **Add**.

#### Task 2: Add the \_CommentsForPhoto action and view.

1. In the Solution Explorer pane of the **PhotoSharingApplication - Microsoft Visual Studio window**, click **CommentController.cs**.
2. In the CommentController.cs code window, locate the following code.

  ```cs
       public CommentController(IPhotoSharingContext Context)
       {
          context = Context;
       }
```
3. Place the mouse cursor after the located code, press Enter twice, and then type the following code.

  ```cs
       [ChildActionOnly]
       public PartialViewResult _CommentsForPhoto(int PhotoId)
       {
       }
```
4. In the _**CommentsForPhoto** action code block, type the following code.

  ```cs
       var comments = from c in context.Comments
       where c.PhotoID == PhotoId
       select c;
```
5. Place the mouse cursor at the end of the code block you just created, press Enter, and then type the following code.

  ```cs
       ViewBag.PhotoId = PhotoId;
```
6. Place the mouse cursor at the end of the code block you just created, press Enter, and then type the following code.

  ```cs
       return PartialView("_CommentsForPhoto", comments.ToList());
```
7. On the **BUILD** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Build Solution**.
8. In the CommentController.cs code window, right-click the following code, and then click **Add View**.

  ```cs
       public PartialViewResult _CommentsForPhoto(int PhotoId)
```
9. In the **Add View** dialog box, ensure that the name in the **View name** box is **_CommentsForPhoto**.
10. In the **Template** box, ensure that **Empty** is selected.
11. In the **Model Class** box, click **Comment (PhotoSharingApplication.Models)**.
12. Select the **Create as a partial view** check box, and then click **Add**.
13. In the Solution Explorer pane, under **Views**, drag the **_CommentsForPhoto.cshtml** file from the **Comment** folder to the  **Shared** folder.
14. In the **Move files to a new location** box, click **OK**.
15. In the **_CommentsForPhoto.cshtml** code window, locate the following code.

  ```cs
        @model PhotoSharingApplication.Models.Comment
```
16. Replace the code with the following code.

  ```cs
        @model IEnumerable<PhotoSharingApplication.Models.Comment>
```
17. Place the mouse cursor at the end of the code you just entered, press Enter twice, and then type the following code.

  ```cs
        <h3>Comments</h3>
```
18. Place the mouse cursor at the end of the **H3** element you just created, press Enter, and then type the following code.

  ```cs
       <div id="comments-tool">
          <div id="all-comments">
          </div>
       </div>
```
19. In the **&lt;div id=&quot;all-comments&quot;&gt;** element, type the following code.

  ```cs
        @foreach (var item in Model)
        {
           <div class="photo-comment">
           </div>
        }
```
20. In the **&lt;div class=&quot;photo-comment&quot;&gt;** element, type the following code.

  ```cs
        <div class="photo-comment-from">
           From:
           @Html.DisplayFor(modelItem => item.UserName)
        </div>
```
21. Place the mouse cursor at the end of the **DIV** element you just created, press Enter, and then type the following code.

  ```cs
       <div class="photo-comment-subject">
          Subject:
          @Html.DisplayFor(modelItem => item.Subject)
       </div>
```
22. Place the mouse cursor at the end of the **DIV** element you just created, press Enter, and then type the following code.

  ```cs
       <div class="photo-comment-body">
          @Html.DisplayFor(modelItem => item.Body)
       </div>
```
23. Place the mouse cursor at the end of the **DIV** element you just created, press Enter, and then type the following code.

  ```cs
       @Html.ActionLink("Delete This Comment", "Delete", new { id = item.CommentID})
```
24. In the Solution Explorer pane, under Views, expand **Photo**, and then click **Display.cshtml**.
25. In the Display.cshtml code window, locate the following code.

  ```cs
        <p>
            @Html.ActionLink("Back To List", "Index")
            @Html.ActionLink("Delete This Photo", "Delete", new { id = Model.PhotoID })
        </p>
```
26. Immediately before the located code, press Enter twice, and then type the following code.

  ```cs
        @Html.Action("_CommentsForPhoto", "Comment", new { PhotoId = Model.PhotoID })
```
27. On the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Start Debugging**.
28. On the **Adventure Works Photo Sharing** page, click **All Photos**.
29. Under Sample Photo 1, click **Display**.
30. On the Adventure Works Photo Sharing page, scroll to the end of the page, and then note that the two comments are displayed.
31. In the Windows Microsoft Edge window, click **Close**.
32. On the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Stop Debugging**.


#### Task 3: Add the _Create Action and the _CreateAComment views.

1. In the Solution Explorer pane, under Controllers, click **CommentController.cs**.
2. In the CommentController.cs code window, place the mouse cursor within the **CommentController** class but outside any method code block, and type the following code.

  ```cs
       public PartialViewResult _Create(int PhotoId)
       {
       }
```
3. In the **_Create** action code block, type the following code.

  ```cs
       Comment newComment = new Comment();
       newComment.PhotoID = PhotoId;
```
4. In the _**Create** action code block, place the mouse cursor at the end of the **Comment** object you just created, press Enter, and then type the following code.

  ```cs
       ViewBag.PhotoID = PhotoId;
```
5. Place the mouse cursor at the end of the **ViewBag** attribute you just created, press Enter, and then type the following code:

  ```cs
       return PartialView("_CreateAComment");
```
6. In the Solution Explorer pane, under Views, right-click **Shared**, point to **Add**, and then click **View**.
7. In the **View name** box of the **Add View** dialog box, type **_CreateAComment**.
8. In the **Template** box, ensure that **Empty** is selected.
9. In the **Model Class** box, ensure that the value is **Comment (PhotoSharingApplication.Models)**.
10. Select the **Create as a partial view** check box, and then click **Add**.
11. In the \_CreateAComment.cshtml code window, place the mouse cursor at the end of the **@model** statement, press Enter twice, and then type the following code.

  ```cs
        @Html.ValidationSummary(true)
```
12. Place the mouse cursor at the end of the validation messages you just created, press Enter, and then type the following code.

  ```cs
       <div class="add-comment-tool">
       </div>
```
13. In the **&lt;div class=&quot;add-comment-tool&quot;&gt;** element you just created, type the following code.

  ```cs
        <div>
        </div>
```
14. In the **DIV** element you just created, type the following code.

  ```cs
        <span class="editor-label">
           Subject:
        </span>
```
15. Place the mouse cursor at the end of the **SPAN** element you just created, press **Enter** , and then type the following code.

  ```cs
        <span class="editor-field">
           @Html.EditorFor(model => model.Subject)
        </span>
```
16. In the **&lt;div class=&quot;add-comment-tool&quot;&gt;** element, place the mouse cursor after the end tag of the **DIV** element, press Enter, and then type the following code.

  ```cs
        <div>
        </div>
```
17. In the **DIV** element you just created, type the following code.

  ```cs
        <span class="editor-label">
           Body:
        </span>
```
18. Place the mouse cursor at the end of the **SPAN** element you just created, press Enter, and then type the following code.

  ```cs
        <span class="editor-field">
           @Html.EditorFor(model => model.Body)
        </span>
```
19. In the **&lt;div class=&quot;add-comment-tool&quot;&gt;** element, place the mouse cursor at the end of the second **DIV** element, press Enter, and then type the following code.

  ```cs
        <input type="submit" value="Create" />
```
20. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save All**.

#### Task 4: Add the _CommentsForPhoto POST action.

1. In the Solution Explorer pane, under Controllers, click **CommentController.cs**.
2. In the CommentController.cs code window, place the cursor within the **CommentController** class but outside any method code block, and then type the following code.

  ```cs
       [HttpPost]
       public PartialViewResult _CommentsForPhoto(Comment comment, int PhotoId)
       {
       }
```
3. In the **_CommentsforPhoto** action code block you just created, type the following code.

  ```cs
       context.Add<Comment>(comment);
       context.SaveChanges();
```
4. In the **_CommentsforPhoto** action code block, place the mouse cursor at the end of the **comment** object you just created, press Enter, and then type the following code.

  ```cs
       var comments = from c in context.Comments
          where c.PhotoID == PhotoId
          select c;
```
5. In the **_CommentsforPhoto** action code block, place the mouse cursor at the end of the query you just created, press Enter, and then type the following code.

  ```cs
       ViewBag.PhotoId = PhotoId;
```
6. In the **_CommentsforPhoto** action code block, place the mouse cursor at the end of the **ViewBag** attribute you just created, press Enter, and then type the following code.

  ```cs
        return PartialView("_CommentsForPhoto", comments.ToList());
```
7. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save All**.

#### Task 5: Complete the _CommentsForPhoto view.

1. In the Solution Explorer pane, under **Shared**, click **_CommentsForPhoto.cshtml**.
2. In the _CommentsForPhoto.cshtml code window, locate the following code.

  ```cs
       <h3>Comments</h3>
```
3. Place the mouse cursor at the end of the located code, press Enter twice, and then type the following code.

  ```cs
       @using (Ajax.BeginForm("_CommentsForPhoto",
          new { PhotoId = ViewBag.PhotoId },
          new AjaxOptions { UpdateTargetId = "comments-tool" }))
       {
```
4. In the _CommentsForPhoto.cshtml code window, locate the last **&lt;/div&gt;** tag, press Enter, and then add the following code.

  ```cs
       }
```
5. In the _CommentsForPhoto.cshtml code window, locate the last **&lt;/div&gt;** tag.
6. Before the located tag, type the following code.

  ```cs
       <div id="add-comment" class="add-comment-box">
       </div>
```
7. In the **DIV** element you just created, type the following code.

  ```cs
       @Html.Action("_Create", "Comment", new { PhotoId = ViewBag.PhotoId })
```
8. In the Solution Explorer pane, under Shared, click **_MainLayout.cshtml**.
9. In the \_MainLayout.cshtml code window, locate the following code.

  ```cs
      </head>
```
10. Just before the located code, insert the following code.

  ```cs
        <script src="http://ajax.aspnetcdn.com/ajax/jquery/jquery-1.8.0.min.js" type="text/javascript"></script>
        <script src="http://ajax.aspnetcdn.com/ajax/mvc/3.0/jquery.unobtrusive-ajax.js" type="text/javascript"></script>
```
11. On the **DEBUG** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Start Debugging**.
12. On the **Adventure Works Photo Sharing** page, click **All Photos**.
13. Under Sample Photo 1, click **Display**, and then, on the Adventure Works Photo Sharing page, note that the two comments are displayed.
14. In the **Subject** box, type **Test Comment**.
15. In the **Body** box, type **This comment is to test AJAX-based partial page updates.**, and then click **Create**.

    >**Note:** Note that the new comment is displayed without a page reload.

16. In the Windows Microsoft Edge window, click **Close**.
17. On the **DEBUG** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Stop Debugging**.


>**Results** : At the end of this exercise, you will have ensured that new comments can be added and displayed on the pages of the application without a complete page reload. You will create a Photo Sharing application with a comments tool, implemented by using partial page updates.

### Exercise 2: Optional—Configuring the ASP.NET Caches

#### Task 1: Test the All Photos page with no caching.

1.	On the **DEBUG** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Start Debugging**.
2.	On the **Adventure Works Photo Sharing** page, Click **Ellipsis** and then click **F12 Developer Tools**.
3.	On the **Network** tab, In **Cache** menu of the developer window, click **Always refresh from server**.
4.	On the **Network** tab of the developer window, click **Start profiling session**. If start Profiling session is disabled, then click **Stop Profiling session** and then click **Start Profiling session**.
5.	On the **Adventure Works Photo Sharing** page, click **All Photos**.
6.	When the page is fully loaded, in the developer window, click **Stop profiling session**.
7.	On the **Time** tab, click the **Request** entry of any record, note the time taken.
8.	On the **Network** tab of the developer window, click **Clear Session** , and then click **Start profiling session**.
9.	On the **Adventure Works Photo Sharing** page, click **All Photos**.
10.	When the page is fully loaded, in the developer window, click **Stop profiling session**.
11.	On the **Time**  tab, click the **Request** entry that you selected in Point 7, note that the time taken is reduced.
12.	In the **Microsoft Edge** window, click **Close**.
13.	On the **DEBUG** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Stop Debugging**.

#### Task 2: Configure caching for the Index action.

1. In the Solution Explorer pane, under Controllers, click **PhotoController.cs**.
2. In the **PhotoController.cs** code window, locate the following code.

  ```cs
       using System.Web.Mvc;
```
3. Place the mouse cursor at the end of the located code, press **Enter**, and then type the following code.

  ```cs
       using System.Web.UI;
```
4. In the **PhotoController.cs** code window, locate the following code.

  ```cs
       public ActionResult Index()
```
5. Place the mouse cursor before the located code, type the following code, and then press **Enter**.

  ```cs
       [OutputCache(Duration=600, Location=OutputCacheLocation.Server, VaryByParam="none")]
```
6. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save All**.

#### Task 3: Retest the All Photos page with Index caching.

1.	On the **DEBUG** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Start Debugging**.
2.	On the **Adventure Works Photo Sharing** page, Click **Ellipsis**, and then click **F12 Developer Tools**.
3.	On the **Network** tab, In the **Cache** menu of the developer window, click **Always refresh from server**.
4.	On the **Network** tab, click **Start Profiling Session**. If **Start Profiling Session** is disabled, then click **Stop Profiling Session** and then click **Start Profiling Session**.
5.	On the **Adventure Works Photo Sharing** page, click **All Photos**.
6.	When the page is fully loaded, in the developer window, click **Stop Profiling Session**.
7.	On the **Time** tab, click the **Request** entry of any record, note the time taken.
8.	On the **Network** tab, click **Clear Session**, and then click **Start Profiling Session**.
9.	On the **Adventure Works Photo Sharing** page, click **All Photos**.
10.	When the page is fully loaded, in the developer window, click **Stop Profiling Session**.
11.	On the **Time**  tab, click the **Request** entry that you selected in Point 7, note that the time taken is reduced.
12.	In the **URL** column, Append this /GetImage/1 with the end of existing URL and then press **Enter**.
13.	In the **Request** entry, under the **Time** column, note the duration.
14.	In the **Microsoft Edge** window, click **Close**.
15.	On the **DEBUG** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Stop Debugging**.

#### Task 4: Configure caching for the GetImage action.

1. In the **PhotoController.cs** code window, locate the following code.

  ```cs
       public FileContentResult GetImage(int id)
```
2. Place the mouse cursor immediately before the located code, type the following code, and then press Enter.

  ```cs
       [OutputCache(Duration=600, Location=OutputCacheLocation.Server, VaryByParam="id")]
```
3. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save All**.

#### Task 5: Retest the All Photo page with GetImage caching.

1.	On the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Start Debugging**.
2.	On the **Adventure Works Photo Sharing** page, Click **Ellipsis**, and then click **F12 Developer tools**.
3.	On the **Network** tab, In the **Cache** menu of the developer window, click **Always refresh from server**.
4.	On the **Network** tab, click **Start Profiling Session**. If **Start Profiling Session** is disabled, then click **Stop Profiling Session** and then click **Start Profiling Session**.
5.	On the **Adventure Works Photo Sharing** page, click **All Photos**.
6.	When the page is fully loaded, in the developer window, click **Stop Profiling Session**.
7.	On the **Network** tab, click **Start Profiling Session**.
8.	In the **URL** column, Append this /GetImage/1 with the end of existing URL and then press **Enter**.
9.	In the **Request** entry, under the **Time** column, note the duration and then click **Stop Profiling Session**.
10.	Click **Clear Session**, and then click **Start Profiling Session**. 
11.	Ensure the URL should be http://localhost:[port]/Photo and then press **Enter**.
12.	On the **Adventure Works Photo Sharing** page, click **All Photos**.
13.	When the page is fully loaded, in the developer window, click **Stop Profiling Session** and then click **Start Profiling Session**.
14.	In the **URL** column, Append this /GetImage/1 with the end of existing URL and then press **Enter**.
15.	On the **Timings** tab, click the **Request** entry, and then, in the **Duration** column, note that the time taken is reduced. If the latest duration wasn’t reduced, then please re-try this task from step 1 by deleting your browser Cache.
  * To delete the browser cache:
  * Open **Microsoft Edge** window and then click **Ellipsis** and then click **Settings**.
  * Under **Clear Browsing** data, click **Choose what to clear**.
  * Ensure that **Cached data and files** checkbox is selected and then click **Clear**.
16.	In the **Microsoft Edge** window, click **Close**.
17.	On the **DEBUG** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Stop Debugging**.
18.	In the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Close**.

>**Results** : At the end of this exercise, you will create a Photo Sharing application with the Output Cache configured for caching photos.

©2016 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.

﻿# Module 6: Testing and Debugging ASP.NET MVC 5 Web Applications

# Lab: Testing and Debugging ASP.NET MVC 5 Web Applications

### Lab Setup

Estimated Time: **90 minutes**

### Preparation Steps

1. Ensure that you have cloned the 20486C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20486-DevelopingASPNETMVCWebApplications/tree/master/Allfiles

### Exercise 1: Performing Unit Tests


#### Task 1: Create a test project.

1. On the taskbar, click the **File Explorer** icon.
2. In the **Libraries** window, go to **Allfiles\20486c\Mod06\LabFiles\PhotoSharingApplication_06_begin**, and then double-click **PhotoSharingApplication.sln**.
3. In the Solution Explorer pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, right-click **Solution &#39;Photo Sharing Application&#39; (1 project)**, click **Add**, and then click **New Project**.
4. In the navigation pane of the **Add New Project** dialog box, click **Visual C#**, click **Test**, and then, in the result pane, click **Unit Test Project (.NET Framework)**.
5. Ensure that **.NET Framework 4.6** is selected.
6. In the **Name** box, type **PhotoSharingTests**, and then click **OK**.
7. In the Solution Explorer pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, under PhotoSharingTests, right-click **References**, and then click **Add Reference**.
8. In the navigation pane of the **Reference Manager - PhotoSharingTests** window, click **Projects**, and then click **Solution**.
9. In the result pane, select the check box corresponding to **PhotoSharingApplication**, and then click **OK**.
10. To open the NuGet Console, in the **PhotoSharingApplication - Microsoft Visual Studio** window, click the **Tools** menu, then **NuGet Package Manager** submenu, then **Package Manager Console**.
11. In the **Package Manager Console**, ensure that **PhotoSharingTests** is selected in the **Defaultproject** box.
12. To add the ASP.net MVC references, in the **Package Manager Console**, type the following, and press Enter.
  ```cs
    Install-Package Microsoft.AspNet.Mvc -Version 5.2.3
```

#### Task 2: Write the tests

1. In the Solution Explorer pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, under **PhotoSharingTests**, right-click **UnitTest1.cs**, click **Rename**, type **PhotoControllerTests**, and then press Enter.

2. In the **Microsoft Visual Studio** dialog box, click **Yes**.
3. In the **PhotoControllerTests.cs** code window, locate the following code.

  ```cs
    public void TestMethod1()
```
4. Replace the code with the following code.

  ```cs
    public void Test_Index_Return_View()
```
5. Ensure that the cursor is at the end of the **Microsoft.VisualStudio.TestTools.UnitTesting** namespace, press Enter, and then type the following code.

 ```cs
        using System.Collections.Generic;
        using System.Web.Mvc;
        using PhotoSharingApplication.Models;
        using PhotoSharingApplication.Controllers;
```
6. Ensure that the cursor is in the **Test\_Index\_Return\_View** test method code block, and then type the following code.

  ```cs
        PhotoController controller = new PhotoController();
        var result = controller.Index() as ViewResult;
        Assert.AreEqual("Index", result.ViewName);
```
7. Ensure that the cursor is at the end of the **Test\_Index\_Return\_View** test method code block, press Enter twice, and then type the following code.

  ```cs
        [TestMethod]
        public void Test_PhotoGallery_Model_Type()
        {
        }
```
8. Ensure that the cursor is in the **Test\_PhotoGallery\_Model\_Type** test method code block, and then type the following code.

  ```cs
        var controller = new PhotoController();
        var result = controller._PhotoGallery() as PartialViewResult;
        Assert.AreEqual(typeof(List<Photo>), result.Model.GetType());
```
9. Ensure that the cursor is at the end of the **Test\_PhotoGallery\_Model\_Type** test method code block, press Enter twice, and then type the following code.

  ```cs
        [TestMethod]
        public void Test_GetImage_Return_Type()
        {
        }
```
10. Ensure that the cursor is in the **Test\_GetImage\_Return\_Type** test method code block, and then type the following code.

  ```cs
        var controller = new PhotoController();
        var result = controller.GetImage(1) as ActionResult;
        Assert.AreEqual(typeof(FileContentResult), result.GetType());
```
11. On the TEST menu of the PhotoSharingApplication - Microsoft Visual Studio window, point to Run, and then click All Tests.
12. In the Test Explorer pane, expand **Passed Tests (1)**, and then note that only the **Test\_Index\_Return\_View** test is passed.
13. Under **Failed Tests (2)**, note that the **Test\_GetImage\_Return\_Type** andthe **Test\_PhotoGallery\_Model\_Type** tests are failed.
14. Under **Failed Tests (2)**, click **Test\_GetImage\_Return\_Type**, and then note that the test failed while trying to connect to the database.
15. Under Failed Tests (2), click **Test\_PhotoGallery\_Model\_Type**, and then note that the test failed while trying to connect to the database.
16. In the Test Explorer pane, click **Close**.

#### Task 3: Implement a repository

1. In the **Solution Explorer** pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, expand PhotoSharingApplication.

2. In the Solution Explorer pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, right-click **Models**, click **Add**, and then click **New Item**.
3. In the navigation pane of the **Add New Item - PhotoSharingApplication** dialog box, click **Code**, and then, in the result pane, click **Interface**.
4. In the **Name** text box, type **IPhotoSharingContext**, and then click **Add**.
5. In the IPhotoSharingContext.cs code window, locate the following code.

  ```cs
    interface IPhotoSharingContext
```
6. Replace the code with the following code.

  ```cs
    public interface IPhotoSharingContext
```
7. Ensure that the cursor is in the **IPhotoSharingContext** interface code block, press Enter, and then type the following code.

  ```cs
    IQueryable<Photo> Photos { get; }
```
8. Ensure that the cursor is at the end of the **Photos** property code block, press Enter, and then type the following code.

  ```cs
    IQueryable<Comment> Comments { get; }
```
9. Ensure that the cursor is at the end of the **Comments** property code block, press Enter, and then type the following code.

  ```cs
    int SaveChanges();
```
10. Ensure that the cursor is at the end of the **SaveChanges** method code block, press Enter, and then type the following code.

  ```cs
    T Add<T>(T entity) where T : class;
```
11. Ensure that the cursor is at the end of the **Add** method code block, press Enter, and then type the following code.

  ```cs
    Photo FindPhotoById(int ID);
```
12. Ensure that the cursor is at the end of the **FindPhotoById** method code block, press Enter, and then type the following code.

  ```cs
    Comment FindCommentById(int ID);
```
13. Ensure that the cursor is at the end of the **FindCommentById** method code block, press Enter, and then type the following code.

  ```cs
    T Delete<T>(T entity) where T : class;
```
14. In the Solution Explorer pane, click **PhotoSharingContext.cs**.
15. In the PhotoSharingContext.cs code window, locate the following code.

  ```cs
    public class PhotoSharingContext : DbContext
```
16. Append the following code to the existing line of code.

  ```cs
    , IPhotoSharingContext
```
17. Ensure that the cursor is at the end of the **Comments DbSet** property code block, press Enter twice, and then type the following code.

  ```cs
    IQueryable<Photo> IPhotoSharingContext.Photos
    {
      get { return Photos; }
    }
```
18. Ensure that the cursor is at the end of the **Photos** property code block, press Enter twice, and then type the following code.

  ```cs
    IQueryable<Comment> IPhotoSharingContext.Comments
    {
      get { return Comments; }
    }
```
19. Ensure that the cursor is at the end of the **Comments** property code block, press Enter twice, and then type the following code.

  ```cs
    int IPhotoSharingContext.SaveChanges()
    {
      return SaveChanges();
    }
```
20. Ensure that the cursor is at the end of the **SaveChanges** method code block, press Enter twice, and then type the following code.

  ```cs
    T IPhotoSharingContext.Add<T>(T entity)
    {
      return Set<T>().Add(entity);
    }
```
21. Ensure that the cursor is at the end of the **Add** method code block, press Enter twice, and then type the following code.

  ```cs
    Photo IPhotoSharingContext.FindPhotoById(int ID)
    {
      return Set<Photo>().Find(ID);
    }
```
22. Ensure that the cursor is at the end of the **FindPhotoById** code block, press Enter twice, and then type the following code.

  ```cs
    Comment IPhotoSharingContext.FindCommentById(int ID)
    {
      return Set<Comment>().Find(ID);
    }
```
23. Ensure that the cursor is at the end of the **FindCommentById** method code block, press Enter twice, and then type the following code.

  ```cs
    T IPhotoSharingContext.Delete<T>(T entity)
    {
      return Set<T>().Remove(entity);
    }
```
24. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save All**.
25. On the **BUILD** menu, click **Build Solution**.

#### Task 4: Refactor the photo controller to use the repository

1. In the Solution Explorer pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, expand **Controllers**, and then click **PhotoController.cs**.

2. In the PhotoController.cs code window, locate the following code.

  ```cs
    private PhotoSharingContext context = new PhotoSharingContext();
```
3. Replace the code with the following code.

  ```cs
    private IPhotoSharingContext context;
```
4. Ensure that the cursor is at the end of the **context** object code block, press Enter twice, and then type the following code.

  ```cs
    public PhotoController()
    {
      context = new PhotoSharingContext();
    }
```
5. Ensure that the cursor is at the end of the **PhotoController** constructor code block, press Enter twice, and then type the following code.

  ```cs
    public PhotoController (IPhotoSharingContext Context)
    {
      context = Context;
    }
```
6. In the PhotoController.cs code window, locate the **Display** action method, and then locate the following code.

  ```cs
    Photo photo = context.Photos.Find(id);
```
7. Replace the code with the following code.

  ```cs
    Photo photo = context.FindPhotoById(id);
```
8. Locate the **Create** action method for the POST verb, and then locate the following code.

  ```cs
    context.Photos.Add(photo);
```
9. Replace the code with the following code.

  ```cs
    context.Add<Photo>(photo);
```
10. Locate the **Delete** action method, and then locate the following code.

  ```cs
    Photo photo = context.Photos.Find(id);
```
11. Replace the code with the following code.

  ```cs
    Photo photo = context.FindPhotoById(id);
```
12. Locate the **DeleteConfirmed** action method, and then locate the following code.

  ```cs
    Photo photo = context.Photos.Find(id);
```
13. Replace the code with the following code.

  ```cs
    Photo photo = context.FindPhotoById (id);
```
14. In the **DeleteConfirmed** action method, locate the following code.

  ```cs
    context.Photos.Remove(photo);
```
15. Replace the code with the following code.

  ```cs
    context.Delete<Photo>(photo);
```
16. Locate the **GetImage** action method, and then locate the following code.

  ```cs
    Photo photo = context.Photos.Find(id);
```
17. Replace the code with the following code.

  ```cs
    Photo photo = context.FindPhotoById(id);
```
18. On the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Start Debugging**.
19. On the **Welcome to Adventure Works Photo Sharing** page, click **Display** corresponding to any photo of your choice.
20. On the **Sample Photo 5** page, note that the changes are displayed, and then, in the Windows **Microsoft Edge** window, click **Close**.
21. On the DEBUG menu of the **PhotoSharingApplication - Microsoft Visual Studio**, click Stop Debugging.

#### Task 5: Refactor the tests to use a mock repository

1. In the Solution Explorer pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, right-click **PhotoSharingTests**, click **Add**, and then click **New Folder**.

2. In the **NewFolder1** box, type **Doubles**, and then press Enter.
3. In the Solution Explorer pane, right-click **Doubles**, click **Add**, and then click **Existing Item**.
4. In the **Add Existing Item - PhotoSharingTests** dialog box, go to **Allfiles/20486C/Mod06/Labfiles/Fake Repository/FakePhotoSharingContext.cs**, and then click **Add**.
5. In the Solution Explorer pane, click **PhotoControllerTests.cs**.
6. In the PhotoControllerTests.cs code window, ensure that the cursor is at the end of the PhotoSharingApplication.Contollers namespace, press Enter, and then type the following code.

  ```cs
        using System.Linq;
        using PhotoSharingTests.Doubles;
```
7. Locate the **Test\_Index\_Return\_View** test method, and then locate the following code.

  ```cs
    PhotoController controller = new PhotoController();
```
8. Replace the code with the following code.

  ```cs
        var context = new FakePhotoSharingContext();
        var controller = new PhotoController(context);
```
9. Locate the **Test\_PhotoGallery\_Model\_Type** test method, ensure that the cursor is at the beginning of the **Test\_PhotoGallery\_Model\_Type** test method code block, press Enter, and then type the following code.
 
   ```cs
        var context = new FakePhotoSharingContext();
        context.Photos = new [] {
           new Photo(),
           new Photo(),
           new Photo(),
           new Photo()
        }.AsQueryable();
        var controller = new PhotoController(context);
    ```

10. In the **Test\_PhotoGallery\_Model\_Type** test method, locate the following code, select the located code, and then press Delete.

  ```cs
    var controller = new PhotoController();
```
11. Locate the **Test\_GetImage\_Return\_Type** test method, ensure that the cursor is at the beginning of the **Test\_GetImage\_Return\_Type** method, press Enter, and then type the following code.

  ```cs
    var context = new FakePhotoSharingContext();
```
12. Ensure that the cursor is at the end of the code you just typed, press Enter twice, and then type the following code.

  ```cs
    context.Photos = new [] {
           new Photo{ PhotoID = 1, PhotoFile = new byte[1], ImageMimeType = "image/jpeg"},
           new Photo{ PhotoID = 2, PhotoFile = new byte[1], ImageMimeType = "image/jpeg"},
           new Photo{ PhotoID = 3, PhotoFile = new byte[1], ImageMimeType = "image/jpeg"},
           new Photo{ PhotoID = 4, PhotoFile = new byte[1], ImageMimeType = "image/jpeg"}
        }.AsQueryable();
```
13. In the **Test\_GetImage\_Return\_Type** method code block, locate the following code.

  ```cs
    var controller = new PhotoController();
```
14. Replace the code with the following code.

  ```cs
    var controller = new PhotoController(context);
```
15. On the **TEST** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Run**, and then click **All Tests**.
16. In the Test Explorer pane, note that all tests have passed.

   >**Note:** All the tests passed because the FakePhotoSharingContext test double can return test values without connecting to a database. A test double is an object used in test projects that behaves like the corresponding object in the web application project.

17. In the Test Explorer pane, click **Close**.

#### Task 6: Add further tests

1. In the Solution Explorer pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **PhotoControllerTests.cs**.

2. In the PhotoControllerTests.cs code window, ensure that the cursor is at the end of the **PhotoControllerTests** class, press Enter twice, and then type the following code.

  ```cs
        [TestMethod]
        public void Test_PhotoGallery_No_Parameter()
        {
        }
```
3. In the **Test\_PhotoGallery\_No\_Parameter** test method code block, type the following code, and then press Enter twice.

  ```cs
        var context = new FakePhotoSharingContext();
        context.Photos = new [] {
           new Photo(),
           new Photo(),
           new Photo(),
           new Photo()
        }.AsQueryable();
        var controller = new PhotoController(context);
```
4. In the **Test\_PhotoGallery\_No\_Parameter** test method code block, type the following code, and then press Enter.

  ```cs
    var result = controller._PhotoGallery() as PartialViewResult;
```
5. In the **Test\_PhotoGallery\_No\_Parameter** test method code block, type the following code.

  ```cs
    var modelPhotos = (IEnumerable<Photo>)result.Model;
    Assert.AreEqual(4, modelPhotos.Count());
```
6. Select all the code in the **Test\_PhotoGallery\_No\_Parameter** method, including the **[TestMethod]** annotation.
7. On the **Edit** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Copy**.
8. Ensure that the cursor is at the end of the **Test\_PhotoGallery\_No\_Parameter** method.
9. On the **Edit** menu, click **Paste**.
10. Locate the following code in the code block you just pasted.

  ```cs
    public void Test_PhotoGallery_No_Parameter()
```
11. Replace the code with the following line of code.

  ```cs
    public void Test_PhotoGallery_Int_Parameter()
```
12. In the **Test\_PhotoGallery\_Int\_Parameter** method, locate the following code.

  ```cs
    var result = controller._PhotoGallery() as PartialViewResult;
```
13. In the **Test\_PhotoGallery\_Int\_Parameter** method, replace the located code with the following code.

  ```cs
    var result = controller._PhotoGallery(3) as PartialViewResult;
```
14. In the **Test\_PhotoGallery\_Int\_Parameter** , method, locate the following code.

  ```cs
    var modelPhotos = (IEnumerable<Photo>)result.Model;
    Assert.AreEqual(4, modelPhotos.Count());
```
15. In the **Test\_PhotoGallery\_Int\_Parameter** , method, replace the located code with the following code.

  ```cs
    var modelPhotos = (IEnumerable<Photo>)result.Model;
    Assert.AreEqual(3, modelPhotos.Count());
```
16. On the **TEST** menu of the **PhotoSharingApplication -Microsoft Visual studio** window, click **TEST**, point to **Run**, and then click **All Tests**.
17. In the Test Explorer pane, note that all tests passed.
18. In the Test Explorer pane, click **Close**.

    >**Results** : After completing this exercise, you will be able to add a set of PhotoController tests defined in the PhotoSharingTests project of the Photo Sharing application.

### Exercise 2: Optional—Configuring Exception Handling

#### Task 1: Edit Web.config for exception handling

1. In the Solution Explorer pane, under PhotoSharingApplication, click **Web.config**.

   >**Note:** Ensure that you click the Web.config file in the root folder, and not the Web.config file in the **Views** folder.

2. In the Web.config code window, locate the following code.

  ```cs
    <system.web>
```
3. Ensure that the cursor is at the end of the code, press Enter, and then type the following code.

  ```cs
    <customErrors mode="On" defaultRedirect="Error">
    </customErrors>
```
4. In the **&lt;customErrors&gt;** element, type the following code.

  ```cs
    <error statusCode="500" redirect="~/Error.html"/>
```
5. In the Solution Explorer pane, right-click **PhotoSharingApplication**, point to **Add**, and then click **New Item**.
6. In the navigation pane of the **Add New Item - PhotoSharingApplication** dialog box, under Visual C#, click **Web**, and then, in the result pane, click **HTML Page**.
7. In the **Name** text box, type **Error.html**, and then click **Add**.
8. In the **TITLE** element of the Error.html code window, type the following code.

  ```cs
    Error
```
9. In the **BODY** element, type the following code.

  ```cs
    <h1>500 Error</h1>
    <p>There has been an internal server error</p>
```

#### Task 2: Create a custom error view
1. In the Solution Explorer pane, collapse **Controllers**, collapse **Models**, and then expand **Views**.
2. In the Solution Explorer pane, under **Views**, right-click **Shared**, point to **Add**  and then click **View**.
3. In the **View name** text box of the **Add View** dialog box, type **Error**.
4. In the **Template** box, ensure that **Empty (without model)** is selected.
5. In the **Add View** dialog box, ensure that the **Use a layout page** check box is not selected, and then click **Add**.
6. In the Error.cshtml code window, locate the following code.

  ```cs
    <title>Error</title>
```
7. Replace the code with the following code.

  ```cs
    <title>Custom Error</title>
```
8. In the Error.cshtml code window, ensure that the cursor is at the beginning of the code window, press Enter twice, and then type the following code.

  ```cs
    @model System.Web.Mvc.HandleErrorInfo
```
9. In the **DIV** element, type the following code.

  ```cs
    <h1>MVC Error</h1>
```
10. Ensure that the cursor is at the end of the **H1** element, press Enter, and then type the following code.

  ```cs
    Controller: @Model.ControllerName <br />
```
11. Ensure that the cursor is at the end of the **&lt;br /&gt;** tag corresponding to the **ControllerName** property, press Enter, and then type the following code.

  ```cs
    Action: @Model.ActionName <br />
```
12. Ensure that the cursor is at the end of the **&lt;br /&gt;** tag corresponding to the **ActionName** property, press Enter, and then type the following code.

  ```cs
    Message: @Model.Exception.Message
```
13. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save All**.

#### Task 3: Configure errors in the PhotoController class

1. In the Solution Explorer pane, collapse **Views**, expand **Controllers**, and then click **PhotoController.cs**.

2. In the PhotoController.cs code window, locate the following code.

  ```cs
    [ValueReporter]
    public class PhotoController : Controller
```
3. In the PhotoController.cs code window, ensure that the cursor is at the beginning of the **[ValueReporter]** annotation, press Enter, and then type the following code.

  ```cs
    [HandleError(View = "Error")]
```
4. In the **PhotoController** class code block, ensure that the cursor is at the end of the **GetImage** action, press Enter, and then type the following code.

  ```cs
    public ActionResult SlideShow()
    {
    }
```
5. In the **SlideShow** action code block, type the following code.

  ```cs
    throw new NotImplementedException("The SlideShow action is not yet ready");
```

#### Task 4: Raise errors
1. On the **DEBUG** menu of the **PhotoSharingApplication (Debugging) – Microsoft Visual Studio** window, click **Stop Debugging**.
2. On the **Welcome to Adventure Works Photo Sharing** page, click **Display** corresponding to the **Sample Photo 5** image.
3. In **Microsoft Edge**, replace the URL **/Photo/Display/5** with **/Photo/Display/malformedID**, and then click **Go**.
4. In **Microsoft Edge**, note that the custom error view displays the controller, action, and error message.
5. In **Microsoft Edge**, replace the URL **/Photo/Display/malformedID** with **/Photo/SlideShow**, and then click **Go**.
6. The Visual Studio application breaks on the **throw** statement.
7. In the **NotImplementedException** window, click **Close**.
8. On the **DEBUG** menu of the **PhotoSharingApplication (Debugging) - Microsoft Visual Studio** window, click **Stop Debugging**.
9. In the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Close**.

   >**Results** : After completing this exercise, you will be able to:
   >- Configure a custom error handling strategy for an MVC application.

©2016 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.

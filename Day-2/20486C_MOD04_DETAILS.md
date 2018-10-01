﻿# Module 4: Developing ASP.NET MVC 5 Controllers

# Lab: Developing ASP.NET MVC 5 Controllers

### Lab Setup

Estimated Time: **60 minutes**

### Preparation Steps

1. Ensure that you have cloned the 20486C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20486-DevelopingASPNETMVCWebApplications/tree/master/Allfiles

### Exercise 1: Adding an MVC Controller and Writing the Actions

#### Task 1: Create a photo controller.

1. Go to **Allfiles\20486c\Mod04\Labfiles\PhotoSharingApplication_04_begin**, and then double-click **PhotoSharingApplication.sln.**

2. In the Solution Explorer pane, expand **PhotoSharingApplication**, right-click **Controllers**, point to **Add**, and then click **Controller**.
3. Select **MVC 5 Controller - Empty**, and then click **Add**.
4. In the **Controller name** text box of the **Add Controller** dialog box, type **PhotoController**, and then click **Add**.
5. In the PhotoController.cs code window, place the mouse cursor at the end of the System.Web.MVC namespace, press Enter, and then type the following code.

  ```cs
       using System.Globalization;
       using PhotoSharingApplication.Models;
```
6. In the PhotoController class code block, press Enter, type the following code, and then press Enter.

  ```cs
        private PhotoSharingContext context = new PhotoSharingContext();
```

#### Task 2: Create the Index action

1. In the PhotoController.cs code window, replace the **Index** action code with the following code.

  ```cs
       return View("Index", context.Photos.ToList());
```

#### Task 3: Create the Display action.

1. In the PhotoController.cs code window, place the mouse cursor at the end of the **Index** action code block, press Enter, type the following code, and then press Enter.

  ```cs
       public ActionResult Display(int id)
       {
       }
```
2. In the **Display** action code block, type the following code, and then press Enter.

  ```cs
       Photo photo = context.Photos.Find(id);
```
3. In the **Display** action code block, type the following code, and then press Enter.

  ```cs
       if (photo == null)
       {
          return HttpNotFound();
       }
```
4. In the **Display** action code block, type the following code, and then press Enter.

  ```cs
       return View("Display", photo);
```

#### Task 4: Write the Create actions for GET and POST HTTP verbs

1. In the PhotoController.cs code window, place the mouse cursor at the end of the **Display** action code block, press Enter twice, and then type the following code.

  ```cs
       public ActionResult Create()
       {
       }
```
2. In the **Create** action code block, type the following code, and then press Enter.

  ```cs
       Photo newPhoto = new Photo();
       newPhoto.CreatedDate = DateTime.Today;
```
3. In the **Create** action code block, type the following code.

  ```cs
       return View("Create", newPhoto);
```
4. Ensure that the cursor is at the end of the **Create** action code block, press Enter, and then type the following code.

  ```cs
       [HttpPost]
       public ActionResult Create(Photo photo, HttpPostedFileBase image)
       {
       }
```
5. In the **Create** action code block that you newly created with HTTP verb POST, type the following code, and then press Enter.

  ```cs
       photo.CreatedDate = DateTime.Today;
```
6. In the **Create** action code block created with HTTP verb POST, type the following code, and then press Enter.

  ```cs
       if (!ModelState.IsValid)
       {
           return View("Create", photo);
       }
       else
       {
          if (image != null)
          {
             photo.ImageMimeType = image.ContentType;
             photo.PhotoFile = new byte[image.ContentLength];
             image.InputStream.Read(photo.PhotoFile, 0, image.ContentLength);
          }
       }
```
7. In the **Create** action code block created with HTTP verb POST, immediately after the code you just added, press Enter, type the following code, and then press Enter.

  ```cs
       context.Photos.Add(photo);
       context.SaveChanges();
       return RedirectToAction("Index");
```

#### Task 5: Create the Delete actions for GET and POST HTTP verbs

1. In the PhotoController.cs code window, ensure that the cursor is at the end of the **Create** action code block that you created with HTTP verb POST, press Enter twice, and then type the following code.

  ```cs
       public ActionResult Delete (int id)
       {
       }
```
2. In the **Delete** action code block, type the following code, and then press Enter.

  ```cs
       Photo photo = context.Photos.Find(id);
```
3. In the **Delete** action code block, type the following code, and then press Enter.

  ```cs
       if (photo == null)
       {
          return HttpNotFound();
       }
```
4. In the **Delete** action code block, type the following code.

  ```cs
       return View("Delete", photo);
```
5. Ensure that the cursor is at the end of the **Delete** action code block, press Enter twice, and then type the following code.

  ```cs
       [HttpPost]
       [ActionName("Delete")]
       public ActionResult DeleteConfirmed(int id)
       {
       }
```
6. In the **Delete** action code block that you newly created, type the following code, and then press Enter.

  ```cs
       Photo photo = context.Photos.Find(id);
```
7. In the **Delete** action code block, type the following code.

  ```cs
        context.Photos.Remove(photo);
        context.SaveChanges();
        return RedirectToAction("Index");
```

#### Task 6: Create the GetImage action

1. In the PhotoController.cs code window, ensure that the cursor is at the end of the **Delete** action code block, press Enter twice, and then type the following code.

  ```cs
       public FileContentResult GetImage(int id)
       {
       }
```
2. In the **GetImage** action code block, type the following code, and then press Enter.

  ```cs
       Photo photo = context.Photos.Find(id);
```
3. In the **GetImage** action code block, type the following code, and then press Enter.

  ```cs
       if (photo != null)
       {
          return File(photo.PhotoFile, photo.ImageMimeType);
       }
       else
       {
          return null;
       }
```
4. On the toolbar of the PhotoSharingApplication - Microsoft Visual Studio window, click **Save Controllers\PhotoController.CS (Ctrl+S)**.

>**Results** : After completing this exercise, you will be able to create an MVC controller that implements common actions for the Photo model class in the Photo Sharing application.

### Exercise 2: Optional—Writing the Action Filters in a Controller

#### Task 1: Add an action filter class

1. In the Solution Explorer pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, right-click **Controllers**, point to **Add**, and then click **Class**.
2. In the **Add New Item - PhotoSharingApplication** dialog box, in the **Name** text box, type **ValueReporter**, and then click **Add**.
3. In the ValueReporter.cs code window of the **PhotoSharingApplication - Microsoft Visual Studio** window, ensure that the cursor is at the end of System.Web namespace, press Enter, and then type the following code.

  ```cs
       using System.Diagnostics;
       using System.Web.Mvc;
       using System.Web.Routing;
```
4. In the ValueReporter.cs code window, locate the following code.

  ```cs
       public class ValueReporter
```
5. Append the following code to the existing line of code.

  ```cs
       : ActionFilterAttribute
```

#### Task 2: Add a logValues method to the action filter class

1.  In the **ValueReporter** class code block of the ValueReporter.cs code window, press Enter, and then type the following code.

  ```cs
        private void logValues(RouteData routeData)
        {
        }
```
2. In the **logValues** method code block, type the following code.

  ```cs
       var controller = routeData.Values["controller"];
       var action = routeData.Values["action"];
       string message = string.Format("Controller: {0}; Action: {1}", controller, action);
       Debug.WriteLine(message, "Action Values");
```
3. In the **logValues** method code block, press Enter twice, and then type the following code.

  ```cs
       foreach (var item in routeData.Values)
       {
       }
```
4. In the **foreach** loop, type the following code.

  ```cs
       Debug.WriteLine(">> Key: {0}; Value: {1}", item.Key, item.Value);
```

#### Task 3: Add a handler for the OnActionExecuting event.

1. In the ValueReporter class code block, ensure that the cursor is before the **logValues** method code block, press Enter, and then type the following code.

  ```cs
       override
```
2. Press the Spacebar, and then double-click the following code from the list.

  ```cs
       OnActionExecuting(ActionExecutingContext filterContext)
```
3. In the **OnActionExecuting** event code block, select the following code, and then press Delete.

  ```cs
       base.OnActionExecuting(filterContext);
```
4. In the **OnActionExecuting** event code block, type the following code.

  ```cs
       logValues(filterContext.RouteData);
```
5. On the toolbar of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save Controllers\ValueReporter.cs (Ctrl+S)**.


#### Task 4: Register the Action Filter with the Photo Controller.

1.  In the Solution Explorer pane, under Controllers, click **PhotoController.cs**

2. In the **PhotoController.cs** code window, locate the following code.

  ```cs
       public class PhotoController : Controller
```
3. Ensure that the cursor is before the PhotoController class code block, press Enter, and then type the following code.

  ```cs
       [ValueReporter]
```
4. On the toolbar of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save Controllers\PhotoController.cs (Ctrl+S)**.

>**Results** : After completing this exercise, you should have created an action filter class that logs the details of actions, controllers, and parameters to the Visual Studio Output window, whenever an action is called.

### Exercise 3: Using the Photo Controller

#### Task 1: Create the Index and Display views

1. On the **BUILD** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Build Solution**.
2. In the PhotoController.cs code window, locate the following code, right-click the code, and then click **Add View**.

  ```cs
       public ActionResult Index()
```
3. In the **Add View** dialog box, ensure that the name in the **View name** box is **Index**.
4. In the **Template** selector, select **List**.
5. In the **Model class** box, click **Photo (PhotoSharingApplication.Models)**.
6. In the **Add View** dialog box, ensure that the **Reference script libraries** and the **Use a layout** check boxes are selected, and then click **Add**.
7. In the Index.cshtml code window, select the following code.

  ```cs
       @Html.ActionLink("Details", "Details", new { id=item.PhotoID })
```
8. Replace the selected code with the following code.

  ```cs
        @Html.ActionLink("Display", "Display", new { id=item.PhotoID })
```
9. In the Solution Explorer pane, under Controllers, click **PhotoController.cs**.
10. In the PhotoController.cs code window, locate the following code, right-click the code, and then click **Add View.**

  ```cs
        public ActionResult Display(int id)
```
11. In the **Add View** dialog box, ensure that the name in the **View name** box is **Display**.
12. In the **Template** box, ensure that **Details** is selected.
13. In the **Model class** box, ensure that the **Photo (PhotoSharingApplication.Models)** model class is selected.
14. In the **Add View** dialog box, ensure that the **Reference script libraries** and the **Use a layout** check boxes are selected, and then click **Add**.


#### Task 2: Use the GetImage action in the Display view

1. In the Display.cshtml code window, locate the following code.

  ```cs
        <dd>
            @Html.DisplayFor(model => model.Title)
        </dd>

```
2. Ensure that the cursor is at the end of the **model.Title** property code block, press Enter, and then type the following code.

  ```cs
       @if (Model.PhotoFile != null) 
       {
       }
```
3. In the **if** statement code block, type the following code.

  ```cs
       <img width="800" src="" />
```
4. In the **src** attribute of the **&lt;img&gt;** tag, type the following code.

  ```cs
       @Url.Action("GetImage", "Photo", new { id=Model.PhotoID })
```
5. On the toolbar of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save Views\Photo\Display.cshtml (Ctrl+S)**.
6. On the **BUILD** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Build Solution**.

#### Task 3: Run the application and display a photo.

1. On the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Start Debugging**.

   >**Note:** The Microsoft Edge window displays an error message. The error message is expected because the home page view has not been added.

2. In the Address bar of the Microsoft Edge window, append the existing URL with **photo/index**, and then press Enter.
3. On the taskbar, click the **PhotoSharingApplication - Microsoft Visual Studio** icon.
4. In the Output pane of the **PhotoSharingApplication (Running) - Microsoft Visual Studio** window, click the **Output** tab.
5. On the **Output** tab, locate the following line of code.

  ```cs
       >>Key: controller; Value: photo
       >>Key: action; Value: index
```
   >**Note:** In the above line of code, note that there are no calls to the **Display** and **GetImage** actions.

6. On the taskbar, click the **Microsoft Edge** icon.
7. On the Index page, click **Display** corresponding to the title **Me standing on top of a mountain**.

**Note:** The selected image is displayed on the Display page.

8. On the taskbar, click the **PhotoSharingApplication - Microsoft Visual Studio** icon.
9. In the Output pane of the **PhotoSharingApplication (Running) - Microsoft Visual Studio** window, click the **Output** tab.
10. On the **Output** tab, locate the following code.

  ```cs
        >>Key: controller; Value: photo
        >>Key: action; Value: Display
        >>Key: id; Value: 1 Action Values: Controller: Photo; Action: GetImage
        >>Key: controller; Value: Photo
        >>Key: action; Value: GetImage
        >>Key: id; Value: 1
```
   >**Note:** In the above code, note that there are calls to the **Display** and **GetImage** actions. Each call passes a **PhotoID**.

11. On the **DEBUG** menu of the **PhotoSharingApplication (Running) - Microsoft Visual Studio** window, click **Stop Debugging**.
12. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Exit**.

>**Results** : After completing this exercise, you should have created an MVC application with views that you can use to test controllers, actions, and action filters.

©2016 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.

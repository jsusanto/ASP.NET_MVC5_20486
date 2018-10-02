﻿# Module 5: Developing ASP.NET MVC 5 Views

# Lab: Developing ASP.NET MVC 5 Views

### Lab Setup

Estimated Time: **60 minutes**

### Preparation Steps

1. Ensure that you have cloned the 20486C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20486-DevelopingASPNETMVCWebApplications/tree/master/Allfiles

### Exercise 1: Adding a View for Photo Display

#### Task 1: Add a new display view.

1. On the taskbar, click the **File Explorer** icon.
2. In the **Libraries** window, navigate to **Allfiles\20486c\Mod05\LabFiles\PhotoSharingApplication_05_begin**, and then double-click **PhotoSharingApplication.sln**.
3. In the Solution Explorer pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, expand  **PhotoSharingApplication**, expand **Controllers**, and then click **PhotoController.cs**.
4. On the **BUILD** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click Build Solution.
5. In the PhotoController.cs code window, locate the following code, right-click the code, and then click **Add View**.

  ```cs
       public ActionResult Display(int id)
```
6. In the **Add View** dialog box, ensure that the name in the **View name** box is **Display**.
7. In the **Template** box, ensure that **Empty** is selected.
8. In the **Model class** box, click **Photo (PhotoSharingApplication.Models)**.
9. In the **Add View** dialog box, clear the **Use a layout page** check box, and then click **Add**.

#### Task 2: Complete the photo display view.

1. In the Display.cshtml code window, locate the following code.

  ```cs
       <title>Display</title>
```
2. Replace the **TITLE** element with the following code.

  ```cs
       <title> Photo: @Model.Title </title>
```
3. In the **DIV** element, type the following code.

  ```cs
       <h2>"@Model.Title"</h2>
```
4. Place the mouse cursor at the end of the **&lt;/h2&gt;** tag, press Enter twice, and then type the following code.

  ```cs
       <img width="800" src="" />
```
5. In the **src** attribute of the **&lt;img&gt;** tag, type the following code.

  ```cs
      @Url.Action("GetImage", "Photo", new { id = Model.PhotoID })
```
6. Place the mouse cursor at the end of the **&lt;img&gt;** tag, press Enter twice, and then type the following code.

  ```cs
       <p>
         @Html.DisplayFor(model => model.Description)
       </p>
```
7. Place the mouse cursor at the end of the **&lt;/p&gt;** tag corresponding to the **Description** property, press Enter twice, and then type the following code.

  ```cs
       <p>
           @Html.DisplayNameFor(model =>model.UserName): 
           @Html.DisplayFor(model => model.UserName)
       </p>
```
8. Place the mouse cursor at the end of the **&lt;/p&gt;** tag corresponding to the **UserName** property, press Enter twice, and then type the following code.

  ```cs
       <p>
          @Html.DisplayNameFor(model => model.CreatedDate):
          @Html.DisplayFor(model => model.CreatedDate)
       </p>
```
9. Place the mouse cursor at the end of the **&lt;/p&gt;** tag corresponding to the **CreatedDate** property, press Enter twice, and then type the following code.

  ```cs
       <p>
            @Html.ActionLink("Back to List", "Index")
       </p>
```
10. On the toolbar of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save Views\Photo\Display.cshtml(Ctrl+S)**.

>**Results** : After completing this exercise, you will be able to add a single display view to the Photo Sharing web application and display the properties of a photo.

### Exercise 2: Adding a View for New Photos

#### Task 1: Add a new create view.

1. In the Solution Explorer pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, under Controllers, click  **PhotoController.cs**.

2. In the PhotoController.cs code window, locate the following code, right-click the code, and then click **Add View**.

  ```cs
       public ActionResult Create()
```
3. In the **Add View** dialog box, ensure that the name in the **View name** box is **Create**.
4. In the **Template** box, ensure that **Empty** is selected.
5. In the **Model class** box, ensure that the **Photo (PhotoSharingApplication.Models)** class is selected.
6. Ensure that the **Create as a partial view** and **Use a layout page** check boxes are clear, and then click **Add**.

#### Task 2: Complete the photo create view.

1. In the **Create.cshtml** code window, locate the following code.

  ```cs
       <title>Create</title>
```
2. **Replace** the **TITLE** element with the following code.

  ```cs
       <title>Create New Photo</title>
```
3. In the **DIV** element of the Create.cshtml code window, type the following code, and then press Enter twice.

  ```cs
       <h2>Create New Photo</h2>
```
4. In the **DIV** element, place the mouse cursor at the end of the **&lt;/h2&gt;** tag, press Enter, and then type the following code.

  ```cs
       @using (Html.BeginForm("Create", "Photo", FormMethod.Post, new { enctype = "multipart/form-data" }))
       {
       }
```
5. In the **using** code block, press Enter, and then type the following code.

  ```cs
       @Html.ValidationSummary(true)
```
6. Place the mouse cursor at the end of the **ValidationSummary** helper, press Enter, and then type the following code.

  ```cs
       <p>
           @Html.LabelFor(model => model.Title):
           @Html.EditorFor(model => model.Title) 
           @Html.ValidationMessageFor(model => model.Title) 
       </p>
```
7. Place the mouse cursor at the end of the **&lt;/p&gt;** tag corresponding to the **Title** property, press Enter twice, and then type the following code.

  ```cs
       <p>
            @Html.LabelFor(model => model.PhotoFile):
           <input type="file" name="Image" />
       </p>
```
8. Place the mouse cursor at the end of the **&lt;/p&gt;** tag corresponding to the **Image** controls, press Enter twice, and then type the following code.

  ```cs
       <p>
           @Html.LabelFor(model => model.Description):
           @Html.EditorFor(model => model.Description)
           @Html.ValidationMessageFor( model => model.Description)
       </p>
```
9. Place the mouse cursor at the end of the **&lt;/p&gt;** tag corresponding to the **Description** controls, press Enter twice, and then type the following code.

  ```cs
       <p>
            @Html.LabelFor(model => model.UserName):
            @Html.DisplayFor(model => model.UserName)
       </p>
```
10. Place the mouse cursor at the end of the **&lt;/p&gt;** tag corresponding to the **UserName** controls, press Enter twice, and then type the following code.

  ```cs
       <p>
            @Html.LabelFor( model => model.CreatedDate):
            @Html.DisplayFor( model => model.CreatedDate)
       </p>          
```
11. Place the mouse cursor at the end of the **&lt;/p&gt;** tag **corresponding** to the **CreatedDate** controls, press Enter twice, and then type the following code.

  ```cs
       <p>
            <input type="submit" value="Create" />
            @Html.ActionLink("Back to List", "Index") 
       </p>
```
12. On the toolbar of the PhotoSharingApplication - Microsoft Visual Studio window, click **Save Views\Photo\Create.cshtml(Ctrl+S)**.

>**Results** : After completing this exercise, you will be able to create a web application with a Razor view to display new photos.

### Exercise 3: Creating and Using a Partial View

#### Task 1: Add a gallery action to the Photo Controller.

1. In the Solution Explorer pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, under Controllers, click **PhotoController.cs**.
2. In the PhotoController.cs code window, locate the **Index** action code block.
3. Place the mouse cursor at the end of the **Index** action code block, press Enter twice, and then type the following code.

  ```cs
       [ChildActionOnly]
       public ActionResult _PhotoGallery(int number = 0)
       { 
       }
```
4. In the **_PhotoGallery** action code block, type the following code.

  ```cs
       List<Photo> photos;
       if (number == 0)
       {
          photos = context.Photos.ToList();
       }
```
5. Place the mouse cursor at the end of the **if** code block, press Enter, and then type the following code.

  ```cs
       else
       {
         photos = (from p in context.Photos orderby p.CreatedDate descending select p).Take(number).ToList(); 
       }
```
6. Place the mouse cursor at the end of the **else** code block, press Enter, and then type the following code.

  ```cs
        return PartialView("_PhotoGallery", photos);
```
7. On the toolbar of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save Controllers\PhotoController.cs(Ctrl+S)**.

#### Task 2: Add a photo gallery partial view.

1. In the Solution Explorer pane, under Controllers, click **PhotoController.cs**.
2. In the PhotoController.cs code window, locate the following code, right-click the code, and then click **Add View**.

  ```cs
       public ActionResult _PhotoGallery(int number = 0)
```
3. In the **View name** box of the **Add View** dialog box, ensure that the name is **_PhotoGallery**.
4. In the **Template** box, ensure that **Empty** is selected.
5. In the **Model class** box, ensure that the value is **Photo (PhotoSharingApplication.Models)**.
6. In the **Add View** dialog box, select the **Create as a partial view** check box, and then click **Add**.

   >**Note:** In the _PhotoGallery.cshtml code window, the code block @model PhotosharingApplication.Models.Photo is displayed.

7. In the Solution Explorer pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, right-click **Views**, point to **Add**, and then click **New Folder**.
8. In the Solution Explorer pane, name the newly created folder as **Shared**, and then press Enter.
9. In the Solution Explorer pane, drag the **_PhotoGallery.cshtml** file from the Photo folder to the Shared folder.
10. In the **Move files to a new location?** dialog box, click **OK**.

#### Task 3: Complete the photo gallery partial view.

1. In the _PhotoGallery.cshtml code window, locate the following code.

  ```cs
       @model PhotoSharingApplication.Models.Photo
```
2. Replace the preceding code with the following code.

  ```cs
       @model IEnumerable<PhotoSharingApplication.Models.Photo> 
```
3. Place the mouse cursor at the end of the **@model** code block, press Enter twice, and then type the following code.

  ```cs
       @foreach(var item in Model)
       {
       }
```
4. Place the mouse cursor in the **foreach** code block, and then type the following code.

  ```cs
       <h3>"@item.Title"</h3>
```
5. Place the mouse cursor at the end of the **H3** element, press Enter twice, and then type the following code.

  ```cs
       if (item.PhotoFile != null)
       {
       }
```
6. In the **if** code block, type the following code.

  ```cs
     <img width="200" src="@Url.Action("GetImage","Photo", new { id = item.PhotoID })" />
```
7. Place the mouse cursor at the end of the **if** code block, press Enter twice, and then type the following code.

  ```cs
      <p>
          Created By: @Html.DisplayFor( model => item.UserName)
      </p>
```
8. Place the mouse cursor at the end of the **&lt;/p&gt;** tag corresponding to the **UserName** display control, press Enter twice, and then type the following code.

  ```cs
      <p>
          Created On:  @Html.DisplayFor(model => item.CreatedDate)
      </p>
```
9. Place the mouse cursor at the end of the **&lt;/p&gt;** tag corresponding to the **CreatedDate** display control, press Enter twice, and then type the following code.

  ```cs  
       @Html.ActionLink("Display", "Display", new { id = item.PhotoID })
```
10. On the toolbar of the PhotoSharingApplication - Microsoft Visual Studio window, click **Save Views\Shared\\_PhotoGallery.cshtmal(Ctrl+S)**.

#### Task 4: Use the photo gallery partial view.

1. In the Solution Explorer pane, under Controllers, click **PhotoController.cs**.
2. In the PhotoController.cs code window, locate the following code.

  ```cs
       return View("Index", context.Photos.ToList());
```
3. Replace the preceding code with the following code.

  ```cs
       return View("Index");
```
4. In the PhotoController.cs code window, locate the following code, right-click the code, and then click **Add View**.

  ```cs
       public ActionResult Index()
```
5. In the **View name** box of the **Add View** dialog box, ensure that the name is **Index**.
6. In the **Template** box, ensure that **Empty (without model)** is selected.

7. Ensure that the **Use a layout page** check box and **Create as a partial view** checkbox are cleared, and then click **Add**.
8. In the Index.cshtml code window, locate the following code.

  ```cs
       <title>Index</title>
```
9. Replace the **TITLE** element with the following code.

  ```cs
       <title>All Photos</title>
```
10. In the **DIV** element, type the following code.

  ```cs
       <h2>All Photos</h2>
```
11. Place the mouse cursor at the end of the **H2** element, press Enter twice, and then type the following code.

  ```cs
        <p>
            @Html.ActionLink("Add a Photo", "Create", "Photo")        
        </p>
```
12. Place the mouse cursor at the end of the **&lt;/p&gt;** tag, press Enter twice, and then type the following code.

  ```cs
        @Html.Action("_PhotoGallery", "Photo")
```
13. On the toolbar of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save Views\Photo\Index.cshtml(Ctrl+S)**.

>**Results** : After completing this exercise, you will be able to create a web application with a partial view to display multiple photos.

### Exercise 4: Adding a Home View and Testing the Views

#### Task 1: Add a Controller and View for the home page.

1. In the **PhotoSharingApplication - Microsoft Visual Studio** window, in the Solution Explorer pane, right-click **Controllers**, point to **Add**, and then click **Controller**.
2. Select **MVC 5 Controller - Empty**, and then click **Add**.
3. In the **Controller name** box of the **Add Controller** dialog box, type **HomeController**, and then click **Add**.
4. In the HomeController.cs code window, locate the following code, right-click the code, and then click **Add View**.

  ```cs
       public ActionResult Index()
```
5. In the **View name** box of the **Add View** dialog box, ensure that the name is **Index**.
6. In the **Template** box, ensure that **Empty (without model)** is selected.
7. In the **Add View** dialog box, ensure that the **Use a layout page** check box is clear, and then click **Add**.
8. In the Index.cshtml code window, locate the following code.

  ```cs
       <title>Index</title>
```
9. Replace the **TITLE** element with the following code.

  ```cs
       <title>Welcome to Adventure Works Photo Sharing</title>   
```
10. In the **DIV** element, type the following code.

  ```cs
        <p>
            Welcome to Adventure Works Photo
            sharing! Use this site to share
            your adventures.
        </p>
```
11. Place the mouse cursor at the end of the **&lt;/p&gt;** tag, press Enter, and then type the following code.

  ```cs
        <h2>Latest Photos</h2>
```
12. In the **Index.cshtml** code window, place the mouse cursor at the end of the **&lt;/h2&gt;** tag, press Enter, and then type the following code.

  ```cs
        @Html.Action("_PhotoGallery", "Photo", new { number = 3 })
```
13. On the toolbar of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save Views\Home\Index.cshtml(Ctrl+S)**.

#### Task 2: Use the web application.

1. On the **DEBUG** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Start Debugging**.
2. On the Welcome to Adventure Works Photo Sharing page, note that the total number of photos displayed is three.
3. On the Welcome to Adventure Works Photo Sharing page, click **Display** corresponding to the photo you want to display.
4. On the display page, note that the photo is displayed with the title, description, user name, and created date, and then click **Back to List**.
5. On the All Photos page, note the total number of photos displayed.
6. On the All Photos page, click **Add a Photo**.
7. On the Create New Photo page, in the **Title** box, type **My First Photo,** and then click **Browse**.
8. In the **Choose File to Upload** dialog box, navigate to **Allfiles/20486C/Mod05/Labfiles/SamplePhotos**.
9. In the SamplePhotos folder, select the photo of your choice, and then click **Open**.
10. On the Create New Photo page, in the **Description** box, type **This is the first test of the Create photo view** , and then click **Create**.
11. On the All Photos page, note that the photo titled **My First Photo** is displayed.
12. In the Microsoft Edge window, click **Close**.
13. In the **PhotoSharingApplication (Running) - Microsoft Visual Studio** window, click **Close**.

>**Note:** If you receive the &quot;Do you want to stop debugging?&quot; message, click **Yes**.

>**Results**: After completing this exercise, you will be able to create a web application in which users can upload and view the photos.

©2016 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.

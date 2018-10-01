﻿# Module 3: Developing ASP.NET MVC 5 Models

# Lab: Developing ASP.NET MVC 5 Models

### Lab Setup

Estimated Time: **30 minutes**

### Preparation Steps

1. Ensure that you have cloned the 20486C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20486-DevelopingASPNETMVCWebApplications/tree/master/Allfiles
### Exercise 1: Creating an MVC Project and Adding a Model
#### Task 1: Create a new MVC project.

1. Start **Visual Studio** 2017.
2. On the **File** menu of the **Start Page - Microsoft Visual Studio** window, point to **New**, and then click **Project**.
3. In the left pane of the **New Project** dialog box, expand **Installed**, and then expand **Visual C#**.
4. Under **Visual C#**, click **Web**, and then, in the result pane, click **ASP.NET Web Application (.NET Framework)**.
5. In the **Name** text box of the **New Project** dialog box, type **PhotoSharingApplication**.
6. In the **Location** text box, ensure that the location specified is **Allfiles/20486C/Mod03/Labfiles**.
7. In the **New Project** dialog box, ensure that the **Create directory for solution** check box is selected, and then click **OK**.
8. In the **Select a template** list of the **New ASP.NET Web Application** dialog box, click **MVC**, and then click **OK**.

#### Task 2: Add a new MVC model.

1. In the **Solution Explorer** pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, right-click **Models**, point to **Add**, and then click **Class**.
2. In the **Name** text box of the **Add New Item - PhotoSharingApplication** dialog box, type **Photo**, and then click **Add**.
3. In the **Solution Explorer** pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, right-click **Models**, point to **Add**, and then click **Class**.
4. In the **Name** text box of the **Add New Item - PhotoSharingApplication** dialog box, type **Comment**, and then click **Add**.

 >**Results**: After completing this exercise, you should have successfully created an MVC 5 web application and added model classes to the web application.

### Exercise 2: Adding Properties to MVC Models

#### Task 1: Add properties to the Photo model class.

1. In the **Solution Explorer** pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Photo.cs**.
2. In the **Photo** class of the **Photo.cs** code window, type the following code, and then press Enter.
 
  ```cs
		public int PhotoID { get; set; }
```
3. Place the mouse cursor at the end of the **PhotoID** property code, press Enter, and then type the following code.

  ```cs
		public string Title { get; set; }
```
4. Place the mouse cursor at the end of the **Title** property code, press Enter, and then type the following code.

  ```cs
		public byte[] PhotoFile { get; set; }
```
5. Place the mouse cursor at the end of the **PhotoFile** property code, press Enter, and then type the following code.

  ```cs
		public string ImageMimeType { get; set; }
```
6. Place the mouse cursor at the end of the **ImageMimeType** property code, press Enter, and then type the following code.

  ```cs
		public string Description { get; set; }
```
7. Place the mouse cursor at the end of the **Description** property code, press Enter, and then type the following code.

  ```cs
		public DateTime CreatedDate { get; set; }
```
8. Place the mouse cursor at the end of the **CreatedDate** property code, press Enter, and then type the following code.

  ```cs
		public string UserName { get; set; }
```

#### Task 2: Add properties to the Comment model class.

1. In the **Solution Explorer** pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Comment.cs**.
2. In the **Comment** class of the Comment.cs code window, type the following code, and then press Enter.

  ```cs
		public int CommentID { get; set; }
```
3. Place the mouse cursor at the end of the **CommentID** property code, press Enter, and then type the following code.

  ```cs
		public int PhotoID { get; set; }
```
4. Place the mouse cursor at the end of the **PhotoID** property code, press Enter, and then type the following code.

  ```cs
		public string UserName { get; set; }
```
5. Place the mouse cursor at the end of the **UserName** property code, press Enter, and then type the following code.

  ```cs
		public string Subject { get; set; }
```
6. Place the mouse cursor at the end of the **Subject** property code, press Enter, and then type the following code.

  ```cs
		public string Body { get; set; }
```

#### Task 3: Implement a relationship between model classes.

1. In the **Solution Explorer** pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Photo.cs**.
2. In the **Photo.cs** code window, place the mouse cursor at the end of the **UserName** property code, press Enter, and then type the following code.

  ```cs
	public virtual ICollection<Comment>Comments { get; set; } 
```
3. In the **Solution Explorer** pane, click **Comment.cs**.
4. In the **Comment.cs** code window, place the mouse cursor at the end of the **Body** property code, press Enter, and then type the following code.

  ```cs
		public virtual Photo Photo { get; set; }
```
 >**Results**: After completing this exercise, you should have successfully added properties to classes for describing them to the MVC runtime and implemented a one-to-many relationship between classes.

### Exercise 3: Using Data Annotations in MVC Models

#### Task 1: Add display and edit data annotations to the model.

1. In the **Solution Explorer** pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Photo.cs**.
2. In the **Photo.cs** code window, place the mouse cursor at the end of the **Title** property code, press Enter, and then type the following code.

  ```cs
		[DisplayName("Picture")]
```
3. In the **Photo.cs** code window, place the mouse cursor at the end of the **System.web** namespace code, press Enter, and then type the following code.

  ```cs
		using System.ComponentModel;
```
4. Place the mouse cursor at the end of the **ImageMimeType** property code, press Enter, and then type the following code.

  ```cs
		[DataType(DataType.MultilineText)]
```
5. Place the mouse cursor at the end of the **System.ComponentModel** namespace code, press Enter, and then type the following code.

  ```cs
		using System.ComponentModel.DataAnnotations;
```
6. Place the mouse cursor at the end of the **Description** property code, press Enter, and then type the following code.

  ```cs
        [DataType(DataType.DateTime)]
        [DisplayName("Created Date")]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yy}")]           
```
7. In the Solution Explorer pane, click **Comment.cs**.
8. In the **Comment.cs** code window, place the mouse cursor at the end of the **Subject** property code, press Enter, and then type the following code.

  ```cs
		[DataType(DataType.MultilineText)]
```
9. Place the mouse cursor at the end of the **System.Web** namespace code, press Enter, and then type the following code.

  ```cs
		using System.ComponentModel.DataAnnotations;
```

#### Task 2: Add validation data annotations to the model.

1. In the **Solution Explorer** pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Photo.cs**.
2. In the **Photo.cs** code window, place the mouse cursor at the end of the **PhotoID** property code, press Enter, and then type the following code.

  ```cs
		[Required]
```
3. In the Solution Explorer pane, click **Comment.cs**.
4. In the Comment.cs code window, place the mouse cursor at the end of the **UserName** property code, press Enter, and then type the following code.

  ```cs
        [Required]
        [StringLength(250)]
```
 >**Results**: After completing this exercise, you should have successfully added property descriptions and data annotations to the two model classes in the MVC web application.

### Exercise 4: Creating a New Microsoft Azure SQL Database

#### Task 1: Add an Entity Framework Context to the model.

1. On the **Tools** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, point to **Nuget Package Manager** and then click **Package Manager Console**.
2. In **Package Manager Console** window, type the following command and then press Enter.

  ```cs
  install-package entityframework –version 6.1.3.0
```
3. In the **Solution Explorer** pane, right-click **Models**, point to **Add**, and then click **Class**.

4. In the **Name** text box of the **Add New Item - PhotoSharingApplication** dialog box, type **PhotoSharingContext**, and then click **Add**.
5. In the **PhotoSharingContext.cs** code window, place the mouse cursor at the end of the **System.Web** namespace, press Enter, and then type the following code.

  ```cs
		using System.Data.Entity;
```
6. In the **PhotoSharingContext.cs** code window, locate the following code.

  ```cs
		public class PhotoSharingContext
```
7. Append the following code to the existing line of code.

  ```cs
		: DbContext
```
8. In the **PhotoSharingContext** class, type the following code.

  ```cs
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Comment> Comments { get; set; }
```

#### Task 2: Add an Entity Framework Initializer.

1. In the **Solution Explorer** pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, right-click **Models**, point to **Add**, and then click **Class**.
2. In the **Name** text box of the **Add New Item - PhotoSharingApplication** dialog box, type **PhotoSharingInitializer**, and then click **Add**.
3. In the **PhotoSharingInitializer.cs** code window, place the mouse cursor at the end of the **System.web** namespace code, press Enter, and then type the following code.

  ```cs
        using System.Data.Entity;
        using System.IO;
```
4. In the **PhotoSharingInitializer.cs** code window, locate the following code.

  ```cs
		public class PhotoSharingInitializer
```
5. Append the following to the existing line of code.

  ```cs
		: DropCreateDatabaseAlways<PhotoSharingContext>
```
6. On the taskbar, click the **File Explorer** icon.
7. In the **Libraries** dialog box, go to **Allfiles/20486C/Mod03/Labfiles/CodeSnippets**, and then double-click **getFileBytes.txt**.
8. In the **getFileBytes.txt - Notepad** window, press Ctrl+A, and then press Ctrl+C.
9. On the taskbar, click the **PhotoSharingApplication - Microsoft Visual Studio** icon.
10. Place the mouse cursor in the **PhotoSharingInitializer** class of the **PhotoSharingInitializer.cs** code window, press Enter, and then press Ctrl+V.
11. In a new line of the **PhotoSharingInitializer** class, type the following code, press Spacebar, and then click **Seed(PhotoSharingContext context)**.

  ```cs
		override
```
12. In the **Seed** method, place the mouse cursor after the call to **base.Seed**, press Enter twice, and then type the following code.

  ```cs
        var photos = new List<Photo>
        {
             new Photo {
                Title = "Test Photo",
                Description = "Your Description",
                UserName = "NaokiSato",
                PhotoFile = getFileBytes ("\\Images\\flower.jpg"),
                ImageMimeType = "image/jpeg",
                CreatedDate = DateTime.Today
             }
        };
```
13. Place the mouse cursor at the end of the list of Photo objects, press Enter twice, and then type the following code.

  ```cs
        photos.ForEach(s =>context.Photos.Add(s));
        context.SaveChanges();
```
14. Place the mouse cursor at the end of the Entity Framework context code, press Enter twice, and then type the following code.

  ```cs
        var comments = new List<Comment>
        {
           new Comment {
              PhotoID = 1,
              UserName = "NaokiSato",
              Subject = "Test Comment",
              Body = "This comment " + "should appear in " + "photo 1" 
           }
        };  
```
15. Place the mouse cursor at the end of the list of Comment objects, press Enter twice, and then type the following code.

  ```cs
        comments.ForEach(s =>context.Comments.Add(s));
        context.SaveChanges();
```
16. In the **Solution Explorer** pane, click **Global.asax**.
17. In the **Global.asax** code window, place the cursor at the end of the **System.Web.Routing** namespace, press Enter, and then type the following code.

  ```cs
	    using System.Data.Entity;
        using PhotoSharingApplication.Models;
```
18. In the **Application_Start** method code block, type the following code.

  ```cs
            Database.SetInitializer<PhotoSharingContext>(new PhotoSharingInitializer());
```
19. On the **Build** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window click **Build Solution**, and then note that the application is built successfully.

#### Task 3: Add a controller and views.

1. In the **Solution Explorer** pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, right-click **Controllers**, point to **Add**, and then click **Controller**.
2. In the **Template** list, click **MVC 5 Controller with views, using Entity Framework** and click **Add**.
3. In the **Controller name** text box of the **Add Controller** dialog box, type **PhotoController**.
4. In the **Model class** list, click **Photo (PhotoSharingApplication.Models)**.
5. In the **Data context class** list, click **PhotoSharingContext (PhotoSharingApplication.Models)**.
6. Click **Add**.

#### Task 4: Create a Microsoft Azure SQL database and obtain a connection string.

1. On the **Tools** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, point to **NuGet Package Manager** and then click **Package Manager Console**.
2. In **Package Manager Console** window, type the following command and then press Enter.

  ```cs
	install-package entityframework –version 6.1.3.0
```
3. In the **Solution Explorer** pane, click **PhotoSharingContext.cs**.
4. At the beginning of the **PhotoSharingContext** class, type the following code.

  ```cs
	public PhotoSharingContext() : base()
    {
        this.Database.CommandTimeout = 180;
    }
```
5. On the taskbar, click the **Microsoft Edge** icon.
6. In the Address bar of the **Microsoft Edge** window, type **https://portal.azure.com/** and then press Enter.
7. If a page appears, prompting you to type your email address, type your email address, and then click **Continue**. Wait for the **Sign In** page to appear, type your email address and password, and then click **Sign In**.

   >**Note:** During the sign-in process, if a page appears prompting you to choose from a list of previously used accounts, select the account that you previously used, and then continue to type your credentials.

8. In the left pane of the Microsoft Azure page, click **SQL DATABASES**.
9. In the top bar, click **Add**.

10. In the **Database Name** text box, type **PhotoSharingDB**.
11. In the **Resource group** box, type **Main**.
12. Click **Server** box and click **Create a new server**.
13. In the **Server name** text box, enter a unique name.
14. In the **Server admin login** text box, type [your first name].
15. In the **Password** and **Confirm password** textboxes, type **Pa$$w0rd**.
16. In the **Location** drop down, select a location close to you.
17. Click **Select** to select the server.
18. Click **Pricing tier**, select **Basic**, and then select **Apply**.
19. To create the database, click **Create**.
20. Wait for the creation of the database to complete, then click the **PhotoSharingDB** database.
21. Click **Set server firewall**.
22. To add your IP to the firewall, click **Add client IP** and click **Save**.
23. To return to the database dashboard, close the **Firewall settings**.

24. Click **Show database connection strings**. 
25. In the **ADO.NET** box of the **Connection Strings** window, select the given text, and then press Ctrl+C.
26. On the taskbar, click the **PhotoSharingApplication - Microsoft Visual Studio icon**.
27. In the **Solution Explorer** pane, click **Web.config**.
28. In the **Web.config** code window, place the mouse cursor after the **&lt;/appsettings&gt;** tag, press Enter, and then type the following code.

  ```cs
        <connectionStrings>
           <add name="PhotoSharingContext" connectionString=""
            providerName = "System.Data.SqlClient" />
        </connectionStrings>
```
29. In the **connectionStrings** code block, place the mouse cursor within the quotes after **connectionString =**, and then press Ctrl-V.
30. In the pasted content, locate the text **{your_username}**, and then replace it with the username you chose earlier.
31. In the pasted content, locate the text **{your_password_here}**, and then replace it with **Pa$$w0rd**.
32. On the **Build** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window click **Build Solution**, and then note that the application is built successfully.

 >**Results**: After completing this exercise, you should have successfully created an MVC application that uses Microsoft Azure SQL Database as its data store.

### Exercise 5: Testing the Model and Database

#### Task 1: Add an image and run the application.

1. In the **File Explorer** window, go to **Allfiles/20486C/Mod03/Labfiles/Images**.
2. In the **Images** window, right-click **flower.JPG**, and then click **Copy**.
3. On the taskbar, click the **PhotoSharingApplication - Microsoft Visual Studio** icon.
4. In the **Solution Explorer** pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, right-click **PhotoSharingApplication**, point to **Add**, and then click **New Folder**.
5. In the **NewFolder1** text box, type **Images**.
6. Under **PhotoSharingApplication**, right-click **Images**, and then click **Paste**.
7. In the **PhotoSharingApplication - Microsoft Visual Studio** window, press F5.
8. In the Address bar of the Microsoft Edge window, append the existing URL with **photo/index**, and then press Enter.

   >**Note:** The details of the added image are displayed on the Index page. The scaffold templates do not display the image itself. You will see how to display images in later labs.

9. On the **Index** page, click **Details**.

    >**Note:** The details of the added image such as the image type, image description, and image creation date are displayed on the **Details** page. The scaffold templates do not display the image itself.
10. Close all open windows.

  >**Results**: After completing this exercise, you should have successfully added controllers, views, and images to an MVC web application and tested the application by displaying data from a Microsoft Azure SQL database.

©2016 Microsoft Corporation. All rights reserved.


The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.

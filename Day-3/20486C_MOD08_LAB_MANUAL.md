# Module 8: Applying Styles to ASP.NET MVC 5 Web Applications

# Lab: Applying Styles to MVC 5 Web Applications

#### Scenario

You have created a good amount of the photo-handling functionality for the Photo Sharing web application. However, stakeholders are concerned about the basic black-and-white appearance of the application. In addition, they want the titles and menus to appear on every page.

To resolve these issues, your manager asked you to implement the following user interface features:

- A layout for all webpages. The layout should include common elements, such as the main menu and breadcrumb controls, which should appear on every page of the application.
- A style sheet and images for all webpages.The web design team has provided an HTML mockup application to show how the final product should look. This mockup includes a style sheet and image files. You need to import these files and apply them to every page of the application.
- A mobile-specific view. The web application should be accessible from mobile devices such as mobile phones and tablets. In particular, you need to ensure that devices with narrow screens can access photos easily.

#### Objectives

After completing this lab, you will be able to:

- Apply a consistent look and feel to the web application.
- Use layouts to ensure that common interface features, such as the headers, are consistent across the entire web application.
- Ensure that the web application renders smoothly on screens of different sizes and aspect ratios.

#### Lab Setup

Estimated Time: **40 minutes**

### Exercise 1: Creating and Applying Layouts

#### Scenario

In this exercise, you will:

- Browse through the Photo Sharing web application without a layout applied.
- Create a new layout and link the application to the view by using a _ViewStart.cshtml file.
- Modify the home index and photo display views to use the new layout.
- Browse through the resulting web application.

The main tasks for this exercise are as follows:

1. Open and browse through the Photo Sharing application.

2. Create a new layout.

3. Set the default layout for the application.

4. Update the views to use the layout.

5. Browse through the web application.

#### Task 1: Open and browse through the Photo Sharing application.

1. Open the **PhotoSharingApplication** solution from the following location:

	- File location: **Allfiles\20486C\Mod08\Labfiles\PhotoSharingApplication_08_begin**

2. Start the web application in the debugging mode and verify that the menu and the breadcrumb trail are available on the home page.
3. Go to the **All Photos** webpage and verify that the menu and the breadcrumb trail are not available on the page.
4. Go to the **Sample Photo 1** webpage and verify that the menu and the breadcrumb trail are not available on the page.
5. Stop debugging.

#### Task 2: Create a new layout.

1. Add a new layout to the **PhotoSharingApplication** project by using the following information:

	- File location: **/Views/Shared**
	- View name: **_MainLayout**	
	- View type: **None**
	- Partial view: **None**
	- Layout or master page: **None**

2. Change the content of the **TITLE** element so that the page takes its title from the **ViewBag.Title** property.
3. Add an **H1** heading to the page body by using the following information:

	- Class attribute: **site-page-title**
	- Content: **Adventure Works Photo Sharing**

4. Add a **DIV** element to the page with the class, **clear-floats**.
5. Add a **DIV** element to the page with the id **topmenu**. Within this element, render the main menu for the page by using the following information:

	- Helper: **Html.MvcSiteMap()**
	- Method: **Menu()**
	- Start from the current node: **False**
	- Starting node in the child level: **True**
	- Show the starting node: **True**

6. Add a **DIV** element to the page with the id **breadcrumb**. Within this element, render the breadcrumb trail for the page by using the following information:

	- Helper: **Html.MvcSiteMap()**
	- Method: **SiteMapPath()**

7. Add a **DIV** element to the page. Within this element, render the view body by using the following information:

	- Helper: **RenderBody()**

8. Save the layout.

#### Task 3: Set the default layout for the application.

1. Add a new view to the web application by using the following information:

	- File path: **/Views**
	- View name: **_ViewStart**
	- View type: **None**
	- Partial view: **None**
	- Layout or master page: **None**

2. In the **_ViewStart.cshtml** file, set the **Layout** to **~/Views/Shared/_MainLayout.cshtml**.
3. Remove all the HTML code from the **_ViewStart.cshtml** file, except the layout element.
4. Save the file.

#### Task 4: Update the views to use the layout.

1. Open the **Views/Home/Index.cshtml** view file.

2. In the first Razor code block, remove the existing line of code, and set the **ViewBag.Title** property to **Welcome to Adventure Works Photo Sharing**.
3. Remove the following:

	- Tags along with the corresponding closing tags:

		- **&lt;!DOCTYPE&gt;**
		- **&lt;html&gt;**
		- **&lt;head&gt;**
		- **&lt;meta&gt;**
		- **&lt;title&gt;**
		- **&lt;body&gt;**
		- **&lt;div&gt;**

	- Content:

		- **Menu:**
		- **Current Location:**

4. Save the changes made to the **Index.cshtml** file.
5. Open the **Views/Photo/Display.cshtml** view file.
6. In the first Razor code block, remove the existing line of code and set the **ViewBag.Title** property to the **Title** property of the **Model** object.
7. Remove the following tags along with the corresponding closing tags:

	- **&lt;!DOCTYPE&gt;**
	- **&lt;html&gt;**
	- **&lt;head&gt;**
	- **&lt;meta&gt;**
	- **&lt;title&gt;**
	- **&lt;body&gt;**
	- **&lt;div&gt;**

8. Save the changes made to the **Display.cshtml** file.
9. Open the **Views/Shared/Error.cshtml** view file.
10. In the Razor code block, remove the existing line of code and set the **ViewBag.Title** property to **Custom Error**.
11. Remove the following tags along with the corresponding closing tags:

	- **&lt;!DOCTYPE&gt;**
	- **&lt;html&gt;**
	- **&lt;head&gt;**
	- **&lt;meta&gt;**
	- **&lt;title&gt;**
	- **&lt;body&gt;**
	- **&lt;div&gt;**

12. Save the changes made to the **Error.cshtml** file.

#### Task 5: Browse through the web application.

1. Start the web application in the debugging mode and verify that the menu and the breadcrumb trail are available on the home page.

2. Go to the **All Photos** webpage and verify that the site title, menu, and breadcrumb trail are available on this page.
3. Go to **Sample Photo 1** webpage and verify that the site title, menu, and breadcrumb trail are available on this page.
4. Stop debugging.

 >**Results**: After completing this exercise, you will be able to create an ASP.NET MVC 5 web application that uses a single layout to display every page of the application.

### Exercise 2: Applying Styles to an MVC Web Application

#### Scenario

In this exercise, you will

- Examine a mockup web application that shows the look-and-feel the web designers have created for the Photo Sharing application.
- Import a style sheet, with the associated graphic files from the mockup application, to your web application, and then update the HTML element classes to apply those styles to the elements in views.

Examine the changes to the user interface after the styles have been applied.

The main tasks for this exercise are as follows:

1. Examine the HTML mockup web application.

2. Import the styles and graphics.

3. Update the element classes to use the styles.

4. Browse the styled web application.

#### Task 1: Examine the HTML mockup web application.

1. Open the mockup web application and verify the layout of the home page by using the following information:

	- File path: **Allfiles\20486C\Mod08\Labfiles\Expression Web Mock Up\default.html**

2. Go to the **All Photos** webpage and verify the layout of the page.
3. Go to the details of any photo and verify the layout of the page.
4. Close **Microsoft Edge**.

#### Task 2: Import the styles and graphics.

1. Add a new top-level folder to the **PhotoSharingApplication** project:

	- Name of the folder: **Content**

2. Go to **Allfiles\20486C\\Mod08\Labfiles\Expression Web Mock Up\Content**, and add the following existing files to the new folder:

	- **PhotoSharingStyles.css**
	- **BackgroundGradient.jpg**

3. To link the new style sheet, add a **&lt;link&gt;** element to the **_MainLayout.cshtml** file by using the following information:

	- Type: **text/css**
	- Relation: **stylesheet**
	- Href: **~/content/PhotoSharingStyles.css**

4. Save the _MainLayout.cshtml file.

#### Task 3: Update the element classes to use the styles.

1. Open the **_PhotoGallery.cshtml** file.

2. Locate the first **DIV** element in the file and set the **class** attribute to **photo-index-card**.
3. For the **&lt;img&gt;** tag, remove the **width** attribute and set the **class** attribute to **photo-index-card-img**.
4. For the next **DIV** element, set the class to **photo-metadata**.
5. For the **&lt;span&gt;Created By:&lt;/span&gt;** element, set the **class** attribute to **display-label**.
6. For the **&lt;span&gt;@Html.DisplayFor(model =&gt; item.UserName)&lt;/span&gt;** element, set the **class** attribute to **display-field**.
7. For the **&lt;span&gt;Created On:&lt;/span&gt;** element, set the **class** attribute to **display-label**.
8. For the **&lt;span&gt;@Html.DisplayFor(model =&gt; item.CreatedDate)&lt;/span&gt;** element, set the **class** attribute to **display-field**.

#### Task 4: Browse the styled web application.

1. Start the web application in the debugging mode to examine the home page with the new style applied.

2. Go to **All Photos** to examine the new style that is applied.
3. Display a photo of your choice to examine the new style that is applied.
4. Stop debugging.

 >**Results**: After completing this exercise, you will be able to create a Photo Sharing application with a consistent look and feel.

### Exercise 3: Optional—Adapting Webpages for Mobile Browsers

#### Scenario

In this exercise, you will:

- Create a new layout for mobile devices.
- Add a media query to the web application style sheet to ensure that the photo index is displayed on small screens.
- Test the settings applied to the application by using a small browser and changing the user agent string.

Complete this exercise if time permits.

The main tasks for this exercise are as follows:

1. Test the application as a mobile device.

2. Add a new mobile layout.

3. Add a media query to the style sheet.

4. Retest the application as a mobile device.

#### Task 1: Test the application as a mobile device.

1. Start the web application in the debugging mode.

2. Resize the browser window to the following dimensions:

	- Width: **480 pixels**
	- Height: **800 pixels**

3. Set the **user agent string** to **Windows Phone**.
4. Refresh the home page and examine the mobile view of the application.
5. Stop debugging.

#### Task 2: Add a new mobile layout.

1. Create a copy of the **_MainLayout.cshtml** file from the **Views/Shared** folder and then paste it under DisplayTemplates and then rename the file as **_MainLayout.Mobile.cshtml**.

2. In the **_MainLayout.Mobile.cshtml** file, in the main page heading, place a **&lt;br /&gt;** tag after the words **Adventure Works**.

3. In the **_MainLayout.Mobile.cshtml** code window, locate the following code.

  ```cs
       <h1 class="site-page-title">Adventure Works Photo Sharing</h1>
```
4. Replace the code with the following code.

  ```cs
       <h1 class="site-page-title">
          Adventure Works <br />
          Photo Sharing
       </h1>
```

5. After the **H1** element, add an **H2** element.

	- Content: **Mobile Site**

6. Save the _MainLayout.Mobile.cshtml mobile view.

#### Task 3: Add a media query to the style sheet.

1. Open the **PhotoSharingStyles.css** style sheet.

2. Add a media query to the style sheet that applies only to the screen size and only when the maximum screen width is 500 pixels or less.
3. Examine the existing style of the **topmenulink** class.
4. Add the same style to the media query.
5. In the media query, set the **width** attribute for the **topmenulink** style to **100** pixels.

#### Task 4: Retest the application as a mobile device.

1. Start the web application in a debugging mode.

2. Clear the browser cache to ensure that the style sheet is reloaded.
3. Set the user agent string to Windows Phone.
4. Close the developer window and refresh the web application to examine if the problem persists in the mobile view of the application.
5. Stop debugging and close Visual Studio.

 >**Results**: After completing this exercise, you will be able to create a Photo Sharing application that displays well on mobile devices and devices with small screens.

©2017 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.

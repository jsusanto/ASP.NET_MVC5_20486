# Module 10: Using JavaScript and jQuery for Responsive MVC 5 Web Applications

# Lab: Using JavaScript and jQuery for Responsive MVC 5 Web Applications

### Lab Setup

Estimated Time: **40 minutes**

### Preparation Steps

1. Ensure that you have cloned the 20486C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20486-DevelopingASPNETMVCWebApplications/tree/master/Allfiles

### Exercise 1: Creating and Animating the Slideshow View

#### Task 1: Import and test the slideshow view.

1. On the taskbar, click the **File Explorer** icon.
2. In the **Libraries** window, go to **Allfiles\20486C\Mod10\Labfiles\PhotoSharingApplication_10_begin**, and then double-click **PhotoSharingApplication.sln**.

3. In the **Solution Explorer** pane of the, **PhotoSharingApplication - Microsoft Visual Studio** window, under **PhotoSharingApplication**, expand **Views**, right-click **Photo**, point to **Add**, and then click **Existing Item**.
4. In the **Add Existing Item – PhotoSharingApplication** dialog box, go to **Allfiles/20486C/Mod10/Labfiles/Slide Show View**, click **SlideShow.cshtml**, and then click **Add**.
5. In the **Solution Explorer** pane, expand **Controllers**, and then click **PhotoControllers.cs**.
6. In the **PhotoControllers.cs** code window, locate the following code.

  ```cs
		throw new NotImplementedException("The Slideshow action is not yet ready");
```
7. Replace the code with the following code.

  ```cs
		return View("SlideShow", context.Photos.ToList());
```
8. In the **Solution Explorer** pane, click **Mvc.sitemap**.
9. In the **Mvc.sitemap** code window, locate the following code.

  ```cs
    <mvcSiteMapNode title="Add a Photo" visibility="*" controller="Photo" action="Create" />
```
10. Place the mouse cursor at the end of the located code, press Enter, and then type the following code.

  ```cs
    <mvcSiteMapNode title="Slideshow" visibility="*" controller="Photo" action="SlideShow" />
```
11. On the **DEBUG** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Start Debugging**.
12. On the **Adventure Works Photo Sharing** page, click **Ellipsis**, and then click **F12 developer tools**.
13. On the **Network** tab, in the **Cache** menu of the developer window, click **Clear cache**.
14. On the **File** menu of the developer window, click **Exit**.
15. On the **Adventure Works Photo Sharing** page, click **Slideshow**.

   >**Note:** Note that the **Slide Show** view displays all the photos in a large size, one below the other.

16. In the **Microsoft Edge** window, click **Close**.
17. On the **DEBUG** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Stop Debugging**.


#### Task 2: Modify the style sheet.

1. In the Solution Explorer pane, expand **Content**, and then click **PhotoSharingStyles.css**.
2. In the **PhotoSharingStyles.css** code window, locate the following code.

  ```cs
		#slide-show DIV.slide-show-card {
```
3. Place the mouse cursor at the end of the located code, press Enter, and then type the following code.

  ```cs
    position: absolute;
    top: 0;
    left: 0;
    z-index: 8;
```
4. In the **PhotoSharingStyles.css** code window, locate the following code.

  ```cs
		#slideshow-progress-bar-container {
```
5. Place the mouse cursor immediately before the located code, type the following code, and then press Enter.

  ```cs
        #slide-show DIV.active-card {
            z-index: 10;
        }
```
6. Place the mouse cursor at the end of the code you just typed, press Enter twice, and then type the following code.

  ```cs
        #slide-show DIV.last-active-card {
            z-index: 9;
        }
```
7. On the **DEBUG** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Start Debugging**.
8. On the **Adventure Works Photo Sharing** page, click **Ellipsis**, and then click **F12 developer tools**.
9. On the **Network** tab, in the **Cache** menu of the developer window, click **Clear cache**.
10. On the **File** menu of the developer window, click **Exit**.
11. On the **Adventure Works Photo Sharing** page, click **Slideshow**.

   >**Note:** Note that only **Sample Photo 13** is displayed. The other photos are rendered in the same absolute position behind **Sample Photo 13**. Your script will use the Z-order of different style classes to move each photo to the top of the stack.

12. In the **Microsoft Edge** window, click **Close**.
13. On the **DEBUG** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Stop Debugging**.


#### Task 3: Animate the photo cards in the slideshow.

1. In the **Solution Explorer** pane, right-click **PhotoSharingApplication**, point to **Add**, and then click **New Folder**.
2. In the **NewFolder1** box, type **Scripts**, and then press Enter.
3. In the **Solution Explorer** pane, right-click **Scripts**, point to **Add**, and then click **New Item**.
4. In the **Add New Item – PhotoSharingApplication** dialog box, click **JavaScript File**.
5. In the **Name** text box, type **SlideShow.js**, and then click **Add**.
6. In the **SlideShow.js** code window, type the following code.

  ```cs
        var percentIncrement;
        var percentCurrent = 100;
```
7. Place the mouse cursor at the end of the variable you just created, press Enter twice, and then type the following code.

  ```cs
        function slideSwitch() {
        }
```
8. In the **slideSwitch()** function code block, type the following code.

  ```cs
		var $activeCard = $('#slide-show DIV.active-card');
```
9. Place the mouse cursor at the end of the code you just typed, press Enter, and then type the following code.

  ```cs
        if ($activeCard.length == 0) {
           $activeCard = $('#slide-show DIV.slide-show-card:last');
        }
```
10. Place the mouse cursor at the end of the **if** statement you just created, press Enter, and then type the following code.

  ```cs
		var $nextCard = $activeCard.next();
```
11. Place the mouse cursor at the end of the code you just typed, press Enter, and then type the following code.

  ```cs
        if ($nextCard.length == 0) {
           $nextCard = $('#slide-show DIV.slide-show-card:first');
        }
```        

12. Place the mouse cursor at the end of the **if** statement you just created, press Enter, and then type the following code.

  ```cs
		$activeCard.addClass('last-active-card');
```
   >**Note:** Note that this **last-active-card** class applies the **z-order** value **9**, from the style sheet.

13. Place the mouse cursor at the end of the last- **active-card** class you just added, press Enter, and then type the following code.

  ```cs
		$nextCard.css({ opacity: 0.0 });
```
14. Place the mouse cursor at the end of the code you just typed, press Enter, and then type the following code.

  ```cs
		$nextCard.addClass('active-card');
```
   >**Note:** Note that this **active-card** class applies the **z-order** value **10**, from the style sheet.

15. Place the mouse cursor at the end of the **active-card** class you just added, press Enter, and then type the following code.

  ```cs
        $nextCard.animate({ opacity: 1.0 }, 1000, function () {
           $activeCard.removeClass('active-card last-active-card');
        });
```
16. Place the mouse cursor at the end of the **slideSwitch()** function, press Enter twice, and then type the following code.

  ```cs
        $(document).ready(function() {
        });
```
17. In the anonymous function you just created, type the following code.

  ```cs
		setInterval("slideSwitch()", 5000);
```
18. On the **FILE** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Save All**.

#### Task 4: Link to the script and test the animation.

1. In the **Solution Explorer** pane, expand **Views** and under **Photo**, click **SlideShow.cshtml**.
2. In the **SlideShow.cshtml** code window, locate the following code.

  ```cs
		<h2>Slideshow</h2>
```
3. Place the mouse cursor immediately before the located code, type the following code, and then press Enter twice.

  ```cs
		<script type="text/javascript" src="@Url.Content("~/Scripts/SlideShow.js")"></script>
```
4. On the **DEBUG** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Start Debugging**.
5. On the **Adventure Works Photo Sharing** page, click **Slideshow**.

   >**Note:** The script fades between different photos in the application.

6. In the **Microsoft Edge** window, click **Close**.
7. On the **DEBUG** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Stop Debugging**.


   >**Results**: After completing this exercise, you should have successfully created a Photo Sharing application with a slideshow page that displays all the photos in the application, sequentially.

### Exercise 2: Optional—Adding a jQueryUI ProgressBar Widget

#### Task 1: Complete the slideshow view and template view.

1. In the **Solution Explorer** pane, under **Photo**, click **SlideShow.cshtml**.
2. In the **SlideShow.cshtml** code window, locate the following code.

  ```cs
		<div id="slideshow-progress-bar-container">
```
3. Place the mouse cursor at the end of the located code, press Enter, and then type the following code.

  ```cs
		<div id="slideshow-progress-bar"></div>
```
4. In the **Solution Explorer** pane, under **Views**, expand **Shared**, and then click **_MainLayout.cshtml**.
5. In the **_MainLayout.cshtml** code window, locate the following code.

  ```cs
		</head>
```
6. Place the mouse cursor immediately before the located code, type the following code, and then press Enter.

  ```cs
		<script type="text/javascript" 
        src="http://ajax.aspnetcdn.com/ajax/jquery.ui/1.10.0/jquery-ui.min.js"></script>
```
7. In the **_MainLayout.cshtml** code window, locate the following code.

  ```cs
		<link type="text/css" rel="stylesheet" href="~/Content/PhotoSharingStyles.css">
```
8. Place the mouse cursor immediately before the located code, type the following code, and then press Enter.

  ```cs
		<link type="text/css" rel="stylesheet" 
        href="http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" />
```
9. On the **FILE** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Save All**.

#### Task 2: Modify the slideshow script.

1. In the **Solution Explorer** pane, under **Scripts**, click **SlideShow.js**.
2. In the **SlideShow.js** code window, locate the following code.

  ```cs
		$(document).ready(function() {
```
3. Place the mouse cursor immediately before the located code, press Enter twice, and then type the following code.

  ```cs
        function calculateIncrement() {
        }
```
4. Place the cursor within the **calculateIncrement()** function you just created, and then type the following code.

  ```cs
		var cardCount = $('#slide-show DIV.slide-show-card').length;
```
5. Place the mouse cursor at the end of the variable you just created, press Enter, and then type the following code.

  ```cs
		percentIncrement = 100 / cardCount;
```
6. Place the mouse cursor at the end of the code you just typed, press Enter, and then type the following code.

  ```cs
        $('#slideshow-progress-bar').progressbar({
           value: 100
        });
```
   >**Note:** Note that the jQueryUI **progressbar()**  function displays a progress bar widget.

7. In the **SlideShow.js** code window, locate the following code.

  ```cs
		setInterval("slideSwitch()", 5000);
```
8. Place the mouse cursor immediately before the located code, type the following code, and then press Enter.

  ```cs
		calculateIncrement();
```
9. In the **SlideShow.js** code window, locate the following code.

  ```cs
		var $activeCard = $('#slide-show DIV.active-card');
```
10. Place the mouse cursor immediately before the located code, type the following code, and then press Enter.

  ```cs
		percentCurrent += percentIncrement;
```
11. Place the mouse cursor at the end of the code you just typed, press Enter, and then type the following code.

  ```cs
        if (percentCurrent > 100) {
           percentCurrent = percentIncrement;
        }
```
12. Place the mouse cursor at the end of the **if** statement you just added, press Enter, and then type the following code.

  ```cs
        $('#slideshow-progress-bar').progressbar({
           value: percentCurrent
        });
```
13. On the **FILE** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Save All**.

#### Task 3: Test the slideshow view.

1. On the **DEBUG** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Start Debugging**.
2. On the **Adventure Works Photo Sharing** page, click **ellipsis** and then click **Tools**, and then click **F12 Developer Tools**.
3. On the **Network** tab, in the **Cache** menu of the developer window, click **Clear cache**.
4. On the developer window, click **Close**.
5. On the **Adventure Works Photo Sharing** page, click **Slideshow**.
>**Note:** On the **Slideshow** tab of the **Adventure Works Photo Sharing** page, note that all the photos in the application are displayed, with a fade animation and a progress bar.
6. In the **Microsoft Edge** window, click **Close**.
7. In the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Close** and then in the **Microsoft Visual Studio** dialog box, click **Yes**.

>**Results**: After completing this exercise, you should have successfully created a slideshow page with a progress bar that displays the position of the current photo in the list of photos.
 
©2016 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.

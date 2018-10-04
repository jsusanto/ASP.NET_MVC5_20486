# Module 15: Deploying ASP.NET MVC 5 Web Applications

# Lab: Deploying ASP.NET MVC 5 Web Applications

## Lab Setup

## Preparation Steps

1. Ensure that you have cloned the 20486C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20486-DevelopingASPNETMVCWebApplications/tree/master/Allfiles

>**Note:** This lab is dependent on the successful execution of the lab of Modules 11 and 13. If you have not executed labs of Modules 11 and 13, this lab will not function properly.


### Exercise 1: Deploying a Web Application to Microsoft Azure

#### Task 1: Prepare the Photo Sharing application project for deployment.

1. Go to **Allfiles\20486C\Mod15\Labfiles\PhotoSharingApplication_15_begin**, and then double-click **PhotoSharingApplication.sln**.
2. In the Solution Explorer pane of the **PhotoSharingApplication – Microsoft Visual Studio** window, right-click **PhotoSharingApplication**, and then click **Properties**.
3. In the PhotoSharingApplication code window, ensure that the **Build** tab is selected.
4. In the **Configuration** box, click **Release**.
5. On the taskbar, click the **Microsoft Edge** icon.
6. In the Address bar of the Microsoft Edge window, type **https://portal.azure.com**, and then press Enter.
7. If a page appears, prompting you to enter your email address, type your email address, and then click **Continue**. Wait for the **Sign In** page to appear, type your email address and password, and then click **Sign In**.

  >**Note:** During the sign-in process, if a page appears prompting you to choose from a list of previously used accounts, select the account that you previously used, and then continue to type your credentials. 

8. In the left pane of the **Microsoft Azure** page, click **SQL Databases**.
9. In the **Name** column, if there is a database named **PhotoSharingDB** then click **PhotoSharingDB** and go to step 25. If there is no database named **PhotoSharingDB** then do steps 10-24.
10. In the top bar, click **Add**.
11. In the **Database Name** text box, type **PhotoSharingDB**.
12. In the **Resource group** box, type **Main**.
13. Click **Server** box and click **Create a new server**.
14. In the **Server name** text box, enter a unique name.
15. In the **Server admin login** text box, type [your first name].
16. In the **Password** and **Confirm password** textboxes, type **Pa$$w0rd**.
17. In the **Location** drop down, select a location close to you.
18. Click **Select** to select the server.
19. Click **Pricing tier**, select **Basic**, and then select **Apply**.
20. To create the database, click **Create**.
21. Wait for the creation of the database to complete, then click the **PhotoSharingDB** database.
22. Click **Set server firewall**.
23. To add your IP to the firewall, click **Add client IP** and click **Save**.
24. To return to the database dashboard, close the **Firewall settings**.
25. Click **Connection strings**. 
26. In the **ADO.NET** box of the **Connection Strings** dialog box, select all the text, right-click the selected text, and then click **Copy**.
27. On the taskbar, click the **PhotoSharingApplication – Microsoft Visual Studio** icon.
28. In the Solution Explorer pane, expand **PhotoSharingApplication**, and then click **Web.config**.
29. In the Web.config code window, locate the following code.

  ```cs
        <add name="PhotoSharingContext" connectionString="Server=tcp:{Your Azure Database URL},1433;Database=PhotoSharingDB;User ID={Your ID Here};Password=Pa$$w0rd;Trusted\Connection=False;Encrypt=True;Connection Timeout=30;PersistSecurityInfo=true" providerName="System.Data.SqlClient" />
```
30. In the located code, select the contents of the **connectionString** attribute, right-click the selected text, and then click **Paste**.
31. Within the text you just pasted, select the following text.

  ```cs
		{your_username}
```
32. Replace the selected text with  [your first name].
33. Within the text you just pasted, select the following text.

  ```cs
		{your_password}
```
34. Replace the selected text with the word, **Pa$$w0rd**.
35. On the taskbar, click the **SQL Databases – Microsoft Azure – Microsoft Edge** icon.
36. To return to the database dashboard, close the **Connection strings**. 
37. In the **Name** column, click **PhotoAppServices**.

  >**Note:** You created the **PhotoAppServices** database in lab of Module 11. 

38. Click **Connection strings**. 
39. In the **ADO.NET** box of the **Connection Strings** dialog box, select all the text, right-click the selected text, and then click **Copy**.
40. On the taskbar, click the **PhotoSharingApplication – Microsoft Visual Studio** icon.
41. In the Solution Explorer pane, expand **PhotoSharingApplication**, and then click **Web.config**.
42. In the Web.config code window, locate the following code.

  ```cs
        <add name="PhotoAppServices" connectionString="Server=tcp:moim5.database.windows.net,1433;Initial Catalog=PhotoAppServices;Persist Security Info=False;User ID={your_username};Password=Pa$$w0rd;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;" providerName="System.Data.SqlClient" />
```
43. In the located code, select the contents of the **connectionString** attribute, right-click the selected text, and then click **Paste**.
44. Within the text you just pasted, select the following text.

  ```cs
		{your_username}
```
45. Replace the selected text with  [your first name].
46. Within the text you just pasted, select the following text.

  ```cs
		{your_password}
```
47. Replace the selected text with the word, **Pa$$w0rd**.
48. On the taskbar, click the **SQL Databases – Microsoft Azure – Microsoft Edge** icon.
49. In the Microsoft Edge window, click **New Tab**.
50. In the Address bar of the Microsoft Edge window, type **https://www.bingmapsportal.com**, and then click **Go to**.
51. On the **Bing Maps | Dev Center** page, click **Sign In**.
52. If the **Sign in to your Microsoft account** page appears, in the Microsoft account box, type _&lt;Your Windows Live account name&gt;_, in the **Password** box, type _&lt;Your Windows Live account password&gt;_, and then click Sign in.
53. In the left pane of the **Bing Maps | Dev Center** page, under My Account, click **My Keys**.
54. In the My Keys section of the **Bing Maps | Dev Center** page, select the key corresponding to **Photo Sharing Application**, right-click the key, and then click **Copy key**.
55. On the taskbar, click the **PhotoSharingApplication – Microsoft Visual Studio** icon.
56. In the Solution Explorer pane of the PhotoSharingApplication – Microsoft Visual Studio window, expand Scripts, and then click **MapDisplay.js**.
57. In the MapDisplay.js code window, locate the following code, right-click the selected code, and then click Paste.

  ```cs
		{Your Bing Key}
```
58. On the **FILE** menu of the PhotoSharingApplication – Microsoft Visual Studio window, click **Save All**.

#### Task 2: Create a new Web App in Microsoft Azure.

1. On the taskbar, point to the **Microsoft Edge** icon, and then click the **SQL Databases – Microsoft Azure – Microsoft Edge** icon.
2. In the **Connection Strings** dialog box, click **Close**.
3. In the left pane of the **Microsoft Azure** dialog box, click **New**, and then select the **Web App** icon.
4. In the **App name** box of the **Create Web App** dialog box, type _&lt;your username&gt;_ **PhotoSharing**.
5. In **Resource Group**, Ensure that **Main** is selected, if not - click **Use Existing** and select **Main**.
6. In the **Create Web App** dialog box, click **App Service plan/Location**.  
7. In the **App Service plan** dialog box, click **Create new**. 
8. In the **New App Service Plan** dialog box, in the **App Service plan** text box, type _&lt;your first name&gt;_ **PhotoSharing**.
9. In the **Location** drop down, select a location close to you.
10. Click **Pricing tier**, select **D1 Shared**, and then click **Select**.
11. In the **New App Service Plan** dialog box, click **OK**.
12. In the **Create Web App** dialog box, click **Create**.

  >**Note:** Microsoft Azure creates the new web application. You need to upload the Photo Sharing application project to this web application. 

#### Task 3: Deploy the Photo Sharing application.

1. In the left pane of the **Microsoft Azure** page, click **App Services**.
2. In the **App Services** dialog box, in the **Name** column, click _&lt;your username&gt;_ **PhotoSharing**, and then click **Get publish profile**.
3. In the Navigation bar, click **Save**, and then click **Close**.
4. On the taskbar, click the **PhotoSharingApplication – Microsoft Visual Studio** icon.
5. In the Solution Explorer pane, right-click **PhotoSharingApplication**, and then click **Publish**.
6. On the **Publish** page of the Publish Web wizard, click the right arrow next to **Folder**, select  **Import profile**, and then click **OK**.
7. In the **Import Publish Settings File** dialog box, click **Downloads** and then click _&lt;your username&gt;_ **.PublishSettings**, and then click **Open** and then click **Publish**.

  >**Note:** Visual Studio publishes the Photo Sharing web application to Microsoft Azure. This process may take several minutes. When the process is complete, a new tab in Microsoft Edge displays the Photo Sharing home page. 

  >**Results** : After completing this exercise, you will be able to prepare an ASP.NET MVC web application for production deployment, create a web application in Microsoft Azure, and deploy an MVC web application to Microsoft Azure.

### Exercise 2: Testing the Completed Application

#### Task 1: Add a photo and a comment.

1. On the **Welcome to Adventures Works Photo Sharing** page, click **Log In**.

2. In the **User name** box of the **Login** page, type **David Johnson**, in the **Password** box, type **Pa$$w0rd2**, and then click **Log in**.

  >**Note:** You added a user with these credentials in the lab of Module 11. 

3. On the **Adventure Works Photo Sharing** page, click **Add a Photo**.
4. In the **Title** box, type **Test New Photo**, and then click **Browse**.
5. In the **Choose File to Upload** dialog box, navigate to **Allfiles/20486C/Mod15/Labfiles/Sample Photos**, click **track.JPG**, and then click **Open**.
6. In the **Description** box, type **This is the first photo added to the deployed web application**, and then click **Create**.
7. On the **All Photos** page, click **Display** corresponding to **Test New Photo**.
8. On the **Test News Photo** page, note that the metadata you entered is displayed correctly.
9. In the **Subject** box of the Comments section, type **Functionality Check**.
10. In the **Body** box, type **The photo metadata is displayed correctly**, and then click **Create**.

  >**Note:** The new comment is displayed on the website. 

#### Task 2: Use the slideshow and favorites options.

1. On the **Test New Photo** page, click **Slideshow**, and then view a slideshow of the images.

  >**Note:** The slideshow displays all the photos in the web application and includes the faded transition between photos and the jQueryUI progress bar widget. 

2. On the **Slide Show** page, click **All Photos**.
3. On the **All Photos** page, click **Display** corresponding to **Sample Photo 1**.
4. On the **Sample Photo 1** page, click **Add this photo to your favorites**.
5. In the Microsoft Edge window, click **Back**.
6. On the **All Photos** page, click **Display** corresponding to **Sample Photo 2**.
7. On the **Sample Photo 2** page, click **Add this photo to your favorites**.
8. In the Microsoft Edge window, click **Back**.
9. On the **All Photos** page, click **Display** corresponding to **Sample Photo 3**.
10. On the **Sample Photo 3** page, click **Add this photo to your favorites**.
11. On the **Sample Photo 3** page, click **Favorite Photos**, and then view a slideshow of the images that you added to the favorites list.
12. In Visual Studio, click **Close**.
13. in Microsoft Edge, click **Close**.

  >**Results** : After completing this exercise, you will be able to confirm that all the functionalities that you built in the Photo Sharing application run correctly in the Microsoft Azure deployment.
  
©2016 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.

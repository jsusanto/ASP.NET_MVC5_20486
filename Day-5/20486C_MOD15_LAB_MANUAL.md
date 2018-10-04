## Module 15: Deploying ASP.NET MVC 5 Web Applications

## Lab: Deploying ASP.NET MVC 5 Web Applications

#### Scenario

You have completed the development and testing of the photo sharing application. Your managers and senior developers have signed off the project, and have requested you to deploy the application to the Adventure Works Microsoft Azure account.

#### Objectives

After completing this lab, you will be able to:

- Prepare an MVC web application for deployment.
- Deploy an MVC web application to Microsoft Azure.

#### Lab Setup

Estimated Time: **45 minutes**

In this lab, you will create a web application in Microsoft Azure that runs in Free mode. Free mode is an excellent tool for testing and running small, non-intensive web applications. However, there is a limit of data transfer per day on the Free mode tool. After completing Exercise 2, you are encouraged to further test the deployed web application. However, if you do a lot of extra testing, you may encounter the limit and the application may become unavailable.

>**Note:** This lab is dependent on the successful execution of the lab of Modules 11 and 13. If you have not executed labs of Modules 11 and 13, this lab will not function properly.

### Exercise 1: Deploying a Web Application to Microsoft Azure

#### Scenario

In this exercise, you will:

- Reconfigure the Photo Sharing application for release deployment.
- Configure the connection strings and bing key of the photo sharing application.
- Create a new web application in Microsoft Azure and deploy the Photo Sharing application to the new site.

The main tasks for this exercise are as follows:

1. Prepare the Photo Sharing application project for deployment.

2. Create a new web app in Microsoft Azure.

3. Deploy the Photo Sharing application.

#### Task 1: Prepare the Photo Sharing application project for deployment.

1. Open the Photo Sharing application solution from the following location:

	- File location: **Allfiles\20486C\Mod15\Labfiles\PhotoSharingApplication_15_begin**.

2. In the **Build** properties of the **PhotoSharingApplication** project, select the **Release** configuration.

	- Sign in to the Microsoft Azure portal by using the following URL: **https://portal.azure.com**

3. In the **Microsoft Azure** page, create a database named **PhotoSharingDB** if it doesn't exist.
4. Copy the **ADO.NET** connection string for the **PhotoSharingDB** to the clipboard.
5. In the Web.config file, paste the connection string into the **connectionString** attribute of the **PhotoSharingContext** connection string. Set the username in the pasted connection string to [your first name], and set the password in the pasted connection string to **Pa$$w0rd**.
6. Copy the **ADO.NET** connection string for the **PhotoAppServices** to the clipboard.
7. In the Web.config file, paste the connection string into the **connectionString** attribute of the **PhotoAppServices** connection string. Set the username in the pasted connection string to [your first name], and set the password in the pasted connection string to **Pa$$w0rd**.
8. Log on to the Bing Maps Account Center web application by using the following information:

	- URL: **https://www.bingmapsportal.com**
	- User name: _&lt;Your Windows Live account name&gt;_
	- Password: _&lt;Your Windows Live account password&gt;_

9. Copy the Bing Maps key.
10. Replace the text, **{Your Bing Key}**, in the MapDisplay.js file, with the copied key.
11. Save all the changes.

#### Task 2: Create a new web app in Microsoft Azure.

- In Microsoft Azure, create a new web app by using the following information:

	- App name: _&lt;your username&gt;_ **PhotoSharing**
	- Resource Group: Main
	- App Service plan: _&lt;your first name&gt;_ **PhotoSharing**
	- Location: _&lt;a location close to you&gt;_
	- Pricing tier: **D1 Shared**

#### Task 3: Deploy the Photo Sharing application.

1. In Microsoft Edge, download the publish profile for the _&lt;your username&gt;_ **PhotoSharing** web application.

2. In Microsoft Visual Studio, start the Publish Web wizard and import the publish profile you just downloaded.
3. Publish the web application.

  >**Results** : After completing this exercise, you will be able to prepare an ASP.NET MVC web application for production deployment, create a web application in Microsoft Azure, and deploy an MVC web application to Microsoft Azure.

### Exercise 2: Testing the Completed Application

#### Scenario

You have completed and fully deployed the Photo Sharing web application in Microsoft Azure. Now, you want to perform some final functionality tests before you confirm the completion of the application to your manager.

The main tasks for this exercise are as follows:

1. Add a photo and a comment.

2. Use the slideshow and favorites options.

#### Task 1: Add a photo and a comment.

1. Log on to the **Adventure Works Photo Sharing** web application by using the following information:

	- User name: **David Johnson**
	- Password: **Pa$$w0rd2**

2. Add a new photo to the web application by using the following information:

	- Title: **Test New Photo**
	- Photo: **Allfiles\20486C\Mod15\Labfiles\Sample Photos\track.JPG**
	- Description: **This is the first photo added to the deployed web application**

3. Display the new photo and check if the data is displayed correctly.
4. Add a new comment to the new photo by using the following information:

	- Subject: **Functionality Check**
	- Body: **The photo metadata is displayed correctly**

#### Task 2: Use the slideshow and favorites options.

1. Examine the Slideshow webpage and check that the display of all photos functions as designed.

2. Add three photos to your favorites list.
3. View the **Favorites** slideshow.

  >**Results** : After completing this exercise, you will be able to confirm that all the functionalities that you built in the Photo Sharing application run correctly in the Microsoft Azure deployment.
  
©2017 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.


# Module 11: Controlling Access to ASP.NET MVC 5 Web Applications

# Lab: Controlling Access to ASP.NET MVC 5 Web Applications

#### Scenario

A large part of the functionality for your proposed Photo Sharing application is in place. However, stakeholders are concerned about security because there are no restrictions on the tasks that users can complete. The following restrictions are required:

- Only site members should be able to add or delete photos.
- Only site members should be able to add or delete comments.

You have been asked to resolve these concerns by creating a membership system for the Photo Sharing application. Visitors should be able to register as users of the web application and create user accounts for themselves. After registration, when the users sign in to the application, they will have access to actions such as adding and deleting photos and comments. Anonymous users will not have access to perform these actions. Additionally, registered users should also be able to reset their own password.

#### Objectives

After completing this lab, you will be able to:

- Configure a web application to use ASP.NET Form Authentication with accounts stored in Microsoft Azure SQL database.
- Write models, controllers, and views to authenticate users in a web application.
- Provide access to resources in a web application.
- Enable users to reset their own password.

#### Lab Setup

Estimated Time: **90 minutes**

### Exercise 1: Configuring Authentication and Membership Providers

#### Scenario

You want to use a Microsoft Azure SQL database to store user accounts and membership information.

In this exercise, you will:

- Create a Microsoft Azure SQL database.
- Configure a provider to connect to the database.

The main tasks for this exercise are as follows:

1. Configure a new Microsoft Azure SQL database.

2. Install universal providers.

3. Configure providers in Web.config.

#### Task 1: Configure a new Microsoft Azure SQL database.

1. Sign in to the Microsoft Azure portal by using the following portal address::

    - **https://portal.azure.com**

2. Create a new database server and a new custom database by using the following information:

    - Database name: **PhotoAppServices**
    - Database server: **New SQL Database Server**
    - Resource group: **Create New**
    - Logon name: _&lt;your first name&gt;_
    - Logon password: **Pa$$w0rd**
    - Logon password confirmation: **Pa$$w0rd**
    - Region: _&lt;a region close to you&gt;_

3. In the list of allowed IP addresses for the **PhotoAppServices** database, add the following IP address ranges:

    - Rule name: **First Address Range**
    - Start IP address: _&lt;first address in range&gt;_
    - End IP address: _&lt;last address in range&gt;_

#### Task 2: Install universal providers

1. Open the **PhotoSharingApplication.sln** file from the following location:

    - File location: **Allfiles\20486C\Mod11\Labfiles\PhotoSharingApplication_11_begin**

2. Install the **Microsoft ASP.NET Universal Providers** package in the **PhotoSharingApplication** project by using the NuGet Package Manager.

#### Task 3: Configure providers in Web.config

1. Remove the connection string named **DefaultConnection** from the top-level Web.config file.
2. Obtain the connection string for the PhotoAppServices database and add it to the Web.config file.
3. Configure the web application to use Forms authentication in Web.config, by using the following information:

    - Parent element: **&lt;system.web&gt;**
    - Element: **&lt;authentication&gt;**
    - Mode: **Forms**

4. Configure the sign in page for the web application by using the following information:

    - Parent element: **&lt;authentication&gt;**
    - Element: **&lt;forms&gt;**
    - Logon URL: **~/Account/Login**
    - Timeout: **2880**

5. Configure the default profile provider to use the connection string named **PhotoAppServices**.
6. Configure the Default Membership Provider to use the connection string named **PhotoAppServices**.
7. Configure the Default Role Provider to use the connection string named **PhotoAppServices**.
8. Configure the Default Session Provider to use the connection string named **PhotoAppServices**.
9. Save all the changes.

>**Results**: After completing this exercise, you should have created a Photo Sharing application that is configured to use Microsoft Azure SQL database for user accounts and membership information. In subsequent exercises, you will add model classes, actions, and views to implement authentication for this database.

### Exercise 2: Building the Logon and Register Views

#### Scenario

You have configured the Photo Sharing application to connect to Microsoft Azure SQL database for authentication and membership services. However, to use forms authentication in an MVC application, you need to build model classes, controllers, and views that enable users to sign in, sign out, and register for an account.

In this exercise, you will:

- Add model classes.
- Add controllers.
- Import logon and register views.
- Test the developed components.

The main tasks for this exercise are as follows:

1. Add account model classes.

2. Add an account controller.

3. Import Logon and Register views.

4. Add authentication controls to the Template view.

5. Test registration, log on, and log off.

#### Task 1: Add account model classes.

1. Add a new **Class** file named **AccountModelClasses.cs** to the **Models** folder.
2. Add references to the following namespaces, to the new class file:

    - System.ComponentModel.DataAnnotations
    - System.Data.Entity

3. Remove the **AccountModelClasses** class and add a new class by using the following information:

    - Scope: **Public**
    - Name: **UsersContext**
    - Inherit: **DbContext**

4. In the **UsersContext** class, create a constructor that passes the **PhotoAppServices** connection string to the base class constructor.
5. In the **AccountModelClasses.cs** code file, add a new public class named **Login**.
6. Add a new property to the **Login** class by using the following information:

    - Scope: **public**
    - Type: **string**
    - Name: **UserName**
    - Access: **Read/Write**
    - Display name: **User name**
    - Use the **Required** annotation.

7. Add a new property to the **Login** class by using the following information:

    - Scope: **public**
    - Type: **string**
    - Name: **Password**
    - Access: **Read/Write**
    - Data type: **Password**
    - Use the **Required** annotation.

8. Add a new property to the **Login** class by using the following information:

    - Scope: **public**
    - Type: **bool**
    - Name: **RememberMe**
    - Access: **Read/Write**
    - Display name: **Remember me?**

9. In the **AccountModelClasses.cs** code file, add a new public class named **Register**.
10. Add a new property to the **Register** class by using the following information:

    - Scope: **public**
    - Type: **string**
    - Name: **UserName**
    - Access: **Read/Write**
    - Display name **: User name**
    - Use the **Required** annotation.

11. Add a new property to the **Register** class by using the following information:

    - Scope: **public**
    - Type: **string**
    - Name: **Password**
    - Access: **Read/Write**
    - Data type: **Password**
    - Use the **Required** annotation.

12. Add a new property to the **Register** class by using the following information:

    - Scope: **public**
    - Type: **string**
    - Name: **ConfirmPassword**
    - Access: **Read/Write**
    - Data type: **Password**
    - Display name: **Confirm password**
    - Ensure that this property matches the **Password** property by using the **Compare** annotation.

13. Save all the changes.

#### Task 2: Add an account controller

1. Add a new controller named **AccountController** to the MVC web application by using the **MVC 5 Controller - Empty** template.
2. Delete the default **Index** action from the **AccountController** file and add **using** statement references for the following namespaces:

    - System.Web.Security
    - PhotoSharingApplication.Models

3. Create a new action method in the **AccountController** class by using the following information:

    - Scope: **public**
    - Return type: **ActionResult**
    - Name: **Login**
    - Parameter:a string named **returnUrl**

4. In the **Login** action, store the **returnUrl** value in the **ViewBag** collection, and then return a view named **Login**.
5. Create a new action method in the **AccountController** class by using the following information:

    - HTTP verb: **POST**
    - Scope: **public**
    - Return type: **ActionResult**
    - Name: **Login**
    - Parameters: a Login object named **model** and a string named **returnUrl**

6. Within the **Login** action method code block for the **HTTP POST** verb, check if the **ModelState** is valid.
7. Add an **if…else** statement to check the user&#39;s credentials by using the following information:

    - Method: **Membership.ValidateUser**
    - User name: **model.UserName**
    - Password: **model.Password**

8. If the user&#39;s credentials are correct, authenticate the user by using the following information:

    - Method: **FormsAuthentication.SetAuthCookie**
    - User name: **model.UserName**
    - Create persistent cookie: **model.RememberMe**

9. If **returnUrl** is a local URL, redirect the user to the **returnUrl**. Otherwise, redirect the user to the **Index** action of the **Home** controller.
10. If the user&#39;s credentials are incorrect, add a model error to the **ModelState** object by using the following information:

  - Key: An empty string
  - Error message: **The username or password is incorrect**

11. If the **ModelState** is not valid, return the current view and pass the **model** object so that the user can correct errors.
12. Create a new action method in the **AccountController** class by using the following information:

    - Scope: **public**
    - Return type: **ActionResult**
    - Name: **LogOff**
    - Parameters: None

13. In the **LogOff** action, log off the user, and then redirect to the **Index** action of the **Home** controller by using the **FormsAuthentication.SignOut()** method.
14. Create a new action method in the **AccountController** class by using the following information:

    - Scope: **public**
    - Return type: **ActionResult**
    - Name: **Register**
    - Parameters: None

15. In the **Register** action, return the **Register** view.
16. Create a new action method in the **AccountController** class by using the following information:

    - HTTP verb: **POST**
    - Scope: **public**
    - Return type: **ActionResult**
    - Name: **Register**
    - Parameter: a **Register** object named **model**.

17. Within the **Register** action method code block for the **HTTP POST** verb, check if the **ModelState** is valid.
18. If the **ModelState** is valid, create a **try…catch** block that catches exceptions of the type **MembershipCreateUserException e**.
19. In the **try** block, create a new user with the right user name and password by using the **Membership.CreateUser** method. Store the result in a **MembershipUser** object named **NewUser**.
20. Authenticate the new user and redirect the browser to the **Index** action of the **Home** controller.
21. In the **catch** block, add a model error to the **ModelState** object by using the following information:

    - Key: **Registration Error**
    - Error message: Report the error status code as a string

22. If the **ModelState** is not valid, return the current view and pass the model object so that the user can correct errors.
23. Save all the changes.

#### Task 3: Import Logon and Register views.

1. Add a new folder named **Account** to the **Views** folder.
2. Add the **Login.cshtml** file to the **Account** folder from the following location:

    - File location: **Allfiles\20486C\Mod11\Labfiles\Account Views**

3. Add the **Register.cshtml** file to the **Account** folder from the following location:

    - File location: **Allfiles\20486C\Mod11\Labfiles\Account Views**

#### Task 4: Add authentication controls to the Template view

1. Open the **_MainLayout.cshtml** page for editing.
2. Immediately before the **DIV** element with **clear-floats** class, insert a **DIV** element with **login-controls** class.
3. In the new **DIV** element, write a Razor **if… else** code block that checks whether the current request is from an authenticated user.
4. If the request is from an authenticated user, render a greeting message that includes the authenticated user&#39;s name.
5. After the greeting message, render a link to the **LogOff** action by using the following information:

    - Helper: **Html.ActionLink()**
    - Link text: **Log Off**
    - Action name: **LogOff**
    - Controller name: **Account**

6. If the request is from an anonymous user, render a link to the **Login** action by using the following Information:

    - Helper: **Html.ActionLink()**
    - Link text: **Log In**
    - Action name: **Login**
    - Controller name: **Account**

7. After the **Log In** link, render a link to the **Register** action by using the following Information:

    - Helper: **Html.ActionLink()**
    - Link text: **Register**
    - Action name: **Register**
    - Controller name: **Account**

8. Save all the changes.

#### Task 5: Test registration, log on, and log off.

1. Start the web application in debugging mode and register a user account by using the following information:

    - User name: **David Johnson**
    - Password: **Pa$$w0rd**

2. Sign off and then sign in with the credentials you just created.
3. Stop debugging.

>**Results**: After completing this exercise, you should have created a Photo Sharing application in which users can register for an account, sign in, and sign out.

### Exercise 3: Authorizing Access to Resources

#### Scenario

Now that you have enabled and tested authentication, you can authorize access to resources for both anonymous and authenticated users.

You should ensure that:

- Only site members can add or delete photos.
- Only site members can add or delete comments.
- The account controller actions are authorized properly.
- Only authenticated users see the **_Create** view for comments in the **Display** view.

The main tasks for this exercise are as follows:

1. Restrict access to Photo actions.

2. Restrict access to the Comment actions.

3. Restrict access to the Account actions.

4. Check authentication status in a view.

5. Test authorization.

#### Task 1: Restrict access to Photo actions

1. In the **PhotoController.cs** file, add the **[Authorize]** annotation to ensure that only authenticated users can access the **Create** action for the GET requests.
2. Add the **[Authorize]** annotation to ensure that only authenticated users can access the **Create** action for the **HTTP POST** verb.
3. Add the **[Authorize]** annotation to ensure that only authenticated users can access the **Delete** action.
4. Add the **[Authorize]** annotation to ensure that only authenticated users can access the **DeleteConfirmed** action for the **HTTP POST** verb.
5. Save all the changes.

#### Task 2: Restrict access to the Comment actions.

1. In the **CommentController.cs** file, add the **[Authorize]** annotation to ensure that only authenticated users can access the _ **Create** action.
2. Add the **[Authorize]** annotation to ensure that only authenticated users can access the **Delete** action.
3. Add the **[Authorize]** annotation to ensure that only authenticated users can access the **DeleteConfirmed** action for the **HTTP POST** verb.
4. Save all the changes.

#### Task 3: Restrict access to the Account actions

1. In the **AccountController.cs** file, add the **[Authorize]** annotation to ensure that only authenticated users can access all actions by default.
2. Add the **[AllowAnonymous]** annotation to ensure that anonymous users can access the **Login** action.
3. Add the **[AllowAnonymous]** annotation to ensure that anonymous users can access the **Login** action for the **HTTP POST** verb.
4. Add the **[AllowAnonymous]** annotation to ensure that anonymous users can access the **Register** action.
5. Add the **[AllowAnonymous]** annotation to ensure that anonymous users can access the **Register** action for the **HTTP POST** verb.
6. Save all the changes.

#### Task 4: Check authentication status in a view.

1. Open the **_CommentsForPhoto.cshtml** partial view.
2. In the **_CommentsForPhoto.cshtml** partial view, add an **if** statement to ensure that the **_Create** partial view is only displayed if the request is authenticated.
3. If the request is not authenticated, render a link to the **Login** action of the **Account** controller to display the text **To comment you must log in**.
4. Save all the changes.

#### Task 5: Test authorization

1. Start the web application in debugging mode and then attempt to add a new photo to the web application, without signing in to the application.
2. Without signing in to the application, view any photo in the application and attempt to add a comment.
3. Sign in to the web application by using the following credentials:

    - User name: **David Johnson**
    - Password: **Pa$$w0rd**

4. Add a comment of your choice to the photo by using the following information:

    - Subject: **Authenticated Test Comment**

5. Stop debugging.

>**Results**: After completing this exercise, you should have authorized anonymous and authenticated users to access resources in your web application.

### Exercise 4: Optional—Building a Password Reset View

#### Scenario

Site visitors can now register as users of the Photo Sharing application and sign in to the site so that they can add photos and comments. However, they do not have the facility to change their password. In this exercise, you will create a password reset page by using the membership services provider.

Complete this exercise if time permits.

The main tasks for this exercise are as follows:

1. Add a local password model class.

2. Add reset password actions.

3. Import the reset password view.

4. Add a link to the reset password view.

5. Test password reset.

#### Task 1: Add a local password model class.

1. Add a new class to the **AccountModelClasses.cs** file by using the following information:

    - Scope: **public**
    - Name of the class: **LocalPassword**

2. Add a new property to the **LocalPassword** class by using the following information:

    - Scope: **public**
    - Type: **string**
    - Name: **OldPassword**
    - Access: **Read/Write**
    - Data type: **Password**
    - Annotation: **[Required]**
    - Display name: **Current password**

3. Add a new property to the **LocalPassword** class by using the following information:

    - Scope: **public**
    - Type: **string**
    - Name: **NewPassword**
    - Access: **Read/Write**
    - Data type: **Password**
    - Annotation: **[Required]**
    - Display name: **New password**

4. Add a new property to the **LocalPassword** class by using the following information:

    - Scope: **public**
    - Type: **string**
    - Name: **ConfirmPassword**
    - Access: **Read/Write**
    - Data type: **Password**
    - Display name: **Confirm new password**
    - Use the **Compare** annotation to ensure this property matches the **NewPassword** property.

5. Save all the changes.

#### Task 2: Add reset password actions.

1. In the **AccountController** class, add a new enumeration by using the following information:

    - Scope: **public**
    - Name: **ManageMessageId**
    - Values: **ChangePasswordSuccess**, **SetPasswordSuccess**

2. Add a new action to the **AccountController** class by using the following information:

    - Scope: **public**
    - Return type: **ActionResult**
    - Name: **ResetPassword**
    - Parameters: an optional **ManageMessageId** object named **message**

3. If the **message** parameter is not null, set the **ViewBag.StatusMessage** property to **Your password has been changed**.
4. Set the **ViewBag.ReturnUrl** property to the URL of the **ResetPassword** action.
5. Return a view named **ResetPassword**.
6. Add a new action to the **AccountController** class by using the following information:

    - Annotation: **HttpPost**
    - Scope: **public**
    - Return type: **ActionResult**
    - Name: **ResetPassword**
    - Parameter: a **LocalPassword** object named **model**

7. In the new **ResetPassword** action for the HTTP POST verb, set the **ViewBag.ReturnUrl** property to the URL of the **ResetPassword** action.
8. Include an **if** statement to check whether the **ModelState** is valid.
9. If the **ModelState** is valid, create a new Boolean variable named **changePasswordSucceeded** , and then add a **try… catch** block that catches all exceptions.
10. In the **try** block, change the user&#39;s password by using the following information:

    - Method: **Membership.Provider.ChangePassword**
    - User name: **User.Identity.Name**
    - Old password: **model.OldPassword**
    - New password: **model.NewPassword**
    - Store the result in **changePasswordSucceeded**

11. In the **catch** block, set the **changePasswordSucceeded** variable to **false**.
12. After the **try…catch** code block, if **changePasswordSucceeded** is true, redirect to the **ResetPassword** action and pass the **ManageMessageId.ChangePasswordSucccess** value to the **message** parameter.
13. If **changePasswordSucceeded** is false, add a model error to the **ModelState** object by using the following information:

    - Key: An empty string
    - Message: **The current password is incorrect or the new password is invalid**

14. If the **ModelState** is not valid, return the current view and pass the **model** object so that the errors can be corrected.
15. Save all the changes.

#### Task 3: Import the reset password view

- Add the **ResetPassword.cshtml** file to the **Views/Account** folder from the following location:

  - **Allfiles/20486C/Mod11/Labfiles/Account**

#### Task 4: Add a link to the reset password view.

1. Add a new link to the **_MainLayout.cshmtl** template view by using the following information:

    - Position: After the link to the **LogOff** action
    - Text: **Reset**
    - Action: **ResetPassword**
    - Controller: **Account**

2. Save all the changes.

#### Task 5: Test password reset

1. Start the web application in debugging mode, and then log on with the following credentials:

    - User name: **David Johnson**
    - Password: **Pa$$w0rd**

2. Change the password from **Pa$$w0rd** to **Pa$$w0rd2**.
3. Stop debugging and close the open windows.

>**Results**: After you complete this exercise, you should have built a Photo Sharing application in which registered users can reset their own password.

©2017 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.

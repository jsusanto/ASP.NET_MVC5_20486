﻿# Module 11: Controlling Access to ASP.NET MVC 5 Web Applications

# Lab: Controlling Access to ASP.NET MVC 5 Web Applications

### Lab Setup

Estimated Time: **90 minutes**

### Preparation Steps

1. Ensure that you have cloned the 20486C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20486-DevelopingASPNETMVCWebApplications/tree/master/Allfiles

### Exercise 1: Configuring Authentication and Membership Providers

#### Task 1: Configure a new Microsoft Azure SQL database.

1. On the taskbar, click the **Microsoft Edge** icon.
2. In the address bar of the Microsoft Edge window, type **https://portal.azure.com**, and then press Enter.
3. If a page appears, prompting you to enter your email address, type your email address, and then click **Continue**. Wait for the **Sign In** page to appear, type your email address and password, and then click **Sign In**.

    >**Note:** During the sign-in process, if a page appears prompting you to choose from a list of previously used accounts, select the account that you previously used, and then continue to type your credentials

4. In the left pane of the Microsoft Azure page, click **SQL DATABASES**, and then click **Add**.
5. In the **SQL Database** panel, type **PhotoAppServices** as the **Database name**.
6. Check the Radio button **Create New** to create a new Resource Group. type a name for the resouce group in the Text Box below the Radio buttons.
7. In the **SQL Database** panel, click **Server** (located under the Select source drop down).
8. In the **Server** panel, click **Create a new server**.
9. In the **New server** panel, in the **Server name** text box, type a unique name.
10. In the **Server admin login** text box, type _&lt;your first name&gt;_.
11. In the **Password** text box, type **Pa$$w0rd**.
12. In the **Confirm Password** text box, type **Pa$$w0rd**.
13. In the **Location** box, click _&lt;a region close to you&gt;_.
14. Click **Select** to create the new server.
15. In the **Pricing tier**, select **Basic**, and then click **Apply**.
16. To create the database, click **Create**.
17. Wait until the database is created (as can be seen by clicking the bell icon at the top right).

    >**Note:** In the sql databases result pane, note that a new database, PhotoAppServices, is created.

18. In the **Name** column of the sql databases page, click **PhotoAppServices**, and then click **Set server firewall**.
18. To add your IP to the allowed IPs, click **Add client IP**, and then click **Save**.

    >**Note:** To add more IP address ranges, you can repeat step 17.

#### Task 2: Install universal providers

1. On the taskbar, click the **File Explorer** icon.
2. In the **Libraries** window, go to **Allfiles/20486C/Mod11/Labfiles/PhotoSharingApplication_11_begin**, and then double-click **PhotoSharingApplication.sln**.
3. On the **Tools** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, point to **NuGet Package Manager**, and then click **Package Manager Console**.
4. In **Package Manager Console** window, enter the following command, and then press Enter.

  ```cs
       Install-Package Microsoft.AspNet.Providers -Version 2.0.0
```

#### Task 3: Configure providers in Web.config

1. In the Solution Explorer pane of the **PhotoSharingApplication – Microsoft Visual Studio** window, expand **PhotoSharingApplication**, and then click **Web.config**.
2. In the **&lt;connectionStrings&gt;** element of the Web.config code window, locate the following code, select the located code, and then press Delete.

  ```cs
       <add name="DefaultConnection" providerName="System.Data.SQLClient" connectionString="Data Source=.\SQLEXPRESS;Initial Catalog=aspnet-PhotoSharingApplication-<id>;Integrated Security=SSPI" />
```
3. Switch to Microsoft Edge.
4. In the Microsoft Edge window, close the **Firewall settings** panel.
5. Click **Connection strings**. 

6. In the **ADO.NET** box of the **Connection Strings** dialog box, select the given text, right-click the selected text, and then click **Copy**.
7. On the taskbar, click the **PhotoSharingApplication - Microsoft Visual Studio icon**.
8. In the Web.config code window, place the mouse cursor before the **&lt;/connectionStrings&gt;** tag, press Enter, and then type the following code.

  ```cs
        <add name="PhotoAppServices" connectionString = "" providerName = "System.Data.SqlClient" />    
```
9. In the connectionStrings code block that you just typed, place the mouse cursor within the quotes after **connectionString =**, right-click, and then click **Paste**.
10. In the content you just pasted, locate the text **{your_username}** and replace it with your first name, then locate the text **{your_password_here}**, and then replace the text with **Pa$$w0rd**.
11. In the Web.config code window, locate the following code.

  ```cs
        <system.web>
```
12. Place the mouse cursor at the end of the located code, press Enter, and then type the following code.

  ```cs
        <authentication mode="Forms">
        </authentication>
```
13. Place the cursor within the **&lt;authentication&gt;** element you just created, and then type the following code.

   ```cs
        <forms loginUrl="~/Account/Login" timeout="2880" />
```
14. In the Web.config code window, locate the following code.

  ```cs
        <add name="DefaultProfileProvider" type="System.Web.Providers.DefaultProfileProvider, System.Web.Providers, Version=2.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" connectionStringName="DefaultConnection" applicationName="/" />
```
15. Within the located code, select the following text.

  ```cs
        DefaultConnection
```
16. Replace the selected text with the following text.

  ```cs
        PhotoAppServices
```
17. In the Web.config code window, locate the following code.

  ```cs
        <add name="DefaultMembershipProvider" type="System.Web.Providers.DefaultMembershipProvider, System.Web.Providers, Version=2.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" connectionStringName="DefaultConnection" enablePasswordRetrieval="false" enablePasswordReset="true" requiresQuestionAndAnswer="false" requiresUniqueEmail="false" maxInvalidPasswordAttempts="5" minRequiredPasswordLength="6" minRequiredNonalphanumericCharacters="0" passwordAttemptWindow="10" applicationName="/" />
```
18. Within the located code, select the following text.

  ```cs
        DefaultConnection
```
19. Replace the selected text with the following text.

  ```cs
        PhotoAppServices
```
20. In the Web.config code window, locate the following code.

  ```cs
        <add name="DefaultRoleProvider" type="System.Web.Providers.DefaultRoleProvider, System.Web.Providers, Version=2.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" connectionStringName="DefaultConnection" applicationName="/" />
```
21. Within the located code, select the following text.

  ```cs
        DefaultConnection
```
22. Replace the selected text with the following text.

  ```cs
        PhotoAppServices
```

23. In the Web.config code window, locate the following code.

  ```cs
        <add name="DefaultSessionProvider" type="System.Web.Providers.DefaultSessionStateProvider, System.Web.Providers, Version=2.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" connectionStringName="DefaultConnection" />
```

24. Within the located code, select the following text.

  ```cs
        DefaultConnection
```

25. Replace the selected text with the following text.

  ```cs
        PhotoAppServices
```

26. On the **FILE** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Save All**.

>**Results**: After completing this exercise, you should have created a Photo Sharing application that is configured to use Microsoft Azure SQL database for user accounts and membership information. In subsequent exercises, you will add model classes, actions, and views to implement authentication for this database.

### Exercise 2: Building the Logon and Register Views

#### Task 1: Add account model classes.

1. In the Solution Explorer pane, right-click **Models**, point to **Add**, and then click **Class**.
2. In the **Name** box of the **Add New Item – PhotoSharingApplication** dialog box, type **AccountModelClasses.cs**, and then click **Add**.
3. In the **AccountModelClasses.cs** code window, locate the following code.

  ```cs
       using System.Web;
```
4. Place the mouse cursor at the end of the located code, press Enter, and then type the following code.

  ```cs
       using System.ComponentModel.DataAnnotations;
       using System.Data.Entity;
```
5. In the **AccountModelClasses.cs** code window, locate the following code.

  ```cs
       public class AccountModelClasses
```
6. Replace the located code with the following code.

  ```cs
       public class UsersContext : DbContext
```
7. Place the mouse cursor within the **UsersContext** class code block you just created, and then type the following code.

  ```cs
       public UsersContext() : base("PhotoAppServices")
       {
       }
```
8. Place the mouse cursor after the **UsersContext** class code block, press Enter twice, and then type the following code.

  ```cs
       public class Login
       {
       }
```
9. Place the mouse cursor within the **Login** class code block you just created, and then type the following code.

  ```cs
       [Required]
       [Display(Name = "User name")]
       public string UserName { get; set; }
```
10. Place the mouse cursor at the end of the **UserName** property code block you just created, press Enter twice, and then type the following code.

  ```cs
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
```
11. Place the mouse cursor at the end of the **Password** property code block you just created, press Enter twice, and then type the following code.

  ```cs
        [Display(Name = "Remember me?")]
        public bool RememberMe { get; set; }
```
12. Place the mouse cursor after the **Login** class code block, press Enter twice, and then type the following code.

  ```cs
        public class Register
        {
        }
```
13. Place the mouse cursor within the **Register** class code block you just created, and then type the following code.

  ```cs
        [Required]
        [Display(Name = "User name")]
        public string UserName { get; set; }
```
14. Place the mouse cursor at the end of the **UserName** property code block you just created, press Enter twice, and then type the following code.

  ```cs
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
```
15. Place the mouse cursor at the end of the **Password** property code block you just created, press Enter twice, and then type the following code.

  ```cs
        [DataType(DataType.Password)]
        [Display(Name = "Confirm password")]
        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }
```
16. On the **FILE** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Save All**.

#### Task 2: Add an account controller

1. In the Solution Explorer pane, right-click **Controllers**, point to **Add**, and then click **Controller**.
2. Select **MVC 5 controller - Empty**, then click **Add**.
3. In the **Controller name** box of the **Add Controller** dialog box, type **AccountController**, then click **Add**.
4. In the **AccountController.cs** code window, locate the following code, select the code, and then press Delete.

  ```cs
       //GET: /Account/
       public ActionResult Index()
       {
          return View();
       }
```
5. Locate the following code.

  ```cs
       using System.Web.Mvc;
```
6. Place the mouse cursor at the end of the located code, press Enter, and then type the following code.

  ```cs
       using System.Web.Security;
       using PhotoSharingApplication.Models;
```
7. Place the mouse cursor within the **AccountController** class code block, and then type the following code.

  ```cs
       public ActionResult Login(string returnUrl)
       {
       }
```
8. Place the mouse cursor within the **Login** action method code block, and then type the following code.

  ```cs
       ViewBag.ReturnUrl = returnUrl;
       return View();
```
9. Place the mouse cursor within the **AccountController** class but outside any action method code block, and then type the following code.

  ```cs
       [HttpPost]
       public ActionResult Login(Login model, string returnUrl)
       {
       }
```
10. Place the mouse cursor within the **Login** action method code block for the **HTTP POST** verb, and then type the following code.

  ```cs
        if (ModelState.IsValid)
        {
        }
```
11. Place the mouse cursor within the **if** code block you just added, and then type the following code.

  ```cs
        if (Membership.ValidateUser(model.UserName, model.Password))
        {
        }
        else
        {
        }
```
12. Place the cursor within the **if** statement code block you just added, and then type the following code.

  ```cs
        FormsAuthentication.SetAuthCookie(model.UserName, model.RememberMe);
```
13. Place the mouse cursor at the end of the code you just typed, press Enter, and then type the following code.

  ```cs
        if (Url.IsLocalUrl(returnUrl))
        {
           return Redirect(returnUrl);
        }
        else
        {
           return RedirectToAction("Index", "Home");
        }
```
14. Place the mouse cursor within the empty **else** clause you created in the first instance, and then type the following code.

  ```cs
        ModelState.AddModelError("", "The username or password is incorrect");
```
15. Place the mouse cursor at the end of the **Login** action method for the **HTTP POST** verb, outside any of the** if** statements, and then type the following code.

  ```cs
        return View(model);
```
16. Place the mouse cursor within the **AccountController** class but outside any action method, and then type the following code.

  ```cs
        public ActionResult LogOff()
        {
        }
```
17. Place the mouse cursor within the **LogOff** action code block you just created, and then type the following code.

  ```cs
        FormsAuthentication.SignOut();
        return RedirectToAction("Index", "Home");
```
18. Place the cursor within the **AccountController** class but outside any action method, and then type the following code.

  ```cs
        public ActionResult Register()
        {
        }
```
19. Place the mouse cursor within the **Register** action code block you just created, and then type the following code.

  ```cs
        return View();
```
20. Place the mouse cursor within the **AccountController** class but outside any action method code block, and then type the following code.

  ```cs
        [HttpPost]
        public ActionResult Register(Register model)
        {
        }
```
21. Place the mouse cursor within the **Register** action method code block for the **HTTP POST** verb, and then type the following code.

  ```cs
        if (ModelState.IsValid)
        {
        }
```
22. Place the mouse cursor within the **if** code block you just created, and then type the following code.

  ```cs
        try
        {
        }
        catch (MembershipCreateUserException e)
        {
        }
```
23. Place the mouse cursor within the **try** code block you just created, and then type the following code.

  ```cs
        MembershipUser NewUser = Membership.CreateUser(model.UserName, model.Password);
```
24. Place the mouse cursor at the end of the code you just typed, press Enter, and then type the following code.

  ```cs
        FormsAuthentication.SetAuthCookie(model.UserName, false);
        return RedirectToAction("Index", "Home");
```
25. Place the mouse cursor within the **catch** code block you created, and then type the following code.

  ```cs
        ModelState.AddModelError("Registration Error", "Registration error: " + e.StatusCode.ToString());
```
26. Place the mouse cursor at the end of the **Register** action method for the **HTTP POST** verb, outside any of the **if** statements, and then type the following code.

  ```cs
        return View(model);
```
27. On the **FILE** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Save All**.

#### Task 3: Import Logon and Register views.

1. In the Solution Explorer pane, right-click **Views**, point to **Add**, and then click **New Folder**.
2. In the **NewFolder1** text box, type **Account**, and then press Enter.
3. Under Views, right-click **Account**, point to **Add**, and then click **Existing Item**.
4. In the **Add Existing Item – PhotoSharingApplication** dialog box, navigate to **Allfiles/20486C/Mod11/Labfiles/Account Views**, click **Login.cshtml**, and then click **Add**.
5. In the Solution Explorer pane, right-click **Account**, point to **Add**, and then click **Existing Item**.
6. In the **Add Existing Item – PhotoSharingApplication** dialog box, navigate to **Allfiles/20486C/Mod11/Labfiles/Account Views**, click **Register.cshtml**, and then click **Add**.

#### Task 4: Add authentication controls to the Template view

1. In the Solution Explorer pane, under Views, expand **Shared**, and then click **\_MainLayout.cshtml**.
2. In the \_MainLayout.cshtml code window, locate the following code.

  ```cs
       <div class="clear-floats" />
```
3. Place the mouse cursor immediately before the located code, press Enter, and then type the following code.

  ```cs
       <div class="login-controls">
       </div>
```
4. Place the mouse cursor within the **DIV** element you just created, and then type the following code.

  ```cs
       @if (Request.IsAuthenticated)
       {
       }
       else
       {
       }
```
5. Place the mouse cursor within the **@if** statement code block you just created, and then type the following code.

  ```cs
       @:Hello, @User.Identity.Name
```
6. Place the mouse cursor at the end of the greeting message you just created, press Enter, and then type the following code.

  ```cs
       @Html.ActionLink("Log Off", "LogOff", "Account")
```
7. Place the mouse cursor within the **else** code block you created, and then type the following code.

  ```cs
       @Html.ActionLink("Log In", "Login", "Account")
```
8. Place the mouse cursor at the end of the code you just typed, press Enter, and then type the following code.

  ```cs
       @Html.ActionLink("Register", "Register", "Account")
```
9. On the **FILE** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Save All**.

#### Task 5: Test registration, log on, and log off.

1. On the **DEBUG** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Start Debugging**.
2. On the **Welcome to Adventure Works Photo Sharing** page, click **Register**.
3. In the **User name** textbox of the Register section, type **David Johnson**.
4. In the **Password** text box, type **Pa$$w0rd**.
5. In the **Confirm password** box, type **Pa$$w0rd**, and then click **Register**.

    >**Note:** At the upper-right corner of the Welcome to Adventure Works Photo Sharing page, note that the authentication controls show your first name to indicate that you are logged on.

6. On the **Welcome to Adventure Works Photo Sharing** page, click **Log Off**.

    >**Note:** Before clicking **Log In**, click any other link or menus to ensure that you have successfully logged off.

7. On the **Welcome to Adventure Works Photo Sharing** page, click **Log In**.
8. In the **User name** box of the Login section, type **David Johnson**.
9. In the **Password** box, type **Pa$$w0rd**, and then click **Log in**.
10. After successfully logging in, on the **Welcome to Adventure Works Photo Sharing** page, click **Log Off**.

    >**Note:** At the top-right corner of the **Welcome to Adventure Works Photo Sharing** page, if you see your first name in the authentication controls, it implies that the model classes, controller, and views are working as expected.

11. On the **DEBUG** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Stop Debugging**.
12. In the **Microsoft Edge** window, click **Close**.

>**Results**: After completing this exercise, you should have created a Photo Sharing application in which users can register for an account, sign in, and sign out.

### Exercise 3: Authorizing Access to Resources

#### Task 1: Restrict access to Photo actions

1. In the Solution Explorer pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, under Controllers, click **PhotoController.cs**.
2. In the PhotoController.cs code window, locate the following code.

  ```cs
       public ActionResult Create()
```
4. Place the mouse cursor before the located code, type the following code, and then press Enter.

  ```cs
       [Authorize]
```
5. In the PhotoController.cs code window, locate the following code.

  ```cs
       public ActionResult Create(Photo photo, HttpPostedFileBase image)
```
6. Place the mouse cursor before the located code, type the following code, and then press Enter.

  ```cs
       [Authorize]
```
7. In the PhotoController.cs code window, locate the following code.

  ```cs
       public ActionResult Delete(int id)
```
8. Place the mouse cursor before the located code, type the following code, and then press Enter.

  ```cs
       [Authorize]
```
9. In the PhotoController.cs code window, locate the following code.

  ```cs
       public ActionResult DeleteConfirmed(int id)
```
10. Place the mouse cursor before the located code, type the following code, and then press Enter.

  ```cs
        [Authorize]
```
11. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save All**.

#### Task 2: Restrict access to the Comment actions.

1. In the Solution Explorer pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, under Controllers, click **CommentController.cs**.
2. In the CommentController.cs code window, locate the following code.

  ```cs
       public PartialViewResult _Create(int PhotoId)
```
3. Place the mouse cursor before the located code, type the following code, and then press Enter.

  ```cs
       [Authorize]
```
4. In the CommentController.cs code window, locate the following code.

  ```cs
       public ActionResult Delete(int id = 0)
```
5. Place the mouse cursor before the located code, type the following code, and then press Enter.

  ```cs
       [Authorize]
```
6. In the CommentController.cs code window, locate the following code.

  ```cs
       public ActionResult DeleteConfirmed(int id)
```
7. Place the mouse cursor before the located code, type the following code, and then press Enter.

  ```cs
       [Authorize]
```
8. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save All**.

#### Task 3: Restrict access to the Account actions

1. In the Solution Explorer pane, under **Controllers**, click **AccountController.cs**.
2. In the AccountController.cs code window, locate the following code.

  ```cs
       public class AccountController : Controller
```
3. Place the mouse cursor before the located code, type the following code, and then press Enter.

  ```cs
       [Authorize]
```
4. In the AccountController.cs code window, locate the following code.

  ```cs
       public ActionResult Login(string returnUrl)
```
5. Place the mouse cursor before the located code, type the following code, and then press Enter.

  ```cs
       [AllowAnonymous]
```
6. In the AccountController.cs code window, locate the following code.

  ```cs
       public ActionResult Login(Login model, string returnUrl)
```
7. Place the mouse cursor before the located code, type the following code, and then press Enter.

  ```cs
       [AllowAnonymous]
```
8. In the AccountController.cs code window, locate the following code.

  ```cs
       public ActionResult Register()
```
9. Place the mouse cursor before the located code, type the following code, and then press Enter.

  ```cs
       [AllowAnonymous]
```
10. In the AccountController.cs code window, locate the following code.

  ```cs
        public ActionResult Register(Register model)
```
11. Place the mouse cursor before the located code, type the following code, and then press Enter.

  ```cs
       [AllowAnonymous]
```
12. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save All**.

#### Task 4: Check authentication status in a view.

1. In the Solution Explorer pane, under **Views**, under **Shared**, click **_CommentsForPhoto.cshtml**.
2. In the \_CommentsForPhoto.cshtml code window, locate the following code.

  ```cs
       @Html.Action("_Create", "Comment", new { PhotoID = ViewBag.PhotoId })
```
3. Place the mouse cursor before the located code, type the following code, and then press Enter.

  ```cs
       @if (Request.IsAuthenticated)
       {
```
4. Place the mouse cursor after the located code, press Enter, and then type the following code.

  ```cs
       }
```
5. In the _CommentsForPhoto.cshtml code window, at the end of the code you just typed, press Enter, and then type the following code.

  ```cs
       else
       {
          @Html.ActionLink("To comment you must log in", "Login", "Account");
       }
```
6. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save All**.

#### Task 5: Test authorization

1. On the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Start Debugging**.
2. On the Welcome to Adventure Works Photo Sharing page, click **Add a Photo**.

    >**Note:** ASP.NET forwards the browser to the **Login** action of the **Accounts** controller because the request is unauthenticated.

3. On the **Login** page, click **All Photos**.
4. On the All Photos page, click **Display** corresponding to a photo of your choice.
5. On the result page, view the comments for the photo.

    >**Note:** A link to the **Login** action is displayed at the lower end of the page, instead of the comment creation form.

6. On the result page, click **To comment you must log in**.
7. On the **Login** page, in the **User name** box, type **David Johnson**, in the **Password** box, type **Pa$$w0rd**, and then click **Log in**.
8. On the **Welcome to Adventure Works Photo Sharing** page, click **Display** corresponding to a photo of your choice.
9. On the result page, view the comments for the photo.

    >**Note:** The create comment form is displayed because the request is authenticated. 

10. In the Comments section of the result page, in the **Subject** box, type **Authenticated Test Comment**.
11. In the **Body** box, type _&lt;a comment of your choice&gt;_, and then click **Create**.
12. On the **Welcome to Adventure Works Photo Sharing** page, click **Log off**.
13. In the Microsoft Edge window, click **Close**.
14. On the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Stop Debugging**.

>**Results**: After completing this exercise, you should have authorized anonymous and authenticated users to access resources in your web application.

### Exercise 4: Optional—Building a Password Reset View

#### Task 1: Add a local password model class.

1. In the Solution Explorer pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, under **Models** , click **AccountModelClasses.cs**.
2. In the AccountModelClasses.cs code window, place the mouse cursor in the **PhotoSharingApplication.Models** namespace code block, but outside any class code block, and then type the following code.

  ```cs
       public class LocalPassword
       {
       }
```
3. In the **LocalPassword** class code block, type the following code.

  ```cs
       [Required]
       [DataType(DataType.Password)]
       [Display(Name = "Current password")]
       public string OldPassword { get; set; }
```
4. Place the mouse cursor at the end of the **OldPassword** property code block that you just created, press Enter twice, and then type the following code.

  ```cs
       [Required]
       [DataType(DataType.Password)]
       [Display(Name = "New password")]
       public string NewPassword { get; set; }
```
5. Place the mouse cursor at the end of the **NewPassword** property code block you just created, press Enter twice, and then type the following code.

  ```cs
       [DataType(DataType.Password)]
       [Display(Name = "Confirm new password")]
       [Compare("NewPassword", ErrorMessage = "The password and confirmation password do not match.")]
       public string ConfirmPassword { get; set; }
```
6. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save All**.

#### Task 2: Add reset password actions.

1. In the Solution Explorer pane, under **Controllers**, click **AccountControllers.cs**.
2. In the AccountControllers.cs code window, place the mouse cursor in the **AccountController** class code block, but outside any action method code block, press Enter, and then type the following code.

  ```cs
       public enum ManageMessageId
       {
          ChangePasswordSuccess,
          SetPasswordSuccess,
       }
```
3. Place the mouse cursor at the end of the **ManageMessageId** code block, press Enter, and then type the following code.

  ```cs
       public ActionResult ResetPassword (ManageMessageId? message)
       {
       }
```
4. In the **ResetPassword** action code block, type the following code.

  ```cs
       if (message != null)
       {
          ViewBag.StatusMessage = "Your password has been changed";
       }
```
5. In the **ResetPassword** action code block, place the mouse cursor at the end of the code you just typed, press Enter, and then type the following code.

  ```cs
       ViewBag.ReturnUrl = Url.Action("ResetPassword");
```
6. In the **ResetPassword** action code block, place the mouse cursor at the end of the code you just typed, press Enter, and then type the following code.

  ```cs
       return View();
```
7. In the AccountControllers.cs code window, place the mouse cursor within the **AccountController** class, but outside any action method code block, press Enter, and then type the following code.

  ```cs
       [HttpPost]
       public ActionResult ResetPassword (LocalPassword model)
       {
       }
```
8. In the **ResetPassword** action code block for the HTTP POST verb, type the following code.

  ```cs
       ViewBag.ReturnUrl = Url.Action("ResetPassword");
```
9. In the **ResetPassword** action code block for the HTTP POST verb, press Enter, and then type the following code.

  ```cs
       if (ModelState.IsValid)
       {
       }
```
10. In the **if** statement code block, type the following code.

  ```cs
        bool changePasswordSucceeded;
        try
        {
        }
        catch (Exception)
        {
        }
```
11. In the **try** code block, type the following code.

  ```cs
        changePasswordSucceeded = Membership.Provider.ChangePassword(User.Identity.Name, model.OldPassword, model.NewPassword);
```
12. In the **catch** block, type the following code.

  ```cs
        changePasswordSucceeded = false;
```
13. Place the cursor at the end of the **try…catch** code block, press Enter, and then type the following code.

  ```cs
        if (changePasswordSucceeded)
        {
           return RedirectToAction("ResetPassword", new { message = ManageMessageId.ChangePasswordSuccess });
        }
```
14. Place the mouse cursor at the end of the **if** statement code block, press Enter, and then type the following code.

  ```cs
        else
        {
           ModelState.AddModelError("", "The current password is incorrect or the new password is invalid");
        }
```
15. Place the mouse cursor at the end of the **ResetPassword** action code block for the **HTTP POST** verb, but outside the **if** statements, press Enter, and then type the following code.

  ```cs
        return View(model);
```
16. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save All**.

#### Task 3: Import the reset password view

1. In the Solution Explorer pane, under **Views**, right-click **Account**, point to **Add**, and then click **Existing Item**.
2. In the **Add Existing Item - PhotoSharingApplication** dialog box, navigate to **Allfiles/20486C/Mod11/Labfiles/Account Views**, click **ResetPassword.cshtml**, and then click **Add**.

    >**Note:** In the Solution Explorer pane, note that the **ResetPassword.cshtml** file is added to the **Account** folder.

#### Task 4: Add a link to the reset password view.

1. In the Solution Explorer pane, under **Shared**, click **\_MainLayout.cshtml**.
2. In the \_MainLayout.cshtml code window, locate the following code.

  ```cs
       @Html.ActionLink("Log Off", "LogOff", "Account")
```
3. Place the mouse cursor at the end of the located code, press Enter, and then type the following code.

  ```cs
       @Html.ActionLink("Reset", "ResetPassword", "Account")
```
4. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save All**.

#### Task 5: Test password reset

1. On the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Start Debugging**.
2. On the Welcome to Adventure Works Photo Sharing page, click **Log In**.
3. On the sign in page, in the **User name** box, type **David Johnson**, in the **Password** text box, type **Pa$$w0rd**, and then click **Log in**.
4. On the **Welcome to Adventure Works Photo Sharing** page, click **Reset**.
5. On the **ResetPassword** page, in the **Current password** text box, type **Pa$$w0rd**.
6. In the **New password text** box, type **Pa$$w0rd2**, in the **Confirm new password** text box, type **Pa$$w0rd2**, and then click **Change Password**.

    >**Note:** The message, &quot;Your password has been changed&quot; is displayed.

7. On the **Welcome to Adventure Works Photo Sharing** page click **Log off**.
8. In the **Microsoft Edge** window, click **Close**.
9. On the **Debugging** menu, click **stop debugging** and then click **Close** on the **PhotoSharingApplication-Microsoft Visual Studio** page.
10. In the **SQL Databases – Windows Azure** window, click **Close**.

>**Results**: After you complete this exercise, you should have built a Photo Sharing application in which registered users can reset their own password.

©2016 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.

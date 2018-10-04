# Module 14: Handling Requests in ASP.NET MVC 5 Web Applications

# Lab: Handling Requests in ASP.NET MVC 5 Web Applications

### Lab Setup

Before starting this lab, you need to perform the following steps:

1. Ensure that you have cloned the 20486C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20486-DevelopingASPNETMVCWebApplications/tree/master/Allfiles
2. Go to **Allfiles/20486C/Mod11/Labfiles/PhotoSharingApplication_11_begin/PhotoSharingApplication**, and then copy the **web.config** file.  
3. Go to **Allfiles/20486C/Mod14/Labfiles/PhotoSharingApplication_14_begin/PhotoSharingApplication**, and then paste the **web.config** file.  

>**Note:** This lab is dependent on the successful execution of the lab of Module 11. If you have not executed Module 11's lab, this lab will not function properly.

### Exercise 1: Creating a SignalR Hub

#### Task 1: Install SignalR.

1. On the taskbar, click the **File Explorer** icon.
2. In the **Libraries** window, navigate to **Allfiles\20486C\Mod14\Labfiles\PhotoSharingApplication_14_begin**, and then double-click **PhotoSharingApplication.sln**.
3. On the **Tools** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, point to **NuGet Package Manager**, and then click **Package Manager Console**.
4. In the **Package Manager Console** window, type the following command, and then press Enter.

  ```cs
       Install-Package jQuery -Version 3.1.1
```
5. In the **Package Manager Console** window, type the following command, and then press Enter.

  ```cs
       Install-Package Microsoft.AspNet.SignalR -Version 2.2.2
```
6. In the **Solution Explorer** pane of the **PhotoSharingApplication - Microsoft Visual Studio** window, under **PhotoSharingApplication**, expand **References**.

  >**Note:** The NuGet package added two **Microsoft.Aspnet.SignalR** namespaces to the project references.

7. In the **Solution Explorer** pane, under **PhotoSharingApplication**, expand **Scripts**.

  >**Note:** The NuGet package added seven **jquery** scripts and two **signalR** scripts, to the **Scripts** folder.

#### Task 2: Create a Hub class.

1. In the **Solution Explorer** pane, right-click **PhotoSharingApplication**, point to **Add**, and then click **Class**.

2. In the **Name** box of the **Add New Item - PhotoSharingApplication** dialog box, type **ChatHub.cs**, and then click **Add**.
3. In the ChatHub.cs code window, locate the following code, select the code, and then press Delete.

  ```cs
		using System.Collections.Generic;
		using System.Linq;
```
4. In the ChatHub.cs code window, locate the following code.

  ```cs
		using System.Web;
```
5. Place the cursor at the end of the located code, press Enter, and then type the following code.

  ```cs
		using System.Threading.Tasks;
		using Microsoft.AspNet.SignalR;
```
6. In the ChatHub.cs code window, locate the following code.

  ```cs
		public class ChatHub
```
7. In the ChatHub.cs code window, replace the located code with the following code.

  ```cs
		public class ChatHub : Hub
```
8. In the **ChatHub** class code block, type the following code.

  ```cs
		public Task Join(int photoId)
		{
		}
```
9. In the **Join** method code block, type the following code.

  ```cs
		return Groups.Add(Context.ConnectionId, "Photo" + photoId);
```
10. Place the cursor at the end of the **Join** method code block, press Enter twice, and then type the following code.

  ```cs
		public Task Send(string username, int photoId, string message)
		{
		}
```
11. In the **Send** method code block, type the following code.

  ```cs
		string groupName = "Photo" + photoId;
```
12. Place the cursor at the end of the code you just typed, press Enter, and then type the following code.

  ```cs
		return Clients.Group(groupName).addMessage(username, message);
```
13. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save All**.

#### Task 3: Map SignalR hubs to the app builder pipeline.


1. In the **Solution Explorer** pane, right-click **PhotoSharingApplication** project, click **Add**, and then click **class**.
2. Name the class **Startup.cs** and click **Add**.
3. Locate ```using System.Web;``` and add the following using statements just after.
  ```cs
    using Owin;
    using Microsoft.Owin;
    [assembly: OwinStartup(typeof(PhotoSharingApplication.Startup))]
```
4. Within the **Startup** class, type the following code.
  ```cs
        public void Configuration(IAppBuilder app)
        {
            // Any connection or hub wire up and configuration should go here
            app.MapSignalR();
        }
```

5. On the **FILE** menu of the **PhotSharingApplication - Microsoft Visual Studio** window, click **Save All**.

  >**Results** : After completing this exercise, you should have successfully installed SignalR in an MVC 5 web application, created a hub to receive and forward simple text messages, and mapped the SignalR hubs to the app builder pipeline.

### Exercise 2: Creating a Photo Chat View

#### Task 1: Create a chat action and view.

1. In the **Solution Explore** pane, expand **Controllers**, and then click **PhotoController.cs**.

2. In the PhotoController.cs code window, place the cursor in the **PhotoController** class, but outside any action method code block, and then type the following code.

  ```cs
		[Authorize]
		public ActionResult Chat(int id)
		{
		}
```
3. Place the cursor within the **Chat** action code block, type the following code, and then press Enter.

  ```cs
		Photo photo = context.FindPhotoById(id);
```
4. In the **Chat** action code block, place the cursor at the end of the code you just added, type the following code, and then press Enter.

  ```cs
		if (photo == null) 
		{
		  return HttpNotFound();
		}
```
5. In the **Chat** action code block, place the cursor at the end of the code you just added, type the following code, and then press Enter.

  ```cs
		return View("Chat", photo);
```
6. In the **Solution Explorer** pane, expand **Views**, right-click **Photo**, point to **Add**, and then click **Existing Item**.
7. In the **Add Existing Item – PhotoSharingApplication** dialog box, navigate to **Allfiles\20486C\Mod14\Labfiles\Chat View**, click **Chat.cshtml**, and then click **Add**.
8. On the **FILE** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Save All**.

#### Task 2: Link to the chat view.

1. In the **Solution Explorer** pane, under **Photo**, click **Display.cshtml**.

2. In the Display.cshtml code window, locate the following code.

  ```cs
        <div id="addtofavorites">
           @Ajax.ActionLink("Add this photo to your favorites",
              "AddFavorite",
              "Photo",
              new { PhotoID = Model.PhotoID },
              new AjaxOptions {
              UpdateTargetId = "addtofavorites",
              HttpMethod = "GET",
              InsertionMode = InsertionMode.Replace
           })
        </div>
```
3. Place the cursor at the end of the located code, press Enter, and then type the following code.

  ```cs
        <div id="chataboutthisphoto">
        </div>
```
4. Place the cursor within the **DIV** element code block you just added, and then type the following code.

  ```cs
		@Html.ActionLink("Chat about this photo", "Chat", new { id = Model.PhotoID })
```
5. On the **DEBUG** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Start Debugging**.
6. On the **Adventure Works Photo Sharing** page, in the **Latest Photos** section, click **Display** corresponding to the image of your choice.
7. On the **Sample Photo** page, click **Chat about this photo**, and then note that the sign-in page appears.
8. In the **User name** box of the sign-in page, type **David Johnson**.
9. In the **Password** box, type **Pa$$w0rd2**, and then click **Log in**.

  >**Note:** If an exception appears when you sign in, you need to replace the connection string in the Web.config file from the PhotoAppServices project. Also, in the connection string, you need to replace **{your\_password\_here}** with **Pa$$w0rd**.

10. On the **Chat** page, in the message box, type **Test message**, and then click **Send**.

  >**Note:** The message is not sent because the SignalR scripts are not yet written.
11. On the **DEBUG** menu of the **PhotoSharingApplication – Microsoft Visual Studio** window, click **Stop Debugging**.
12. In the Microsoft Edge window, click **Close**.

#### Task 3: Link to JScript files.

1. In the **Solution Explorer** pane, under **Photo**, click **Chat.cshtml**.

2. In the Chat.cshtml code window, place the cursor at the end of the view file, press Enter, and then type the following code.

  ```cs
		<script type="text/javascript">
		</script>
```
3. Place the cursor in the **SCRIPT** element code block you just added, type the following code, and then press Enter.

  ```cs
		var username = '@User.Identity.Name';
```
4. In the **SCRIPT** element, place the cursor at the end of the **username** variable, press Enter, and then type the following code.

  ```cs
		var photoid = @Model.PhotoID
```
5. Place the cursor at the end of the **SCRIPT** element code block, press Enter, and then type the following code.

  ```cs
		<script type="text/javascript" src=""></script>
```
6. Place the cursor within the **src** attribute, and then type the following code.

  ```cs
		@Url.Content("~/Scripts/jquery.signalR-2.2.2.js")
```
  >**Note:** Ensure that the name of the script file you enter matches the name of the file in the **Scripts** folder.

7. Place the cursor at the end of the **SCRIPT** element code block that you just added, press Enter, and then type the following code.

  ```cs
		<script type="text/javascript" src=""></script>
```
8. Place the cursor within the **src** attribute, and then type the following code.

  ```cs
		@Url.Content("~/signalr/hubs")
```
9. Place the cursor at the end of the **SCRIPT** element code block that you just added, press Enter, and then type the following code.

  ```cs
		<script type="text/javascript" src=""></script>
```
10. Place the cursor within the **src** attribute, and then type the following code.

  ```cs
		@Url.Content("~/Scripts/ChatRoom.js")
```
11. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save All**.

#### Task 4: Script SignalR connections.

1. In the **Solution Explorer** pane, right-click **Scripts**, point to **Add**, and then click **New Item**.
2. In the **Add New Item – PhotoSharingApplication** dialog box, click **JavaScript File**, and then click **Add**.
3. In the **Solution Explorer** pane, under Scripts, right-click **JavaScript.js**, and then click **Rename**.
4. In the **Solution Explorer** pane, under Scripts, rename **JavaScript.js** as **ChatRoom.js**, and then press Enter.
5. In the ChatRoom.js code window, type the following code.

  ```cs
		$(function() {
		});
```
6. Place the cursor within the anonymous function code block you just added, and then type the following code.

  ```cs
		var chat = $.connection.chatHub;
```
7. Place the cursor at the end of the **chat** variable code block, press Enter, and then type the following code.

  ```cs
		$('#chat-message').focus();
```
8. Place the cursor at the end of the code you just typed, press Enter, and then type the following code.

  ```cs
		$.connection.hub.start().done(function(){
		});
```
9. Place the cursor within the anonymous function you just created, and then type the following code.

  ```cs
		chat.server.join(photoid).done(function() {
		});
```
10. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save All**.

#### Task 5: Script SignalR messages.

1. In the **ChatRoom.js** code window, locate the following code.

  ```cs
		var chat = $.connection.chatHub;
```
2. Place the cursor at the end of the located code, press Enter, and then type the following code.

  ```cs
		chat.client.addMessage = function(name, message) {
		};
```
3. Place the cursor within the anonymous function code block you just created, and then type the following code.

  ```cs
		var encodedName = $('<div />').text(name).html();
```
4. Place the cursor at the end of the **encodedName** variable code block, press Enter, and then type the following code.

  ```cs
		var encodedMessage = $('<div />').text(message).html();
```
5. Place the cursor at the end of the **encodedMessage** variable code block, press Enter, and then type the following code.

  ```cs
		var listItem = '<li>' + encodedName + ': ' + encodedMessage + '</li>';
```
6. Place the cursor at the end of the **listItem** variable code block, press Enter, and then type the following code.

  ```cs
		$('#discussion').append(listItem);
```
7. In the ChatRoom.js code window, locate the following code.

  ```cs
		chat.server.join(photoid).done(function() {
		});
```
8. Place the cursor within the located code, and then type the following code.

  ```cs
		$('#sendmessage').click(function() {
		});
```
9. Place the cursor within the anonymous function you just created, and then type the following code.

  ```cs
		chat.server.send(username, photoid, $('#chat-message').val());
```
10. Place the cursor at the end of the code you just typed, press Enter, and then type the following code.

  ```cs
		$('#chat-message').val('').focus();
```
11. On the **FILE** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Save All**.

#### Task 6: Test the chat room.

1. On the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Start Debugging**.

2. On the **Welcome to Adventure Works Photo Sharing** page, click **Log In**.
3. In the **User name** box of the sign-in page, type **David Johnson**.
4. In the **Password** box, type **Pa$$w0rd2**, and then click **Log in**.
5. On the **Welcome to Adventure Works Photo Sharing** page, click **Display** corresponding to **Sample Photo 1**.
6. On the **Sample Photo 1** page, click **Chat about this photo**.
7. On the **Chat** page, in the message box, type **Test message**, and then click **Send**.

  >**Note:** The script sends the message to the hub that returns the message to all the browsers that are currently connected to the group of this photo.

8. On the taskbar, right-click the **Microsoft Edge** icon, and then click **Microsoft Edge**.
9. In the Address bar of the Microsoft Edge window, type **http://localhost:_<portnumber\>_/**, and then press Enter.
10. On the **Welcome to Adventure Works Photo Sharing** page, click **Log off**. 
11. On the **Welcome to Adventure Works Photo Sharing** page, click **Register**.
12. In the **User name** box of the **Register** page, type **Mark Steele**, in the **Password** box, type **Pa$$w0rd**.
13. In the **Confirm password** box, type **Pa$$w0rd**, and then click **Register**.
14. On the **Welcome to Adventure Works Photo Sharing** page, click **Display** corresponding to **Sample Photo 1**.
15. On the **Sample Photo 1** page, click **Chat about this photo**.

  >**Note:** If **David Johnson** appears as the user name instead of **Mark Steele**, click **Refresh** before proceeding to the next step.

16. On the **Chat** page, in the message box, type **Second test message**, and then click **Send**.
17. On the taskbar, point to the **Microsoft Edge** icon, and then click the **David Johnson Chat – Microsoft Edge** icon.

  >**Note:** The new message from **Mark Steele** appears because both users joined the chat for **Sample Photo 1**.  

18. On the **Chat** page, in the message box, type **Third test message**, and then click **Send**.
19. On the taskbar, point to the **Microsoft Edge** icon, and then click the **Mark Steele Chat** - **Microsoft Edge**.

  >**Note:** The new message appears in Microsoft Edge.

20. In the Microsoft Edge window, click **Close**.
21. On the **DEBUG** menu of the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Stop Debugging**.
22. In the **PhotoSharingApplication - Microsoft Visual Studio** window, click **Close**.

  >**Results** : After completing this exercise, you should have successfully created MVC controller actions and views to display a user interface for the SignalR functionality, linked to the JScript libraries that SignalR requires, and used JScript to connect to a SignalR hub and send messages.
  
©2016 Microsoft Corporation. All rights reserved. 

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.

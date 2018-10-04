using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace PhotoSharingApplication
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "PhotoApi",
                routeTemplate: "api/photos/{id}",
                defaults: new { controller = "PhotoApi", action = "GetPhotoById" },
                constraints: new { id = "[0-9]+" }
            );

            config.Routes.MapHttpRoute(
                name: "PhotoTitleApi",
                routeTemplate: "api/photos/{title}",
                defaults: new { controller = "PhotoApi", action = "GetPhotoByTitle" }
            );

            config.Routes.MapHttpRoute(
                name: "PhotosApi",
                routeTemplate: "api/photos",
                defaults: new { controller = "PhotoApi", action = "GetAllPhotos" }
            );

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            var json = config.Formatters.JsonFormatter;

            /* 
             * Set the json.SerializerSettings.PreserveReferencesHandling property to 
             * Newtonsoft.Json.PreserveReferencesHandling.Objects.
             */
            json.SerializerSettings.PreserveReferencesHandling = Newtonsoft.Json.PreserveReferencesHandling.Objects;

            config.Formatters.Remove(config.Formatters.XmlFormatter);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Globalization;
using PhotoSharingApplication.Models;

namespace PhotoSharingApplication.Controllers
{
    [ValueReporter]
    public class PhotoController : Controller
    {
        private PhotoSharingContext context = new PhotoSharingContext();
        // GET: Photo
        public ActionResult Index()
        {
            return View("Index", context.Photos.ToList());
        }

        public ActionResult Display(int id)
        {
            Photo photo = context.Photos.Find(id);

            if(photo == null)
            {
                return HttpNotFound();
            }

            return View("Display", photo);
        }  

        public ActionResult Create()
        {
            Photo newPhoto = new Photo();
            newPhoto.CreatedDate = DateTime.Today;

            return View("Create", newPhoto);
        }

        [HttpPost]
        public ActionResult Create(Photo photo, HttpPostedFileBase image)
        {
            photo.CreatedDate = DateTime.Today;

            if (!ModelState.IsValid)
            {
                return View("Create", photo);
            }
            else
            {
                if(image != null)
                {
                    photo.ImageMimeType = image.ContentType;
                    photo.PhotoFile = new byte[image.ContentLength];
                    image.InputStream.Read(photo.PhotoFile, 0, image.ContentLength);
                }
            }

            context.Photos.Add(photo);
            context.SaveChanges();
            return RedirectToAction("Index");
        }

        public ActionResult Delete(int id)
        {
            Photo photo = context.Photos.Find(id);
            
            if(photo == null)
            {
                return HttpNotFound();
            }

            return View("Delete", photo);
        }


        /* 
         * Two methods in the same .NET framework class cannot have the same name and signature. 
         * When you have an action called Delete, you cannot have the method with the same name 
         * because the Delete action for the GET verb already exists and has the same ID parameter. 
         * To solve this issue, give a different name to the method, which in this case 
         * is DeleteConfirmed, but use the ActionName annotation to ensure it runs when the 
         * Delete action is called in an HTTP POST.
         */
        [HttpPost]
        [ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id)
        {
            Photo photo = context.Photos.Find(id);

            context.Photos.Remove(photo);
            context.SaveChanges();
            return RedirectToAction("Index");
        }

        public FileContentResult GetImage(int id)
        {
            Photo photo = context.Photos.Find(id);

            if(photo != null)
            {
                return File(photo.PhotoFile, photo.ImageMimeType);
            }
            else
            {
                return null;
            }
        }
    }
}
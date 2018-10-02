using PhotoSharingApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PhotoSharingApplication
{
    public interface IPhotoSharingContext
    {
        IQueryable<Photo> Photos { get; }

        IQueryable<Comment> Comments { get; }

        int SaveChanges();

        /*  
         *  void Add<T>(T item) where T : class;
         *  What does that mean??
         *  
         *  That is a constraint on the generic parameter T. It must be a class (reference type) 
         *  and must have a public parameter-less default constructor.
         *  That means T can't be an int, float, double, DateTime or any other struct (value type).
         *  
         *  where T : class
         *  The type argument must be a reference type, including any class, 
         *  interface, delegate, or array type. 
         */
        //Declaring a generic type of function
        T Add<T>(T entity) where T : class;

        Photo FindPhotoById(int ID);

        Comment FindCommentById(int ID);

        T Delete<T>(T entity) where T : class;
    }
}

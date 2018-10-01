﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace PhotoSharingApplication.Models
{
    public class Comment
    {
        public int CommentID { get; set; }

        public int PhotoID { get; set; }

        [Required]
        public string UserName { get; set; }

        [Required]
        [DataType(DataType.MultilineText)]
        [StringLength(250)]
        public string Subject { get; set; }

        public string Body { get; set; }

        public virtual Photo Photo { get; set; }
    }
}
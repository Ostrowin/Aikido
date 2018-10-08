using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Aikido.Controllers
{
    public class DefaultController : ApiController
    {
        [HttpGet]

        public IHttpActionResult Index()
        {
            return Ok("Api Works");
        }
    }
}

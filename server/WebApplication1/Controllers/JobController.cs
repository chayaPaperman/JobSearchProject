using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using API.Models;

namespace JobSearchServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobController : ControllerBase
    {
        static List<Job> jobs = new List<Job>()
        {
            new Job { JobField = JobField.Teaching, JobTitle = "math teacher", ScopeOfHours = 10, Area = "Jerusalem", Requirements = "Certificate of teaching, responsibility and ability to explain", WorkFromHome = false },
            new Job { JobField = JobField.Computers, JobTitle = "embedded developer", ScopeOfHours = 30, Area = "modiin Elit", Requirements = "Software engineer certificate, ambition and desire to advance, big head", WorkFromHome = true },
             new Job { JobField = JobField.Other, JobTitle = "cleaner", ScopeOfHours = 40, Area = "Tel Aviv", Requirements = "Responsive agility and high work ethic", WorkFromHome = false },
                         new Job { JobField = JobField.Teaching, JobTitle = "math teacher", ScopeOfHours = 10, Area = "Tel Aviv", Requirements = "Certificate of teaching, responsibility and ability to explain", WorkFromHome = false },
            new Job { JobField = JobField.Computers, JobTitle = "embedded developer", ScopeOfHours = 30, Area = "Jerusalem", Requirements = "Software engineer certificate, ambition and desire to advance, big head", WorkFromHome = true },
             new Job { JobField = JobField.Other, JobTitle = "cleaner", ScopeOfHours = 40, Area = "modiin Elit", Requirements = "Responsive agility and high work ethic", WorkFromHome = false },            new Job { JobField = JobField.Teaching, JobTitle = "math teacher", ScopeOfHours = 10, Area = "Jerusalem", Requirements = "Certificate of teaching, responsibility and ability to explain", WorkFromHome = false },
            new Job { JobField = JobField.Computers, JobTitle = "embedded developer", ScopeOfHours = 30, Area = "modiin Elit", Requirements = "Software engineer certificate, ambition and desire to advance, big head", WorkFromHome = true },
             new Job { JobField = JobField.Other, JobTitle = "cleaner", ScopeOfHours = 40, Area = "Tel Aviv", Requirements = "Responsive agility and high work ethic", WorkFromHome = false },
                         new Job { JobField = JobField.Teaching, JobTitle = "math teacher", ScopeOfHours = 10, Area = "Tel Aviv", Requirements = "Certificate of teaching, responsibility and ability to explain", WorkFromHome = false },
            new Job { JobField = JobField.Computers, JobTitle = "embedded developer", ScopeOfHours = 30, Area = "Jerusalem", Requirements = "Software engineer certificate, ambition and desire to advance, big head", WorkFromHome = true },
             new Job { JobField = JobField.Other, JobTitle = "cleaner", ScopeOfHours = 40, Area = "modiin Elit", Requirements = "Responsive agility and high work ethic", WorkFromHome = false },            new Job { JobField = JobField.Teaching, JobTitle = "math teacher", ScopeOfHours = 10, Area = "Jerusalem", Requirements = "Certificate of teaching, responsibility and ability to explain", WorkFromHome = false },
            new Job { JobField = JobField.Computers, JobTitle = "embedded developer", ScopeOfHours = 30, Area = "modiin Elit", Requirements = "Software engineer certificate, ambition and desire to advance, big head", WorkFromHome = true },
             new Job { JobField = JobField.Other, JobTitle = "cleaner", ScopeOfHours = 40, Area = "Tel Aviv", Requirements = "Responsive agility and high work ethic", WorkFromHome = false },
                         new Job { JobField = JobField.Teaching, JobTitle = "math teacher", ScopeOfHours = 10, Area = "Tel Aviv", Requirements = "Certificate of teaching, responsibility and ability to explain", WorkFromHome = false },
            new Job { JobField = JobField.Computers, JobTitle = "embedded developer", ScopeOfHours = 30, Area = "Jerusalem", Requirements = "Software engineer certificate, ambition and desire to advance, big head", WorkFromHome = true },
             new Job { JobField = JobField.Other, JobTitle = "cleaner", ScopeOfHours = 40, Area = "modiin Elit", Requirements = "Responsive agility and high work ethic", WorkFromHome = false },            new Job { JobField = JobField.Teaching, JobTitle = "math teacher", ScopeOfHours = 10, Area = "Jerusalem", Requirements = "Certificate of teaching, responsibility and ability to explain", WorkFromHome = false },
            new Job { JobField = JobField.Computers, JobTitle = "embedded developer", ScopeOfHours = 30, Area = "modiin Elit", Requirements = "Software engineer certificate, ambition and desire to advance, big head", WorkFromHome = true },
             new Job { JobField = JobField.Other, JobTitle = "cleaner", ScopeOfHours = 40, Area = "Tel Aviv", Requirements = "Responsive agility and high work ethic", WorkFromHome = false },
                         new Job { JobField = JobField.Teaching, JobTitle = "math teacher", ScopeOfHours = 10, Area = "Tel Aviv", Requirements = "Certificate of teaching, responsibility and ability to explain", WorkFromHome = false },
            new Job { JobField = JobField.Computers, JobTitle = "embedded developer", ScopeOfHours = 30, Area = "Jerusalem", Requirements = "Software engineer certificate, ambition and desire to advance, big head", WorkFromHome = true },
             new Job { JobField = JobField.Other, JobTitle = "cleaner", ScopeOfHours = 40, Area = "modiin Elit", Requirements = "Responsive agility and high work ethic", WorkFromHome = false }
        };


        [HttpGet("GetAllJobs")]
        public List<Job> GetAllJobs()
        {
            return jobs;
        }
    }
    
}

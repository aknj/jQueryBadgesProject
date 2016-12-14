document.addEventListener("DOMContentLoaded", function(event) {
  
  $.ajax({
    url: 'https://www.codeschool.com/users/aknj.json',
    dataType: 'jsonp',
  })
  .done(response => {
    addCourses(response.courses.completed);
  });

  function addCourses(courses) {
    courses.forEach(course => {
      console.log(course);
      var courseDiv = document.createElement('div');
      console.log(courseDiv);
      courseDiv.setAttribute('class', 'course');
      courseDiv.innerHTML = course.title;
      document.getElementById('badges')
              .appendChild(courseDiv);
    });
  }

});

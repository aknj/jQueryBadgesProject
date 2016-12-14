document.addEventListener("DOMContentLoaded", function(event) {
  
  $.ajax({
    url: 'https://www.codeschool.com/users/aknj.json',
    dataType: 'jsonp',
  })
  .done(response => {
    addCourses(response.courses.completed);
  });

  function addCourses(courses) {
    badgesDiv = document.getElementById('badges');
    courses.forEach(course => {
      var courseDiv = document.createElement('div');
      courseDiv.setAttribute('class', 'course');
      
      var h3 = document.createElement('h3');
      h3.innerText = course.title;
      courseDiv.appendChild(h3);
      
      var img = document.createElement('img');
      img.setAttribute('src', course.badge);
      courseDiv.appendChild(img);

      var a = document.createElement('a');
      a.setAttribute('href', course.url);
      a.setAttribute('target', '_blank');
      a.setAttribute('class', 'btn btn-primary');
      a.innerText = 'See Course';
      courseDiv.appendChild(a);

      // finally add the element
      badgesDiv.appendChild(courseDiv);
    });
  }

});

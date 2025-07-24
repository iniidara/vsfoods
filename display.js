function showSection() {
      document.getElementById('section1').style.display = 'none';
      document.getElementById('section2').style.display = 'grid';
      document.getElementById('section3').style.display = 'none';
    }
    // Show both sections by default
    window.onload = function() {
      document.getElementById('section1').style.display = 'grid';
      document.getElementById('section2').style.display = 'none';
      document.getElementById('section3').style.display = 'none';
      document.getElementById('form').style.display = 'none'
    }
    function showAll() {
      document.getElementById('section1').style.display = 'grid';
      document.getElementById('section2').style.display = 'none';
      document.getElementById('section3').style.display = 'none';
    }
    function showPizza() {
      document.getElementById('section1').style.display = 'none';
      document.getElementById('section2').style.display = 'none';
      document.getElementById('section3').style.display = 'grid';
    }
    function showLogin() {
        document.getElementById('form').style.display = 'flex'
    }
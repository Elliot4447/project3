(function(){
  var d = document;
  function ready(fn){
    if(d.readyState !== 'loading') fn();
    else d.addEventListener('DOMContentLoaded', fn);
  }
  ready(function(){
    var toggle = d.getElementById('themeToggle');
    if(toggle){
      var saved = localStorage.getItem('theme');
      if(saved === 'dark') d.body.classList.add('theme-dark');
      toggle.addEventListener('click', function(){
        d.body.classList.toggle('theme-dark');
        var mode = d.body.classList.contains('theme-dark') ? 'dark' : 'light';
        localStorage.setItem('theme', mode);
      });
    }

    if(!d.getElementById('backToTop')){
      var back = d.createElement('button');
      back.id = 'backToTop';
      back.textContent = '↑';
      back.type = 'button';
      back.style.display = 'none';
      d.body.appendChild(back);

      back.addEventListener('click', function(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      window.addEventListener('scroll', function(){
        if(window.scrollY > 300){
          back.style.display = 'inline-block';
        } else {
          back.style.display = 'none';
        }
      });
    }
  });
})();
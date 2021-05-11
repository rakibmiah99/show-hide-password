function visible(e){
  let active = 'active';
  let de_active = '';
  let pass = document.getElementById('password');
  if(e.className == de_active){
    pass.setAttribute('type','text');
    e.classList.add('active');
  }else if(e.className == active){
    pass.setAttribute('type','password');
    e.classList.remove('active');
  }
}

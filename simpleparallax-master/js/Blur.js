const inputs=document.querySelectorAll('.controls input');

    function handleUpdate(){
      console.log(this.value);
      const suffix=this.dataset.sizing || '';
      console.log(suffix);
      document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);

    }
    inputs.forEach(input=>input.addEventListener('change', handleUpdate));
    inputs.forEach(input=>input.addEventListener('mousemove', handleUpdate));

     var images = [
    'img/goat.jpg', 
    'img/llama.jpg', 
    'img/sheep.jpg'
];
var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}
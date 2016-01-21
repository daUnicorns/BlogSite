
function slide() {
  document.getElementById("bouh").style.opacity = '1';
  document.getElementById("bouh").style.margin = '0 auto 0 auto';
}

function blogobject(title,date,content){
    this.title = title;
    this.date = date;
    this.content = content;
}

function blogcontent(){
  title = ['blog1','blog2','blog3','blog4','blog5'];
  date = ['21/01/16','22/02/16','23/02/16','24/02/16','25/02/16'];
  content = ['blog1 content','blog2 content','blog3 content','blog4 content','blog5 content'];
  blogs = [];
  for (var i=0; i<title.length; i++){
    blogs[i] = new blogobject(title[i],date[i],content[i]);
  }
  for (i=0; i<blogs.length; i++){
    document.write('<article>');
    document.write('<h3>'+blogs[i].title+'</h3>');
    document.write('<p>'+blogs[i].content+'</p>');
    document.write('<p>'+blogs[i].date+'</p>');
    document.write('</article>');
  }
}

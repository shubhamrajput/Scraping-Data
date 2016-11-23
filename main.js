$(document).ready(function(){

$("#btn").click(function(){
     
	var url=document.getElementById("link").value;

    $.ajax({
    url: url,
    dataType: "html",
    type: 'GET',
    success: function(data) {
      
        var htmlData=data.responseText;
        console.log(htmlData);
        var res=$(htmlData).find('.follow-stat.left:first');
        var followers=$(res).find('.number');
         $('body').append("<h3>Total Follwers:</h3>",followers);
        
         lists=$(htmlData).find('.teaching-section').find('li');
         len= lists.length;
   results=[];
   $('body').append("<h3>Courses:</h3>");
       for (i=0;i<len;i++){ var  res=lists[i];  var title= $(res).find('.title-link:first').text(); 
         var students=$(res).find('.num-students').text();
       	       results[title]=students;
          }
       for (key in results)
       {
          $('body').append(key,"-",results[key],"<br>");
         }
       
        $('body').append("<hr>");

        }
        });
    });
});






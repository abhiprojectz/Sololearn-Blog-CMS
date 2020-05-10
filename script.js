<!-- vARS ----->
        
        var cors = "https://cors-anywhere.herokuapp.com/";
        
        var userurl = "https://www.sololearn.com/Profile/14346718/?ref=app";
        
        var codeurl = "https://code.sololearn.com/";
        
        var url = cors + userurl;
        
        
        fetch(url).then(function(response) {
  if(response.ok) {
    response.text().then(function(data) {
        
        main(data);
    
    });
  } else {
    console.log('Network request failed with response ' + response.status + ': ' + response.statusText);
  }
});


function main(data) {

   $("#app").html(data);
   
 
 $("#app .codeName").each(function(index, element) {
 
 var link = $(this).find("a").attr('href').slice(27,-2) ;
 
 var name = $(this).find("a").text();
 
 var date = $(this).find(".codeDate").text();
 
 
 
           setup(name,link,date);
       
return index < 4;
})
}



function setup(name,link,date) {
    
    var random = Math.floor((Math.random() * 100) + 1);
    
    document.getElementById("cards").innerHTML += '<li class="cards_item"><div class="card"><div class="card_image"><img src="https://picsum.photos/500/300/?image='+random+ '"></div><div class="card_content"><h2 class="card_title">'+ name+'</h2><p class="card_text">'+date+'</p><button id="'+link+'" onclick="handler(this.id);" class="btn card_btn">View Post</button></div></div></li>';
    
    
    
}


function handler(data) {

var link = data;

    fetchblog(link);
}


function fetchblog(link) {
    
    
    var uurl = cors + codeurl + link;
    
    fetch(uurl).then(function(response) {
  if(response.ok) {
    response.text().then(function(data) {
        
        blog(data);
    
    });
  } else {
    console.log('Network request failed with response ' + response.status + ': ' + response.statusText);
  }
});
    
}

function convert(data){
    return marked(data);
    }


function blog(data) {
    
    $("#main").hide();
    

   $("#codeapp").html(data);
   var html = $("#codeapp").html();
   
 var hcode =  $("#codeapp form :input[id=Code]").val();
 
 var name = $("#codeapp .codeName").text();
 
 var date = $("#codeapp .codeDate").text();
 
 var content = convert(hcode);
 
 
 

document.getElementById("blog").innerHTML = '<div id="card"><div class="card_content"><h2 class="card_title">'+ name+'</h2><p class="card_text">'+date+'</p><div class="blogtext">'+content+'</div><button  onclick="back();" class="btn card_btn">Back</button></div></div>';
    
    $("#blog").show()
}

function back() {
    
    $("#main").show();
    
    $("#blog").hide();
    
}

$("#code").click(function(){
    
    swal("This is a Blog CMS specially for Sololearn! \n \n By using this you can create your own blog for free! \n \n Easily too it supports markdown!\n \n Created By: Abhi for sololearn Community!");
    
})
$(function(){
    var styles = '<style>';
    styles += '.object-col{float:left; width:25%; padding:10px;box-sizing:border-box;box-shadow: 0px 8px 10px -11px black;transition: 0.4s ease all;} ';
    styles += '.object-col img{width:100%;transition: 0.4s ease all;} ';
    styles += '.object-col img:hover{transform: scale(1.05);} ';
    styles += '@media screen and (max-width: 1200px) { .object-col {width: 25%;} } ';
    styles += '@media screen and (max-width: 992px) { .object-col {width: 33.33333%;} } ';
    styles += '@media screen and (max-width: 600px) { .object-col {width: 50%;} } ';
    styles += '@media screen and (max-width: 400px) { .object-col {width: 100%;} } ';

    styles += '</style>';
    $(styles).insertBefore($('div[data-embed-paste]'));

    $.ajax({
        url: 'http://my-json-server.typicode.com/teamcubers/embeder/ytLinks',
        contentType: "application/json",
        dataType: "json",
        success: function(data){
            var ytLinks = data;
            console.log(ytLinks);
            if(ytLinks.length > 0){
                var html = '';
                for(var i = 0; i < ytLinks.length; i++){
                    html += '<span class="object-col"><a target="_blank" href="https://www.youtube.com/watch?v='+ytLinks[i]+'"><img src="https://img.youtube.com/vi/'+ytLinks[i]+'/hqdefault.jpg" /></a></span>'
                }
                $('div[data-embed-paste]').html(html);
            }
        }
    });
});

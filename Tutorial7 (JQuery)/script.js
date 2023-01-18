// Library vs Framework 

// syntex:  $('selector').action()



// $('h1').mouseenter(()=>{
//         alert('Hello World');
// })

// text , html, val ,css 


$(function(){
    $('#fieldtwo').click(()=>{

        var a= $('#one').text();
        console.log(a);
      
        var b = $('#three').html()
        console.log(b);
      
        var c= $('#fieldone').val();
        console.log(c);
      
        var d= $('#fieldone').val('Tejender Dubey');
        console.log(d);
      
        var e= $('#fieldone').attr('type');
        console.log(e);
      
        var f = $('#two').css('color');
        console.log(f);
      
        $('#two').css('background-color','aqua');
        $('#one').css({'background-color':'red', 'height':'100px'});
        
      //  height. width , innerHeight, innerWidth, outerHeight, outerWidth,
      
      var g = $('#box').height();
      console.log(g);
      
      console.log($('#box').width())   // (not includes border and padding)
      console.log($('#box').innerHeight())
      console.log($('#box').innerWidth())   // includes padding 
      console.log($('#box').outerHeight())
      console.log($('#box').outerWidth())  // includes both border and padding 
      
      $('#box').height(400).width(400);
      
      
      // addClass removeClass toggleClass remove
      
      // $('#three').addClass('check');
      // $('#three').removeClass('check');
      // $('#three').toggleClass('check');
      //  $('#three').remove();
      
      
      //  append , prepend before after 
      
      $('#sec').append('Hello World')
      $('#sec').prepend('Hello World')
      
      $('#two').before('Hello World')
      $('#two').after('Hello World')
      
      // hide show toggle 
      
      // $('#boxtwo').hide();
      // $('#boxtwo').show();
      $('#boxtwo').toggle();
      
      
      // slideUp slideDown slideToggle animate({parameters}, speed, callback)
      
      $('#boxthree').slideUp(4000)
      $('#boxthree').slideDown(4000)
      
      // parent parents children 
      
      var m = $('#one').parent()
      console.log(m)
      var m = $('#one').parents()
      console.log(m)
      var m = $('#sec').children()
      console.log(m)
      
      })

})

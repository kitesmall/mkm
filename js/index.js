$( function () {
  
  //alert(XEGImg.length)
  //alert(partner.length)
  if(navigator.userAgent.indexOf('MSIE') > 0){
    $('body').css('width','1024px').css('margin','0 auto');
    alert("您使用的是IE内核的浏览器，为了您获得更好的体验效果，建议您更换其他浏览器。")
  }
  
  /*添加横幅图片  banner-img*/
  var onOff="true";
  var bannerStr = '';
  var BannerImg = $('#banner-img')
  for(var i=0 ; i<bannerImg.length ; i++){
    bannerStr+='<li><img src="'+ bannerImg[i].img +'"alt=" "></li>'
  }
  $(bannerStr).appendTo(BannerImg)
  
    
  /*添加XEG内的li*/
  var oPorUl = $('.por-r-img-ul');
  var XEGstr='';
  for(var i=0 ; i<XEGImg.length ; i++){
    XEGstr+='<li style="left:'+i*150+'px"><img src="'+ XEGImg[i].img +'"alt="XEG电子竞技大赛"><p>XEG电子竞技大赛</p></li>'
  } 
  $(XEGstr).appendTo(oPorUl)
  
  /*添加代理产品例li*/
  var ageUl = $('.agency-l-fig').find('ul');
  var ageUlWidth = $('.agency-l-fig').find('ul').innerWidth();
  var ageStr='';
  for( var i=0 ; i< agencyImg.length ; i++ ){
    ageStr+='<li style="left:'+i * ageUlWidth +'px"><img src="'+ agencyImg[i].img +'" alt="'+ agencyImg[i].name +'"></li>'
  }
  $(ageStr).appendTo(ageUl)
  
  /*为代理产品列表添加翻页*/
  
  $('.agency-l-fig').find('.next').click(function(){
    ImgPrev(ageUl)
  })
  $('.agency-l-fig').find('.prev').click(function(){
    ImgNext(ageUl)
  })
  
  /*为代理产品介绍添加展开收缩*/
  
  $('.agency-right').find('.title').click(function(){
    $(this).siblings('a').toggleClass('active')
    if( $(this).find('i').attr('name') == 'cut'){
      $(this).find('i').html('&#xe604;').attr('name','add')
    }else{
      $(this).find('i').html('&#xe603;').attr('name','cut')
    }
  })
  
  
  
  
  /*让banner的高度适应图片高度*/
  $('#banner-img').find('img').load(function(){
    $('#banner').css('height',$('#banner-img').find('img').innerHeight())
  })
  
  /*添加横幅图片完成  为横幅添加滚动*/
  $('#banner-page').find('.next').click(function(){
    ImgPrev($('#banner-img')) 
  })
  $('#banner-page').find('.prev').click(function(){
    ImgNext($('#banner-img'))
  })
  
  function ImgPrev(obj){
    
    var LastLiLeft = parseInt( obj.find('li:last').css('left') )
    if(onOff && LastLiLeft > 0 ){
      onOff = false;
      var objWidth = obj.innerWidth();
      $.each(obj.find('li'),function(i){
      var Tleft=parseInt( obj.find('li').eq(i).css('left') )
      obj.find('li').eq(i).animate({
        left : Tleft-objWidth
      },400)
    })
    setTimeout(function(){onOff = true;},400)
    }
  }
  
  function ImgNext(obj){
    var FirstLiLeft = parseInt( obj.find('li:first').css('left') )
    if(onOff && FirstLiLeft < 0){
      onOff = false;
      var objWidth = obj.innerWidth();
      $.each(obj.find('li'),function(i){
        var Tleft=parseInt( obj.find('li').eq(i).css('left') )
        obj.find('li').eq(i).animate({
          left : Tleft+objWidth
        },400)
      })
      setTimeout(function(){onOff = true;},400)
    } 
  }
  

  
  /*初始化*/
  Setload()

    /*窗口大小改变时改变初始化的设置*/
  $(window).resize(function(){
    Setload()
  })
  
  /*XEG翻页*/
  var oXEGPrev = $('.pro-right').find('.box').find('.prev');
  var oXEGNext = $('.pro-right').find('.box').find('.next')
  var oXEGLi = oPorUl.find('li')
  /*XEG上翻页*/
  oXEGNext.click(function(){
    PrevMove(oPorUl)
  })
   /*XEG下翻页*/
  oXEGPrev.click(function(){
     NextMove(oPorUl)
  })
  
  /*上翻页函数*/
  function PrevMove(obj){
    var oPorUlW= parseInt(obj.innerWidth());
    var oXEGLiLastLeft = parseInt( obj.find('li:last').css('left') )
    console.log(oPorUlW +'-'+oXEGLiLastLeft)
    if( onOff && oXEGLiLastLeft > oPorUlW ){
      onOff=false;
      $.each(obj.find('li'),function(i){
        var objLfet = parseInt( obj.find('li').eq(i).css('left') )
        oXEGLi.eq(i).animate({
          left  : objLfet-oPorUlW
        },400)
      })
      setTimeout(function(){
      onOff=true;
    },410)
    }
  }
  /*下翻页函数*/
  function NextMove(obj){
    var oPorUlW= parseInt(obj.innerWidth());
    var oXEGLiLastLeft = parseInt( obj.find('li').eq(0).css('left') )
    if( onOff && oXEGLiLastLeft < 0 ){
      onOff=false;
      $.each(obj.find('li'),function(i){
        var objLfet = parseInt( obj.find('li').eq(i).css('left') )
        oXEGLi.eq(i).animate({
          left  : objLfet+oPorUlW
        },400)
      })
      setTimeout(function(){
      onOff=true;
    },410)
    }
  }
  
 
  /*XEG翻页完成*/
  
  function Setload() {
    /*让banner的高度适应图片高度*/
    $('#banner').css('height',$('#banner-img').find('img').innerHeight())
    
    $.each(BannerImg.find('li'),function(i){
      BannerImg.find('li').eq(i).css('left',i * BannerImg.innerWidth())
    })
    
    var iHeight = $('.pro-left').find('.box').innerHeight()
    var objProR = $('.pro-right').find('.box')
    var PorWdith=$('.pro-right').innerWidth()
    objProR.css('height', iHeight).find('i').css('height', iHeight).css('line-height', iHeight + 'px')

    /*设置XEG img容器的宽度*/
    oPorUl.css('width', (parseInt( (PorWdith-60) / 150) * 150))

    /*设置li的top值*/
    var oPorLiHeight = oPorUl.find('li').innerHeight();
    oPorUl.find('li').css('top', (iHeight - oPorLiHeight) / 2);
  }
  
  /*合作伙伴添加内容*/
  
  for(var i=0;i<partner.length;i++){
    var parStr='';
    for(var j=0;j<partner[i].list.length;j++){
      parStr+='<p class="col-xs-3"><img src="'+partner[i].list[j].img+'" alt=""></p>'
    }
    $(parStr).appendTo( $('.tab-content').find('li').eq(i) )
  }
  
  
})



















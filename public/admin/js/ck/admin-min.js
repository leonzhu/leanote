!function($){alert(1),$(function(){function addMsg(t){var e=$(".nav-user"),a=$(".count:first",e),r=parseInt(a.text());$(".count",e).fadeOut().fadeIn().text(r+1),$(t).hide().prependTo(e.find(".list-group")).slideDown().css("display","block")}var sr,sparkline=function($re){$(".sparkline").each(function(){var $data=$(this).data();(!$re||$data.resize)&&("pie"==$data.type&&$data.sliceColors&&($data.sliceColors=eval($data.sliceColors)),"bar"==$data.type&&$data.stackedBarColor&&($data.stackedBarColor=eval($data.stackedBarColor)),$data.valueSpots={"0:":$data.spotColor},$(this).sparkline("html",$data))})};$(window).resize(function(t){clearTimeout(sr),sr=setTimeout(function(){sparkline(!0)},500)}),sparkline(!1),$(".easypiechart").each(function(){var t=$(this),e=t.data(),a=t.find(".step"),r=parseInt($(e.target).text()),o=0;e.barColor||(e.barColor=function(t){return t/=100,"rgb("+Math.round(200*t)+", 200, "+Math.round(200*(1-t))+")"}),e.onStep=function(t){o=t,a.text(parseInt(t)),e.target&&$(e.target).text(parseInt(t)+r)},e.onStop=function(){r=parseInt($(e.target).text()),e.update&&setTimeout(function(){t.data("easyPieChart").update(100-o)},e.update)},$(this).easyPieChart(e)}),$(".combodate").each(function(){$(this).combodate(),$(this).next(".combodate").find("select").addClass("form-control")}),$(".datepicker-input").each(function(){$(this).datepicker()}),$(".dropfile").each(function(){var t=$(this);return"undefined"==typeof window.FileReader?void $("small",this).html("File API & FileReader API not supported").addClass("text-danger"):(this.ondragover=function(){return t.addClass("hover"),!1},this.ondragend=function(){return t.removeClass("hover"),!1},void(this.ondrop=function(e){e.preventDefault(),t.removeClass("hover").html("");var a=e.dataTransfer.files[0],r=new FileReader;return r.onload=function(e){t.append($("<img>").attr("src",e.target.result))},r.readAsDataURL(a),!1}))});var addPill=function(t){var e=t.val(),a=t.closest(".pillbox"),r=!1,o;if(""!=e){if($("li",a).text(function(t,a){a==e&&(o=$(this),r=!0)}),r)return void o.fadeOut().fadeIn();$item=$('<li class="label bg-dark">'+e+"</li> "),$item.insertBefore(t),t.val(""),a.trigger("change",$item)}};$(".pillbox input").on("blur",function(){addPill($(this))}),$(".pillbox input").on("keypress",function(t){13==t.which&&(t.preventDefault(),addPill($(this)))}),$(".slider").each(function(){$(this).slider()}),$(document).on("change",".wizard",function(t,e){if("next"===e.direction){var a=$(this).wizard("selectedItem"),r=$(this).find(".step-pane:eq("+(a.step-1)+")"),o=!0;return $('[data-required="true"]',r).each(function(){return o=$(this).parsley("validate")}),o?void 0:t.preventDefault()}}),$.fn.sortable&&$(".sortable").sortable(),$(".no-touch .slim-scroll").each(function(){var t=$(this),e=t.data(),a;t.slimScroll(e),$(window).resize(function(r){clearTimeout(a),a=setTimeout(function(){t.slimScroll(e)},500)}),$(document).on("updateNav",function(){t.slimScroll(e)})}),$.support.pjax&&$(document).on("click","a[data-pjax]",function(t){t.preventDefault();var e=$($(this).data("target"));$.pjax.click(t,{container:e})}),$(".portlet").each(function(){$(".portlet").sortable({connectWith:".portlet",iframeFix:!1,items:".portlet-item",opacity:.8,helper:"original",revert:!0,forceHelperSize:!0,placeholder:"sortable-box-placeholder round-all",forcePlaceholderSize:!0,tolerance:"pointer"})}),$("#docs pre code").each(function(){var t=$(this),e=t.html();t.html(e.replace(/</g,"&lt;").replace(/>/g,"&gt;"))}),$(document).on("click",".fontawesome-icon-list a",function(t){t&&t.preventDefault()}),$(document).on("change",'table thead [type="checkbox"]',function(t){t&&t.preventDefault();var e=$(t.target).closest("table"),a=$(t.target).is(":checked");$('tbody [type="checkbox"]',e).prop("checked",a)}),$(document).on("click",'[data-toggle^="progress"]',function(t){t&&t.preventDefault(),$el=$(t.target),$target=$($el.data("target")),$(".progress",$target).each(function(){var t=50,e,a=$(".progress-bar",this).last();($(this).hasClass("progress-xs")||$(this).hasClass("progress-sm"))&&(t=100),e=Math.floor(Math.random()*t)+"%",a.css("width",e).attr("data-original-title",e)})});var $msg='<a href="#" class="media list-group-item"><span class="pull-left thumb-sm text-center"><i class="fa fa-envelope-o fa-2x text-success"></i></span><span class="media-body block m-b-none">Sophi sent you a email<br><small class="text-muted">1 minutes ago</small></span></a>';setTimeout(function(){addMsg($msg)},1500),$.fn.select2&&($("#select2-option").select2(),$("#select2-tags").select2({tags:["red","green","blue"],tokenSeparators:[","," "]}))})}(window.jQuery);
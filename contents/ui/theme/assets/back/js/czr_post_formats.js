(function($){"use strict";$(function(){if(!CZRPostFormatsParams)
return;if(!CZRPostFormatsParams.postFormatSections)
return;var _wpPostFormatsInputSelectorClassical='#post-formats-select input[name="post_format"]',_wpPostFormatsInputSelectorGutenberg='.editor-post-format select',_isClassical=$(_wpPostFormatsInputSelectorClassical).length>0,_isGutenberg=$(_wpPostFormatsInputSelectorGutenberg).length>0;if(!(_isClassical||_isGutenberg)){return;}
var _currentPostFormatSelector=_isClassical?_wpPostFormatsInputSelectorClassical+':checked':_wpPostFormatsInputSelectorGutenberg,_onChangePostFromatSelector=_isClassical?_wpPostFormatsInputSelectorClassical+':radio':_wpPostFormatsInputSelectorGutenberg,_postFormatsMap=_.object(_.chain(CZRPostFormatsParams.postFormatSections).map(function(_section){var _post_format=_section.replace('_section',''),_mbsectionSelector='#'+_section+'id';return[_post_format,_mbsectionSelector];}).compact().value());if(_postFormatsMap){init();}
function init(){setVisibilities($(_currentPostFormatSelector).val());$(_onChangePostFromatSelector).on('change',function(evt){setVisibilities($(this).val());});}
function setVisibilities(_val){$(_.values(_postFormatsMap).join()).hide();$(_.pluck([_postFormatsMap],_val).join()).show();}});})(jQuery);
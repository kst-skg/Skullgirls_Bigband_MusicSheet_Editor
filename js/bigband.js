
$(function(){
    var scale2img = {}
    jp2kr = {
        "↑ｼ": '<div class="note note-5B"></div>',
        "↑ﾗ#":'<div class="note note-5AS"></div>',
        "↑ﾗ": '<div class="note note-5A"></div>',
        "↑ｿ#":'<div class="note note-5GS"></div>',
        "↑ｿ": '<div class="note note-5G"></div>',
        "↑ﾌｧ#":'<div class="note note-5FS"></div>',
        "↑ﾌｧ":'<div class="note note-5F"></div>',
        "↑ﾐ": '<div class="note note-5E"></div>',
        "↑ﾚ#":'<div class="note note-5DS"></div>',
        "↑ﾚ": '<div class="note note-5D"></div>',
        "↑ﾄﾞ#":'<div class="note note-5CS"></div>',
        "↑ﾄﾞ":'<div class="note note-5C"></div>',
        "ｼ":    '<div class="note note-4B"></div>',
        "ﾗ#":   '<div class="note note-4AS"></div>',
        "ﾗ":    '<div class="note note-4A"></div>',
        "ｿ#":   '<div class="note note-4GS"></div>',
        "ｿ":    '<div class="note note-4G"></div>',
        "ﾌｧ#":  '<div class="note note-4FS"></div>',
        "ﾌｧ":   '<div class="note note-4F"></div>',
        "ﾐ":    '<div class="note note-4E"></div>',
        "ﾚ#":   '<div class="note note-4DS"></div>',
        "ﾚ":    '<div class="note note-4D"></div>',
        "ﾄﾞ#":  '<div class="note note-4CS"></div>',
        "ﾄﾞ":   '<div class="note note-4C"></div>',
        "↓ｼ":  '<div class="note note-3B"></div>',
        "↓ﾗ#": '<div class="note note-3AS"></div>',
        "↓ﾗ":  '<div class="note note-3A"></div>',
        "↓ｿ#": '<div class="note note-3GS"></div>',
        "↓ｿ":  '<div class="note note-3G"></div>',
        "↓ﾌｧ#":'<div class="note note-3FS"></div>',
        "↓ﾌｧ": '<div class="note note-3F"></div>',
        "↓ﾐ":  '<div class="note note-3E"></div>',
        "↓ﾚ#": '<div class="note note-3DS"></div>',
        "↓ﾚ":  '<div class="note note-3D"></div>',
        "↓ﾄﾞ#":'<div class="note note-3CS"></div>',
        "↓ﾄﾞ": '<div class="note note-3C"></div>',
        "_":'<div class="note note-RECT"></div>',
        "|":'<div class="note note-BAR"></div>',
        "{":'<div class="note note-START"></div>',
        "}":'<div class="note note-END"></div>',
        "|\n":'<div class="note note-BAR"></div><br>',



    }

    $('#input-notes').keyup(
        function(){
            var japanese = $(this).val();
            var result;
            result = japanese.replace(/((↑|↓)?(ﾄﾞ|ﾚ|ﾐ|ﾌｧ|ｿ|ﾗ|ｼ|_|\||{|})#?\n?)/ig,
                function(all,group){
                    if(jp2kr[group]===undefined){
                        return group;
                    }
                    return jp2kr[group];
                }
                )
            $('#result').html(result);
        }
    );
    $('#input-notes').each(
        function(){
            var japanese = $(this).val();
            var result;
            result = japanese.replace(/((↑|↓)?(ﾄﾞ|ﾚ|ﾐ|ﾌｧ|ｿ|ﾗ|ｼ|_|\||{|})#?\n?)/ig,
                function(all,group){
                    if(jp2kr[group]===undefined){
                        return group;
                    }
                    return jp2kr[group];
                }
                ).replace(/title:(.*)/g,'<div style="margin:0 auto 0px;font-size:24px;text-decoration:underline;text-align:center;">$1</div>');
            $('#result').html(result);
        }
    );

});

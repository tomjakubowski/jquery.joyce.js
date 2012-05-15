(function($) {
$(document).ready(function() {
    var corpus =
        "The fall (bababadalgharaghtakamminarronnkonnbronntonnerronntuonnthunntrovarrhounawnskawntoohoohoordenenthurnuk!) of a once wallstrait oldparr is retaled early in bed and later on life down through all christian minstrelsy. The great fall of the offwall entailed at such short notice the pftjschute of Finnegan, erse solid man, that the humptyhillhead of humself prumptly sends an unquiring one well to the west in quest of his tumptytumtoes: and their upturnpikepointandplace is at the knock out in the park where oranges have been laid to rust upon the green since dev linsfirst loved livvy."
    $.expr[':'].descendentof = function(obj, index, meta, stack){
        return $(obj).parents().is(meta[3]);
    };
    $.fn.joyce = function(options) {
        options = $.extend({
            exclude: ''
        }, options);
        var filter = ':not(iframe):not(' 
            + options.exclude + '):not(:descendentof('
            + options.exclude + '))';
        this.find(filter)
            .andSelf()
            .contents()
            .filter(function() {
                // 3 is a magic number forNode.TEXT_NODE
                return this.nodeType == 3 // Node.TEXT_NODE
                       && !/^\s*$/.test(this.textContent);
            })
            .each(function() {
                this.textContent = corpus;
            });
    };
});
})(jQuery);
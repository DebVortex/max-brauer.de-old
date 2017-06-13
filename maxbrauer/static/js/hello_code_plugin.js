(function() {
    (function($) {
        return $.widget('IKS.codebutton', {
            options: {
                uuid: '',
                editable: null
            },
            populateToolbar: function(toolbar) {
                var button, widget;

                widget = this;

                button = $('<span></span>');
                button.hallobutton({
                    uuid: this.options.uuid,
                    editable: this.options.editable,
                    label: 'Code Block',
                    icon: 'fa fa-code',
                    command: null
                });
                toolbar.append(button);
                console.log(widget);
                console.log(widget.options.editable);
                console.log(widget.options.editable.element);
                widget.options.editable.element.on('change', function() {
                    $('pre code').each(function(i, block) {
                        hljs.highlightBlock(block);
                    });
                });
                return button.on("click", function(event) {
                    var insertionPoint, lastSelection;
                    lastSelection = widget.options.editable.getSelection();
                    insertionPoint = $(lastSelection.endContainer).parentsUntil('.richtext').last();
                    var elem;
                    elem = "<pre><code>" + lastSelection + "</code></pre>";
                    var node = lastSelection.createContextualFragment(elem);
                    lastSelection.deleteContents();
                    lastSelection.insertNode(node);
                    return widget.options.editable.element.trigger('change');
                });
            }
        });
    })(jQuery);
}).call(this);

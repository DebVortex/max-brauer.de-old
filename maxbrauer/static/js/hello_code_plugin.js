var widget;

function insertCodeblock(event) {
    var insertionPoint, lastSelection;
    language = $(event.currentTarget).data('language')
    lastSelection = widget.options.editable.getSelection();
    insertionPoint = $(lastSelection.endContainer).parentsUntil('.richtext').last();
    var elem;
    if (typeof language == 'undefined') {
        elem = '<pre><code>' + lastSelection + '</code></pre>';
    } else {
        elem = '<pre><code class="hljs ' + language + '">' + lastSelection + '</code></pre>';
    }
    var node = lastSelection.createContextualFragment(elem);
    lastSelection.deleteContents();
    lastSelection.insertNode(node);
    return widget.options.editable.element.trigger('change');
}

(function() {
    (function($) {
        return $.widget('IKS.codebutton', {
            options: {
                uuid: '',
                editable: null
            },
            populateToolbar: function(toolbar) {
                var button;

                widget = this;

                button = $('<span></span>');
                languages = ['python', 'javascript']
                button.hallobutton({
                    uuid: this.options.uuid,
                    editable: this.options.editable,
                    label: 'Code Block',
                    icon: 'fa fa-code',
                    command: null
                });
                toolbar.append(button);
                for (var i = 0; i < languages.length; i++) {
                    language_button = $('<span data-language="' + languages[i] + '"></span>');
                    language_button.hallobutton({
                        uuid: this.options.uuid,
                        editable: this.options.editable,
                        label: languages[i],
                        icon: 'code-icon code-icon-' + languages[i],
                        command: null
                    });
                    language_button.on('click', insertCodeblock);
                    toolbar.append(language_button);
                }
                button.on("click", insertCodeblock);
            }
        });
    })(jQuery);
}).call(this);

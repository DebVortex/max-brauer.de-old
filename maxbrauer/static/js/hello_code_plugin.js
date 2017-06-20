var widget;

function intertLanguageCodeblock(event) {
    var insertionPoint, lastSelection;
    language = $(event.currentTarget).data('language')
    lastSelection = widget.options.editable.getSelection();
    insertionPoint = $(lastSelection.endContainer).parentsUntil('.richtext').last();
    var elem;
    elem = '<pre><code class="hljs ' + language + '">' + lastSelection + '</code></pre>';
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
                    label: 'Inline Code Block',
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
                    language_button.on('click', intertLanguageCodeblock);
                    toolbar.append(language_button);
                }
                button.on("click", function (event) {
                    var insertionPoint, lastSelection;
                    language = $(event.currentTarget).data('language')
                    lastSelection = widget.options.editable.getSelection();
                    insertionPoint = $(lastSelection.endContainer).parentsUntil('.richtext').last();
                    var elem;
                    elem = '<code>' + lastSelection + '</code></pre>';
                    var node = lastSelection.createContextualFragment(elem);
                    lastSelection.deleteContents();
                    lastSelection.insertNode(node);
                    return widget.options.editable.element.trigger('change');
                }
            );
            }
        });
    })(jQuery);
}).call(this);

from django.utils.html import format_html, format_html_join
from django.conf import settings
from wagtail.wagtailcore import hooks
from wagtail.wagtailcore.whitelist import allow_without_attributes, attribute_rule


def whitelister_element_rules():
    return {
        'pre': allow_without_attributes,
        'code': attribute_rule({'class': True}),
    }


def editor_js():
    js_files = [
        'js/hello_code_plugin.js',
    ]
    js_includes = format_html_join('\n', '<script src="{0}{1}"></script>',
        ((settings.STATIC_URL, js_file) for js_file in js_files)
    )
    return js_includes + format_html(
        """
        <script>
            registerHalloPlugin('codebutton');
        </script>
        """
    )


def editor_css():
    cs_files = [
        'css/icons.css',
        'highlightjs/styles/monokai_sublime.css',
    ]
    return format_html_join('\n', '<link rel="stylesheet" href="{0}{1}">',
        ((settings.STATIC_URL, cs_file) for cs_file in cs_files)
    )


hooks.register('construct_whitelister_element_rules', whitelister_element_rules)
hooks.register('insert_editor_js', editor_js)
hooks.register('insert_editor_css', editor_css)

from django import template
from django.template.loader import get_template

register = template.Library()


def site_menu(user=None, calling_page=None):
    template = get_template('blogutils/site_menu.html')
    return template.render(
        context={
            'root': calling_page.get_site().root_page,
            'current_page': calling_page,
            'user': user
        }
    )

register.simple_tag(site_menu)

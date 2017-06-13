from django.apps import AppConfig
from django.utils.translation import ugettext_lazy as _


class BlogUtilsConfig(AppConfig):
    """Configuration for blogutils app."""

    name = 'maxbrauer.apps.blogutils'
    verbose_name = _("Blogutils")

    def ready(self):
        from . import wagtails_hooks

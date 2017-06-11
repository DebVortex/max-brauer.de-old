from django.apps import AppConfig
from django.utils.translation import ugettext_lazy as _


class PagesConfig(AppConfig):
    """Configuration for pages app."""

    name = 'maxbrauer.apps.pages'
    verbose_name = _("Pages")

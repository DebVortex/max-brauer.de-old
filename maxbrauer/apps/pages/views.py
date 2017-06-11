from django.shortcuts import get_object_or_404
from django.views.generic import RedirectView

from wagtail.wagtailcore.models import Page


class IndexView(RedirectView):
    def get_redirect_url(self):
        return get_object_or_404(Page, slug='blog').url

# -*- coding: utf-8 -*-
from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin

from wagtail.contrib.wagtailsitemaps.views import sitemap
from wagtail.wagtailadmin import urls as wagtailadmin_urls
from wagtail.wagtailcore import urls as wagtail_urls
from wagtail.wagtaildocs import urls as wagtaildocs_urls

from maxbrauer.apps.pages.views import IndexView


urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^wagtail-admin/', include(wagtailadmin_urls)),
    url(r'^documents/', include(wagtaildocs_urls)),

    url(r'^blog/', include('blog.urls', namespace="blog")),

    url('^sitemap\.xml$', sitemap, name="sitemap"),

    url('^$', IndexView.as_view()),

    url(r'', include(wagtail_urls)),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

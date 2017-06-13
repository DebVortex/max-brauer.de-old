#!/usr/bin/env python
# -*- coding: utf-8 -*-
import os
from codecs import open

from setuptools import find_packages, setup

BASE_DIR = os.path.dirname(os.path.abspath(__file__))


def read(*paths):
    """Build a file path from *paths and return the contents."""
    with open(os.path.join(*paths), 'r', 'utf-8') as f:
        return f.read()

extras_require = {
    'mailgun': [
        'django-mailgun==0.8.0',
    ],
}

requires = [
    'Django==1.11.1',
    'dj-database-url==0.3.0',
    'django-braces==1.8.1',
    'django-compressor==2.1.1',
    'django-configurations==1.0',
    'django-crispy-forms==1.5.2',
    'django-model-utils==2.4',
    'django-sass-processor==0.5.4',
    'envdir==0.7',
    'psycopg2==2.6.1',
    'pytz==2015.7',
    'rules==1.1.1',
    'libsass==0.12.3',
    'wagtail==1.10.1',
    'wagtail-blog==1.6.9',
]

setup(
    name='maxbrauer',
    version='0.1.0',
    description='A short description of the project.',
    long_description=read(BASE_DIR, 'README.rst'),
    author='Max Brauer',
    author_email='max@max-brauer.de',
    packages=find_packages(),
    include_package_data=True,
    scripts=['manage.py'],
    install_requires=requires,
    license='BSD',
    zip_safe=False,
    classifiers=[
        'Framework :: Django',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: BSD License',
        'Natural Language :: English',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Programming Language :: Python :: 2',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: Implementation :: CPython',
    ],
)

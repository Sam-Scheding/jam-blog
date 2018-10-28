from django.shortcuts import render
from django.views import generic
from apps.blog.models import Article

class RootView(generic.ListView):

    model = Article
    template_name = 'blog_home.html'
    context_object_name = 'articles'

class ArticleView(generic.DetailView):

    model = Article
    template_name = 'read_article.html'
    context_object_name = 'article'

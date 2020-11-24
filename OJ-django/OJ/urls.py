"""OJ URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.contrib import admin
from django.urls import include, path
from django.conf.urls import url, include
from rest_framework import routers
from rest_framework_jwt.views import obtain_jwt_token
from OJ_app import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'questions', views.QuestionViewSet)
router.register(r'answers', views.AnswerViewSet)
router.register(r'comments', views.CommentViewSet)
router.register(r'userExtensions', views.UserExtensionViewSet)
router.register(r'testwjls', views.TestWJLViewSet)

urlpatterns = [
    # path('', include('OJ_app.urls')),
    path('admin/', admin.site.urls),  # 后台管理页面 &&  Background management page
    url(r'^', include(router.urls)),  # 设置包括路由注册页面 && Settings include routing registration page
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')), # 设置api页面目录 && Set api page directory
    path('users/getstatus', views.Users.get_status),  # 返回状态 是否登录 && Return current login status
    path('users/login', views.Users.login_user),  # 登录 && login
    path('users/logout', views.Users.logout_user),  # 注销 && login out
    path('users/register', views.Users.register),  # 注册 && register
]

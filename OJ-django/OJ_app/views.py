import json

from django.contrib.auth import authenticate, logout, login
from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.models import User
from rest_framework.generics import GenericAPIView
from rest_framework.views import APIView
from rest_framework.mixins import CreateModelMixin,ListModelMixin,RetrieveModelMixin,DestroyModelMixin,UpdateModelMixin
from OJ_app import models
from OJ_app.models import UserExtension, Question, Answer, Comment, TestWJL
from OJ_app.serializers import UserExtensionSerializer, QuestionSerializer, AnswerSerializer, CommentSerializer, \
    UserSerializer, TestWJLSerializer
from rest_framework import viewsets
import time, _json


# Create your views here.

# class AuthViewSet(APIView):
#     def post(self, request, *args, **kwargs):
#         ret = {'code': 1000, 'msg': None}
#         try:
#             # 参数是datadict 形式
#             usr = request.data.get('username')
#             pas = request.data.get('password')
#
#             # usr = request._request.POST.get('username')
#             # pas = request._request.POST.get('password')
#
#             # usr = request.POST.get('username')
#             # pas = request.POST.get('password')
#
#             print(usr)
#             obj = models.User.objects.filter(username=usr, password=pas).first()
#             print(obj)
#             print(type(obj))
#             print(obj.username)
#             print(obj.password)
#             if not obj:
#                 ret['code'] = '1001'
#                 ret['msg'] = '用户名或者密码错误'
#                 return JsonResponse(ret)
#                 # 里为了简单，应该是进行加密，再加上其他参数
#             token = str(time.time()) + usr
#             print(token)
#             models.userToken.objects.update_or_create(username=obj, defaults={'token': token})
#             ret['code'] = '1000'
#             ret['msg'] = '登录成功'
#             # ret['token'] = token
#         except Exception as e:
#             ret['code'] = '1002'
#             ret['msg'] = '请求异常'
#         return JsonResponse(ret)

class Users:
    @staticmethod
    def get_status(request):
        if request.user.is_authenticated:
            return JsonResponse({
                "status": 0,
                "username": str(request.user),
                "email": str(request.user.email),
            })
        else:
            return JsonResponse({
                "status": 1
            })

    @staticmethod
    def login_user(request):
        if request.method == "POST":
            data = json.loads(request.body)
            username = data.get("username")
            password = data.get("password")
            if username is not None and password is not None:
                islogin = authenticate(request, username=username, password=password)
                if islogin:
                    login(request, islogin)
                    return JsonResponse({
                        "status": 0,
                        "message": "Login Success",
                        "username": username
                    })
                else:
                    return JsonResponse({
                        "status": 1,
                        "message": "登录失败, 请检查用户名或者密码是否输入正确."
                    })
            else:
                return JsonResponse({
                    "status": 2,
                    "message": "参数错误"
                })

    @staticmethod
    def logout_user(request):
        logout(request)
        return JsonResponse({
            "status": 0
        })

    @staticmethod
    def register(request):
        if request.method == "POST":
            data = json.loads(request.body)
            if request.GET.get("select") is not None:
                select_username = data.get("select_username")
                print(select_username)
                try:
                    User.objects.get(username=select_username)
                    return JsonResponse({
                        "status": 0,
                        "is_indb": 1
                    })
                except:
                    return JsonResponse({
                        'status': 0,
                        "is_indb": 0
                    })
            username = data.get("username")
            password = data.get("password")
            email = data.get("email")
            if username is not None and password is not None and email is not None:
                try:
                    user = User.objects.create_user(username=username, password=password, email=email)
                    user.save()
                    login_user = authenticate(request, username=username, password=password)
                    if login_user:
                        login(request, login_user)
                        return JsonResponse({
                            "status": 0,
                            "message": "Register and Login Success"
                        })

                except:
                    return JsonResponse({
                        "status": 2,
                        "message": "注册失败, 该用户名已经存在."
                    })

        else:
            return JsonResponse({
                "status": 1,
                "message": "error method"
            })

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserExtensionViewSet(viewsets.ModelViewSet):
    queryset = UserExtension.objects.all()
    serializer_class = UserExtensionSerializer

# class UserAPIViewSet(APIView):
#     def post

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class AnswerViewSet(viewsets.ModelViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class TestWJLViewSet(viewsets.ModelViewSet):
    queryset = TestWJL.objects.all()
    serializer_class = TestWJLSerializer

# class TestWJLview(CreateModelMixin,ListModelMixin,GenericAPIView):
#     queryset = models.TestWJL.objects.all()
#     serializer_class = TestWJLSerializer
#


def dist(request):
    return redirect('index.html')
# def index(request):

# return JsonResponse()

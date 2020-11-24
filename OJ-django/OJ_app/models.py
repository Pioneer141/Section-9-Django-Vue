from django.db import models
from django.contrib.auth.models import User

# Create your models here.

# class User(models.Model):
#     username = models.CharField(max_length=30, unique=True)  # 用户名
#     password = models.CharField(max_length=32)
#     student_id = models.CharField(max_length=30, null=True, blank=True, unique=True)  # 学号
#     personname = models.CharField(max_length=30, null=True, blank=True)  # 姓名
#     ranking = models.CharField(max_length=30)  # 排名
#     score = models.IntegerField(max_length=30)  # 分数
#     Question_ID = models.ManyToManyField(Question, max_length=30)  # 问题的id
#     Answer_ID = models.ManyToManyField(Answer, max_length=30)  # 回答的id
#     store = models.IntegerField(max_length=9999, null=True)  # 收藏数
#     qcount = models.IntegerField(max_length=9999, null=True)  # 提问次数
#     acount = models.IntegerField(max_length=9999, null=True)  # 回答次数
#
#     class Meta:
#         db_table = 'user'
#         verbose_name = verbose_name_plural = '用户信息表'
from django.db.models.signals import post_save
from django.dispatch import receiver


class userToken(models.Model):
    username = models.OneToOneField(to='User', on_delete=models.DO_NOTHING)
    token = models.CharField(max_length=60)

    class Meta:
        db_table = 'user_token'
        verbose_name = verbose_name_plural = '用户token表'


class Question(models.Model):
    # questioner = models.ForeignKey(User, on_delete=models.CASCADE)  # 提问者 && questioner
    create_time = models.CharField(max_length=300, null=True, blank=True) # 问题创建时间 && Issue creation time
    questionid = models.CharField(max_length=300, null=True, blank=True)  # 问题编号 && Question number
    tjbh = models.CharField(max_length=300, null=True, blank=True)  # 提交编号 && Submission number
    wtms = models.CharField(max_length=3000, null=True, blank=True)  # 问题描述 && Problem Description
    rtype = models.CharField(max_length=3000, null=True, blank=True) # 错误类型 && Error type
    count = models.IntegerField(null=True, blank=True) # 回答次数 && Number of answers
    stdnb = models.CharField(max_length=30, null=True, blank=True) # 学号 && student number
    create_week1time = models.CharField(max_length=3000, null=True, blank=True) # 创建时间（周） && Creation time (weeks)


class Comment(models.Model):
    content = models.CharField(max_length=3000)  # 内容
    creates_time = models.TimeField()  # 创建时间
    Reviewers = models.ForeignKey(User, on_delete=models.CASCADE)  # 评论者


class Rank(models.Model):
    stdnb = models.CharField(max_length=30, null=True, blank=True)
    stuname = models.CharField(max_length=30, null=True, blank=True)
    count = models.IntegerField(default=0)
    credit = models.IntegerField(default=0)


class Answer(models.Model):
    # CATEGORY = (
    #     ('array', 'array'),  # 数组
    #     ('Pointer', 'Pointer'),  # 指针
    #     ('Linked list', 'Linked list'),  # 链表
    #     ('Stack', 'Stack'),  # 栈
    #     ('queue', 'queue'),  # 队列
    #     ('Binary tree', 'Binary tree'),  # 二叉树
    #     ('chart', 'chart'),  # 图
    #     ('recursive algorithm', 'recursive algorithm'),  # 递归算法
    #     ('dynamic programming', 'dynamic programming'),  # 动态规划
    #     ('other', 'other')  # 其它
    # )
    # respondents = models  # 回答者
    # # Correspondence_problem = models.ForeignKey(Question, on_delete=models.CASCADE,
    # #                                            related_name='Correspondence_problem')  # 对应的问题
    # tjbh = models.CharField(max_length=30, null=True, blank=True)
    # create_time = models.TimeField()  # 创建时间
    # Debug_successful_code = models.CharField(max_length=3000)  # 调试成功的代码
    # adetail = models.ForeignKey(Comment, on_delete=models.CASCADE)  # 评论
    # resolvent = models.CharField(max_length=30)  # 解决所用的方法
    # getscore = models.IntegerField(default=1)
    tjbh = models.CharField(max_length=300, null=True, blank=True)
    andetail = models.CharField(max_length=3000, null=True, blank=True)
    answerer = models.CharField(max_length=3000, null=True, blank=True)
    getscore = models.IntegerField(null=True, blank=True,default=0)
    antime = models.CharField(max_length=3000, null=True, blank=True)


class UserExtension(models.Model):
    # user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='extension')

    student_id = models.CharField(max_length=30, null=True, blank=True, unique=True)  # 学号
    personname = models.CharField(max_length=30, null=True, blank=True)  # 姓名
    ranking = models.CharField(max_length=30)  # 排名
    score = models.IntegerField(null=True,blank=True,default=0)  # 分数
    Question_ID = models.ManyToManyField(Question, max_length=30,null=True,blank=True)  # 问题的id
    Answer_ID = models.ManyToManyField(Answer, max_length=30,null=True,blank=True)  # 回答的id
    store = models.IntegerField(null=True,blank=True,default=0)  # 收藏数
    qcount = models.IntegerField( null=True,blank=True,default=0)  # 提问次数
    acount = models.IntegerField( null=True,blank=True,default=0)  # 回答次数
    # # @receiver(post_save, sender=User)
    # # def create_user_extension(sender, instance, created, **kwargs):
    # #     if created:
    # #         UserExtension.objects.create(user=instance)
    # #     else:
    # #         instance.extension.save()


class TestWJL(models.Model):
    youarefree = models.CharField(max_length=1000, null=True)
    number = models.IntegerField(null=True)


class User(models.Model):
    username = models.CharField(max_length=30, unique=True)  # 用户名
    password = models.CharField(max_length=32)

    student_id = models.CharField(max_length=30, null=True, blank=True, unique=True)  # 学号
    personname = models.CharField(max_length=30, null=True, blank=True)  # 姓名
    ranking = models.CharField(max_length=30)  # 排名
    score = models.IntegerField(default=0)  # 分数
    Question_ID = models.ManyToManyField(Question, max_length=30)  # 问题的id
    Answer_ID = models.ManyToManyField(Answer, max_length=30)  # 回答的id
    store = models.IntegerField(default=0, null=True, blank=True)  # 收藏数
    qcount = models.IntegerField(default=0, null=True, blank=True)  # 提问次数
    acount = models.IntegerField(default=0, null=True, blank=True)  # 回答次数

    class Meta:
        db_table = 'user'
        verbose_name = verbose_name_plural = '用户信息表'
